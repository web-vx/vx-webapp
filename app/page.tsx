import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import AboutTeaser from "@/components/AboutTeaser";
import Services from "@/components/Services";
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
        <Services />
        <WhyVertexShell />
        <CtaBanner
          title="Send us your requirement."
          description="Describe what you need sourced, supplied, or shipped and our team will reply."
        />
      </main>
      <Footer />
    </>
  );
}
