/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages project sites (e.g. user.github.io/repo-name) set
  //   NEXT_PUBLIC_BASE_PATH=/repo-name
  // before running `npm run build`. Leave unset for a custom domain or user/org root site.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
}

module.exports = nextConfig
