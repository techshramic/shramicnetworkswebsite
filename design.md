# Design Document

## Overview

The Shramic Networks Corporate Platform is a premium, investor-grade, production-ready web application built with Next.js 15 App Router, PostgreSQL, and modern React ecosystem. The platform serves as the primary digital presence for Shramic Networks Private Limited, showcasing their AI-powered infrastructure for India's rural labour market and livelihood ecosystem.

### System Purpose

The platform serves multiple critical business functions:
- **Public Website**: 14 content-rich pages presenting company information, product ecosystem, impact metrics, and thought leadership
- **Lead Generation**: Multi-form lead capture system for customers, partners, investors, and job applicants
- **Content Management**: Full-featured CMS for managing blog posts, team profiles, careers, partners, FAQs, and metrics
- **Admin Dashboard**: Comprehensive backend for monitoring activity, managing content, and reviewing submissions
- **Multilingual Support**: Content delivery in 6 Indian languages (English, Hindi, Marathi, Kannada, Telugu, Tamil)

### Key Design Principles

1. **Premium Visual Experience**: Cinematic rural-tech aesthetic with warm sunrise tones, smooth animations, and high-quality imagery
2. **Performance First**: Sub-2.5s LCP, optimized images, code splitting, and CDN delivery
3. **Security by Design**: NextAuth authentication, CSRF protection, input sanitization, and confidential information protection
4. **Accessibility Compliance**: WCAG 2.1 Level AA standards with keyboard navigation and screen reader support
5. **Scalability**: Serverless architecture on Vercel with PostgreSQL database and cloud media storage
6. **Developer Experience**: Type-safe APIs with Prisma, component-driven architecture with shadcn/ui, and comprehensive testing

## Architecture

### High-Level Architecture

```mermaid
graph TB
    subgraph "Client Layer"
        Browser[Web Browser]
        Mobile[Mobile Browser]
    end
    
    subgraph "CDN Layer"
        Vercel[Vercel Edge Network]
        CloudinaryS3[Cloudinary/S3 CDN]
    end
    
    subgraph "Application Layer - Next.js 15"
        AppRouter[App Router]
        ServerComponents[Server Components]
        ClientComponents[Client Components]
        ServerActions[Server Actions]
        RouteHandlers[Route Handlers]
        Middleware[Middleware]
    end
    
    subgraph "Authentication Layer"
        NextAuth[NextAuth.js]
        SessionManagement[Session Management]
    end
    
    subgraph "Data Layer"
        Prisma[Prisma ORM]
        PostgreSQL[(PostgreSQL Database)]
    end
    
    subgraph "External Services"
        MediaStorage[Cloudinary/S3]
        EmailService[Resend/SMTP]
        Analytics[Google Analytics 4]
        ErrorTracking[Sentry]
    end
    
    Browser --> Vercel
    Mobile --> Vercel
    Vercel --> AppRouter
    AppRouter --> ServerComponents
    AppRouter --> ClientComponents
    ServerComponents --> ServerActions
    ServerActions --> Prisma
    ServerActions --> NextAuth
    ServerActions --> EmailService
    ClientComponents --> RouteHandlers
    RouteHandlers --> Prisma
    Prisma --> PostgreSQL
    ServerComponents --> MediaStorage
    CloudinaryS3 --> Browser
    CloudinaryS3 --> Mobile
    Middleware --> NextAuth
    NextAuth --> SessionManagement
    SessionManagement --> PostgreSQL
    Browser --> Analytics
    ServerActions --> ErrorTracking
```

### Technology Stack

#### Frontend
- **Framework**: Next.js 15 (App Router, React 19)
- **UI Library**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **State Management**: React Context + Server Components with unstable_cache
- **Internationalization**: next-intl (App Router pattern)
- **Fonts**: Next.js Font Optimization with locale-aware loading (Noto Sans for Indic scripts)

#### Backend
- **Runtime**: Node.js 20+ (Vercel serverless functions)
- **API Layer**: Next.js Server Actions + Route Handlers
- **Authentication**: NextAuth.js v5
- **ORM**: Prisma
- **Database**: PostgreSQL (Vercel Postgres/Supabase)

#### Infrastructure
- **Hosting**: Vercel (serverless deployment)
- **Media Storage**: Cloudinary or AWS S3
- **Email**: Resend or SMTP
- **Analytics**: Google Analytics 4
- **Error Tracking**: Sentry
- **CDN**: Vercel Edge Network + Cloudinary/S3 CDN

#### Development Tools
- **Language**: TypeScript 5+
- **Package Manager**: pnpm
- **Linting**: ESLint + Prettier
- **Testing**: Vitest + Playwright
- **Git Hooks**: Husky + lint-staged

### Deployment Architecture

```mermaid
graph LR
    subgraph "Development"
        Dev[Local Development]
        DevDB[(Local PostgreSQL)]
    end
    
    subgraph "Staging"
        StagingVercel[Vercel Preview]
        StagingDB[(Staging PostgreSQL)]
    end
    
    subgraph "Production"
        ProdVercel[Vercel Production]
        ProdDB[(Production PostgreSQL)]
        ProdCDN[CDN]
    end
    
    Dev -->|Git Push| GitHub[GitHub Repository]
    GitHub -->|Auto Deploy| StagingVercel
    GitHub -->|Manual Deploy| ProdVercel
    StagingVercel --> StagingDB
    ProdVercel --> ProdDB
    ProdVercel --> ProdCDN
```

## Components and Interfaces

### File Structure

