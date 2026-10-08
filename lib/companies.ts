export interface Company {
  slug: string;
  name: string;
  href: string;
  tagline: string;
  description: string;
  services: string[];
  logo: string;
  logoWidth: number;
  logoHeight: number;
  logoWhite: string;
  symbolWhite: string;
  symbolWidth: number;
  symbolHeight: number;
  image?: string;
  imagePosition?: string;
}

export const companies: Company[] = [
  {
    slug: "advanced-solutions",
    name: "VertexShell Advanced Solutions",
    href: "/advanced-solutions",
    tagline: "Aviation, infrastructure, and power equipment",
    description:
      "Aviation services, prefabricated infrastructure, and power and industrial equipment, delivered through established manufacturers and specialist partners.",
    services: [
      "Aviation & Specialized Assets",
      "Modular Infrastructure",
      "Power & Industrial Equipment",
    ],
    logo: "/brand/advanced-solutions.png",
    logoWidth: 1581,
    logoHeight: 370,
    logoWhite: "/brand/advanced-solutions-white.png",
    symbolWhite: "/brand/advanced-symbol-white.png",
    symbolWidth: 1332,
    symbolHeight: 1185,
    image: "/images/modular-e-house.png",
  },
  {
    slug: "trading-distribution",
    name: "VertexShell Trading & Distribution",
    href: "/trading-distribution",
    tagline: "Import, export, and distribution of food and raw materials",
    description:
      "Imports, exports, and distributes food and beverage products and raw materials, with sourcing, documentation, and shipping handled by one team.",
    services: ["Food & Beverage", "Raw Materials"],
    logo: "/brand/trading-distribution.png",
    logoWidth: 1521,
    logoHeight: 373,
    logoWhite: "/brand/trading-distribution-white.png",
    symbolWhite: "/brand/trading-symbol-white.png",
    symbolWidth: 1120,
    symbolHeight: 1248,
  },
];
