import { Link } from 'react-router-dom'

function siteHashHref(hash: string) {
  return hash.startsWith('#') ? `/${hash}` : hash
}

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'What we notice', href: '#what-clarity-notices' },
    { label: 'Realizations', href: '#realizations' },
    { label: 'Pricing', href: '#waitlist' },
    { label: 'FAQ', href: '/privacy' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' },
  ],
}

const social = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://tiktok.com',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-surface px-6 pt-16 pb-10 text-zinc-300">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[minmax(0,1.4fr)_1fr_1fr_1fr] md:gap-8">
        <div className="max-w-sm">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-accent-deep to-accent-bright ring-1 ring-white/20">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14a3 3 0 003-3V5a3 3 0 10-6 0v6a3 3 0 003 3z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 10a7 7 0 01-14 0M12 18v3" />
              </svg>
            </span>
            <span className="text-lg font-bold text-white">Clarity</span>
          </div>
          <p className="mt-5 text-[15px] leading-relaxed">
            Your private AI voice journal for mental clarity and personal growth.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400">Product</p>
          <ul className="mt-5 space-y-3">
            {footerLinks.Product.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href.startsWith('#') ? siteHashHref(link.href) : link.href}
                  className="text-[15px] text-zinc-300 transition hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400">Company</p>
          <ul className="mt-5 space-y-3">
            {footerLinks.Company.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-[15px] text-zinc-300 transition hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400">Follow</p>
          <ul className="mt-5 flex flex-wrap gap-3">
            {social.map(({ label, href, icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-zinc-300 transition hover:border-accent/40 hover:text-white"
                  aria-label={label}
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-sm md:flex-row md:items-start">
        <p>© {new Date().getFullYear()} Clarity. All rights reserved.</p>
        <div className="flex flex-col items-center gap-4 md:items-end">
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end" aria-label="Legal">
            <Link to="/privacy" className="text-zinc-400 transition hover:text-white">
              Privacy
            </Link>
            <Link to="/terms" className="text-zinc-400 transition hover:text-white">
              Terms
            </Link>
            <Link to="/disclaimer" className="text-zinc-400 transition hover:text-white">
              Disclaimer
            </Link>
          </nav>
          <p className="text-zinc-400">
            Made with <span className="text-accent">💜</span> for your mind.
          </p>
        </div>
      </div>
    </footer>
  )
}
