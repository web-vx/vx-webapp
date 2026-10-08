"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import { companies } from "@/lib/companies";

export default function GroupStructure() {
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
          Group Structure
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight max-w-2xl">
          How the group is organized.
        </h2>

        <div className="mt-12 flex flex-col items-center">
          <div className="bg-white border border-gray-200 px-8 py-5">
            <Image
              src="/brand/group.png"
              alt="VertexShell Group"
              width={1887}
              height={132}
              className="w-56 max-w-full h-auto"
            />
          </div>
          <div className="w-px h-8 bg-primary/40" />
          <div className="hidden md:block w-1/2 h-px bg-primary/40" />
          <div className="w-full grid md:grid-cols-2 gap-6 md:gap-8">
            {companies.map((company) => (
              <Link
                key={company.slug}
                href={company.href}
                className="group relative block bg-white border border-gray-200 p-6 hover:border-primary transition-colors"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={company.logoWidth}
                  height={company.logoHeight}
                  className="h-10 w-auto"
                />
                <p className="mt-4 text-sm text-secondary leading-relaxed">
                  {company.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {company.services.map((service) => (
                    <li
                      key={service}
                      className="px-3 py-1 bg-light text-xs font-medium text-foreground"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
