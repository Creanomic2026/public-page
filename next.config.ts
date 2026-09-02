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
};

export default nextConfig;
