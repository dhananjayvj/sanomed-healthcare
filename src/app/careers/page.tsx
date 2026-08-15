import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Globe2,
  Lightbulb,
  Mail,
  Sparkles,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";
import { PageHeader } from "@/components/PageHeader";
import { Container, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build a rewarding career at Sanomed Health Care, with opportunities across research and development, quality assurance, regulatory affairs, supply management, marketing and sales in Bengaluru, India.",
};

const RELATED_LINKS = [
  {
    href: "/#about",
    title: "About Sanomed",
    copy: "Who we are, where we operate and the standard we hold ourselves to.",
  },
  {
    href: "/#expertise",
    title: "Areas of Expertise",
    copy: "The disciplines you would be joining, from development to distribution.",
  },
  {
    href: "/products",
    title: "Products",
    copy: "The portfolio our teams develop, specify and release.",
  },
];

const reasons = [
  {
    icon: Sparkles,
    title: "Exciting Opportunities",
    copy: "Roles across research and development, quality assurance, regulatory affairs, supply management, marketing and sales, with room to move between them as you grow.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Cutting-Edge Research",
    copy: "We invest in advanced research initiatives and collaborations with academia and industry experts, and we expect our people to think beyond the obvious route.",
  },
  {
    icon: GraduationCap,
    title: "Professional Growth",
    copy: "Structured training, mentorship and clear career progression frameworks. Your development is planned, not left to chance.",
  },
  {
    icon: Users,
    title: "Collaboration & Teamwork",
    copy: "A culture where diverse perspectives are valued and ideas are shared freely, because the hard problems are never solved alone.",
  },
  {
    icon: Globe2,
    title: "Global Reach & Impact",
    copy: "Work that contributes to healthcare advancement well beyond our facility, expanding access to quality medicines.",
  },
];

const functions = [
  "Research & Development",
  "Quality Assurance",
  "Quality Control",
  "Regulatory Affairs",
  "Production Management",
  "Supply Chain",
  "Marketing",
  "Sales",
  "Finance & Compliance",
];

export default function CareersPage() {
  const subject = encodeURIComponent("Career enquiry - Sanomed Health Care");

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          path="/careers"
          breadcrumb="Careers"
          eyebrow="Careers"
          title="Unlock your potential with a rewarding career"
          description="Our success lies in the dedication, expertise and passion of our people. We offer a dynamic, inclusive environment that supports growth, learning and personal development. Join us and make a meaningful impact on global healthcare."
        />

        <section className="bg-white py-24 sm:py-32">
          <Container>
            <SectionHeading
              eyebrow="Why Sanomed"
              align="center"
              title="Why choose a career at Sanomed Health Care?"
              description="Five reasons our team members give when asked why they stay, and why others join."
            />

            <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {reasons.map(({ icon: Icon, title, copy }, index) => (
                <Reveal key={title} delay={index * 0.06} as="li">
                  <article className="site-card site-card-light group h-full p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-300 hover:bg-white hover:shadow-lift">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-950 text-accent-300 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-5.5 w-5.5" aria-hidden />
                    </span>
                    <h3 className="mt-6 text-lg font-semibold text-navy-950">
                      {title}
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-navy-700/85">
                      {copy}
                    </p>
                  </article>
                </Reveal>
              ))}

              <Reveal delay={0.3} as="li">
                <div className="site-card site-card-dark flex h-full flex-col justify-between p-8">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      No suitable opening listed?
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-navy-100/70">
                      We review speculative applications from strong candidates
                      year-round. Send your CV with a short note on where you
                      believe you would add value.
                    </p>
                  </div>
                  <a
                    href={`mailto:${company.emails.secondary}?subject=${subject}`}
                    className="group mt-7 inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-all hover:bg-accent-400"
                  >
                    Send your CV
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </a>
                </div>
              </Reveal>
            </ul>
          </Container>
        </section>

        <section className="bg-mist-100 py-24 sm:py-32">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <Reveal>
                <SectionHeading
                  eyebrow="Functions"
                  title="Where our people work"
                  description="Openings arise across the full breadth of our operations. Applications are welcome from experienced professionals and early-career candidates alike."
                />
              </Reveal>

              <Reveal delay={0.1}>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {functions.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-mist-300 bg-white px-5 py-4 text-[0.95rem] font-medium text-navy-900 transition-colors hover:border-accent-300"
                    >
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="site-card site-card-white mt-12 flex flex-col items-start justify-between gap-6 p-9 sm:flex-row sm:items-center">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-500/12 text-accent-700">
                    <Mail className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold text-navy-950">
                      Apply to Sanomed Health Care
                    </h2>
                    <p className="mt-2 max-w-xl text-[0.95rem] leading-relaxed text-navy-700/85">
                      Email your CV and a covering note to{" "}
                      <a
                        href={`mailto:${company.emails.secondary}?subject=${subject}`}
                        className="font-medium text-accent-700 underline-offset-4 hover:underline"
                      >
                        {company.emails.secondary}
                      </a>
                      . Please state the function you are applying for in the
                      subject line.
                    </p>
                  </div>
                </div>
                <a
                  href={`mailto:${company.emails.secondary}?subject=${subject}`}
                  className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-navy-950 px-7 py-3.5 text-sm font-semibold text-white shadow-elevate transition-all hover:bg-navy-800 hover:shadow-lift"
                >
                  Email your application
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </a>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="border-t border-mist-300 bg-white py-16">
          <Container>
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-accent-700">
              Continue exploring
            </h2>
            <ul className="mt-7 grid gap-4 sm:grid-cols-3">
              {RELATED_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="site-card site-card-light group flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-300 hover:bg-white hover:shadow-elevate"
                  >
                    <span className="flex items-center justify-between gap-3 text-base font-semibold text-navy-950">
                      {item.title}
                      <ArrowRight
                        className="h-4 w-4 shrink-0 text-accent-600 transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </span>
                    <span className="mt-2 text-sm leading-relaxed text-navy-700/85">
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
