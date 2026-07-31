import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },
  // Keep Turbopack scoped to this project when another package-lock.json
  // exists higher up in the Windows user directory.
  turbopack: { root: process.cwd() },
};

export default nextConfig;
