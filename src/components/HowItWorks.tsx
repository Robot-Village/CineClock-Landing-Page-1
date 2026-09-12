const steps = [
  { n: '01', title: 'Get your quote', body: 'Tell us your rooms, your date, and your distance. Get a flat, guaranteed price in minutes — no in-home estimate required.' },
  { n: '02', title: 'We pack & inventory', body: 'Our crew scans and photographs every item as it is packed, so you have a full digital record before the truck even leaves.' },
  { n: '03', title: 'Track the move live', body: 'Watch your crew and truck move stop to stop. Get an alert the moment they are on their way to you.' },
  { n: '04', title: 'Sign off & settle in', body: 'Walk through the delivery, confirm the inventory, and sign off on the spot. Your move-day report lands in your inbox before the truck pulls away.' },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-cream-50 py-24 sm:py-36">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="reveal max-w-2xl"><p className="eyebrow text-ink-500">The method</p><h2 className="headline mt-5 text-4xl text-ink-950 sm:text-7xl">From quote to keys.<br /><span className="font-serif font-normal italic normal-case">Four moves.</span></h2></div>
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
