# Implementation Plan: Shramic Corporate Platform

## Overview

This implementation plan breaks down the development of the Shramic Networks corporate website and admin platform into discrete, incremental coding tasks. The platform is built with Next.js 15 App Router, TypeScript, PostgreSQL (via Prisma), shadcn/ui, Tailwind CSS, and deployed on Vercel. Each task builds on previous work, with checkpoints to ensure quality and integration.

## Tasks

- [ ] 1. Initialize project structure and core dependencies
  - Create Next.js 15 project with TypeScript and App Router
  - Install and configure Tailwind CSS v4, shadcn/ui, Framer Motion
  - Set up pnpm workspace and configure package.json scripts
  - Configure ESLint, Prettier, and Husky git hooks
  - Create directory structure following the design specification
  - Set up environment variables template (.env.example)
  - _Requirements: 18.1, 18.2, 18.4, 19.8_

- [ ] 2. Set up database and authentication foundation
  - [ ] 2.1 Configure Prisma with PostgreSQL
    - Install Prisma and initialize with PostgreSQL provider
    - Create complete database schema from design document (User, BlogPost, Career, FormSubmission, etc.)
    - Generate Prisma client and configure connection pooling
    - Create initial migration
    - _Requirements: 13.1, 13.2, 13.3, 13.14_
  
  - [ ] 2.2 Implement NextAuth.js authentication system
    - Install and configure NextAuth.js v5
    - Create authentication configuration with credentials provider
    - Implement password hashing with argon2id
    - Create sign-in, sign-up, and password reset pages
    - Implement session management with database-backed sessions
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_
  
  - [ ]* 2.3 Write unit tests for authentication logic
    - Test password hashing and verification
    - Test session creation and validation
    - Test rate limiting and account locking
    - _Requirements: 6.7, 6.8_

- [ ] 3. Implement core UI components and design system
  - [ ] 3.1 Set up shadcn/ui components
    - Install shadcn/ui CLI and initialize configuration
    - Add core components: Button, Input, Card, Dialog, Form, Table
    - Configure Tailwind theme with warm sunrise tones (oranges, yellows, golds)
    - Create typography scale and spacing system
    - _Requirements: 8.3, 8.4, 8.5, 8.6_
  
  - [ ] 3.2 Create layout components
    - Build Header component with navigation and language selector
    - Build Footer component with links and social media
    - Build mobile navigation with hamburger menu
    - Implement responsive breakpoints (mobile, tablet, desktop)
    - _Requirements: 7.1, 7.6, 2.4_
  
  - [ ] 3.3 Implement animation system with Framer Motion
    - Create reusable animation variants for common patterns
    - Implement scroll-based animations for content sections
    - Add parallax scrolling effects for hero sections
    - Implement hover animations for interactive elements
    - Add prefers-reduced-motion support
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.9_

- [ ] 4. Checkpoint - Verify foundation setup
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 5. Implement internationalization (i18n) system
  - [ ] 5.1 Configure next-intl for multilingual support
    - Install and configure next-intl with App Router pattern
    - Set up locale routing with [locale] dynamic segment
    - Create translation files in /messages/ directory for 6 languages (en, hi, mr, kn, te, ta)
    - Implement language selector component
    - Configure language persistence in cookies
    - Configure locale-aware font loading with Noto Sans fonts for Indic scripts
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_
  
  - [ ] 5.2 Create translation structure for all pages
    - Define translation keys for all 14 public pages
    - Create fallback mechanism to English
    - Implement SEO-friendly URLs with hreflang tags
    - _Requirements: 2.6, 2.7, 10.12_

- [ ] 6. Build public website pages (Part 1: Core pages)
  - [ ] 6.1 Implement Home page
    - Create hero section with animated mission statement
    - Build Product Ecosystem overview with interactive cards
    - Add Traction Metrics section with animated counters
    - Implement call-to-action sections
    - _Requirements: 1.1_
  
  - [ ] 6.2 Implement About page
    - Create company history section
    - Add mission, vision, and values sections
    - Include founding story with timeline
    - _Requirements: 1.2_
  
  - [ ] 6.3 Implement Ecosystem page
    - Create detailed sections for all six platforms (Shramic Krushi, Build, Worker App, PashuSetu, Business, Experts)
    - Build interactive visualization showing platform connections
    - Add use cases and benefits for each platform
    - Include demo request CTAs for each platform
    - _Requirements: 1.3, 21.1, 21.2, 21.3, 21.4, 21.5, 21.6, 21.7, 21.8, 21.9_
  
  - [ ] 6.4 Implement Technology page
    - Create high-level AI infrastructure overview
    - Ensure no confidential information is revealed
    - Add problem/solution descriptions
    - _Requirements: 1.4, 20.1, 20.2, 20.3, 20.8_

