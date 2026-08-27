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
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight max-w-2xl">
              Building solutions that endure.
            </h2>
            <p className="mt-6 text-secondary leading-relaxed max-w-2xl">
              VertexShell Solutions is a Cairo-based industrial supply and
              trading group serving the public sector, oil &amp; gas,
              petrochemical, power generation, telecommunications, aviation,
              and industrial construction sectors across Egypt, the MENA
              region, and international markets.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:text-accent transition-colors shrink-0 whitespace-nowrap"
          >
            Learn more about us
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
              <path d="M8 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
