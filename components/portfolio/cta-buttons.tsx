import { Download, FolderOpen, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { PortfolioTabId, Profile } from '@/src/types/portfolio';

type CTAButtonsProps = {
  profile: Profile;
  onNavigate: (tabId: PortfolioTabId) => void;
};

export function CTAButtons({ profile, onNavigate }: CTAButtonsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <Button
        type="button"
        onClick={() => onNavigate('contact')}
        className="h-11 bg-emerald-400 px-5 text-zinc-950 hover:bg-emerald-300"
      >
        <Mail className="size-4" />
        Contact Me
      </Button>

      {profile.cvPath ? (
        <Button
          asChild
          variant="outline"
          className="h-11 border-white/15 bg-white/[0.03] px-5 text-zinc-100 hover:bg-white/[0.08] hover:text-white"
        >
          <a href={profile.cvPath} download>
            <Download className="size-4" />
            Download CV
          </a>
        </Button>
      ) : null}

      <Button
        type="button"
        variant="outline"
        onClick={() => onNavigate('projects')}
        className="h-11 border-white/15 bg-white/[0.03] px-5 text-zinc-100 hover:bg-white/[0.08] hover:text-white"
      >
        <FolderOpen className="size-4" />
        View Projects
      </Button>

      <Button
        type="button"
        variant="ghost"
        onClick={() => onNavigate('stack')}
        className="h-11 px-1 text-zinc-400 hover:text-white"
      >
        Stack evidence
      </Button>
    </div>
  );
}
