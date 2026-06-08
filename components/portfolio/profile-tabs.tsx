import type { PortfolioTabId } from '@/src/types/portfolio';

export const profileTabs: Array<{ id: PortfolioTabId; label: string; legacyId: string }> = [
  { id: 'overview', label: 'Overview', legacyId: 'home' },
  { id: 'projects', label: 'Projects', legacyId: 'projects' },
  { id: 'services', label: 'Services', legacyId: 'services' },
  { id: 'stack', label: 'Stack', legacyId: 'skills' },
  { id: 'experience', label: 'Experience', legacyId: 'experience' },
  { id: 'case-studies', label: 'Case Studies', legacyId: 'case-studies' },
  { id: 'about', label: 'About', legacyId: 'about' },
  { id: 'contact', label: 'Contact', legacyId: 'contact' },
];

type ProfileTabsProps = {
  activeTab: PortfolioTabId;
  onChange: (tabId: PortfolioTabId) => void;
};

export function ProfileTabs({ activeTab, onChange }: ProfileTabsProps) {
  return (
    <nav
      aria-label="Portfolio profile tabs"
      className="sticky top-0 z-30 -mx-4 border-y border-white/10 bg-[#090a0c]/95 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-lg sm:border sm:bg-[#111216]/95"
    >
      <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-orientation="horizontal">
        {profileTabs.map((tab) => {
          const isActive = tab.id === activeTab;

          return (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              onClick={() => onChange(tab.id)}
              className={`h-10 shrink-0 rounded-md px-4 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 ${
                isActive
                  ? 'bg-emerald-300 text-zinc-950'
                  : 'bg-white/[0.03] text-zinc-400 hover:bg-white/[0.08] hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
