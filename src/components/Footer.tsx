import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { addressLines, company, navLinks } from "@/lib/site";
import { Wordmark } from "./Logo";
import { Container } from "./Section";

const capabilityLinks = [
  "Drug Development",
  "Specialty Chemical Manufacturing",
  "Healthcare Product Synthesis",
  "Quality Assurance & Testing",
  "Contract Manufacturing",
  "Marketing & Distribution",
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy-950">
      <Container className="pt-16 pb-28 sm:pt-20 sm:pb-24 lg:pb-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.8fr_1fr]">
          <div>
            <Wordmark />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-navy-100/65">
              {company.promise}
            </p>
            <dl className="mt-7 space-y-2 text-sm">
              <div className="flex gap-2">
                <dt className="text-navy-100/45">CIN</dt>
                <dd className="font-mono text-navy-100/85">{company.cin}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-navy-100/45">Incorporated</dt>
                <dd className="text-navy-100/85">
                  {company.incorporated} · {company.registrar}
                </dd>
              </div>
            </dl>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent-300">
              Company
            </h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-100/70 underline-offset-4 transition-colors hover:text-white hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="mt-8 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent-300">
              Capabilities
            </h2>
            <ul className="mt-5 space-y-3">
              {capabilityLinks.map((item) => (
                <li key={item}>
                  <Link
                    href="/#expertise"
                    className="text-sm text-navy-100/70 underline-offset-4 transition-colors hover:text-white hover:underline"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent-300">
              Registered Office
            </h2>
            <div className="mt-5 flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-navy-100/45" aria-hidden />
              <address className="text-sm not-italic leading-relaxed text-navy-100/70">
                {addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>

            <div className="mt-6 flex min-w-0 gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-navy-100/45" aria-hidden />
              <a
                href={`tel:${company.phone.href}`}
                className="text-sm font-medium text-navy-100/85 underline-offset-4 transition-colors hover:text-accent-300 hover:underline"
              >
                {company.phone.display}
              </a>
            </div>

            <div className="mt-4 flex min-w-0 gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-navy-100/45" aria-hidden />
              <a
                href={`mailto:${company.emails.primary}`}
                className="min-w-0 truncate text-sm text-navy-100/80 underline-offset-4 transition-colors hover:text-accent-300 hover:underline"
              >
                {company.emails.primary}
              </a>
            </div>

            <Link
              href="/#contact"
              className="mt-7 inline-flex rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-accent-400/50 hover:bg-white/5"
            >
              Make an enquiry
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <p className="text-xs text-navy-100/50">
              © {year} {company.legalName}. All rights reserved.
            </p>
            <Link
              href="/privacy"
              className="text-xs text-navy-100/60 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              Privacy Policy
            </Link>
          </div>
          <p className="text-xs text-navy-100/40">
            {company.classification} · {company.activity}
          </p>
        </div>
      </Container>
    </footer>
  );
}
