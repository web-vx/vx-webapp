import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import AboutTeaser from "@/components/AboutTeaser";
import Capabilities from "@/components/Capabilities";
import WhyVertexShell from "@/components/WhyVertexShell";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AboutTeaser />
        <Capabilities />
        <WhyVertexShell />
        <CtaBanner
          title="Let's talk about your next project."
          description="Tell us what you need sourced, engineered, or delivered, and our team will get back to you."
        />
      </main>
      <Footer />
    </>
  );
}
