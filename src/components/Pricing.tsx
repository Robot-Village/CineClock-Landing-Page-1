import { ArrowRight } from 'lucide-react';

const rates = [
  { name: 'Local Delivery', price: '$60–$120', body: 'Marketplace & Craigslist pickups, furniture delivery, and store pickups.' },
  { name: 'Appliances', price: '$70–$140', body: 'Washers, dryers, fridges — loaded, strapped, and delivered safely.' },
  { name: 'Small Moves', price: '$80/hr', body: '2-hour minimum. Right-sized for a studio or one-bedroom apartment.' },
  { name: 'Junk Removal', price: '$60–$150', body: 'Haul-away for old furniture and appliances you no longer need.' },
  { name: 'Multi-Stop Routes', price: '+$20/stop', body: 'Add extra pickup or drop-off stops to a single run.' },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-cream-100 py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <p className="eyebrow text-ink-500">Standard rates &amp; capacity</p>
          <h2 className="headline mt-5 text-4xl text-ink-950 sm:text-6xl">
            Simple pricing,<br />
            <span className="font-serif font-normal italic normal-case">no surprises.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-ink-950/15 bg-ink-950/15 sm:grid-cols-2 lg:grid-cols-5">
          {rates.map((r) => (
            <div key={r.name} className="flex flex-col bg-cream-50 p-6 sm:p-7">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400">{r.name}</span>
              <span className="mt-4 text-3xl font-extrabold tracking-tight text-ink-950">{r.price}</span>
              <p className="mt-4 text-sm leading-relaxed text-ink-600">{r.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 border border-ink-950 bg-ink-950 p-7 text-cream-50 sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="text-lg font-semibold">Get an instant, upfront quote</p>
            <p className="mt-1 text-sm text-cream-300">Fill out the form with your item details and addresses — pricing depends on size, distance, and access.</p>
          </div>
          <a
            href="https://tally.so/r/QKbKaY"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-ink-950 transition-all duration-300 hover:bg-amber-300"
          >
            Get a quote
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>

        <p className="reveal reveal-delay-4 mt-8 text-xs text-ink-400">
          Rates reflect standard local delivery and capacity. Text or call (302) 753-3672 for same-day availability.
        </p>
      </div>
    </section>
  );
}
