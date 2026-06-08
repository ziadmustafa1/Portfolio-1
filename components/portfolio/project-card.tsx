import { BookOpen, ExternalLink, GitBranch, Layers } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ProjectVisual } from '@/components/portfolio/project-visual';
import type { Project } from '@/src/types/portfolio';

const statusLabels: Record<Project['status'], string> = {
  live: 'Live',
  'case-study': 'Case study',
  'in-progress': 'In progress',
  archived: 'Archived',
};

type ProjectCardProps = {
  project: Project;
  onOpen: (project: Project) => void;
};

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const topTechnologies = project.techStack.slice(0, 5);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-[#111216]">
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
        <ProjectVisual project={project} compact />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a0c]/85 via-transparent to-transparent" />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <Badge className="border-white/15 bg-zinc-950/80 text-zinc-100 backdrop-blur">
            {project.category}
          </Badge>
          <Badge className="border-emerald-300/30 bg-emerald-300/10 text-emerald-200 backdrop-blur">
            {statusLabels[project.status]}
          </Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold tracking-normal text-white">{project.title}</h3>
            <p className="mt-1 text-sm capitalize text-amber-200">{project.type} project</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-md border border-white/10 px-2 py-1 text-xs font-medium text-zinc-400">
            <Layers className="size-3" />
            {project.features.length} features
          </span>
        </div>

        <p className="mt-4 text-sm leading-6 text-zinc-400">{project.shortDescription}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {topTechnologies.map((technology) => (
            <Badge
              key={`${project.id}-${technology}`}
              variant="outline"
              className="border-white/10 bg-white/[0.03] text-zinc-300"
            >
              {technology}
            </Badge>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          <Button
            type="button"
            onClick={() => onOpen(project)}
            aria-label={`View ${project.title} case study`}
            className="bg-emerald-300 text-zinc-950 hover:bg-emerald-200"
            size="sm"
          >
            <BookOpen className="size-4" />
            View Case Study
          </Button>

          {project.liveUrl ? (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-white/10 bg-white/[0.03] text-zinc-200 hover:bg-white/[0.08] hover:text-white"
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="size-4" />
                Live Demo
              </a>
            </Button>
          ) : null}

          {project.githubUrl ? (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-white/10 bg-white/[0.03] text-zinc-200 hover:bg-white/[0.08] hover:text-white"
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <GitBranch className="size-4" />
                GitHub
              </a>
            </Button>
          ) : null}

          {project.docsUrl ? (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-white/10 bg-white/[0.03] text-zinc-200 hover:bg-white/[0.08] hover:text-white"
            >
              <a href={project.docsUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="size-4" />
                Docs
              </a>
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  );
}
