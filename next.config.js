/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  // register: true,
});

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});

module.exports = nextConfig;
