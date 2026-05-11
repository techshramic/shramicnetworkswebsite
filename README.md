# Shramic Networks Corporate Platform

Premium corporate website and backend foundation for Shramic Networks Private Limited.

## Stack

- Next.js 15 App Router
- React 19 and TypeScript
- Tailwind CSS v4
- next-intl locale routing for `en`, `hi`, `mr`, `kn`, `te`, and `ta`
- Prisma schema for PostgreSQL-backed CMS, leads, investor NDA workflow, media, metrics, and audit-ready content

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000/en`.

## Implemented Foundation

- 14 public pages: Home, About, Ecosystem, Technology, Impact, Traction, Team, Blog, Partners, Careers, Contact, Privacy, Terms, FAQ
- Responsive header, mobile navigation, footer, hero sections, cards, contact forms, and public-safe traction metrics
- SEO metadata utilities, sitemap, robots, security headers, health endpoint
- Prisma schema covering users, content, translations, leads, investor NDA tracking, media, metrics, email logs, and content versions
- Accessible basics: skip link, semantic sections, form labels, focusable controls, reduced-motion CSS

## Next Milestones

- Wire Server Actions to store form submissions
- Add NextAuth v5 credentials provider and protected admin middleware
- Add CMS CRUD screens and media upload integration
- Seed database content from the static launch content
- Add automated tests, analytics, Sentry, and deployment configuration
