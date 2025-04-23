import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.batim.com.br",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
