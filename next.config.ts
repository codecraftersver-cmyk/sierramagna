import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permite abrir el sitio por túnel (Cloudflare / ngrok) en modo desarrollo
  allowedDevOrigins: [
    "*.trycloudflare.com",
    "*.ngrok-free.app",
    "*.ngrok.io",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
