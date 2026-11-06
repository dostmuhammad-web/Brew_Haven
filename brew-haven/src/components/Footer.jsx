import { useState } from 'react'
import { CupIcon, InstagramIcon, XIcon, ArrowIcon } from './Icons'

const currentYear = new Date().getFullYear()

const columns = [
  {
    title: 'Explore',
    links: [
      { label: 'Our story', href: '#about' },
      { label: 'Menu', href: '#menu' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Reviews', href: '#reviews' },
    ],
  },
  {
    title: 'Visit',
    links: [
      { label: '14 Roastery Lane', href: '#contact' },
      { label: 'Opening hours', href: '#contact' },
      { label: 'Book a table', href: '#contact' },
      { label: 'Private tastings', href: '#contact' },
    ],
  },
  {
    title: 'Shop',
    links: [
      { label: 'Whole beans', href: '#menu' },
      { label: 'Ground coffee', href: '#menu' },
      { label: 'Brew gear', href: '#menu' },
      { label: 'Gift cards', href: '#contact' },
    ],
  },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  const handleSubscribe = (event) => {
    event.preventDefault()
    if (!email) return
    setJoined(true)
    setEmail('')
  }

  return (
    <footer className="relative overflow-hidden bg-espresso text-cream">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-caramel/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-cream text-espresso">
                <CupIcon className="h-5 w-5" />
              </span>
              <span className="leading-none">
                <span className="block font-display text-xl font-bold">
                  Brew Haven
                </span>
                <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.3em] text-cream/45">
                  Coffee &amp; Roastery
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
              Small-batch coffee, baked things and a quiet corner in the middle
              of a loud city.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#reviews"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 text-cream/70 transition hover:border-caramel hover:text-caramel"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="#reviews"
                aria-label="X"
                className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 text-cream/70 transition hover:border-caramel hover:text-caramel"
              >
                <XIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cream/40">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-cream/65 transition-colors hover:text-caramel"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 rounded-2xl border border-cream/10 bg-cream/[0.05] p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:p-7">
          <div>
            <p className="font-display text-xl font-bold">
              First pour, first to know.
            </p>
            <p className="mt-1 text-sm text-cream/55">
              New single origins and seasonal bakes, once a month. No noise.
            </p>
          </div>
          {joined ? (
            <p className="rounded-full bg-caramel/15 px-5 py-3 text-sm font-semibold text-caramel">
              You&apos;re on the list ✓
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex w-full gap-2 sm:w-auto">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@email.com"
                className="w-full min-w-0 rounded-full border border-cream/15 bg-espresso px-4 py-3 text-sm text-cream outline-none transition placeholder:text-cream/35 focus:border-caramel focus:ring-2 focus:ring-caramel/25 sm:w-56"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cream text-espresso transition hover:bg-caramel hover:text-cream"
              >
                <ArrowIcon className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 text-xs text-cream/40 sm:flex-row">
          <p>© {currentYear} Brew Haven Roastery. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#home" className="transition hover:text-cream/70">
              Privacy
            </a>
            <a href="#home" className="transition hover:text-cream/70">
              Terms
            </a>
            <span>Made with care &amp; caffeine</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
