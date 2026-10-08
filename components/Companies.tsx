"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import { companies } from "@/lib/companies";

export default function Companies() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);

  return (
    <section id="companies" className="py-20 md:py-28 bg-light scroll-mt-24">
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] px-6 ${
          visible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <p className="font-mono text-xs tracking-[0.25em] uppercase text-primary mb-3">
          Our Companies
        </p>
        <h2 className="font-display font-extrabold uppercase text-4xl md:text-5xl text-foreground tracking-tight max-w-2xl">
          What We Do
        </h2>

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          {companies.map((company, i) => (
            <Link
              key={company.slug}
              href={company.href}
              className="group relative flex flex-col justify-end min-h-[34rem] bg-navy overflow-hidden"
            >
              {company.image ? (
                <Image
                  src={company.image}
                  alt=""
                  fill
                  className={`object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 ${
                    company.imagePosition ?? ""
                  }`}
                />
              ) : (
                <Image
                  src={company.symbolWhite}
                  alt=""
                  width={company.symbolWidth}
                  height={company.symbolHeight}
                  className="absolute -right-16 -top-10 w-80 h-auto opacity-10 transition-transform duration-700 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/20" />
              <span className="absolute top-6 left-6 font-mono text-xs text-white/60">
                0{i + 1}
              </span>

              <div className="relative p-8">
                <Image
                  src={company.logoWhite}
                  alt={company.name}
                  width={company.logoWidth}
                  height={company.logoHeight}
                  className="h-12 w-auto mb-6"
                />
                <h3 className="font-display font-bold uppercase text-2xl text-white tracking-tight">
                  {company.tagline}
                </h3>
                <p className="mt-3 text-sm text-white/70 leading-relaxed max-w-md">
                  {company.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {company.services.map((service) => (
                    <li
                      key={service}
                      className="px-3 py-1.5 border border-white/25 text-xs font-mono uppercase tracking-wider text-white/80"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
                <span className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent group-hover:text-white transition-colors">
                  Explore {company.name.replace("VertexShell ", "")}
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
                    <path d="M8 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
