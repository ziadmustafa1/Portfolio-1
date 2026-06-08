import Image from 'next/image';
import { ArrowLeft, ExternalLink, GitBranch } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FeatureTechMap } from '@/components/portfolio/feature-tech-map';
import type { Project } from '@/src/types/portfolio';

type ProjectDetailsProps = {
  project: Project;
  onBack?: () => void;
};

function DetailList({ title, items }: { title: string; items?: string[] }) {
  if (!items || items.length === 0) return null;

  return (
    <section className="space-y-3">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <ul className="space-y-2 text-sm leading-6 text-zinc-400">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ProjectDetails({ project, onBack }: ProjectDetailsProps) {
  return (
    <article className="rounded-lg border border-white/10 bg-[#111216] p-4 sm:p-5 lg:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge className="border-emerald-300/25 bg-emerald-300/10 text-emerald-200">
              {project.status}
            </Badge>
            <Badge className="border-amber-300/25 bg-amber-300/10 text-amber-200">
              {project.type}
            </Badge>
            <Badge variant="outline" className="border-white/10 bg-white/[0.03] text-zinc-300">
              {project.category}
            </Badge>
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-normal text-white lg:text-4xl">
            {project.title}
          </h2>
        </div>

        {onBack ? (
          <Button
            type="button"
            variant="outline"
            onClick={onBack}
            className="border-white/10 bg-white/[0.03] text-zinc-200 hover:bg-white/[0.08] hover:text-white"
          >
            <ArrowLeft className="size-4" />
            Back to Projects
          </Button>
        ) : null}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-white/10 bg-zinc-950">
          <Image
            src={project.thumbnail}
            alt={`${project.title} case study hero`}
            fill
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="object-cover"
          />
        </div>

        <div className="space-y-5">
          <section>
            <h3 className="text-lg font-semibold text-white">Overview</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-400">{project.fullDescription}</p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white">My Role</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-400">{project.role}</p>
          </section>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((technology) => (
              <Badge
                key={`${project.id}-detail-${technology}`}
                variant="outline"
                className="border-white/10 bg-[#0c0d10] text-zinc-300"
              >
                {technology}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.liveUrl ? (
              <Button asChild className="bg-emerald-300 text-zinc-950 hover:bg-emerald-200">
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
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <section className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
          <h3 className="text-lg font-semibold text-white">Problem</h3>
          <p className="mt-3 text-sm leading-7 text-zinc-400">{project.problem}</p>
        </section>

        <section className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
          <h3 className="text-lg font-semibold text-white">Solution</h3>
          <p className="mt-3 text-sm leading-7 text-zinc-400">{project.solution}</p>
        </section>
      </div>

      <section className="mt-8 space-y-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-normal text-emerald-300">
            Feature-level technical mapping
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-normal text-white">
            What was built, and what it proves technically.
          </h3>
        </div>
        <FeatureTechMap features={project.features} />
      </section>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <DetailList title="Technical Decisions" items={project.technicalDecisions} />
        <DetailList title="Architecture Notes" items={project.architectureNotes} />
        <DetailList title="Challenges" items={project.challenges} />
        <DetailList title="Improvements" items={project.improvements} />
        <DetailList title="Business Impact" items={project.businessImpact} />
      </div>

      <section className="mt-8">
        <h3 className="text-lg font-semibold text-white">Screenshots</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {project.images.map((image, index) => (
            <div
              key={`${project.id}-image-${image}`}
              className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-zinc-950"
            >
              <Image
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
