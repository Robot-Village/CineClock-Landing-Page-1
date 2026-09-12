import { Clock, TrendingDown, Users } from 'lucide-react';

const problems = [
  { icon: Clock, index: '01', title: "The seller can't hold your item", body: "You found the perfect couch on Marketplace, but you don't have a truck — and the seller needs it gone today." },
  { icon: TrendingDown, index: '02', title: 'Big-box delivery windows are all day', body: "Home Depot and Lowe's delivery windows swallow your whole schedule, and appliances still need someone to actually load and secure them." },
  { icon: Users, index: '03', title: 'Small moves fall through the cracks', body: 'Full-size moving companies are overkill — and overpriced — for a studio apartment or a few pieces of furniture.' },
];

export default function Problem() {
  return (
    <section className="bg-ink-950 py-24 text-cream-50 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="reveal">
            <p className="eyebrow text-amber-400">The problem</p>
            <h2 className="headline mt-6 max-w-md text-4xl text-cream-50 sm:text-6xl">Getting it home is the hard part.</h2>
          </div>
          <div>
            <p className="reveal max-w-2xl text-xl leading-relaxed text-cream-200 sm:text-2xl">Furniture, appliances, and small moves need a truck, a ramp, and someone who knows how to tie things down — not a full moving crew and not a rideshare.</p>
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
