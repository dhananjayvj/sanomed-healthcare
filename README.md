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
│  ├─ privacy/page.tsx    Privacy policy
│  ├─ thank-you/page.tsx  Post-enquiry confirmation
│  ├─ not-found.tsx       Custom 404 (exported as 404.html)
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

## Static export

The site builds to a fully static `out/` directory (`output: "export"`), which
is what GitHub Pages serves. `trailingSlash` is on so `/products/` resolves to
`products/index.html` without a server rewrite, and `not-found.tsx` is emitted
as `404.html` — the file GitHub Pages serves for unknown paths.

Deploys run automatically from `.github/workflows/deploy.yml` on every push to
`main`: install → lint → build → publish `out/`.

## Contact form

`ContactForm` validates on blur and on submit, moves focus to the first invalid
field, and screens bots with a hidden honeypot. On success it routes to
`/thank-you/`.

Because a static site has no server, delivery works one of two ways:

- **Default (no configuration):** the form composes the enquiry and hands it to
  the visitor's own mail client, addressed to `contact@sanomedhealthcare.com`.
  The thank-you page keeps the composed message recoverable if that fails.
- **With a form backend:** set the repository variable
  `NEXT_PUBLIC_FORM_ENDPOINT` (Settings → Secrets and variables → Actions →
  Variables) to a Formspree/Web3Forms/Getform endpoint and the form posts JSON
  to it directly. The workflow passes it through at build time.

## Deployment & DNS

Hosted on **GitHub Pages** at `https://www.sanomedhealthcare.com`. See
[DEPLOYMENT.md](./DEPLOYMENT.md) for the exact Namecheap A / CNAME / MX / TXT
records and the Pages settings.
