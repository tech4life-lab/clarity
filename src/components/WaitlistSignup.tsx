import { type FormEvent, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { captureEvent } from '../lib/analytics'
import { getSupabaseBrowserClient, getSupabaseConfigHint } from '../lib/supabase'
import { GlowOrb } from './ui/GlowOrb'
import { PrimaryButton } from './ui/PrimaryButton'

const trust = ['Early access', 'No spam, ever', 'Cancel anytime']

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function sanitizeSource(raw: string | null): string | null {
  if (raw == null) return null
  const s = raw.trim().slice(0, 64)
  if (!s) return null
  if (!/^[a-zA-Z0-9_-]+$/.test(s)) return null
  return s
}

function WaitlistPhone({ success }: { success: boolean }) {
  return (
    <div className="relative mx-auto w-[220px] shrink-0">
      <div
        aria-hidden
        className="absolute -bottom-6 left-1/2 h-20 w-[88%] -translate-x-1/2 rounded-[100%] bg-accent-deep/30 blur-2xl"
      />
      <div className="relative rounded-[2rem] border border-white/10 bg-zinc-950 p-[9px] shadow-[0_28px_70px_-36px_rgb(109_40_217_/_0.55)]">
        <div className="overflow-hidden rounded-[1.65rem] bg-gradient-to-b from-zinc-900 to-black px-5 pb-8 pt-8">
          <div className="flex justify-center pb-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-deep/25 ring-2 ring-accent/50">
              {success ? (
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-accent" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-7 w-7 text-accent" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              )}
            </div>
          </div>
          <p className="text-center text-lg font-bold tracking-tight text-white">
            {success ? "You're on the list!" : 'Almost there'}
          </p>
          <p className="mt-2 text-center text-[13px] leading-relaxed text-zinc-400">
            {success
              ? "We'll notify you when Clarity is ready."
              : 'Add your email on this page—we will save your spot.'}
          </p>
        </div>
      </div>
    </div>
  )
}

type FormFeedback = 'idle' | 'invalid' | 'duplicate' | 'error' | 'success'

export function WaitlistSignup() {
  const [searchParams] = useSearchParams()
  const source = useMemo(() => sanitizeSource(searchParams.get('source')), [searchParams])

  const [email, setEmail] = useState('')
  const [feedback, setFeedback] = useState<FormFeedback>('idle')
  const [loading, setLoading] = useState(false)
  const [devErrorText, setDevErrorText] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const trimmed = email.trim()
    const valid = EMAIL_RE.test(trimmed)

    if (!valid) {
      setFeedback('invalid')
      return
    }

    const client = getSupabaseBrowserClient()
    if (!client) {
      setFeedback('error')
      setDevErrorText(import.meta.env.DEV ? getSupabaseConfigHint() : null)
      captureEvent('waitlist_signup_error', { reason: 'config', source: source ?? undefined })
      return
    }

    setLoading(true)
    setFeedback('idle')
    setDevErrorText(null)

    const normalized = trimmed.toLowerCase()

    captureEvent('waitlist_signup_started', { source: source ?? undefined })

    const { error } = await client.from('waitlist').insert({
      email: normalized,
      source: source ?? null,
    })

    setLoading(false)

    if (!error) {
      setFeedback('success')
      captureEvent('waitlist_signup_success', { source: source ?? undefined })
      return
    }

    const dup =
      error.code === '23505' ||
      (typeof error.message === 'string' && error.message.toLowerCase().includes('duplicate'))

    if (dup) {
      setFeedback('duplicate')
      captureEvent('waitlist_signup_error', { reason: 'duplicate', source: source ?? undefined })
      return
    }

    setFeedback('error')
    captureEvent('waitlist_signup_error', {
      reason: 'unknown',
      source: source ?? undefined,
      code: error.code ?? undefined,
    })

    if (import.meta.env.DEV) {
      console.error('[waitlist signup]', error)
      const parts = [error.code, error.message, error.details].filter(Boolean)
      setDevErrorText(parts.length ? parts.join(' · ') : 'Unknown Supabase error')
    }
  }

  return (
    <section id="waitlist" className="relative px-4 pb-24 pt-8 sm:px-6 md:pb-32 md:pt-12">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white/[0.08] bg-surface px-5 py-10 shadow-[0_48px_120px_-48px_rgb(109_40_217_/_0.35)] sm:rounded-[2rem] sm:px-8 sm:py-12 md:px-12 md:py-14 lg:px-14 lg:py-16">
        <GlowOrb className="right-0 top-1/2 h-72 w-72 translate-x-1/3 -translate-y-1/2 opacity-25" />

        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-16">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-accent">Waitlist</p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-[2.125rem] md:leading-tight">
              Be the first to experience Clarity.
            </h2>
            <p className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-zinc-300 md:text-lg">
              Join early access and help shape emotionally intelligent voice journaling—built for clarity, not noise.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
              noValidate
            >
              <label htmlFor="waitlist-email" className="sr-only">
                Email address
              </label>
              <input
                id="waitlist-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@email.com"
                value={email}
                onChange={(ev) => {
                  setEmail(ev.target.value)
                  if (feedback !== 'idle') setFeedback('idle')
                  setDevErrorText(null)
                }}
                className="min-h-[52px] w-full flex-1 rounded-xl border border-white/10 bg-white/[0.05] px-5 py-3 text-[15px] text-white placeholder:text-zinc-600 outline-none ring-0 transition focus:border-accent/50 focus:ring-2 focus:ring-accent/35 sm:max-w-md"
              />
              <PrimaryButton type="submit" disabled={loading} className="min-h-[52px] w-full shrink-0 justify-center sm:w-auto">
                {loading ? 'Saving…' : 'Get Early Access'}
              </PrimaryButton>
            </form>

            <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8">
              {trust.map((item) => (
                <li key={item} className="flex items-center gap-2 text-[14px] font-medium text-zinc-300">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-deep/30 text-accent ring-1 ring-accent/40">
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {feedback === 'invalid' && (
              <p className="mt-4 text-sm text-red-400/90" role="status">
                Enter a valid email so we know where to reach you.
              </p>
            )}
            {feedback === 'duplicate' && (
              <p className="mt-4 text-sm text-zinc-300" role="status">
                You're already on the list.
              </p>
            )}
            {feedback === 'error' && (
              <>
                <p className="mt-4 text-sm text-red-400/90" role="status">
                  Something went wrong. Please try again.
                </p>
                {import.meta.env.DEV && devErrorText ? (
                  <p className="mt-2 max-w-xl font-mono text-[11px] leading-snug text-zinc-500" role="status">
                    {devErrorText}
                  </p>
                ) : null}
              </>
            )}
            {feedback === 'success' && (
              <p className="mt-4 text-sm font-medium text-accent" role="status">
                You're on the list. We'll notify you when Clarity is ready.
              </p>
            )}
          </div>

          <WaitlistPhone success={feedback === 'success'} />
        </div>
      </div>
    </section>
  )
}
