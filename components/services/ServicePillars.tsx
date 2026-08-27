"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import MediaPanel from "@/components/MediaPanel";

const pillars = [
  {
    title: "Aviation & Specialized Assets",
    description:
      "Sourcing, acquisition, and disposal of fixed-wing and rotary aircraft and specialized assets for government and commercial operators. Discreet, documentation-led transactions managed end to end.",
    bullets: [
      "Fixed-wing and rotary aircraft sourcing, acquisition, and disposal",
      "Support for government and commercial operators",
      "Discreet, documentation-led transaction management",
      "End-to-end handling from identification through transfer",
    ],
    photoSrc: "/images/aviation-fleet.png",
    photoLabel: "C-130 Hercules and CH-47 Chinook in flight",
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
    bullets: [
      "Prefabricated e-houses and control shelters",
      "Modular buildings and mobile workshops",
      "Engineered for harsh-environment and remote-site deployment",
      "Factory-built, fully integrated, rapid installation",
    ],
    photoSrc: "/images/modular-e-house.png",
    photoLabel: "E-house control shelter, cutaway engineering render",
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
    bullets: [
      "Containerized and mobile power generation",
      "Standby, prime, and continuous-duty configurations",
      "Built for industrial sites and remote operations",
      "Configured for mission-critical continuity",
    ],
    photoSrc: "/images/power-genset.png",
    photoLabel: "Containerized power generator skid",
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
    bullets: [
      "Electrical and instrumentation product sourcing",
      "Sourcing network across Europe, Turkey, and international markets",
      "Single channel for hard-to-source requirements",
      "Complementary industrial categories on request",
    ],
    photoSrc: "/images/logistics-yard.png",
    photoLabel: "Aerial view of a logistics and container yard",
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

function Pillar({
  pillar,
  reversed,
}: {
  pillar: (typeof pillars)[number];
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

export default function ServicePillars() {
  return (
    <>
      {pillars.map((pillar, i) => (
        <Pillar key={pillar.title} pillar={pillar} reversed={i % 2 === 1} />
      ))}
    </>
  );
}
