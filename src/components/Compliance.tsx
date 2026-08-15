import Link from "next/link";
import { Leaf, Recycle, ScrollText, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { Container, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance",
    copy: "We adhere strictly to the guidelines and standards set by health authorities. Our regulatory affairs function ensures every product meets the required thresholds for safety, quality and efficacy before it reaches a patient.",
    tags: ["Safety", "Quality", "Efficacy"],
  },
  {
    icon: ScrollText,
    title: "Statutory Governance",
    copy: "Annual filings, board resolutions and registry disclosures are maintained on schedule with the Registrar of Companies, Bengaluru, with the same discipline we apply to batch documentation.",
    tags: ["MCA filings", "Board process", "Disclosure"],
  },
  {
    icon: Leaf,
    title: "Sustainability",
    copy: "As a responsible corporate citizen we work to minimise waste, conserve resources and adopt eco-friendly production practices across our operations and partner facilities.",
    tags: ["Waste reduction", "Resource use", "Clean process"],
  },
];

const horizons = [
  {
    icon: Sparkles,
    title: "Digital Health",
    copy: "Data-led process control and digital batch records that shorten the distance between deviation and correction.",
  },
  {
    icon: Recycle,
    title: "Personalised Medicine",
    copy: "Flexible, smaller-batch capability designed for therapies targeted at defined patient populations.",
  },
  {
    icon: TrendingUp,
    title: "Affordable Access",
    copy: "Cost-efficient production that widens access without conceding a single point of quality.",
  },
];

export function Compliance() {
  return (
    <section
      id="compliance"
      className="relative isolate overflow-hidden bg-mist-50 py-24 sm:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="Compliance & Responsibility"
          align="center"
          title="Trust is built on records, not claims"
          description="Our regulatory, governance and environmental commitments are operational systems with owners and evidence, not statements of intent."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pillars.map(({ icon: Icon, title, copy, tags }, index) => (
            <Reveal key={title} delay={index * 0.08}>
              <article className="site-card site-card-white h-full p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevate">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500/12 text-accent-700">
                  <Icon className="h-5.5 w-5.5" aria-hidden />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-navy-950">
                  {title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-navy-700/85">
                  {copy}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-mist-100 px-3 py-1.5 text-xs font-medium text-navy-700"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-[0.95rem] text-navy-700/85">
            The same discipline governs the information you send us. See our{" "}
            <Link
              href="/privacy"
              className="font-medium text-accent-700 underline-offset-4 hover:underline"
            >
              privacy policy
            </Link>
            .
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="site-card site-card-dark mt-8 overflow-hidden p-9 sm:p-11">
            <SectionHeading
              tone="light"
              eyebrow="Looking Ahead"
              title="Where the industry is going, and how we are preparing"
              description="We embrace the opportunities presented by digital health, personalised medicine and the growing demand for affordable, accessible healthcare."
            />

            <ul className="mt-10 grid gap-4 sm:grid-cols-3">
              {horizons.map(({ icon: Icon, title, copy }, index) => (
                <Reveal key={title} delay={0.1 + index * 0.08} as="li">
                  <div className="site-card h-full border-white/10 bg-white/[0.04] p-7">
                    <Icon className="h-5 w-5 text-accent-400" aria-hidden />
                    <h3 className="mt-4 text-base font-semibold text-white">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-100/65">
                      {copy}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
