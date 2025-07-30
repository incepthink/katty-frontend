import { Container } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Container className="w-full h-full flex items-center justify-center">
      <div className="flex items-end gap-2">
        <p className="text-xl">2025</p>
        <p className="text-xl">©</p>
        <h2 className="text-4xl font-black">Katty</h2>
      </div>
    </Container>
  );
};

export default Footer;
