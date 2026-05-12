import { GlowOrb } from './ui/GlowOrb'

export function LatestInsight() {
  return (
    <section
      id="why-clarity"
      className="relative scroll-mt-24 px-4 py-20 sm:px-6 md:py-28"
      aria-labelledby="latest-insight-heading"
    >
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/[0.08] bg-surface px-6 py-12 shadow-[0_40px_100px_-48px_rgb(109_40_217_/_0.35)] sm:rounded-[2rem] sm:px-10 sm:py-14 md:px-16 md:py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-rose-950/[0.14] via-transparent to-accent-deep/[0.07]"
        />
        <GlowOrb className="left-1/2 top-0 h-48 w-[120%] -translate-x-1/2 -translate-y-1/2 opacity-30" />

        <div className="relative z-10 text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-accent">
            Latest insight
          </p>
          <h2
            id="latest-insight-heading"
            className="mt-6 text-[1.625rem] font-bold leading-snug tracking-tight text-white sm:text-3xl md:text-4xl md:leading-tight"
          >
            &ldquo;You&apos;re not stuck.
            <span className="block text-zinc-400">You&apos;re overloaded.&rdquo;</span>
          </h2>
          <p className="mx-auto mt-8 max-w-[52ch] text-lg leading-relaxed text-zinc-300">
            Clarity surfaces the emotional pattern behind your voice—not generic affirmations. Every
            reflection is grounded in what you actually said, so you can finally trust what you hear
            back.
          </p>
        </div>
      </div>
    </section>
  )
}
