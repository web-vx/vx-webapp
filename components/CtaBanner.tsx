"use client";

import { useRef } from "react";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";

interface CtaBannerProps {
  title: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function CtaBanner({
  title,
  description,
  ctaLabel = "Get in touch",
  ctaHref = "/contact",
}: CtaBannerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);

  return (
    <section className="py-16 md:py-20 bg-navy border-t border-white/10">
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-8 ${
          visible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div>
          <h2 className="font-display font-extrabold uppercase text-2xl md:text-3xl text-white tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-white/60 max-w-xl">{description}</p>
          )}
        </div>
        <Link
          href={ctaHref}
          className="inline-flex items-center shrink-0 px-7 py-3.5 bg-primary text-white text-sm font-bold uppercase tracking-wider hover:bg-accent transition-colors"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
