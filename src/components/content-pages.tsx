import { ContactForm } from "@/components/contact-form";
import { LocalizedLink } from "@/components/localized-link";
import { PageHero, SectionHeading } from "@/components/section";
import { blogPosts, careers, coreEngines, faqs, impactAreas, metrics, partners, problemStats, products, site, teamMembers, validationEvidence, values } from "@/lib/site";

export function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="Building trusted technology for India's rural livelihood economy." text="Shramic Networks Private Limited exists to make work, services, expertise, and rural commerce easier to discover, coordinate, and trust." />
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Founding story" title="Born from field evidence, shaped for scale." text="The company combines field research, product engineering, partner development, and AI-assisted infrastructure to address fragmentation in rural labour markets." />
            <div className="panel-dark mt-8 p-6">
              <p className="eyebrow text-[#e8a72f]">Vision</p>
              <p className="mt-3 text-lg leading-8 text-[#d9d0bf]">{site.vision}</p>
              <p className="eyebrow mt-7 text-[#e8a72f]">Mission</p>
              <p className="mt-3 text-lg leading-8 text-[#d9d0bf]">{site.mission}</p>
            </div>
          </div>
          <div className="grid gap-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div className="card flex gap-4 p-5" key={value.title}>
                  <Icon className="shrink-0 text-[#1f7a72]" />
                  <div><h2 className="font-black">{value.title}</h2><p className="mt-1 text-[#66716b]">{value.text}</p></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export function EcosystemPage() {
  return (
    <>
      <PageHero eyebrow="Ecosystem" title="A connected suite for rural labour, agriculture, construction, livestock, commerce, and expertise." text="The product ecosystem is designed as practical infrastructure: clear workflows for each audience, with shared trust and data rails behind the scenes." />
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <article className="card p-6" key={product.name}>
                  <Icon className="text-[#1f7a72]" size={34} />
                  <p className="mt-5 text-sm font-black uppercase tracking-[.12em] text-[#b85b2b]">{product.audience}</p>
                  <h2 className="mt-2 text-2xl font-black">{product.name}</h2>
                  <p className="mt-3 text-[#66716b]">{product.summary}</p>
                  <ul className="mt-5 grid gap-2 text-sm">
                    {product.benefits.map((benefit) => <li key={benefit}>- {benefit}</li>)}
                  </ul>
                  <LocalizedLink className="button button-accent mt-6" href="/contact">Request demo</LocalizedLink>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export function TechnologyPage() {
  return (
    <>
      <PageHero eyebrow="Technology" title="AI infrastructure explained at the right altitude." text="Shramic describes product capabilities, trust architecture, and operating principles without revealing algorithms, pricing formulas, raw survey data, or confidential strategy." />
      <section className="section">
        <div className="container grid gap-6 md:grid-cols-2">
          {coreEngines.map((engine) => {
            const Icon = engine.icon;
            return (
            <div className="card p-6" key={engine.title}>
              <Icon className="text-[#1f7a72]" size={32} />
              <h2 className="mt-5 text-xl font-black">{engine.title}</h2>
              <p className="mt-3 text-[#66716b]">{engine.summary}</p>
              <p className="mt-5 font-black text-[#b85b2b]">{engine.outcome}</p>
            </div>
          );
          })}
        </div>
      </section>
    </>
  );
}

export function ImpactPage() {
  return (
    <>
      <PageHero eyebrow="Impact" title="Livelihood infrastructure with measurable rural outcomes." text="Shramic's impact lens spans worker access, farmer productivity, rural enterprise growth, and field-level institutional collaboration." />
      <section className="section">
        <div className="container grid grid-2">
          {impactAreas.map((area) => {
            const Icon = area.icon;
            return <div className="card p-6" key={area.title}><Icon className="text-[#1f7a72]" /><h2 className="mt-4 text-xl font-black">{area.title}</h2><p className="mt-3 text-[#66716b]">{area.text}</p></div>;
          })}
        </div>
      </section>
      <section className="section bg-[#fffdf7]">
        <div className="container">
          <SectionHeading eyebrow="Field evidence" title="The impact case starts with real labour-market friction." text="The seed deck connects underemployment, delayed projects, wage cuts, and seasonal losses to a common infrastructure gap." />
          <div className="grid grid-2">
            {problemStats.map((stat) => {
              const Icon = stat.icon;
              return <div className="glass p-6" key={stat.label}><Icon className="text-[#1f7a72]" /><p className="mt-4 text-4xl font-black">{stat.value}</p><h2 className="mt-2 font-black text-[#b85b2b]">{stat.label}</h2><p className="mt-2 text-[#66716b]">{stat.detail}</p></div>;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export function TractionPage() {
  return (
    <>
      <PageHero eyebrow="Traction" title="Public milestones from field validation and ecosystem building." text="Metrics are deliberately public-safe: they communicate progress without exposing raw data, financial projections, or detailed methodology." />
      <section className="section bg-[#fffdf7]">
        <div className="container grid grid-2">
          {metrics.map((metric) => <div className="glass p-8" key={metric.label}><p className="text-6xl font-black text-[#1f7a72]">{metric.value}</p><h2 className="mt-4 text-2xl font-black">{metric.label}</h2><p className="mt-3 text-[#66716b]">{metric.detail}</p></div>)}
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Proof of concept" title="Evidence organized for product and field validation." text="Publicly shareable validation categories from the seed deck are summarized below; raw files and sensitive artifacts should remain controlled." />
          <div className="grid grid-3">
            {validationEvidence.map((item) => <div className="card p-5" key={item}><p className="font-black">{item}</p></div>)}
          </div>
        </div>
      </section>
    </>
  );
}

export function TeamPage() {
  return (
    <>
      <PageHero eyebrow="Team" title="Operators, builders, researchers, and advisors for rural-scale execution." text="A seed team structure for launch, ready to be connected to the CMS and media library." />
      <section className="section">
        <div className="container grid grid-3">
          {teamMembers.map((member) => <article className="card p-6" key={member.name}><div className="grid h-20 w-20 place-items-center rounded-lg bg-[#1f7a7218] text-2xl font-black text-[#1f7a72]">{member.name.split(" ").map((part) => part[0]).join("")}</div><h2 className="mt-5 text-xl font-black">{member.name}</h2><p className="font-bold text-[#b85b2b]">{member.role}</p><p className="mt-3 text-[#66716b]">{member.bio}</p></article>)}
        </div>
      </section>
    </>
  );
}

export function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Blog" title="Field notes, product thinking, and rural technology strategy." text="A launch-ready article index with categories, excerpts, and SEO-friendly slugs." />
      <section className="section">
        <div className="container grid grid-3">
          {blogPosts.map((post) => <article className="card p-6" key={post.slug}><p className="eyebrow">{post.category}</p><h2 className="mt-3 text-2xl font-black">{post.title}</h2><p className="mt-3 text-[#66716b]">{post.excerpt}</p><p className="mt-5 text-sm font-bold text-[#b85b2b]">{post.date}</p></article>)}
        </div>
      </section>
    </>
  );
}

export function PartnersPage() {
  return (
    <>
      <PageHero eyebrow="Partners" title="Built with institutions, communities, and rural market operators." text="Shramic is designed for partnership with academic institutions, incubators, NGOs, businesses, and government-aligned programs." />
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1fr_.9fr]">
          <div className="grid grid-2">{partners.map((partner) => <div className="card p-5" key={partner.name}><p className="eyebrow">{partner.category}</p><h2 className="mt-2 font-black capitalize">{partner.name}</h2><p className="mt-2 text-sm text-[#66716b]">{partner.description}</p></div>)}</div>
          <ContactForm kind="partner" />
        </div>
      </section>
    </>
  );
}

export function CareersPage() {
  return (
    <>
      <PageHero eyebrow="Careers" title="Build rural technology where field reality matters." text="Join a team working across product, operations, research, partnerships, and engineering." />
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1fr_.9fr]">
          <div className="grid gap-4">{careers.map((career) => <div className="card p-5" key={career.title}><h2 className="text-xl font-black">{career.title}</h2><p className="mt-1 text-[#66716b]">{career.department} - {career.location} - {career.type}</p></div>)}</div>
          <ContactForm kind="career" />
        </div>
      </section>
    </>
  );
}

export function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Reach the right Shramic team." text="General inquiries, partnerships, careers, demos, and investor relations can all start here." />
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div className="card p-6">
            <h2 className="text-2xl font-black">Communication channels</h2>
            <div className="mt-5 grid gap-3 text-[#66716b]">
              <p>Company: {site.legalName}</p>
              <p>CIN: {site.cin}</p>
              <p>General: {site.emails.general}</p>
              <p>Partnerships: {site.emails.partnerships}</p>
              <p>Careers: {site.emails.careers}</p>
              <p>Investors: {site.emails.investors}</p>
              <p>Phone: {site.phone}</p>
              <p>Office: {site.address}</p>
              <p>Business hours: Monday to Friday, 10:00 AM to 6:00 PM IST</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

export function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Common questions about Shramic Networks." text="Clear answers for workers, partners, investors, institutions, and future teammates." />
      <section className="section">
        <div className="container grid gap-4">
          {faqs.map(([question, answer]) => <details className="card p-5" key={question}><summary className="cursor-pointer font-black">{question}</summary><p className="mt-3 text-[#66716b]">{answer}</p></details>)}
        </div>
      </section>
    </>
  );
}

export function PrivacyPage() {
  return <LegalPage title="Privacy Policy" text="Shramic Networks handles personal data for inquiries, applications, demos, partnerships, analytics, and investor workflows. Visitors may request access, correction, or deletion where applicable. Tracking is designed to respect consent and privacy preferences." />;
}

export function TermsPage() {
  return <LegalPage title="Terms of Service" text="This website provides public information about Shramic Networks. Users must not misuse forms, attempt unauthorized access, scrape confidential areas, or rely on public content as a binding commercial agreement." />;
}

function LegalPage({ title, text }: { title: string; text: string }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} text="Production legal copy should be reviewed by counsel before launch." />
      <section className="section"><div className="container card p-8"><p className="lead">{text}</p></div></section>
    </>
  );
}
