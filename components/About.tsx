"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] px-6 ${
          visible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
          About Us
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
          Building solutions that endure.
        </h2>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <p className="text-secondary leading-relaxed">
            VertexShell Solutions is a Cairo-based industrial supply and trading
            group serving the public sector, oil &amp; gas, petrochemical, power
            generation, telecommunications, aviation, and industrial
            construction sectors across Egypt, the MENA region, and
            international markets. We source, engineer, and deliver
            factory-built infrastructure, specialized assets, and industrial
            products — adapted for commercial and field deployment in demanding
            environments.
          </p>
          <p className="text-secondary leading-relaxed">
            Through partnerships with leading European and international
            manufacturers — including producers with decades of
            harsh-environment and defense-grade experience — our offering
            combines engineering depth, build quality, and a broad sourcing
            network, delivered through a locally-based commercial and project
            team.
          </p>
        </div>
      </div>
    </section>
  );
}
