import type { Project } from '@/src/types/portfolio';

export const projects: Project[] = [
  {
    id: 'wexts',
    title: 'Wexts',
    slug: 'wexts',
    category: 'Developer Platform',
    shortDescription:
      'A production-focused toolkit for building Next.js and NestJS apps with a single runtime and typed RPC.',
    fullDescription:
      'Wexts is a developer toolkit that joins Next.js routes, NestJS APIs, typed RPC generation, CLI workflows, security middleware, tests, docs, and deployment guidance into one production-oriented system.',
    thumbnail: '/project1.png',
    images: ['/project1.png', '/project2.png', '/project3.png'],
    status: 'live',
    type: 'open-source',
    role: 'Creator, architecture, CLI, security layer, docs, and examples',
    problem:
      'Teams often wire Next.js and NestJS as separate apps, which creates duplicated deployment work, weak typed boundaries, and inconsistent security behavior.',
    solution:
      'Create one production runtime with generated typed RPC, clear CLI commands, route policy enforcement, and documentation that makes the stack repeatable.',
    features: [
      {
        id: 'single-runtime',
        title: 'Single Production Runtime',
        description: 'Runs Next.js, NestJS, and RPC routes behind one Fastify entrypoint.',
        technologies: ['Next.js App Router', 'NestJS', 'Fastify', 'TypeScript', 'Node.js'],
        complexity: 'advanced',
        businessValue: 'Simplifies deployment and reduces runtime coordination work.',
      },
      {
        id: 'typed-rpc',
        title: 'Typed RPC Codegen',
        description: 'Generates typed clients from backend contracts for safer frontend calls.',
        technologies: ['TypeScript', 'AST transforms', 'CLI codegen', 'pnpm workspaces'],
        complexity: 'advanced',
        businessValue: 'Reduces API drift and speeds up feature delivery.',
      },
      {
        id: 'wexts-shield',
        title: 'Security Shield',
        description: 'Applies security headers, CORS, CSRF checks, rate limits, and audit logging.',
        technologies: ['Security middleware', 'Rate limiting', 'Audit logs', 'CORS', 'CSRF'],
        complexity: 'advanced',
        businessValue: 'Gives teams safer defaults before a product reaches production traffic.',
      },
    ],
    techStack: [
      'Next.js App Router',
      'NestJS',
      'Fastify',
      'TypeScript',
      'Node.js',
      'pnpm workspaces',
      'Turbo',
      'Changesets',
      'CLI codegen',
      'Security middleware',
    ],
    businessImpact: [
      'Turns a repeated full-stack setup into a reusable toolkit.',
      'Documents deployment and troubleshooting paths for real production use.',
    ],
    githubUrl: 'https://github.com/ziadmustafa1/wexts',
    docsUrl: 'https://github.com/ziadmustafa1/wexts',
    technicalDecisions: [
      'Use Fastify as the shared runtime boundary for speed and explicit routing.',
      'Generate frontend clients instead of hand-writing API wrappers.',
      'Treat security middleware as a framework concern rather than project afterthought.',
    ],
    architectureNotes: [
      'Next.js owns page rendering while NestJS owns backend services under API routes.',
      'RPC routes sit behind a generated contract layer for typed client access.',
      'CLI commands keep create, generate, build, start, and doctor workflows consistent.',
    ],
    challenges: [
      'Balancing framework flexibility with enough conventions to be useful.',
      'Keeping generated code understandable for developers debugging production behavior.',
    ],
    improvements: [
      'Add starter templates for SaaS, admin, and marketplace apps.',
      'Expand examples with auth, billing, and background jobs.',
    ],
  },
  {
    id: 'falak-legal',
    title: 'Falak Legal / Lexniva',
    slug: 'falak-legal-lexniva',
    category: 'Law Office Management SaaS',
    shortDescription:
      'Arabic and English law office management platform for cases, clients, hearings, documents, invoices, and permissions.',
    fullDescription:
      'Falak Legal / Lexniva is a multi-tenant legal operations platform for firms that need case management, client records, hearing calendars, document workflows, billing, tasks, portals, permissions, audit trails, and protected sensitive data.',
    thumbnail: '/project2.png',
    images: ['/project2.png', '/project1.png', '/og-image.png'],
    status: 'case-study',
    type: 'client',
    role: 'Full-stack engineer across product modules, frontend flows, API contracts, and data modeling',
    problem:
      'Law firms need structured operational software, but legal work has role-specific access, Arabic/English usage, private documents, and sensitive audit requirements.',
    solution:
      'Design a modular SaaS system with backend-owned business logic, RBAC, audit logging, client-facing workflows, exports, and bilingual UX foundations.',
    features: [
      {
        id: 'case-workspace',
        title: 'Case Workspace',
        description:
          'Case records connect clients, hearings, tasks, documents, invoices, and internal activity.',
        technologies: ['Next.js App Router', 'HeroUI', 'TanStack Query', 'Prisma', 'PostgreSQL'],
        complexity: 'advanced',
        businessValue:
          'Keeps legal operations organized around the case instead of scattered files.',
      },
      {
        id: 'rbac-audit',
        title: 'RBAC and Audit Trails',
        description: 'Role policies, sensitive actions, and audit events protect firm workflows.',
        technologies: ['JWT', 'Middleware', 'RBAC', 'Audit logs', 'NestJS'],
        complexity: 'advanced',
        businessValue: 'Improves accountability and reduces accidental access to sensitive data.',
      },
      {
        id: 'client-portal',
        title: 'Client Portal',
        description:
          'Client-facing access for selected records, updates, and document interactions.',
        technologies: ['React', 'WebSockets', 'S3-compatible storage', 'next-intl', 'Zustand'],
        complexity: 'advanced',
        businessValue:
          'Gives clients clearer status visibility without exposing internal workflows.',
      },
    ],
    techStack: [
      'Next.js App Router',
      'React 19',
      'HeroUI',
      'Tailwind CSS',
      'TanStack Query',
      'Zustand',
      'next-intl',
      'NestJS',
      'Fastify',
      'Prisma',
      'PostgreSQL',
      'JWT',
      'BullMQ',
      'Redis',
      'WebSockets',
      'S3-compatible storage',
    ],
    businessImpact: [
      'Creates a unified operating system for case-heavy legal teams.',
      'Supports bilingual workflows and role-aware access patterns.',
    ],
    technicalDecisions: [
      'Keep sensitive business rules on the backend instead of distributing them across UI state.',
      'Use query caching for heavy operational screens while preserving explicit invalidation.',
      'Structure modules around legal workflows rather than generic CRUD pages.',
    ],
    architectureNotes: [
      'Frontend app renders operational screens and client portal views.',
      'Backend services own permissions, audit records, exports, and sensitive data handling.',
      'Queue workers support heavier background tasks such as document and notification flows.',
    ],
    challenges: [
      'Designing Arabic/English UI foundations that remain usable on dense legal screens.',
      'Making permissions clear without slowing daily staff workflows.',
    ],
    improvements: [
      'Deeper reporting for firm performance and client activity.',
      'Expanded document automation and hearing reminder workflows.',
    ],
  },
  {
    id: 'time-slot-manager',
    title: 'Time Slot Manager',
    slug: 'time-slot-manager',
    category: 'Marketplace Scheduling SaaS',
    shortDescription:
      'Scheduling system for merchants, branches, delivery methods, slot templates, generated slots, and reservations.',
    fullDescription:
      'Time Slot Manager helps merchants model delivery and pickup capacity through branch settings, blackout dates, templates, generated slots, reservation flows, and platform integration hooks.',
    thumbnail: '/project3.png',
    images: ['/project3.png', '/project2.png', '/project1.png'],
    status: 'case-study',
    type: 'product',
    role: 'Full-stack product engineer for scheduling logic, dashboard UX, auth, and validation',
    problem:
      'Merchants need predictable capacity controls, but scheduling becomes hard when branches, delivery methods, blackout dates, templates, and reservations interact.',
    solution:
      'Build a scheduling domain model that separates templates from actual slots, validates capacity, and exposes dashboard controls plus a booking widget.',
    features: [
      {
        id: 'slot-templates',
        title: 'Slot Template Engine',
        description:
          'Template rules generate actual reservable slots for different branches and methods.',
        technologies: ['Prisma', 'PostgreSQL', 'TypeScript', 'Date modeling', 'Validation'],
        complexity: 'advanced',
        businessValue: 'Lets merchants scale scheduling without creating every slot by hand.',
      },
      {
        id: 'reservation-flow',
        title: 'Reservation Flow',
        description:
          'Public booking widget checks capacity, availability, and selected method rules.',
        technologies: ['Next.js App Router', 'React Hook Form', 'Zod', 'TanStack Query'],
        complexity: 'intermediate',
        businessValue: 'Reduces overbooking and gives customers a clearer checkout experience.',
      },
      {
        id: 'merchant-dashboard',
        title: 'Merchant Dashboard',
        description:
          'Admin screens manage branches, methods, blackout dates, reservations, and settings.',
        technologies: ['React', 'Tailwind CSS', 'Tables', 'Protected Routes', 'Auth.js'],
        complexity: 'advanced',
        businessValue: 'Keeps operational control in one place for non-technical merchant teams.',
      },
    ],
    techStack: [
      'Next.js App Router',
      'React',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Auth.js',
      'TanStack Query',
      'React Hook Form',
      'Zod',
      'Radix UI',
      'Tailwind CSS',
      'Vitest',
      'Bun',
    ],
    businessImpact: [
      'Turns delivery and pickup limits into manageable product settings.',
      'Creates integration-ready scheduling logic for marketplace ecosystems.',
    ],
    technicalDecisions: [
      'Separate generated slots from templates so historical reservations stay stable.',
      'Use schema validation at form boundaries to reduce invalid scheduling states.',
      'Keep booking logic deterministic so integrations can trust capacity results.',
    ],
    architectureNotes: [
      'Merchant dashboard controls the scheduling rules.',
      'Public widget consumes availability and creates reservations through guarded APIs.',
      'OAuth and webhook surfaces prepare the product for Salla/Zid-style integrations.',
    ],
    challenges: [
      'Handling date edge cases and blackout conflicts without confusing the dashboard.',
      'Designing capacity rules flexible enough for multiple merchant types.',
    ],
    improvements: [
      'Add analytics for utilization and missed demand windows.',
      'Build richer marketplace onboarding and integration diagnostics.',
    ],
  },
  {
    id: 'hikaya-stories',
    title: 'Hikaya Stories',
    slug: 'hikaya-stories',
    category: 'Education Platform',
    shortDescription:
      'Arabic nursery content platform for stories, educational materials, videos, podcasts, and admin publishing.',
    fullDescription:
      'Hikaya Stories supports early childhood education content with admin-managed official resources and nursery-user access across stories, materials, videos, podcasts, and account workflows.',
    thumbnail: '/og-image.png',
    images: ['/og-image.png', '/image.png', '/project2.png'],
    status: 'in-progress',
    type: 'client',
    role: 'Full-stack engineer for auth-required app structure, content modules, and backend integration',
    problem:
      'Nursery teams need curated Arabic educational content, but content access must be organized, role-aware, and manageable by administrators.',
    solution:
      'Build an authenticated education platform with content modules, nursery accounts, admin publishing, media storage, and background workflows.',
    features: [
      {
        id: 'content-library',
        title: 'Official Content Library',
        description: 'Admin-created stories, media, educational materials, videos, and podcasts.',
        technologies: ['Next.js App Router', 'HeroUI', 'Cloudflare R2', 'NestJS', 'Prisma'],
        complexity: 'advanced',
        businessValue: 'Centralizes trusted educational content for nursery teams.',
      },
      {
        id: 'nursery-access',
        title: 'Nursery Role Access',
        description: 'Nursery users can access approved resources through authenticated app areas.',
        technologies: ['JWT', 'RBAC', 'React', 'Protected Routes', 'PostgreSQL'],
        complexity: 'intermediate',
        businessValue: 'Keeps content access aligned with account type and subscription needs.',
      },
      {
        id: 'media-workflows',
        title: 'Media Workflows',
        description: 'Handles uploaded assets and processing-friendly backend workflows.',
        technologies: ['Redis', 'BullMQ', 'Cloudflare R2', 'Docker Compose'],
        complexity: 'advanced',
        businessValue: 'Makes richer media content manageable without blocking admin screens.',
      },
    ],
    techStack: [
      'Next.js App Router',
      'React 19',
      'HeroUI',
      'React Hook Form',
      'Zod',
      'TypeScript',
      'NestJS',
      'Prisma',
      'PostgreSQL',
      'Redis',
      'BullMQ',
      'Cloudflare R2',
      'Docker Compose',
      'Bun',
    ],
    businessImpact: [
      'Creates a structured channel for Arabic early education resources.',
      'Separates public landing content from authenticated nursery workflows.',
    ],
    technicalDecisions: [
      'Keep the landing page public and move product value into protected content modules.',
      'Use background jobs for media-adjacent workflows to protect dashboard responsiveness.',
    ],
    architectureNotes: [
      'Frontend and backend stay split with business logic in backend services.',
      'Storage and queue layers support media-heavy education content.',
    ],
    challenges: [
      'Designing simple admin workflows for non-technical content teams.',
      'Keeping media and content permissions predictable.',
    ],
    improvements: [
      'Add content progress tracking and nursery-level reporting.',
      'Introduce richer search and curriculum tagging.',
    ],
  },
  {
    id: 'aetheris-ai',
    title: 'Aetheris AI',
    slug: 'aetheris-ai',
    category: 'AI / SaaS Dashboard',
    shortDescription:
      'Full-stack SaaS-style app with dashboard UI, API backend, auth, payments, real-time features, uploads, and VPS deployment.',
    fullDescription:
      'Aetheris AI is a SaaS-style platform build that brings together dashboard UX, authentication, payment flows, real-time updates, file handling, charts, API services, and production deployment workflow.',
    thumbnail: '/image.png',
    images: ['/image.png', '/project1.png', '/project3.png'],
    status: 'case-study',
    type: 'product',
    role: 'Full-stack engineer for dashboard UI, API services, auth, real-time features, and deployment',
    problem:
      'SaaS products need many moving parts early: accounts, payments, uploads, dashboards, charts, realtime state, APIs, and a deployable backend.',
    solution:
      'Build a full-stack SaaS foundation that combines production-friendly backend services with a polished dashboard interface and integration-ready modules.',
    features: [
      {
        id: 'dashboard-experience',
        title: 'Dashboard Experience',
        description: 'Operational dashboard with charts, cards, navigation, and product state.',
        technologies: ['Next.js App Router', 'HeroUI', 'Recharts', 'SWR', 'Framer Motion'],
        complexity: 'intermediate',
        businessValue: 'Gives users a clear command center for product activity.',
      },
      {
        id: 'billing-auth',
        title: 'Auth and Billing',
        description: 'Google OAuth, JWT, Passport strategies, Stripe billing, and guarded APIs.',
        technologies: ['OAuth', 'JWT', 'Passport', 'Stripe', 'NestJS'],
        complexity: 'advanced',
        businessValue: 'Supports account-based access and monetization from the start.',
      },
      {
        id: 'realtime-media',
        title: 'Real-Time and Media',
        description: 'Socket updates, file uploads, media handling, and production backend setup.',
        technologies: ['Socket.IO', 'Cloudinary', 'Fastify', 'Prisma', 'PostgreSQL'],
        complexity: 'advanced',
        businessValue: 'Makes the product feel responsive while supporting richer user workflows.',
      },
    ],
    techStack: [
      'Next.js App Router',
      'React 19',
      'HeroUI',
      'Tailwind CSS',
      'React Hook Form',
      'Axios',
      'SWR',
      'Framer Motion',
      'Recharts',
      'Socket.IO',
      'NestJS',
      'Fastify',
      'Prisma',
      'PostgreSQL',
      'Stripe',
      'Cloudinary',
    ],
    businessImpact: [
      'Combines the common SaaS foundation pieces into a cohesive product shell.',
      'Prepares the stack for deployment beyond a prototype-only environment.',
    ],
    technicalDecisions: [
      'Use a dedicated backend for business logic and integration surfaces.',
      'Keep dashboard UI reactive through data fetching and realtime channels.',
    ],
    architectureNotes: [
      'Next.js renders the dashboard and product views.',
      'NestJS owns auth, billing, media, realtime, and data APIs.',
      'VPS workflow supports production-oriented backend deployment.',
    ],
    challenges: [
      'Coordinating auth, billing, realtime, and media without creating tangled UI state.',
      'Keeping dashboard screens readable as features grow.',
    ],
    improvements: [
      'Add onboarding analytics and account-level usage reporting.',
      'Expand integration test coverage around billing and realtime behavior.',
    ],
  },
  {
    id: 'countries-cities-ar',
    title: 'countries-cities-ar',
    slug: 'countries-cities-ar',
    category: 'Open-Source npm Library',
    shortDescription:
      'Multilingual country and state/province dataset for Arabic, English, and French TypeScript projects.',
    fullDescription:
      'countries-cities-ar packages 250 countries and 4,642 states/provinces with Arabic translations for Arab countries, library exports, tests, type declarations, and ESM/CJS builds.',
    thumbnail: '/placeholder.svg',
    images: ['/placeholder.svg', '/project1.png', '/og-image.png'],
    status: 'live',
    type: 'open-source',
    role: 'Package creator, data modeling, builds, tests, docs, and release setup',
    problem:
      'Arabic-first apps often need reliable country and state/province data without rewriting multilingual location datasets for every form.',
    solution:
      'Publish a typed npm-ready dataset with Arabic, English, and French access patterns plus modern package exports.',
    features: [
      {
        id: 'multilingual-data',
        title: 'Multilingual Location Data',
        description:
          'Provides country and state/province names for Arabic, English, and French usage.',
        technologies: ['TypeScript', 'Data modeling', 'Package exports'],
        complexity: 'intermediate',
        businessValue: 'Speeds up location forms for Arabic and multilingual products.',
      },
      {
        id: 'library-builds',
        title: 'Library Build Outputs',
        description: 'Ships ESM, CJS, generated type declarations, and tested exports.',
        technologies: ['tsup', 'Vitest', 'ESM/CJS builds', 'Type declarations'],
        complexity: 'intermediate',
        businessValue:
          'Makes the package easy to adopt across React, Next.js, Vue, and Node projects.',
      },
      {
        id: 'developer-docs',
        title: 'Developer Documentation',
        description: 'Documents access patterns and package behavior for quick integration.',
        technologies: ['README docs', 'ESLint', 'npm package exports'],
        complexity: 'basic',
        businessValue: 'Reduces integration time for developers using the package.',
      },
    ],
    techStack: [
      'TypeScript',
      'tsup',
      'Vitest',
      'ESLint',
      'npm package exports',
      'ESM/CJS builds',
      'Type declarations',
    ],
    businessImpact: [
      'Reusable library for Arabic-aware location forms.',
      'Open-source proof of packaging, typing, and release discipline.',
    ],
    githubUrl: 'https://github.com/ziadmustafa1/countries-cities-ar',
    docsUrl: 'https://github.com/ziadmustafa1/countries-cities-ar',
    technicalDecisions: [
      'Ship both ESM and CJS to support more consuming projects.',
      'Expose type declarations so consuming forms keep strong TypeScript support.',
    ],
    architectureNotes: [
      'Data and helpers are packaged as importable library exports.',
      'Build tooling creates typed distribution outputs for npm-style usage.',
    ],
    challenges: [
      'Keeping multilingual data consistent and easy to query.',
      'Designing package exports that work across different JavaScript environments.',
    ],
    improvements: [
      'Add richer city-level data and localized search helpers.',
      'Publish examples for popular form libraries.',
    ],
  },
];
