import { BarChart3, Bot, BriefcaseBusiness, Building2, GraduationCap, Handshake, HeartPulse, IndianRupee, Leaf, MapPin, RadioTower, ShieldCheck, Tractor, Users } from "lucide-react";

export const site = {
  name: "Shramic Networks",
  legalName: "Shramic Networks Private Limited",
  url: "https://www.shramic.com",
  description:
    "AI-powered infrastructure for India's rural labour market, connecting workers, farmers, contractors, businesses, experts, and institutions.",
  cin: "U62010KA2025PTC208675",
  emails: {
    general: "hello@shramic.com",
    partnerships: "partners@shramic.com",
    careers: "careers@shramic.com",
    investors: "investors@shramic.com"
  },
  phone: "+91 95354 55717",
  address: "No. 138, RR No. HSB746, Ward No. 7, Near Bus Stand, Hanamsagar, Kushtagi, Koppal, Karnataka 583281, India",
  vision:
    "To build a national rural employment and services network that supports agriculture, construction, livestock, rural businesses, and skilled workers through technology, data intelligence, and transparent pricing systems.",
  mission:
    "To create a Shramic Community: digital infrastructure that creates employment opportunities, improves rural livelihoods, provides fair and transparent wages, and connects workers, farmers, experts, and businesses by digitizing rural economic activity."
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/ecosystem", label: "Ecosystem" },
  { href: "/technology", label: "Technology" },
  { href: "/impact", label: "Impact" },
  { href: "/traction", label: "Traction" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export const allPages = [
  "/",
  "/about",
  "/ecosystem",
  "/technology",
  "/impact",
  "/traction",
  "/team",
  "/blog",
  "/partners",
  "/careers",
  "/contact",
  "/privacy",
  "/terms",
  "/faq"
];

export const metrics = [
  { label: "Respondents", value: "923", detail: "field conversations across rural livelihood segments" },
  { label: "Districts", value: "30", detail: "early validation across diverse regional economies" },
  { label: "Provider pain", value: "73%", detail: "providers said finding reliable workers is their biggest challenge" },
  { label: "Seasonal loss risk", value: "₹50K", detail: "reported upper-end loss in a single season due to labour gaps and no-shows" }
];

export const problemStats = [
  {
    label: "Middlemen dependency",
    value: "45%",
    icon: Handshake,
    detail: "providers reported paying middlemen or extra coordination costs during urgency."
  },
  {
    label: "Wage cuts",
    value: "20%",
    icon: IndianRupee,
    detail: "workers reported wage cuts in existing informal hiring pathways."
  },
  {
    label: "Idle workdays",
    value: "6-10",
    icon: Users,
    detail: "many workers remain idle this many days per month despite available work nearby."
  },
  {
    label: "Project delays",
    value: "77.8%",
    icon: Building2,
    detail: "construction projects face delays when reliable labour is not available on time."
  }
];

export const coreEngines = [
  {
    title: "AI Job Matching Engine",
    icon: RadioTower,
    summary:
      "Smart discovery connecting workers to jobs using skill, location, availability, and demand signals.",
    outcome: "Right worker, right job, right time."
  },
  {
    title: "AI Fair Pricing Engine",
    icon: Bot,
    summary:
      "High-level wage benchmark infrastructure designed around role, experience, location, seasonality, and demand-supply context.",
    outcome: "Fair wages, trust, efficient markets."
  }
];

export const products = [
  {
    name: "Shramic Krushi",
    icon: Tractor,
    audience: "Farmers, machinery owners, nurseries",
    summary: "Agriculture workforce, farm machinery, nursery support, and expert services in one rural operating layer.",
    benefits: ["Seasonal labour coordination", "Equipment availability discovery", "Verified agronomy support"]
  },
  {
    name: "Shramic Build",
    icon: Building2,
    audience: "Contractors, developers, skilled labour",
    summary: "Construction workforce management for local contractors and field teams.",
    benefits: ["Crew sourcing", "Attendance-ready workflows", "Skill matching by trade"]
  },
  {
    name: "Shramic Worker App",
    icon: Users,
    audience: "Workers across rural and semi-urban sectors",
    summary: "A unified worker app for jobs, trust signals, training pathways, and livelihood history.",
    benefits: ["Multi-sector job access", "Profile portability", "Local-language experience"]
  },
  {
    name: "PashuSetu",
    icon: HeartPulse,
    audience: "Livestock owners and rural commerce networks",
    summary: "Livestock, manure, inputs, and rural commerce workflows for village economies.",
    benefits: ["Livestock service discovery", "Manure marketplace rails", "Local commerce loops"]
  },
  {
    name: "Shramic Business",
    icon: BriefcaseBusiness,
    audience: "Suppliers, institutions, rural enterprises",
    summary: "B2B rails for suppliers, aggregators, NGOs, and institutions operating in rural markets.",
    benefits: ["Verified supply networks", "Institutional demand capture", "Procurement support"]
  },
  {
    name: "Shramic Experts",
    icon: GraduationCap,
    audience: "Experts, trainers, field consultants",
    summary: "Verified experts for consultations, training, diagnostics, and field enablement.",
    benefits: ["Expert discovery", "Training programs", "Trust-based consultation"]
  }
];

export const values = [
  { title: "Rural First", icon: Leaf, text: "Design decisions start with field realities, local languages, and trust." },
  { title: "Responsible AI", icon: Bot, text: "AI is positioned as infrastructure and assistance, not as a replacement for human judgment." },
  { title: "Institutional Trust", icon: ShieldCheck, text: "The platform protects confidential information while making public impact legible." },
  { title: "Partnership Led", icon: Handshake, text: "Government, academic, business, and community partners are treated as core infrastructure." }
];

export const teamMembers = [
  {
    name: "Mutturaj Goudra",
    role: "Founder and CEO",
    bio: "Leads vision, product strategy, and technology architecture for Shramic Networks."
  },
  {
    name: "Vaishnavi",
    role: "Co-Founder",
    bio: "Leads community engagement, grassroots operations, and trust-building across field networks."
  },
  {
    name: "Pavan Miskin",
    role: "CTO",
    bio: "Responsible for Android application development and core technology execution."
  },
  {
    name: "Tech Team",
    role: "6+ Members",
    bio: "Supports ML model development, app development, backend systems, and product engineering."
  },
  {
    name: "Internship Program",
    role: "60+ Interns",
    bio: "Contributes across development, research, marketing, operations, design, and growth support."
  },
  {
    name: "Ground Team",
    role: "6+ Field Coordinators",
    bio: "Supports pilot execution, worker and farmer onboarding, and field data collection."
  }
];

export const validationEvidence = [
  "MVP demo videos and end-to-end product walkthroughs",
  "Worker interviews with field workers, electricians, and domain experts",
  "Market validation reports, user feedback summaries, and survey analysis",
  "Unified design and technical specifications for workflows and architecture",
  "Field test logs with on-site observations and onboarding notes"
];

export const blogPosts = [
  "Why Rural Labour Infrastructure Needs a Platform Approach",
  "Designing AI Assistance Without Exposing Sensitive Methods",
  "What 923 Field Responses Taught Us About Trust",
  "Farm Machinery Access as a Livelihood Multiplier",
  "Building for Six Languages From Day One"
].map((title, index) => ({
  title,
  slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, ""),
  category: ["Strategy", "Technology", "Research", "Agriculture", "Product"][index],
  excerpt:
    "Field notes and product thinking from Shramic Networks as we build practical technology infrastructure for rural livelihoods.",
  date: `2026-0${Math.min(index + 1, 5)}-12`
}));

export const careers = [
  "Senior Full Stack Engineer",
  "Field Research Associate",
  "Partnerships Manager",
  "Product Designer",
  "Operations Program Lead"
].map((title, index) => ({
  title,
  department: ["Engineering", "Research", "Growth", "Design", "Operations"][index],
  location: index % 2 === 0 ? "Bengaluru / Hybrid" : "Field-first / India",
  type: "Full-time"
}));

export const partners = [
  "Rural innovation labs",
  "Agricultural universities",
  "Local entrepreneur networks",
  "Livelihood NGOs",
  "Construction associations",
  "Equipment owner groups",
  "Dairy and livestock networks",
  "State-level incubators",
  "Skill development institutions",
  "Farmer producer organizations"
].map((name, index) => ({
  name,
  category: ["Institutional", "Academic", "Community", "Industry"][index % 4],
  description: "Collaboration pathway for field validation, implementation, training, or ecosystem expansion."
}));

export const faqs = [
  ["What does Shramic Networks build?", "We build AI-powered infrastructure for rural labour, agriculture, construction, livestock, business, and expert-service workflows."],
  ["Is the platform available in Indian languages?", "The website is structured for English, Hindi, Marathi, Kannada, Telugu, and Tamil."],
  ["Do you reveal AI algorithms publicly?", "No. We describe capabilities at a high level while protecting proprietary methods and sensitive business data."],
  ["How can investors contact the team?", "Investors can use the inquiry form and acknowledge the NDA workflow before sensitive material is shared."],
  ["Can partners run pilots?", "Yes. We welcome institutional, government, academic, and business pilots aligned with rural livelihood outcomes."],
  ["What validation has Shramic completed?", "The team has surveyed 923 workers, farmers, and contractors across 30 Karnataka districts and organized proof-of-concept evidence including MVP demos, interviews, market validation reports, technical specs, and field test logs."],
  ["Which sectors are covered?", "Agriculture, construction, livestock, rural commerce, worker services, and expert consultation."],
  ["How are workers protected?", "The product direction emphasizes consent, portability, local language access, and transparent opportunity matching."],
  ["Where is the company based?", "Shramic Networks Private Limited operates from India with field-first rural engagement."],
  ["Can job seekers apply online?", "Yes. The careers page includes open roles and an application form."],
  ["How quickly will the team respond?", "Most inbound messages receive a response within two to five working days depending on the inquiry type."]
];

export const impactAreas = [
  { title: "Livelihood Access", icon: Users, text: "Helping workers find trusted opportunities across agriculture, construction, and local services." },
  { title: "Farm Productivity", icon: Tractor, text: "Improving access to labour, machinery, nurseries, and advisory support when seasonal timing matters." },
  { title: "Rural Commerce", icon: BarChart3, text: "Connecting local demand, supply, and service providers through structured digital workflows." },
  { title: "Regional Intelligence", icon: MapPin, text: "Making district-level patterns visible without exposing raw field data or proprietary analysis." }
];
