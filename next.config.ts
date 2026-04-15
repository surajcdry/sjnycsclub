import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/dev",
        destination: "https://github.com/surajcdry/sjnycsclub",
        permanent: true,
      },
      {
        source: "/attend",
        destination: "https://docs.google.com/forms/d/e/1FAIpQLSdAl4mt_tWROGhUNxKm_PDdHz5bTYU5K5rK4LVDn7o3OZHKSA/viewform",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