- [ ] 7. Build public website pages (Part 2: Impact and team)
  - [ ] 7.1 Implement Impact page
    - Create social impact metrics section
    - Add case studies with beneficiary stories
    - Include visual storytelling elements
    - _Requirements: 1.5_
  
  - [ ] 7.2 Implement Traction page
    - Display public metrics (923 respondents, 30 districts, 500+ community members, 1,000+ farmers)
    - Implement animated statistics counters
    - Add visual charts and graphs
    - _Requirements: 1.6, 9.6_
  
  - [ ] 7.3 Implement Team page
    - Create team member grid with profiles
    - Add leadership section with detailed bios
    - Include advisor section
    - Add social media links for each member
    - _Requirements: 1.7_

- [ ] 8. Build blog system and content pages
  - [ ] 8.1 Implement Blog listing page
    - Create blog post grid with pagination
    - Add category and tag filtering
    - Implement search functionality
    - Add featured post section
    - _Requirements: 1.8, 17.6, 17.7, 17.8, 17.9_
  
  - [ ] 8.2 Implement individual blog post page
    - Create blog post template with rich content display
    - Add author information and publish date
    - Include social sharing buttons
    - Add related posts section
    - Generate proper SEO metadata
    - _Requirements: 17.10, 17.11, 17.12_
  
  - [ ] 8.3 Implement Partners page
    - Create partner grid grouped by category
    - Add partner logos with hover effects
    - Include partnership inquiry form
    - _Requirements: 1.9_
  
  - [ ] 8.4 Implement Careers page
    - Create job listings with filtering by department and location
    - Add company culture section
    - Include benefits information
    - Add career application form
    - _Requirements: 1.10_

- [ ] 9. Build remaining public pages and legal content
  - [ ] 9.1 Implement Contact page
    - Create contact form with validation
    - Add office locations with embedded Google Maps
    - Display email addresses and phone numbers
    - Include social media links and WhatsApp contact
    - _Requirements: 1.11, 22.1, 22.2, 22.3, 22.4, 22.5, 22.7_
  
  - [ ] 9.2 Implement Privacy Policy page
    - Create GDPR-compliant privacy policy content
    - Add cookie consent banner
    - Implement opt-out functionality
    - _Requirements: 1.12, 16.7, 16.8, 16.9_
  
  - [ ] 9.3 Implement Terms of Service page
    - Create legal terms and conditions content
    - _Requirements: 1.13_
  
  - [ ] 9.4 Implement FAQ page
    - Create FAQ grid organized by category
    - Add search functionality
    - Implement accordion UI for questions/answers
    - _Requirements: 1.14_

- [ ] 10. Checkpoint - Verify all public pages are functional
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 11. Implement form handling and lead capture system
  - [ ] 11.1 Create base form component with validation
    - Build reusable form component with React Hook Form
    - Implement Zod validation schemas
    - Add CAPTCHA/honeypot protection
    - Create error handling and display logic
    - _Requirements: 3.7, 3.11, 3.12_
  
  - [ ] 11.2 Create Server Actions for form submissions
    - Implement submitContactForm action with rate limiting
    - Implement submitPartnershipInquiry action with rate limiting
    - Implement submitCareerApplication action with rate limiting
    - Implement submitDemoRequest action with rate limiting
    - Implement submitInvestorInquiry action with NDA workflow and rate limiting
    - Store submissions in database with proper validation
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.10, 3A.1-3A.12_
  
  - [ ] 11.3 Implement email notification system
    - Configure Resend or SMTP email service
    - Create HTML email templates with responsive design
    - Implement confirmation emails to visitors
    - Implement notification emails to admin team
    - Implement email verification for investor inquiries
    - Add email delivery retry logic
    - Log all email attempts in database
    - _Requirements: 3.8, 3.9, 3A.6, 3A.7, 14.1, 14.2, 14.3, 14.4, 14.5, 14.6, 14.7, 14.8, 14.9, 14.10_
  
  - [ ]* 11.4 Write integration tests for form submission flow
    - Test form validation
    - Test database storage
    - Test email sending
    - Test error handling
    - Test NDA workflow and email verification
    - _Requirements: 3.7, 3.8, 3.9, 3A.1-3A.12_

