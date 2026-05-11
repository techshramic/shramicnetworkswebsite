import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Map, RadioTower, ShieldCheck, Sparkles } from "lucide-react";
import { LocalizedLink } from "@/components/localized-link";
import { SectionHeading } from "@/components/section";
import { pageMetadata } from "@/lib/seo";
import { coreEngines, impactAreas, metrics, partners, problemStats, products, validationEvidence, values } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Rural jobs, farm help, and contractor support",
  "Shramic Networks helps workers, farmers, and contractors find rural work, book services, and coordinate jobs in local languages.",
  "/"
);

export default function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  void params;
  return (
    <>
      <section className="relative min-h-[calc(100vh-78px)] overflow-hidden bg-[#17201c] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 home-hero-image"
        />
        <div aria-hidden="true" className="home-hero-fade absolute inset-x-0 bottom-0 h-28" />
        <div className="container relative grid min-h-[calc(100vh-78px)] gap-10 py-16 lg:grid-cols-[1.03fr_.8fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm font-black text-[#f2dfbf] backdrop-blur">
              <Sparkles size={16} /> For workers, farmers, and contractors
            </div>
            <h1 className="display mt-7 max-w-5xl">Find rural work, book help, and manage jobs in one place.</h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-[#eadfce]">
              Shramic Networks helps rural workers, farmers, contractors, and service providers discover opportunities, connect with the right people, and keep work moving in local languages.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <LocalizedLink className="button bg-[#e8a72f] text-[#17201c] hover:bg-[#f1bb51]" href="/ecosystem">
                See how it works <ArrowRight size={18} />
              </LocalizedLink>
              <LocalizedLink className="button border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/15" href="/contact">
                Request worker app access
              </LocalizedLink>
            </div>
          </div>

          <div className="glass p-4 text-[#17201c]">
            <div className="relative overflow-hidden rounded-lg bg-[#101713] p-5 text-white">
              <div className="absolute right-[-68px] top-[-68px] h-44 w-44 rounded-full bg-[#1f7a7255] blur-2xl" />
              <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#e8a72f]">Live service map</p>
                  <p className="mt-1 text-2xl font-black">Shramic services</p>
                </div>
                <RadioTower className="text-[#e8a72f]" />
              </div>
              <div className="relative mt-5 grid gap-3">
                {products.slice(0, 5).map((product, index) => {
                  const Icon = product.icon;
                  return (
                    <div className="grid grid-cols-[42px_1fr_auto] items-center gap-3 rounded-lg border border-white/10 bg-white/[0.06] p-3" key={product.name}>
                      <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/10">
                        <Icon size={19} />
                      </span>
                      <div>
                        <p className="font-black">{product.name}</p>
                        <p className="text-xs text-[#cfc5b5]">{product.audience}</p>
                      </div>
                      <span className="text-xs font-black text-[#e8a72f]">0{index + 1}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {metrics.slice(0, 2).map((metric) => (
                <div className="rounded-lg border border-[#d8cdb9] bg-white p-4" key={metric.label}>
                  <p className="text-3xl font-black text-[#1f7a72]">{metric.value}</p>
                  <p className="mt-1 text-sm font-black">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="grid gap-4 md:grid-cols-4">
            {metrics.map((metric) => (
              <div className="glass p-5" key={metric.label}>
                <p className="text-4xl font-black text-[#17201c]">{metric.value}</p>
                <h2 className="mt-2 font-black text-[#1f7a72]">{metric.label}</h2>
                <p className="mt-2 text-sm leading-6 text-[#66716b]">{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#fffdf7]">
        <div className="container grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Problem validation</p>
            <h2 className="headline mt-4">What the field research showed.</h2>
            <p className="lead mt-5">
              The field data points to the same daily friction: workers wait for jobs, farmers and contractors struggle to find reliable help, and too much value gets lost in informal coordination.
            </p>
          </div>
          <div className="grid grid-2">
            {problemStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div className="card p-5" key={stat.label}>
                  <Icon className="text-[#1f7a72]" />
                  <p className="mt-4 text-4xl font-black text-[#17201c]">{stat.value}</p>
                  <h3 className="mt-2 font-black text-[#b85b2b]">{stat.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#66716b]">{stat.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
            <SectionHeading eyebrow="Product architecture" title="Tools built around real rural workflows." text="Each module is made for a specific job-to-be-done, while the broader system keeps trust, identity, demand, and supply connected behind the scenes." />
            <div className="panel-dark p-6">
              <div className="flex items-start gap-4">
                <Map className="mt-1 shrink-0 text-[#e8a72f]" />
                <div>
                  <h2 className="text-2xl font-black">From scattered phone calls to a simple way to coordinate work.</h2>
                  <p className="mt-3 text-[#d9d0bf]">The public site explains the experience clearly, while the detailed admin tools stay behind the scenes.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-3">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <article className="group card overflow-hidden p-0 transition hover:-translate-y-1 hover:shadow-[0_28px_90px_#17201c1c]" key={product.name}>
                  <div className="mesh-line" />
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-lg bg-[#1f7a7212] text-[#1f7a72]">
                        <Icon size={24} />
                      </span>
                      <ArrowRight className="text-[#b8ad9d] transition group-hover:translate-x-1 group-hover:text-[#1f7a72]" />
                    </div>
                    <h2 className="mt-6 text-2xl font-black">{product.name}</h2>
                    <p className="mt-3 text-[#66716b]">{product.summary}</p>
                    <p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-[#b85b2b]">{product.audience}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-[#17201c] text-white">
        <div className="container">
          <SectionHeading
            eyebrow="Core engines"
            title="How matching and pricing support better job fit."
            text="The platform uses two intelligence layers to reduce dependency on word-of-mouth, improve job fit, and make labour coordination easier to understand."
          />
          <div className="grid grid-2">
            {coreEngines.map((engine) => {
              const Icon = engine.icon;
              return (
                <div className="rounded-lg border border-white/10 bg-white/[0.06] p-7" key={engine.title}>
                  <Icon className="text-[#e8a72f]" size={34} />
                  <h3 className="mt-5 text-2xl font-black">{engine.title}</h3>
                  <p className="mt-3 leading-7 text-[#d9d0bf]">{engine.summary}</p>
                  <p className="mt-5 font-black text-[#e8a72f]">{engine.outcome}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-[#fffdf7]">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="panel-dark p-8">
            <p className="eyebrow text-[#e8a72f]">Get started</p>
            <h2 className="headline mt-4">Choose the path that fits you best.</h2>
            <p className="mt-5 text-lg leading-8 text-[#d9d0bf]">
              Workers can ask about job access, farmers can look for help, and contractors can request support for ongoing work.
            </p>
            <div className="mt-8 grid gap-3">
              {[
                "Workers: find work and local opportunities",
                "Farmers: book labour and services",
                "Contractors: coordinate crews and timing"
              ].map((item) => (
                <div className="flex items-center gap-3" key={item}>
                  <ShieldCheck className="text-[#e8a72f]" size={20} />
                  <span className="font-bold">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <LocalizedLink className="button bg-[#e8a72f] text-[#17201c] hover:bg-[#f1bb51]" href="/contact">
                Ask for access <ArrowRight size={18} />
              </LocalizedLink>
              <LocalizedLink className="button border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/15" href="/ecosystem">
                Compare services
              </LocalizedLink>
            </div>
          </div>
          <div className="grid gap-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div className="card flex gap-5 p-5" key={value.title}>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#e8a72f22] text-[#b85b2b]">
                    <Icon size={21} />
                  </span>
                  <div>
                    <h3 className="text-xl font-black">{value.title}</h3>
                    <p className="mt-1 text-[#66716b]">{value.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[.95fr_1.05fr]">
          <div>
            <p className="eyebrow">Trust signals</p>
            <h2 className="headline mt-4">Validated through field work and partner pathways.</h2>
            <p className="lead mt-5">
              The homepage now shows the evidence behind the product: interviews, demos, market validation, and the kinds of organizations that can support pilots or expansion.
            </p>
            <div className="mt-8 grid gap-3">
              {validationEvidence.slice(0, 3).map((item) => (
                <div className="card p-5" key={item}>
                  <p className="font-black text-[#17201c]">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {partners.slice(0, 4).map((partner) => (
              <div className="glass p-5" key={partner.name}>
                <p className="eyebrow">{partner.category}</p>
                <h3 className="mt-3 text-xl font-black text-[#17201c]">{partner.name}</h3>
                <p className="mt-2 text-sm leading-6 text-[#66716b]">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[.86fr_1.14fr]">
          <div>
            <p className="eyebrow">Impact thesis</p>
            <h2 className="headline mt-4">Designed for the places where work is still coordinated by trust.</h2>
            <p className="lead mt-5">Shramic gives that trust a modern interface: local language access, verified workflows, and practical coordination across rural livelihoods.</p>
          </div>
          <div className="grid gap-4">
            {impactAreas.map((area) => (
              <div className="card flex gap-4 p-5" key={area.title}>
                <CheckCircle2 className="mt-1 shrink-0 text-[#1f7a72]" />
                <div>
                  <h3 className="text-xl font-black">{area.title}</h3>
                  <p className="mt-1 text-[#66716b]">{area.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
