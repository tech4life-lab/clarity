type StageId = 'recording' | 'analysing' | 'insight'

type Stage = {
  id: StageId
  label: string
  tint: string
}

const stages: Stage[] = [
  { id: 'recording', label: 'Recording', tint: 'from-violet-600/30 to-fuchsia-600/10' },
  { id: 'analysing', label: 'Analysing', tint: 'from-indigo-600/30 to-sky-600/10' },
  { id: 'insight', label: 'Your insight', tint: 'from-accent-deep/40 to-accent/15' },
]

const recBars = [42, 68, 52, 76, 48, 72, 56, 64, 44, 58, 50, 70]

function RecordingUI() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-white/[0.08] bg-black/55 p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">Rec</span>
        </div>
        <span className="rounded-md bg-white/[0.06] px-2 py-0.5 font-mono text-[11px] tabular-nums text-zinc-200">
          0:47
        </span>
      </div>
      <div className="mt-4 flex flex-1 flex-col justify-center gap-2">
        <div className="flex h-14 items-end justify-center gap-0.5 px-1">
          {recBars.map((h, i) => (
            <span
              key={i}
              className="w-[3px] rounded-full bg-gradient-to-t from-accent-deep to-accent opacity-95"
              style={{
                height: `${h}%`,
                transformOrigin: 'bottom',
                animation: 'clarity-bar 1.1s ease-in-out infinite',
                animationDelay: `${i * 0.08}s`,
              }}
            />
          ))}
        </div>
        <p className="text-center text-[11px] font-medium text-zinc-300">
          Listening… speak like no one&apos;s grading you.
        </p>
      </div>
      <div className="mt-2 rounded-lg border border-white/[0.06] bg-white/[0.03] px-2 py-2">
        <p className="text-[10px] leading-snug text-zinc-400">
          <span className="font-semibold text-zinc-200">Live transcript · off</span>
          <span className="block text-zinc-500">Raw audio only until you choose otherwise.</span>
        </p>
      </div>
    </div>
  )
}

function AnalysingUI() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-white/[0.08] bg-black/55 p-3">
      <p className="text-[10px] font-bold uppercase tracking-wider text-sky-400">Analysis</p>
      <p className="mt-2 text-[12px] font-semibold leading-tight text-white">Finding emotional threads</p>
      <p className="mt-1 text-[10px] leading-snug text-zinc-400">
        Mapping tone shifts, repeats, and spikes—not keywords for ads.
      </p>
      <div className="mt-3 space-y-2">
        <div className="h-1.5 overflow-hidden rounded-full bg-zinc-800">
          <div className="h-full w-[72%] animate-pulse rounded-full bg-gradient-to-r from-sky-600 to-accent" />
        </div>
        <p className="text-[10px] text-zinc-500">Processing · ~12s remaining</p>
      </div>
      <div className="mt-auto flex flex-wrap gap-1 pt-3">
        {['Stress spike', 'Sleep', 'Work load', 'Guilt language'].map((chip) => (
          <span
            key={chip}
            className="rounded-md border border-white/[0.08] bg-white/[0.05] px-2 py-0.5 text-[9px] font-semibold text-zinc-300"
          >
            {chip}
          </span>
        ))}
      </div>
    </div>
  )
}

function InsightUI() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-accent/25 bg-gradient-to-b from-accent-deep/15 to-black/60 p-3 ring-1 ring-accent/20">
      <div className="flex items-center justify-between gap-2">
        <p className="text-[10px] font-bold uppercase tracking-wider text-accent">Insight ready</p>
        <span className="rounded-full bg-accent-deep/40 px-2 py-0.5 text-[9px] font-bold text-accent">New</span>
      </div>
      <p className="mt-3 text-[12px] font-bold leading-snug text-white">
        You&apos;re not avoiding the task—you&apos;re avoiding the feeling underneath it.
      </p>
      <div className="mt-3 rounded-lg border border-white/[0.06] bg-black/40 p-2">
        <p className="text-[10px] leading-relaxed text-zinc-300">
          Try a 10‑minute walk before reopening that email thread. Your voice steadied the last time you
          moved first.
        </p>
      </div>
      <p className="mt-auto pt-3 text-[9px] text-zinc-500">Grounded in 6 entries this week · Clarity Score trending up</p>
    </div>
  )
}

function StageScreen({ id }: { id: StageId }) {
  switch (id) {
    case 'recording':
      return <RecordingUI />
    case 'analysing':
      return <AnalysingUI />
    default:
      return <InsightUI />
  }
}

