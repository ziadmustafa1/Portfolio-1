import type { Profile } from '@/src/types/portfolio';

export const profile: Profile = {
  name: 'Ziad Mostafa',
  title: 'Freelance Full-Stack Software Engineer',
  bio: 'I build production-focused web apps, SaaS dashboards, admin systems, marketplaces, scheduling products, and developer tools with a strong Next.js, TypeScript, NestJS, Prisma, and PostgreSQL foundation.',
  shortBio:
    'Full-stack engineer for founder-led products, internal tools, and technical portfolios that need clean architecture and fast delivery.',
  location: 'Egypt / Remote',
  availability: 'Available for freelance builds and product roles',
  avatar: '/file.png',
  email: '123ziadmstfy@gmail.com',
  phone: '+20 115 479 0469',
  whatsapp: 'https://wa.me/201154790469',
  cvPath: '/Ziad_Mostafa_ATS_CV_Updated.pdf',
  focus: [
    'SaaS dashboards and admin systems',
    'Backend-owned business logic',
    'Role-based access and audit trails',
    'Responsive product interfaces',
    'Deployable full-stack workflows',
  ],
  stats: [
    { label: 'Projects', value: '12+', detail: 'Featured and shipped builds' },
    { label: 'Products Built', value: '8', detail: 'SaaS, tools, marketplaces' },
    { label: 'Experience', value: '2022+', detail: 'Freelance engineering' },
    { label: 'Technologies', value: '35+', detail: 'Mapped to real features' },
    { label: 'Open Source', value: '2', detail: 'Toolkit and npm library' },
  ],
};
