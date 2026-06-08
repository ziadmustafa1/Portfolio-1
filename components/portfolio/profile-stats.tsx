import type { ProfileStat } from '@/src/types/portfolio';

type ProfileStatsProps = {
  stats: ProfileStat[];
};

export function ProfileStats({ stats }: ProfileStatsProps) {
  return (
    <section
      aria-label="Profile stats"
      className="grid grid-cols-2 gap-2 lg:grid-cols-5 [&>*:last-child:nth-child(odd)]:col-span-2 lg:[&>*:last-child:nth-child(odd)]:col-span-1"
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-lg border border-white/10 bg-[#111216] p-3 text-left sm:p-4"
        >
          <div className="text-xl font-semibold tracking-normal text-white sm:text-2xl">
            {stat.value}
          </div>
          <div className="mt-1 text-sm font-medium text-zinc-300">{stat.label}</div>
          {stat.detail ? (
            <div className="mt-2 text-xs leading-5 text-zinc-500">{stat.detail}</div>
          ) : null}
        </div>
      ))}
    </section>
  );
}
