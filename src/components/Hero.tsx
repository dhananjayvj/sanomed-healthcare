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
import { EASE_OUT } from "@/lib/motion";
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
    initial: reduced ? false : { opacity: 0, y: 20, scale: 0.985, filter: "blur(6px)" },
    animate:
      reduced
        ? undefined
        : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
    transition: { duration: 0.52, delay, ease: EASE_OUT },
  });

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-linear-to-b from-mist-50 via-white to-mist-100 pt-28 pb-24 sm:pt-40 sm:pb-32"
    >
      <div className="absolute inset-0 -z-10 bg-grid-light mask-fade-b" aria-hidden />
      <div
        className="absolute -top-44 right-[-7rem] -z-10 h-[36rem] w-[36rem] rounded-full bg-accent-500/12 blur-[130px]"
        aria-hidden
      />
      <div
        className="absolute -bottom-56 -left-44 -z-10 h-[34rem] w-[34rem] rounded-full bg-navy-500/10 blur-[140px]"
        aria-hidden
      />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <motion.div {...rise(0)}>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-700/15 bg-white/90 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-accent-800 shadow-soft">
                <FlaskConical className="h-3.5 w-3.5" aria-hidden />
                Pharmaceutical development, specialty chemicals, healthcare supply
              </span>
            </motion.div>

            <div className="flex flex-col">
              <motion.h1
                {...rise(0.08)}
                className="mt-6 max-w-[12ch] text-[3rem] font-bold leading-[0.98] text-navy-950 sm:mt-7 sm:text-[3.9rem] lg:text-[4.35rem]"
              >
                Documented pharmaceutical delivery with clinical-grade discipline
              </motion.h1>

              <motion.p
                {...rise(0.14)}
                className="mt-6 max-w-[58ch] text-lg font-medium leading-8 text-accent-800 sm:text-[1.2rem]"
              >
                Sanomed Health Care helps healthcare buyers move from requirement
                to release with clearer specifications, steadier quality control
                and partner-led production that stays fully traceable.
              </motion.p>

              <motion.p
                {...rise(0.18)}
                className="order-1 mt-6 max-w-[62ch] text-base leading-7 text-navy-700 sm:order-none sm:text-[1.0625rem]"
              >
                We work with pharmaceutical, specialty chemical and healthcare
                procurement teams that need the practical middle layer done
                properly: feasibility, specifications, quality checkpoints,
                statutory discipline and release documentation that stands up to
                scrutiny.
              </motion.p>

              <motion.div
                {...rise(0.24)}
                className="mt-10 flex flex-col gap-4 sm:order-none sm:flex-row sm:items-center"
              >
                <Link
                  href="/#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy-950 px-7 py-4 text-sm font-semibold text-white shadow-lift transition-[background-color,transform,box-shadow] duration-200 hover:bg-navy-800 active:scale-[0.98]"
                >
                  Inquire now
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
                <Link
                  href="/#expertise"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-200 bg-white/90 px-7 py-4 text-sm font-semibold text-navy-900 transition-[border-color,background-color,transform] duration-200 hover:border-accent-500/40 hover:bg-mist-50 active:scale-[0.985]"
                >
                  Explore capabilities
                </Link>
              </motion.div>

              <motion.p
                {...rise(0.28)}
                className="mt-5 text-sm font-medium text-navy-600"
              >
                Best for third-party manufacturing enquiries, product development
                briefs and quality-led supply discussions.
              </motion.p>
            </div>

            <motion.dl
              {...rise(0.32)}
              className="mt-12 grid gap-4 border-t border-mist-300 pt-8 md:grid-cols-3"
            >
              {trustIndicators.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-[1.5rem] border border-white/80 bg-white/88 p-5 shadow-soft"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-500/12 text-accent-700">
                      <Icon className="h-4.5 w-4.5" aria-hidden />
                    </span>
                    <div className="min-w-0 flex-1">
                      <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-navy-500">
                        {label}
                      </dt>
                      <dd className="mt-1.5 text-sm font-semibold leading-snug text-navy-950 break-words">
                        {label === "Operating from" ? (
                          <a
                            href={company.mapUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="underline-offset-4 transition-colors hover:text-accent-700 hover:underline"
                          >
                            {value}
                          </a>
                        ) : (
                          value
                        )}
                      </dd>
                    </div>
                  </div>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div
            initial={
              reduced
                ? false
                : { opacity: 0, y: 28, scale: 0.975, filter: "blur(8px)" }
            }
            animate={
              reduced
                ? undefined
                : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
            }
            transition={{ duration: 0.62, delay: 0.18, ease: EASE_OUT }}
            className="relative"
          >
            <div className="site-card site-card-dark overflow-hidden p-8 sm:p-10">
              <div
                className="absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-accent-300/70 to-transparent"
                aria-hidden
              />
              <div className="flex items-center justify-between gap-4">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-accent-300">
                  Corporate profile
                </p>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-500/15 px-2.5 py-1 text-[0.68rem] font-semibold text-accent-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-400" aria-hidden />
                  Active
                </span>
              </div>

              <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm">
                <p className="max-w-[26ch] text-[1.45rem] font-semibold leading-tight text-white sm:text-[1.7rem]">
                  Built for buyers who need confidence before a batch moves.
                </p>
                <p className="mt-4 text-sm leading-7 text-navy-100/78">
                  Registered in Bengaluru, operating through vetted partners and
                  structured around documentation, release controls and repeatable
                  process discipline.
                </p>
              </div>

              <dl className="mt-8 space-y-5">
                {[
                  { term: "Legal entity", detail: company.legalName },
                  { term: "CIN", detail: company.cin },
                  { term: "Registrar", detail: company.registrar },
                  { term: "Classification", detail: company.classification },
                  { term: "Principal activity", detail: company.activity },
                ].map((row) => (
                  <div
                    key={row.term}
                    className="grid gap-2 border-b border-white/8 pb-5 last:border-0 last:pb-0 sm:grid-cols-[9rem_1fr] sm:items-start"
                  >
                    <dt className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-navy-100/45">
                      {row.term}
                    </dt>
                    <dd className="text-sm font-medium leading-snug text-white">
                      {row.detail}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ["Traceability", "Batch-linked records"],
                  ["Quality", "Defined release checks"],
                  ["Response", "Direct technical discussion"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-4"
                  >
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-accent-300/80">
                      {label}
                    </p>
                    <p className="mt-2 text-sm font-medium text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
