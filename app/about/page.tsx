import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import AboutStory from "@/components/about/AboutStory";
import Sectors from "@/components/about/Sectors";
import Presence from "@/components/about/Presence";
import Partnerships from "@/components/about/Partnerships";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "VertexShell Advanced Solutions serves public sector, energy, telecom, aviation, and industrial customers across MENA and international markets.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="About Us"
          title="Supplying industry across MENA."
          description="VertexShell Advanced Solutions supplies engineered infrastructure and specialized assets for customers across MENA and international markets."
        />
        <AboutStory />
        <Sectors />
        <Presence />
        <Partnerships />
        <CtaBanner
          title="Work with VertexShell Advanced Solutions."
          description="Contact us and our team will reply."
        />
      </main>
      <Footer />
    </>
  );
}
