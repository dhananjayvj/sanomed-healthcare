import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { addressLines, company, contactEmails, navLinks } from "@/lib/site";
import { Wordmark } from "./Logo";
import { Container } from "./Section";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-mist-300 bg-white">
      <Container className="pt-16 pb-28 sm:pt-20 sm:pb-24 lg:pb-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.8fr_1fr]">
          <div>
            <Wordmark />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-navy-700">
              {company.promise}
            </p>
            <dl className="mt-7 space-y-2 text-sm">
              <div className="flex gap-2">
                <dt className="text-navy-500">CIN</dt>
                <dd className="font-mono text-navy-900">{company.cin}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-navy-500">Incorporated</dt>
                <dd className="text-navy-900">
                  {company.incorporated} · {company.registrar}
                </dd>
              </div>
            </dl>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent-700">
              Company
            </h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-700 underline-offset-4 transition-colors hover:text-navy-950 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent-700">
              Registered Office
            </h2>
            <div className="mt-5 flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-navy-500" aria-hidden />
              <address className="text-sm not-italic leading-relaxed text-navy-700">
                <a
                  href={company.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block underline-offset-4 transition-colors hover:text-accent-700 hover:underline"
                >
                  {addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </a>
              </address>
            </div>

            <div className="mt-6 flex min-w-0 gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-navy-500" aria-hidden />
              <a
                href={`tel:${company.phone.href}`}
                className="text-sm font-medium text-navy-900 underline-offset-4 transition-colors hover:text-accent-700 hover:underline"
              >
                {company.phone.display}
              </a>
            </div>

            <div className="mt-4 flex min-w-0 items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-navy-500" aria-hidden />
              <div className="min-w-0 space-y-1.5">
                {contactEmails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="block break-all text-sm text-navy-800 underline-offset-4 transition-transform hover:translate-x-0.5 hover:text-accent-700 hover:underline"
                  >
                    {email}
                  </a>
                ))}
              </div>
            </div>

            <Link
              href="/#contact"
              className="mt-7 inline-flex rounded-full border border-navy-200 px-5 py-2.5 text-sm font-semibold text-navy-950 transition-colors hover:border-accent-500 hover:bg-mist-50"
            >
              Make an enquiry
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-mist-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <p className="text-xs text-navy-500">
              © {year} {company.legalName}. All rights reserved.
            </p>
            <Link
              href="/privacy"
              className="text-xs text-navy-600 underline-offset-4 transition-colors hover:text-navy-950 hover:underline"
            >
              Privacy Policy
            </Link>
          </div>
          <p className="text-xs text-navy-500">
            {company.classification} · {company.activity}
          </p>
        </div>
      </Container>
    </footer>
  );
}
