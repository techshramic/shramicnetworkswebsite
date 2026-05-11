import type { Metadata } from "next";
import { locales } from "@/i18n/routing";
import { site } from "./site";

export function pageMetadata(title: string, description: string, path = "/"): Metadata {
  const canonicalUrl = `${site.url}/en${path === "/" ? "" : path}`;
  const localePaths = Object.fromEntries(
    locales.map((locale) => [locale, `${site.url}/${locale}${path === "/" ? "" : path}`])
  );

  return {
    title: `${title} | ${site.name}`,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "x-default": `${site.url}/en${path === "/" ? "" : path}`,
        ...localePaths
      }
    },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: canonicalUrl,
      siteName: site.name,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description
    }
  };
}
