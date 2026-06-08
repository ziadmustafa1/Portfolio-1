import type { ExperienceItem } from '@/src/types/portfolio';

export const experience: ExperienceItem[] = [
  {
    id: 'freelance-full-stack-engineer',
    title: 'Freelance Full-Stack Software Engineer',
    organization: 'Independent / Remote',
    date: '2022 - Present',
    description:
      'Works on frontend and full-stack web projects with a focus on product interfaces, dashboards, admin systems, e-commerce flows, booking tools, and developer tooling.',
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
      'Built product screens and workflows for dashboards, internal tools, booking systems, and admin panels.',
      'Created open-source package/toolkit work around full-stack TypeScript apps and multilingual location data.',
      'Worked with responsive UI, typed data models, API integration, validation, and deployment-ready project structure.',
    ],
  },
  {
    id: 'product-platform-builder',
    title: 'Product Platform Builder',
    organization: 'Portfolio Projects',
    date: 'Ongoing',
    description:
      'Uses portfolio projects to explore reusable product patterns: e-commerce systems, HR dashboards, legal/admin workflows, booking tools, and developer libraries.',
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
      'Maps each project feature to the technologies and implementation decisions behind it.',
      'Documents what was built, what problem it solves, and what could be improved next.',
    ],
  },
];
