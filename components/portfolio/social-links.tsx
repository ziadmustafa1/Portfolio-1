import type { LucideIcon } from 'lucide-react';
import { ExternalLink, GitBranch, Globe, Link as LinkIcon, Mail, MessageCircle } from 'lucide-react';
import type { SocialLink } from '@/src/types/portfolio';

const iconMap: Record<SocialLink['id'], LucideIcon> = {
  github: GitBranch,
  linkedin: LinkIcon,
  email: Mail,
  whatsapp: MessageCircle,
  portfolio: Globe,
};

type SocialLinksProps = {
  links: SocialLink[];
};

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex flex-wrap gap-2" aria-label="Social links">
      {links.map((link) => {
        const Icon = iconMap[link.id];
        const isExternal = link.href.startsWith('http');

        return (
          <a
            key={link.id}
            href={link.href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className="inline-flex h-10 items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 text-sm font-medium text-zinc-300 transition hover:border-emerald-300/50 hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70"
          >
            <Icon className="size-4" />
            <span>{link.label}</span>
            {isExternal ? <ExternalLink className="size-3 text-zinc-500" /> : null}
          </a>
        );
      })}
    </div>
  );
}
