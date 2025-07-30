import { Box, Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import GradientButton from "./GradientButton";

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
          className="flex flex-col gap-4 sm:gap-8 md:gap-12 w-full mx-auto sm:mx-0 sm:items-start"
        >
          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight text-center sm:text-left max-w-md sm:max-w-lg md:max-w-none">
            Katty: The Last Meowjin of Katana
          </h1>
          <GradientButton className="sm:w-60 text-lg! md:text-xl!">
            Buy Now
          </GradientButton>
        </Box>
      </Container>
    </div>
  );
};

export default Landing;
