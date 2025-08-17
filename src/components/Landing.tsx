"use client";

import { Box, Container, TextField, Button, Modal, Alert } from "@mui/material";
import {
  Close as CloseIcon,
  Telegram as TelegramIcon,
} from "@mui/icons-material";
import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";
import GradientButton from "./GradientButton";

interface FormData {
  walletAddress: string;
  telegram: string;
}

interface FormErrors {
  walletAddress: string;
  telegram: string;
}

type FormField = keyof FormData;

const Landing = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    walletAddress: "",
    telegram: "",
  });
  const [errors, setErrors] = useState<FormErrors>({
    walletAddress: "",
    telegram: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState<{
    show: boolean;
    type: "success" | "error";
    message: string;
  }>({
    show: false,
    type: "success",
    message: "",
  });

  const validateWalletAddress = (address: string): string => {
    if (!address) return "Wallet address is required";
    if (!address.startsWith("0x")) return "Wallet address must start with 0x";
    if (address.length !== 42)
      return "Wallet address must be 42 characters long";
    if (!/^0x[a-fA-F0-9]{40}$/.test(address))
      return "Invalid wallet address format";
    return "";
  };

  const validateTelegram = (telegram: string): string => {
    if (!telegram) return "Telegram username is required";
    if (!telegram.startsWith("@")) return "Telegram username must start with @";
    if (telegram.length < 6)
      return "Telegram username must be at least 5 characters after @";
    return "";
  };

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Opening modal");
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setFormData({ walletAddress: "", telegram: "" });
    setErrors({ walletAddress: "", telegram: "" });
    setIsSubmitting(false);
    setAlert({ show: false, type: "success", message: "" });
  };

  const handleInputChange =
    (field: FormField) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));

      // Clear error when user starts typing
      if (errors[field]) {
        setErrors((prev) => ({
          ...prev,
          [field]: "",
        }));
      }

      // Clear alert when user starts typing
      if (alert.show) {
        setAlert({ show: false, type: "success", message: "" });
      }

      // Real-time validation for wallet address
      if (field === "walletAddress" && value) {
        const error = validateWalletAddress(value);
        setErrors((prev) => ({
          ...prev,
          [field]: error,
        }));
      }

      // Real-time validation for telegram
      if (field === "telegram" && value) {
        const error = validateTelegram(value);
        setErrors((prev) => ({
          ...prev,
          [field]: error,
        }));
      }
    };

  const handleSubmit = async () => {
    // Validate all fields
    const walletError = validateWalletAddress(formData.walletAddress);
    const telegramError = validateTelegram(formData.telegram);

    setErrors({
      walletAddress: walletError,
      telegram: telegramError,
    });

    // Only submit if no errors
    if (!walletError && !telegramError) {
      setIsSubmitting(true);
      setAlert({ show: false, type: "success", message: "" });

      try {
        const response = await axios.post("/api/waitlist", {
          walletAddress: formData.walletAddress,
          telegram: formData.telegram,
        });

        if (response.data.success) {
          setAlert({
            show: true,
            type: "success",
            message:
              response.data.message || "Successfully joined the waitlist!",
          });

          // Auto close modal after 3 seconds
          setTimeout(() => {
            handleCloseModal();
          }, 2000);
        }
      } catch (error: any) {
        console.error("Submission error:", error);

        let errorMessage = "Something went wrong. Please try again.";

        if (error.response?.data?.error) {
          errorMessage = error.response.data.error;
        } else if (error.message) {
          errorMessage = error.message;
        }

        setAlert({
          show: true,
          type: "error",
          message: errorMessage,
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
      <div className="min-h-screen h-screen black-cyberpunk relative">
        <div className="absolute w-full h-full -z-1">
          <Image
            src="/assets/home1.png"
            alt="Home image"
            fill
            className="object-cover object-center sm:object-center"
            priority
          />
        </div>

        <Container
          maxWidth="lg"
          className="h-full flex flex-col justify-center pt-20 px-4 sm:px-6 relative z-10"
        >
          <Box
            maxWidth="sm"
            className="flex flex-col gap-4 sm:gap-8 md:gap-12 w-full mx-auto sm:mx-0 sm:items-start"
          >
            {/* Main heading with translucent background */}
            <div className="relative">
              <div className="absolute inset-0 bg-black/30 backdrop-blur-xs rounded-lg -m-2 sm:-m-3 md:-m-3"></div>
              <h1 className="relative text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight text-center sm:text-left max-w-md sm:max-w-lg md:max-w-none text-white p-2 sm:p-3 md:p-0">
                Katty: The Last Meowjin of Katana
              </h1>
            </div>
            <button onClick={handleOpenModal}>
              <GradientButton className="sm:w-96 w-full text-lg! md:text-xl!">
                Join Waitlist (for a surprise…)
              </GradientButton>
            </button>
          </Box>
        </Container>
      </div>

      {/* MUI Modal */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="waitlist-modal-title"
        aria-describedby="waitlist-modal-description"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: { xs: 1, sm: 2 },
          zIndex: 9999,
        }}
        disableScrollLock={true}
      >
        <Box
          sx={{
            bgcolor: "rgba(0, 0, 0, 0.98)",
            backdropFilter: "blur(20px)",
            borderRadius: { xs: "16px", sm: "20px" },
            p: { xs: 3, sm: 4 },
            maxWidth: { xs: "95vw", sm: 500 },
            width: "100%",
            maxHeight: { xs: "90vh", sm: "80vh" },
            overflow: "auto",
            position: "relative",
            outline: "none",
            boxShadow:
              "0 20px 40px rgba(0, 0, 0, 0.8), 0 0 60px rgba(132, 94, 194, 0.3)",
            background:
              "linear-gradient(135deg, rgba(0, 0, 0, 0.98) 0%, rgba(20, 20, 40, 0.95) 100%)",
          }}
        >
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: { xs: 2, sm: 3 },
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 1, sm: 0 },
            }}
          >
            <Box
              id="waitlist-modal-title"
              sx={{
                color: "transparent",
                background: "linear-gradient(45deg, #FF6B6B, #4ECDC4, #845EC2)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                fontSize: { xs: "1.5rem", sm: "2rem" },
                fontWeight: "bold",
                textAlign: "center",
                textShadow: "0 0 20px rgba(132, 94, 194, 0.5)",
                order: { xs: 2, sm: 1 },
              }}
            >
              Join the Waitlist
            </Box>
            <Button
              onClick={handleCloseModal}
              sx={{
                minWidth: "auto",
                p: { xs: 0.5, sm: 1 },
                color: "#FF6B6B",
                borderRadius: "50%",
                order: { xs: 1, sm: 2 },
                alignSelf: { xs: "flex-end", sm: "auto" },
                "&:hover": {
                  backgroundColor: "rgba(255, 107, 107, 0.1)",
                  transform: "scale(1.1)",
                  boxShadow: "0 0 15px rgba(255, 107, 107, 0.5)",
                },
                transition: "all 0.3s ease",
              }}
            >
              <CloseIcon sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }} />
            </Button>
          </Box>

          {/* Alert Message */}
          {alert.show && (
            <Box sx={{ mb: { xs: 2, sm: 3 } }}>
              <Alert
                severity={alert.type}
                sx={{
                  backgroundColor:
                    alert.type === "success"
                      ? "rgba(76, 205, 196, 0.1)"
                      : "rgba(255, 107, 107, 0.1)",
                  border: `1px solid ${
                    alert.type === "success"
                      ? "rgba(76, 205, 196, 0.3)"
                      : "rgba(255, 107, 107, 0.3)"
                  }`,
                  color: alert.type === "success" ? "#4ECDC4" : "#FF6B6B",
                  borderRadius: "12px",
                  "& .MuiAlert-icon": {
                    color: alert.type === "success" ? "#4ECDC4" : "#FF6B6B",
                  },
                }}
              >
                {alert.message}
              </Alert>
            </Box>
          )}

          {/* Form Fields */}
          <Box sx={{ mb: { xs: 2, sm: 3 } }}>
            <TextField
              fullWidth
              label="Wallet Address"
              variant="outlined"
              value={formData.walletAddress}
              onChange={handleInputChange("walletAddress")}
              placeholder="0x42165b467602Ef1DA901cC4990cfF6E275cC357C"
              error={!!errors.walletAddress}
              helperText={
                errors.walletAddress ||
                `${formData.walletAddress.length}/42 characters`
              }
              disabled={isSubmitting}
              sx={{
                mb: { xs: 2, sm: 3 },
                "& .MuiOutlinedInput-root": {
                  color: "white",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "12px",
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  "& fieldset": {
                    borderColor: errors.walletAddress
                      ? "#f44336"
                      : "rgba(255, 255, 255, 0.2)",
                    borderWidth: "2px",
                  },
                  "&:hover fieldset": {
                    borderColor: errors.walletAddress
                      ? "#f44336"
                      : "rgba(255, 107, 107, 0.5)",
                    boxShadow: errors.walletAddress
                      ? "0 0 10px rgba(244, 67, 54, 0.2)"
                      : "0 0 10px rgba(255, 107, 107, 0.2)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: errors.walletAddress ? "#f44336" : "#FF6B6B",
                    boxShadow: errors.walletAddress
                      ? "0 0 15px rgba(244, 67, 54, 0.3)"
                      : "0 0 15px rgba(255, 107, 107, 0.3)",
                  },
                  "&.Mui-disabled": {
                    color: "rgba(255, 255, 255, 0.5)",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: errors.walletAddress
                    ? "#f44336"
                    : "rgba(255, 255, 255, 0.7)",
                  fontWeight: 500,
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  "&.Mui-focused": {
                    color: errors.walletAddress ? "#f44336" : "#FF6B6B",
                  },
                  "&.Mui-disabled": {
                    color: "rgba(255, 255, 255, 0.3)",
                  },
                },
                "& .MuiFormHelperText-root": {
                  color: errors.walletAddress
                    ? "#f44336"
                    : "rgba(255, 255, 255, 0.5)",
                  fontSize: "0.75rem",
                },
              }}
            />

            <TextField
              fullWidth
              label="Telegram Username"
              variant="outlined"
              value={formData.telegram}
              onChange={handleInputChange("telegram")}
              placeholder="@yourusername"
              error={!!errors.telegram}
              helperText={errors.telegram}
              disabled={isSubmitting}
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "white",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "12px",
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  "& fieldset": {
                    borderColor: errors.telegram
                      ? "#f44336"
                      : "rgba(255, 255, 255, 0.2)",
                    borderWidth: "2px",
                  },
                  "&:hover fieldset": {
                    borderColor: errors.telegram
                      ? "#f44336"
                      : "rgba(76, 205, 196, 0.5)",
                    boxShadow: errors.telegram
                      ? "0 0 10px rgba(244, 67, 54, 0.2)"
                      : "0 0 10px rgba(76, 205, 196, 0.2)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: errors.telegram ? "#f44336" : "#4ECDC4",
                    boxShadow: errors.telegram
                      ? "0 0 15px rgba(244, 67, 54, 0.3)"
                      : "0 0 15px rgba(76, 205, 196, 0.3)",
                  },
                  "&.Mui-disabled": {
                    color: "rgba(255, 255, 255, 0.5)",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: errors.telegram
                    ? "#f44336"
                    : "rgba(255, 255, 255, 0.7)",
                  fontWeight: 500,
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  "&.Mui-focused": {
                    color: errors.telegram ? "#f44336" : "#4ECDC4",
                  },
                  "&.Mui-disabled": {
                    color: "rgba(255, 255, 255, 0.3)",
                  },
                },
                "& .MuiFormHelperText-root": {
                  color: errors.telegram
                    ? "#f44336"
                    : "rgba(255, 255, 255, 0.5)",
                  fontSize: "0.75rem",
                },
              }}
            />
          </Box>

          {/* Action Buttons */}
          <Box
            sx={{
              display: "flex",
              gap: { xs: 1, sm: 1.5 },
              mb: { xs: 2, sm: 3 },
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Button
              onClick={handleCloseModal}
              variant="outlined"
              fullWidth
              disabled={isSubmitting}
              sx={{
                color: "white",
                borderColor: "rgba(255, 255, 255, 0.3)",
                borderRadius: "12px",
                padding: { xs: "10px", sm: "12px" },
                fontWeight: 600,
                textTransform: "none",
                fontSize: { xs: "0.9rem", sm: "1rem" },
                order: { xs: 2, sm: 1 },
                "&:hover": {
                  borderColor: "rgba(255, 255, 255, 0.6)",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 5px 15px rgba(255, 255, 255, 0.1)",
                },
                "&:disabled": {
                  borderColor: "rgba(255, 255, 255, 0.1)",
                  color: "rgba(255, 255, 255, 0.3)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              variant="contained"
              fullWidth
              disabled={
                !formData.walletAddress ||
                !formData.telegram ||
                !!errors.walletAddress ||
                !!errors.telegram ||
                isSubmitting
              }
              sx={{
                background: isSubmitting
                  ? "rgba(255, 255, 255, 0.1)"
                  : "linear-gradient(45deg, #FF5252, #26C6DA, #7B1FA2)",
                borderRadius: "12px",
                padding: { xs: "10px", sm: "12px" },
                fontWeight: 600,
                textTransform: "none",
                fontSize: { xs: "0.9rem", sm: "1rem" },
                boxShadow: isSubmitting
                  ? "none"
                  : "0 4px 10px rgba(132, 94, 194, 0.3)",
                order: { xs: 1, sm: 2 },
                "&:hover": {
                  background: isSubmitting
                    ? "rgba(255, 255, 255, 0.1)"
                    : "linear-gradient(45deg, #FF5252, #26C6DA, #7B1FA2)",
                  transform: isSubmitting ? "none" : "translateY(-2px)",
                  boxShadow: isSubmitting
                    ? "none"
                    : "0 8px 12px rgba(132, 94, 194, 0.5)",
                },
                "&:disabled": {
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "rgba(255, 255, 255, 0.3)",
                  transform: "none",
                  boxShadow: "none",
                },
                transition: "all 0.3s ease",
              }}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </Box>

          {/* Telegram Link Footer */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pt: { xs: 1.5, sm: 2 },
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <Box
              component="a"
              href="https://t.me/kattymemekatana"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 0.5, sm: 1 },
                color: "rgba(255, 255, 255, 0.7)",
                textDecoration: "none",
                padding: { xs: "6px 12px", sm: "8px 16px" },
                borderRadius: "20px",
                fontSize: { xs: "0.85rem", sm: "1rem" },
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#4ECDC4",
                  backgroundColor: "rgba(76, 205, 196, 0.1)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 5px 15px rgba(76, 205, 196, 0.2)",
                },
              }}
            >
              <TelegramIcon
                sx={{
                  fontSize: { xs: "1rem", sm: "1.2rem" },
                  filter: "drop-shadow(0 0 5px rgba(76, 205, 196, 0.3))",
                }}
              />
              Join our Telegram
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Landing;
