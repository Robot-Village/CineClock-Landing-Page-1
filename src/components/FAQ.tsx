'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Is this a real moving company I can book right now?',
    a: "This is a demo landing page for Haul. Live booking, real crews, and real pricing are in active development. Sign up and we'll let you know the moment it's live in your area.",
  },
  {
    q: "What's the difference between Full-Service and White Glove?",
    a: 'Full-Service covers local moves, with our crew handling loading, transport, and unloading. White Glove Relocation is built for long-distance moves and includes full packing, unpacking, and up to 30 days of storage.',
  },
  {
    q: 'Do you provide packing materials?',
    a: 'Yes — boxes, tape, and wrap are included on Full-Service and White Glove bookings. DIY labor-only bookings can add materials for a flat fee.',
  },
  {
    q: 'Is my stuff insured during the move?',
    a: 'Every booking includes basic liability coverage. Full-Service and White Glove bookings include full-value protection, and you can add extra coverage at checkout.',
  },
  {
    q: 'Do you handle long-distance and out-of-state moves?',
    a: 'Yes. White Glove Relocation is built for long-distance and interstate moves, with a dedicated coordinator managing the whole trip door to door.',
  },
  {
    q: 'Who is Haul built for?',
    a: 'Anyone moving a home or an office — from a studio apartment across town to a five-bedroom house across the country.',
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
