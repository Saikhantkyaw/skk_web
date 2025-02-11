/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/your-repo-name",
  assetPrefix: "/your-repo-name/",
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

