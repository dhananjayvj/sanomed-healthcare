import type { MetadataRoute } from "next";

const siteUrl = "https://www.sanomedhealthcare.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: siteUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${siteUrl}/products`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/careers`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];
}
