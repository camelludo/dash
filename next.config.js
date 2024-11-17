/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@radix-ui/react-slot",
    "@radix-ui/react-tabs",
    "next-themes",
    "react-day-picker"
  ],
  images: { 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'marmolturco.com'
      },
      {
        protocol: 'https',
        hostname: 'flagcdn.com'
      },
      {
        protocol: 'https',
        hostname: 'seeklogo.com'
      }
    ],
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false }
    return config
  }
}

module.exports = nextConfig