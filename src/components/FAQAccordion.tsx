"use client";

import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
    <div className="w-full pt-16">
      <Container maxWidth="lg">
        <Box className="flex flex-col items-center gap-10">
          {/* Title */}
          <div className="mb-8">
            <Typography
              variant="h2"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white"
              sx={{
                background:
                  "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
              }}
            >
              Frequently Asked Questions
            </Typography>
          </div>

          {/* Accordion Container */}
          <div className="w-full  space-y-4">
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
                    padding: "16px 24px",
                    border: "0px",
                  }}
                >
                  <Typography
                    variant="h6"
                    className="text-lg md:text-xl font-semibold text-white"
                  >
                    {item.question}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails
                  sx={{
                    padding: "0 24px 24px 24px",
                  }}
                >
                  <Typography
                    variant="body1"
                    className="text-base md:text-lg text-gray-300 leading-relaxed"
                  >
                    {item.answer}
                  </Typography>
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
