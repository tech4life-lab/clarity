import { GlowOrb } from './ui/GlowOrb'
import { PrimaryButton } from './ui/PrimaryButton'
import { SecondaryButton } from './ui/SecondaryButton'
import { PhoneMockup } from './PhoneMockup'

const checklist = [
  'Speak freely',
  'Get AI insights',
  'See your patterns',
  'Grow daily',
]

function CheckIcon() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-deep/25 ring-1 ring-accent/40">
      <svg viewBox="0 0 24 24" className="h-3 w-3 text-accent" fill="none" stroke="currentColor" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  )
}

function Stars() {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
          <path d="M12 2l2.9 6.62L22 9.27l-5 4.88L18.18 22 12 18.6 5.82 22 7 14.15l-5-4.88 7.1-1.65z" />
        </svg>
      ))}
    </div>
  )
}

export function Hero() {
  return (
    <div className="overflow-x-hidden px-4 pb-14 pt-8 sm:px-6 md:pb-20 md:pt-14">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white/[0.08] bg-surface shadow-[0_60px_120px_-48px_rgb(24_24_27_/_0.35)] sm:rounded-[2rem] md:rounded-[2.25rem]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-rose-950/[0.12] via-transparent to-accent-deep/[0.08]"
        />
        <GlowOrb className="-left-24 top-10 h-72 w-72 opacity-40 md:h-[22rem] md:w-[22rem]" />
        <GlowOrb className="right-[-100px] top-32 h-80 w-80 bg-accent-bright opacity-20 md:right-10" />

        <div className="relative z-10 grid min-w-0 items-center gap-10 px-5 py-12 sm:gap-14 sm:px-8 sm:py-14 md:gap-12 md:px-12 md:py-16 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-8">
          <div className="min-w-0 max-w-xl">
            <p className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-300 sm:px-4 sm:text-[12px]">
              Your private AI voice journal
            </p>

            <h1 className="mt-6 text-[2rem] font-bold leading-[1.08] tracking-tight text-white sm:mt-7 sm:text-5xl md:text-[3.25rem] lg:text-[3.5rem]">
              Talk it out.
              <span className="mt-1 block bg-gradient-to-r from-accent via-[#e9d5ff] to-[#c4b5fd] bg-clip-text text-transparent">
                Get clarity back.
              </span>
            </h1>

            <p className="mt-6 max-w-[44ch] text-base leading-relaxed text-zinc-300 sm:mt-8 sm:text-lg md:text-xl">
              <span className="font-semibold text-zinc-100">Your thoughts are noisy.</span> Clarity helps you hear the
              real signal underneath them—before stress, overthinking, and pressure take over.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] font-medium text-zinc-100 sm:text-[15px]">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex w-full min-w-0 flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-stretch">
              <PrimaryButton
                href="/#waitlist"
                analyticsPlacement="hero_primary"
                className="min-h-[48px] w-full justify-center px-8 sm:min-h-[52px] sm:w-auto"
              >
                Get Early Access
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </PrimaryButton>
              <SecondaryButton
                href="/#how-it-works"
                analyticsPlacement="hero_secondary"
                variant="on-dark"
                className="min-h-[48px] w-full justify-center sm:min-h-[52px] sm:w-auto"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
                See How It Works
              </SecondaryButton>
            </div>

            <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.06] pt-8 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 sm:pt-10">
              <Stars />
              <p className="text-[13px] font-medium leading-snug text-zinc-300 sm:text-[14px]">
                Strong feedback from private beta ·{' '}
                <span className="text-white">1,000+</span> people waiting for early access to emotional clarity
              </p>
            </div>
          </div>

          <div className="flex min-w-0 justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </div>
  )
}
