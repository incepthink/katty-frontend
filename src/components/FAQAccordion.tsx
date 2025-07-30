"use client";

import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ResponsiveHeading from "./ResponsiveHeading";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Katana Protocol?",
    answer:
      "Katana is a next-generation DeFi protocol built on cutting-edge blockchain technology, designed to provide seamless and secure financial services.",
  },
  {
    question: "How do I bridge funds to Katana?",
    answer:
      "You can bridge funds to Katana by connecting your wallet, selecting your source chain, choosing the amount to bridge, and confirming the transaction.",
  },
  {
    question: "What are the fees for using Katana?",
    answer:
      "Katana charges minimal fees for transactions. Bridge fees vary depending on the source chain and network congestion.",
  },
  {
    question: "Is Katana secure?",
    answer:
      "Yes, Katana employs industry-leading security measures including multi-signature wallets, smart contract audits, and decentralized governance.",
  },
  {
    question: "What tokens are supported on Katana?",
    answer:
      "Katana supports a wide range of tokens including ETH, USDC, USDT, and many other popular cryptocurrencies.",
  },
];

const FAQAccordion: React.FC = () => {
  return (
    <div className="w-full pt-8 lg:pt-16">
      <Container maxWidth="lg" className="px-4 lg:px-0">
        <Box className="flex flex-col items-center gap-6 lg:gap-10">
          {/* Title */}
          <div className="mb-4 lg:mb-8">
            <ResponsiveHeading>Frequently Asked Questions</ResponsiveHeading>
          </div>

          {/* Accordion Container */}
          <div className="w-full space-y-3 lg:space-y-4">
            {faqData.map((item, index) => (
              <Accordion
                key={index}
                sx={{
                  background:
                    "linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(22, 33, 62, 0.8) 100%)",
                  border: "1px solid rgba(59, 130, 246, 0.3)",
                  borderRadius: "12px !important",
                  marginBottom: "16px !important",
                  "&:before": {
                    display: "none",
                  },
                  "&.Mui-expanded": {
                    border: "1px solid rgba(59, 130, 246, 0.6)",
                    boxShadow: "0 8px 25px rgba(59, 130, 246, 0.2)",
                  },
                }}
                className="text-white"
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        color: "white",
                        "&:hover": {
                          color: "#3b82f6",
                        },
                      }}
                    />
                  }
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                  sx={{
                    padding: { xs: "12px 16px", lg: "16px 24px" },
                    border: "0px",
                  }}
                >
                  <h6 className="text-base sm:text-lg lg:text-xl font-semibold text-white">
                    {item.question}
                  </h6>
                </AccordionSummary>

                <AccordionDetails
                  sx={{
                    padding: { xs: "0 16px 16px 16px", lg: "0 24px 24px 24px" },
                  }}
                >
                  <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                    {item.answer}
                  </p>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default FAQAccordion;
