/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a static, exportable site suitable for GitHub Pages
  output: 'export',
  images: {
    // Ensure no image optimization server is required on Pages
    unoptimized: true,
  },
  eslint: {
    // Avoid ESLint build failures in CI; linting can run separately
    ignoreDuringBuilds: true,
  },
  poweredByHeader: false,
  devIndicators: {
    buildActivity: false,
  },
};

export default nextConfig;
