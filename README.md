# Sanomed Health Care — Corporate Website

Corporate website for **SANOMED HEALTH CARE PRIVATE LIMITED** (CIN
`U24290KA2022PTC159246`), a Bengaluru-based pharmaceutical and specialty
chemical manufacturer registered with the Registrar of Companies, Bengaluru.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4** — theme tokens defined in `src/app/globals.css`
- **Framer Motion** — scroll reveals and micro-interactions
- **lucide-react** — icon set
- `clsx` + `tailwind-merge` — the `cn()` helper in `src/lib/utils.ts`

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint
```

## Structure

```
src/
├─ app/
│  ├─ layout.tsx          Root layout, fonts, metadata, Organization JSON-LD
│  ├─ page.tsx            Home — hero → about → vision → expertise → products
│  │                      → leadership → compliance → contact
│  ├─ products/page.tsx   Therapy areas, dosage forms, batch assurances
│  ├─ careers/page.tsx    Why Sanomed, functions, application route
│  ├─ api/contact/route.ts  Server-side validated enquiry endpoint
│  ├─ sitemap.ts, robots.ts, icon.svg
│  └─ globals.css         Design tokens: navy / accent / mist palettes
├─ components/            Section components + Navbar, Footer, ContactForm
└─ lib/
   ├─ site.ts             Single source of truth for company + content data
   └─ utils.ts            cn() class merger
```

Company facts, navigation, leadership, values and product data all live in
`src/lib/site.ts` — edit content there rather than in the components.

## Design system

| Token         | Role                                                        |
| ------------- | ----------------------------------------------------------- |
| `navy-*`      | Deep navy — headers, dark bands, primary text (`navy-950`)  |
| `accent-*`    | Emerald/teal — CTAs, eyebrows, iconography                  |
| `mist-*`      | Crisp slate white — page and card backgrounds               |

Sections alternate `mist-50` / `white` / `mist-100` / `navy-950` bands so no two
adjacent bands share a tone. Shadows use the `shadow-elevate` and `shadow-lift`
tokens.

## Accessibility

- Skip link, semantic landmarks, and labelled nav/breadcrumb regions
- Visible `:focus-visible` ring on every interactive element
- Form errors linked via `aria-describedby` / `aria-invalid`, with focus moved
  to the first invalid field on submit
- All decorative icons and background layers marked `aria-hidden`
- Full `prefers-reduced-motion` support — reveals and transitions are suppressed

## Contact form

`ContactForm` validates on blur and on submit; `POST /api/contact` re-validates
every rule server-side and rejects with `422` plus per-field messages. A hidden
honeypot field silently absorbs bot submissions. Enquiries are logged
server-side until an email provider is wired in — see **DEPLOYMENT.md**.

## Deployment & DNS

See [DEPLOYMENT.md](./DEPLOYMENT.md) for the Vercel deployment steps and the
exact Namecheap A / CNAME / MX / TXT records for
`sanomedhealthcare.com`.
