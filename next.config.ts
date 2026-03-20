import type { NextConfig } from "next";

/**
 * Why: Central place for Next.js behaviour (images, redirects) so the marketing site stays fast and safe.
 * What: Enables optimized remote images for gallery/hero placeholders until real campus assets ship.
 * Where: Loaded automatically by the Next.js CLI for every dev/build/start run.
 * When: Evaluated at build time and when the dev server starts.
 * Who: Next.js framework reads this module.
 * How: Declares `remotePatterns` so `next/image` can fetch from trusted CDNs only.
 */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
