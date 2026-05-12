import type { MouseEvent, ReactNode } from 'react'
import { captureEvent } from '../../lib/analytics'

type PrimaryButtonProps = {
  href?: string
  type?: 'button' | 'submit'
  children: ReactNode
  className?: string
  disabled?: boolean
  /** If set, fires `cta_clicked` with `{ placement }` before navigation (href) or with click (button). */
  analyticsPlacement?: string
}

const baseClass =
  'inline-flex items-center justify-center gap-2 rounded-xl bg-accent-deep px-7 py-3.5 text-[15px] font-semibold tracking-tight text-white shadow-[0_12px_48px_-12px_var(--color-glow)] ring-1 ring-white/10 transition duration-300 hover:bg-accent-bright hover:shadow-[0_16px_56px_-10px_rgb(124_58_237_/_0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:pointer-events-none disabled:opacity-55'

function trackCta(placement?: string) {
  if (placement) captureEvent('cta_clicked', { placement })
}

export function PrimaryButton({
  href,
  type = 'button',
  children,
  className = '',
  disabled = false,
  analyticsPlacement,
}: PrimaryButtonProps) {
  const anchorDisabledClass = href && disabled ? 'pointer-events-none opacity-55' : ''
  const merged = `${baseClass} ${anchorDisabledClass} ${className}`.trim()

  if (href) {
    return (
      <a
        href={href}
        className={merged}
        aria-disabled={disabled}
        onClick={(e: MouseEvent<HTMLAnchorElement>) => {
          if (disabled) {
            e.preventDefault()
            return
          }
          trackCta(analyticsPlacement)
        }}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={merged} disabled={disabled} onClick={() => trackCta(analyticsPlacement)}>
      {children}
    </button>
  )
}
