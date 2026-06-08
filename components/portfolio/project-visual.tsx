import { Blocks, Database, Monitor, ShieldCheck } from 'lucide-react';
import type { Project } from '@/src/types/portfolio';

type ProjectVisualProps = {
  project: Project;
  compact?: boolean;
};

const toneClasses = [
  'from-emerald-300/20 via-slate-800 to-amber-300/10',
  'from-amber-300/20 via-stone-800 to-emerald-300/10',
  'from-rose-300/20 via-zinc-800 to-sky-300/10',
  'from-sky-300/20 via-slate-800 to-amber-300/10',
];

const icons = [Monitor, Blocks, Database, ShieldCheck];

function getToneIndex(project: Project) {
  return project.id.split('').reduce((total, char) => total + char.charCodeAt(0), 0) % toneClasses.length;
}

export function ProjectVisual({ project, compact = false }: ProjectVisualProps) {
  const toneIndex = getToneIndex(project);
  const Icon = icons[toneIndex];
  const features = project.features.slice(0, compact ? 2 : 3);

  return (
    <div
      className={`relative h-full overflow-hidden bg-gradient-to-br ${toneClasses[toneIndex]} p-4`}
      aria-hidden="true"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-white/30" />
      <div className="flex h-full flex-col justify-between rounded-md border border-white/10 bg-zinc-950/55 p-4 shadow-2xl shadow-black/30">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-normal text-emerald-200">
              {project.category}
            </div>
            <div className="mt-2 max-w-[14rem] text-lg font-semibold leading-tight text-white">
              {project.title}
            </div>
          </div>
          <div className="rounded-md border border-white/10 bg-white/[0.06] p-2 text-amber-200">
            <Icon className="size-5" />
          </div>
        </div>

        <div className="mt-6 space-y-2">
          {features.map((feature) => (
            <div
              key={`${project.id}-visual-${feature.id}`}
              className="flex items-center justify-between gap-3 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2"
            >
              <span className="truncate text-xs font-medium text-zinc-200">{feature.title}</span>
              <span className="h-1.5 w-10 shrink-0 rounded-full bg-emerald-300/70" />
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.slice(0, compact ? 3 : 5).map((technology) => (
            <span
              key={`${project.id}-visual-tech-${technology}`}
              className="rounded border border-white/10 bg-black/20 px-2 py-1 text-[11px] font-medium text-zinc-300"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
