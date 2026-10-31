import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Fix workspace root detection when multiple lockfiles exist
  outputFileTracingRoot: path.join(__dirname),

  // Image optimization settings
  images: {
    // Add domains here when loading external images
    // domains: ["example.com"],
    formats: ["image/avif", "image/webp"],
  },

  // Login di public-page selalu diarahkan ke dashboard Laravel.
  async redirects() {
    return [
      {
        source: "/login",
        destination: "https://dash.creanomic.web.id/login",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
