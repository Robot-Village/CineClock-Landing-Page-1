import { Check, ArrowRight } from 'lucide-react';

const tiers = [
  {
    name: 'Free',
    tagline: 'For your first shoot day',
    price: '$0',
    cadence: 'forever',
    cta: 'Start free',
    href: '#top',
    features: [
      '1 project',
      '1 shoot day',
      'Dynamic cascade scheduling',
      'Living call sheets',
      'Offline-first mobile app',
    ],
    highlight: false,
  },
  {
    name: 'Pro',
    tagline: 'For freelance ADs & producers',
    price: '$29',
    cadence: 'per month',
    cta: 'Go Pro',
    href: '#top',
    features: [
      'Unlimited projects',
      'Unlimited shoot days',
      'End-of-day reports',
      'Setup & shot templates',
      'Live overtime alerts',
      'Crew & department sharing',
    ],
    highlight: true,
  },
  {
    name: 'Production Pass',
    tagline: 'Per feature film or commercial',
    price: '$99',
    cadence: 'flat, per project',
    cta: 'Get a Pass',
    href: '#top',
    features: [
      'One multi-week project',
      'Unlimited shoot days',
      'Everything in Pro',
      'Multi-user department access',
      'Variance & overtime reporting',
      'Priority support',
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-cream-100 py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <p className="eyebrow text-ink-500">Pricing</p>
          <h2 className="headline mt-5 text-4xl text-ink-950 sm:text-6xl">
            Priced for the way<br />
            <span className="font-serif font-normal italic normal-case">film actually works.</span>
          </h2>
        </div>

        <div className="mt-16 grid items-stretch gap-5 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <div
              key={t.name}
              className={[
                `reveal reveal-delay-${i + 1} relative flex flex-col p-7 sm:p-8`,
                t.highlight ? 'border border-ink-950 bg-ink-950 text-cream-50' : 'border border-ink-950/25 bg-cream-50 text-ink-950',
              ].join(' ')}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <span className={`font-mono text-[10px] uppercase tracking-widest ${t.highlight ? 'text-cream-500' : 'text-ink-400'}`}>
                  {t.tagline}
                </span>
              </div>

              <div className="mt-8 flex items-baseline gap-1.5">
                <span className="text-5xl font-extrabold tracking-tight">{t.price}</span>
                <span className={`text-sm ${t.highlight ? 'text-cream-400' : 'text-ink-500'}`}>/ {t.cadence}</span>
              </div>

              <a
                href={t.href}
                className={[
                  'group mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300',
                  t.highlight
                    ? 'bg-amber-400 text-ink-950 hover:bg-amber-300'
                    : 'border border-ink-950/20 text-ink-950 hover:bg-ink-950 hover:text-cream-50',
                ].join(' ')}
              >
                {t.cta}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>

              <ul className={`mt-8 space-y-3 border-t pt-6 ${t.highlight ? 'border-white/15' : 'border-ink-950/10'}`}>
                {t.features.map((f) => (
                  <li key={f} className={`flex items-start gap-3 text-sm ${t.highlight ? 'text-cream-200' : 'text-ink-600'}`}>
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${t.highlight ? 'text-amber-400' : 'text-sage-500'}`} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="reveal reveal-delay-4 mt-8 text-xs text-ink-400">
          Subscriptions and payments coming soon. This is a demo — no card required.
        </p>
      </div>
    </section>
  );
}