- [ ] 12. Build admin dashboard foundation
  - [ ] 12.1 Create admin layout and navigation
    - Build admin dashboard layout with sidebar
    - Create navigation menu with role-based access
    - Implement authentication middleware for admin routes
    - Add user menu with sign-out functionality
    - _Requirements: 5.1, 5.10, 4.13_
  
  - [ ] 12.2 Implement dashboard overview page
    - Display overview metrics (visitors, submissions, page views)
    - Create stats cards with visual indicators
    - Add recent activity feed
    - Integrate with analytics system
    - _Requirements: 5.2, 5.9_
  
  - [ ] 12.3 Implement leads management page
    - Create leads table with sorting and filtering
    - Add search functionality
    - Implement CSV export functionality
    - Add status management (new, in progress, completed, archived)
    - _Requirements: 5.3, 5.4_

- [ ] 13. Build content management system (CMS)
  - [ ] 13.1 Implement blog post management
    - Create blog post editor with rich text editing (TipTap or similar)
    - Add draft and published states
    - Implement publish date scheduling
    - Add category and tag management
    - Create content preview functionality
    - Implement version history with ContentVersion model
    - Implement multilingual content with BlogPostTranslation model
    - _Requirements: 4.2, 4.8, 4.9, 4.10, 4.11, 17.1, 17.2, 17.3, 17.4, 17.5_
  
  - [ ] 13.2 Implement team member management
    - Create team member CRUD interface
    - Add profile photo upload
    - Implement display order management
    - Add social media link fields
    - Implement multilingual content with TeamMemberTranslation model
    - _Requirements: 4.3_
  
  - [ ] 13.3 Implement career listing management
    - Create career CRUD interface
    - Add department and location fields
    - Implement status management (open, closed, filled)
    - Implement multilingual content with CareerTranslation model
    - _Requirements: 4.4_
  
  - [ ] 13.4 Implement partner management
    - Create partner CRUD interface
    - Add logo upload functionality
    - Implement category grouping
    - Add display order management
    - Implement multilingual content with PartnerTranslation model
    - _Requirements: 4.5_
  
  - [ ] 13.5 Implement FAQ management
    - Create FAQ CRUD interface
    - Add category organization
    - Implement display order management
    - Implement multilingual content with FAQTranslation model
    - _Requirements: 4.6_
  
  - [ ] 13.6 Implement traction metrics management
    - Create metrics CRUD interface
    - Add value and description fields
    - Implement display order management
    - _Requirements: 4.12_

- [ ] 14. Implement media asset management
  - [ ] 14.1 Configure cloud storage (Cloudinary or S3)
    - Set up Cloudinary or AWS S3 account
    - Configure environment variables
    - Implement secure upload endpoint
    - _Requirements: 15.1_
  
  - [ ] 14.2 Create media library interface
    - Build file picker UI for image uploads
    - Implement image optimization on upload
    - Generate multiple image sizes for responsive delivery
    - Add alt text and caption fields
    - Create media browsing and selection interface
    - Implement delete functionality
    - _Requirements: 4.7, 15.2, 15.3, 15.4, 15.5, 15.6, 15.7, 15.8_
  
  - [ ]* 14.3 Write unit tests for media upload
    - Test file validation
    - Test upload to cloud storage
    - Test image optimization
    - _Requirements: 15.2, 15.5_

- [ ] 15. Checkpoint - Verify admin dashboard and CMS functionality
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 16. Implement SEO optimization
  - [ ] 16.1 Create SEO utilities and metadata generation
    - Generate unique meta titles for all pages (50-60 characters)
    - Generate unique meta descriptions for all pages (150-160 characters)
    - Implement Open Graph tags for social sharing
    - Implement Twitter Card tags
    - Generate structured data (JSON-LD) for Organization, WebSite, BreadcrumbList
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5_
  
  - [ ] 16.2 Generate sitemap and robots.txt
    - Create XML sitemap with all public pages
    - Generate robots.txt with appropriate directives
    - Implement canonical URLs
    - _Requirements: 10.6, 10.7, 10.10_
  
  - [ ] 16.3 Implement semantic HTML and accessibility
    - Use semantic HTML5 markup throughout
    - Implement proper heading hierarchy
    - Add descriptive alt text for all images
    - _Requirements: 10.8, 10.9, 10.11_

