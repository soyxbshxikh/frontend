/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'localhost', // For development
      'your-strapi-domain.com', // For production (replace with your actual domain)
    ],
  },
};

module.exports = nextConfig;
