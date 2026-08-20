const steps = [
  { n: '01', title: 'Build the day', body: 'Pull in your shot list, setups, and breaks — or start from a saved template. Reel lays out the full timeline in seconds.' },
  { n: '02', title: 'Run it live', body: 'As shots go off, tap the actual time. Reel cascades the delta across every remaining setup, break, and wrap estimate instantly.' },
  { n: '03', title: 'Catch the drift', body: "Reel flags when you're trending into overtime and suggests where to combine, cut, or reorder to recover the day." },
  { n: '04', title: 'Wrap with the numbers', body: 'One tap generates the end-of-day report — actuals, variance, overtime exposure — ready for the UPM and accounting.' },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-cream-50 py-24 sm:py-36">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="reveal max-w-2xl"><p className="eyebrow text-ink-500">The method</p><h2 className="headline mt-5 text-4xl text-ink-950 sm:text-7xl">From call to wrap.<br /><span className="font-serif font-normal italic normal-case">Four moves.</span></h2></div>
        <div className="mt-16 border-t border-ink-950/20">
          {steps.map((step, i) => (
            <div key={step.n} className={`reveal reveal-delay-${i + 1} grid gap-5 border-b border-ink-950/20 py-8 sm:grid-cols-[100px_0.8fr_1.2fr] sm:items-start sm:gap-10 sm:py-12`}>
              <span className="font-mono text-sm text-amber-600">STEP {step.n}</span>
              <h3 className="text-2xl font-semibold tracking-tight text-ink-950 sm:text-3xl">{step.title}</h3>
              <p className="max-w-md text-base leading-relaxed text-ink-600 sm:justify-self-end">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
