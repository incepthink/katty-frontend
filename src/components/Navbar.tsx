import Image from "next/image";
import React from "react";
import XIcon from "@mui/icons-material/X";
import TelegramIcon from "@mui/icons-material/Telegram";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center pt-12 sm:pt-16 md:pt-20 lg:pt-24 px-4 sm:px-5 absolute top-0 z-50 w-full">
      {/* Logo and Brand */}
      <div className="flex gap-2 sm:gap-3 items-center">
        <div className="border-black border-2 rounded-full">
          <Image
            src={"/assets/logo.png"}
            width={50}
            height={50}
            alt="home"
            className="sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] lg:w-[75px] lg:h-[75px]"
          />
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          KATTY
        </h1>
      </div>

      {/* Official Links */}
      <div className="flex flex-col items-end gap-2">
        <p className="text-xs sm:text-sm md:text-base font-bold hidden sm:block">
          OFFICIAL LINKS
        </p>
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
      </div>
    </div>
  );
};

export default Navbar;
