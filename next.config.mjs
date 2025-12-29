/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/blog', destination: '/blogs', permanent: true },
      { source: '/blog/:path*', destination: '/blogs/:path*', permanent: true },
    ];
  },
};

export default nextConfig;
