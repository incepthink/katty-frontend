import Airdrop from "@/components/Airdrop";
import AutoMixedTextHeading from "@/components/AutoMixedTextHeading";
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
        <AutoMixedTextHeading size="sm" className="mx-auto">
          In a world where gas is weaponized, yield is a battlefield, and chains
          fracture under greed, only one remains sharp enough to cut through the
          noise…
        </AutoMixedTextHeading>
      </Box>
      <div className="flex flex-col items-center gap-16 sm:gap-24 md:gap-32 lg:gap-40 xl:gap-60 pt-8 sm:pt-10 md:pt-12 lg:pt-16 xl:pt-16">
        <KatanaInfo />
        {/* <BridgeInfo /> */}
        <Airdrop />
        <FAQAccordion />
      </div>
      <FooterBg />
    </>
  );
}
