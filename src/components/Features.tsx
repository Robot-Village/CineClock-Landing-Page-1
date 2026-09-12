import { BarChart3, Bell, FileText, Smartphone, Workflow, Zap } from 'lucide-react';

const features = [
  { icon: Workflow, number: '01', title: 'Live route & ETA tracking', body: 'Watch your crew and truck move in real time. Know exactly when they will arrive — down to the minute, not the hour window.', tag: 'Core' },
  { icon: Bell, number: '02', title: 'Arrival window alerts', body: 'Get notified the moment the crew leaves the last stop, not after they are already outside your door.', tag: 'Core' },
  { icon: FileText, number: '03', title: 'Digital inventory & photos', body: 'Every box and item scanned and photographed at pickup. Nothing goes unaccounted for between your old place and the new one.', tag: 'Core' },
  { icon: BarChart3, number: '04', title: 'Move-day summary report', body: 'Time in, time out, inventory count, and a signed condition report — sent the moment the job wraps.', tag: 'Pro' },
  { icon: Smartphone, number: '05', title: 'Built for the road', body: 'Offline-first crew app. Works in elevators, parking garages, and dead zones. Syncs the moment there is signal.', tag: 'Core' },
  { icon: Zap, number: '06', title: 'Saved move templates', body: 'Save your floor plan and inventory list. Book your next move — or a return trip — in minutes.', tag: 'Pro' },
];

export default function Features() {
  return (
    <section id="features" className="bg-cream-100 py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="reveal"><p className="eyebrow text-ink-500">The toolkit</p><h2 className="headline mt-5 text-4xl text-ink-950 sm:text-6xl">The system behind the move.</h2></div>
          <p className="reveal max-w-xl text-lg leading-relaxed text-ink-600 sm:justify-self-end sm:text-xl">Less guessing. Better ETAs. More control when traffic decides to ruin your afternoon.</p>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden border border-ink-950/15 bg-ink-950/15 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <article key={feature.number} className={`reveal reveal-delay-${(i % 3) + 1} group bg-cream-100 p-7 transition-colors duration-300 hover:bg-cream-50 sm:p-8`}>
              <div className="flex items-start justify-between"><span className="font-mono text-xs text-ink-400">{feature.number}</span><feature.icon className="h-5 w-5 text-amber-600 transition-transform duration-300 group-hover:rotate-12" strokeWidth={1.5} /></div>
              <h3 className="mt-14 text-xl font-semibold leading-tight text-ink-950">{feature.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-600">{feature.body}</p>
              <span className="mt-8 inline-block border-t border-ink-950/20 pt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-400">{feature.tag}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
