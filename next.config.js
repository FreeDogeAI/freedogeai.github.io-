/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/FreeDogeAI',  // ← BU SATIR ÇOK ÖNEMLİ!
  assetPrefix: '/FreeDogeAI/',
  trailingSlash: true,
}

module.exports = nextConfig
