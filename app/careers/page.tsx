import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import OpenPositions from "@/components/careers/OpenPositions";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join VertexShell and build a career across engineered infrastructure, power and industrial equipment, aviation, and international trading.",
};

export default function CareersPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Careers"
          title="Work at VertexShell."
          description="We are a small team working across industrial and commercial sectors in the region. Current openings are listed below."
          photoSrc="/images/office-background.jpg"
          photoLabel="Modern open-plan office at dusk"
        />
        <OpenPositions />
      </main>
      <Footer />
    </>
  );
}
