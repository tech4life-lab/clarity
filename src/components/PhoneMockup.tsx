const bars = [28, 44, 36, 52, 40, 58, 34, 48, 42, 54, 38, 50]

export function PhoneMockup() {
  return (
    <div className="relative mx-auto flex w-full max-w-[340px] justify-center lg:mx-0 lg:justify-end">
      <div
        aria-hidden
        className="absolute -bottom-10 left-1/2 h-28 w-[90%] max-w-[280px] -translate-x-1/2 rounded-[100%] bg-accent-deep/35 blur-3xl"
      />
      <div className="relative w-[272px] shrink-0 sm:w-[300px]">
        <div className="rounded-[2.5rem] border border-white/10 bg-zinc-950 p-[11px] shadow-[0_0_0_1px_rgb(255_255_255/_0.05),0_48px_120px_-36px_rgb(109_40_217/_0.65)]">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-zinc-900 via-surface to-black">
            <div className="flex justify-center pt-3 pb-1">
              <div className="h-[26px] w-[92px] rounded-full bg-black/70 ring-1 ring-white/10" />
            </div>

            <div className="px-5 pb-8 pt-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[13px] font-semibold tracking-tight text-white">
                    Good evening, Alex
                  </p>
                  <p className="mt-1 text-[12px] text-zinc-400">Tuesday · 8:42 PM</p>
                </div>
                <div className="shrink-0 rounded-full bg-accent-deep/25 px-3 py-1 text-[11px] font-semibold text-accent ring-1 ring-accent/40">
                  Day 3 streak
                </div>
              </div>

              <div className="mt-10 flex flex-col items-center">
                <div className="relative flex h-[148px] w-[148px] items-center justify-center rounded-full bg-gradient-to-b from-accent-deep/40 to-accent-deep/10 ring-2 ring-accent/45 shadow-[0_0_60px_-12px_rgb(167_139_250_/_0.75)]">
                  <div className="absolute inset-5 flex items-end justify-center gap-0.5 opacity-90">
                    {bars.map((h, i) => (
                      <span
                        key={i}
                        className="w-[3px] rounded-full bg-gradient-to-t from-accent-deep to-accent"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="relative flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white text-accent-deep shadow-lg">
                    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
                      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" />
                    </svg>
                  </div>
                </div>
                <p className="mt-5 text-[15px] font-semibold tracking-tight text-white">Tap to talk</p>
                <p className="mt-1 text-center text-[12px] text-zinc-400">
                  Your voice stays private on-device first.
                </p>
              </div>

              <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4 ring-1 ring-white/[0.04]">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                    Latest insight
                  </p>
                  <span className="rounded-full bg-accent-deep/30 px-2 py-0.5 text-[10px] font-semibold text-accent">
                    AI
                  </span>
                </div>
                <p className="mt-3 text-[15px] font-semibold leading-snug tracking-tight text-white">
                  You&apos;re not stuck.
                  <span className="text-zinc-300"> You&apos;re overloaded.</span>
                </p>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-[11px] text-zinc-400">
                    <span>Clarity Score</span>
                    <span className="font-semibold text-white">62</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-zinc-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-accent-deep to-accent"
                      style={{ width: '62%' }}
                    />
                  </div>
                  <p className="mt-1 text-right text-[10px] text-zinc-500">out of 100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
