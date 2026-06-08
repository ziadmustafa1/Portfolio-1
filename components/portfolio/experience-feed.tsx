import { CalendarDays } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { ExperienceItem } from '@/src/types/portfolio';

type ExperienceFeedProps = {
  experience: ExperienceItem[];
};

export function ExperienceFeed({ experience }: ExperienceFeedProps) {
  return (
    <div className="space-y-4">
      {experience.map((item) => (
        <article key={item.id} className="rounded-lg border border-white/10 bg-[#111216] p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-1 text-sm font-medium text-emerald-200">{item.organization}</p>
            </div>
            <span className="inline-flex w-fit items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-300">
              <CalendarDays className="size-4 text-amber-300" />
              {item.date}
            </span>
          </div>

          <p className="mt-4 text-sm leading-7 text-zinc-400">{item.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {item.technologies.map((technology) => (
              <Badge
                key={`${item.id}-${technology}`}
                variant="outline"
                className="border-white/10 bg-white/[0.03] text-zinc-300"
              >
                {technology}
              </Badge>
            ))}
          </div>

          <ul className="mt-5 space-y-3 text-sm leading-6 text-zinc-400">
            {item.achievements.map((achievement) => (
              <li key={achievement} className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-300" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
