"use client";

import React from "react";
import { Button, ButtonProps, styled } from "@mui/material";

interface GradientButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const StyledGradientButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(135deg, #ec4899 0%, #3b82f6 50%, #10b981 100%)",
  color: "#ffffff",
  border: "none",
  borderRadius: 8,
  padding: "12px 24px",
  fontWeight: 600,
  textTransform: "none",
  boxShadow: "0 4px 14px 0 rgba(236, 72, 153, 0.3)",
  transition: "all 0.3s ease",
  "&:hover": {
    background:
      "linear-gradient(135deg, #be185d 0%, #2563eb 50%, #059669 100%)",
    boxShadow: "0 6px 20px 0 rgba(236, 72, 153, 0.4)",
    transform: "translateY(-2px)",
  },
  "&:active": {
    transform: "translateY(1px)",
  },
}));

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  ...props
}) => {
  return <StyledGradientButton {...props}>{children}</StyledGradientButton>;
};

export default GradientButton;
