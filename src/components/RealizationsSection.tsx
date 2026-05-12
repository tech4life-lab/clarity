import { Section } from './ui/Section'

const realizations = [
  {
    quote: "I don't actually need motivation. I need fewer open loops.",
  },
  {
    quote: "I keep saying I'm tired when I really mean emotionally overloaded.",
  },
  {
    quote: 'I noticed I only avoid conversations that could change my life.',
  },
  {
    quote: "My stress wasn't random. It repeated in cycles.",
  },
]

export function RealizationsSection() {
  return (
    <Section
      id="realizations"
      className="border-t border-stone-200/70 bg-gradient-to-b from-stone-50/60 to-canvas/80"
      aria-labelledby="realizations-heading"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-accent-deep">
          After a few sessions
        </p>
        <h2
          id="realizations-heading"
          className="mt-4 text-3xl font-bold tracking-tight text-ink md:text-[2.125rem] md:leading-snug"
        >
          Things people realize after using Clarity
        </h2>
        <p className="mt-5 text-[16px] leading-relaxed text-muted-canvas md:text-lg">
          Not therapy claims—just moments that sound like something you already knew but never said out loud.
        </p>
      </div>

      <ul className="mt-14 grid gap-4 sm:grid-cols-2">
        {realizations.map(({ quote }) => (
          <li
            key={quote}
            className="relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/70 p-6 shadow-[0_16px_48px_-28px_rgb(120_113_108_/_0.25)] backdrop-blur-md md:p-7"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-8 -top-12 h-28 w-28 rounded-full bg-gradient-to-br from-rose-200/35 via-transparent to-accent/15 blur-2xl"
            />
            <p className="relative text-[16px] font-semibold leading-snug tracking-tight text-ink md:text-[17px]">
              &ldquo;{quote}&rdquo;
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
