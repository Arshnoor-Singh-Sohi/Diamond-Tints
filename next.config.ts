const nextConfig = {
  images: {
    domains: ['localhost', 'diamondtints.ca'],
    formats: ['image/avif', 'image/webp'],
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Optimize for production
  // swcMinify: true,
  
  // Add security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
        ],
      },
    ]
  },
  
  // Redirects for www to non-www
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.diamondtints.ca',
          },
        ],
        destination: 'https://diamondtints.ca/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
