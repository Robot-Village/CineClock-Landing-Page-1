import { ArrowDown, ArrowRight, Check, Clock3 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="grain relative overflow-hidden bg-cream-50 pt-32 sm:pt-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-end gap-12 pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:pb-24">
          <div>
            <p className="reveal eyebrow mb-7 text-ink-500">Local &amp; reliable · Delaware only</p>
            <h1 className="reveal reveal-delay-1 headline max-w-5xl text-[clamp(3.25rem,9vw,8rem)] text-ink-950">
              Furniture &amp; appliance
              <br />
              <span className="font-serif font-normal italic normal-case">delivered right.</span>
            </h1>
            <p className="reveal reveal-delay-2 mt-8 max-w-lg text-lg leading-relaxed text-ink-600 sm:text-xl">
              Professional, fast, and affordable delivery for Marketplace finds, store pickups, appliances, and small moves. RAM ProMaster 2500 with a 12 ft loading ramp, serving Wilmington, DE and surrounding areas.
            </p>
            <div className="reveal reveal-delay-3 mt-9 flex flex-wrap items-center gap-4">
              <a
                href="https://tally.so/r/QKbKaY"
                className="group inline-flex items-center gap-3 rounded-full bg-ink-950 px-6 py-3.5 text-sm font-semibold text-cream-50 transition-all duration-300 hover:bg-ink-700"
              >
                Get your free quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#how-it-works" className="inline-flex items-center gap-2 text-sm font-semibold text-ink-700 transition-colors hover:text-ink-950">
                See how it works
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="reveal reveal-delay-2 relative lg:pb-5">
            <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-amber-300/30 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] bg-ink-950 p-4 shadow-2xl shadow-ink-950/20 sm:p-6">
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-cream-300">Job #482 / Wilmington, DE</p>
                  <p className="mt-1 text-sm font-medium text-cream-50">Today's delivery</p>
                </div>
                <span className="flex items-center gap-2 rounded-full bg-amber-400 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ink-950">
                  <span className="blink-rec h-1.5 w-1.5 rounded-full bg-ink-950" /> Live
                </span>
              </div>
              <div className="space-y-2 py-5">
                {[
                  ['1', 'Pickup confirmed', '08:00', 'done'],
                  ['2', 'Secure tie-down', '08:20', 'done'],
                  ['3', 'En route to delivery', '08:45', 'done'],
                  ['3B', 'Arriving at address', '09:15', 'live'],
                  ['4', 'Delivery & placement', '09:35', 'next'],
                ].map(([stop, label, time, status]) => (
                  <div key={stop} className={`flex items-center gap-3 rounded-xl px-3 py-3 ${status === 'live' ? 'bg-amber-400 text-ink-950' : 'text-cream-200'}`}>
                    <span className={`font-mono text-[10px] ${status === 'live' ? 'text-ink-700' : 'text-cream-500'}`}>{stop}</span>
                    <span className="flex-1 text-xs font-medium">{label}</span>
                    <span className={`font-mono text-[10px] ${status === 'live' ? 'text-ink-700' : 'text-cream-400'}`}>{time}</span>
                    {status === 'done' && <Check className="h-3.5 w-3.5 text-sage-400" />}
                    {status === 'live' && <Clock3 className="h-3.5 w-3.5" />}
                  </div>
                ))}
              </div>
              <div className="border-t border-white/15 pt-4">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-cream-400">
                  <span>Delivery progress</span><span className="font-mono text-cream-200">75%</span>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/15">
                  <div className="h-full w-[75%] rounded-full bg-amber-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-y border-ink-950/10 bg-cream-100 py-5">
        <div className="mx-auto flex max-w-7xl items-center gap-8 overflow-hidden px-5 sm:px-8">
          <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-500">RAM ProMaster 2500 · 12 ft loading ramp</span>
          <span className="h-px w-16 shrink-0 bg-ink-300" />
          <div className="marquee-track flex min-w-max gap-10 text-xs font-medium uppercase tracking-widest text-ink-400">
            <span>Marketplace Pickups</span><span>Furniture Delivery</span><span>Appliance Transport</span><span>Store Pickups</span><span>Junk Removal</span><span>Marketplace Pickups</span><span>Furniture Delivery</span><span>Appliance Transport</span><span>Store Pickups</span><span>Junk Removal</span>
          </div>
        </div>
      </div>
    </section>
  );
}
