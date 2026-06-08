import { Badge } from '@/components/ui/badge';
import type { Project } from '@/src/types/portfolio';

type StackExplorerProps = {
  projects: Project[];
};

type StackCategory = {
  id: string;
  title: string;
  description: string;
  matches: string[];
};

type TechnologyUsage = {
  technology: string;
  projects: string[];
  features: string[];
};

const categories: StackCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend and UI',
    description: 'Rendering, dashboard interfaces, forms, data fetching, and product interaction.',
    matches: [
      'Next.js',
      'React',
      'HeroUI',
      'Tailwind',
      'TanStack Query',
      'Zustand',
      'React Hook Form',
      'Zod',
      'Radix',
      'SWR',
      'Recharts',
      'Framer Motion',
    ],
  },
  {
    id: 'backend',
    title: 'Backend and APIs',
    description: 'Service ownership, auth, runtime composition, API contracts, and realtime behavior.',
    matches: ['NestJS', 'Fastify', 'JWT', 'Auth.js', 'Passport', 'OAuth', 'Socket.IO', 'WebSockets'],
  },
  {
    id: 'data',
    title: 'Data and Persistence',
    description: 'Relational modeling, schema evolution, jobs, storage, and operational records.',
    matches: ['Prisma', 'PostgreSQL', 'Redis', 'BullMQ', 'Cloudflare R2', 'S3', 'Cloudinary'],
  },
  {
    id: 'platform',
    title: 'Platform and Tooling',
    description: 'Package builds, workspace tooling, deployment, tests, and framework foundations.',
    matches: [
      'TypeScript',
      'Node.js',
      'pnpm',
      'Turbo',
      'Changesets',
      'CLI',
      'Vitest',
      'Bun',
      'tsup',
      'ESLint',
      'Docker',
      'ESM/CJS',
    ],
  },
  {
    id: 'architecture',
    title: 'Architecture and Product Logic',
    description: 'The concepts that show up in real product features, not just package lists.',
    matches: [
      'RBAC',
      'Audit logs',
      'Security',
      'Rate limiting',
      'Validation',
      'Protected Routes',
      'Data modeling',
      'Date modeling',
      'Middleware',
      'Package exports',
    ],
  },
];

function addUsage(
  usage: Map<string, { projects: Set<string>; features: Set<string> }>,
  technology: string,
  projectTitle: string,
  featureTitle?: string,
) {
  const existing = usage.get(technology) ?? { projects: new Set<string>(), features: new Set<string>() };
  existing.projects.add(projectTitle);
  if (featureTitle) existing.features.add(featureTitle);
  usage.set(technology, existing);
}

function collectUsage(projects: Project[]): TechnologyUsage[] {
  const usage = new Map<string, { projects: Set<string>; features: Set<string> }>();

  projects.forEach((project) => {
    project.techStack.forEach((technology) => addUsage(usage, technology, project.title));
    project.features.forEach((feature) => {
      feature.technologies.forEach((technology) =>
        addUsage(usage, technology, project.title, `${project.title}: ${feature.title}`),
      );
    });
  });

  return Array.from(usage.entries())
    .map(([technology, value]) => ({
      technology,
      projects: Array.from(value.projects).sort(),
      features: Array.from(value.features).sort(),
    }))
    .sort((a, b) => b.projects.length - a.projects.length || a.technology.localeCompare(b.technology));
}

function belongsToCategory(technology: string, category: StackCategory) {
  const normalizedTechnology = technology.toLowerCase();

  return category.matches.some((match) => {
    const normalizedMatch = match.toLowerCase();
    return (
      normalizedTechnology.includes(normalizedMatch) ||
      normalizedMatch.includes(normalizedTechnology)
    );
  });
}

export function StackExplorer({ projects }: StackExplorerProps) {
  const usage = collectUsage(projects);

  return (
    <div className="space-y-4">
      {categories.map((category) => {
        const technologies = usage.filter((item) => belongsToCategory(item.technology, category));

        if (technologies.length === 0) return null;

        return (
          <section
            key={category.id}
            className="rounded-lg border border-white/10 bg-[#111216] p-5"
          >
            <div className="max-w-3xl">
              <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{category.description}</p>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {technologies.map((item) => (
                <article
                  key={`${category.id}-${item.technology}`}
                  className="rounded-lg border border-white/10 bg-white/[0.03] p-4"
                >
                  <h4 className="font-semibold text-white">{item.technology}</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.projects.map((project) => (
                      <Badge
                        key={`${item.technology}-${project}`}
                        variant="outline"
                        className="border-emerald-300/20 bg-emerald-300/10 text-emerald-200"
                      >
                        {project}
                      </Badge>
                    ))}
                  </div>
                  {item.features.length > 0 ? (
                    <ul className="mt-4 space-y-2 text-xs leading-5 text-zinc-500">
                      {item.features.slice(0, 3).map((feature) => (
                        <li key={`${item.technology}-${feature}`}>{feature}</li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
