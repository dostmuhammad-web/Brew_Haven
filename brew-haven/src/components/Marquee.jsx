import { AsteriskIcon } from './Icons'

const items = [
  'Single origin beans',
  'Hand roasted weekly',
  'Ethically sourced',
  'Cold brew on tap',
  'Pastries baked daily',
  'Oat milk, always',
]

export default function Marquee() {
  const loop = [...items, ...items]

  return (
    <div className="overflow-hidden border-y border-espresso bg-espresso py-4 text-cream">
      <div className="flex w-max animate-marquee items-center">
        {loop.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center">
            <span className="px-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-cream/85 sm:px-8 sm:text-xs">
              {item}
            </span>
            <AsteriskIcon className="h-3 w-3 shrink-0 text-caramel" />
          </div>
        ))}
      </div>
    </div>
  )
}
