/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@mui/material",
    "@mui/icons-material",
    "@mui/material-nextjs"
  ],
  experimental: {
    turbo: {
      resolveAlias: {
        "@": "./src"
      }
    }
  }
};

export default nextConfig;