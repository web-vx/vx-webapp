"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";

const items = [
  {
    title: "Tested to standard.",
    description:
      "Advanced Solutions products are built to international military and industrial standards, with factory and site acceptance testing that customers can witness.",
  },
  {
    title: "Established manufacturers.",
    description:
      "We source from manufacturers with long records in harsh-environment and defense-grade programs.",
  },
  {
    title: "One accountable team.",
    description:
      "A single team manages sourcing, engineering, shipping, installation, and handover, so you have one contact for the whole project.",
  },
  {
    title: "Local presence.",
    description:
      "Our commercial and project team is locally based, with sourcing relationships across Europe, Turkey, and other international markets.",
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
          What You Can Expect From Us
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
