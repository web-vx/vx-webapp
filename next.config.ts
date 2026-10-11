import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 95],
  },
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/advanced-solutions",
        permanent: true,
      },
      {
        source: "/trading-solutions",
        destination: "/trading-distribution",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
