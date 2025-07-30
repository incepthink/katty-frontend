import Airdrop from "@/components/Airdrop";
import BridgeInfo from "@/components/BridgeInfo";
import FAQAccordion from "@/components/FAQAccordion";
import FooterBg from "@/components/FooterBg";
import KatanaInfo from "@/components/KatanaInfo";
import { KatTicker } from "@/components/KatTicker";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import ResponsiveHeading from "@/components/ResponsiveHeading";
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <KatTicker />
      <div className="flex flex-col items-center gap-60 pt-30">
        <div>
          <ResponsiveHeading size="sm">
            In a world where gas is weaponized, yield is a battlefield, and
            chains fracture under greed, only one remains sharp enough to cut
            through the noise…
          </ResponsiveHeading>
        </div>
        <KatanaInfo />
        {/* <BridgeInfo /> */}
        <Airdrop />
        <FAQAccordion />
      </div>
      <FooterBg />
    </>
  );
}
