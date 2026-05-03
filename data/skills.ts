export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    description: 'Application UI, dashboards, forms, data fetching, and responsive interfaces.',
    skills: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'HeroUI',
      'Shadcn/Radix UI',
      'Framer Motion',
      'React Hook Form',
      'Yup',
      'Zod',
      'Zustand',
      'TanStack Query / React Query',
      'SWR',
      'Axios',
      'Responsive UI',
      'Dashboard UI',
      'SaaS UI',
      'RTL / Arabic UI',
    ],
  },
  {
    title: 'Backend',
    description: 'API services, auth, permissions, real-time features, and production workflows.',
    skills: [
      'NestJS',
      'Fastify',
      'Express',
      'Prisma',
      'REST APIs',
      'Authentication',
      'JWT',
      'RBAC',
      'WebSockets',
      'File uploads',
      'Redis / BullMQ basics',
      'Swagger/OpenAPI',
    ],
  },
  {
    title: 'Database',
    description: 'Relational data modeling and backend-owned business logic.',
    skills: ['PostgreSQL', 'Prisma schema design', 'Migrations', 'Audit logs', 'Data exports'],
  },
  {
    title: 'DevOps / Deployment',
    description: 'Deployable systems for Vercel and VPS environments.',
    skills: [
      'Git',
      'GitHub',
      'GitHub Actions',
      'PM2',
      'NGINX',
      'VPS deployment',
      'Vercel',
      'Docker basics',
      'pnpm',
      'bun',
      'Turbo',
    ],
  },
  {
    title: 'Testing / Quality',
    description: 'Focused checks for application behavior and product stability.',
    skills: ['Vitest', 'Playwright basics', 'TypeScript strictness', 'ESLint', 'Code reviews'],
  },
  {
    title: 'Product Types',
    description: 'Practical experience across recruiter and client-facing software categories.',
    skills: [
      'SaaS dashboards',
      'Admin systems',
      'Marketplaces',
      'Scheduling systems',
      'Legal-tech systems',
      'E-commerce tools',
      'Developer tooling',
      'Education platforms',
    ],
  },
];
