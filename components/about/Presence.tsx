"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";

const regions = [
  {
    title: "Egypt",
    description:
      "Headquartered in Cairo, with a locally-based commercial and project team covering the domestic market.",
  },
  {
    title: "MENA Region",
    description:
      "Active across the wider Middle East and North Africa, supporting cross-border projects and regional operators.",
  },
  {
    title: "International",
    description:
      "Sourcing, manufacturing, and trading partnerships across Europe, Turkey, and other international markets.",
  },
];

export default function Presence() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] px-6 ${
          visible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
          Our Presence
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight max-w-2xl">
          Local execution, global reach.
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {regions.map((region) => (
            <div key={region.title} className="border-t-2 border-primary pt-5">
              <h3 className="text-lg font-bold text-foreground">
                {region.title}
              </h3>
              <p className="mt-2 text-sm text-secondary leading-relaxed">
                {region.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
