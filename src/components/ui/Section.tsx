import type { HTMLAttributes, ReactNode } from 'react'

type SectionProps = {
  id?: string
  children: ReactNode
  className?: string
} & Omit<HTMLAttributes<HTMLElement>, 'id' | 'className' | 'children'>

export function Section({ id, children, className = '', ...rest }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 px-4 py-20 sm:px-6 md:py-28 ${className}`}
      {...rest}
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl">{children}</div>
    </section>
  )
}
