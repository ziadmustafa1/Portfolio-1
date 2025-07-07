import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://zeyad-portfolio.vercel.app";

// Structured data for Person
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${baseUrl}/#person`,
  name: "Ziad Mostafa",
  givenName: "Ziad",
  familyName: "Mostafa",
  alternateName: "زياد مصطفى",
  description: "Front-End & Full Stack Developer specializing in React and Next.js",
  jobTitle: "Front-End Developer",
  url: baseUrl,
  sameAs: [
    "https://github.com/ziadmustafa1",
    "https://www.linkedin.com/in/ziad-mostafa-2a4315179",
    // Add other social profiles
  ],
  image: `${baseUrl}/image.png`,
  address: {
    "@type": "PostalAddress",
    addressCountry: "Egypt",
  },
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  knowsLanguage: ["en", "ar"],
  knowsAbout: [
    "Front-End Development",
    "React.js",
    "Next.js",
    "TypeScript",
    "Web Development",
  ],
};

// Structured data for WebSite
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${baseUrl}/#website`,
  url: baseUrl,
  name: "Ziad Mostafa - Front-End Developer Portfolio",
  description: "Professional portfolio showcasing front-end development projects and skills",
  publisher: {
    "@id": `${baseUrl}/#person`,
  },
};

// Combined structured data
export const structuredData = [personSchema, websiteSchema];

// SEO keywords
const keywords = [
  // English Keywords
  "Front-End Developer",
  "React Developer",
  "Next.js Developer",
  "TypeScript Developer",
  "Web Developer",
  "Frontend Developer Egypt",
  "React Developer Egypt",
  "Ziad Mostafa Portfolio",
  "Hire Frontend Developer",
  "Remote Developer Egypt",
  // Arabic Keywords
  "مطور واجهات امامية",
  "مبرمج ريأكت",
  "مطور ويب مصر",
  "مبرمج مواقع",
  "تطوير مواقع",
  "مطور جافاسكريبت",
  "زياد مصطفى",
  "توظيف مطور ويب",
];

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Ziad Mostafa | Front-End & Full Stack Developer",
    template: "%s | Ziad Mostafa",
  },
  description: "Professional portfolio of Ziad Mostafa, a passionate Front-End and Full Stack Developer specializing in React, Next.js, and modern web technologies. مطور واجهات امامية متخصص في تطوير المواقع والتطبيقات",
  keywords,
  authors: [{ name: "Ziad Mostafa", url: baseUrl }],
  creator: "Ziad Mostafa",
  publisher: "Ziad Mostafa",
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
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_EG",
    url: baseUrl,
    title: "Ziad Mostafa | Front-End & Full Stack Developer",
    description: "Professional portfolio of Ziad Mostafa, a passionate Front-End and Full Stack Developer specializing in React, Next.js, and modern web technologies. مطور واجهات امامية متخصص في تطوير المواقع والتطبيقات",
    siteName: "Ziad Mostafa Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ziad Mostafa - Front-End & Full Stack Developer",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ziad Mostafa | Front-End & Full Stack Developer",
    description: "Front-End & Full Stack Developer specializing in React and Next.js | مطور واجهات امامية",
    creator: "@ziadmostafadev",
    images: ["/og-image.png"],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' }
  ],
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Ziad Mostafa",
  },
  verification: {
    google: "google-site-verification=1234567890",
    yandex: "yandex-site-verification=1234567890",
    // Add other search engine verifications
  },
  category: "Portfolio",
  classification: "Portfolio, Personal Website",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#0f172a",
      },
    ],
  },
  other: {
    "google-site-verification": "google-site-verification=1234567890",
    "msapplication-TileColor": "#0f172a",
    "msapplication-config": "/browserconfig.xml",
  },
}; 