function PipelinePhones() {
  const rotations = ['-rotate-3 md:-rotate-7', 'rotate-0 md:rotate-0', 'rotate-3 md:rotate-7']
  const zLayer = ['z-[1]', 'z-[2]', 'z-[3]']

  return (
    <div className="relative mx-auto flex flex-col items-center gap-10 pt-12 pb-8 md:flex-row md:justify-center md:gap-0 md:pt-14">
      {stages.map((stage, i) => (
        <div
          key={stage.id}
          className={`relative w-[min(100%,168px)] shrink-0 sm:w-[148px] md:w-[162px] ${rotations[i]} ${zLayer[i]} ${
            i > 0 ? 'md:-ml-[4.25rem]' : ''
          }`}
        >
          <div
            className={`rounded-[1.75rem] border border-white/10 bg-gradient-to-b ${stage.tint} p-1.5 shadow-xl ring-1 ring-white/[0.05]`}
          >
            <div className="overflow-hidden rounded-[1.35rem] bg-zinc-950">
              <div className="flex justify-center pt-2 pb-1">
                <div className="h-4 w-14 rounded-full bg-black/70 ring-1 ring-white/10" />
              </div>
              <div className={`h-[196px] bg-gradient-to-b ${stage.tint} px-2.5 pb-2.5 pt-2 md:h-[210px]`}>
                <p className="mb-2 text-center text-[9px] font-bold uppercase tracking-[0.14em] text-zinc-400">
                  {stage.label}
                </p>
                <div className="h-[calc(100%-1.25rem)]">
                  <StageScreen id={stage.id} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const people = [
  {
    name: 'James T.',
    role: 'Founder',
    quote: "It's like having a brutally honest coach in my pocket—without the ego.",
    initials: 'JT',
    gradient: 'from-violet-500 to-purple-700',
  },
  {
    name: 'Sarah M.',
    role: 'Designer',
    quote:
      'I realized I kept venting about the same stress patterns every day without noticing—I thought I was "fine."',
    initials: 'SM',
    gradient: 'from-sky-400 to-blue-700',
  },
  {
    name: 'David K.',
    role: 'Engineer',
    quote:
      'One insight called out that I delay hard conversations until Friday night. Now I name them Wednesday mornings instead.',
    initials: 'DK',
    gradient: 'from-emerald-400 to-teal-700',
  },
]

export function ShowcaseSplit() {
  return (
    <section id="features" className="px-4 py-20 sm:px-6 md:py-28" aria-labelledby="showcase-heading">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2 lg:gap-10">
        <div className="flex flex-col rounded-[1.5rem] border border-white/[0.08] bg-surface-muted px-5 pb-8 pt-8 shadow-[0_32px_80px_-40px_rgb(24_24_27_/_0.45)] ring-1 ring-white/[0.04] backdrop-blur-sm sm:rounded-[2rem] sm:px-8 sm:pb-12 sm:pt-10 md:px-10 md:pb-12 md:pt-12">
          <h2 id="showcase-heading" className="text-xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl">
            See Clarity in action
          </h2>
          <p className="mt-3 max-w-[42ch] text-[15px] leading-relaxed text-zinc-300">
            A guided preview of the flow: capture voice, watch analysis, open an insight card grounded in what you
            actually said—no stock screenshots required.
          </p>
          <PipelinePhones />
          <p className="mt-2 text-center text-[12px] text-zinc-500 md:text-left">
            Pixel-built previews · swap in real product shots or a looping demo when you&apos;re ready.
          </p>
        </div>

        <div className="flex flex-col rounded-[1.5rem] border border-white/[0.08] bg-surface-muted px-5 py-8 shadow-[0_32px_80px_-40px_rgb(24_24_27_/_0.45)] ring-1 ring-white/[0.04] backdrop-blur-sm sm:rounded-[2rem] sm:px-8 sm:py-10 md:px-10 md:py-12">
          <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl">Loved by early users</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-zinc-300">
            Specific moments from beta testers—patterns they didn&apos;t see until Clarity reflected them back.
          </p>

          <ul className="mt-10 flex flex-col gap-6">
            {people.map((p) => (
              <li
                key={p.name}
            className="flex flex-col gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4 backdrop-blur-md sm:flex-row sm:p-5"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${p.gradient} text-sm font-bold text-white shadow-lg`}
                  aria-hidden
                >
                  {p.initials}
                </div>
                <div>
                  <p className="text-[15px] font-semibold leading-relaxed text-zinc-100">&ldquo;{p.quote}&rdquo;</p>
                  <p className="mt-3 text-sm font-semibold text-white">{p.name}</p>
                  <p className="text-sm text-zinc-400">{p.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
