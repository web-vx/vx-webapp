import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import PillarList from "@/components/PillarList";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import { advancedPillars } from "@/lib/pillars";

export const metadata: Metadata = {
  title: "Advanced Solutions",
  description:
    "VertexShell Advanced Solutions delivers modular infrastructure, power systems, aviation and specialized assets, and industrial supply, sourced, engineered, and delivered across MENA and international markets.",
};

export default function AdvancedSolutionsPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          logoSrc="/brand/advanced-solutions-white.png"
          logoAlt="VertexShell Advanced Solutions"
          eyebrow="A VertexShell Company"
          title="A single point of supply for complex operations."
          description="Our model combines engineered products with a broad international sourcing and acquisition network. Whatever the requirement, we source it, engineer it, and deliver it."
        />
        <PillarList pillars={advancedPillars} />
        <CtaBanner
          title="Have a requirement to source?"
          description="Tell us what you need and our team will scope it with you."
          ctaHref="/contact?enquiry=advanced-solutions"
        />
      </main>
      <Footer />
    </>
  );
}
