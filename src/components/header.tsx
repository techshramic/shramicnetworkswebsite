"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { locales, type Locale } from "@/i18n/routing";
import { navItems, site } from "@/lib/site";

const labels: Record<Locale, string> = {
  en: "EN",
  hi: "HI",
  mr: "MR",
  kn: "KN",
  te: "TE",
  ta: "TA"
};

export function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  function localHref(href: string) {
    return `/${locale}${href === "/" ? "" : href}`;
  }

  function switchLanguage(nextLocale: string) {
    const segments = pathname.split("/");
    segments[1] = nextLocale;
    router.push(segments.join("/") || `/${nextLocale}`);
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#ffffff1a] bg-[#17201cf2] text-white shadow-[0_12px_40px_#1117132b] backdrop-blur-xl">
      <div className="container flex min-h-[78px] items-center justify-between gap-6">
        <Link aria-label="Shramic Networks home" className="flex items-center gap-3 font-black" href={`/${locale}`}>
          <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-lg bg-[#f7f3ea] text-[#17201c]">
            <span className="absolute inset-x-0 bottom-0 h-2 bg-[#1f7a72]" />
            <span className="relative">SN</span>
          </span>
          <span className="leading-tight">
            <span className="block">{site.name}</span>
            <span className="block text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#d4c7b3]">Rural intelligence</span>
          </span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <Link className="text-sm font-bold text-[#efe6d8cc] transition hover:text-white" href={localHref(item.href)} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <select
            aria-label="Select language"
            className="h-10 rounded-lg border border-white/15 bg-white/10 px-3 font-bold text-white"
            onChange={(event) => switchLanguage(event.target.value)}
            value={locale}
          >
            {locales.map((item) => (
              <option className="text-[#17201c]" key={item} value={item}>
                {labels[item]}
              </option>
            ))}
          </select>
          <Link className="button bg-[#e8a72f] text-[#17201c] hover:bg-[#f1b84d]" href={localHref("/contact")}>
            Talk to us <ArrowUpRight size={17} />
          </Link>
        </div>
        <button
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="grid h-11 w-11 place-items-center rounded-lg border border-white/15 bg-white/10 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-[#17201c] lg:hidden">
          <nav className="container grid gap-1 py-4" aria-label="Mobile navigation">
            <label className="mb-2 grid gap-2 px-3 text-sm font-bold text-[#efe6d8]">
              Language
              <select
                aria-label="Select language"
                className="h-11 rounded-lg border border-white/15 bg-white/10 px-3 font-bold text-white"
                onChange={(event) => switchLanguage(event.target.value)}
                value={locale}
              >
                {locales.map((item) => (
                  <option className="text-[#17201c]" key={item} value={item}>
                    {labels[item]}
                  </option>
                ))}
              </select>
            </label>
            {navItems.map((item) => (
              <Link className="rounded-lg px-3 py-3 font-bold text-[#efe6d8] hover:bg-white/10" href={localHref(item.href)} key={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
