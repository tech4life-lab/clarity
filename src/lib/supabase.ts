import { createClient, type SupabaseClient } from '@supabase/supabase-js'

let browserClient: SupabaseClient | null = null

export function getSupabaseBrowserClient(): SupabaseClient | null {
  const url = import.meta.env.VITE_SUPABASE_URL
  const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

  if (!url?.trim() || !anonKey?.trim()) {
    return null
  }

  browserClient ??= createClient(url.trim(), anonKey.trim())
  return browserClient
}
