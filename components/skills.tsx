'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Code2, Database, Server, Ship, ShieldCheck, PanelsTopLeft } from 'lucide-react';
import { useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { skillGroups } from '@/data/skills';

const icons = [Code2, Server, Database, Ship, ShieldCheck, PanelsTopLeft];

export function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" ref={sectionRef} className="w-full bg-white py-20 dark:bg-slate-950 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={isInView && !reduceMotion ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase text-blue-700 dark:text-blue-300">
              Skills
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 dark:text-white sm:text-4xl">
              Practical stack for shipping full-stack products.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
              Grouped skills without fake percentages. These are the tools and product areas used
              across current portfolio work.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group, index) => {
              const Icon = icons[index] ?? Code2;
              return (
                <motion.div
                  key={group.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  animate={isInView && !reduceMotion ? { opacity: 1, y: 0 } : undefined}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                >
                  <Card className="h-full rounded-lg border-slate-200 bg-slate-50 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <div className="rounded-md border border-blue-100 bg-blue-50 p-2 text-blue-700 dark:border-blue-900/70 dark:bg-blue-950/40 dark:text-blue-300">
                          <Icon className="size-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                            {group.title}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                            {group.description}
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="border-slate-300 bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
