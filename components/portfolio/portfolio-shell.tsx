'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { AboutPanel } from '@/components/portfolio/about-panel';
import { ContactPanel } from '@/components/portfolio/contact-panel';
import { ExperienceFeed } from '@/components/portfolio/experience-feed';
import { FeatureTechMap } from '@/components/portfolio/feature-tech-map';
import type { PortfolioTabId, Project } from '@/src/types/portfolio';
import { ProfileHeader } from '@/components/portfolio/profile-header';
import { ProfileStats } from '@/components/portfolio/profile-stats';
import { ProfileTabs, profileTabs } from '@/components/portfolio/profile-tabs';
import { ProjectDetails } from '@/components/portfolio/project-details';
import { ProjectGrid } from '@/components/portfolio/project-grid';
import { ServicesPanel } from '@/components/portfolio/services-panel';
import { StackExplorer } from '@/components/portfolio/stack-explorer';
import { experience } from '@/src/data/experience';
import { profile } from '@/src/data/profile';
import { projects } from '@/src/data/projects';
import { services } from '@/src/data/services';
import { socialLinks } from '@/src/data/social-links';

const hashToTab: Record<string, PortfolioTabId> = {
  home: 'overview',
  overview: 'overview',
  projects: 'projects',
  services: 'services',
  skills: 'stack',
  stack: 'stack',
  experience: 'experience',
  'case-studies': 'case-studies',
  about: 'about',
  contact: 'contact',
};

const tabToHash: Record<PortfolioTabId, string> = {
  overview: 'home',
  projects: 'projects',
  services: 'services',
  stack: 'skills',
  experience: 'experience',
  'case-studies': 'case-studies',
  about: 'about',
  contact: 'contact',
};

function SectionIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-normal text-emerald-300">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-normal text-white sm:text-3xl">
        {title}
      </h2>
      {body ? <p className="mt-3 text-sm leading-7 text-zinc-400">{body}</p> : null}
    </div>
  );
}

function findProjectByHash(hash: string) {
  const normalized = hash.replace(/^project-/, '');
  return projects.find(
    (project) => project.slug === normalized || project.id === normalized || project.slug === hash,
  );
}

