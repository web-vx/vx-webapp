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
      "From engineering and sourcing through installation, commissioning, and handover — managed by a single accountable team.",
  },
  {
    title: "Single point of supply.",
    description:
      "One channel across infrastructure, power, aviation, and industrial supply — backed by an international manufacturing and sourcing network.",
  },
];

export default function WhyVertexShell() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);

  return (
    <section id="why" className="py-16 md:py-24 bg-white">
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] px-6 ${
          visible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
          Why VertexShell
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
          Engineering pedigree, global sourcing, local execution.
        </h2>

        <div className="mt-12 grid md:grid-cols-2 gap-x-12 gap-y-10">
          {items.map((item, i) => (
            <div key={i} className="flex gap-4">
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
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