```
shramic-corporate-platform/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── [locale]/                 # Internationalized routes
│   │   │   ├── (public)/             # Public pages group
│   │   │   │   ├── page.tsx          # Home page
│   │   │   │   ├── about/
│   │   │   │   ├── ecosystem/
│   │   │   │   ├── technology/
│   │   │   │   ├── impact/
│   │   │   │   ├── traction/
│   │   │   │   ├── team/
│   │   │   │   ├── blog/
│   │   │   │   ├── partners/
│   │   │   │   ├── careers/
│   │   │   │   ├── contact/
│   │   │   │   ├── privacy/
│   │   │   │   ├── terms/
│   │   │   │   └── faq/
│   │   │   ├── (admin)/              # Admin pages group
│   │   │   │   ├── dashboard/
│   │   │   │   ├── content/
│   │   │   │   │   ├── blog/
│   │   │   │   │   ├── team/
│   │   │   │   │   ├── careers/
│   │   │   │   │   ├── partners/
│   │   │   │   │   └── faq/
│   │   │   │   ├── leads/
│   │   │   │   ├── media/
│   │   │   │   └── settings/
│   │   │   ├── auth/                 # Auth pages
│   │   │   │   ├── signin/
│   │   │   │   ├── signup/
│   │   │   │   └── reset-password/
│   │   │   ├── layout.tsx            # Root layout with providers
│   │   │   └── not-found.tsx         # 404 page
│   │   ├── api/                      # API routes
│   │   │   ├── auth/[...nextauth]/   # NextAuth endpoints
│   │   │   ├── upload/               # Media upload
│   │   │   ├── webhooks/             # External webhooks
│   │   │   └── health/               # Health check
│   │   ├── actions/                  # Server Actions
│   │   │   ├── auth.ts
│   │   │   ├── blog.ts
│   │   │   ├── forms.ts
│   │   │   ├── team.ts
│   │   │   ├── careers.ts
│   │   │   ├── partners.ts
│   │   │   └── faq.ts
│   │   └── globals.css               # Global styles
│   ├── components/                   # React components
│   │   ├── ui/                       # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── form.tsx
│   │   │   ├── table.tsx
│   │   │   └── ...
│   │   ├── layout/                   # Layout components
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── sidebar.tsx
│   │   │   └── mobile-nav.tsx
│   │   ├── forms/                    # Form components
│   │   │   ├── contact-form.tsx
│   │   │   ├── partnership-form.tsx
│   │   │   ├── career-application-form.tsx
│   │   │   ├── demo-request-form.tsx
│   │   │   └── investor-inquiry-form.tsx
│   │   ├── sections/                 # Page sections
│   │   │   ├── hero-section.tsx
│   │   │   ├── features-section.tsx
│   │   │   ├── stats-section.tsx
│   │   │   ├── testimonials-section.tsx
│   │   │   └── cta-section.tsx
│   │   ├── admin/                    # Admin components
│   │   │   ├── dashboard-stats.tsx
│   │   │   ├── leads-table.tsx
│   │   │   ├── content-editor.tsx
│   │   │   └── media-library.tsx
│   │   └── shared/                   # Shared components
│   │       ├── language-selector.tsx
│   │       ├── theme-toggle.tsx
│   │       ├── loading-spinner.tsx
│   │       └── error-boundary.tsx
│   ├── lib/                          # Utility libraries
│   │   ├── prisma.ts                 # Prisma client
│   │   ├── auth.ts                   # NextAuth config
│   │   ├── email.ts                  # Email service
│   │   ├── storage.ts                # Media storage
│   │   ├── analytics.ts              # Analytics helpers
│   │   ├── seo.ts                    # SEO utilities
│   │   └── utils.ts                  # General utilities
│   ├── hooks/                        # Custom React hooks
│   │   ├── use-media-query.ts
│   │   ├── use-scroll-position.ts
│   │   ├── use-intersection-observer.ts
│   │   └── use-form-submission.ts
│   ├── types/                        # TypeScript types
│   │   ├── index.ts
│   │   ├── api.ts
│   │   ├── database.ts
│   │   └── forms.ts
│   ├── config/                       # Configuration
│   │   ├── site.ts                   # Site metadata
│   │   ├── navigation.ts             # Navigation structure
│   │   └── constants.ts              # Constants
│   ├── middleware.ts                 # Next.js middleware
│   └── i18n.ts                       # Internationalization config
├── prisma/
│   ├── schema.prisma                 # Database schema
│   ├── migrations/                   # Database migrations
│   └── seed.ts                       # Seed data
├── public/
│   ├── images/
│   ├── fonts/
│   │   ├── noto-sans-devanagari/
│   │   ├── noto-sans-kannada/
│   │   ├── noto-sans-telugu/
│   │   └── noto-sans-tamil/
│   ├── icons/
│   └── messages/                     # Translation files (next-intl App Router)
│       ├── en.json
│       ├── hi.json
│       ├── mr.json
│       ├── kn.json
│       ├── te.json
│       └── ta.json
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── .env.example
├── .env.local
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

### Component Architecture

#### Public Pages Components

**HomePage Component**
- HeroSection: Animated hero with mission statement
- EcosystemOverview: Interactive product cards
- StatsSection: Animated traction metrics
- ImpactHighlights: Case study previews
- CTASection: Lead capture forms

**EcosystemPage Component**
- ProductGrid: Six platform cards with hover effects
- InteractiveVisualization: Mermaid diagram showing platform connections
- UseCaseSection: Benefits and use cases per platform
- DemoRequestCTA: Form for each platform

**BlogPage Component**
- BlogGrid: Paginated blog post cards
- CategoryFilter: Filter by category/tag
- SearchBar: Full-text search
- FeaturedPost: Highlighted article

#### Admin Dashboard Components

**DashboardLayout Component**
- Sidebar: Navigation menu
- TopBar: User menu, notifications
- ContentArea: Dynamic content based on route

**LeadsTable Component**
- DataTable: Sortable, filterable table
- ExportButton: CSV export functionality
- StatusBadge: Visual status indicators
- ActionMenu: View, archive, delete actions

**ContentEditor Component**
- RichTextEditor: TipTap or similar
- MediaPicker: Image selection from library
- MetadataForm: SEO fields, categories, tags
- PreviewPane: Live preview of content

#### Form Components

**BaseForm Component** (shared logic)
- Form validation with Zod
- Error handling and display
- Loading states
- Success/error messages
- CAPTCHA integration

**ContactForm Component**
- Fields: name, email, phone, organization, message
- Department routing
- Email notifications

**CareerApplicationForm Component**
- Fields: personal info, resume upload, cover letter
- File upload handling
- Application tracking

### API Interfaces

#### Server Actions

```typescript
// src/app/actions/forms.ts
export async function submitContactForm(data: ContactFormData): Promise<ActionResult> {
  // Validate input with Zod
  // Store in database
  // Send email notifications
  // Return success/error
}

export async function submitDemoRequest(data: DemoRequestData): Promise<ActionResult> {
  // Similar pattern
}

// src/app/actions/blog.ts
export async function createBlogPost(data: BlogPostData): Promise<ActionResult> {
  // Auth check
  // Validate input
  // Create post in database
  // Return result
}

export async function updateBlogPost(id: string, data: BlogPostData): Promise<ActionResult> {
  // Auth check
  // Update post
  // Return result
}

export async function deleteBlogPost(id: string): Promise<ActionResult> {
  // Auth check (soft delete)
  // Mark as deleted
  // Return result
}

// src/app/actions/auth.ts
import { auth, signIn as nextAuthSignIn, signOut as nextAuthSignOut } from '@/lib/auth';

export async function signIn(credentials: SignInData): Promise<ActionResult> {
  // Validate credentials
  // Create session
  // Return user data
}

export async function signOut(): Promise<void> {
  await nextAuthSignOut();
}

export async function resetPassword(email: string): Promise<ActionResult> {
  // Generate reset token
  // Send email
  // Return success
}

export async function getCurrentUser() {
  const session = await auth();
  return session?.user;
}
```

#### Route Handlers

```typescript
// src/app/api/upload/route.ts
export async function POST(request: Request): Promise<Response> {
  // Auth check
  // Validate file
  // Upload to Cloudinary/S3
  // Return URL
}

// src/app/api/health/route.ts
export async function GET(): Promise<Response> {
  // Check database connection
  // Check external services
  // Return health status
}

// src/app/api/webhooks/route.ts
export async function POST(request: Request): Promise<Response> {
  // Verify webhook signature
  // Process webhook payload
  // Return acknowledgment
}
```

### Authentication Flow

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant NextAuth
    participant Database
    participant AdminDashboard
    
    User->>Browser: Navigate to /auth/signin
    Browser->>NextAuth: Display sign-in form
    User->>Browser: Enter credentials
    Browser->>NextAuth: Submit credentials
    NextAuth->>Database: Verify credentials
    Database-->>NextAuth: User data
    NextAuth->>NextAuth: Create session
    NextAuth->>Browser: Set session cookie
    Browser->>AdminDashboard: Redirect to dashboard
    AdminDashboard->>NextAuth: Verify session
    NextAuth-->>AdminDashboard: Session valid
    AdminDashboard->>User: Display dashboard
```

