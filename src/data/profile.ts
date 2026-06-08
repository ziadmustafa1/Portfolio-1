import type { Profile } from '@/src/types/portfolio';

export const profile: Profile = {
  name: 'Ziad Mostafa',
  title: 'Frontend / Full-Stack Developer',
  bio: 'I build production-focused web apps, SaaS dashboards, admin systems, marketplaces, scheduling products, and developer tools with a strong Next.js, TypeScript, NestJS, Prisma, and PostgreSQL foundation.',
  shortBio:
    'Frontend and full-stack leaning developer focused on product interfaces, admin workflows, and practical web applications.',
  location: 'Egypt / Remote',
  availability: 'Available for freelance work and product roles',
  avatar: '/profile-photo.jpg',
  email: '123ziadmstfy@gmail.com',
  phone: '+20 115 479 0469',
  whatsapp: 'https://wa.me/201154790469',
  cvPath: '/Ziad_Mostafa_ATS_CV_Updated.pdf',
  focus: [
    'Next.js product interfaces',
    'SaaS and admin dashboards',
    'E-commerce and booking workflows',
    'Role-based internal tools',
    'Practical full-stack implementation',
  ],
  stats: [
    { label: 'Portfolio Focus', value: 'Product UI', detail: 'Interfaces, dashboards, workflows' },
    { label: 'Core Stack', value: 'Next.js', detail: 'React, TypeScript, Tailwind' },
    { label: 'Backend Tools', value: 'NestJS', detail: 'Prisma, PostgreSQL, APIs' },
    { label: 'Work Mode', value: 'Remote', detail: 'Freelance and product teams' },
    { label: 'Open Source', value: 'Active', detail: 'Toolkit and npm library work' },
  ],
};
