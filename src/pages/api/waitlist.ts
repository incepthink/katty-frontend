// pages/api/waitlist.ts
import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";

// Mongoose Schema
const WaitlistSchema = new mongoose.Schema(
  {
    walletAddress: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v: string) {
          return /^0x[a-fA-F0-9]{40}$/.test(v);
        },
        message: "Invalid wallet address format",
      },
    },
    telegram: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v: string) {
          return v.startsWith("@") && v.length >= 5;
        },
        message: "Invalid Telegram username format",
      },
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
    ipAddress: {
      type: String,
      default: "unknown",
    },
    userAgent: {
      type: String,
      default: "unknown",
    },
  },
  {
    timestamps: true,
  }
);

// Create model or use existing one
const WaitlistSubmission =
  mongoose.models.WaitlistSubmission ||
  mongoose.model("WaitlistSubmission", WaitlistSchema, "waitlist-submissions");

// Database connection
async function connectDB() {
  if (mongoose.connections[0].readyState) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI as string, {
      dbName: "Kattymeme",
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

interface WaitlistRequestBody {
  walletAddress: string;
  telegram: string;
}

interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
  id?: string;
  timestamp?: Date;
  totalSubmissions?: number;
  submissions?: any[];
  stats?: any;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  try {
    await connectDB();

    if (req.method === "POST") {
      const { walletAddress, telegram }: WaitlistRequestBody = req.body;

      // Server-side validation
      if (!walletAddress || !telegram) {
        return res.status(400).json({
          success: false,
          error: "Wallet address and Telegram username are required",
        });
      }

      // Validate wallet address format
      if (!walletAddress.startsWith("0x") || walletAddress.length !== 42) {
        return res.status(400).json({
          success: false,
          error: "Invalid wallet address format",
        });
      }

      // Validate hex format
      if (!/^0x[a-fA-F0-9]{40}$/.test(walletAddress)) {
        return res.status(400).json({
          success: false,
          error: "Invalid wallet address format",
        });
      }

      // Validate telegram format
      if (!telegram.startsWith("@") || telegram.length < 5) {
        return res.status(400).json({
          success: false,
          error: "Invalid Telegram username format",
        });
      }

      // Get client info
      const ipAddress =
        (req.headers["x-forwarded-for"] as string) ||
        (req.headers["x-real-ip"] as string) ||
        req.connection.remoteAddress ||
        "unknown";
      const userAgent = req.headers["user-agent"] || "unknown";

      try {
        // Create new submission
        const submission = new WaitlistSubmission({
          walletAddress,
          telegram,
          ipAddress,
          userAgent,
        });

        // Save to database
        const savedSubmission = await submission.save();

        return res.status(201).json({
          success: true,
          message: "Successfully joined the waitlist!",
          id: savedSubmission._id.toString(),
          timestamp: savedSubmission.timestamp,
        });
      } catch (error: any) {
        console.error("Database save error:", error);

        // Handle duplicate key errors (unique constraint violations)
        if (error.code === 11000) {
          const field = Object.keys(error.keyPattern)[0];
          const message =
            field === "walletAddress"
              ? "This wallet address is already registered"
              : "This Telegram username is already registered";

          return res.status(409).json({
            success: false,
            error: message,
          });
        }

        // Handle validation errors
        if (error.name === "ValidationError") {
          const messages = Object.values(error.errors).map(
            (e: any) => e.message
          );
          return res.status(400).json({
            success: false,
            error: messages.join(", "),
          });
        }

        return res.status(500).json({
          success: false,
          error: "Failed to save submission",
        });
      }
    } else if (req.method === "GET") {
      // Get query parameters
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const skip = (page - 1) * limit;

      // Get total count
      const totalSubmissions = await WaitlistSubmission.countDocuments();

      // Get paginated submissions (excluding sensitive data)
      const submissions = await WaitlistSubmission.find(
        {},
        { ipAddress: 0, userAgent: 0 }
      )
        .sort({ timestamp: -1 })
        .skip(skip)
        .limit(limit)
        .lean();

      // Get some basic stats
      const stats = {
        totalSubmissions,
        currentPage: page,
        totalPages: Math.ceil(totalSubmissions / limit),
        hasNextPage: page < Math.ceil(totalSubmissions / limit),
        hasPrevPage: page > 1,
      };

      return res.status(200).json({
        success: true,
        stats,
        submissions,
        totalSubmissions,
      });
    } else if (req.method === "DELETE") {
      const { id, wallet } = req.query;

      if (!id && !wallet) {
        return res.status(400).json({
          success: false,
          error: "ID or wallet address required",
        });
      }

      let query: any = {};
      if (id) {
        query._id = id;
      } else if (wallet) {
        query.walletAddress = wallet;
      }

      const deletedSubmission = await WaitlistSubmission.findOneAndDelete(
        query
      );

      if (!deletedSubmission) {
        return res.status(404).json({
          success: false,
          error: "Submission not found",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Submission deleted successfully",
      });
    } else {
      return res.status(405).json({
        success: false,
        error: "Method not allowed",
      });
    }
  } catch (error) {
    console.error("API error:", error);
    return res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}
