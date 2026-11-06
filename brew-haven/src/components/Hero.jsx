import { ArrowIcon, StarIcon } from './Icons'
import Reveal from './Reveal'

const stats = [
  { value: '12k+', label: 'Cups poured' },
  { value: '4.9/5', label: 'Guest rating' },
  { value: '8 yrs', label: 'Of slow roasting' },
]

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-caramel/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-64 h-80 w-80 rounded-full bg-moss/15 blur-3xl" />
      <div className="grain pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-7xl px-5 pb-14 sm:px-8 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <Reveal>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-espresso/15 bg-white/50 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-espresso/70 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-caramel opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-caramel-dark" />
              </span>
              Small-batch roastery · Est. 2016
            </div>

            <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.94] tracking-tight text-espresso sm:text-6xl lg:text-7xl">
              Slow mornings,
              <br />
              <span className="italic text-caramel-dark">bold coffee.</span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-espresso/70 sm:text-lg">
              We roast in tiny batches, pull every shot with care, and serve it
              in a corner that feels like home. Come for the caffeine — stay for
              the calm.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#menu"
                className="group inline-flex items-center gap-2 rounded-full bg-espresso px-6 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-espresso-light hover:shadow-xl hover:shadow-espresso/20"
              >
                Explore the menu
                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full border border-espresso/20 px-6 py-3.5 text-sm font-semibold text-espresso transition-all duration-300 hover:border-espresso/50 hover:bg-white/40"
              >
                Our story
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <div className="flex -space-x-3">
                {['bg-caramel', 'bg-moss', 'bg-espresso', 'bg-caramel-dark'].map(
                  (color, index) => (
                    <span
                      key={color}
                      className={`grid h-10 w-10 place-items-center rounded-full border-2 border-cream text-xs font-bold text-cream ${color}`}
                    >
                      {['A', 'M', 'S', '+'][index]}
                    </span>
                  ),
                )}
              </div>
              <div>
                <div className="flex items-center gap-1 text-caramel-dark">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon key={index} className="h-3.5 w-3.5" />
                  ))}
                  <span className="ml-1.5 text-xs font-bold text-espresso">4.9</span>
                </div>
                <p className="mt-0.5 text-xs text-espresso/60">
                  Loved by 1,200+ coffee people
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -right-3 -top-3 hidden h-24 w-24 rounded-full border border-dashed border-espresso/25 sm:block" />
              <div className="absolute -left-5 bottom-24 hidden h-16 w-16 rounded-full border border-dashed border-caramel/50 sm:block" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-cream-dark shadow-[0_40px_80px_-40px_rgba(42,26,18,0.55)] ring-1 ring-espresso/10">
                <img
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80"
                  alt="Latte served in a ceramic cup"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-cream/15 px-4 py-3 text-cream backdrop-blur-md">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-cream/70">
                      Signature pour
                    </p>
                    <p className="font-display text-lg font-semibold">
                      Velvet oat latte
                    </p>
                  </div>
                  <span className="rounded-full bg-cream px-3 py-1 text-xs font-bold text-espresso">
                    $4.50
                  </span>
                </div>
              </div>

              <div className="absolute -left-4 top-8 w-40 rounded-2xl border border-espresso/10 bg-cream/95 p-4 shadow-xl shadow-espresso/10 backdrop-blur sm:-left-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-espresso/50">
                  Today&apos;s brew
                </p>
                <p className="mt-1.5 font-display text-base font-bold leading-tight text-espresso">
                  Ethiopia Guji
                </p>
                <p className="mt-1 text-[11px] leading-snug text-espresso/60">
                  Peach · jasmine · honey
                </p>
                <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-espresso/10">
                  <div className="h-full w-4/5 rounded-full bg-caramel" />
                </div>
                <p className="mt-1.5 text-[10px] text-espresso/50">
                  Light roast · V60
                </p>
              </div>

              <div className="absolute -right-3 top-1/2 grid h-24 w-24 -translate-y-1/2 place-items-center rounded-full bg-moss text-center text-cream shadow-xl shadow-moss/30 sm:-right-6">
                <div>
                  <p className="font-display text-xl font-bold leading-none">100%</p>
                  <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-cream/80">
                    Arabica
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-3 divide-x divide-espresso/10 border-y border-espresso/10 py-6 sm:mt-20">
          {stats.map((stat) => (
            <div key={stat.label} className="px-2 text-center sm:px-6">
              <p className="font-display text-2xl font-bold text-espresso sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-espresso/50 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
