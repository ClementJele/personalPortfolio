import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['api.microlink.io'], // Add the microlink domain
    // Optional: if you need other domains too
    // domains: ['api.microlink.io', 'other-domain.com'],
  },
};

export default nextConfig;
