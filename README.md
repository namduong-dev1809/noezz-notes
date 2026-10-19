# Noezz Notes — SaaS landing page demo

A one-page landing page for a **fictional** AI meeting-notes app, built as a portfolio demo of a modern startup / SaaS site.

> Noezz Notes is not a real product. Company logos and reviews are samples, and the sign-up form sends nothing.

## Features

- **Animated product mock-up** built in HTML/CSS (no screenshots): the transcript types itself, then the AI summary and action items appear
- **Pricing with a Monthly / Yearly switch**: prices update with a 20% yearly discount and show the yearly total
- **FAQ accordion** using native `<details>` (works without JavaScript, keyboard friendly)
- **Email sign-up** with validation and an accessible error message
- Fade-in on scroll, dark theme, mobile-first layout, honours reduced-motion settings

## Tech

Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · deployed on Vercel

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm test        # pricing maths and email check
```

## Where things are

| Path | What it holds |
|---|---|
| `lib/plans.ts` | Plans, prices, yearly discount, email check |
| `app/page.tsx` | Page sections and copy |
| `components/AppMockup.tsx` | The animated app window |
| `components/Pricing.tsx` | Billing switch and plan cards |

Made by [Duong Thanh Nam](https://duongthanhnam.vercel.app).
