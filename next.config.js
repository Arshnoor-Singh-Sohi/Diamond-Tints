// next.config.js
const nextConfig = {
  images: {
    domains: ['localhost', 'diamondtints.ca'],
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
        ],
      },
    ];
  },
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
    ];
  },
};

module.exports = nextConfig;
