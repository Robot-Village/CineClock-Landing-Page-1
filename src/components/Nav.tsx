'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Services', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-ink-950/10 bg-cream-50/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      ].join(' ')}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2">
          <span className="text-lg font-extrabold tracking-tight text-ink-950 transition-opacity group-hover:opacity-70">
            HAUL
          </span>
          <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-ink-500 sm:inline">
            Moving Co.
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-600 transition-colors hover:text-ink-950"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={process.env.NEXT_PUBLIC_APP_URL || '#'}
            className="text-sm font-medium text-ink-600 transition-colors hover:text-ink-950"
          >
            Track your move
          </a>
          <a
            href="https://tally.so/r/QKbKaY"
            className="rounded-full bg-ink-950 px-5 py-2 text-sm font-semibold text-cream-50 transition-all duration-300 hover:bg-ink-700"
          >
            Get a quote
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-9 w-9 place-items-center rounded-lg text-ink-950 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-950/10 bg-cream-50 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-ink-700"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://tally.so/r/QKbKaY"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-ink-950 px-4 py-2 text-center text-sm font-semibold text-cream-50"
            >
              Get a quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
