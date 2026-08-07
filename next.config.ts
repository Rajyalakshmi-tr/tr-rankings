import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/tr-rankings",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;