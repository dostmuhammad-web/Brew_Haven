import { useState } from 'react'
import Reveal from './Reveal'

const tabs = ['All', 'Hot', 'Iced', 'Food']

const items = [
  {
    name: 'Flat White',
    price: '$4.25',
    description: 'Double ristretto · silky microfoam',
    category: 'Hot',
    tag: 'House classic',
  },
  {
    name: 'Caramelised Oat Latte',
    price: '$4.80',
    description: 'House syrup · barista oat · cinnamon',
    category: 'Hot',
    tag: 'Must try',
  },
  {
    name: 'V60 Pour-Over',
    price: '$5.00',
    description: 'Rotating single origin · bright & delicate',
    category: 'Hot',
    tag: 'Single origin',
  },
  {
    name: 'Americano',
    price: '$3.25',
    description: 'Espresso · hot water · crisp finish',
    category: 'Hot',
  },
  {
    name: 'Cold Brew',
    price: '$4.00',
    description: '18h slow steep · naturally sweet',
    category: 'Iced',
    tag: 'On tap',
  },
  {
    name: 'Iced Shakerato',
    price: '$4.35',
    description: 'Espresso shaken over ice · frothy',
    category: 'Iced',
  },
  {
    name: 'Nitro Cold Brew',
    price: '$5.00',
    description: 'Silky cascade · creamy head',
    category: 'Iced',
    tag: 'Nitro',
  },
  {
    name: 'Almond Croissant',
    price: '$4.25',
    description: 'Laminated in-house · frangipane · icing',
    category: 'Food',
  },
  {
    name: 'Avocado & Lemon Tartine',
    price: '$7.50',
    description: 'Sourdough · pickled chili · lemon oil',
    category: 'Food',
    tag: 'Brunch',
  },
  {
    name: 'Banana Bread',
    price: '$3.50',
    description: 'Toasted with brown butter · warm',
    category: 'Food',
  },
]

export default function Menu() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? items : items.filter((item) => item.category === active)

  return (
    <section id="menu" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-caramel/20 blur-3xl" />
      <div className="grain pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="flex flex-col items-center text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-caramel-dark">
            Menu
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-espresso sm:text-5xl">
            Coffee &amp; kitchen
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-espresso/70">
            A tight menu with space to breathe. We rotate single origins weekly
            and bake fresh every morning.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 rounded-full border border-espresso/15 bg-white/40 p-1.5 backdrop-blur">
            {tabs.map((tab) => {
              const isActive = active === tab
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActive(tab)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 sm:px-5 ${
                    isActive
                      ? 'bg-espresso text-cream shadow-lg shadow-espresso/15'
                      : 'text-espresso/70 hover:text-espresso'
                  }`}
                >
                  {tab}
                </button>
              )
            })}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, index) => (
            <Reveal key={item.name} delay={index * 60}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-espresso/10 bg-cream/90 p-6 shadow-[0_25px_50px_-35px_rgba(42,26,18,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-caramel/60 hover:shadow-[0_30px_60px_-35px_rgba(169,111,53,0.4)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-lg font-bold text-espresso">
                        {item.name}
                      </h3>
                      {item.tag ? (
                        <span className="rounded-full bg-caramel/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.2em] text-caramel-dark">
                          {item.tag}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-espresso/60">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-display text-lg font-bold text-espresso">
                    {item.price}
                  </span>
                </div>
                <div className="mt-5 h-px w-full bg-gradient-to-r from-espresso/10 via-transparent to-transparent" />
                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-espresso/40">
                  Made to order · Customisable
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-espresso/20 px-6 py-3.5 text-sm font-semibold text-espresso transition-all duration-300 hover:border-espresso/40 hover:bg-white/40"
          >
            Ask us for today&apos;s full board
          </a>
        </Reveal>
      </div>
    </section>
  )
}
