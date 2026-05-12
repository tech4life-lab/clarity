import { useMemo } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { PostHogProvider } from '@posthog/react'
import App from './App.tsx'

function posthogApiKey(): string {
  const fromPublic = import.meta.env.VITE_PUBLIC_POSTHOG_KEY
  const fromLegacy = import.meta.env.VITE_POSTHOG_KEY
  const trimmedPublic = typeof fromPublic === 'string' ? fromPublic.trim() : ''
  const trimmedLegacy = typeof fromLegacy === 'string' ? fromLegacy.trim() : ''
  return trimmedPublic || trimmedLegacy
}

function posthogApiHost(): string {
  const fromPublic = import.meta.env.VITE_PUBLIC_POSTHOG_HOST
  const fromLegacy = import.meta.env.VITE_POSTHOG_HOST
  if (typeof fromPublic === 'string' && fromPublic.trim()) return fromPublic.trim()
  if (typeof fromLegacy === 'string' && fromLegacy.trim()) return fromLegacy.trim()
  return 'https://us.i.posthog.com'
}

export function AppProviders() {
  const key = posthogApiKey()
  const options = useMemo(
    () => ({
      api_host: posthogApiHost(),
      defaults: '2026-01-30' as const,
      persistence: 'localStorage+cookie' as const,
      autocapture: false,
      capture_pageview: true,
    }),
    [],
  )

  const routed = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )

  if (!key) return routed

  return (
    <PostHogProvider apiKey={key} options={options}>
      {routed}
    </PostHogProvider>
  )
}
