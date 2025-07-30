import Airdrop from "@/components/Airdrop";
import BridgeInfo from "@/components/BridgeInfo";
import FAQAccordion from "@/components/FAQAccordion";
import FooterBg from "@/components/FooterBg";
import KatanaInfo from "@/components/KatanaInfo";
import { KatTicker } from "@/components/KatTicker";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import ResponsiveHeading from "@/components/ResponsiveHeading";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <KatTicker />
      <Box
        px={{ xs: 2, sm: 2, md: 2, lg: 2 }}
        pt={{ xs: 8, sm: 12, md: 16, lg: 20 }}
      >
        <ResponsiveHeading size="sm" mixedContent>
          <span style={{ color: "white" }}>
            In a world where gas is weaponized, yield is a battlefield, and
            chains fracture under greed, only one
          </span>
          <span
            style={{
              background:
                "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {" "}
            remains sharp enough to cut through the noise…
          </span>
        </ResponsiveHeading>
      </Box>
      <div className="flex flex-col items-center gap-16 sm:gap-24 md:gap-32 lg:gap-40 xl:gap-60 pt-16 sm:pt-24 md:pt-30 lg:pt-32 xl:pt-40">
        <KatanaInfo />
        {/* <BridgeInfo /> */}
        <Airdrop />
        <FAQAccordion />
      </div>
      <FooterBg />
    </>
  );
}
