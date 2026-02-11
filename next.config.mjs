/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/apex-plumbing-demo',
  assetPrefix: '/apex-plumbing-demo/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
