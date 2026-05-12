import { createClient, type SupabaseClient } from '@supabase/supabase-js'

let browserClient: SupabaseClient | null = null

/** Supabase anon/public keys are JWTs: header.payload.signature */
function looksLikeSupabaseAnonJwt(key: string): boolean {
  const parts = key.split('.')
  return parts.length === 3 && parts.every((segment) => segment.length > 0)
}

export function getSupabaseBrowserClient(): SupabaseClient | null {
  const url = import.meta.env.VITE_SUPABASE_URL
  const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

  if (!url?.trim() || !anonKey?.trim()) {
    return null
  }

  const trimmedKey = anonKey.trim()

  if (import.meta.env.DEV && !looksLikeSupabaseAnonJwt(trimmedKey)) {
    console.warn(
      '[supabase] VITE_SUPABASE_ANON_KEY does not look like a full JWT (expect three segments separated by dots). You may have pasted a truncated key.',
    )
  }

  browserClient ??= createClient(url.trim(), trimmedKey)
  return browserClient
}

/** Dev-only UX: explains which Supabase env var is wrong when the client is null. */
export function getSupabaseConfigHint(): string {
  const url = (import.meta.env.VITE_SUPABASE_URL ?? '').trim()
  const key = (import.meta.env.VITE_SUPABASE_ANON_KEY ?? '').trim()
  if (url && key) return ''
  if (!url && !key) {
    return 'Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env.local at the project root (same folder as package.json), then restart npm run dev.'
  }
  if (!url) {
    return 'VITE_SUPABASE_URL is missing in .env.local — add Project URL from Supabase → Settings → API, then restart npm run dev.'
  }
  return 'VITE_SUPABASE_ANON_KEY is empty — paste the full anon/public JWT from Supabase → Settings → API (long key with two dots), save .env.local, then restart npm run dev.'
}
