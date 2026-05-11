import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  text,
  children
}: {
  eyebrow: string;
  title: string;
  text: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-[#17201c] py-28 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-45"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #17201c 0%, rgba(23,32,28,.86) 45%, rgba(23,32,28,.28) 100%), url('https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1800&q=80')",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      />
      <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e8a72f] to-transparent" />
      <div className="container relative grid gap-10 lg:grid-cols-[1fr_.42fr] lg:items-end">
        <div>
        <p className="eyebrow text-[#e8a72f]">{eyebrow}</p>
        <h1 className="headline mt-4 max-w-4xl">{title}</h1>
        <p className="lead mt-6 max-w-3xl text-[#e9decc]">{text}</p>
        {children ? <div className="mt-8">{children}</div> : null}
        </div>
        <div className="hidden rounded-lg border border-white/15 bg-white/10 p-5 backdrop-blur lg:block">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#e8a72f]">Public layer</p>
          <p className="mt-4 text-3xl font-black">Confidential by design</p>
          <p className="mt-3 text-sm leading-6 text-[#e9decc]">Investor-grade storytelling without exposing algorithms, pricing logic, raw data, or competitive strategy.</p>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="headline mt-3">{title}</h2>
      <p className="lead mt-4">{text}</p>
    </div>
  );
}
