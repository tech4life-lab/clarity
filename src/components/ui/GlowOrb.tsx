import type { HTMLAttributes } from 'react'

export function GlowOrb({
  className = '',
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full bg-accent opacity-[0.35] blur-[120px] ${className}`}
      {...props}
    />
  )
}
