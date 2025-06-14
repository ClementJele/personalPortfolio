import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    staleTimes: {
      static: 3600,
      dynamic: 3600,
    },
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  //kanjalo
  images: {
    domains: ["nextjs.org"],
  },
};

export default nextConfig;
