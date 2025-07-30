import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";

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
        className="h-full justify-center flex flex-col gap-24 items-center"
      >
        <h2 className="text-6xl font-bold">Bridging funds over to katana</h2>

        <div className="flex gap-20">
          {arraya.map((item, i): any => {
            return (
              <div className="flex flex-col items-center gap-6">
                <div
                  key={i}
                  className="bg-white h-96 w-64 rounded-3xl overflow-hidden relative"
                >
                  <Image src={item} fill alt="step" className="object-cover " />
                </div>
                <p className="text-xl font-medium uppercase">Step {i}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default BridgeInfo;
