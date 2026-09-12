import { ArrowRight, Phone } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-16 text-cream-50 sm:py-24">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div className="reveal">
            <h2 className="headline max-w-xl text-[clamp(3.5rem,7vw,7rem)] text-amber-400">
              Stop waiting<br />
              on delivery day.
            </h2>

            <p className="headline mt-12 max-w-md text-2xl leading-[0.98] text-amber-400 sm:text-4xl">
              The ramp is down.<br />
              The truck is loaded.<br />
              Where do you want it?
            </p>
          </div>

          <div className="reveal reveal-delay-2 flex flex-col">
            <p className="headline max-w-xl text-2xl leading-[0.98] text-amber-400 sm:text-4xl">
              Get an instant quote,<br />
              pick your time slot,<br />
              we handle the rest.
            </p>

            <p className="mt-10 max-w-xl text-lg leading-relaxed text-amber-400/90 sm:text-xl">
              Serving Wilmington, DE and surrounding areas. Fast response, flexible scheduling, and a crew that treats your stuff like their own.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://tally.so/r/QKbKaY"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-ink-950 transition-colors duration-300 hover:bg-amber-300"
              >
                Get your free quote
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="tel:+13027533672"
                className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-amber-400/90 transition-colors duration-300 hover:text-amber-300"
              >
                <Phone className="h-4 w-4" />
                (302) 753-3672
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
