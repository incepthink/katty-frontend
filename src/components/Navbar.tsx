import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex pt-24 px-5 absolute top-0 z-50">
      <div className="flex gap-3 items-center">
        <div className="border-red-600 border-2 rounded-full">
          <Image src={"/assets/logo.png"} width={75} height={75} alt="home" />
        </div>

        <h1 className="text-5xl font-bold ">KATTY</h1>
      </div>
    </div>
  );
};

export default Navbar;
