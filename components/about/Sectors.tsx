"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";

const sectors = [
  "Public Sector",
  "Oil & Gas",
  "Petrochemical",
  "Power Generation",
  "Telecommunications",
  "Aviation",
  "Industrial Construction",
  "Food & Beverage",
  "Manufacturing & Raw Materials",
];

export default function Sectors() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);

  return (
    <section className="py-16 md:py-24 bg-light">
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] px-6 ${
          visible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
          Sectors We Serve
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight max-w-2xl">
          The sectors we work in.
        </h2>

        <div className="mt-10 flex flex-wrap gap-3">
          {sectors.map((sector) => (
            <span
              key={sector}
              className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-foreground"
            >
              {sector}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