### State Management Strategy

**Server State** (Server Components + unstable_cache)
- Blog posts (cached with revalidation)
- Team members (cached with revalidation)
- Career listings (cached with revalidation)
- Partners (cached with revalidation)
- FAQ entries (cached with revalidation)
- Form submissions (server-side only)
- Analytics data (server-side only)

**Client State** (React Context)
- UI state (modals, dropdowns)
- Form state (React Hook Form)
- Theme preference
- Language preference
- Toast notifications

**URL State** (Next.js routing)
- Pagination
- Filters
- Search queries
- Active tabs



## Data Models

### Database Schema

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ============================================
// Authentication & User Management
// ============================================

model User {
  id            String    @id @default(cuid())
  email         String    @unique
  name          String?
  password      String    // Hashed with argon2id
  role          UserRole  @default(EDITOR)
  emailVerified DateTime?
  image         String?
  
  // Security
  failedLoginAttempts Int      @default(0)
  lockedUntil         DateTime?
  lastLoginAt         DateTime?
  
  // Relationships
  accounts      Account[]
  sessions      Session[]
  blogPosts     BlogPost[]
  
  // Timestamps
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  @@index([email])
  @@map("users")
}

enum UserRole {
  ADMIN
  EDITOR
  VIEWER
}

model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String? @db.Text
  access_token      String? @db.Text
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String? @db.Text
  session_state     String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
  @@map("accounts")
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@map("sessions")
}

model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime

  @@unique([identifier, token])
  @@map("verification_tokens")
}

// ============================================
// Content Management
// ============================================

model BlogPost {
  id          String        @id @default(cuid())
  slug        String        @unique
  featuredImage String?
  
  // SEO
  metaTitle       String?
  metaDescription String?
  
  // Publishing
  status      PostStatus    @default(DRAFT)
  publishedAt DateTime?
  
  // Relationships
  authorId    String
  author      User          @relation(fields: [authorId], references: [id])
  categories  BlogCategory[]
  tags        BlogTag[]
  translations BlogPostTranslation[]
  versions    ContentVersion[]
  
  // Timestamps
  createdAt   DateTime      @default(now())
  updatedAt   DateTime      @updatedAt
  deletedAt   DateTime?     // Soft delete
  
  @@index([slug])
  @@index([status, publishedAt])
  @@index([authorId])
  @@map("blog_posts")
}

model BlogPostTranslation {
  id          String   @id @default(cuid())
  blogPostId  String
  blogPost    BlogPost @relation(fields: [blogPostId], references: [id], onDelete: Cascade)
  locale      String
  title       String
  excerpt     String?  @db.Text
  content     String   @db.Text
  
  // Timestamps
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  @@unique([blogPostId, locale])
  @@index([locale])
  @@map("blog_post_translations")
}

model ContentVersion {
  id          String   @id @default(cuid())
  blogPostId  String
  blogPost    BlogPost @relation(fields: [blogPostId], references: [id], onDelete: Cascade)
  version     Int
  locale      String
  title       String
  content     String   @db.Text
  excerpt     String?  @db.Text
  changedBy   String
  changeNote  String?
  
  // Timestamps
  createdAt   DateTime @default(now())
  
  @@unique([blogPostId, version, locale])
  @@index([blogPostId])
  @@map("content_versions")
}

enum PostStatus {
  DRAFT
  PUBLISHED
  ARCHIVED
}

model BlogCategory {
  id          String     @id @default(cuid())
  name        String
  slug        String     @unique
  description String?
  
  // Relationships
  posts       BlogPost[]
  
  // Localization
  locale      String     @default("en")
  
  // Timestamps
  createdAt   DateTime   @default(now())
  updatedAt   DateTime   @updatedAt
  
  @@index([slug])
  @@map("blog_categories")
}

model BlogTag {
  id        String     @id @default(cuid())
  name      String
  slug      String     @unique
  
  // Relationships
  posts     BlogPost[]
  
  // Timestamps
  createdAt DateTime   @default(now())
  updatedAt DateTime   @updatedAt
  
  @@index([slug])
  @@map("blog_tags")
}

model TeamMember {
  id          String   @id @default(cuid())
  photoUrl    String?
  email       String?
  
  // Social Links
  linkedinUrl String?
  twitterUrl  String?
  githubUrl   String?
  
  // Display
  displayOrder Int     @default(0)
  isActive     Boolean @default(true)
  
  // Relationships
  translations TeamMemberTranslation[]
  
  // Timestamps
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  deletedAt   DateTime? // Soft delete
  
  @@index([displayOrder])
  @@index([isActive])
  @@map("team_members")
}

model TeamMemberTranslation {
  id           String     @id @default(cuid())
  teamMemberId String
  teamMember   TeamMember @relation(fields: [teamMemberId], references: [id], onDelete: Cascade)
  locale       String
  name         String
  role         String
  bio          String     @db.Text
  
  // Timestamps
  createdAt    DateTime   @default(now())
  updatedAt    DateTime   @updatedAt
  
  @@unique([teamMemberId, locale])
  @@index([locale])
  @@map("team_member_translations")
}

model Career {
  id          String       @id @default(cuid())
  slug        String       @unique
  department  String
  location    String
  type        EmploymentType
  
  // Status
  status      CareerStatus @default(OPEN)
  
  // Relationships
  applications CareerApplication[]
  translations CareerTranslation[]
  
  // Timestamps
  createdAt   DateTime     @default(now())
  updatedAt   DateTime     @updatedAt
  deletedAt   DateTime?    // Soft delete
  
  @@index([slug])
  @@index([status])
  @@index([department])
  @@map("careers")
}

model CareerTranslation {
  id          String   @id @default(cuid())
  careerId    String
  career      Career   @relation(fields: [careerId], references: [id], onDelete: Cascade)
  locale      String
  title       String
  description String   @db.Text
  requirements String  @db.Text
  
  // Timestamps
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  @@unique([careerId, locale])
  @@index([locale])
  @@map("career_translations")
}

enum EmploymentType {
  FULL_TIME
  PART_TIME
  CONTRACT
  INTERNSHIP
}

enum CareerStatus {
  OPEN
  CLOSED
  FILLED
}

model Partner {
  id          String   @id @default(cuid())
  logoUrl     String
  websiteUrl  String?
  category    PartnerCategory
  
  // Display
  displayOrder Int     @default(0)
  isActive     Boolean @default(true)
  
  // Relationships
  translations PartnerTranslation[]
  
  // Timestamps
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  deletedAt   DateTime? // Soft delete
  
  @@index([category])
  @@index([displayOrder])
  @@map("partners")
}

model PartnerTranslation {
  id          String  @id @default(cuid())
  partnerId   String
  partner     Partner @relation(fields: [partnerId], references: [id], onDelete: Cascade)
  locale      String
  name        String
  description String? @db.Text
  
  // Timestamps
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  @@unique([partnerId, locale])
  @@index([locale])
  @@map("partner_translations")
}

enum PartnerCategory {
  INCUBATOR
  INVESTOR
  TECHNOLOGY
  ACADEMIC
  GOVERNMENT
  CORPORATE
}

