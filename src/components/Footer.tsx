const cols = [
  {
    title: 'Product',
    links: ['Features', 'How it works', 'Pricing', 'FAQ'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Contact'],
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Security', 'DPA'],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-950/15 bg-cream-100">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="text-xl font-extrabold tracking-tight text-ink-950">REEL</span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-ink-500">Timekeeper</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-600">
              The timekeeper that thinks like an AD. Built for the people who own the clock on set.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <p className="eyebrow text-ink-500">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-ink-600 transition-colors hover:text-ink-950">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-950/10 pt-8 sm:flex-row">
          <p className="text-xs text-ink-500">© {new Date().getFullYear()} Reel Timekeeper. Demo build.</p>
          <p className="text-xs text-ink-500">Made for the call sheet, not the cubicle.</p>
        </div>
      </div>
    </footer>
  );
}
