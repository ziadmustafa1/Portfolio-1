'use client';

import { motion, useInView } from 'framer-motion';
import { useSafeReducedMotion } from '@/lib/use-safe-reduced-motion';
import { CheckCircle2 } from 'lucide-react';
import { useRef } from 'react';
import { profile } from '@/data/profile';

const focusItems = [
  'Clean architecture',
  'Backend-owned business logic',
  'Role-based access',
  'Responsive UI',
  'Deployable workflows',
];

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const reduceMotion = useSafeReducedMotion();

  return (
    <section
      id="about"
      className="w-full bg-white py-20 dark:bg-slate-950 md:py-28"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={isInView && !reduceMotion ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.6 }}
          className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div>
            <p className="text-sm font-semibold uppercase text-blue-700 dark:text-blue-300">
              About
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 dark:text-white sm:text-4xl">
              Full-stack work for real business software.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-700 dark:text-slate-300 sm:text-lg">
              {profile.about}
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Working Focus</h3>
            <div className="mt-5 space-y-3">
              {focusItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-slate-700 dark:text-slate-300"
                >
                  <CheckCircle2 className="size-5 text-blue-700 dark:text-blue-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-slate-200 pt-5 dark:border-slate-800">
              <h4 className="font-semibold text-slate-950 dark:text-white">Languages</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {profile.languages.map((language) => (
                  <span
                    key={language}
                    className="rounded-md border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
