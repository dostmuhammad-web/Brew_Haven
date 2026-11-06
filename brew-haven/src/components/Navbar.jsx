import { useEffect, useState } from 'react'
import { CupIcon } from './Icons'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Our story', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-cream/90 shadow-[0_18px_40px_-30px_rgba(42,26,18,0.7)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2.5"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-espresso text-cream transition-transform duration-300 group-hover:-rotate-12">
            <CupIcon className="h-5 w-5" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-xl font-bold tracking-tight">
              Brew Haven
            </span>
            <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.3em] text-espresso/50">
              Coffee &amp; Roastery
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-espresso/70 transition-colors hover:text-espresso"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full bg-caramel transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-espresso px-5 py-2.5 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-espresso-light hover:shadow-lg hover:shadow-espresso/20 sm:inline-flex"
          >
            Book a table
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-espresso/15 text-espresso transition hover:border-espresso/40 md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  open ? 'top-1/2 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 rounded-full bg-current transition-all duration-300 ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  open ? 'top-1/2 -rotate-45' : 'bottom-0'
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t border-espresso/10 bg-cream transition-[max-height,opacity] duration-500 md:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-medium text-espresso/80 transition hover:bg-espresso/5 hover:text-espresso"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-xl bg-espresso px-3 py-3 text-center text-base font-semibold text-cream"
          >
            Book a table
          </a>
        </div>
      </div>
    </header>
  )
}
