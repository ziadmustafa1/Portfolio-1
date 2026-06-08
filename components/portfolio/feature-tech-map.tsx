import { Badge } from '@/components/ui/badge';
import type { ProjectFeature } from '@/src/types/portfolio';

const complexityStyles: Record<ProjectFeature['complexity'], string> = {
  basic: 'border-zinc-500/30 bg-zinc-500/10 text-zinc-300',
  intermediate: 'border-amber-300/30 bg-amber-300/10 text-amber-200',
  advanced: 'border-emerald-300/30 bg-emerald-300/10 text-emerald-200',
};

type FeatureTechMapProps = {
  features: ProjectFeature[];
  compact?: boolean;
};

export function FeatureTechMap({ features, compact = false }: FeatureTechMapProps) {
  if (features.length === 0) {
    return (
      <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5 text-sm text-zinc-400">
        Feature-level technology mapping will appear as project data is added.
      </div>
    );
  }

  return (
    <div className={compact ? 'space-y-3' : 'grid gap-4 lg:grid-cols-2'}>
      {features.map((feature) => (
        <article
          key={feature.id}
          className="rounded-lg border border-white/10 bg-white/[0.03] p-4"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h4 className="text-base font-semibold text-white">{feature.title}</h4>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{feature.description}</p>
            </div>
            <Badge
              variant="outline"
              className={`capitalize ${complexityStyles[feature.complexity]}`}
            >
              {feature.complexity}
            </Badge>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {feature.technologies.map((technology) => (
              <Badge
                key={`${feature.id}-${technology}`}
                variant="outline"
                className="border-white/10 bg-[#0c0d10] text-zinc-300"
              >
                {technology}
              </Badge>
            ))}
          </div>

          <div className="mt-4 border-t border-white/10 pt-3 text-sm leading-6 text-zinc-300">
            <span className="font-semibold text-emerald-200">Business value: </span>
            {feature.businessValue}
          </div>
        </article>
      ))}
    </div>
  );
}
