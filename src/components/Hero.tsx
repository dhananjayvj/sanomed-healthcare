"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  FlaskConical,
  MapPin,
} from "lucide-react";
import { company } from "@/lib/site";
import { Container } from "./Section";

const trustIndicators = [
  { icon: BadgeCheck, label: "Incorporated", value: company.incorporated },
  { icon: Building2, label: "Registered", value: "MCA / ROC Bengaluru" },
  {
    icon: MapPin,
    label: "Operating from",
    value: `${company.address.city}, ${company.address.state}`,
  },
];

export function Hero() {
  const reduced = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 24 },
    animate: reduced ? undefined : { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-white pt-28 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Depth: engineering grid + soft emerald bloom */}
      <div className="absolute inset-0 -z-10 bg-grid-light mask-fade-b" aria-hidden />
      <div
        className="absolute -top-40 -right-24 -z-10 h-[34rem] w-[34rem] rounded-full bg-accent-500/15 blur-[120px]"
        aria-hidden
      />
      <div
        className="absolute -bottom-56 -left-40 -z-10 h-[32rem] w-[32rem] rounded-full bg-navy-500/12 blur-[130px]"
        aria-hidden
      />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div>
            <motion.div {...rise(0)}>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-600/20 bg-accent-600/10 px-3.5 py-1.5 text-xs font-medium text-accent-800">
                <FlaskConical className="h-3.5 w-3.5" aria-hidden />
                Pharmaceuticals · Specialty Chemicals · Healthcare
              </span>
            </motion.div>

            {/* Flex + order so the CTAs sit above the fold on small screens
                while the DOM keeps its natural reading order. */}
            <div className="flex flex-col">
              <motion.h1
                {...rise(0.08)}
                className="mt-6 text-[2.3rem] font-semibold leading-[1.08] text-navy-950 sm:mt-7 sm:text-6xl sm:leading-[1.05]"
              >
                Precision Chemical &amp;{" "}
                <span className="text-gradient">Healthcare Solutions</span>
              </motion.h1>

              <motion.p
                {...rise(0.14)}
                className="mt-5 text-base font-medium text-accent-700 sm:mt-6 sm:text-lg"
              >
                {company.promise}
              </motion.p>

              <motion.p
                {...rise(0.18)}
                className="order-1 mt-7 max-w-xl text-base leading-relaxed text-navy-700/85 sm:order-none sm:mt-4 sm:text-lg"
              >
                {company.legalName} is a Bengaluru-based pharmaceutical and
                specialty chemical company — developing, specifying and
                quality-assuring products that are manufactured through trusted
                contract partners, with full batch traceability and disciplined
                statutory compliance behind everything we release.
              </motion.p>

              <motion.div
                {...rise(0.24)}
                className="mt-7 flex flex-col gap-3 sm:order-none sm:mt-9 sm:flex-row sm:items-center"
              >
                <Link
                  href="/#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-7 py-3.5 text-sm font-semibold text-white shadow-elevate transition-all hover:bg-accent-400 hover:shadow-lift active:scale-[0.98]"
                >
                  Request a Consultation
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
                <Link
                  href="/#expertise"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-200 px-7 py-3.5 text-sm font-semibold text-navy-900 transition-colors hover:border-navy-300 hover:bg-navy-50"
                >
                  Explore Capabilities
                </Link>
              </motion.div>
            </div>

            <motion.dl
              {...rise(0.32)}
              className="mt-11 grid gap-4 border-t border-mist-300 pt-8 sm:grid-cols-3"
            >
              {trustIndicators.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <Icon
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent-600"
                    aria-hidden
                  />
                  <div className="min-w-0">
                    <dt className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-navy-500">
                      {label}
                    </dt>
                    <dd className="mt-1 truncate text-sm font-semibold text-navy-950">
                      {value}
                    </dd>
                  </div>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Corporate registry card — the trust artifact */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 32, scale: 0.97 }}
            animate={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="rounded-3xl border border-mist-300 bg-white p-1.5 shadow-lift">
              <div className="rounded-[1.35rem] border border-white/8 bg-navy-950 p-7 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-accent-300">
                    Corporate Registry
                  </p>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-500/15 px-2.5 py-1 text-[0.68rem] font-semibold text-accent-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-400" aria-hidden />
                    Active
                  </span>
                </div>

                <dl className="mt-7 space-y-5">
                  {[
                    { term: "Legal Entity", detail: company.legalName },
                    { term: "CIN", detail: company.cin },
                    { term: "Registrar", detail: company.registrar },
                    { term: "Classification", detail: company.classification },
                    { term: "Principal Activity", detail: company.activity },
                  ].map((row) => (
                    <div
                      key={row.term}
                      className="border-b border-white/8 pb-5 last:border-0 last:pb-0"
                    >
                      <dt className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-navy-100/45">
                        {row.term}
                      </dt>
                      <dd className="mt-1.5 text-sm font-medium leading-snug text-white">
                        {row.detail}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

          </motion.div>
        </div>
      </Container>
    </section>
  );
}
