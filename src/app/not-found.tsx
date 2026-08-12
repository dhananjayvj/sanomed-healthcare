import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Home, Mail } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";
import { Container, Eyebrow } from "@/components/Section";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "The page you were looking for could not be found. Browse our capabilities, products and careers, or contact Sanomed Health Care directly.",
  robots: { index: false, follow: true },
};

const destinations = [
  {
    href: "/#expertise",
    title: "Areas of Expertise",
    copy: "Drug development, quality, synthesis and third-party supply.",
  },
  {
    href: "/products",
    title: "Products",
    copy: "Therapy areas across chronic and acute care, and the formats we offer.",
  },
  {
    href: "/careers",
    title: "Careers",
    copy: "Open functions and how to apply to join our team in Bengaluru.",
  },
  {
    href: "/#contact",
    title: "Contact",
    copy: "Send an enquiry — we respond within two working days.",
  },
];

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="relative isolate overflow-hidden bg-navy-950 pt-32 pb-24 sm:pt-40 sm:pb-28">
          <div
            className="absolute inset-0 -z-10 bg-grid mask-fade-b"
            aria-hidden
          />
          <div
            className="absolute -top-32 right-0 -z-10 h-96 w-96 rounded-full bg-accent-500/18 blur-[120px]"
            aria-hidden
          />

          <Container>
            <div className="max-w-3xl">
              <Eyebrow tone="light">Error 404</Eyebrow>
              <p
                className="mt-6 text-6xl font-semibold tracking-tight text-white/15 sm:text-7xl"
                aria-hidden
              >
                404
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.1] text-white sm:text-5xl">
                We couldn&apos;t find that page
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-navy-100/75">
                The address may have changed, or the link that brought you here
                may be out of date. Everything on the site is one step away
                below — or write to us and we will point you to the right place.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-7 py-3.5 text-sm font-semibold text-navy-950 shadow-elevate transition-all hover:bg-accent-400 hover:shadow-lift"
                >
                  <Home className="h-4 w-4" aria-hidden />
                  Back to home
                </Link>
                <a
                  href={`mailto:${company.emails.primary}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                  Email us
                </a>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <Container>
            <div className="flex items-center gap-2 text-accent-700">
              <Compass className="h-4 w-4" aria-hidden />
              <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em]">
                Where to next
              </h2>
            </div>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {destinations.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex h-full flex-col rounded-2xl border border-mist-300 bg-mist-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent-300 hover:bg-white hover:shadow-elevate"
                  >
                    <span className="flex items-center justify-between gap-3 text-lg font-semibold text-navy-950">
                      {item.title}
                      <ArrowRight
                        className="h-4 w-4 shrink-0 text-accent-600 transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </span>
                    <span className="mt-2.5 text-sm leading-relaxed text-navy-700/85">
                      {item.copy}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
