import posthog from 'posthog-js'

export function captureEvent(event: string, properties?: Record<string, unknown>): void {
  if (!posthog.__loaded) return
  posthog.capture(event, properties)
}
