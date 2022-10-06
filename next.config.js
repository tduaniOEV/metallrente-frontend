/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This will create a folder at .next/standalone which can then be deployed on it's own without installing node_modules.
  experimental: {
    outputStandalone: true,
  },
  images: {
    domains: ['assets.vercel.com'],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
