const testimonials = [
  {
    quote:
      "I used to spend the morning of my move just waiting by the window, wondering when the truck would show up. With Haul I watched them move stop to stop and knew exactly when to expect them.",
    name: 'Sarah Kim',
    role: 'Homeowner · Local move',
  },
  {
    quote:
      'The digital inventory saved us. We had a full photo record of every box before it left the old office, so when something looked off at the new space we could check immediately.',
    name: 'James Whitfield',
    role: 'Facilities Manager · Office relocation',
  },
  {
    quote:
      'Cross-country move with two kids and a dog. The updates on the road made the whole week easier — we always knew where the truck was.',
    name: 'Elena Martins',
    role: 'Homeowner · Long-distance move',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-amber-50 py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <p className="eyebrow text-ink-500">From the road</p>
          <h2 className="headline mt-5 text-4xl text-ink-950 sm:text-6xl">
            The people who<br />
            <span className="font-serif font-normal italic normal-case">trust the truck.</span>
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
