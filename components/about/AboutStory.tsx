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
            VertexShell is a group of companies based in Cairo, serving the
            public sector, oil &amp; gas, petrochemical, power generation,
            telecommunications, aviation, industrial construction, and food and
            commodity markets across the MENA region and international markets.
          </p>
          <p className="text-secondary leading-relaxed">
            Advanced Solutions sources, engineers, and delivers factory-built
            infrastructure, specialized assets, and industrial products for
            demanding environments. Trading Solutions imports and exports food
            and beverage products, raw materials, and equipment. Both draw on
            the same international sourcing network and are delivered by a
            locally-based commercial and project team.
          </p>
        </div>
        <MediaPanel
          src="/images/office-background.jpg"
          label="VertexShell office"
          className="aspect-[4/3] w-full"
        />
      </div>
    </section>
  );
}
