import { ProjectCard } from '@/components/portfolio/project-card';
import type { Project } from '@/src/types/portfolio';

type ProjectGridProps = {
  projects: Project[];
  onOpenProject: (project: Project) => void;
  limit?: number;
};

export function ProjectGrid({ projects, onOpenProject, limit }: ProjectGridProps) {
  const visibleProjects = typeof limit === 'number' ? projects.slice(0, limit) : projects;

  if (visibleProjects.length === 0) {
    return (
      <div className="rounded-lg border border-white/10 bg-[#111216] p-6 text-zinc-400">
        Projects will appear here once project data is available.
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {visibleProjects.map((project) => (
        <ProjectCard key={project.id} project={project} onOpen={onOpenProject} />
      ))}
    </div>
  );
}
