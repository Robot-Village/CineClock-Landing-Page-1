const testimonials = [
  {
    quote:
      'Found a dresser on Marketplace an hour away and had no way to get it home. Text, quote, and it was on my doorstep the same afternoon.',
    name: 'Marcus Reid',
    role: 'Wilmington, DE · Marketplace pickup',
  },
  {
    quote:
      'Our new washer and dryer got picked up from the store and delivered with zero scratches — straps and blankets the whole way. Way easier than the store delivery window.',
    name: 'Priya Anand',
    role: 'Newark, DE · Appliance delivery',
  },
  {
    quote:
      'Moved out of my studio apartment without hiring a full moving company. Quick, affordable, and the crew was careful with everything.',
    name: 'Devon Carter',
    role: 'Wilmington, DE · Small apartment move',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-amber-50 py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <p className="eyebrow text-ink-500">From Wilmington &amp; surrounding areas</p>
          <h2 className="headline mt-5 text-4xl text-ink-950 sm:text-6xl">
            The people who<br />
            <span className="font-serif font-normal italic normal-case">trust the ramp.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-ink-950/15 bg-ink-950/15 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={`reveal reveal-delay-${i + 1} flex flex-col border border-ink-950/20 bg-cream-50 p-7 sm:p-8`}
            >
              <blockquote className="flex-1 font-serif text-lg leading-relaxed text-ink-800 text-pretty">
                &quot;{t.quote}&quot;
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
