import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import PillarList from "@/components/PillarList";
import Process from "@/components/trading/Process";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import { tradingPillars } from "@/lib/pillars";

export const metadata: Metadata = {
  title: "Trading Solutions",
  description:
    "VertexShell Trading Solutions imports and exports food and beverage products, raw materials, and equipment across MENA and international markets.",
};

export default function TradingSolutionsPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          logoSrc="/brand/trading-solutions-white.png"
          logoAlt="VertexShell Trading Solutions"
          eyebrow="A VertexShell Company"
          title="Import and export of food, raw materials, and equipment."
          description="Trading Solutions connects producers and buyers across MENA and international markets. One team manages sourcing, documentation, and shipping."
        />
        <PillarList pillars={tradingPillars} />
        <Process />
        <CtaBanner
          title="Need to import or export?"
          description="Tell us what you are buying or selling and our team will get back to you."
          ctaHref="/contact?enquiry=trading-solutions"
        />
      </main>
      <Footer />
    </>
  );
}
