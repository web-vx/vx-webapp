import type { Pillar } from "@/components/PillarList";

const iconProps = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  className: "w-10 h-10",
};

export const advancedPillars: Pillar[] = [
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
    imgClassName: "object-[center_85%]",
    icon: (
      <svg {...iconProps}>
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
      <svg {...iconProps}>
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
      <svg {...iconProps}>
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
      <svg {...iconProps}>
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

export const tradingPillars: Pillar[] = [
  {
    title: "Food & Beverage",
    description:
      "Import and export of packaged food and beverage products between producers and buyers across MENA and international markets. Sourcing, documentation, and delivery are handled by one team.",
    bullets: [
      "Import and export of packaged food and beverage products",
      "Producer and buyer matching across regional and international markets",
      "Specification, quality, and documentation checks before shipment",
      "Coordinated delivery from origin to destination",
    ],
    photoLabel: "Food and beverage cargo, photo needed",
    icon: (
      <svg {...iconProps}>
        <path d="M14 6h20l-2 8H16z" strokeLinejoin="round" />
        <path d="M16 14v26a2 2 0 002 2h12a2 2 0 002-2V14" strokeLinejoin="round" />
        <line x1="16" y1="24" x2="32" y2="24" />
      </svg>
    ),
  },
  {
    title: "Raw Materials",
    description:
      "Trading of industrial and commercial raw materials for manufacturers, contractors, and processors. We identify suppliers, agree terms, and arrange delivery to site.",
    bullets: [
      "Sourcing of industrial and commercial raw materials",
      "Supplier identification and commercial negotiation",
      "Bulk and containerized shipment coordination",
      "Import and export support for manufacturers and processors",
    ],
    photoLabel: "Bulk raw materials at port, photo needed",
    icon: (
      <svg {...iconProps}>
        <path d="M24 6l16 9v18l-16 9-16-9V15z" strokeLinejoin="round" />
        <path d="M8 15l16 9 16-9" strokeLinejoin="round" />
        <line x1="24" y1="24" x2="24" y2="42" />
      </svg>
    ),
  },
];
