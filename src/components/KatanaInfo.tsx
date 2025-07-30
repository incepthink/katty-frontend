import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import GradientButton from "./GradientButton";
import ResponsiveHeading from "./ResponsiveHeading";

const KatanaInfo = () => {
  return (
    <div className="">
      <Container
        maxWidth="lg"
        className="flex flex-col justify-center items-center h-full gap-16 lg:gap-24 px-4 lg:px-0"
      >
        <ResponsiveHeading>Katana is the Future of Defi</ResponsiveHeading>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">
          <Image
            src={"/assets/katana-info.png"}
            width={600}
            height={0}
            alt="info"
            className="w-full max-w-[400px] lg:w-[500px] h-auto"
          />
          <div className="flex flex-col items-center gap-6 lg:gap-10">
            <div className="text-md sm:text-lg lg:text-xl font-medium text-justify space-y-4">
              <p>
                Katana is a DeFi-first chain with high yield and deep liquidity;
                deep enough to provide liquidity for the entire Agglayer
                ecosystem.
              </p>

              <p>
                Katana is a paradigm shift—aligning apps, users, and chain
                revenue from day one.
              </p>

              <p>Katana is built jointly by Polygon Labs and GSR</p>
            </div>

            <a
              href="https://bridge.katana.network/"
              target="_blank"
              className="w-full"
            >
              <GradientButton className="w-full">
                Bridge to Katana
              </GradientButton>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default KatanaInfo;
