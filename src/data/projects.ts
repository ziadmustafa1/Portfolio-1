import type { Project } from '@/src/types/portfolio';

export const projects: Project[] = [
  {
    id: 'wexts',
    title: 'Wexts',
    slug: 'wexts',
    category: 'Open-Source Developer Toolkit',
    shortDescription:
      'Open-source toolkit for combining Next.js, NestJS, typed RPC, CLI workflows, and production-minded app structure.',
    fullDescription:
      'Wexts is an open-source developer toolkit/library built to explore a cleaner way to structure full-stack TypeScript apps. It focuses on connecting Next.js and NestJS with typed RPC generation, command-line workflows, shared runtime ideas, documentation, examples, and safer production defaults.',
    status: 'live',
    type: 'open-source',
    role: 'Built the toolkit concept, package structure, CLI flow, typed RPC layer, documentation, and examples.',
    problem:
      'Full-stack TypeScript projects often end up with repeated setup work, disconnected frontend/backend boundaries, and hand-written API glue that becomes hard to maintain.',
    solution:
      'Implemented a toolkit that standardizes the app structure, exposes CLI commands, and uses typed contracts so frontend calls can stay closer to backend behavior.',
    features: [
      {
        id: 'typed-rpc',
        title: 'Typed RPC Contracts',
        description: 'Maps backend contracts into frontend-friendly typed calls.',
        technologies: ['TypeScript', 'RPC contracts', 'CLI codegen', 'Node.js'],
        complexity: 'advanced',
        businessValue: 'Helps reduce API drift in projects that need fast full-stack iteration.',
      },
      {
        id: 'next-nest-structure',
        title: 'Next.js + NestJS Structure',
        description: 'Organizes frontend routes and backend services around one TypeScript stack.',
        technologies: ['Next.js App Router', 'NestJS', 'Fastify', 'TypeScript'],
        complexity: 'advanced',
        businessValue: 'Gives developers a repeatable starting point for product builds.',
      },
      {
        id: 'developer-workflow',
        title: 'Developer Workflow',
        description: 'Includes commands, examples, docs, and guardrails for local development.',
        technologies: ['pnpm workspaces', 'Changesets', 'Docs', 'Testing'],
        complexity: 'intermediate',
        businessValue: 'Makes the toolkit easier to inspect, run, and extend.',
      },
    ],
    techStack: [
      'Next.js App Router',
      'NestJS',
      'Fastify',
      'TypeScript',
      'Node.js',
      'pnpm workspaces',
      'CLI codegen',
      'Changesets',
      'Testing',
    ],
    businessImpact: [
      'Shows open-source package thinking, TypeScript architecture, and developer workflow design.',
      'Provides a reusable foundation for future full-stack experiments and examples.',
    ],
    githubUrl: 'https://github.com/ziadmustafa1/wexts',
    docsUrl: 'https://github.com/ziadmustafa1/wexts',
    technicalDecisions: [
      'Keep frontend/backend contracts explicit instead of relying on loosely typed request helpers.',
      'Use CLI workflows to make project setup and generated code easier to repeat.',
      'Document examples so the package can be evaluated without private project context.',
    ],
    architectureNotes: [
      'Next.js handles product UI and route rendering.',
      'NestJS handles backend services and API behavior.',
      'Typed RPC/codegen creates the bridge between app layers.',
    ],
    challenges: [
      'Balancing framework flexibility with enough structure to be useful.',
      'Keeping generated code understandable for developers who need to debug it.',
    ],
    improvements: [
      'Add more starter examples for SaaS, admin panels, and e-commerce workflows.',
      'Expand docs around deployment and integration patterns.',
    ],
  },
  {
    id: 'ecommerce-systems',
    title: 'E-commerce Systems',
    slug: 'ecommerce-systems',
    category: 'Storefront and Admin Prototype',
    shortDescription:
      'Next.js e-commerce project direction focused on storefront pages, product management, checkout flow, and admin tooling.',
    fullDescription:
      'Built as a product prototype for e-commerce workflows. The project direction focuses on a responsive storefront, product/catalog structure, cart and checkout states, admin management screens, and API-driven data handling that can support a real store once payment, inventory, and deployment details are finalized.',
    status: 'case-study',
    type: 'product',
    role: 'Designed and implemented the frontend experience, product data structure, admin UI patterns, and integration-ready screens.',
    problem:
      'Small stores and product teams need a storefront that is clear for customers while still giving admins a practical way to manage products, orders, and content.',
    solution:
      'Structured the project around customer-facing shopping flows and separate admin screens for managing store data and operational tasks.',
    features: [
      {
        id: 'storefront-pages',
        title: 'Storefront Pages',
        description:
          'Product listing, product detail, category browsing, and responsive layout states.',
        technologies: ['Next.js App Router', 'React', 'Tailwind CSS', 'TypeScript'],
        complexity: 'intermediate',
        businessValue: 'Gives shoppers a clear way to browse and inspect products.',
      },
      {
        id: 'cart-checkout-flow',
        title: 'Cart and Checkout Flow',
        description: 'Cart state, checkout form structure, validation, and order summary UI.',
        technologies: ['React state', 'React Hook Form', 'Zod', 'Client components'],
        complexity: 'intermediate',
        businessValue: 'Models the core buying journey before connecting real payment providers.',
      },
      {
        id: 'store-admin',
        title: 'Store Admin Screens',
        description: 'Admin-style screens for products, orders, filters, and management actions.',
        technologies: ['Data tables', 'Protected Routes', 'Prisma', 'PostgreSQL'],
        complexity: 'advanced',
        businessValue: 'Supports the operational side of running a store.',
      },
    ],
    techStack: [
      'Next.js App Router',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'React Hook Form',
      'Zod',
      'Prisma',
      'PostgreSQL',
      'Protected Routes',
    ],
    businessImpact: [
      'Demonstrates customer-facing UI and admin workflow thinking in one product direction.',
      'Creates a foundation that can later connect to real payments, inventory, and shipping services.',
    ],
    technicalDecisions: [
      'Separate customer storefront screens from admin management screens.',
      'Use form validation at checkout and admin input boundaries.',
      'Keep product data modeling flexible enough for categories, variants, and order records.',
    ],
    architectureNotes: [
      'Storefront pages focus on browsing and checkout UX.',
      'Admin screens focus on product and order management.',
      'Backend/data layer can support products, categories, users, carts, and orders.',
    ],
    challenges: [
      'Keeping the checkout flow simple while leaving space for real payment and shipping integrations.',
      'Designing admin screens that stay readable with product/order growth.',
    ],
    improvements: [
      'Connect a real payment provider once business requirements are known.',
      'Add inventory rules, shipping settings, and order notification workflows.',
    ],
  },
  {
    id: 'hr-company-dashboard',
    title: 'HR / Company Management Dashboard',
    slug: 'hr-company-dashboard',
    category: 'Internal Tools Dashboard',
    shortDescription:
      'Company operations dashboard direction for employees, roles, attendance, task tracking, and admin workflows.',
    fullDescription:
      'Built as an internal-tool prototype for company management workflows. It is designed for teams that need a practical dashboard for employee records, roles, attendance, tasks, and operational views without turning the interface into a generic spreadsheet clone.',
    status: 'case-study',
    type: 'product',
    role: 'Built dashboard screens, workflow structure, role-aware UI patterns, and data models for internal operations.',
    problem:
      'Company operations can become scattered across spreadsheets, chat messages, and manual tracking when employee and task data are not organized in one system.',
    solution:
      'Designed a dashboard structure that groups employees, roles, attendance, and task workflows into focused screens with clear admin actions.',
    features: [
      {
        id: 'employee-records',
        title: 'Employee Records',
        description: 'Profiles, departments, roles, contact fields, and employment status screens.',
        technologies: ['Next.js App Router', 'React', 'Prisma', 'PostgreSQL'],
        complexity: 'intermediate',
        businessValue: 'Keeps team information easier to find and maintain.',
      },
      {
        id: 'attendance-workflows',
        title: 'Attendance Workflows',
        description: 'Attendance states, date-based views, filters, and admin review patterns.',
        technologies: ['Date modeling', 'Data tables', 'TypeScript', 'Validation'],
        complexity: 'advanced',
        businessValue: 'Supports a clearer view of daily team availability.',
      },
      {
        id: 'task-management',
        title: 'Task Management',
        description: 'Task assignment, status tracking, role-aware access, and activity views.',
        technologies: ['Protected Routes', 'RBAC', 'TanStack Query', 'Zustand'],
        complexity: 'advanced',
        businessValue: 'Helps teams connect work ownership with employee workflows.',
      },
    ],
    techStack: [
      'Next.js App Router',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'TanStack Query',
      'Zustand',
      'Prisma',
      'PostgreSQL',
      'RBAC',
    ],
    businessImpact: [
      'Shows internal-tool UX for real operational data rather than static landing pages.',
      'Demonstrates role-aware dashboard thinking for team workflows.',
    ],
    technicalDecisions: [
      'Model employee, role, attendance, and task data separately so workflows can grow independently.',
      'Use role-aware UI states instead of exposing every action to every user.',
      'Favor dense but readable dashboard screens for repeated admin use.',
    ],
    architectureNotes: [
      'Dashboard pages organize employee and task workflows.',
      'Data layer supports employee records, attendance events, roles, and task status.',
      'Protected routes and permission checks prepare the product for multi-role usage.',
    ],
    challenges: [
      'Avoiding clutter while keeping operational screens useful for daily work.',
      'Handling date and attendance states without creating confusing edge cases.',
    ],
    improvements: [
      'Add approval flows, reporting exports, and notification hooks.',
      'Connect attendance data to real organization policies once requirements are known.',
    ],
  },
  {
    id: 'legal-operations-dashboard',
    title: 'Legal Operations Dashboard',
    slug: 'legal-operations-dashboard',
    category: 'Legal / SaaS Admin Concept',
    shortDescription:
      'Legal dashboard concept for cases, clients, invoices, documents, hearings, permissions, and admin workflows.',
    fullDescription:
      'Built as a legal/SaaS dashboard concept for law office management workflows. The project direction focuses on organizing cases, clients, hearings, documents, invoices, tasks, and permissions in a way that supports legal admin work without making unsupported claims about live firm usage.',
    status: 'case-study',
    type: 'product',
    role: 'Worked on product module structure, dashboard screens, data modeling, permission-aware flows, and bilingual UI considerations.',
    problem:
      'Legal work depends on connected records, sensitive documents, deadlines, and role-specific access, which can become difficult to manage with generic tools.',
    solution:
      'Structured the dashboard around legal workflows: cases first, with related clients, hearings, documents, invoices, and tasks connected around each case.',
    features: [
      {
        id: 'case-workspace',
        title: 'Case Workspace',
        description:
          'Case records connect clients, hearings, documents, invoices, tasks, and notes.',
        technologies: ['Next.js App Router', 'HeroUI', 'TanStack Query', 'Prisma', 'PostgreSQL'],
        complexity: 'advanced',
        businessValue: 'Keeps legal records grouped around the work item that matters most.',
      },
      {
        id: 'permissions-audit',
        title: 'Permissions and Audit Events',
        description:
          'Role-aware access patterns and sensitive-action tracking for admin workflows.',
        technologies: ['JWT', 'RBAC', 'Middleware', 'Audit logs', 'NestJS'],
        complexity: 'advanced',
        businessValue: 'Supports safer handling of sensitive legal data.',
      },
      {
        id: 'documents-invoices',
        title: 'Documents and Invoices',
        description: 'Document organization, invoice screens, status states, and admin actions.',
        technologies: ['File storage patterns', 'Forms', 'Validation', 'PostgreSQL'],
        complexity: 'intermediate',
        businessValue: 'Connects operational records to billing and document workflows.',
      },
    ],
    techStack: [
      'Next.js App Router',
      'React',
      'HeroUI',
      'Tailwind CSS',
      'TanStack Query',
      'NestJS',
      'Prisma',
      'PostgreSQL',
      'JWT',
      'RBAC',
      'Audit logs',
    ],
    businessImpact: [
      'Demonstrates how a dense professional workflow can be translated into a readable SaaS dashboard.',
      'Shows permission and data-model thinking for sensitive admin products.',
    ],
    technicalDecisions: [
      'Group records around cases instead of scattering them into unrelated CRUD pages.',
      'Keep permission-sensitive logic close to backend/API boundaries.',
      'Use explicit status and ownership fields for documents, invoices, and tasks.',
    ],
    architectureNotes: [
      'Frontend dashboard handles case, client, invoice, document, and task screens.',
      'Backend services can own permissions, audit events, exports, and sensitive actions.',
      'Data model separates legal entities while preserving relationships between them.',
    ],
    challenges: [
      'Making dense legal screens readable for repeated staff use.',
      'Designing permission states that are clear without slowing normal admin work.',
    ],
    improvements: [
      'Add reporting, reminders, and document automation once workflow details are confirmed.',
      'Expand Arabic/English UX states if bilingual use is required.',
    ],
  },
  {
    id: 'time-slot-manager',
    title: 'Booking / Time Slot Manager',
    slug: 'time-slot-manager',
    category: 'Booking and Scheduling Tool',
    shortDescription:
      'Booking system prototype for merchants, branches, delivery methods, time slots, reservations, and admin controls.',
    fullDescription:
      'Built as a product prototype for time-slot and reservation workflows. It is designed for merchants or service teams that need to define availability, manage branch or method rules, block dates, generate slots, and review reservations from an admin dashboard.',
    status: 'case-study',
    type: 'product',
    role: 'Built the scheduling model, reservation flow, admin screens, validation patterns, and integration-ready structure.',
    problem:
      'Scheduling becomes difficult when availability depends on branches, service methods, blackout dates, capacity rules, and customer reservations.',
    solution:
      'Separated reusable slot templates from generated reservable slots, then connected those rules to a booking flow and admin dashboard.',
    features: [
      {
        id: 'slot-templates',
        title: 'Slot Template Engine',
        description: 'Template rules define available times for different branches and methods.',
        technologies: ['Prisma', 'PostgreSQL', 'TypeScript', 'Date modeling', 'Validation'],
        complexity: 'advanced',
        businessValue: 'Lets admins manage scheduling rules without creating every slot manually.',
      },
      {
        id: 'reservation-flow',
        title: 'Reservation Flow',
        description: 'Customer-facing booking flow checks availability and selected method rules.',
        technologies: ['Next.js App Router', 'React Hook Form', 'Zod', 'TanStack Query'],
        complexity: 'intermediate',
        businessValue: 'Helps prevent confusing booking states before real integrations are added.',
      },
      {
        id: 'admin-controls',
        title: 'Admin Controls',
        description:
          'Screens for branches, methods, blackout dates, slots, reservations, and settings.',
        technologies: ['React', 'Tailwind CSS', 'Data tables', 'Protected Routes'],
        complexity: 'advanced',
        businessValue: 'Gives operators a central place to adjust booking availability.',
      },
    ],
    techStack: [
      'Next.js App Router',
      'React',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'TanStack Query',
      'React Hook Form',
      'Zod',
      'Tailwind CSS',
      'Protected Routes',
    ],
    businessImpact: [
      'Models a practical booking workflow that can be adapted to delivery, pickup, appointments, or service scheduling.',
      'Shows domain modeling for date-heavy product logic.',
    ],
    technicalDecisions: [
      'Separate templates from generated slots so historical reservations can remain stable.',
      'Validate booking input at form and API boundaries.',
      'Keep schedule rules explicit so future integrations can inspect availability decisions.',
    ],
    architectureNotes: [
      'Admin dashboard manages schedule rules and reservation records.',
      'Booking flow consumes availability and creates reservation requests.',
      'Data model supports branches, methods, blackout dates, templates, slots, and reservations.',
    ],
    challenges: [
      'Handling date/time edge cases and blackout conflicts clearly.',
      'Keeping the admin UI understandable while exposing enough scheduling control.',
    ],
    improvements: [
      'Add utilization reporting, notifications, and marketplace integration diagnostics.',
      'Connect real payment or order systems if required by the product.',
    ],
  },
  {
    id: 'countries-cities-ar',
    title: 'countries-cities-ar',
    slug: 'countries-cities-ar',
    category: 'Open-Source npm Library',
    shortDescription:
      'Open-source TypeScript package for multilingual country and state/province data with Arabic-friendly usage.',
    fullDescription:
      'countries-cities-ar is an open-source npm library direction focused on reusable country and state/province data for Arabic, English, and French TypeScript projects. It demonstrates package structure, typed exports, build outputs, tests, and documentation for developers who need location data in forms or admin systems.',
    status: 'live',
    type: 'open-source',
    role: 'Built the package structure, data model, TypeScript exports, tests, documentation, and release-oriented setup.',
    problem:
      'Multilingual apps often need country and region data, but teams may not want to rebuild the same typed dataset for every form.',
    solution:
      'Packaged location data and helper exports into a TypeScript library that can be imported into frontend or Node.js projects.',
    features: [
      {
        id: 'multilingual-data',
        title: 'Multilingual Location Data',
        description:
          'Country and state/province entries prepared for Arabic, English, and French usage.',
        technologies: ['TypeScript', 'Data modeling', 'Package exports'],
        complexity: 'intermediate',
        businessValue: 'Speeds up building location fields in multilingual products.',
      },
      {
        id: 'library-builds',
        title: 'Library Build Outputs',
        description:
          'ESM/CJS-compatible outputs, generated type declarations, and package exports.',
        technologies: ['tsup', 'ESM/CJS builds', 'Type declarations', 'npm package exports'],
        complexity: 'intermediate',
        businessValue: 'Makes the package easier to consume across different JavaScript setups.',
      },
      {
        id: 'developer-docs',
        title: 'Developer Documentation',
        description: 'README examples and usage notes for importing and querying the dataset.',
        technologies: ['README docs', 'Vitest', 'ESLint', 'TypeScript'],
        complexity: 'basic',
        businessValue: 'Reduces setup time for developers evaluating the package.',
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
      'Shows practical open-source packaging, typing, and documentation discipline.',
      'Provides reusable data support for Arabic-aware forms and admin systems.',
    ],
    githubUrl: 'https://github.com/ziadmustafa1/countries-cities-ar',
    docsUrl: 'https://github.com/ziadmustafa1/countries-cities-ar',
    technicalDecisions: [
      'Ship typed exports so consuming projects get TypeScript support.',
      'Use modern build outputs to support different JavaScript environments.',
      'Document basic access patterns so the package can be evaluated quickly.',
    ],
    architectureNotes: [
      'Data is packaged as importable library exports.',
      'Build tooling prepares distribution files and type declarations.',
      'Tests help protect expected data access behavior.',
    ],
    challenges: [
      'Keeping multilingual naming consistent and easy to query.',
      'Designing package exports that work across frontend and backend projects.',
    ],
    improvements: [
      'Add more examples for form libraries and admin dashboards.',
      'Expand helper functions if city-level data or search utilities are needed.',
    ],
  },
];
