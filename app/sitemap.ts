import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/advanced-solutions",
    "/trading-solutions",
    "/careers",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `https://vertexshell.com${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
