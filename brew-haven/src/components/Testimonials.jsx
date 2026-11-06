import { StarIcon } from './Icons'
import Reveal from './Reveal'

const reviews = [
  {
    quote:
      'The flat white is the best in the city — and the room is so calm I keep staying for a second cup.',
    name: 'Aziza R.',
    role: 'Regular since 2019',
    initials: 'AR',
    color: 'bg-caramel',
  },
  {
    quote:
      'I buy their Ethiopia Guji every month. It ruined supermarket coffee for me, in the best possible way.',
    name: 'Marcus T.',
    role: 'Home brewer',
    initials: 'MT',
    color: 'bg-moss-light',
  },
  {
    quote:
      'Croissants at 8am, warm light, no rush. It has quietly become my favourite place to write.',
    name: 'Sitora K.',
    role: 'Freelance designer',
    initials: 'SK',
    color: 'bg-caramel-dark',
  },
]

export default function Testimonials() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-espresso py-20 text-cream sm:py-28">
      <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-caramel/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-moss/25 blur-3xl" />
      <div className="grain pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-caramel">
              Kind words
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Loved by the neighbourhood
            </h2>
          </div>
          <div className="rounded-2xl border border-cream/15 bg-cream/5 px-5 py-4 backdrop-blur">
            <div className="flex items-center gap-1 text-caramel">
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon key={index} className="h-4 w-4" />
              ))}
            </div>
            <p className="mt-2 text-sm text-cream/70">
              <span className="font-bold text-cream">4.9 / 5</span> from 1,200+
              reviews
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {reviews.map((review, index) => (
            <Reveal key={review.name} delay={index * 100} className="h-full">
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-cream/10 bg-cream/[0.06] p-6 backdrop-blur transition-colors duration-300 hover:border-caramel/40 hover:bg-cream/[0.09]">
                <div>
                  <div className="flex items-center gap-1 text-caramel">
                    {Array.from({ length: 5 }).map((_, star) => (
                      <StarIcon key={star} className="h-3.5 w-3.5" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-base leading-relaxed text-cream/85">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-cream/10 pt-5">
                  <span
                    className={`grid h-10 w-10 place-items-center rounded-full text-xs font-bold ${review.color}`}
                  >
                    {review.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-cream">
                      {review.name}
                    </p>
                    <p className="text-xs text-cream/50">{review.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
