/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  images: {
    domains: ['images.ctfassets.net'],
    loader: "custom",
    formats: ["image/avif", "image/webp"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
