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
            <p className="text-md sm:text-lg lg:text-xl font-medium text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>

            <GradientButton className="w-full">Explore Katana</GradientButton>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default KatanaInfo;
