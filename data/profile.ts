export const profile = {
  name: 'Ziad Mostafa',
  role: 'Freelance Full-Stack Software Engineer',
  location: 'Egypt',
  experience: 'Freelance since 2022',
  email: '123ziadmstfy@gmail.com',
  phone: '+20 115 479 0469',
  whatsapp: 'https://wa.me/201154790469',
  github: 'https://github.com/ziadmustafa1',
  linkedin: 'https://linkedin.com/in/ziad-mostafa-2a4315179',
  portfolio: 'https://ziad-frontend.vercel.app',
  cvPath: '/Ziad_Mostafa_ATS_CV_Updated.pdf',
  summary:
    'Freelance Full-Stack Software Engineer building production-focused web applications, SaaS dashboards, marketplaces, admin systems, and developer tooling using Next.js, React, TypeScript, NestJS, Prisma, PostgreSQL, and modern deployment workflows.',
  heroSubtitle:
    'I build production-focused web apps, SaaS dashboards, admin systems, marketplaces, and developer tools with Next.js, React, TypeScript, NestJS, Prisma, and PostgreSQL.',
  about:
    'I am a freelance full-stack developer focused on building real business software: SaaS dashboards, legal-tech systems, e-commerce tools, scheduling systems, and developer tooling. I work mainly with Next.js, React, TypeScript, NestJS, Prisma, and PostgreSQL. I care about clean architecture, backend-owned business logic, role-based access, responsive UI, and deployable production workflows.',
  languages: ['Arabic: Native', 'English: Basic'],
} as const;

export type ExperienceItem = {
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: 'Freelance Full-Stack Software Engineer',
    period: '2022 - Present',
    location: 'Egypt / Remote',
    bullets: [
      'Built and maintained full-stack web applications using Next.js, React, TypeScript, NestJS, Prisma, and PostgreSQL.',
      'Developed SaaS dashboards, admin panels, e-commerce flows, legal-tech modules, scheduling systems, and content platforms.',
      'Implemented authentication, authorization, RBAC, REST APIs, file uploads, real-time communication, and deployment workflows.',
      'Worked on production-oriented architecture using VPS deployments, NGINX, PM2, GitHub Actions, and Vercel.',
      'Created reusable tools and libraries, including a Next.js + NestJS toolkit and multilingual country/state data package.',
    ],
  },
];
