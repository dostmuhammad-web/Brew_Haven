import Reveal from './Reveal'

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80',
    alt: 'Café interior with wooden tables and plants',
    label: 'The corner room',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80',
    alt: 'Cappuccino with latte art',
    label: 'Morning pour',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=600&q=80',
    alt: 'Freshly roasted coffee beans',
    label: 'Fresh roast',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=600&q=80',
    alt: 'Café seating near a large window',
    label: 'Window seats',
    span: 'col-span-1 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80',
    alt: 'Coffee being poured from a kettle',
    label: 'The slow pour',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1521302080334-4bebac2763a6?auto=format&fit=crop&w=900&q=80',
    alt: 'Friends catching up over coffee',
    label: 'Good company',
    span: 'col-span-2 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80',
    alt: 'Cup of coffee beside roasted beans',
    label: 'Beans & brews',
    span: 'col-span-1 row-span-1',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="flex flex-col items-end justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-caramel-dark">
              Gallery
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-espresso sm:text-5xl">
              A little look inside
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-espresso/60">
            Warm light, worn wood and the smell of fresh grounds. Come sit for a
            while.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <div className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:gap-4 md:grid-cols-4">
            {photos.map((photo) => (
              <figure
                key={photo.alt}
                className={`group relative overflow-hidden rounded-2xl bg-cream-dark ring-1 ring-espresso/10 ${photo.span}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <figcaption className="absolute bottom-0 left-0 right-0 translate-y-3 p-4 text-sm font-semibold text-cream opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {photo.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
