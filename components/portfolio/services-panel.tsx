import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Project, Service } from '@/src/types/portfolio';

type ServicesPanelProps = {
  services: Service[];
  projects: Project[];
  onOpenProject: (project: Project) => void;
};

export function ServicesPanel({ services, projects, onOpenProject }: ServicesPanelProps) {
  const projectById = new Map(projects.map((project) => [project.id, project]));

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {services.map((service) => {
        const relatedProjects = service.relatedProjects
          .map((projectId) => projectById.get(projectId))
          .filter((project): project is Project => Boolean(project));

        return (
          <article
            key={service.id}
            className="rounded-lg border border-white/10 bg-[#111216] p-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{service.description}</p>
              </div>
              <ArrowRight className="size-5 text-emerald-300" />
            </div>

            <div className="mt-5">
              <h4 className="text-sm font-semibold uppercase tracking-normal text-zinc-300">
                What I deliver
              </h4>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex gap-2 text-sm text-zinc-400">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-300" />
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5">
              <h4 className="text-sm font-semibold uppercase tracking-normal text-zinc-300">
                Related technologies
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {service.relatedTechnologies.map((technology) => (
                  <Badge
                    key={`${service.id}-${technology}`}
                    variant="outline"
                    className="border-white/10 bg-white/[0.03] text-zinc-300"
                  >
                    {technology}
                  </Badge>
                ))}
              </div>
            </div>

            {relatedProjects.length > 0 ? (
              <div className="mt-5">
                <h4 className="text-sm font-semibold uppercase tracking-normal text-zinc-300">
                  Related projects
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {relatedProjects.map((project) => (
                    <Button
                      key={`${service.id}-${project.id}`}
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => onOpenProject(project)}
                      className="border-white/10 bg-white/[0.03] text-zinc-200 hover:bg-white/[0.08] hover:text-white"
                    >
                      {project.title}
                    </Button>
                  ))}
                </div>
              </div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
