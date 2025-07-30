import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import GradientButton from "./GradientButton";

const KatanaInfo = () => {
  return (
    <div className="">
      <Container
        maxWidth="lg"
        className="flex flex-col justify-center items-center h-full gap-16"
      >
        <h2 className="text-5xl font-extrabold uppercase">
          Katana is the Future of Defi
        </h2>
        <div className="flex justify-center items-center gap-16">
          <Image
            src={"/assets/katana-info.png"}
            width={600} // Set your desired width
            height={0} // Set to 0 for auto height
            alt="info"
            className="w-[500px] h-auto" // Tailwind: w-96 = 384px, h-auto for automatic height
          />
          <div className="flex flex-col gap-10">
            <p className="text-xl font-medium text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>

            <GradientButton>Explore Katana</GradientButton>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default KatanaInfo;
