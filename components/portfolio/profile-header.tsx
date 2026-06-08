import Image from 'next/image';
import { BadgeCheck, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { CTAButtons } from '@/components/portfolio/cta-buttons';
import { SocialLinks } from '@/components/portfolio/social-links';
import type { PortfolioTabId, Profile, SocialLink } from '@/src/types/portfolio';

type ProfileHeaderProps = {
  profile: Profile;
  socialLinks: SocialLink[];
  onNavigate: (tabId: PortfolioTabId) => void;
};

export function ProfileHeader({ profile, socialLinks, onNavigate }: ProfileHeaderProps) {
  return (
    <header
      id="home"
      className="rounded-lg border border-white/10 bg-[#111216] p-4 shadow-2xl shadow-black/30 sm:p-5 lg:p-6"
    >
      <div className="grid gap-5 md:grid-cols-[168px_1fr] lg:grid-cols-[184px_1fr]">
        <div className="flex items-start gap-4 md:block">
          <div className="relative size-24 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-zinc-900 sm:size-32 md:size-40">
            <Image
              src={profile.avatar}
              alt={`${profile.name} profile avatar`}
              fill
              priority
              sizes="(max-width: 768px) 96px, 160px"
              className="object-cover"
            />
          </div>

          <div className="min-w-0 md:hidden">
            <h1 className="text-2xl font-semibold tracking-normal text-white">{profile.name}</h1>
            <p className="mt-1 text-sm font-medium text-emerald-300">{profile.title}</p>
          </div>
        </div>

        <div className="min-w-0 space-y-5">
          <div className="hidden md:block">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-4xl font-semibold tracking-normal text-white lg:text-5xl">
                {profile.name}
              </h1>
              <Badge className="border-emerald-300/25 bg-emerald-300/10 text-emerald-200">
                <BadgeCheck className="size-3" />
                Profile verified by work
              </Badge>
            </div>
            <p className="mt-2 text-lg font-medium text-emerald-300">{profile.title}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-300">
              <MapPin className="size-4 text-amber-300" />
              {profile.location}
            </span>
            <span className="inline-flex items-center gap-2 rounded-md border border-emerald-300/25 bg-emerald-300/10 px-3 py-1.5 text-sm text-emerald-200">
              <span className="size-2 rounded-full bg-emerald-300" />
              {profile.availability}
            </span>
          </div>

          <p className="max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">{profile.bio}</p>

          <CTAButtons profile={profile} onNavigate={onNavigate} />
          <SocialLinks links={socialLinks} />
        </div>
      </div>
    </header>
  );
}
