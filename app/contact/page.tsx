import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with VertexShell for engineered infrastructure, power and industrial equipment, aviation, and import and export requirements.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
