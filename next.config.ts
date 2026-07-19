import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow accessing the dev server from other devices on the LAN (e.g. testing
  // on a phone via the machine's local IP). Only affects `next dev`.
  allowedDevOrigins: ["192.168.1.10", "192.168.1.*"],
};

export default nextConfig;
