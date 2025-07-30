"use client";

import { Box } from "@mui/material";
import React from "react";

export const KatTicker: React.FC = () => {
  const message = "#WELIKETHEKAT 🐱";
  const repeatCount = 20;

  return (
    <Box className="overflow-hidden bg-[#041416] py-3 w-full">
      <Box
        className="whitespace-nowrap flex font-bold text-cyan-300 text-lg tracking-widest"
        sx={{
          display: "inline-flex",
          animation: "marquee 20s linear infinite",
          "@keyframes marquee": {
            "0%": { transform: "translateX(0%)" },
            "100%": { transform: "translateX(-30%)" },
          },
        }}
      >
        {/* Duplicate content twice for seamless looping */}
        {[...Array(2)].map((_, i) => (
          <Box key={i} className="flex">
            {Array.from({ length: repeatCount }).map((_, j) => (
              <span key={j} className="mx-4">
                {message}
              </span>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
