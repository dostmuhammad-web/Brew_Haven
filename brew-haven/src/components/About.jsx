import { FlameIcon, LeafIcon, CupIcon } from './Icons'
import Reveal from './Reveal'

const features = [
  {
    icon: FlameIcon,
    title: 'Roasted in tiny batches',
    text: 'Never more than 12 kg at a time, so every bean lands exactly where we want it.',
  },
  {
    icon: LeafIcon,
    title: 'Direct-trade beans',
    text: 'We buy straight from growers we know, and pay well above fair-trade rates.',
  },
  {
    icon: CupIcon,
    title: 'Baked in-house',
    text: 'Croissants, buns and banana bread — out of the oven before the first pour.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal className="relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -left-4 top-10 h-40 w-40 rounded-full bg-caramel/20 blur-2xl" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-cream-dark shadow-[0_30px_60px_-35px_rgba(42,26,18,0.5)] ring-1 ring-espresso/10">
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80"
                alt="Barista pouring milk into a cup of coffee"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="absolute -bottom-8 -right-2 w-40 overflow-hidden rounded-2xl border-4 border-cream shadow-xl shadow-espresso/15 sm:-right-8 sm:w-52">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=500&q=80"
                alt="Warm café interior with wooden tables"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="absolute -left-3 bottom-16 rounded-2xl bg-espresso px-5 py-4 text-cream shadow-xl shadow-espresso/25 sm:-left-8">
              <p className="font-display text-3xl font-bold leading-none">8+</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cream/60">
                Years of
                <br />
                roasting
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-caramel-dark">
            Our story
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-espresso sm:text-5xl">
            From a tiny cart to
            <br className="hidden sm:block" /> your favourite corner.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-espresso/70">
            Brew Haven started in 2016 with a second-hand cart, a hand grinder
            and one very stubborn idea: great coffee should feel personal. These
            days we roast our own beans, bake before sunrise, and still greet
            most guests by name.
          </p>

          <div className="mt-9 space-y-6">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-caramel/15 text-caramel-dark">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-espresso sm:text-base">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-espresso/60">
                      {feature.text}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <a
            href="#menu"
            className="mt-9 inline-flex items-center gap-2 border-b border-espresso/25 pb-1 text-sm font-semibold text-espresso transition-colors hover:border-caramel-dark hover:text-caramel-dark"
          >
            See what we are pouring today
            <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
