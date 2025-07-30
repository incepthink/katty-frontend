import { Container, Typography, Box } from "@mui/material";
import React from "react";

const Airdrop = () => {
  return (
    <div className="w-full">
      <Container maxWidth="xl">
        {/* Outer Border - Dark Blue/Purple */}
        <div className="w-full border-[25px] neon-frame rounded-4xl bg-gradient-to-br from-blue-900 to-purple-900">
          {/* Inner Border - Lighter Blue */}
          {/* Content Area */}
          <div className="w-full bg-gradient-to-br from-slate-900 to-slate-800 p-20 rounded-2xl">
            {/* Title */}
            <div className="mb-12">
              <Typography
                variant="h2"
                className="text-6xl text-white text-center font-bold"
                sx={{
                  background:
                    "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
                }}
              >
                KATTY AIRDROP
              </Typography>
            </div>
            <p className="text-center text-2xl font-semibold">
              It pays to be a Katty! Some $Katty token will be airdropped to
              active Katana users as well as power users of our partner projects
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Airdrop;
