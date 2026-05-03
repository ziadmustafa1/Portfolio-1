'use client';

import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ExternalLink, GitBranch, Link, Mail, MessageSquare, Send } from 'lucide-react';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { profile } from '@/data/profile';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Use a valid email address').required('Email is required'),
  message: yup
    .string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters'),
});

type FormData = yup.InferType<typeof schema>;

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const reduceMotion = useReducedMotion();

  const contactItems = useMemo(
    () => [
      {
        title: 'Email',
        value: profile.email,
        link: `mailto:${profile.email}`,
        icon: Mail,
      },
      {
        title: 'WhatsApp',
        value: profile.phone,
        link: profile.whatsapp,
        icon: MessageSquare,
      },
      {
        title: 'LinkedIn',
        value: profile.linkedin,
        link: profile.linkedin,
        icon: Link,
      },
      {
        title: 'GitHub',
        value: profile.github,
        link: profile.github,
        icon: GitBranch,
      },
    ],
    [],
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const subject = encodeURIComponent(`Portfolio contact from ${data.name}`);
    const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="w-full bg-white py-20 dark:bg-slate-950 md:py-28"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={isInView && !reduceMotion ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-6xl"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-blue-700 dark:text-blue-300">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 dark:text-white sm:text-4xl">
              Discuss a role, project, or freelance build.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
              Reach out by email, WhatsApp, LinkedIn, or use the form to open a prepared email
              draft. This site does not fake message delivery.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <Card className="rounded-lg border-slate-200 bg-slate-50 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="space-y-2">
                    <Input
                      {...register('name')}
                      placeholder="Your name"
                      autoComplete="name"
                      className="bg-white dark:bg-slate-950"
                    />
                    {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Input
                      {...register('email')}
                      placeholder="Your email"
                      type="email"
                      autoComplete="email"
                      className="bg-white dark:bg-slate-950"
                    />
                    {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Textarea
                      {...register('message')}
                      placeholder="Project, role, or message details"
                      className="min-h-36 bg-white dark:bg-slate-950"
                    />
                    {errors.message && (
                      <p className="text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  <Button type="submit" className="w-full bg-blue-700 text-white hover:bg-blue-800">
                    <Send className="size-4" />
                    Open Email Draft
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.title}
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                    animate={isInView && !reduceMotion ? { opacity: 1, y: 0 } : undefined}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-4 transition hover:border-blue-300 hover:shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:hover:border-blue-700"
                  >
                    <span className="rounded-md border border-blue-100 bg-blue-50 p-3 text-blue-700 dark:border-blue-900/70 dark:bg-blue-950/40 dark:text-blue-300">
                      <Icon className="size-5" />
                    </span>
                    <span className="min-w-0 flex-1 text-left">
                      <span className="block text-sm font-medium text-slate-500 dark:text-slate-400">
                        {item.title}
                      </span>
                      <span className="block break-words font-medium text-slate-950 dark:text-white">
                        {item.value}
                      </span>
                    </span>
                    <ExternalLink className="size-4 shrink-0 text-slate-400" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
