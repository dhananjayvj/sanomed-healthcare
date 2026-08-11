import type { MetadataRoute } from "next";

// Emitted as a static file at build time for the static export.
export const dynamic = "force-static";

const siteUrl = "https://www.sanomedhealthcare.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: "/api/" }],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
