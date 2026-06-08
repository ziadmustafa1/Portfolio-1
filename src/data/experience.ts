import type { ExperienceItem } from '@/src/types/portfolio';

export const experience: ExperienceItem[] = [
  {
    id: 'freelance-full-stack-engineer',
    title: 'Freelance Full-Stack Software Engineer',
    organization: 'Independent / Remote',
    date: '2022 - Present',
    description:
      'Builds production-oriented web applications for SaaS dashboards, legal-tech systems, marketplaces, scheduling products, education content platforms, admin panels, and developer tools.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'NestJS',
      'Prisma',
      'PostgreSQL',
      'Tailwind CSS',
      'HeroUI',
      'Vercel',
      'VPS deployment',
    ],
    achievements: [
      'Built role-aware product modules with authentication, authorization, audit logs, exports, uploads, and dashboard workflows.',
      'Created reusable tooling and open-source packages for full-stack app foundations and multilingual location data.',
      'Delivered interfaces for Arabic/English products with responsive layouts and production deployment concerns.',
    ],
  },
  {
    id: 'product-platform-builder',
    title: 'Product Platform Builder',
    organization: 'Portfolio Projects',
    date: 'Ongoing',
    description:
      'Transforms repeated product patterns into reusable structures: booking engines, case workspaces, dashboards, admin panels, portals, and technical evidence systems.',
    technologies: [
      'Domain modeling',
      'Server Components',
      'Protected Routes',
      'TanStack Query',
      'Zustand',
      'React Hook Form',
      'Zod',
      'BullMQ',
      'Redis',
    ],
    achievements: [
      'Mapped product features to technical decisions so clients and recruiters can inspect engineering depth.',
      'Designed backend-owned workflows for permissions, scheduling, media processing, and operational records.',
    ],
  },
];
