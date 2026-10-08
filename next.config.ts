import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
