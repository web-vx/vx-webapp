import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import CareersIntro from "@/components/careers/CareersIntro";
import OpenPositions from "@/components/careers/OpenPositions";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join VertexShell Solutions in Cairo, Egypt, and build a career across modular infrastructure, power systems, aviation, and industrial supply.",
};

export default function CareersPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Careers"
          title="Build your career at VertexShell."
          description="We're a small, growing team working across some of the most demanding industrial sectors in the region. Here's what's open right now."
          photoLabel="Team or office culture photo"
        />
        <CareersIntro />
        <OpenPositions />
      </main>
      <Footer />
    </>
  );
}
