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
    "VertexShell Solutions is an industrial supply and trading group serving public sector, energy, telecom, aviation, and industrial construction clients across MENA and international markets.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="About Us"
          title="Building solutions that endure."
          description="An industrial supply and trading group delivering engineered infrastructure, power, aviation, and industrial products across demanding environments."
        />
        <AboutStory />
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
