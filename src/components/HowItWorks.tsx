const steps = [
  { n: '01', title: 'Fill out the form', body: 'Tell us the item details and pickup/drop-off addresses with our quick online form — takes less than two minutes.' },
  { n: '02', title: 'Get your instant quote', body: 'Receive an upfront quote right away and pick the time slot that works for you.' },
  { n: '03', title: 'We handle the rest', body: 'Smooth local delivery and safe transport, with professional loading and secure tie-downs the whole way.' },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-cream-50 py-24 sm:py-36">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="reveal max-w-2xl"><p className="eyebrow text-ink-500">How to book</p><h2 className="headline mt-5 text-4xl text-ink-950 sm:text-7xl">Quote to delivery.<br /><span className="font-serif font-normal italic normal-case">Three steps.</span></h2></div>
        <div className="mt-16 border-t border-ink-950/20">
          {steps.map((step, i) => (
            <div key={step.n} className={`reveal reveal-delay-${i + 1} grid gap-5 border-b border-ink-950/20 py-8 sm:grid-cols-[100px_0.8fr_1.2fr] sm:items-start sm:gap-10 sm:py-12`}>
              <span className="font-mono text-sm text-amber-600">STEP {step.n}</span>
              <h3 className="text-2xl font-semibold tracking-tight text-ink-950 sm:text-3xl">{step.title}</h3>
              <p className="max-w-md text-base leading-relaxed text-ink-600 sm:justify-self-end">{step.body}</p>
            </div>
          ))}
        </div>
        <p className="reveal reveal-delay-4 mt-10 text-sm text-ink-600">
          Prefer to talk it through? Text or call for a quote: <a href="tel:+13027533672" className="font-semibold text-ink-950 underline underline-offset-4">(302) 753-3672</a>
        </p>
      </div>
    </section>
  );
}
