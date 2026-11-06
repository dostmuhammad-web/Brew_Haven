import { useState } from 'react'
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from './Icons'
import Reveal from './Reveal'

const details = [
  {
    icon: PinIcon,
    label: 'Find us',
    value: '14 Roastery Lane, Old Town',
  },
  {
    icon: ClockIcon,
    label: 'Opening hours',
    value: 'Mon–Fri 7:00–19:00 · Sat–Sun 8:00–20:00',
  },
  {
    icon: PhoneIcon,
    label: 'Call us',
    value: '+998 90 123 45 67',
  },
  {
    icon: MailIcon,
    label: 'Say hello',
    value: 'hello@brewhaven.coffee',
  },
]

const initialForm = {
  name: '',
  email: '',
  date: '',
  time: '09:00',
  guests: '2',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [sent, setSent] = useState(false)

  const update = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSent(true)
    setForm(initialForm)
  }

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-caramel/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-caramel-dark">
              Visit us
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-espresso sm:text-5xl">
              Save yourself
              <br className="hidden sm:block" /> a seat.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-espresso/70">
              Book a table for the morning rush, a slow afternoon, or a small
              group tasting. We will have the grinder warm.
            </p>

            <div className="mt-8 space-y-4">
              {details.map((detail) => {
                const Icon = detail.icon
                return (
                  <div
                    key={detail.label}
                    className="flex items-start gap-4 rounded-2xl border border-espresso/10 bg-white/40 p-4 backdrop-blur"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-espresso text-cream">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-espresso/45">
                        {detail.label}
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-espresso">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="relative mt-6 overflow-hidden rounded-2xl bg-moss p-6 text-cream">
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full border border-cream/20" />
              <div className="pointer-events-none absolute -bottom-10 -left-6 h-28 w-28 rounded-full border border-cream/15" />
              <div className="relative flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-cream/15">
                  <PinIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Two minutes from the tram</p>
                  <p className="text-xs text-cream/65">
                    Street parking after 18:00 · dog friendly
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className="rounded-[2rem] border border-espresso/10 bg-cream-dark/60 p-6 shadow-[0_30px_70px_-45px_rgba(42,26,18,0.6)] backdrop-blur sm:p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-display text-2xl font-bold text-espresso">
                  Book a table
                </h3>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-moss/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-moss">
                  <span className="h-1.5 w-1.5 rounded-full bg-moss" />
                  Open now
                </span>
              </div>

              {sent ? (
                <div className="mt-6 flex items-start gap-3 rounded-2xl border border-moss/30 bg-moss/10 p-4 text-sm text-moss">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-moss text-xs font-bold text-cream">
                    ✓
                  </span>
                  <p>
                    Thanks! Your request is in. We will confirm by email within a
                    few hours.
                  </p>
                </div>
              ) : null}

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-espresso/70">
                    Name
                  </span>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-espresso/15 bg-white/60 px-4 py-3 text-sm text-espresso outline-none transition placeholder:text-espresso/35 focus:border-caramel focus:bg-white focus:ring-2 focus:ring-caramel/25"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-espresso/70">
                    Email
                  </span>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@email.com"
                    className="w-full rounded-xl border border-espresso/15 bg-white/60 px-4 py-3 text-sm text-espresso outline-none transition placeholder:text-espresso/35 focus:border-caramel focus:bg-white focus:ring-2 focus:ring-caramel/25"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-espresso/70">
                    Date
                  </span>
                  <input
                    type="date"
                    required
                    value={form.date}
                    onChange={update('date')}
                    className="w-full rounded-xl border border-espresso/15 bg-white/60 px-4 py-3 text-sm text-espresso outline-none transition focus:border-caramel focus:bg-white focus:ring-2 focus:ring-caramel/25"
                  />
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-espresso/70">
                      Time
                    </span>
                    <input
                      type="time"
                      required
                      value={form.time}
                      onChange={update('time')}
                      className="w-full rounded-xl border border-espresso/15 bg-white/60 px-4 py-3 text-sm text-espresso outline-none transition focus:border-caramel focus:bg-white focus:ring-2 focus:ring-caramel/25"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-espresso/70">
                      Guests
                    </span>
                    <select
                      value={form.guests}
                      onChange={update('guests')}
                      className="w-full rounded-xl border border-espresso/15 bg-white/60 px-4 py-3 text-sm text-espresso outline-none transition focus:border-caramel focus:bg-white focus:ring-2 focus:ring-caramel/25"
                    >
                      {[1, 2, 3, 4, 5, 6, 8].map((count) => (
                        <option key={count} value={count}>
                          {count} {count === 1 ? 'guest' : 'guests'}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-xs font-semibold text-espresso/70">
                    Anything we should know?
                  </span>
                  <textarea
                    rows="3"
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Allergies, celebrations, favourite seat…"
                    className="w-full resize-none rounded-xl border border-espresso/15 bg-white/60 px-4 py-3 text-sm text-espresso outline-none transition placeholder:text-espresso/35 focus:border-caramel focus:bg-white focus:ring-2 focus:ring-caramel/25"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-5 w-full rounded-xl bg-espresso px-6 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:bg-espresso-light hover:shadow-lg hover:shadow-espresso/20"
              >
                Request a table
              </button>
              <p className="mt-3 text-center text-[11px] text-espresso/45">
                No deposit needed. We hold tables for 15 minutes.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