model FAQ {
  id          String   @id @default(cuid())
  category    String
  
  // Display
  displayOrder Int     @default(0)
  isActive     Boolean @default(true)
  
  // Relationships
  translations FAQTranslation[]
  
  // Timestamps
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  deletedAt   DateTime? // Soft delete
  
  @@index([category])
  @@index([displayOrder])
  @@map("faqs")
}

model FAQTranslation {
  id        String   @id @default(cuid())
  faqId     String
  faq       FAQ      @relation(fields: [faqId], references: [id], onDelete: Cascade)
  locale    String
  question  String
  answer    String   @db.Text
  
  // Timestamps
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  @@unique([faqId, locale])
  @@index([locale])
  @@map("faq_translations")
}

model TractionMetric {
  id          String   @id @default(cuid())
  name        String   @unique
  value       String
  description String?
  
  // Display
  displayOrder Int     @default(0)
  isActive     Boolean @default(true)
  
  // Timestamps
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  @@index([displayOrder])
  @@map("traction_metrics")
}

// ============================================
// Lead Capture & Forms
// ============================================

model FormSubmission {
  id          String     @id @default(cuid())
  formType    FormType
  status      SubmissionStatus @default(NEW)
  
  // Visitor Data
  name        String
  email       String
  phone       String?
  organization String?
  message     String?    @db.Text
  
  // Additional Data (JSON for flexibility)
  metadata    Json?
  
  // Tracking
  ipAddress   String?
  userAgent   String?
  referrer    String?
  
  // Timestamps
  createdAt   DateTime   @default(now())
  updatedAt   DateTime   @updatedAt
  
  @@index([formType, status])
  @@index([email])
  @@index([createdAt])
  @@map("form_submissions")
}

enum FormType {
  CONTACT
  PARTNERSHIP
  DEMO_REQUEST
  INVESTOR_INQUIRY
  CAREER_APPLICATION
}

enum SubmissionStatus {
  NEW
  IN_PROGRESS
  COMPLETED
  ARCHIVED
}

model InvestorInquiry {
  id          String   @id @default(cuid())
  
  // Investor Data
  name        String
  email       String
  phone       String?
  organization String?
  message     String?  @db.Text
  
  // NDA Tracking
  ndaVersion      String   // Version of NDA presented
  ndaAcceptedAt   DateTime // Timestamp of NDA acknowledgment
  ndaIpAddress    String   // IP address at time of acceptance
  emailVerified   Boolean  @default(false)
  verificationToken String? @unique
  verifiedAt      DateTime?
  
  // Status
  status      SubmissionStatus @default(NEW)
  
  // Tracking
  userAgent   String?
  referrer    String?
  
  // Timestamps
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  @@index([email])
  @@index([status])
  @@index([createdAt])
  @@map("investor_inquiries")
}

model CareerApplication {
  id          String   @id @default(cuid())
  careerId    String
  career      Career   @relation(fields: [careerId], references: [id])
  
  // Applicant Data
  name        String
  email       String
  phone       String?
  resumeUrl   String
  coverLetter String?  @db.Text
  
  // Status
  status      ApplicationStatus @default(SUBMITTED)
  
  // Tracking
  ipAddress   String?
  userAgent   String?
  
  // Timestamps
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  @@index([careerId, status])
  @@index([email])
  @@index([createdAt])
  @@map("career_applications")
}

enum ApplicationStatus {
  SUBMITTED
  UNDER_REVIEW
  SHORTLISTED
  REJECTED
  HIRED
}

// ============================================
// Media Management
// ============================================

model MediaAsset {
  id          String     @id @default(cuid())
  filename    String
  originalName String
  mimeType    String
  size        Int
  url         String
  thumbnailUrl String?
  
  // Metadata
  altText     String?
  caption     String?
  width       Int?
  height      Int?
  
  // Storage
  storageProvider String  // 'cloudinary' or 's3'
  storageKey      String
  
  // Timestamps
  createdAt   DateTime   @default(now())
  updatedAt   DateTime   @updatedAt
  deletedAt   DateTime?  // Soft delete
  
  @@index([mimeType])
  @@index([createdAt])
  @@map("media_assets")
}

// ============================================
// Analytics & Logging
// ============================================

model AuditLog {
  id          String   @id @default(cuid())
  userId      String?
  action      String
  entity      String
  entityId    String?
  changes     Json?
  ipAddress   String?
  userAgent   String?
  
  // Timestamps
  createdAt   DateTime @default(now())
  
  @@index([userId])
  @@index([entity, entityId])
  @@index([createdAt])
  @@map("audit_logs")
}

model EmailLog {
  id          String      @id @default(cuid())
  to          String
  from        String
  subject     String
  template    String?
  status      EmailStatus @default(PENDING)
  error       String?     @db.Text
  
  // Tracking
  sentAt      DateTime?
  openedAt    DateTime?
  clickedAt   DateTime?
  
  // Timestamps
  createdAt   DateTime    @default(now())
  updatedAt   DateTime    @updatedAt
  
  @@index([status])
  @@index([createdAt])
  @@map("email_logs")
}

enum EmailStatus {
  PENDING
  SENT
  FAILED
  BOUNCED
  OPENED
  CLICKED
}
```

### Entity Relationships

```mermaid
erDiagram
    User ||--o{ BlogPost : writes
    User ||--o{ Account : has
    User ||--o{ Session : has
    
    BlogPost ||--o{ BlogCategory : "belongs to"
    BlogPost ||--o{ BlogTag : "has"
    
    Career ||--o{ CareerApplication : receives
    
    FormSubmission }o--|| FormType : "is type"
    CareerApplication }o--|| Career : "applies to"
    
    User {
        string id PK
        string email UK
        string password
        enum role
        datetime createdAt
    }
    
    BlogPost {
        string id PK
        string title
        string slug UK
        text content
        enum status
        datetime publishedAt
        string authorId FK
    }
    
    Career {
        string id PK
        string title
        string slug UK
        enum type
        enum status
    }
    
    FormSubmission {
        string id PK
        enum formType
        enum status
        string email
        datetime createdAt
    }
```

### Data Access Patterns

**Read Operations**
- Blog posts: Paginated list with filters (category, tag, search)
- Team members: Ordered by displayOrder, filtered by isActive
- Careers: Filtered by status, department, location
- Partners: Grouped by category, ordered by displayOrder
- FAQs: Grouped by category, ordered by displayOrder
- Form submissions: Paginated with filters (formType, status, date range)

**Write Operations**
- Blog posts: Create, update, soft delete, publish/unpublish
- Team members: Create, update, soft delete, reorder
- Careers: Create, update, soft delete, change status
- Form submissions: Create, update status
- Media assets: Upload, update metadata, soft delete

**Performance Optimizations**
- Indexes on frequently queried fields (slug, status, email, createdAt)
- Soft deletes to preserve data integrity
- JSON fields for flexible metadata storage
- Composite indexes for common query patterns



## Error Handling

### Error Handling Strategy

**Client-Side Error Handling**

```typescript
// Error Boundary Component
export class ErrorBoundary extends React.Component<Props, State> {
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log to error tracking service
    logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }
    return this.props.children;
  }
}

// Form Error Handling
export function ContactForm() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data: ContactFormData) {
    try {
      const result = await submitContactForm(data);
      
      if (result.success) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error(result.error || "Failed to send message");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
      logErrorToService(error);
    }
  }
}
```

**Server-Side Error Handling**

```typescript
// Server Action Error Handling
export async function submitContactForm(data: ContactFormData): Promise<ActionResult> {
  try {
    // Validate input
    const validated = contactFormSchema.parse(data);
    
    // Store in database
    const submission = await prisma.formSubmission.create({
      data: {
        formType: 'CONTACT',
        ...validated,
      },
    });
    
    // Send emails
    await Promise.all([
      sendConfirmationEmail(validated.email),
      sendNotificationEmail(validated),
    ]);
    
    return { success: true, data: submission };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: "Invalid form data", details: error.errors };
    }
    
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return { success: false, error: "Database error" };
    }
    
    // Log unexpected errors
    logErrorToService(error);
    return { success: false, error: "An unexpected error occurred" };
  }
}

