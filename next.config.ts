import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tells Next.js to build a static HTML site
  output: "export",

  // Adds a trailing slash to URLs (e.g., /about/) - helpful for static hosting
  trailingSlash: true,

  images: {
    // unoptimized: true is strictly REQUIRED when using output: "export"
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "crm.mercurevacationclub.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
