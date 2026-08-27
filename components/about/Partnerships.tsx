"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import MediaPanel from "@/components/MediaPanel";

export default function Partnerships() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);

  return (
    <section className="py-16 md:py-24 bg-light">
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] px-6 grid md:grid-cols-2 gap-12 items-center ${
          visible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <MediaPanel
          src="/images/manufacturing-render.png"
          label="Containerized power module, engineering render"
          className="aspect-[4/3] w-full md:order-2"
        />
        <div className="space-y-6 md:order-1">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
            Manufacturing Partnerships
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            A network built on engineering pedigree.
          </h2>
          <p className="text-secondary leading-relaxed">
            We work with leading European and international manufacturers,
            including producers with decades of harsh-environment and
            defense-grade experience. These partnerships give us direct access
            to engineering depth and build quality that would be difficult to
            replicate through a single supplier relationship.
          </p>
          <p className="text-secondary leading-relaxed">
            Every product is delivered with full factory and site acceptance
            testing and customer witness, built to international military and
            industrial standards.
          </p>
        </div>
      </div>
    </section>
  );
}
