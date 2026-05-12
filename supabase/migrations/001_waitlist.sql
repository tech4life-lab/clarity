-- Waitlist signups (Supabase SQL Editor or CLI migrations)
-- Uses anon key from the browser only — never expose service_role in Vite/React.

create extension if not exists pgcrypto;

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text,
  created_at timestamptz not null default now()
);

alter table public.waitlist enable row level security;

-- Anonymous users can INSERT only (no SELECT/update/delete for anon).
-- DROP first so this script stays safe to re-run in the SQL Editor.
drop policy if exists "waitlist_anon_insert" on public.waitlist;

create policy "waitlist_anon_insert"
  on public.waitlist
  for insert
  to anon
  with check (true);

comment on table public.waitlist is 'Marketing waitlist emails captured from the landing page.';
