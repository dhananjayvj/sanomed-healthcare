# Deployment & DNS (GitHub Pages + Namecheap)

The site is a **static export** (`output: "export"` in `next.config.ts`) served
by GitHub Pages from the custom domain `www.sanomedhealthcare.com`.

---

## 1. How deploys work

`.github/workflows/deploy.yml` runs on every push to `main`:

```
checkout → npm ci → eslint → next build (static export to out/) → publish to Pages
```

`public/CNAME` pins the custom domain and `public/.nojekyll` stops any Jekyll
processing of the `_next/` asset directory. Neither needs to be re-added — both
are committed and copied into `out/` on each build.

One-time repository settings:

- **Settings → Pages → Build and deployment → Source: GitHub Actions**
- **Settings → Pages → Custom domain:** `www.sanomedhealthcare.com`
- Tick **Enforce HTTPS** once the certificate has been issued (a few minutes
  after DNS resolves)

To deploy manually: **Actions → Deploy to GitHub Pages → Run workflow**.

---

## 2. Namecheap DNS records

Namecheap → **Domain List** → *Manage* → **Advanced DNS**. Set **TTL:
Automatic** on every record.

**Delete first:** the default parking records — the `CNAME` for `www` and the
`URL Redirect`/`A` record for `@` pointing at `parkingpage.namecheap.com`. Also
delete any `MX` record for `eforward1..5.registrar-servers.com` unless you are
deliberately keeping Namecheap email forwarding; stale MX records are the most
common cause of mail silently failing.

### 2a. Website — GitHub Pages

| Type         | Host  | Value                  |
| ------------ | ----- | ---------------------- |
| CNAME Record | `www` | `dhananjayvj.github.io.` |
| A Record     | `@`   | `185.199.108.153`      |
| A Record     | `@`   | `185.199.109.153`      |
| A Record     | `@`   | `185.199.110.153`      |
| A Record     | `@`   | `185.199.111.153`      |

The **CNAME on `www`** is the record that serves the site — it must point at the
GitHub Pages host `dhananjayvj.github.io` (the user domain, not the repository).
The four **A records on `@`** exist because Namecheap cannot put a CNAME on the
apex; they let `sanomedhealthcare.com` redirect to `www.sanomedhealthcare.com`.
All four are GitHub's published Pages IPs — add every one, they are the
redundant set, not alternatives.

Optional IPv6 (add all four alongside the A records if you want AAAA support):

| Type         | Host | Value                  |
| ------------ | ---- | ---------------------- |
| AAAA Record  | `@`  | `2606:50c0:8000::153`  |
| AAAA Record  | `@`  | `2606:50c0:8001::153`  |
| AAAA Record  | `@`  | `2606:50c0:8002::153`  |
| AAAA Record  | `@`  | `2606:50c0:8003::153`  |

### 2b. Email — `contact@` and `info@`

GitHub Pages does not host email, so mailboxes come from a separate provider.
Pick **one** set of MX records — never mix providers.

**Option A — Zoho Mail** (free tier for small teams; India data centre)

| Type | Host               | Value                              | Priority |
| ---- | ------------------ | ---------------------------------- | -------- |
| MX   | `@`                | `mx.zoho.in`                       | 10       |
| MX   | `@`                | `mx2.zoho.in`                      | 20       |
| MX   | `@`                | `mx3.zoho.in`                      | 50       |
| TXT  | `@`                | `v=spf1 include:zoho.in ~all`      | —        |
| TXT  | `zmail._domainkey` | *(DKIM value from Zoho console)*   | —        |

If your Zoho account is in the global (`.com`) data centre, use `mx.zoho.com`,
`mx2.zoho.com`, `mx3.zoho.com` and `include:zoho.com`.

**Option B — Google Workspace**

| Type | Host                | Value                                 | Priority |
| ---- | ------------------- | ------------------------------------- | -------- |
| MX   | `@`                 | `smtp.google.com`                     | 1        |
| TXT  | `@`                 | `v=spf1 include:_spf.google.com ~all` | —        |
| TXT  | `google._domainkey` | *(DKIM value from Admin console)*     | —        |

**Option C — Namecheap Private Email**

| Type  | Host           | Value                                      | Priority |
| ----- | -------------- | ------------------------------------------ | -------- |
| MX    | `@`            | `mx1.privateemail.com`                     | 10       |
| MX    | `@`            | `mx2.privateemail.com`                     | 10       |
| CNAME | `mail`         | `privateemail.com.`                        | —        |
| CNAME | `autodiscover` | `privateemail.com.`                        | —        |
| CNAME | `autoconfig`   | `privateemail.com.`                        | —        |
| TXT   | `@`            | `v=spf1 include:spf.privateemail.com ~all` | —        |

**Option D — Microsoft 365**

| Type  | Host           | Value                                               | Priority |
| ----- | -------------- | --------------------------------------------------- | -------- |
| MX    | `@`            | `sanomedhealthcare-com.mail.protection.outlook.com` | 0        |
| CNAME | `autodiscover` | `autodiscover.outlook.com.`                         | —        |
| TXT   | `@`            | `v=spf1 include:spf.protection.outlook.com -all`    | —        |

### 2c. Deliverability (any provider)

| Type | Host     | Value                                                                   |
| ---- | -------- | ----------------------------------------------------------------------- |
| TXT  | `_dmarc` | `v=DMARC1; p=quarantine; rua=mailto:contact@sanomedhealthcare.com; fo=1` |

Only one SPF (`v=spf1 …`) TXT record may exist on `@`. If you later add a form
backend that sends mail, merge its include into that single record rather than
adding a second — e.g. `v=spf1 include:zoho.in include:_spf.resend.com ~all`.

### 2d. Verify

```bash
dig +short www.sanomedhealthcare.com CNAME   # → dhananjayvj.github.io.
dig +short sanomedhealthcare.com A           # → the four 185.199.x.153 IPs
dig +short sanomedhealthcare.com MX          # → your chosen provider
curl -sI https://www.sanomedhealthcare.com | head -1
```

Namecheap usually propagates within minutes; allow up to 24–48 hours before
concluding something is wrong. GitHub re-checks the domain automatically and
issues the TLS certificate once the CNAME resolves.

---

## 3. Contact form delivery

The static site has no server, so by default the enquiry form composes the
message in the visitor's own mail client, addressed to
`contact@sanomedhealthcare.com`.

To capture submissions server-side instead, create a form endpoint (Formspree,
Web3Forms, Getform — all have free tiers) and add it as a repository variable:

**Settings → Secrets and variables → Actions → Variables → New variable**

| Name                        | Value                                     |
| --------------------------- | ----------------------------------------- |
| `NEXT_PUBLIC_FORM_ENDPOINT` | `https://formspree.io/f/<your-form-id>`   |

Push (or re-run the workflow) and the form will POST enquiries as JSON to that
endpoint, then route the visitor to `/thank-you/`. No code change is required.
