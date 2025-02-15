import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ['mongoose'],
  output: 'standalone',
};

export default nextConfig;
