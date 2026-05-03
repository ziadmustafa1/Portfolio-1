import type { Metadata } from 'next';
import { profile } from '@/data/profile';

export const baseUrl = profile.portfolio;

const description =
  'Freelance Full-Stack Software Engineer from Egypt building Next.js, React, TypeScript, NestJS, Prisma, PostgreSQL, SaaS dashboards, admin systems, marketplaces, and developer tools.';

const sameAs = [profile.github, profile.linkedin];

const knowsAbout = [
  'Full-Stack Development',
  'Next.js',
  'React',
  'TypeScript',
  'NestJS',
  'Prisma',
  'PostgreSQL',
  'SaaS Dashboards',
  'Admin Systems',
  'Developer Tools',
];

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${baseUrl}/#person`,
  name: profile.name,
  givenName: 'Ziad',
  familyName: 'Mostafa',
  alternateName: 'زياد مصطفى',
  description,
  jobTitle: profile.role,
  url: baseUrl,
  email: profile.email,
  telephone: profile.phone,
  sameAs,
  image: `${baseUrl}/image.png`,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'Egypt',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance',
  },
  knowsLanguage: ['Arabic', 'English Basic'],
  knowsAbout,
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${baseUrl}/#website`,
  url: baseUrl,
  name: 'Ziad Mostafa | Freelance Full-Stack Software Engineer',
  description,
  publisher: {
    '@id': `${baseUrl}/#person`,
  },
};

export const structuredData = [personSchema, websiteSchema];

const keywords = [
  'Ziad Mostafa',
  'Freelance Full-Stack Software Engineer',
  'Full-Stack Developer Egypt',
  'Next.js Developer',
  'React Developer',
  'TypeScript Developer',
  'NestJS Developer',
  'Prisma Developer',
  'PostgreSQL Developer',
  'SaaS Dashboard Developer',
  'Admin Systems Developer',
  'Developer Tools',
  'مطور ويب مصر',
  'مبرمج فول ستاك',
  'زياد مصطفى',
];

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Ziad Mostafa | Freelance Full-Stack Software Engineer',
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
    alternateLocale: 'ar_EG',
    url: baseUrl,
    title: 'Ziad Mostafa | Freelance Full-Stack Software Engineer',
    description,
    siteName: 'Ziad Mostafa Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ziad Mostafa - Freelance Full-Stack Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ziad Mostafa | Freelance Full-Stack Software Engineer',
    description,
    images: ['/og-image.png'],
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
