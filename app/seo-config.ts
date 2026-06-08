import type { Metadata } from 'next';
import { profile } from '@/src/data/profile';

export const baseUrl = 'https://ziad-frontend.vercel.app';

const title = 'Ziad Mostafa - Full-Stack / Frontend Developer Portfolio';
const description =
  'Developer portfolio focused on Next.js, TypeScript, React, SaaS dashboards, e-commerce systems, admin panels, booking tools, and product interfaces.';

const sameAs = ['https://github.com/ziadmustafa1'];

const knowsAbout = [
  'Frontend Development',
  'Full-Stack Development',
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'NestJS',
  'Prisma',
  'PostgreSQL',
  'SaaS Dashboards',
  'E-commerce Systems',
  'Admin Panels',
  'Booking Systems',
  'Developer Tools',
];

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${baseUrl}/#person`,
  name: profile.name,
  givenName: 'Ziad',
  familyName: 'Mostafa',
  alternateName: 'Ziad Mostafa',
  description,
  jobTitle: profile.title,
  url: baseUrl,
  email: profile.email,
  telephone: profile.phone,
  sameAs,
  image: `${baseUrl}${profile.avatar}`,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'Egypt',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance',
  },
  knowsLanguage: ['Arabic', 'English'],
  knowsAbout,
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${baseUrl}/#website`,
  url: baseUrl,
  name: title,
  description,
  publisher: {
    '@id': `${baseUrl}/#person`,
  },
};

export const structuredData = [personSchema, websiteSchema];

const keywords = [
  'Ziad Mostafa',
  'Full-Stack Developer Portfolio',
  'Frontend Developer Portfolio',
  'Next.js Developer',
  'React Developer',
  'TypeScript Developer',
  'Tailwind CSS Developer',
  'NestJS Developer',
  'Prisma Developer',
  'PostgreSQL Developer',
  'SaaS Dashboard Developer',
  'E-commerce Developer',
  'Admin Panel Developer',
  'Booking System Developer',
  'Developer Tools',
  'Freelance Web Developer Egypt',
];

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: title,
    template: '%s | Ziad Mostafa',
  },
  description,
  keywords,
  authors: [{ name: profile.name, url: baseUrl }],
  creator: profile.name,
  publisher: profile.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: baseUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    title,
    description,
    siteName: 'Ziad Mostafa Portfolio',
    images: [
      {
        url: profile.avatar,
        width: 1536,
        height: 2048,
        alt: 'Ziad Mostafa profile photo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [profile.avatar],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Ziad Mostafa',
  },
  category: 'Portfolio',
  classification: 'Portfolio, Personal Website',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};
