import posthog from 'posthog-js'

let initialized = false

export function initAnalytics(): void {
  const key = import.meta.env.VITE_POSTHOG_KEY?.trim()
  if (!key || initialized) return

  initialized = true
  posthog.init(key, {
    api_host: import.meta.env.VITE_POSTHOG_HOST?.trim() || 'https://us.i.posthog.com',
    persistence: 'localStorage+cookie',
    autocapture: false,
    capture_pageview: true,
  })
}

export function captureEvent(event: string, properties?: Record<string, unknown>): void {
  const key = import.meta.env.VITE_POSTHOG_KEY?.trim()
  if (!key) return

  initAnalytics()
  posthog.capture(event, properties)
}
