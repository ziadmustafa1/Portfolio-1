'use client';

import { motion, useInView } from 'framer-motion';
import { useSafeReducedMotion } from '@/lib/use-safe-reduced-motion';
import { BriefcaseBusiness, MapPin } from 'lucide-react';
import { useRef } from 'react';
import { experience } from '@/data/profile';

export function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const reduceMotion = useSafeReducedMotion();

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="w-full bg-slate-50 py-20 dark:bg-slate-900/50 md:py-28"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={isInView && !reduceMotion ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl"
        >
          <p className="text-sm font-semibold uppercase text-blue-700 dark:text-blue-300">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 dark:text-white sm:text-4xl">
            Freelance full-stack engineering since 2022.
          </h2>

          <div className="mt-8 space-y-6">
            {experience.map((item) => (
              <article
                key={item.role}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                      {item.role}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-400">
                      <span className="inline-flex items-center gap-2">
                        <BriefcaseBusiness className="size-4" />
                        {item.period}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="size-4" />
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-left text-slate-700 dark:text-slate-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-700 dark:bg-blue-300" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
