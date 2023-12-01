/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: "i.dummyjson.com",
      },
      {
        hostname: "dummyjson.com",
      },
    ],
  },
};

module.exports = nextConfig;
