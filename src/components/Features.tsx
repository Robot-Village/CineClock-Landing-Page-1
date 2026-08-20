import { BarChart3, Bell, FileText, Smartphone, Workflow, Zap } from 'lucide-react';

const features = [
  { icon: Workflow, number: '01', title: 'Dynamic cascade scheduling', body: 'Log a delay once. Reel recalculates every downstream shot, break, and wrap time instantly — and tells you what to cut to recover.', tag: 'Core' },
  { icon: Bell, number: '02', title: 'Live overtime alerts', body: 'Get warned before you hit overtime, not after. Configurable thresholds for crew, equipment, and location hold costs.', tag: 'Core' },
  { icon: FileText, number: '03', title: 'Living call sheets', body: 'Call sheets that update in real time. The whole department sees the same version of the day, on any device.', tag: 'Core' },
  { icon: BarChart3, number: '04', title: 'End-of-day reports', body: 'Actuals versus planned, variance, and overtime exposure — formatted and ready to send.', tag: 'Pro' },
  { icon: Smartphone, number: '05', title: 'Built for the set', body: "Offline-first. Works in a basement, a desert, a soundstage with no signal. Syncs when you're back online.", tag: 'Core' },
  { icon: Zap, number: '06', title: 'Setup & shot templates', body: 'Save standard day structures and shot lists. Spin up a new shoot day in minutes, not an hour of copy-paste.', tag: 'Pro' },
];

export default function Features() {
  return (
    <section id="features" className="bg-cream-100 py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="reveal"><p className="eyebrow text-ink-500">The toolkit</p><h2 className="headline mt-5 text-4xl text-ink-950 sm:text-6xl">The system behind the story.</h2></div>
          <p className="reveal max-w-xl text-lg leading-relaxed text-ink-600 sm:justify-self-end sm:text-xl">Less admin. Better calls. More control when the day decides to surprise you.</p>
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
