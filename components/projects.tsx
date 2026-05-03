'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ExternalLink, GitBranch, LockKeyhole } from 'lucide-react';
import { useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { moreProjects, projects } from '@/data/projects';

export function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="w-full bg-slate-50 py-20 dark:bg-slate-900/50 md:py-28"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={isInView && !reduceMotion ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase text-blue-700 dark:text-blue-300">
              Projects
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 dark:text-white sm:text-4xl">
              Production-focused portfolio work.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
              Featured full-stack, SaaS, marketplace, education, AI-style, and open-source work.
              Private repositories are labeled clearly instead of linking to unavailable code.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.name}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={isInView && !reduceMotion ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <Card className="h-full rounded-lg border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                            {project.name}
                          </h3>
                          {project.featured && (
                            <Badge className="bg-blue-700 text-white dark:bg-blue-500">
                              Featured
                            </Badge>
                          )}
                        </div>
                        <p className="mt-2 text-sm font-medium text-blue-700 dark:text-blue-300">
                          {project.type}
                        </p>
                      </div>

                      {project.repositoryStatus === 'Private repository' ? (
                        <span className="inline-flex shrink-0 items-center gap-2 rounded-md border border-slate-200 px-3 py-1 text-sm font-medium text-slate-600 dark:border-slate-700 dark:text-slate-400">
                          <LockKeyhole className="size-4" />
                          Private repository
                        </span>
                      ) : null}
                    </div>

                    <p className="mt-5 text-sm leading-7 text-slate-700 dark:text-slate-300">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-slate-300 bg-slate-50 text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <ul className="mt-6 space-y-3 text-left text-sm leading-6 text-slate-700 dark:text-slate-300">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex gap-3">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-700 dark:bg-blue-300" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-3 pt-2">
                      {project.links?.map((link) => (
                        <Button key={link.href} asChild variant="outline" size="sm">
                          <a href={link.href} target="_blank" rel="noopener noreferrer">
                            {link.label === 'GitHub' ? (
                              <GitBranch className="size-4" />
                            ) : (
                              <ExternalLink className="size-4" />
                            )}
                            {link.label}
                          </a>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
            <h3 className="text-lg font-semibold text-slate-950 dark:text-white">More Projects</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {moreProjects.map((project) => (
                <Badge
                  key={project}
                  variant="outline"
                  className="border-slate-300 bg-slate-50 text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                >
                  {project}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
