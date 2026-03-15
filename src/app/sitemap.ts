import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";
import { diseases } from "@/data/diseases";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/guides", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/guides/seido", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/guides/shinsei", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/guides/shien", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/guides/chiken", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/guides/shikkan", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/tools", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/tools/iryohi", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/about", priority: 0.5, changeFrequency: "yearly" as const },
    { url: "/privacy", priority: 0.4, changeFrequency: "yearly" as const },
    { url: "/disclaimer", priority: 0.4, changeFrequency: "yearly" as const },
  ];

  const diseasePages = diseases.map((d) => ({
    url: `${siteUrl}/disease/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages.map((page) => ({
      url: `${siteUrl}${page.url}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...diseasePages,
  ];
}
