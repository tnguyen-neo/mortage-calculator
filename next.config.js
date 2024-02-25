/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  images: {
    loader: "custom",
    formats: ["image/avif", "image/webp"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
