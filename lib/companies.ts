export interface Company {
  slug: string;
  name: string;
  href: string;
  tagline: string;
  description: string;
  services: string[];
  logo: string;
  logoWhite: string;
  symbolWhite: string;
  image?: string;
  imagePosition?: string;
}

export const companies: Company[] = [
  {
    slug: "advanced-solutions",
    name: "VertexShell Advanced Solutions",
    href: "/advanced-solutions",
    tagline: "Engineered infrastructure, power, and specialized assets.",
    description:
      "Sources, engineers, and delivers factory-built infrastructure, power systems, aircraft, and industrial products for demanding environments.",
    services: [
      "Aviation & Specialized Assets",
      "Modular Infrastructure",
      "Power Systems",
      "Industrial Supply",
    ],
    logo: "/brand/advanced-solutions.png",
    logoWhite: "/brand/advanced-solutions-white.png",
    symbolWhite: "/brand/advanced-symbol-white.png",
    image: "/images/modular-e-house.png",
  },
  {
    slug: "trading-solutions",
    name: "VertexShell Trading Solutions",
    href: "/trading-solutions",
    tagline: "Import and export of goods that keep businesses running.",
    description:
      "Sources, trades, and moves food and beverage products, raw materials, and equipment between markets across MENA and beyond.",
    services: ["Food & Beverage", "Raw Materials", "Equipment"],
    logo: "/brand/trading-solutions.png",
    logoWhite: "/brand/trading-solutions-white.png",
    symbolWhite: "/brand/trading-symbol-white.png",
  },
];
