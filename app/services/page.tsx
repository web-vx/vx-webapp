import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import ServicePillars from "@/components/services/ServicePillars";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Modular infrastructure, power systems, aviation and specialized assets, and industrial supply, sourced, engineered, and delivered across Egypt, MENA, and international markets.",
};

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="What We Offer"
          title="A single point of supply for complex operations."
          description="Our model combines engineered products with a broad international sourcing and acquisition network. Whatever the requirement, we source it, engineer it, and deliver it."
        />
        <ServicePillars />
        <CtaBanner
          title="Have a requirement to source?"
          description="Tell us what you need and our team will scope it with you."
        />
      </main>
      <Footer />
    </>
  );
}
