// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rankrizers-staging-assets.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "rankrizers-assets.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "*.s3.ap-south-1.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
