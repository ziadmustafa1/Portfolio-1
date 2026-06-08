'use client';

import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ExternalLink, Send } from 'lucide-react';
import * as yup from 'yup';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type { Profile, SocialLink } from '@/src/types/portfolio';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Use a valid email address').required('Email is required'),
  message: yup
    .string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters'),
});

type FormData = yup.InferType<typeof schema>;

type ContactPanelProps = {
  profile: Profile;
  socialLinks: SocialLink[];
};

export function ContactPanel({ profile, socialLinks }: ContactPanelProps) {
  const directLinks = useMemo(
    () =>
      socialLinks.filter((link) =>
        ['email', 'whatsapp', 'linkedin', 'github'].includes(link.id),
      ),
    [socialLinks],
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
    <div className="grid gap-4 lg:grid-cols-[1fr_0.85fr]">
      <section className="rounded-lg border border-white/10 bg-[#111216] p-5">
        <p className="text-sm font-semibold uppercase tracking-normal text-emerald-300">
          Direct message
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-normal text-white">
          Send a project, role, or collaboration note.
        </h2>
        <p className="mt-3 text-sm leading-7 text-zinc-400">
          The form opens a prepared email draft so the message stays transparent and dependable.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <div className="space-y-2">
            <label htmlFor="contact-name" className="text-sm font-medium text-zinc-300">
              Name
            </label>
            <Input
              id="contact-name"
              {...register('name')}
              autoComplete="name"
              className="h-11 border-white/10 bg-[#0c0d10] text-zinc-100 placeholder:text-zinc-600"
              placeholder="Your name"
            />
            {errors.name ? <p className="text-sm text-red-300">{errors.name.message}</p> : null}
          </div>

          <div className="space-y-2">
            <label htmlFor="contact-email" className="text-sm font-medium text-zinc-300">
              Email
            </label>
            <Input
              id="contact-email"
              {...register('email')}
              type="email"
              autoComplete="email"
              className="h-11 border-white/10 bg-[#0c0d10] text-zinc-100 placeholder:text-zinc-600"
              placeholder="you@example.com"
            />
            {errors.email ? <p className="text-sm text-red-300">{errors.email.message}</p> : null}
          </div>

          <div className="space-y-2">
            <label htmlFor="contact-message" className="text-sm font-medium text-zinc-300">
              Message
            </label>
            <Textarea
              id="contact-message"
              {...register('message')}
              className="min-h-36 border-white/10 bg-[#0c0d10] text-zinc-100 placeholder:text-zinc-600"
              placeholder="Tell me what you want to build or discuss."
            />
            {errors.message ? (
              <p className="text-sm text-red-300">{errors.message.message}</p>
            ) : null}
          </div>

          <Button type="submit" className="h-11 w-full bg-emerald-300 text-zinc-950 hover:bg-emerald-200">
            <Send className="size-4" />
            Open Email Draft
          </Button>
        </form>
      </section>

      <aside className="rounded-lg border border-white/10 bg-[#111216] p-5">
        <h3 className="text-lg font-semibold text-white">Contact channels</h3>
        <div className="mt-4 space-y-3">
          {directLinks.map((link) => {
            const isExternal = link.href.startsWith('http');

            return (
              <a
                key={link.id}
                href={link.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/[0.03] p-4 text-sm text-zinc-300 transition hover:border-emerald-300/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70"
              >
                <span>
                  <span className="block font-semibold text-white">{link.label}</span>
                  <span className="mt-1 block break-all text-zinc-500">{link.href.replace('mailto:', '')}</span>
                </span>
                <ExternalLink className="size-4 shrink-0 text-zinc-500" />
              </a>
            );
          })}
        </div>

        <div className="mt-5 rounded-lg border border-amber-300/20 bg-amber-300/10 p-4 text-sm leading-6 text-amber-100">
          Best fit: SaaS, admin panels, dashboards, booking tools, API-driven apps, and MVPs that
          need clear product thinking plus implementation.
        </div>
      </aside>
    </div>
  );
}
