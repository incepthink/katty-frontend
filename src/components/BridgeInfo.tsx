"use client";

import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import ResponsiveHeading from "./ResponsiveHeading";

const BridgeInfo = () => {
  const arraya = [
    "/assets/bridge1.png",
    "/assets/bridge1.png",
    "/assets/bridge1.png",
    "/assets/bridge1.png",
  ];

  return (
    <div className="">
      <Container
        maxWidth="xl"
        className="h-full justify-center flex flex-col gap-12 lg:gap-24 items-center px-4 lg:px-0"
      >
        {/* <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left">
          Bridging funds over to katana
        </h2> */}
        <ResponsiveHeading>Bridging funds over to katana</ResponsiveHeading>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:flex lg:gap-12 xl:gap-16 2xl:gap-20 gap-8 w-full justify-items-center">
          {arraya.map((item, i) => {
            return (
              <div key={i} className="flex flex-col items-center gap-6">
                <div className="bg-white h-72 w-48 md:h-80 md:w-56 lg:h-80 lg:w-52 xl:h-96 xl:w-64 2xl:h-96 2xl:w-64 rounded-3xl overflow-hidden relative">
                  <Image src={item} fill alt="step" className="object-cover" />
                </div>
                <p className="text-lg md:text-xl font-medium uppercase">
                  Step {i}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default BridgeInfo;
