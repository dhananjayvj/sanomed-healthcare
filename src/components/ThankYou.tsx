"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Mail } from "lucide-react";
import { company } from "@/lib/site";
import { Container } from "./Section";

/** Key written by ContactForm immediately before it routes here. */
export const ENQUIRY_KEY = "sanomed:enquiry";

const nextSteps = [
  {
    icon: Clock,
    title: "Within two working days",
    copy: "A member of our team reviews your requirement and replies with a technical position covering feasibility, indicative timelines and next questions.",
  },
  {
    icon: Mail,
    title: "Straight to your inbox",
    copy: "We reply to the address you supplied. If you use a spam filter, allow contact@sanomedhealthcare.com so nothing is missed.",
  },
];

const explore = [
  { href: "/products", label: "Browse our product portfolio" },
  { href: "/#expertise", label: "Review our areas of expertise" },
  { href: "/careers", label: "Explore careers at Sanomed" },
];

/**
 * sessionStorage is an external store, so read it through
 * useSyncExternalStore rather than an effect. It is written once before
 * navigation and never mutated while this page is mounted, hence the no-op
 * subscribe. The server snapshot is null so the prerendered HTML omits the
 * recovery panel.
 */
function readEnquiry() {
  try {
    return sessionStorage.getItem(ENQUIRY_KEY);
  } catch {
    // Private browsing modes can throw on sessionStorage access.
    return null;
  }
}

const noopSubscribe = () => () => {};

export function ThankYou() {
  // The mailto flow can be blocked by the browser or land on a machine with no
  // mail client configured, so keep the composed enquiry recoverable here.
  const mailtoHref = useSyncExternalStore(
    noopSubscribe,
    readEnquiry,
    () => null,
  );

  return (
    <>
      <section className="relative isolate overflow-hidden bg-white pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 -z-10 bg-grid-light mask-fade-b" aria-hidden />
        <div
          className="absolute -top-32 right-0 -z-10 h-96 w-96 rounded-full bg-accent-500/15 blur-[120px]"
          aria-hidden
        />

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-500 text-white">
              <CheckCircle2 className="h-7 w-7" aria-hidden />
            </span>
            <h1 className="mt-7 text-4xl font-semibold leading-[1.1] text-navy-950 sm:text-5xl">
              Thank you. Your enquiry is on its way
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-navy-700/85">
              We appreciate you taking the time to contact {company.shortName}.
              Your requirement has been captured and will be reviewed by the
              team responsible for that capability.
            </p>

            {mailtoHref ? (
              <div className="site-card site-card-light mt-8 p-6">
                <p className="text-[0.95rem] leading-relaxed text-navy-800">
                  If your email client did not open, your enquiry is still
                  saved. Reopen it below, or write to us directly at{" "}
                  <a
                    href={`mailto:${company.emails.primary}`}
                    className="font-medium text-accent-700 underline-offset-4 hover:underline"
                  >
                    {company.emails.primary}
                  </a>
                  .
                </p>
                <a
                  href={mailtoHref}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-400"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                  Reopen the enquiry email
                </a>
              </div>
            ) : null}

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-200 px-7 py-3.5 text-sm font-semibold text-navy-900 transition-colors hover:border-navy-300 hover:bg-navy-50"
              >
                Back to home
              </Link>
              <Link
                href="/products"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy-950 px-7 py-3.5 text-sm font-semibold text-white shadow-elevate transition-colors hover:bg-navy-800"
              >
                View products
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-accent-700">
                What happens next
              </h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {nextSteps.map(({ icon: Icon, title, copy }) => (
                  <li
                    key={title}
                    className="site-card site-card-light p-7"
                  >
                    <Icon className="h-5 w-5 text-accent-600" aria-hidden />
                    <h3 className="mt-4 text-base font-semibold text-navy-950">
                      {title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-navy-700/85">
                      {copy}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-accent-700">
                While you wait
              </h2>
              <ul className="mt-8 space-y-3">
                {explore.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="site-card site-card-white group flex items-center justify-between gap-4 px-6 py-4 text-[0.95rem] font-medium text-navy-950 transition-all hover:border-accent-300 hover:shadow-elevate"
                    >
                      {item.label}
                      <ArrowRight
                        className="h-4 w-4 shrink-0 text-accent-600 transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
