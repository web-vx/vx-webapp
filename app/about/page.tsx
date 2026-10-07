import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import AboutStory from "@/components/about/AboutStory";
import GroupStructure from "@/components/about/GroupStructure";
import Sectors from "@/components/about/Sectors";
import Presence from "@/components/about/Presence";
import Partnerships from "@/components/about/Partnerships";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "VertexShell is a Cairo-based group of companies, VertexShell Advanced Solutions and VertexShell Trading Solutions, serving public sector, energy, telecom, aviation, industrial, and food and commodity clients across MENA and international markets.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="About Us"
          title="Building solutions that endure."
          description="A group of companies delivering engineered infrastructure, specialized assets, and international trading across demanding environments."
        />
        <AboutStory />
        <GroupStructure />
        <Sectors />
        <Presence />
        <Partnerships />
        <CtaBanner
          title="Want to work with us?"
          description="Reach out and our team will get back to you."
        />
      </main>
      <Footer />
    </>
  );
}
