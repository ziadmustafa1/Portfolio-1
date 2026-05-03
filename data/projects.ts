export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  type: string;
  description: string;
  tech: string[];
  features: string[];
  links?: ProjectLink[];
  repositoryStatus?: 'Public' | 'Private repository';
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: 'Wexts',
    type: 'Developer Tool / Full-Stack Toolkit',
    repositoryStatus: 'Public',
    featured: true,
    description:
      'Production-focused toolkit for building Next.js + NestJS apps with a single production runtime, generated typed RPC, CLI/codegen, Fastify server, security layer, tests, docs, and a verified example.',
    tech: [
      'Next.js',
      'NestJS',
      'Fastify',
      'TypeScript',
      'pnpm workspaces',
      'Turbo',
      'Changesets',
      'RPC codegen',
      'Security middleware',
    ],
    features: [
      'Single Fastify production runtime with Next.js routes, NestJS under /api, and Wexts RPC under /rpc.',
      'Generated typed RPC client plus CLI commands for create, generate/codegen, build, start, and doctor.',
      'Wexts Shield with security headers, strict CORS, CSRF checks, request/body limits, route policies, rate limiting, concurrency limits, audit logs, and redaction.',
      'Deployment, runtime, CLI, troubleshooting, and semver documentation.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/ziadmustafa1/wexts' }],
  },
  {
    name: 'Falak Legal / Lexniva',
    type: 'Law Office Management SaaS',
    repositoryStatus: 'Private repository',
    featured: true,
    description:
      'Arabic/English law office management platform for cases, clients, hearings, documents, invoices, tasks, users, permissions, client portal, audit logs, and encrypted sensitive data.',
    tech: [
      'Next.js 16',
      'React 19',
      'HeroUI',
      'Tailwind CSS 4',
      'TanStack Query',
      'Zustand',
      'next-intl',
      'NestJS 11',
      'Fastify',
      'Prisma',
      'PostgreSQL',
      'JWT',
      'BullMQ',
      'Redis',
      'WebSockets',
      'Swagger',
      'S3',
    ],
    features: [
      'Multi-tenant law firm system with case, client, hearing, task, document, invoice, and payment modules.',
      'RBAC, audit logs, client portal, real-time features, and secure sensitive-data workflows.',
      'PDF, Excel, and CSV exports with backend services for business logic.',
    ],
  },
  {
    name: 'Time Slot Manager',
    type: 'Marketplace / Scheduling SaaS',
    repositoryStatus: 'Private repository',
    featured: true,
    description:
      'Scheduling and time-slot management system for merchants, branches, pickup/delivery methods, slot templates, actual slots, blackout dates, reservations, and platform integrations.',
    tech: [
      'Next.js 16',
      'React 18',
      'TypeScript',
      'Prisma 6',
      'PostgreSQL',
      'NextAuth/Auth.js',
      'TanStack Query',
      'React Hook Form',
      'Zod',
      'Radix UI',
      'Tailwind CSS',
      'Vitest',
      'Bun',
    ],
    features: [
      'Merchant settings, branches, delivery/pickup methods, slot templates, generated slots, and blackout dates.',
      'Reservations, capacity handling, admin dashboard, and public booking widget.',
      'OAuth and webhook architecture for Salla/Zid-style marketplace integrations.',
    ],
  },
  {
    name: 'Hikaya Stories',
    type: 'Early Childhood Education Platform',
    repositoryStatus: 'Private repository',
    description:
      'Arabic nursery content platform for early childhood education with admin-created official content and nursery-user access.',
    tech: [
      'Next.js 16',
      'React 19',
      'HeroUI',
      'React Hook Form',
      'Zod',
      'TypeScript',
      'NestJS 11',
      'Prisma',
      'PostgreSQL',
      'Redis',
      'BullMQ',
      'Cloudflare R2',
      'Docker Compose',
      'Bun',
    ],
    features: [
      'Stories, educational materials, videos, podcasts, nursery accounts, and admin content management.',
      'Auth-required app beyond the landing page with admin and nursery roles.',
      'Frontend/backend split with thin routes and business logic in backend services.',
    ],
  },
  {
    name: 'Aetheris AI',
    type: 'Full-Stack AI/SaaS-Style App',
    repositoryStatus: 'Private repository',
    description:
      'Full-stack SaaS-style app with dashboard UI, API backend, authentication, payments, real-time features, file/media handling, and VPS deployment workflow.',
    tech: [
      'Next.js 16',
      'React 19',
      'HeroUI',
      'Tailwind CSS 4',
      'React Hook Form',
      'Axios',
      'SWR',
      'Framer Motion',
      'Recharts',
      'Socket.IO',
      'NestJS 11',
      'Fastify 5',
      'Prisma 7',
      'PostgreSQL',
      'Stripe',
      'Cloudinary',
    ],
    features: [
      'Auth, OAuth Google, JWT, Passport, and rate-limited API backend.',
      'Real-time features, payments, dashboard UI, PWA support, uploads, and media workflows.',
      'VPS deployment workflow with production-oriented backend setup.',
    ],
  },
  {
    name: 'countries-cities-ar',
    type: 'Open-Source npm Library',
    repositoryStatus: 'Public',
    description:
      'Multilingual country/state/province dataset library for Arabic, English, and French projects. Includes 250 countries and 4,642 states/provinces with Arabic translations for Arab countries.',
    tech: [
      'TypeScript',
      'tsup',
      'Vitest',
      'ESLint',
      'npm package exports',
      'ESM/CJS builds',
      'Type declarations',
    ],
    features: [
      'Usable in React, Next.js, Vue, and TypeScript applications.',
      'Arabic, English, and French data access for location forms and admin systems.',
      'Package exports with ESM/CJS builds and generated type declarations.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/ziadmustafa1/countries-cities-ar' }],
  },
];

export const moreProjects = [
  'E-commerce apps',
  'Admin dashboards',
  'Medical/clinical apps',
  'E-learning',
  'Shujasa',
  'Amazon clone',
] as const;
