import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  compiler: {
    // This removes React properties (like fiber internals) in production, 
    // effectively disabling the React DevTools components tab.
    reactRemoveProperties: true,
  },
  devIndicators: false,
};

export default nextConfig;
