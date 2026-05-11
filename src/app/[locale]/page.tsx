import { ArrowRight, CheckCircle2, Map, RadioTower, ShieldCheck, Sparkles } from "lucide-react";
import { LocalizedLink } from "@/components/localized-link";
import { SectionHeading } from "@/components/section";
import { coreEngines, impactAreas, metrics, problemStats, products, values } from "@/lib/site";

export default function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  void params;
  return (
    <>
      <section className="relative min-h-[calc(100vh-78px)] overflow-hidden bg-[#17201c] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(23,32,28,.96) 0%, rgba(23,32,28,.84) 42%, rgba(23,32,28,.35) 100%), url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=2200&q=82')",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f7f3ea] to-transparent" />
        <div className="container relative grid min-h-[calc(100vh-78px)] gap-10 py-16 lg:grid-cols-[1.03fr_.8fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm font-black text-[#f2dfbf] backdrop-blur">
              <Sparkles size={16} /> Investor-grade rural intelligence platform
            </div>
            <h1 className="display mt-7 max-w-5xl">India&apos;s rural work graph, built as infrastructure.</h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-[#eadfce]">
              Shramic Networks connects workers, farmers, contractors, equipment owners, businesses, experts, and institutions through a trusted AI-assisted operating layer.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <LocalizedLink className="button bg-[#e8a72f] text-[#17201c] hover:bg-[#f1bb51]" href="/ecosystem">
                Explore platform <ArrowRight size={18} />
              </LocalizedLink>
              <LocalizedLink className="button border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/15" href="/contact">
                Start a conversation
              </LocalizedLink>
            </div>
          </div>

          <div className="glass p-4 text-[#17201c]">
            <div className="relative overflow-hidden rounded-lg bg-[#101713] p-5 text-white">
              <div className="absolute right-[-68px] top-[-68px] h-44 w-44 rounded-full bg-[#1f7a7255] blur-2xl" />
              <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#e8a72f]">Live ecosystem map</p>
                  <p className="mt-1 text-2xl font-black">Shramic OS</p>
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
            <h2 className="headline mt-4">A broken two-sided market, now measured.</h2>
            <p className="lead mt-5">
              The seed deck validates the same daily field story at scale: workers wait for jobs, providers struggle to find reliable labour, and informal middlemen capture value from both sides.
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
            <SectionHeading eyebrow="Product architecture" title="A platform suite that feels operational, not ornamental." text="Every module is designed for a specific rural workflow, while the broader system compounds trust, identity, demand, and supply across the ecosystem." />
            <div className="panel-dark p-6">
              <div className="flex items-start gap-4">
                <Map className="mt-1 shrink-0 text-[#e8a72f]" />
                <div>
                  <h2 className="text-2xl font-black">From fragmented marketplaces to a coordinated rural work graph.</h2>
                  <p className="mt-3 text-[#d9d0bf]">Public storytelling stays high-level; the operating intelligence remains protected inside the admin and data layers.</p>
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
            title="AI matching and fair pricing, described at a public-safe level."
            text="The platform uses two core intelligence layers to reduce dependency on word-of-mouth, improve job fit, and create more transparent labour coordination."
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
            <p className="eyebrow text-[#e8a72f]">Confidentiality posture</p>
            <h2 className="headline mt-4">Professional enough for investors. Disciplined enough for strategy.</h2>
            <p className="mt-5 text-lg leading-8 text-[#d9d0bf]">
              The public website communicates traction, market narrative, ecosystem shape, and partnership readiness without exposing algorithms, pricing logic, raw survey data, financial projections, or unit economics.
            </p>
            <div className="mt-8 grid gap-3">
              {["Public metrics only", "NDA-aware investor workflow", "Admin-ready content governance"].map((item) => (
                <div className="flex items-center gap-3" key={item}>
                  <ShieldCheck className="text-[#e8a72f]" size={20} />
                  <span className="font-bold">{item}</span>
                </div>
              ))}
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
