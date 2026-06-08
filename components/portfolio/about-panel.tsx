import { Badge } from '@/components/ui/badge';
import type { Profile, Project } from '@/src/types/portfolio';

type AboutPanelProps = {
  profile: Profile;
  projects: Project[];
};

export function AboutPanel({ profile, projects }: AboutPanelProps) {
  const productTypes = Array.from(new Set(projects.map((project) => project.category)));

  return (
    <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="rounded-lg border border-white/10 bg-[#111216] p-5">
        <p className="text-sm font-semibold uppercase tracking-normal text-emerald-300">About</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-normal text-white">
          I build business software that is meant to be inspected, operated, and extended.
        </h2>
        <p className="mt-4 text-sm leading-7 text-zinc-400">{profile.shortBio}</p>
        <p className="mt-4 text-sm leading-7 text-zinc-400">
          My best work is in products where the interface, data model, permissions, and backend
          rules all need to line up: SaaS dashboards, admin panels, legal operations, scheduling,
          education platforms, and developer tooling.
        </p>
      </section>

      <section className="rounded-lg border border-white/10 bg-[#111216] p-5">
        <h3 className="text-lg font-semibold text-white">Development style</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {profile.focus.map((item) => (
            <Badge
              key={item}
              variant="outline"
              className="border-emerald-300/20 bg-emerald-300/10 text-emerald-200"
            >
              {item}
            </Badge>
          ))}
        </div>

        <h3 className="mt-6 text-lg font-semibold text-white">Product types</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {productTypes.map((type) => (
            <Badge
              key={type}
              variant="outline"
              className="border-white/10 bg-white/[0.03] text-zinc-300"
            >
              {type}
            </Badge>
          ))}
        </div>
      </section>
    </div>
  );
}
