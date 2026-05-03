'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Briefcase,
  Download,
  GitBranch,
  Link as LinkIcon,
  Mail,
  MapPin,
  MessageSquare,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { profile } from '@/data/profile';

const heroStats = [
  { label: 'Location', value: profile.location },
  { label: 'Experience', value: profile.experience },
  { label: 'Focus', value: 'Full-stack web apps' },
];

const socialLinks = [
  { label: 'GitHub', href: profile.github, icon: GitBranch },
  { label: 'LinkedIn', href: profile.linkedin, icon: LinkIcon },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-white dark:to-slate-950">
      <div className="absolute inset-x-0 top-0 h-[42vh] bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.35),transparent_34%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.22),transparent_30%)]" />

      <div className="relative container mx-auto px-4 pt-28 pb-16 sm:pt-32 md:pt-40">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-6xl rounded-lg border border-white/15 bg-white/95 p-5 shadow-2xl backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/95 sm:p-8"
        >
          <div className="grid gap-8 md:grid-cols-[180px_1fr] md:items-start">
            <div className="mx-auto md:mx-0">
              <div className="relative size-36 overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-lg dark:border-slate-700 dark:bg-slate-800 sm:size-40">
                <Image
                  alt="Ziad Mostafa"
                  src="/file.png"
                  fill
                  sizes="(max-width: 768px) 144px, 160px"
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 text-center md:text-left">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
                  <span className="inline-flex items-center gap-2 rounded-md border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:border-blue-900/70 dark:bg-blue-950/40 dark:text-blue-300">
                    <Briefcase className="size-4" />
                    {profile.experience}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    <MapPin className="size-4" />
                    {profile.location}
                  </span>
                </div>

                <div>
                  <h1 className="text-4xl font-bold tracking-normal text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
                    {profile.name}
                  </h1>
                  <p className="mt-3 text-xl font-semibold text-blue-700 dark:text-blue-300 sm:text-2xl">
                    {profile.role}
                  </p>
                </div>

                <p className="mx-auto max-w-3xl text-base leading-8 text-slate-700 dark:text-slate-300 md:mx-0 sm:text-lg">
                  {profile.heroSubtitle}
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                <Button asChild size="lg" className="bg-blue-700 text-white hover:bg-blue-800">
                  <Link href="#projects">View Projects</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={profile.cvPath} download>
                    <Download className="size-4" />
                    Download CV
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="size-4" />
                    Contact on WhatsApp
                  </a>
                </Button>
              </div>

              <div className="grid gap-3 border-y border-slate-200 py-5 dark:border-slate-800 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </div>
                    <div className="mt-1 font-semibold text-slate-950 dark:text-white">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-700 dark:hover:text-blue-300"
                    >
                      <Icon className="size-4" />
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
