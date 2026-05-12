import { Footer } from '../components/Footer'
import { FounderNote } from '../components/FounderNote'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { HowItWorks } from '../components/HowItWorks'
import { LatestInsight } from '../components/LatestInsight'
import { PrivacyStrip } from '../components/PrivacyStrip'
import { RealizationsSection } from '../components/RealizationsSection'
import { ShowcaseSplit } from '../components/ShowcaseSplit'
import { WaitlistSignup } from '../components/WaitlistSignup'
import { WhatClarityNotices } from '../components/WhatClarityNotices'

export function LandingPage() {
  return (
    <div className="relative min-h-svh bg-canvas antialiased">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_55%_42%_at_50%_-10%,rgb(167_139_250_/_0.13),transparent)]" aria-hidden />
      <div
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_50%_35%_at_90%_95%,rgb(254_215_170_/_0.14),transparent)]"
        aria-hidden
      />

      <div className="relative">
        <a
          href="#main"
          className="absolute left-[-9999px] top-4 z-[100] rounded-xl bg-ink px-4 py-2 text-[14px] font-semibold text-white shadow-lg transition focus:left-6 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas"
        >
          Skip to content
        </a>

        <Header />

        <main id="main">
          <Hero />
          <PrivacyStrip />
          <LatestInsight />
          <HowItWorks />
          <WhatClarityNotices />
          <RealizationsSection />
          <ShowcaseSplit />
          <WaitlistSignup />
        </main>

        <FounderNote />
        <Footer />
      </div>
    </div>
  )
}