- [ ] 17. Implement accessibility compliance (WCAG 2.1 Level AA)
  - [ ] 17.1 Implement keyboard navigation
    - Ensure all interactive elements are keyboard accessible
    - Add proper focus indicators
    - Implement skip-to-content links
    - _Requirements: 12.2, 12.3, 12.4_
  
  - [ ] 17.2 Implement ARIA labels and roles
    - Add ARIA labels where appropriate
    - Implement proper ARIA roles
    - Ensure form inputs have associated labels
    - _Requirements: 12.5, 12.9_
  
  - [ ] 17.3 Ensure color contrast compliance
    - Verify 4.5:1 contrast ratio for normal text
    - Verify 3:1 contrast ratio for large text
    - Test with accessibility tools
    - _Requirements: 12.6, 12.7_
  
  - [ ] 17.4 Run accessibility audit
    - Test with screen readers (NVDA, JAWS, VoiceOver)
    - Run automated accessibility tests
    - Verify WCAG 2.1 Level AA compliance
    - _Requirements: 12.1, 12.11_

- [ ] 18. Implement performance optimizations
  - [ ] 18.1 Optimize images and assets
    - Implement image lazy loading
    - Serve images in WebP/AVIF formats with fallbacks
    - Configure CDN for static asset delivery
    - _Requirements: 11.5, 11.6, 11.10_
  
  - [ ] 18.2 Optimize JavaScript and CSS
    - Implement code splitting for JavaScript bundles
    - Minify CSS and JavaScript in production
    - Implement browser caching with appropriate headers
    - Prefetch critical resources
    - _Requirements: 11.7, 11.8, 11.9, 11.12_
  
  - [ ] 18.3 Implement server-side rendering optimizations
    - Configure Next.js SSR for initial page load
    - Optimize React Server Components usage
    - Implement streaming for faster TTFB
    - _Requirements: 11.11_
  
  - [ ]* 18.4 Run performance audit
    - Test with Google PageSpeed Insights
    - Verify Core Web Vitals (FCP < 1.8s, LCP < 2.5s, CLS < 0.1, FID < 100ms)
    - Optimize based on audit results
    - _Requirements: 10.13, 11.1, 11.2, 11.3, 11.4_

- [ ] 19. Implement analytics and tracking
  - [ ] 19.1 Configure Google Analytics 4
    - Set up GA4 property
    - Implement tracking code
    - Configure custom events (form submissions, button clicks, scroll depth)
    - Implement server-side tracking
    - _Requirements: 16.1, 16.2, 16.3, 16.4, 16.5, 16.6, 16.10_
  
  - [ ] 19.2 Implement cookie consent and privacy controls
    - Create cookie consent banner
    - Implement opt-out functionality
    - Respect GDPR requirements
    - _Requirements: 16.7, 16.8, 16.9_

- [ ] 20. Implement security hardening
  - [ ] 20.1 Implement security best practices
    - Configure HTTPS for all connections
    - Implement CSRF protection for all forms
    - Sanitize all user inputs to prevent XSS
    - Use parameterized queries to prevent SQL injection
    - _Requirements: 6.10, 6.11, 6.12, 6.13_
  
  - [ ] 20.2 Implement rate limiting and account security
    - Add rate limiting on login attempts
    - Implement account locking after failed attempts
    - Log all authentication events
    - _Requirements: 6.7, 6.8, 6.9_
  
  - [ ] 20.3 Implement data encryption and access controls
    - Encrypt sensitive data at rest
    - Implement access controls for confidential information
    - Log all access to sensitive data
    - _Requirements: 20.10, 20.11, 20.12_
  
  - [ ] 20.4 Run security audit
    - Test for common vulnerabilities (OWASP Top 10)
    - Verify authentication and authorization
    - Test input validation and sanitization
    - _Requirements: 6.10, 6.11, 6.12, 6.13_

- [ ] 21. Checkpoint - Verify SEO, accessibility, performance, and security
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 22. Create seed data and initial content
  - [ ] 22.1 Create database seed script
    - Write seed script with Prisma
    - Add seed data for 5 blog posts
    - Add seed data for 8 team members
    - Add seed data for 5 career listings
    - Add seed data for 10 partners
    - Add seed data for 15 FAQ entries
    - Add seed data for traction metrics
    - Add seed data for admin user account
    - _Requirements: 23.1, 23.2, 23.3, 23.4, 23.5, 23.6, 23.7_
  
  - [ ] 22.2 Populate translation files
    - Add translations for all pages in 6 languages
    - Ensure consistency across languages
    - _Requirements: 2.1_

