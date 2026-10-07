"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import MediaPanel from "@/components/MediaPanel";

export interface Pillar {
  title: string;
  description: string;
  bullets: string[];
  photoSrc?: string;
  photoLabel: string;
  imgClassName?: string;
  icon: ReactNode;
}

function PillarRow({
  pillar,
  reversed,
}: {
  pillar: Pillar;
  reversed: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);

  return (
    <div
      ref={ref}
      className={`py-16 md:py-20 ${reversed ? "bg-light" : "bg-white"}`}
    >
      <div
        className={`mx-auto max-w-[1200px] px-6 grid md:grid-cols-2 gap-12 items-center ${
          visible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <MediaPanel
          src={pillar.photoSrc}
          label={pillar.photoLabel}
          imgClassName={pillar.imgClassName}
          className={`aspect-[4/3] w-full ${reversed ? "md:order-2" : ""}`}
        />
        <div className={reversed ? "md:order-1" : ""}>
          <div className="text-primary mb-4">{pillar.icon}</div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            {pillar.title}
          </h2>
          <p className="mt-4 text-secondary leading-relaxed">
            {pillar.description}
          </p>
          <ul className="mt-6 space-y-3">
            {pillar.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 text-sm text-secondary">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-primary shrink-0 mt-0.5"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function PillarList({ pillars }: { pillars: Pillar[] }) {
  return (
    <>
      {pillars.map((pillar, i) => (
        <PillarRow key={pillar.title} pillar={pillar} reversed={i % 2 === 1} />
      ))}
    </>
  );
}
