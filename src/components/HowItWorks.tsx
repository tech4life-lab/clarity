import { Section } from './ui/Section'

const steps = [
  {
    title: 'Speak',
    emoji: '🎙️',
    body: 'Dump your thoughts freely. No prompts, no pressure—just your voice and the truth of the moment.',
  },
  {
    title: 'Reflect',
    emoji: '🧠',
    body: 'AI finds emotional patterns underneath the noise—what triggered you, what soothed you, what repeats.',
  },
  {
    title: 'Improve',
    emoji: '📈',
    body: 'Track clarity over time with gentle streaks and insight cards that remember what actually helped.',
  },
]

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-accent-deep">
          How it works
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink md:text-4xl">
          Three calm steps. One honest conversation.
        </h2>
      </div>

      <ul className="mt-14 grid gap-6 md:grid-cols-3">
        {steps.map(({ title, emoji, body }) => (
          <li
            key={title}
            className="rounded-2xl border border-white/[0.08] bg-surface p-8 shadow-[0_24px_60px_-40px_rgb(24_24_27_/_0.35)] ring-1 ring-white/[0.04]"
          >
            <span className="text-2xl" aria-hidden>
              {emoji}
            </span>
            <h3 className="mt-4 text-xl font-bold tracking-tight text-white">{title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-zinc-300">{body}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