// API Route Error Handling
export async function POST(request: Request) {
  try {
    const session = await auth();
    
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
    
    const data = await request.json();
    // Process request...
    
    return NextResponse.json({ success: true });
  } catch (error) {
    logErrorToService(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
```

**Error Pages**

```typescript
// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-muted-foreground">
        The page you're looking for doesn't exist.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Go Home</Link>
      </Button>
    </div>
  );
}

// app/error.tsx
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    logErrorToService(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Something went wrong!</h1>
      <p className="mt-4 text-muted-foreground">
        We're sorry for the inconvenience.
      </p>
      <Button onClick={reset} className="mt-8">
        Try again
      </Button>
    </div>
  );
}
```

### Error Logging and Monitoring

**Sentry Integration**

```typescript
// lib/sentry.ts
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
  beforeSend(event, hint) {
    // Filter sensitive data
    if (event.request) {
      delete event.request.cookies;
      delete event.request.headers?.authorization;
    }
    return event;
  },
});

export function logErrorToService(error: unknown, context?: Record<string, any>) {
  Sentry.captureException(error, {
    extra: context,
  });
}
```

### Validation Strategy

**Input Validation with Zod**

```typescript
// types/forms.ts
import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\+?[1-9]\d{9,14}$/, "Invalid phone number").optional(),
  organization: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const blogPostSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  slug: z.string().regex(/^[a-z0-9-]+$/, "Invalid slug format"),
  excerpt: z.string().max(200, "Excerpt must be under 200 characters").optional(),
  content: z.string().min(100, "Content must be at least 100 characters"),
  featuredImage: z.string().url("Invalid image URL").optional(),
  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]),
  categories: z.array(z.string()).min(1, "At least one category required"),
  tags: z.array(z.string()).optional(),
});
```

## Testing Strategy

### Testing Approach

This feature is a full-stack web application involving UI rendering, CRUD operations, authentication flows, and infrastructure deployment. **Property-based testing is not applicable** for this type of application. Instead, we will use:

1. **Unit Tests**: Test individual functions, utilities, and business logic
2. **Integration Tests**: Test Server Actions, API routes, and database operations
3. **End-to-End Tests**: Test critical user flows through the browser
4. **Visual Regression Tests**: Test UI components for visual consistency
5. **Accessibility Tests**: Automated WCAG 2.1 Level AA compliance checks

### Unit Testing

**Test Framework**: Vitest
**Coverage Target**: 80% for critical paths

```typescript
// tests/unit/lib/utils.test.ts
import { describe, it, expect } from 'vitest';
import { formatDate, slugify, truncate } from '@/lib/utils';

describe('Utils', () => {
  describe('slugify', () => {
    it('converts string to slug format', () => {
      expect(slugify('Hello World')).toBe('hello-world');
      expect(slugify('Test & Example')).toBe('test-example');
    });
  });

  describe('formatDate', () => {
    it('formats date correctly', () => {
      const date = new Date('2024-01-15');
      expect(formatDate(date)).toBe('January 15, 2024');
    });
  });
});

// tests/unit/lib/validation.test.ts
import { describe, it, expect } from 'vitest';
import { contactFormSchema } from '@/types/forms';

describe('Form Validation', () => {
  describe('contactFormSchema', () => {
    it('validates correct data', () => {
      const data = {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'This is a test message',
      };
      expect(() => contactFormSchema.parse(data)).not.toThrow();
    });

    it('rejects invalid email', () => {
      const data = {
        name: 'John Doe',
        email: 'invalid-email',
        message: 'This is a test message',
      };
      expect(() => contactFormSchema.parse(data)).toThrow();
    });
  });
});
```

### Integration Testing

**Test Framework**: Vitest with Prisma mock
**Focus**: Server Actions, API routes, database operations

```typescript
// tests/integration/actions/forms.test.ts
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { submitContactForm } from '@/app/actions/forms';
import { prisma } from '@/lib/prisma';

describe('Form Actions', () => {
  beforeEach(async () => {
    // Setup test database
    await prisma.$connect();
  });

  afterEach(async () => {
    // Cleanup
    await prisma.formSubmission.deleteMany();
    await prisma.$disconnect();
  });

  describe('submitContactForm', () => {
    it('creates form submission in database', async () => {
      const data = {
        name: 'Test User',
        email: 'test@example.com',
        message: 'Test message',
      };

      const result = await submitContactForm(data);

      expect(result.success).toBe(true);
      
      const submission = await prisma.formSubmission.findFirst({
        where: { email: data.email },
      });
      
      expect(submission).toBeDefined();
      expect(submission?.name).toBe(data.name);
    });

    it('returns error for invalid data', async () => {
      const data = {
        name: 'T',
        email: 'invalid',
        message: 'Short',
      };

      const result = await submitContactForm(data);

      expect(result.success).toBe(false);
      expect(result.error).toBeDefined();
    });
  });
});

// tests/integration/api/upload.test.ts
import { describe, it, expect } from 'vitest';
import { POST } from '@/app/api/upload/route';

describe('Upload API', () => {
  it('requires authentication', async () => {
    const request = new Request('http://localhost/api/upload', {
      method: 'POST',
    });

    const response = await POST(request);

    expect(response.status).toBe(401);
  });

  it('uploads file successfully', async () => {
    // Mock authenticated session
    // Mock file upload
    // Assert successful upload
  });
});
```

### End-to-End Testing

**Test Framework**: Playwright
**Focus**: Critical user flows

```typescript
// tests/e2e/contact-form.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test('submits contact form successfully', async ({ page }) => {
    await page.goto('/contact');

    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('textarea[name="message"]', 'This is a test message');

    await page.click('button[type="submit"]');

    await expect(page.locator('text=Message sent successfully')).toBeVisible();
  });

  test('shows validation errors', async ({ page }) => {
    await page.goto('/contact');

    await page.click('button[type="submit"]');

    await expect(page.locator('text=Name must be at least 2 characters')).toBeVisible();
    await expect(page.locator('text=Invalid email address')).toBeVisible();
  });
});

// tests/e2e/admin-auth.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Admin Authentication', () => {
  test('admin can sign in', async ({ page }) => {
    await page.goto('/auth/signin');

    await page.fill('input[name="email"]', 'admin@shramic.com');
    await page.fill('input[name="password"]', 'SecurePassword123!');

    await page.click('button[type="submit"]');

    await expect(page).toHaveURL('/dashboard');
    await expect(page.locator('text=Dashboard')).toBeVisible();
  });

  test('redirects unauthenticated users', async ({ page }) => {
    await page.goto('/dashboard');

    await expect(page).toHaveURL('/auth/signin');
  });
});

