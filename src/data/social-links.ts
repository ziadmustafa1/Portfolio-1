import { profile } from '@/src/data/profile';
import type { SocialLink } from '@/src/types/portfolio';

export const socialLinks: SocialLink[] = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/ziadmustafa1' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/ziad-mostafa-2a4315179' },
  { id: 'email', label: 'Email', href: `mailto:${profile.email}` },
  { id: 'whatsapp', label: 'WhatsApp', href: profile.whatsapp ?? 'https://wa.me/201154790469' },
  { id: 'portfolio', label: 'Portfolio', href: 'https://ziad-frontend.vercel.app' },
];
