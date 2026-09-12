import { Boxes, Home, PackageSearch, ShoppingCart, Trash2, Truck } from 'lucide-react';

const features = [
  { icon: ShoppingCart, number: '01', title: 'Marketplace & Craigslist pickups', body: 'Found a great deal? We pick it up and bring it straight to your door, no truck rental required.', tag: 'Core' },
  { icon: Home, number: '02', title: 'Furniture delivery', body: 'Sofas, tables, mattresses — handled with professional loading and secure tie-downs, every time.', tag: 'Core' },
  { icon: Truck, number: '03', title: 'Appliance transport', body: 'Washers, dryers, fridges. Loaded, strapped, and delivered safely with our 12 ft ramp.', tag: 'Core' },
  { icon: Boxes, number: '04', title: 'Small apartment moves', body: 'Studio or one-bedroom move? Skip the full moving crew — get a right-sized team and truck.', tag: 'Core' },
  { icon: PackageSearch, number: '05', title: 'Store pickups', body: "Best Buy, Home Depot, Lowe's, lumber, tile & stone yards — we pick up what won't fit in your car.", tag: 'Core' },
  { icon: Trash2, number: '06', title: 'Junk removal & multi-stop routes', body: 'Haul away old furniture and appliances, or add stops to one run for +$20 per stop.', tag: 'Pro' },
];

export default function Features() {
  return (
    <section id="features" className="bg-cream-100 py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="reveal"><p className="eyebrow text-ink-500">Services offered</p><h2 className="headline mt-5 text-4xl text-ink-950 sm:text-6xl">Everything that needs a truck.</h2></div>
          <p className="reveal max-w-xl text-lg leading-relaxed text-ink-600 sm:justify-self-end sm:text-xl">A clean, well-maintained RAM ProMaster with same-day availability and flexible day &amp; weekend scheduling.</p>
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
