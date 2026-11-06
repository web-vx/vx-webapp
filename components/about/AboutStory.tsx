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
            VertexShell Advanced Solutions serves customers including
            government bodies, oil &amp; gas and petrochemical operators, power
            and telecom companies, aviation operators, and industrial
            contractors.
          </p>
          <p className="text-secondary leading-relaxed">
            We provide aviation services, modular infrastructure, and power
            and industrial equipment, backed by a sourcing network and a
            locally based commercial and project team.
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