export function PortfolioShell() {
  const [activeTab, setActiveTab] = useState<PortfolioTabId>('overview');
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0]?.id ?? '');

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === selectedProjectId) ?? projects[0],
    [selectedProjectId],
  );

  const featuredFeatures = useMemo(
    () => projects.flatMap((project) => project.features.slice(0, 1)).slice(0, 4),
    [],
  );

  const updateHash = useCallback((nextTab: PortfolioTabId, project?: Project) => {
    if (typeof window === 'undefined') return;

    const nextHash = project ? `project-${project.slug}` : tabToHash[nextTab];
    const nextUrl = `${window.location.pathname}${window.location.search}#${nextHash}`;
    window.history.pushState(null, '', nextUrl);
  }, []);

  const scrollToTabs = useCallback(() => {
    if (typeof window === 'undefined') return;

    window.requestAnimationFrame(() => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      document.getElementById('portfolio-tabs')?.scrollIntoView({
        block: 'start',
        behavior: reduceMotion ? 'auto' : 'smooth',
      });
    });
  }, []);

  const handleTabChange = useCallback(
    (tabId: PortfolioTabId) => {
      setActiveTab(tabId);
      updateHash(tabId);
      scrollToTabs();
    },
    [scrollToTabs, updateHash],
  );

  const handleOpenProject = useCallback(
    (project: Project) => {
      setSelectedProjectId(project.id);
      setActiveTab('case-studies');
      updateHash('case-studies', project);
      scrollToTabs();
    },
    [scrollToTabs, updateHash],
  );

  useEffect(() => {
    const syncFromHash = () => {
      const cleanHash = decodeURIComponent(window.location.hash.replace('#', '')).trim();
      if (!cleanHash) return;

      const project = findProjectByHash(cleanHash);
      if (project) {
        setSelectedProjectId(project.id);
        setActiveTab('case-studies');
        return;
      }

      const mappedTab = hashToTab[cleanHash];
      if (mappedTab) {
        setActiveTab(mappedTab);
      }
    };

    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  const activeTabMeta = profileTabs.find((tab) => tab.id === activeTab) ?? profileTabs[0];

  const panel = (() => {
    switch (activeTab) {
      case 'projects':
        return (
          <div className="space-y-5">
            <SectionIntro
              eyebrow="Project gallery"
              title="Visual product cards with the technical story one click away."
              body="Each card shows the outside shape of the work first, then opens into problem, solution, role, feature mapping, architecture notes, and next improvements."
            />
            <ProjectGrid projects={projects} onOpenProject={handleOpenProject} />
          </div>
        );
      case 'services':
        return (
          <div className="space-y-5">
            <SectionIntro
              eyebrow="Services"
              title="Product-studio services tied to real project evidence."
              body="Services are mapped to related projects and technologies so the offer stays grounded in shipped work."
            />
            <ServicesPanel services={services} projects={projects} onOpenProject={handleOpenProject} />
          </div>
        );
      case 'stack':
        return (
          <div className="space-y-5">
            <SectionIntro
              eyebrow="Stack explorer"
              title="Technologies are shown where they were actually used."
              body="The stack is generated from project tech stacks and feature-level mappings, so it works like technical evidence rather than a badge wall."
            />
            <StackExplorer projects={projects} />
          </div>
        );
      case 'experience':
        return (
          <div className="space-y-5">
            <SectionIntro
              eyebrow="Activity feed"
              title="Experience shown as impact, tools, and repeated product patterns."
            />
            <ExperienceFeed experience={experience} />
          </div>
        );
      case 'case-studies':
        return selectedProject ? (
          <ProjectDetails
            project={selectedProject}
            onBack={() => {
              setActiveTab('projects');
              updateHash('projects');
            }}
          />
        ) : null;
      case 'about':
        return (
          <div className="space-y-5">
            <SectionIntro
              eyebrow="About"
              title="Short version: practical full-stack product engineering."
            />
            <AboutPanel profile={profile} projects={projects} />
          </div>
        );
      case 'contact':
        return <ContactPanel profile={profile} socialLinks={socialLinks} />;
      case 'overview':
      default:
        return (
          <div className="space-y-8">
            <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
              <section className="rounded-lg border border-white/10 bg-[#111216] p-5">
                <SectionIntro
                  eyebrow="Profile overview"
                  title="A full-stack product builder with proof attached to every claim."
                  body={profile.shortBio}
                />
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {profile.focus.map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/[0.03] p-3 text-sm text-zinc-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-4">
                <SectionIntro
                  eyebrow="Technical evidence"
                  title="Features are connected to the tools and concepts used to build them."
                />
                <FeatureTechMap features={featuredFeatures} compact />
              </section>
            </div>

            <section className="space-y-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <SectionIntro
                  eyebrow="Featured posts"
                  title="Project cards that open into full case studies."
                />
                <button
                  type="button"
                  onClick={() => handleTabChange('projects')}
                  className="w-fit rounded-md border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-zinc-300 transition hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70"
                >
                  Browse all projects
                </button>
              </div>
              <ProjectGrid projects={projects} onOpenProject={handleOpenProject} limit={3} />
            </section>
          </div>
        );
    }
  })();

  return (
    <div className="min-h-screen bg-[#090a0c] text-zinc-100">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
        <ProfileHeader profile={profile} socialLinks={socialLinks} onNavigate={handleTabChange} />
        <ProfileStats stats={profile.stats} />
        <div id="portfolio-tabs">
          <ProfileTabs activeTab={activeTab} onChange={handleTabChange} />
        </div>

        <section
          key={activeTab}
          id={`panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          aria-live="polite"
          className="pb-12"
          data-legacy-section={activeTabMeta.legacyId}
        >
          {panel}
        </section>
      </div>
    </div>
  );
}
