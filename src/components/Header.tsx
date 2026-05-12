import { Link } from 'react-router-dom'
import { captureEvent } from '../lib/analytics'

const navLinks = [
  { href: '#how-it-works', label: 'How it works' },
  { href: '#features', label: 'Features' },
  { href: '#what-clarity-notices', label: 'What we notice' },
  { href: '#realizations', label: 'Realizations' },
  { href: '#why-clarity', label: 'Why Clarity?' },
]

function siteHashHref(hash: string) {
  return hash.startsWith('#') ? `/${hash}` : hash
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-canvas/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:gap-6 sm:px-6 sm:py-4">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas sm:gap-2.5"
        >
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-deep to-accent-bright shadow-[0_8px_28px_-8px_rgb(124_58_237_/_0.55)] ring-1 ring-white/20"
            aria-hidden
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 14a3 3 0 003-3V5a3 3 0 10-6 0v6a3 3 0 003 3z" />
              <path d="M19 10a7 7 0 01-14 0M12 18v3" />
            </svg>
          </span>
          <span className="truncate text-lg font-bold tracking-tight text-ink">Clarity</span>
        </Link>

        <nav className="hidden items-center gap-5 md:flex lg:gap-8 xl:gap-10" aria-label="Site">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={siteHashHref(href)}
              className="whitespace-nowrap rounded text-[14px] font-medium text-muted-canvas transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas lg:text-[15px]"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href="/#waitlist"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl bg-accent-deep px-3 py-2.5 text-[13px] font-semibold text-white shadow-[0_10px_36px_-12px_var(--color-glow)] ring-1 ring-white/10 transition hover:bg-accent-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas sm:px-5 sm:text-[14px]"
            onClick={() => captureEvent('cta_clicked', { placement: 'header_compact' })}
          >
            <span className="hidden min-[400px]:inline">Get Early Access</span>
            <span className="min-[400px]:hidden">Access</span>
          </a>

          <details className="relative md:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-xl border border-zinc-200/90 bg-white/90 text-ink shadow-sm backdrop-blur-sm [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Open menu</span>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </summary>
            <div className="absolute right-0 top-full z-50 mt-2 w-[min(100vw-2rem,280px)] rounded-xl border border-zinc-200/90 bg-white/95 p-2 shadow-xl backdrop-blur-md">
              <nav className="flex flex-col gap-0.5" aria-label="Mobile">
                {navLinks.map(({ href, label }) => (
                  <a
                    key={href}
                    href={siteHashHref(href)}
                    className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-ink hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {label}
                  </a>
                ))}
                <a
                  href="/#waitlist"
                  className="mt-1 rounded-lg bg-accent-deep px-3 py-2.5 text-center text-[15px] font-semibold text-white hover:bg-accent-bright"
                  onClick={() => captureEvent('cta_clicked', { placement: 'header_mobile_menu' })}
                >
                  Get Early Access
                </a>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  )
}
