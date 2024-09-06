/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    images: {
      domains: ['cdn.dummyjson.com'],
    },
  }
  
  export default nextConfig;