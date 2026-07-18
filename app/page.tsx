import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import WhyVertexShell from "@/components/WhyVertexShell";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <WhyVertexShell />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
