import { Container, Typography, Box } from "@mui/material";
import React from "react";
import ResponsiveHeading from "./ResponsiveHeading";

const Airdrop = () => {
  return (
    <div className="w-full">
      <Container maxWidth="xl" className="px-4 lg:px-0">
        {/* Outer Border - Dark Blue/Purple */}
        <div className="w-full border-[10px] sm:border-[15px] lg:border-[25px] neon-frame rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-gradient-to-br from-blue-900 to-purple-900">
          {/* Content Area */}
          <div className="w-full bg-gradient-to-br from-slate-900 to-slate-800 p-6 sm:p-10 lg:p-20 rounded-xl sm:rounded-2xl lg:rounded-2xl">
            {/* Title */}
            <div className="mb-4 sm:mb-10 lg:mb-12 flex justify-center">
              <ResponsiveHeading>KATTY AIRDROP</ResponsiveHeading>
            </div>
            <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
              It pays to be a Katty! Some $Katty token will be airdropped to
              active Katana users as well as power users of our partner projects
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Airdrop;
