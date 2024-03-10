/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.coinranking.com",
      "www.coindesk.com",
      "lw3-lesson-banners.s3.us-east-2.amazonaws.com",
      "lw3-lesson-banners.s3.us-east-2.amazonaws.com",
      "ethereum.org",
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
