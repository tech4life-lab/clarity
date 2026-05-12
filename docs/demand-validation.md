# Demand validation (deploy + measurement)

Repo-side checks are done when `npm run build` succeeds and [`vercel.json`](../vercel.json) is present. Complete the steps below in Vercel, PostHog, and your content workflow.

## 1. Vercel project

1. Push this repository to GitHub.
2. Vercel → **Add New… → Project** → Import the repo.
3. Preset **Vite** (or: Build `npm run build`, Output `dist`, Install `npm install`).
4. **Environment Variables** (Production; add Preview if you want analytics on preview URLs):

   | Name | Notes |
   |------|--------|
   | `VITE_SUPABASE_URL` | Supabase → Settings → API → Project URL |
   | `VITE_SUPABASE_ANON_KEY` | Anon / publishable key only (never `service_role`) |
   | `VITE_PUBLIC_POSTHOG_KEY` | PostHog project API key |
   | `VITE_PUBLIC_POSTHOG_HOST` | e.g. `https://eu.i.posthog.com` or `https://us.i.posthog.com` |

5. Deploy. Custom domains (e.g. `clarityapp.ai`) → **Project → Domains** after the first deploy.

## 2. Smoke-test production

After deploy, open the production URL and verify:

- `/` loads.
- `/privacy`, `/terms`, `/disclaimer` load (SPA rewrite).
- Waitlist submit inserts a row in Supabase **Table Editor → waitlist**.
- Submitting the **same email again** shows the duplicate message.

Local preview equivalence was verified with `npm run preview` (HTTP 200 + `#root` for `/`, `/privacy`, `/terms`, `/disclaimer`, `/?source=tiktok`).

## 3. PostHog: landing conversion

The app sends **`$pageview`** (via `capture_pageview: true`) and custom **`waitlist_signup_success`** (see [`src/components/WaitlistSignup.tsx`](../src/components/WaitlistSignup.tsx)).

In PostHog:

1. Open **Product analytics** → **Insights** → **New insight**.
2. Choose **Funnel** (or **Formula / Trends** if you prefer).
3. **Step 1:** Event `$pageview`, filter URL/path is `/` (or your landing path).
4. **Step 2:** Event `waitlist_signup_success`.
5. Save the insight and pin it to a dashboard.

Interpretation is directional until volume is high; compare periods rather than single-day percentages early on.

## 4. Source attribution on content links

Use your production URL with a **`source`** query param on every outbound CTA (bio, posts, ads):

```text
https://YOUR_DOMAIN/?source=tiktok
https://YOUR_DOMAIN/?source=instagram
https://YOUR_DOMAIN/?source=twitter
https://YOUR_DOMAIN/?source=youtube
```

The waitlist form reads `source` and stores it on the row when the user signs up.
