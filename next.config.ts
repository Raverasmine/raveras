import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "photos.zillowstatic.com",
        port: "",
        search: "",
      },
      {
        protocol: "https",
        hostname: "thumbs.dreamstime.com",
        port: "",
        search: "",
      },
    ],
  },
};

export default nextConfig;
