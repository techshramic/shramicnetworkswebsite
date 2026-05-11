import Link from "next/link";
import { Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import type { Locale } from "@/i18n/routing";
import { allPages, site } from "@/lib/site";

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-[#ffffff18] bg-[#111713] py-16 text-[#fff7e8]">
      <div className="container grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="text-3xl font-black">{site.name}</p>
          <p className="mt-4 max-w-xl text-[#cfc5b5]">{site.description}</p>
          <div className="mt-6 flex gap-3">
            <a aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-lg bg-white/10 transition hover:bg-[#1f7a72]" href="https://www.linkedin.com" rel="noreferrer" target="_blank">
              <Linkedin size={20} />
            </a>
            <a aria-label="Twitter" className="grid h-11 w-11 place-items-center rounded-lg bg-white/10 transition hover:bg-[#1f7a72]" href="https://twitter.com" rel="noreferrer" target="_blank">
              <Twitter size={20} />
            </a>
          </div>
        </div>
        <div>
          <p className="font-black">Pages</p>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-[#d8cdbb]">
            {allPages.map((page) => (
              <Link href={`/${locale}${page === "/" ? "" : page}`} key={page}>
                {page === "/" ? "Home" : page.slice(1).replace("-", " ")}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-black">Contact</p>
          <div className="mt-4 grid gap-3 text-sm text-[#d8cdbb]">
            <span className="flex gap-2"><Mail size={18} /> {site.emails.general}</span>
            <span className="flex gap-2"><Phone size={18} /> {site.phone}</span>
            <span className="flex gap-2"><MapPin size={18} /> {site.address}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