// tests/e2e/blog.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Blog System', () => {
  test('displays blog posts', async ({ page }) => {
    await page.goto('/blog');

    await expect(page.locator('article')).toHaveCount(10);
  });

  test('filters by category', async ({ page }) => {
    await page.goto('/blog');

    await page.click('button:has-text("Technology")');

    await expect(page).toHaveURL('/blog?category=technology');
  });

  test('searches blog posts', async ({ page }) => {
    await page.goto('/blog');

    await page.fill('input[placeholder="Search"]', 'AI');
    await page.press('input[placeholder="Search"]', 'Enter');

    await expect(page).toHaveURL('/blog?q=AI');
  });
});
```

### Accessibility Testing

**Test Framework**: axe-core with Playwright

```typescript
// tests/a11y/pages.spec.ts
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility', () => {
  test('home page is accessible', async ({ page }) => {
    await page.goto('/');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('contact form is accessible', async ({ page }) => {
    await page.goto('/contact');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('admin dashboard is accessible', async ({ page }) => {
    // Login first
    await page.goto('/auth/signin');
    await page.fill('input[name="email"]', 'admin@shramic.com');
    await page.fill('input[name="password"]', 'SecurePassword123!');
    await page.click('button[type="submit"]');

    await page.goto('/dashboard');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
```

### Visual Regression Testing

**Test Framework**: Playwright with screenshots

```typescript
// tests/visual/components.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Visual Regression', () => {
  test('hero section matches snapshot', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('[data-testid="hero-section"]')).toHaveScreenshot();
  });

  test('blog card matches snapshot', async ({ page }) => {
    await page.goto('/blog');

    await expect(page.locator('article').first()).toHaveScreenshot();
  });
});
```

### Performance Testing

**Test Framework**: Lighthouse CI

```typescript
// lighthouserc.js
module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/about',
        'http://localhost:3000/ecosystem',
        'http://localhost:3000/blog',
        'http://localhost:3000/contact',
      ],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        'first-contentful-paint': ['error', { maxNumericValue: 1800 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
      },
    },
  },
};
```

### Test Coverage Requirements

- **Unit Tests**: 80% coverage for utility functions and business logic
- **Integration Tests**: 100% coverage for Server Actions and API routes
- **E2E Tests**: Critical user flows (form submission, authentication, content management)
- **Accessibility Tests**: All public pages and admin dashboard
- **Performance Tests**: Core Web Vitals for all major pages

### Continuous Integration

```yaml
# .github/workflows/test.yml
name: Test

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Run unit tests
        run: pnpm test:unit
      
      - name: Run integration tests
        run: pnpm test:integration
      
      - name: Run E2E tests
        run: pnpm test:e2e
      
      - name: Run accessibility tests
        run: pnpm test:a11y
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3
```



## Performance Optimization

### Core Web Vitals Targets

- **First Contentful Paint (FCP)**: < 1.8 seconds
- **Largest Contentful Paint (LCP)**: < 2.5 seconds
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Input Delay (FID)**: < 100 milliseconds
- **Time to Interactive (TTI)**: < 3.8 seconds

### Image Optimization

**Next.js Image Component**

```typescript
import Image from 'next/image';

export function HeroSection() {
  return (
    <div className="relative h-screen">
      <Image
        src="/images/hero-background.jpg"
        alt="Rural agriculture landscape"
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article>
      <Image
        src={post.featuredImage}
        alt={post.title}
        width={400}
        height={300}
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="rounded-lg"
      />
    </article>
  );
}
```

**Image Formats and Compression**

- Serve WebP/AVIF with JPEG fallback
- Compress images to 85% quality
- Generate responsive image sizes (320w, 640w, 1024w, 1920w)
- Use Cloudinary/S3 automatic format selection
- Implement lazy loading for below-the-fold images

### Code Splitting and Lazy Loading

**Dynamic Imports**

```typescript
// Lazy load heavy components
import dynamic from 'next/dynamic';

const AnimatedDiagram = dynamic(() => import('@/components/animated-diagram'), {
  loading: () => <Skeleton className="h-96 w-full" />,
  ssr: false,
});

const RichTextEditor = dynamic(() => import('@/components/rich-text-editor'), {
  loading: () => <Skeleton className="h-64 w-full" />,
  ssr: false,
});

// Lazy load animations
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div));
```

**Route-based Code Splitting**

Next.js automatically splits code by route. Additional optimizations:

```typescript
// next.config.js
module.exports = {
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react'],
  },
  webpack: (config) => {
    config.optimization.splitChunks = {
      chunks: 'all',
      cacheGroups: {
        default: false,
        vendors: false,
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
        },
        lib: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    };
    return config;
  },
};
```

### Caching Strategy

**Browser Caching**

```typescript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};
```

**Server-Side Caching**

```typescript
// lib/cache.ts
import { unstable_cache } from 'next/cache';

export const getCachedBlogPosts = unstable_cache(
  async () => {
    return await prisma.blogPost.findMany({
      where: { status: 'PUBLISHED' },
      orderBy: { publishedAt: 'desc' },
      take: 10,
    });
  },
  ['blog-posts'],
  {
    revalidate: 3600, // 1 hour
    tags: ['blog-posts'],
  }
);

// Revalidate on demand
import { revalidateTag } from 'next/cache';

export async function createBlogPost(data: BlogPostData) {
  const post = await prisma.blogPost.create({ data });
  revalidateTag('blog-posts');
  return post;
}
```

**Database Query Optimization**

```typescript
// Efficient queries with Prisma
export async function getBlogPostWithRelations(slug: string) {
  return await prisma.blogPost.findUnique({
    where: { slug },
    include: {
      author: {
        select: {
          name: true,
          image: true,
        },
      },
      categories: {
        select: {
          name: true,
          slug: true,
        },
      },
      tags: {
        select: {
          name: true,
          slug: true,
        },
      },
    },
  });
}

// Pagination with cursor-based approach
export async function getPaginatedBlogPosts(cursor?: string, limit = 10) {
  return await prisma.blogPost.findMany({
    take: limit,
    skip: cursor ? 1 : 0,
    cursor: cursor ? { id: cursor } : undefined,
    where: { status: 'PUBLISHED' },
    orderBy: { publishedAt: 'desc' },
  });
}
```

### Server-Side Rendering Strategy

**Static Generation for Public Pages**

```typescript
// app/[locale]/blog/[slug]/page.tsx
export async function generateStaticParams() {
  const posts = await prisma.blogPost.findMany({
    where: { status: 'PUBLISHED' },
    select: { slug: true },
  });

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostWithRelations(params.slug);
  
  if (!post) {
    notFound();
  }

  return <BlogPostContent post={post} />;
}
```

**Incremental Static Regeneration**

```typescript
// app/[locale]/blog/page.tsx
export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage() {
  const posts = await getCachedBlogPosts();
  
  return <BlogGrid posts={posts} />;
}
```

### Font Optimization

```typescript
// app/layout.tsx
import { Inter, Poppins, Noto_Sans_Devanagari, Noto_Sans_Kannada, Noto_Sans_Telugu, Noto_Sans_Tamil } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

