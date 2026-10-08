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
    "VertexShell Advanced Solutions delivers aviation and specialized assets, modular infrastructure, and power and industrial equipment, sourced, engineered, and delivered across MENA and international markets.",
};

export default function AdvancedSolutionsPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          logoSrc="/brand/advanced-solutions-white.png"
          logoAlt="VertexShell Advanced Solutions"
          logoWidth={1581}
          logoHeight={370}
          eyebrow="A VertexShell Company"
          title="Aviation, infrastructure, and power equipment."
          description="Advanced Solutions provides aviation services, prefabricated infrastructure, and power and industrial equipment. We work with established manufacturers and specialist partners, manage testing and delivery, and support installation and handover."
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
