import { Box, Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import XIcon from "@mui/icons-material/X";
import TelegramIcon from "@mui/icons-material/Telegram";

const Landing = () => {
  return (
    <div className="h-screen black-cyberpunk relative">
      <div className="absolute w-full h-full -z-1">
        <Image
          src="/assets/home1.png"
          alt="Home image"
          //   width={1920} // Required by Next.js
          //   height={1080} // Required by Next.js
          //   className="!h-full !w-auto mx-auto" // Force 100% height, auto width
          //   style={{ height: "100%", width: "auto" }} // CSS override
          fill
          className="object-cover"
        />
      </div>

      <Container
        maxWidth="lg"
        className="h-full flex flex-col justify-center pt-20"
      >
        <Box maxWidth="sm" className="flex flex-col gap-12">
          <p className="text-4xl font-black">#WELIKETHEKAT</p>

          <h1 className="text-8xl font-extrabold">
            Welcome to the world of Katty.
          </h1>

          <div>
            <p className="text-xl font-bold mb-4">OFFICIAL LINKS</p>
            <div className="flex gap-6">
              <div className="p-3 rounded-full border-2 border-white">
                <XIcon />
              </div>
              <div className="p-3 rounded-full border-2 border-white">
                <TelegramIcon />
              </div>
            </div>
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default Landing;
