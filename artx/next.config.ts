import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/artx",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
