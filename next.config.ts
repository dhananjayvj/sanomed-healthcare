import type { NextConfig } from "next";

/**
 * Static export for GitHub Pages.
 *
 * The site is served from the custom domain www.sanomedhealthcare.com, so
 * assets live at the root and no basePath is needed. To preview the build on
 * the default project-page URL (dhananjayvj.github.io/sanomed-healthcare)
 * instead, set NEXT_PUBLIC_BASE_PATH=/sanomed-healthcare at build time.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  // Emits products/index.html rather than products.html, so GitHub Pages
  // resolves /products/ without a server-side rewrite.
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
};

export default nextConfig;