- [ ] 23. Set up deployment and DevOps
  - [ ] 23.1 Configure Vercel deployment
    - Connect GitHub repository to Vercel
    - Configure environment variables
    - Set up staging and production environments
    - Configure custom domain
    - _Requirements: 18.1, 18.2, 18.3, 18.4_
  
  - [ ] 23.2 Implement monitoring and error tracking
    - Configure Sentry for error tracking
    - Set up uptime monitoring with alerts
    - Implement health check endpoints
    - Configure automated database backups
    - _Requirements: 18.5, 18.6, 18.7, 18.8_
  
  - [ ] 23.3 Configure SSL/TLS and security
    - Set up SSL/TLS certificates with automatic renewal
    - Configure security headers
    - _Requirements: 18.10_

- [ ] 24. Create comprehensive documentation
  - [ ] 24.1 Write project documentation
    - Create README.md with setup instructions
    - Document API endpoints and Server Actions
    - Document database schema
    - Create deployment guide
    - Document environment variables
    - _Requirements: 19.1, 19.2, 19.3, 19.5, 19.6_
  
  - [ ] 24.2 Write component documentation
    - Document reusable UI components
    - Add code comments for complex logic
    - Create troubleshooting guide
    - Write contribution guidelines
    - _Requirements: 19.4, 19.7, 19.9, 19.10_

- [ ] 25. Final integration and testing
  - [ ]* 25.1 Run end-to-end tests
    - Test all public pages across devices
    - Test all forms and submissions
    - Test admin dashboard functionality
    - Test authentication flows
    - Test multilingual content
    - _Requirements: All requirements_
  
  - [ ]* 25.2 Perform user acceptance testing
    - Test with real users
    - Gather feedback and iterate
    - Fix any identified issues
    - _Requirements: All requirements_

- [ ] 26. Final checkpoint - Production readiness verification
  - Ensure all tests pass, verify deployment is successful, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional testing tasks and can be skipped for faster MVP delivery
- Security audits (task 20.4) and accessibility audits (task 17.4) are MANDATORY for production deployment
- Each task references specific requirements for traceability
- The implementation uses TypeScript throughout with Next.js 15, React 19, Prisma, and shadcn/ui
- Checkpoints ensure incremental validation and quality assurance
- All forms include proper validation, error handling, rate limiting, and security measures
- The platform is designed for serverless deployment on Vercel with PostgreSQL database using PgBouncer connection pooling
- Multilingual support is built-in from the start using next-intl App Router pattern with canonical records + translation tables
- Security, accessibility, and performance are prioritized throughout implementation
- The design maintains confidentiality of proprietary information while showcasing company capabilities
- Password hashing uses argon2id for maximum security
- NextAuth v5 is used with database-backed sessions for improved security
- Content versioning is tracked with ContentVersion model for audit trail
- Investor inquiries include NDA workflow with email verification and IP logging
- Indic fonts (Noto Sans) are loaded conditionally based on locale for optimal performance

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["2.1", "3.1"] },
    { "id": 2, "tasks": ["2.2", "2.3", "3.2", "5.1"] },
    { "id": 3, "tasks": ["3.3", "5.2", "6.1"] },
    { "id": 4, "tasks": ["6.2", "6.3", "6.4", "7.1"] },
    { "id": 5, "tasks": ["7.2", "7.3", "8.1", "8.3"] },
    { "id": 6, "tasks": ["8.2", "8.4", "9.1", "9.2"] },
    { "id": 7, "tasks": ["9.3", "9.4", "11.1"] },
    { "id": 8, "tasks": ["11.2", "11.3"] },
    { "id": 9, "tasks": ["11.4", "12.1"] },
    { "id": 10, "tasks": ["12.2", "12.3", "13.1"] },
    { "id": 11, "tasks": ["13.2", "13.3", "13.4", "13.5"] },
    { "id": 12, "tasks": ["13.6", "14.1"] },
    { "id": 13, "tasks": ["14.2", "14.3"] },
    { "id": 14, "tasks": ["16.1", "16.2", "17.1"] },
    { "id": 15, "tasks": ["16.3", "17.2", "17.3", "18.1"] },
    { "id": 16, "tasks": ["17.4", "18.2", "18.3", "19.1"] },
    { "id": 17, "tasks": ["18.4", "19.2", "20.1"] },
    { "id": 18, "tasks": ["20.2", "20.3", "20.4"] },
    { "id": 19, "tasks": ["22.1", "22.2"] },
    { "id": 20, "tasks": ["23.1", "23.2"] },
    { "id": 21, "tasks": ["23.3", "24.1"] },
    { "id": 22, "tasks": ["24.2", "25.1"] },
    { "id": 23, "tasks": ["25.2"] }
  ]
}
```
