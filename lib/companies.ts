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
    tagline: "Engineered infrastructure, power, and aircraft",
    description:
      "Prefabricated infrastructure, power generation, aircraft, and industrial products, sourced from established manufacturers and delivered to site.",
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
    tagline: "Import and export of food, materials, and equipment",
    description:
      "Imports and exports of food and beverage products, raw materials, and equipment, with sourcing, documentation, and shipping handled by one team.",
    services: ["Food & Beverage", "Raw Materials", "Equipment"],
    logo: "/brand/trading-solutions.png",
    logoWhite: "/brand/trading-solutions-white.png",
    symbolWhite: "/brand/trading-symbol-white.png",
  },
];
