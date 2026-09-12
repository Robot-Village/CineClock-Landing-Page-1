import { AlertTriangle, Check, Clock, X } from 'lucide-react';

export default function ProductPreview() {
  return (
    <section className="bg-ink-950 py-24 text-cream-50 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal max-w-2xl"><p className="eyebrow text-amber-400">Why choose us</p><h2 className="headline mt-5 text-4xl text-cream-50 sm:text-6xl">Handled right.<br /><span className="font-serif font-normal italic normal-case">Every time.</span></h2></div>
        <div className="reveal reveal-delay-2 mt-14 grid gap-px overflow-hidden border border-white/20 bg-white/20 lg:grid-cols-2">
          <BeforeCard /><AfterCard />
        </div>
      </div>
    </section>
  );
}

function BeforeCard() {
  return <div className="bg-ink-950 p-7 sm:p-10"><span className="eyebrow text-cream-500">DIY & rideshare</span><h3 className="mt-5 text-2xl font-semibold text-cream-50">No ramp, no straps, no plan</h3><div className="mt-8 space-y-2">{[['Truck','Borrowed?','maybe'],['Loading','Solo','risky'],['Straps','None','shifting'],['Arrival','???','??']].map(([s,t,st]) => <div key={s} className="flex items-center gap-3 border-b border-white/10 py-3"><span className="font-mono text-xs text-cream-500">{s}</span><span className="flex-1 text-sm text-cream-400">{t}</span><span className="font-mono text-xs text-rust-500">{st}</span><X className="h-4 w-4 text-rust-500" /></div>)}</div><div className="mt-8 flex items-start gap-3 border border-rust-500/40 p-4"><AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-rust-500" /><p className="text-sm leading-relaxed text-cream-300">Scratched floors, a dinged fridge, and a friend who's not answering your texts anymore.</p></div></div>;
}

function AfterCard() {
  return <div className="bg-amber-400 p-7 text-ink-950 sm:p-10"><span className="eyebrow text-ink-700">Booked with us</span><h3 className="mt-5 text-2xl font-semibold">RAM ProMaster, 12 ft ramp</h3><div className="mt-8 space-y-2">{[['Truck','ProMaster 2500','on time'],['Loading','Pro tie-downs','secured'],['Straps','Every item','protected'],['Arrival','Instant quote slot','on schedule']].map(([s,t,st], i) => <div key={s} className={`flex items-center gap-3 border-b border-ink-950/15 py-3 ${i === 0 ? 'font-semibold' : ''}`}><span className="font-mono text-xs text-ink-600">{s}</span><span className="flex-1 font-mono text-xs">{t}</span>{i === 3 ? <Check className="h-4 w-4 text-sage-600" /> : i === 0 ? <Clock className="h-4 w-4" /> : <span className="text-xs text-ink-600">{st}</span>}</div>)}</div><div className="mt-8 flex items-start gap-3 border border-ink-950/25 p-4"><Check className="mt-0.5 h-4 w-4 shrink-0 text-sage-600" /><p className="text-sm leading-relaxed"><span className="font-semibold">Reliable:</span> Local, Wilmington-based, with fast response and same-day availability.</p></div></div>;
}
