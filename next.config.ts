import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "photos.zillowstatic.com",
        port: "",
        // pathname: '/account123/**',
        search: "",
      },
    ],
  },
};

export default nextConfig;
