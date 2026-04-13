import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        // Whenever the frontend fetches /api/something
        source: "/api/:path*",
        // The Next.js server will proxy it to your real domain
        destination: "https://rosewoodworldwidetravel.com/api/:path*",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "treehouseluxuryvacations.com",
        port: "",
        pathname: "/**", // This allows all image paths from this domain
      },
      // I also highly recommend adding your primary API domain here just in case!
      {
        protocol: "https",
        hostname: "rosewoodworldwidetravel.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
