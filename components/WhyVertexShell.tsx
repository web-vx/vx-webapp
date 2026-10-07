"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";

const items = [
  {
    title: "International standards.",
    description:
      "Products built to international military and industrial standards, with full factory and site acceptance testing and customer witness.",
  },
  {
    title: "Defense-grade pedigree.",
    description:
      "Manufacturing partnerships with a heritage in harsh-environment and defense-grade programs worldwide.",
  },
  {
    title: "End-to-end delivery.",
    description:
      "From engineering and sourcing through installation, commissioning, and handover, managed by a single accountable team.",
  },
  {
    title: "One group, two specialties.",
    description:
      "Engineered supply through Advanced Solutions and international trading through Trading Solutions, backed by one sourcing network and one accountable team.",
  },
];

export default function WhyVertexShell() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);

  return (
    <section id="why" className="py-20 md:py-28 bg-white">
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] px-6 ${
          visible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <p className="font-mono text-xs tracking-[0.25em] uppercase text-primary mb-3">
          Why VertexShell
        </p>
        <h2 className="font-display font-extrabold uppercase text-4xl md:text-5xl text-foreground tracking-tight max-w-2xl">
          Engineering Pedigree, Global Sourcing, Local Execution
        </h2>

        <div className="mt-14 border-t border-foreground/10">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="grid md:grid-cols-[80px_1fr_2fr] gap-2 md:gap-8 py-7 border-b border-foreground/10"
            >
              <span className="font-mono text-sm text-primary/60">
                0{i + 1}
              </span>
              <h3 className="text-lg font-bold text-foreground">
                {item.title}
              </h3>
              <p className="text-secondary leading-relaxed max-w-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
