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
    "VertexShell is a group of companies, VertexShell Advanced Solutions and VertexShell Trading & Distribution, serving public sector, energy, telecom, aviation, industrial, and food and commodity customers across MENA and international markets.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="About Us"
          title="Supplying industry and trade across MENA."
          description="VertexShell supplies engineered infrastructure and specialized assets, and trades food and raw materials, for customers across MENA and international markets."
        />
        <AboutStory />
        <GroupStructure />
        <Sectors />
        <Presence />
        <Partnerships />
        <CtaBanner
          title="Work with VertexShell."
          description="Contact us and our team will reply."
        />
      </main>
      <Footer />
    </>
  );
}
