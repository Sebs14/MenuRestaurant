/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify:true,
  optimizeFonts: true,
  images: {
    remotePatterns:[
      {
        protocol:"http",
        hostname:"173.254.242.213",
      },
    ],
    minimunCacheTTL:1500000,
  }
}

module.exports = nextConfig
