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
      "Aircraft sourcing and disposal for government and commercial operators, with airfield inspection and aerial mapping delivered through specialist partners.",
    bullets: [
      "Sourcing and disposal of fixed-wing and rotary aircraft and specialized assets",
      "Inspection of instrument landing systems (ILS CAT I-III) and similar navigation aids, through partners",
      "Aerial mapping, through partners",
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
      "Factory-built shelters and buildings for harsh-environment and remote sites, delivered fully integrated for rapid installation.",
    bullets: [
      "Prefabricated e-houses and control shelters",
      "Modular buildings",
      "Mobile workshops",
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
    title: "Power & Industrial Equipment",
    description:
      "Power generation and industrial equipment for industrial sites and remote operations, sourced from manufacturers across Europe, Turkey, and international markets.",
    bullets: [
      "Containerized and mobile generator sets for standby, prime, and continuous duty",
      "Electrical and instrumentation equipment",
      "Other industrial equipment on request, including hard-to-source items",
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
];
