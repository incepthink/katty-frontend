import { Container } from "@mui/material";
import React from "react";
import XIcon from "@mui/icons-material/X";
import TelegramIcon from "@mui/icons-material/Telegram";

const Footer = () => {
  return (
    <Container className="w-full h-full flex items-center justify-between">
      <div className="flex items-end sm:gap-2 gap-1">
        <h2 className="text-4xl font-black">Katty</h2>
        <p className="sm:text-base text-xs">©</p>
        <p className="sm:text-base text-xs">2025</p>
      </div>
      <div className="flex gap-2 sm:gap-3 md:gap-4">
        <a
          target="_blank"
          href="https://x.com/KattyMemeKatana"
          className="rounded-full"
        >
          <div className="p-1.5 sm:p-2 md:p-2.5 rounded-full border-2 border-white hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer">
            <XIcon className="text-sm sm:text-base md:text-lg lg:text-xl" />
          </div>
        </a>
        <a
          target="_blank"
          href="https://t.me/kattymemekatana"
          className="rounded-full"
        >
          <div className="p-1.5 sm:p-2 md:p-2.5 rounded-full border-2 border-white hover:bg-white hover:text-black transition-colors cursor-pointer">
            <TelegramIcon className="text-sm sm:text-base md:text-lg lg:text-xl" />
          </div>
        </a>
      </div>
    </Container>
  );
};

export default Footer;
