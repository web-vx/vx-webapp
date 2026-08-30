"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import MediaPanel from "@/components/MediaPanel";

export default function AboutStory() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] px-6 grid md:grid-cols-2 gap-12 items-center ${
          visible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="space-y-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
            Our Story
          </p>
          <p className="text-secondary leading-relaxed">
            VertexShell Solutions is a Cairo-based industrial supply and
            trading group serving the public sector, oil &amp; gas,
            petrochemical, power generation, telecommunications, aviation, and
            industrial construction sectors across the MENA region and
            international markets. We source, engineer, and deliver
            factory-built infrastructure, specialized assets, and industrial
            products, adapted for commercial and field deployment in
            demanding environments.
          </p>
          <p className="text-secondary leading-relaxed">
            Through partnerships with leading European and international
            manufacturers, including producers with decades of
            harsh-environment and defense-grade experience, our offering
            combines engineering depth, build quality, and a broad sourcing
            network, delivered through a locally-based commercial and project
            team.
          </p>
        </div>
        <MediaPanel
          label="VertexShell team or Cairo office"
          className="aspect-[4/3] w-full"
        />
      </div>
    </section>
  );
}