// Indic fonts for multilingual support
const notoSansDevanagari = Noto_Sans_Devanagari({
  weight: ['400', '600', '700'],
  subsets: ['devanagari'],
  display: 'swap',
  variable: '--font-devanagari',
});

const notoSansKannada = Noto_Sans_Kannada({
  weight: ['400', '600', '700'],
  subsets: ['kannada'],
  display: 'swap',
  variable: '--font-kannada',
});

const notoSansTelugu = Noto_Sans_Telugu({
  weight: ['400', '600', '700'],
  subsets: ['telugu'],
  display: 'swap',
  variable: '--font-telugu',
});

const notoSansTamil = Noto_Sans_Tamil({
  weight: ['400', '600', '700'],
  subsets: ['tamil'],
  display: 'swap',
  variable: '--font-tamil',
});

export default function RootLayout({ 
  children,
  params: { locale }
}: { 
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Locale-aware font loading
  const fontVariables = [
    inter.variable,
    poppins.variable,
  ];
  
  // Add Indic fonts based on locale
  if (locale === 'hi' || locale === 'mr') {
    fontVariables.push(notoSansDevanagari.variable);
  } else if (locale === 'kn') {
    fontVariables.push(notoSansKannada.variable);
  } else if (locale === 'te') {
    fontVariables.push(notoSansTelugu.variable);
  } else if (locale === 'ta') {
    fontVariables.push(notoSansTamil.variable);
  }
  
  return (
    <html lang={locale} className={fontVariables.join(' ')}>
      <body>{children}</body>
    </html>
  );
}
```

```css
/* globals.css - Locale-aware font families */
:root {
  --font-sans: var(--font-inter), system-ui, sans-serif;
  --font-heading: var(--font-poppins), system-ui, sans-serif;
}

/* Hindi and Marathi - Devanagari script */
html[lang="hi"],
html[lang="mr"] {
  --font-sans: var(--font-devanagari), var(--font-inter), system-ui, sans-serif;
  --font-heading: var(--font-devanagari), var(--font-poppins), system-ui, sans-serif;
}

/* Kannada script */
html[lang="kn"] {
  --font-sans: var(--font-kannada), var(--font-inter), system-ui, sans-serif;
  --font-heading: var(--font-kannada), var(--font-poppins), system-ui, sans-serif;
}

/* Telugu script */
html[lang="te"] {
  --font-sans: var(--font-telugu), var(--font-inter), system-ui, sans-serif;
  --font-heading: var(--font-telugu), var(--font-poppins), system-ui, sans-serif;
}

/* Tamil script */
html[lang="ta"] {
  --font-sans: var(--font-tamil), var(--font-inter), system-ui, sans-serif;
  --font-heading: var(--font-tamil), var(--font-poppins), system-ui, sans-serif;
}
```
```

### Animation Performance

**Framer Motion Optimization**

```typescript
// Use transform and opacity for GPU acceleration
import { motion } from 'framer-motion';

export function AnimatedCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      // Use transform instead of top/left
      whileHover={{ scale: 1.05 }}
      // Reduce motion for accessibility
      style={{ willChange: 'transform, opacity' }}
    >
      <Card />
    </motion.div>
  );
}

// Respect prefers-reduced-motion
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  return prefersReducedMotion;
}
```

### Bundle Size Optimization

**Tree Shaking and Dead Code Elimination**

```typescript
// Import only what you need
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

// Avoid barrel imports for large libraries
import debounce from 'lodash/debounce'; // Good
// import { debounce } from 'lodash'; // Bad - imports entire library
```

**Bundle Analysis**

```json
// package.json
{
  "scripts": {
    "analyze": "ANALYZE=true next build"
  }
}
```

```typescript
// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  // ... other config
});
```

## Security Measures

### Authentication Security

**Password Security**

```typescript
// lib/auth.ts
import argon2 from 'argon2';

export async function hashPassword(password: string): Promise<string> {
  return argon2.hash(password, {
    type: argon2.argon2id,
    memoryCost: 65536, // 64 MB
    timeCost: 3,
    parallelism: 4,
  });
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  try {
    return await argon2.verify(hash, password);
  } catch {
    return false;
  }
}

// Password complexity requirements
export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number')
  .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character');
```

**Session Management**

```typescript
// lib/auth.ts
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from './prisma';

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      async authorize(credentials) {
        // Verify credentials
        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string },
        });

        if (!user) {
          throw new Error('Invalid credentials');
        }

        // Check account lock
        if (user.lockedUntil && user.lockedUntil > new Date()) {
          throw new Error('Account is locked');
        }

        // Verify password
        const isValid = await verifyPassword(credentials.password as string, user.password);

        if (!isValid) {
          // Increment failed attempts
          await prisma.user.update({
            where: { id: user.id },
            data: {
              failedLoginAttempts: { increment: 1 },
              lockedUntil: user.failedLoginAttempts >= 4
                ? new Date(Date.now() + 15 * 60 * 1000) // Lock for 15 minutes
                : null,
            },
          });
          throw new Error('Invalid credentials');
        }

        // Reset failed attempts on successful login
        await prisma.user.update({
          where: { id: user.id },
          data: {
            failedLoginAttempts: 0,
            lockedUntil: null,
            lastLoginAt: new Date(),
          },
        });

        return user;
      },
    }),
  ],
  session: {
    strategy: 'database',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  cookies: {
    sessionToken: {
      name: '__Secure-next-auth.session-token',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
      },
    },
  },
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        session.user.role = user.role;
      }
      return session;
    },
  },
});
```

### Input Sanitization

**XSS Prevention**

```typescript
// lib/sanitize.ts
import DOMPurify from 'isomorphic-dompurify';

export function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'a', 'ul', 'ol', 'li', 'h1', 'h2', 'h3'],
    ALLOWED_ATTR: ['href', 'target', 'rel'],
  });
}

export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove angle brackets
    .slice(0, 1000); // Limit length
}
```

**SQL Injection Prevention**

Prisma automatically prevents SQL injection through parameterized queries:

```typescript
// Safe - Prisma handles parameterization
const user = await prisma.user.findUnique({
  where: { email: userInput },
});

// Never use raw SQL with user input
// const users = await prisma.$queryRaw`SELECT * FROM users WHERE email = ${userInput}`; // UNSAFE
```

### CSRF Protection

```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // CSRF protection for state-changing operations
  if (['POST', 'PUT', 'DELETE', 'PATCH'].includes(request.method)) {
    const origin = request.headers.get('origin');
    const host = request.headers.get('host');

    if (origin && !origin.includes(host!)) {
      return NextResponse.json(
        { error: 'CSRF validation failed' },
        { status: 403 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
```

### Rate Limiting

```typescript
// lib/rate-limit.ts
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, '10 s'), // 10 requests per 10 seconds
});

// Usage in API route
export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') ?? 'unknown';
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429 }
    );
  }

  // Process request...
}
```

### Content Security Policy

```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import crypto from 'crypto';

export function middleware(request: NextRequest) {
  // Generate nonce for CSP
  const nonce = crypto.randomBytes(16).toString('base64');
  
  const response = NextResponse.next();
  
  // Set CSP with nonce
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' https://www.googletagmanager.com;
    style-src 'self' 'nonce-${nonce}';
    img-src 'self' data: https: blob:;
    font-src 'self' data:;
    connect-src 'self' https://www.google-analytics.com;
    frame-ancestors 'none';
    base-uri 'self';
    form-action 'self';
  `.replace(/\s{2,}/g, ' ').trim();
  
  response.headers.set('Content-Security-Policy', cspHeader);
  response.headers.set('X-Nonce', nonce);
  
  return response;
}

