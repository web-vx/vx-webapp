"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";

const points = [
  {
    title: "Diverse sectors.",
    description:
      "Work across public sector, energy, telecom, aviation, and industrial construction projects rather than a single vertical.",
  },
  {
    title: "International exposure.",
    description:
      "Direct contact with European and international manufacturing partners, and clients across Egypt and the MENA region.",
  },
  {
    title: "A growing team.",
    description:
      "Join at a stage where your work shapes how the company operates, not just executes.",
  },
  {
    title: "Direct mentorship.",
    description:
      "Work closely with senior leadership rather than through layers of management.",
  },
];

export default function CareersIntro() {
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
          Why VertexShell
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight max-w-2xl">
          Build your career across industries, not within one.
        </h2>

        <div className="mt-12 grid md:grid-cols-2 gap-x-12 gap-y-10">
          {points.map((point) => (
            <div key={point.title} className="flex gap-4">
              <div className="shrink-0 mt-1">
                <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 text-primary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground">
                  {point.title}
                </h3>
                <p className="mt-1 text-sm text-secondary leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
