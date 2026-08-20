import { Clock, TrendingDown, Users } from 'lucide-react';

const problems = [
  { icon: Clock, index: '01', title: 'The day moves faster than the board', body: 'Every delay ripples manually. One reset eats 20 minutes and nobody updates the board until lunch is already late.' },
  { icon: TrendingDown, index: '02', title: 'Overtime appears after it is too late', body: 'By the time the UPM sees the numbers, the crew is already in golden time. The damage is done before the report lands.' },
  { icon: Users, index: '03', title: 'Everyone has a different version of today', body: 'The call sheet was right at 6am. By 9am it is fiction. Every department is working from a different version of the day.' },
];

export default function Problem() {
  return (
    <section className="bg-ink-950 py-24 text-cream-50 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="reveal">
            <p className="eyebrow text-amber-400">The problem</p>
            <h2 className="headline mt-6 max-w-md text-4xl text-cream-50 sm:text-6xl">A live day needs a live system.</h2>
          </div>
          <div>
            <p className="reveal max-w-2xl text-xl leading-relaxed text-cream-200 sm:text-2xl">Running a film set is a scheduling problem with a hundred moving parts. The tools built for it were built for offices, not for the chaos of a 5am call.</p>
            <div className="mt-14 grid gap-0 border-t border-white/20 md:grid-cols-3">
              {problems.map((problem, i) => (
                <article key={problem.index} className={`reveal reveal-delay-${i + 1} border-b border-white/20 py-7 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0`}>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-cream-500">{problem.index}</span>
                    <problem.icon className="h-5 w-5 text-amber-400" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-10 text-lg font-semibold leading-tight text-cream-50">{problem.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-cream-300">{problem.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
