# restocks.ai

Marketing + legal pages for **Restocks** — a trucking compliance SaaS operated by AESTRA INC.

Built with Next.js 14 (App Router, TypeScript, static export). No build dependencies beyond Next itself; no Tailwind, no UI library — plain CSS in `app/globals.css`.

## Pages

| Route | Source | Purpose |
|---|---|---|
| `/` | `app/page.tsx` | Landing page — hero, what we handle, CTA |
| `/privacy` | `app/privacy/page.tsx` | Privacy Policy — required for Twilio TFV |
| `/sms-terms` | `app/sms-terms/page.tsx` | SMS Terms of Use — required for Twilio TFV |
| `/sms-consent-sample` | `app/sms-consent-sample/page.tsx` | Opt-in evidence — Twilio reviewer URL for OptInImageUrls field. Redacted sample of an executed carrier SMS Communications Consent |

## Why these pages exist

This site is **load-bearing for a Twilio Toll-Free Verification submission** for SMS number +1 (844) 223-4074. The legal pages (`/privacy`, `/sms-terms`) and the opt-in evidence sample (`/sms-consent-sample`) are explicit fields in the TFV application — the reviewer clicks them. They MUST be live at `restocks.ai` before the application is submitted, or it gets rejected.

Critical content not to change without checking the Twilio implications:
- "Operated by AESTRA INC" disclosure on `/privacy` and `/sms-terms` (Twilio matches against legal name)
- "AESTRA INC d/b/a Restocks" identifier on `/sms-consent-sample` (Twilio errors 30506 / 30510)
- The "No mobile information shared with third parties for marketing" clause in privacy
- STOP / HELP language in SMS terms

## Local development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build & deploy

```bash
npm run build
# → outputs static HTML to ./out/
```

Static export targets any static host. Recommended: **Cloudflare Pages** (free, instant SSL, integrated DNS).

### Cloudflare Pages
1. Connect this repo in the Cloudflare Pages dashboard.
2. Build command: `npm run build`
3. Output directory: `out`
4. Add `restocks.ai` as a custom domain.

### Vercel
1. Import this repo into Vercel.
2. Framework: Next.js (auto-detected).
3. Add `restocks.ai` as a custom domain.

### Netlify
1. Connect this repo.
2. Build command: `npm run build`
3. Publish directory: `out`

## Brand notes

| Item | Value |
|---|---|
| Legal entity | AESTRA INC (Nevada Corporation, EIN 39-3700888) |
| Customer-facing brand | Restocks |
| Domain | restocks.ai |
| Contact email | admin@restocks.ai |
| SMS sender (toll-free) | +1 (844) 223-4074 |

## Privacy / legal disclosure policy

The public site does NOT display:
- EIN (39-3700888) — visible to Twilio Trust Hub only
- Full street address — visible to Twilio Trust Hub only
- Carrier customer names — even on the consent sample, carrier identifying details are redacted at the carrier's request

These omissions are intentional. Twilio's TFV review does not require any of them on the public site, but does require them on the application form itself (Trust Hub Business Profile).
