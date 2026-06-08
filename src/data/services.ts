import type { Service } from '@/src/types/portfolio';

export const services: Service[] = [
  {
    id: 'saas-dashboards',
    title: 'SaaS Dashboards',
    description:
      'Focused dashboard interfaces for products that need clear navigation, data views, forms, settings, and role-aware screens.',
    deliverables: [
      'Dashboard IA',
      'Auth flows',
      'Data tables',
      'Charts',
      'Settings',
      'API integration',
    ],
    relatedProjects: ['legal-operations-dashboard', 'hr-company-dashboard', 'time-slot-manager'],
    relatedTechnologies: ['Next.js App Router', 'React', 'TanStack Query', 'HeroUI', 'NestJS'],
  },
  {
    id: 'admin-panels',
    title: 'Admin Panels',
    description:
      'Operational panels for teams that need searchable records, protected actions, forms, filters, and practical day-to-day workflows.',
    deliverables: [
      'CRUD modules',
      'RBAC',
      'Audit logs',
      'Search and filters',
      'Exports',
      'Responsive UI',
    ],
    relatedProjects: ['hr-company-dashboard', 'legal-operations-dashboard', 'ecommerce-systems'],
    relatedTechnologies: ['Prisma', 'PostgreSQL', 'React Hook Form', 'Zod', 'JWT'],
  },
  {
    id: 'booking-systems',
    title: 'Booking Systems',
    description:
      'Capacity-aware booking and reservation products for branches, methods, schedules, blackout dates, and marketplace integrations.',
    deliverables: [
      'Slot models',
      'Booking widget',
      'Capacity rules',
      'Admin settings',
      'Integration hooks',
    ],
    relatedProjects: ['time-slot-manager'],
    relatedTechnologies: ['TypeScript', 'Prisma', 'PostgreSQL', 'Auth.js', 'Validation'],
  },
  {
    id: 'internal-tools',
    title: 'Internal Tools',
    description:
      'Internal tools for employee workflows, legal/admin records, protected data, dashboards, uploads, and status tracking.',
    deliverables: [
      'Workflow mapping',
      'Protected routes',
      'Tables',
      'Uploads',
      'Notifications',
      'Reports',
    ],
    relatedProjects: ['hr-company-dashboard', 'legal-operations-dashboard'],
    relatedTechnologies: ['NestJS', 'BullMQ', 'Redis', 'S3-compatible storage', 'WebSockets'],
  },
  {
    id: 'api-driven-apps',
    title: 'API-Driven Apps',
    description:
      'Frontend products backed by service APIs, validation layers, typed contracts, and deployable project structure.',
    deliverables: [
      'API contracts',
      'Service modules',
      'Validation',
      'Typed clients',
      'Deployment workflow',
    ],
    relatedProjects: ['wexts', 'ecommerce-systems', 'countries-cities-ar'],
    relatedTechnologies: ['NestJS', 'Fastify', 'TypeScript', 'CLI codegen', 'OpenAPI-style docs'],
  },
  {
    id: 'mvp-builds',
    title: 'MVP Builds',
    description:
      'Practical first versions that show the product shape, core workflow, data model, and next steps without pretending to be a finished enterprise product.',
    deliverables: [
      'Product scope',
      'Clickable product UI',
      'Core backend',
      'Auth',
      'Database schema',
      'Launch checklist',
    ],
    relatedProjects: ['ecommerce-systems', 'time-slot-manager', 'hr-company-dashboard'],
    relatedTechnologies: ['Next.js', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Vercel'],
  },
];
