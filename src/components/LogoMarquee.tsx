const logos = ['Marketplace & Craigslist', 'Best Buy', 'Home Depot', "Lowe's", 'Lumber Yards', 'Tile & Stone Yards', 'Apartment Movers', 'Junk Removal'];

export default function LogoMarquee() {
  return (
    <section className="border-b border-ink-950/10 bg-cream-100 py-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="eyebrow mb-5 text-center text-ink-400">Pickups &amp; deliveries from anywhere in Wilmington &amp; surrounding areas</p>
        <div className="mask-fade-x overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-14">
            {[...logos, ...logos].map((logo, i) => (
              <span key={i} className="text-lg font-semibold tracking-tight text-ink-400 transition-colors hover:text-ink-950 sm:text-xl">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
