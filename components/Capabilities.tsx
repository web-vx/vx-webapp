"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";

const cards = [
  {
    title: "Aviation & Specialized Assets",
    description:
      "Sourcing, acquisition, and disposal of fixed-wing and rotary aircraft and specialized assets for government and commercial operators. Discreet, documentation-led transactions managed end to end.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <path
          d="M24 4c2 0 3 2 3 5v9l17 9v4l-17-4v9l5 4v4l-8-3-8 3v-4l5-4v-9L4 31v-4l17-9V9c0-3 1-5 3-5z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Modular Infrastructure",
    description:
      "Prefabricated e-houses, control shelters, modular buildings, and mobile workshops for harsh-environment and remote-site deployment. Factory-built, fully integrated, and engineered for rapid installation.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <rect x="6" y="18" width="36" height="24" rx="2" />
        <path d="M6 18L24 6l18 12" />
        <rect x="18" y="28" width="12" height="14" />
        <line x1="12" y1="26" x2="16" y2="26" />
        <line x1="32" y1="26" x2="36" y2="26" />
      </svg>
    ),
  },
  {
    title: "Power Systems",
    description:
      "Containerized and mobile power generation across standby, prime, and continuous-duty requirements. Configured for industrial sites, remote operations, and mission-critical continuity.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <path d="M20 6l4 14h-8l4 14" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="8" y="34" width="32" height="8" rx="2" />
        <line x1="14" y1="38" x2="18" y2="38" />
        <line x1="30" y1="38" x2="34" y2="38" />
        <circle cx="36" cy="16" r="6" />
        <path d="M36 12v4h4" />
      </svg>
    ),
  },
  {
    title: "Industrial Supply",
    description:
      "A broad sourcing network across Europe, Turkey, and international markets for electrical, instrumentation, and complementary industrial categories. A single channel for hard-to-source requirements.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <circle cx="24" cy="24" r="18" />
        <circle cx="24" cy="24" r="6" />
        <line x1="24" y1="6" x2="24" y2="18" />
        <line x1="24" y1="30" x2="24" y2="42" />
        <line x1="6" y1="24" x2="18" y2="24" />
        <line x1="30" y1="24" x2="42" y2="24" />
      </svg>
    ),
  },
];

export default function Capabilities() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);

  return (
    <section id="capabilities" className="py-16 md:py-24 bg-light">
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] px-6 ${
          visible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
          What We Offer
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
          A single point of supply for complex operations.
        </h2>
        <p className="mt-4 text-secondary max-w-2xl">
          Our model combines engineered products with a broad international
          sourcing and acquisition network. Whatever the requirement, we source
          it, engineer it, and deliver it.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white border border-gray-100 rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <div className="text-primary mb-5">{card.icon}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {card.title}
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