// next.config.js
const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
];

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};
```

### Environment Variables Security

```bash
# .env.example
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/shramic?pgbouncer=true&connection_limit=10"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"

# Encryption
ENCRYPTION_KEY="generate-with-openssl-rand-hex-32"

# Media Storage
CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""

# Email
RESEND_API_KEY=""
EMAIL_FROM="noreply@shramic.com"

# Analytics
NEXT_PUBLIC_GA_ID=""

# Error Tracking
SENTRY_DSN=""
SENTRY_AUTH_TOKEN=""

# Rate Limiting
UPSTASH_REDIS_REST_URL=""
UPSTASH_REDIS_REST_TOKEN=""
```

```typescript
// lib/env.ts
import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  NEXTAUTH_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string().min(32),
  ENCRYPTION_KEY: z.string().length(64),
  CLOUDINARY_CLOUD_NAME: z.string(),
  CLOUDINARY_API_KEY: z.string(),
  CLOUDINARY_API_SECRET: z.string(),
  RESEND_API_KEY: z.string(),
  EMAIL_FROM: z.string().email(),
});

export const env = envSchema.parse(process.env);
```

### Database Connection Pooling

```typescript
// lib/db.ts
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// Connection pool configuration for Vercel Postgres with PgBouncer
// DATABASE_URL should include: ?pgbouncer=true&connection_limit=10
```

### Rate Limiting for Server Actions

```typescript
// lib/rate-limit.ts
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// Form submission rate limit: 5 requests per minute
export const formRateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, '1 m'),
  analytics: true,
  prefix: 'ratelimit:form',
});

// General API rate limit: 10 requests per 10 seconds
export const apiRateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, '10 s'),
  analytics: true,
  prefix: 'ratelimit:api',
});

// Helper function for Server Actions
export async function checkRateLimit(identifier: string, limiter = formRateLimit) {
  const { success, limit, remaining, reset } = await limiter.limit(identifier);
  
  if (!success) {
    throw new Error(`Rate limit exceeded. Try again in ${Math.ceil((reset - Date.now()) / 1000)} seconds.`);
  }
  
  return { success, limit, remaining, reset };
}

// Usage in Server Actions
// src/app/actions/forms.ts
export async function submitContactForm(data: ContactFormData): Promise<ActionResult> {
  try {
    // Rate limiting
    const ip = headers().get('x-forwarded-for') ?? 'unknown';
    await checkRateLimit(ip);
    
    // Validate input with Zod
    const validated = contactFormSchema.parse(data);
    
    // Store in database
    const submission = await prisma.formSubmission.create({
      data: {
        formType: 'CONTACT',
        ...validated,
      },
    });
    
    // Send email notifications
    await Promise.all([
      sendConfirmationEmail(validated.email),
      sendNotificationEmail(validated),
    ]);
    
    return { success: true, data: submission };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: "Invalid form data", details: error.errors };
    }
    
    if (error.message?.includes('Rate limit')) {
      return { success: false, error: error.message };
    }
    
    logErrorToService(error);
    return { success: false, error: "An unexpected error occurred" };
  }
}
```

### Data Encryption

```typescript
// lib/encryption.ts
import crypto from 'crypto';

const algorithm = 'aes-256-gcm';
const key = Buffer.from(process.env.ENCRYPTION_KEY!, 'hex');

export function encrypt(text: string): string {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  
  const authTag = cipher.getAuthTag();
  
  return `${iv.toString('hex')}:${authTag.toString('hex')}:${encrypted}`;
}

export function decrypt(encryptedText: string): string {
  const [ivHex, authTagHex, encrypted] = encryptedText.split(':');
  
  const iv = Buffer.from(ivHex, 'hex');
  const authTag = Buffer.from(authTagHex, 'hex');
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  
  decipher.setAuthTag(authTag);
  
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  
  return decrypted;
}
```

## Deployment Architecture

### Vercel Deployment

**Project Configuration**

```json
// vercel.json
{
  "buildCommand": "pnpm build",
  "devCommand": "pnpm dev",
  "installCommand": "pnpm install",
  "framework": "nextjs",
  "regions": ["bom1"], // Mumbai region for India
  "env": {
    "DATABASE_URL": "@database-url",
    "NEXTAUTH_SECRET": "@nextauth-secret"
  }
}
```

**Build Configuration**

```typescript
// next.config.js
const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

module.exports = withNextIntl({
  poweredByHeader: false,
  compress: true,
  images: {
    domains: ['res.cloudinary.com', 's3.amazonaws.com'],
    formats: ['image/avif', 'image/webp'],
  },
  // Note: next-intl with App Router does not use the i18n config block
  // Locales are configured in src/i18n.ts and routing is handled by [locale] folder
});
```

```typescript
// src/i18n.ts
import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const locales = ['en', 'hi', 'mr', 'kn', 'te', 'ta'] as const;
export const defaultLocale = 'en' as const;

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
```

```typescript
// src/middleware.ts
import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
```

### Database Deployment

**Vercel Postgres / Supabase**

```bash
# Production database
DATABASE_URL="postgresql://user:password@db.region.supabase.co:5432/postgres"

# Connection pooling
DATABASE_URL_POOLED="postgresql://user:password@pooler.region.supabase.co:6543/postgres"
```

**Migration Strategy**

```bash
# Run migrations on deployment
pnpm prisma migrate deploy

# Generate Prisma client
pnpm prisma generate
```

### CI/CD Pipeline

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Run tests
        run: pnpm test
      
      - name: Build
        run: pnpm build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

### Monitoring and Observability

**Health Check Endpoint**

```typescript
// app/api/health/route.ts
export async function GET() {
  try {
    // Check database connection
    await prisma.$queryRaw`SELECT 1`;
    
    return NextResponse.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      services: {
        database: 'up',
        redis: 'up',
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: 'Service unavailable',
      },
      { status: 503 }
    );
  }
}
```

**Uptime Monitoring**

- Use Vercel Analytics for performance monitoring
- Configure Sentry for error tracking
- Set up UptimeRobot or similar for availability monitoring
- Configure alerts for downtime and errors

### Backup Strategy

**Database Backups**

- Automated daily backups via Supabase/Vercel Postgres
- Point-in-time recovery capability
- Backup retention: 30 days
- Test restore procedures monthly

**Media Backups**

- Cloudinary/S3 versioning enabled
- Cross-region replication for disaster recovery
- Backup retention: 90 days

### Rollback Procedures

**Vercel Rollback**

```bash
# Rollback to previous deployment
vercel rollback

# Rollback to specific deployment
vercel rollback [deployment-url]
```

**Database Rollback**

```bash
# Rollback last migration
pnpm prisma migrate resolve --rolled-back [migration-name]

# Restore from backup
pg_restore -d database_name backup_file.dump
```

