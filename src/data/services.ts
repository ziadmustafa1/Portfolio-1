import type { Service } from '@/src/types/portfolio';

export const services: Service[] = [
  {
    id: 'saas-dashboards',
    title: 'SaaS Dashboards',
    description:
      'Role-aware product dashboards with account flows, data fetching, charts, billing-ready surfaces, and deployment-aware architecture.',
    deliverables: ['Dashboard IA', 'Auth flows', 'Data tables', 'Charts', 'Settings', 'API integration'],
    relatedProjects: ['aetheris-ai', 'falak-legal', 'time-slot-manager'],
    relatedTechnologies: ['Next.js App Router', 'React', 'TanStack Query', 'HeroUI', 'NestJS'],
  },
  {
    id: 'admin-panels',
    title: 'Admin Panels',
    description:
      'Operational panels for teams that need CRUD, permissions, auditability, exports, and clear day-to-day workflows.',
    deliverables: ['CRUD modules', 'RBAC', 'Audit logs', 'Search and filters', 'Exports', 'Responsive UI'],
    relatedProjects: ['falak-legal', 'hikaya-stories', 'time-slot-manager'],
    relatedTechnologies: ['Prisma', 'PostgreSQL', 'React Hook Form', 'Zod', 'JWT'],
  },
  {
    id: 'booking-systems',
    title: 'Booking Systems',
    description:
      'Capacity-aware booking and reservation products for branches, methods, schedules, blackout dates, and marketplace integrations.',
    deliverables: ['Slot models', 'Booking widget', 'Capacity rules', 'Admin settings', 'Integration hooks'],
    relatedProjects: ['time-slot-manager'],
    relatedTechnologies: ['TypeScript', 'Prisma', 'PostgreSQL', 'Auth.js', 'Validation'],
  },
  {
    id: 'internal-tools',
    title: 'Internal Tools',
    description:
      'Focused software for teams that need faster internal operations, protected data, dashboards, and workflow automation.',
    deliverables: ['Workflow mapping', 'Protected routes', 'Tables', 'Uploads', 'Notifications', 'Reports'],
    relatedProjects: ['falak-legal', 'hikaya-stories'],
    relatedTechnologies: ['NestJS', 'BullMQ', 'Redis', 'S3-compatible storage', 'WebSockets'],
  },
  {
    id: 'api-driven-apps',
    title: 'API-Driven Apps',
    description:
      'Frontend products backed by clean service APIs, validation layers, typed contracts, and production deployment habits.',
    deliverables: ['API contracts', 'Service modules', 'Validation', 'Typed clients', 'Deployment workflow'],
    relatedProjects: ['wexts', 'aetheris-ai', 'countries-cities-ar'],
    relatedTechnologies: ['NestJS', 'Fastify', 'TypeScript', 'CLI codegen', 'OpenAPI-style docs'],
  },
  {
    id: 'mvp-builds',
    title: 'MVP Builds',
    description:
      'Practical first versions that show the product shape, core workflows, technical depth, and a path to production.',
    deliverables: ['Product scope', 'Clickable product UI', 'Core backend', 'Auth', 'Database schema', 'Launch checklist'],
    relatedProjects: ['aetheris-ai', 'time-slot-manager', 'hikaya-stories'],
    relatedTechnologies: ['Next.js', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Vercel'],
  },
];
