/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['bayut-production.s3.eu-central-1.amazonaws.com']
  }
}

// next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  distDir: 'out',
  basePath: isProd ? '/real-estate-app' : '',
  assetPrefix: isProd ? '/real-estate-app/' : '',
  
};
