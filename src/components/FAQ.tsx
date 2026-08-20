'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Is this ready to use right now?',
    a: "This is a demo landing page. The full app — with project setup, the live cascade engine, and account logins — is in active development. Sign up for the free tier and we'll let you know the moment it's live.",
  },
  {
    q: "What's the difference between Pro and the Production Pass?",
    a: 'Pro is a monthly subscription for an individual AD or freelance producer working across multiple gigs. The Production Pass is a one-time flat fee that covers a single multi-week project — ideal when a production company is paying for the tool, not the person.',
  },
  {
    q: 'Does it work offline on set?',
    a: 'Yes. The app is offline-first, designed for soundstages, basements, and remote locations with no signal. Everything syncs automatically the moment you reconnect.',
  },
  {
    q: 'Can my whole department see the same day?',
    a: 'On Pro and Production Pass, yes. You can share a live view of the day with your 2nd AD, the UPM, and key departments — everyone sees the same numbers updating in real time.',
  },
  {
    q: 'Will you add subscriptions and payments?',
    a: "Yes — billing for Pro and Production Pass is coming soon. During this demo period, everything is free and no credit card is required.",
  },
  {
    q: 'Who is Reel built for?',
    a: '1st and 2nd ADs, Unit Production Managers, line producers, and independent production companies. If you own the schedule and the clock, Reel is for you.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-cream-50 py-24 sm:py-36">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="reveal">
          <p className="eyebrow text-ink-500">FAQ</p>
          <h2 className="headline mt-5 text-4xl text-ink-950 sm:text-6xl">
            Questions,<br />
            <span className="font-serif font-normal italic normal-case">answered.</span>
          </h2>
        </div>

        <div className="reveal reveal-delay-1 mt-14 border-t border-ink-950/20">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-ink-950/20">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-base font-semibold text-ink-950 sm:text-lg">{f.q}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-ink-950/20 text-ink-700 transition-colors hover:bg-ink-950 hover:text-cream-50">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className="grid transition-all duration-500 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 pr-12 text-sm leading-relaxed text-ink-600 sm:text-base">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
