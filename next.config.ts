import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/ontheway-b2b-pro',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
