import { Clock, TrendingDown, Users } from 'lucide-react';

const problems = [
  { icon: Clock, index: '01', title: 'The truck runs late and nobody hears about it', body: 'Every delay gets guessed at. By the time you call dispatch for an update, your whole afternoon is already gone.' },
  { icon: TrendingDown, index: '02', title: 'Boxes go missing between pickup and drop-off', body: 'No scan, no record — items get lost in the shuffle and nobody notices until you\'re unpacking weeks later.' },
  { icon: Users, index: '03', title: 'Every crew member gives you a different ETA', body: 'Dispatch says one thing, the driver says another, and you\'re stuck rearranging your day around a guess.' },
];

export default function Problem() {
  return (
    <section className="bg-ink-950 py-24 text-cream-50 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="reveal">
            <p className="eyebrow text-amber-400">The problem</p>
            <h2 className="headline mt-6 max-w-md text-4xl text-cream-50 sm:text-6xl">A moving day needs a live system.</h2>
          </div>
          <div>
            <p className="reveal max-w-2xl text-xl leading-relaxed text-cream-200 sm:text-2xl">Moving is a logistics problem with a hundred moving parts — literally. The tools built for it were built for spreadsheets, not for a truck stuck in traffic.</p>
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
