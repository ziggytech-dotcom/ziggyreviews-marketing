import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ziggyreviews.com";
  const now = new Date();

  const pages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/features", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/pricing", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/vs/birdeye", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/vs/podium", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/restaurants", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/salons", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/home-services", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/medical", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
