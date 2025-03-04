/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  images: {
    unoptimized: true, // Ensures images work without a backend
  },
};

module.exports = nextConfig;
