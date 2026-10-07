"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";

const steps = [
  {
    title: "Source",
    description:
      "We identify and qualify suppliers or buyers for your requirement.",
  },
  {
    title: "Agree",
    description:
      "Specifications, pricing, and terms are confirmed in writing before anything ships.",
  },
  {
    title: "Ship",
    description:
      "Shipping, customs clearance, and inspection are coordinated by one team, with documentation prepared before the goods move.",
  },
  {
    title: "Deliver",
    description:
      "Goods are handed over on the agreed terms, and we follow up on any issue after delivery.",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);

  return (
    <section className="py-20 md:py-28 bg-navy">
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] px-6 ${
          visible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-3">
          How We Work
        </p>
        <h2 className="font-display font-extrabold uppercase text-4xl md:text-5xl text-white tracking-tight max-w-2xl">
          How a Trade Is Run
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {steps.map((step, i) => (
            <div key={step.title} className="bg-navy p-6 lg:pr-8">
              <span className="font-mono text-sm text-accent">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
