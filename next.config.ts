import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/dev",
        destination: "https://github.com/surajcdry/sjnycsclub",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
