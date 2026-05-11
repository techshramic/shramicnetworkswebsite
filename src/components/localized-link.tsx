"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import type { ComponentProps } from "react";
import { defaultLocale, isLocale } from "@/i18n/routing";

type LocalizedLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: `/${string}` | "/";
};

export function LocalizedLink({ href, ...props }: LocalizedLinkProps) {
  const params = useParams<{ locale?: string }>();
  const locale = params.locale && isLocale(params.locale) ? params.locale : defaultLocale;
  const localizedHref = `/${locale}${href === "/" ? "" : href}`;

  return <Link href={localizedHref} {...props} />;
}
