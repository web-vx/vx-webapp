"use client";

import { useRef } from "react";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";

export default function AboutTeaser() {
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
        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end">
          <div>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-primary mb-3">
              About VertexShell Advanced Solutions
            </p>
            <h2 className="font-display font-extrabold uppercase text-4xl md:text-5xl text-foreground tracking-tight max-w-2xl">
              Supplying Industry Across MENA
            </h2>
            <p className="mt-6 text-secondary leading-relaxed max-w-2xl">
              VertexShell Advanced Solutions supplies aviation services,
              modular infrastructure, and power and industrial equipment. We
              work with government bodies, energy and petrochemical
              operators, telecom companies, aviation operators, and
              industrial contractors across MENA and international markets.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary hover:text-accent transition-colors shrink-0 whitespace-nowrap"
          >
            About Us
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
              <path d="M8 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
