"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";

const cards = [
  {
    title: "Aviation & Specialized Assets",
    description:
      "Sourcing, acquisition, and disposal of fixed-wing and rotary aircraft and specialized assets for government and commercial operators.",
    image: "/images/aviation-fleet.png",
  },
  {
    title: "Modular Infrastructure",
    description:
      "Prefabricated e-houses, control shelters, modular buildings, and mobile workshops for harsh-environment and remote-site deployment.",
    image: "/images/modular-e-house.png",
  },
  {
    title: "Power Systems",
    description:
      "Containerized and mobile power generation across standby, prime, and continuous-duty requirements.",
    image: "/images/power-genset.png",
  },
  {
    title: "Industrial Supply",
    description:
      "A broad sourcing network across Europe, Turkey, and international markets for electrical, instrumentation, and complementary categories.",
    image: "/images/logistics-yard.png",
  },
];

export default function Capabilities() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);

  return (
    <section className="py-20 md:py-28 bg-light">
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] px-6 ${
          visible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <p className="font-mono text-xs tracking-[0.25em] uppercase text-primary mb-3">
          What We Offer
        </p>
        <h2 className="font-display font-extrabold uppercase text-4xl md:text-5xl text-foreground tracking-tight max-w-2xl">
          A Single Point of Supply for Complex Operations
        </h2>
        <p className="mt-4 text-secondary max-w-2xl">
          Our model combines engineered products with a broad international
          sourcing and acquisition network. Whatever the requirement, we
          source it, engineer it, and deliver it.
        </p>

        <div className="mt-14 grid sm:grid-cols-2 gap-px bg-foreground/10">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="group relative aspect-[4/3] bg-navy overflow-hidden"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
              <span className="absolute top-5 left-5 font-mono text-xs text-white/60">
                0{i + 1}
              </span>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display font-bold uppercase text-xl text-white tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed max-w-sm">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/services"
          className="mt-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary hover:text-accent transition-colors"
        >
          View all services
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
            <path d="M8 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
