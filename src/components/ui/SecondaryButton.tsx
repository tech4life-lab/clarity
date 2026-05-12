import type { ReactNode } from 'react'
import { captureEvent } from '../../lib/analytics'

type Variant = 'on-dark' | 'on-light'

type SecondaryButtonProps = {
  href?: string
  type?: 'button' | 'submit'
  children: ReactNode
  className?: string
  variant?: Variant
  analyticsPlacement?: string
}

const variants: Record<Variant, string> = {
  'on-dark':
    'border-white/20 bg-white/[0.04] text-white hover:border-white/35 hover:bg-white/[0.07] focus-visible:ring-offset-surface',
  'on-light':
    'border-zinc-300 bg-white text-ink shadow-sm hover:border-zinc-400 hover:bg-zinc-50 focus-visible:ring-offset-canvas',
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl border px-7 py-3.5 text-[15px] font-semibold tracking-tight transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2'

function trackCta(placement?: string) {
  if (placement) captureEvent('cta_clicked', { placement })
}

export function SecondaryButton({
  href,
  type = 'button',
  children,
  className = '',
  variant = 'on-dark',
  analyticsPlacement,
}: SecondaryButtonProps) {
  const merged = `${base} ${variants[variant]} ${className}`.trim()

  if (href) {
    return (
      <a
        href={href}
        className={merged}
        onClick={() => trackCta(analyticsPlacement)}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={merged} onClick={() => trackCta(analyticsPlacement)}>
      {children}
    </button>
  )
}
