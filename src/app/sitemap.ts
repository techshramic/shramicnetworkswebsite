import type { MetadataRoute } from "next";
import { locales } from "@/i18n/routing";
import { allPages, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    allPages.map((page) => ({
      url: `${site.url}/${locale}${page === "/" ? "" : page}`,
      lastModified: new Date(),
      changeFrequency: page === "/" ? "weekly" : "monthly",
      priority: page === "/" ? 1 : 0.8
    }))
  );
}
