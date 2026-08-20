import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-16 text-cream-50 sm:py-24">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div className="reveal">
            <h2 className="headline max-w-xl text-[clamp(3.5rem,7vw,7rem)] text-amber-400">
              Stop waiting<br />
              for permission.
            </h2>

            <p className="headline mt-12 max-w-md text-2xl leading-[0.98] text-amber-400 sm:text-4xl">
              The day is live.<br />
              The clock is moving.<br />
              What will you do with it?
            </p>
          </div>

          <div className="reveal reveal-delay-2 flex flex-col">
            <p className="headline max-w-xl text-2xl leading-[0.98] text-amber-400 sm:text-4xl">
              Run the day with<br />
              a system that thinks<br />
              like you do.
            </p>

            <p className="mt-10 max-w-xl text-lg leading-relaxed text-amber-400/90 sm:text-xl">
              You can keep reworking the board by hand and finding out about overtime at wrap. Or you can decide, right now, to take control of the clock.
            </p>

            <a
              href="#pricing"
              className="group mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-ink-950 transition-colors duration-300 hover:bg-amber-300"
            >
              Start your first shoot day free
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
