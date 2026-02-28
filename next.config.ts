import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/roboiitk",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "AnuragPatil24.github.io",
      },
    ],
  },
};

export default nextConfig;
