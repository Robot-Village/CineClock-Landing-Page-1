const testimonials = [
  {
    quote:
      "I used to spend the first ten minutes of every break reworking the board by hand. Now Reel does it the second I log the actual. It's the first tool that actually fits how an AD thinks.",
    name: 'Maya Okafor',
    role: '1st AD · Commercial work',
  },
  {
    quote:
      'The overtime alert paid for the year on day one. We caught a two-hour creep before lunch and restructured the afternoon. That alone saved the production four figures.',
    name: 'Daniel Reyes',
    role: 'UPM · Independent features',
  },
  {
    quote:
      'Living call sheets changed my life. Every department looking at the same numbers, updating in real time. No more "which version is current?" texts.',
    name: 'Priya Nair',
    role: 'Line Producer · Streaming series',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-amber-50 py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <p className="eyebrow text-ink-500">From the set</p>
          <h2 className="headline mt-5 text-4xl text-ink-950 sm:text-6xl">
            The people who<br />
            <span className="font-serif font-normal italic normal-case">own the clock.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-ink-950/15 bg-ink-950/15 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={`reveal reveal-delay-${i + 1} flex flex-col border border-ink-950/20 bg-cream-50 p-7 sm:p-8`}
            >
              <blockquote className="flex-1 font-serif text-lg leading-relaxed text-ink-800 text-pretty">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-ink-950/10 pt-5">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-ink-950 font-mono text-xs font-medium text-cream-50">
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink-950">{t.name}</p>
                  <p className="text-xs text-ink-500">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
