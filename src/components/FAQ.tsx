'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'What areas do you serve?',
    a: 'We serve Wilmington, DE and the surrounding areas. Delaware only, local and reliable.',
  },
  {
    q: 'What can you pick up or deliver?',
    a: 'Marketplace and Craigslist finds, furniture (sofas, tables, mattresses), appliances (washers, dryers, fridges), small apartment moves, and store pickups from Best Buy, Home Depot, Lowe\'s, lumber yards, and tile & stone yards. We also handle junk removal and haul-away.',
  },
  {
    q: 'How much does it cost?',
    a: 'Local delivery runs $60–$120, appliances $70–$140, small moves $80/hr with a 2-hour minimum, and junk removal $60–$150. Multi-stop routes add $20 per stop. Fill out the online form for an instant, upfront quote.',
  },
  {
    q: 'How do I book?',
    a: 'Fill out our quick online form with your item details and addresses, receive an instant upfront quote, pick a time slot, and we handle the rest — smooth local delivery and safe transport.',
  },
  {
    q: 'What kind of truck do you use?',
    a: 'A clean, well-maintained RAM ProMaster 2500 — the same size as an Amazon delivery van — with a 12 ft loading ramp.',
  },
  {
    q: 'Do you offer same-day or weekend service?',
    a: 'Yes. We offer fast response times, same-day availability when possible, and flexible day & weekend scheduling.',
  },
  {
    q: "Can't find your slot online?",
    a: 'Text or call us directly for a quote: (302) 753-3672.',
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
