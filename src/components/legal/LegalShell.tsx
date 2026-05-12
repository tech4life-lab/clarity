import type { ReactNode } from 'react'
import { Footer } from '../Footer'
import { Header } from '../Header'

type LegalShellProps = {
  title: string
  children: ReactNode
}

export function LegalShell({ title, children }: LegalShellProps) {
  return (
    <div className="relative min-h-svh bg-canvas antialiased">
      <Header />
      <main id="main" className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
        <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-muted-canvas">Legal</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">{title}</h1>
        <div className="mt-10 space-y-5 text-[15px] leading-relaxed text-muted-canvas">{children}</div>
      </main>
      <Footer />
    </div>
  )
}
