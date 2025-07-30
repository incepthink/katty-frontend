import Airdrop from "@/components/Airdrop";
import BridgeInfo from "@/components/BridgeInfo";
import FAQAccordion from "@/components/FAQAccordion";
import FooterBg from "@/components/FooterBg";
import KatanaInfo from "@/components/KatanaInfo";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <div className="flex flex-col items-center gap-60 pt-30">
        <KatanaInfo />
        <BridgeInfo />
        <Airdrop />
        <FAQAccordion />
      </div>
      <FooterBg />
    </>
  );
}
