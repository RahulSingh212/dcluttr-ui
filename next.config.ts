import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      resourceQuery: /react/, // only if "?react" is added in import
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
