/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'your-vercel-blob-storage-domain.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
