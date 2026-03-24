import type { NextConfig } from "next";

// Use NEXT_EXPORT=true for static export (Vercel/GitHub Pages).
// In dev mode, output is left unset so `next dev` works normally.
const isExport = process.env.NEXT_EXPORT === "true";

const nextConfig: NextConfig = {
  ...(isExport ? { output: "export" } : {}),
  // Images: unoptimized required for static export; works fine in dev too
  images: {
    unoptimized: true,
  },
  // Strict mode for better dev experience
  reactStrictMode: true,
  // Compression
  compress: true,
  // Remove X-Powered-By header for security
  poweredByHeader: false,
};

export default nextConfig;
