import { Section } from './ui/Section'

const patterns = [
  {
    title: 'Repeating stress',
    body: 'You mentioned money stress 5 times this week—in different words, same knot underneath.',
    tag: 'Frequency',
  },
  {
    title: 'Energy vs effort',
    body: 'You sound mentally exhausted, not lazy. Your tone shifts right after you talk about saying yes too often.',
    tag: 'Tone',
  },
  {
    title: 'Decision avoidance',
    body: 'You keep delaying one difficult conversation—and your pace picks up whenever you near naming it out loud.',
    tag: 'Avoidance',
  },
]

export function WhatClarityNotices() {
  return (
    <Section id="what-clarity-notices" className="border-y border-zinc-200/90 bg-white/40 backdrop-blur-sm">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-accent-deep">
          Pattern detection
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink md:text-4xl">
          What Clarity notices
        </h2>
        <p className="mt-5 text-[16px] leading-relaxed text-muted-canvas md:text-lg">
          Not generic journaling summaries—specific echoes from your voice that explain why your mind feels noisy.
        </p>
      </div>

      <ul className="mt-14 grid gap-5 md:grid-cols-3">
        {patterns.map(({ title, body, tag }) => (
          <li
            key={title}
            className="relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-gradient-to-br from-surface via-surface to-zinc-950 p-6 shadow-[0_20px_50px_-36px_rgb(120_113_108_/_0.22)] ring-1 ring-rose-100/[0.07] md:p-7"
          >
            <span className="w-fit rounded-full bg-accent-deep/25 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent">
              {tag}
            </span>
            <h3 className="mt-4 text-lg font-bold tracking-tight text-white">{title}</h3>
            <p className="mt-3 flex-1 text-[15px] leading-relaxed text-zinc-300">{body}</p>
          </li>
        ))}
      </ul>

      <p className="mx-auto mt-12 max-w-xl text-center text-[14px] leading-relaxed text-muted-canvas">
        Emotional clarity means hearing the signal—not collecting more notes you never revisit.
      </p>
    </Section>
  )
}
