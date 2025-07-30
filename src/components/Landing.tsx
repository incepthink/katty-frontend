import { Box, Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import XIcon from "@mui/icons-material/X";
import TelegramIcon from "@mui/icons-material/Telegram";

const Landing = () => {
  return (
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
          className="flex flex-col gap-6 sm:gap-8 md:gap-12 w-full mx-auto sm:mx-0"
        >
          {/* Hashtag */}
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-center sm:text-left ">
            #WELIKETHEKAT
          </p>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight text-center sm:text-left max-w-md sm:max-w-lg md:max-w-none">
            Welcome to the world of Katty.
          </h1>

          {/* Social links */}
          <div className="text-center sm:text-left">
            <p className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4">
              OFFICIAL LINKS
            </p>
            <div className="flex gap-3 sm:gap-4 md:gap-6 justify-center sm:justify-start">
              <a
                target="_blank"
                href="https://x.com/KattyMemeKatana"
                className="rounded-full"
              >
                <div className="p-2 sm:p-3 rounded-full border-2 border-white hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer">
                  <XIcon className="text-lg sm:text-xl md:text-2xl" />
                </div>
              </a>
              <div className="p-2 sm:p-3 rounded-full border-2 border-white hover:bg-white hover:text-black transition-colors cursor-pointer">
                <a
                  target="_blank"
                  href="https://t.me/kattymemekatana"
                  className="rounded-full"
                >
                  <TelegramIcon className="text-lg sm:text-xl md:text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default Landing;
