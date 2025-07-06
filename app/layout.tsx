import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";

// Load fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Ziad Mostafa | Front-End & Full Stack Developer",
  description: "Professional portfolio of Ziad Mostafa, a passionate Front-End and Full Stack Developer specializing in crafting sleek interfaces with React, Next.js, and modern web technologies.",
  keywords: ["Front-End Developer", "Full Stack Developer", "React", "Next.js", "TypeScript", "Portfolio", "Web Developer"],
  authors: [{ name: "Ziad Mostafa" }],
  creator: "Ziad Mostafa",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zeyad-portfolio.vercel.app",
    title: "Ziad Mostafa | Front-End & Full Stack Developer",
    description: "Professional portfolio of Ziad Mostafa, a passionate Front-End and Full Stack Developer specializing in crafting sleek interfaces with React, Next.js, and modern web technologies.",
    siteName: "Ziad Mostafa Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ziad Mostafa - Front-End & Full Stack Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ziad Mostafa | Front-End & Full Stack Developer",
    description: "Professional portfolio of Ziad Mostafa, a passionate Front-End and Full Stack Developer",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen font-sans antialiased bg-white dark:bg-slate-950">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
