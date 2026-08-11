# Deployment & DNS (Namecheap)

The site is a Next.js 16 app with a server-side API route (`/api/contact`), so it
needs a Node host — **not** GitHub Pages or any static-only host. Vercel is the
path of least resistance; Netlify and Cloudflare Workers also work.

---

## 1. Deploy

```bash
npx vercel link            # connect this repo to a Vercel project
npx vercel --prod          # or connect the GitHub repo for auto-deploys on push
```

In the Vercel project, add both domains:

- `sanomedhealthcare.com` (apex)
- `www.sanomedhealthcare.com`

Set one as primary (recommended: `www`, with the apex redirecting to it) and
Vercel will issue the TLS certificate automatically once DNS resolves.

---

## 2. Namecheap DNS records

Namecheap → **Domain List** → *Manage* → **Advanced DNS**.

Before adding anything: if the domain still has Namecheap's parking or email
forwarding defaults, delete them. Specifically remove the `URL Redirect`/
`CNAME` record for `@` and `www` pointing at `parkingpage.namecheap.com`, and
any `MX` record for `eforward1..5.registrar-servers.com` unless you actually
intend to keep Namecheap email forwarding. Leaving old MX records in place is
the single most common cause of mail silently failing.

Set **TTL: Automatic** on every record.

### 2a. Website records (hosting on Vercel)

| Type          | Host  | Value                   | Notes                                   |
| ------------- | ----- | ----------------------- | --------------------------------------- |
| A Record      | `@`   | `76.76.21.21`           | Vercel's apex IP                        |
| CNAME Record  | `www` | `cname.vercel-dns.com.` | Trailing dot is fine; Namecheap strips it |

> Confirm both values against what your Vercel project's **Settings → Domains**
> page displays — Vercel has issued different apex IPs (e.g. `216.198.79.1`) to
> newer projects, and the dashboard is authoritative for your project.

Namecheap cannot put a CNAME on the apex (`@`), which is why the apex uses an A
record. If you prefer a CNAME-only setup, move the domain's nameservers to
Cloudflare and use its CNAME flattening.

Alternative hosts, for reference:

| Host             | Apex (`@`)                    | `www`                          |
| ---------------- | ----------------------------- | ------------------------------ |
| Netlify          | A → `75.2.60.5`               | CNAME → `<site>.netlify.app.`  |
| Cloudflare Pages | (use Cloudflare nameservers)  | CNAME → `<project>.pages.dev.` |

### 2b. Email records (`contact@` and `info@`)

MX records depend on which mailbox provider hosts the two addresses. Pick **one**
set — never mix providers' MX records.

**Option A — Zoho Mail** (free tier for a small team; India data centre)

| Type | Host | Value                                   | Priority |
| ---- | ---- | --------------------------------------- | -------- |
| MX   | `@`  | `mx.zoho.in`                            | 10       |
| MX   | `@`  | `mx2.zoho.in`                           | 20       |
| MX   | `@`  | `mx3.zoho.in`                           | 50       |
| TXT  | `@`  | `v=spf1 include:zoho.in ~all`           | —        |
| TXT  | `zmail._domainkey` | *(DKIM value from Zoho console)* | —     |

If your Zoho account sits in the global (`.com`) data centre, use `mx.zoho.com`,
`mx2.zoho.com`, `mx3.zoho.com` and `include:zoho.com` instead.

**Option B — Google Workspace**

| Type | Host | Value                                          | Priority |
| ---- | ---- | ---------------------------------------------- | -------- |
| MX   | `@`  | `smtp.google.com`                              | 1        |
| TXT  | `@`  | `v=spf1 include:_spf.google.com ~all`          | —        |
| TXT  | `google._domainkey` | *(DKIM value from Admin console)*  | —        |

**Option C — Namecheap Private Email** (simplest if bought with the domain)

| Type  | Host           | Value                                  | Priority |
| ----- | -------------- | -------------------------------------- | -------- |
| MX    | `@`            | `mx1.privateemail.com`                 | 10       |
| MX    | `@`            | `mx2.privateemail.com`                 | 10       |
| CNAME | `mail`         | `privateemail.com.`                    | —        |
| CNAME | `autodiscover` | `privateemail.com.`                    | —        |
| CNAME | `autoconfig`   | `privateemail.com.`                    | —        |
| TXT   | `@`            | `v=spf1 include:spf.privateemail.com ~all` | —    |

**Option D — Microsoft 365**

| Type  | Host           | Value                                            | Priority |
| ----- | -------------- | ------------------------------------------------ | -------- |
| MX    | `@`            | `sanomedhealthcare-com.mail.protection.outlook.com` | 0     |
| CNAME | `autodiscover` | `autodiscover.outlook.com.`                      | —        |
| TXT   | `@`            | `v=spf1 include:spf.protection.outlook.com -all` | —        |

### 2c. Recommended for deliverability (any provider)

| Type | Host      | Value                                                                  |
| ---- | --------- | ---------------------------------------------------------------------- |
| TXT  | `_dmarc`  | `v=DMARC1; p=quarantine; rua=mailto:contact@sanomedhealthcare.com; fo=1` |

Only one SPF (`v=spf1 …`) TXT record may exist on `@`. If you later send
transactional mail from the contact form via a provider (see below), merge its
include into that single record rather than adding a second one — e.g.
`v=spf1 include:zoho.in include:_spf.resend.com ~all`.

### 2d. Verification

```bash
dig +short sanomedhealthcare.com A
dig +short www.sanomedhealthcare.com CNAME
dig +short sanomedhealthcare.com MX
dig +short sanomedhealthcare.com TXT
```

Namecheap propagation is usually minutes, but allow up to 24–48 hours before
concluding something is wrong.

---

## 3. Wiring the contact form to real email

`src/app/api/contact/route.ts` validates every submission server-side and
currently logs the enquiry. To deliver it, add a provider at the marked `TODO`:

```bash
npm install resend
```

```ts
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: "website@sanomedhealthcare.com",
  to: ["contact@sanomedhealthcare.com"],
  replyTo: enquiry.email,
  subject: `Website enquiry — ${enquiry.company}`,
  text: JSON.stringify(enquiry, null, 2),
});
```

Set `RESEND_API_KEY` in Vercel → Settings → Environment Variables, and add the
provider's verification records (they will supply a DKIM CNAME and an SPF
include) alongside the records above.
