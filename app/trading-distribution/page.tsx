import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import PillarList from "@/components/PillarList";
import Process from "@/components/trading/Process";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import { tradingPillars } from "@/lib/pillars";

export const metadata: Metadata = {
  title: "Trading & Distribution",
  description:
    "VertexShell Trading & Distribution imports, exports, and distributes food and beverage products and raw materials across MENA and international markets.",
};

export default function TradingDistributionPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          logoSrc="/brand/trading-distribution-white.png"
          logoAlt="VertexShell Trading & Distribution"
          logoWidth={1521}
          logoHeight={373}
          eyebrow="A VertexShell Company"
          title="Import, export, and distribution of food and raw materials."
          description="Trading &amp; Distribution connects producers and buyers across MENA and international markets. One team manages sourcing, documentation, and shipping."
        />
        <PillarList pillars={tradingPillars} />
        <Process />
        <CtaBanner
          title="Need to import or export?"
          description="Tell us what you are buying or selling and our team will get back to you."
          ctaHref="/contact?enquiry=trading-distribution"
        />
      </main>
      <Footer />
    </>
  );
}
