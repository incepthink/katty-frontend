import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex pt-12 sm:pt-16 md:pt-20 lg:pt-24 px-4 sm:px-5 absolute top-0 z-50 w-full">
      <div className="flex gap-2 sm:gap-3 items-center">
        <div className="border-red-600 border-2 rounded-full">
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
    </div>
  );
};

export default Navbar;
