"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { advancedPillars } from "@/lib/pillars";

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);

  return (
    <section id="services" className="py-20 md:py-28 bg-light scroll-mt-24">
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] px-6 ${
          visible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <p className="font-mono text-xs tracking-[0.25em] uppercase text-primary mb-3">
          Our Services
        </p>
        <h2 className="font-display font-extrabold uppercase text-4xl md:text-5xl text-foreground tracking-tight max-w-2xl">
          What We Do
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {advancedPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white border border-gray-200 p-7"
            >
              <div className="text-primary mb-4">{pillar.icon}</div>
              <h3 className="text-lg font-bold text-foreground tracking-tight">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm text-secondary leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
