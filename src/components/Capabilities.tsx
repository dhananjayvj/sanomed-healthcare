import Link from "next/link";
import {
  ArrowRight,
  Beaker,
  ClipboardCheck,
  FlaskConical,
  Lightbulb,
  Microscope,
  PackageCheck,
  Truck,
  Workflow,
} from "lucide-react";
import { Container, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const capabilities = [
  {
    icon: Lightbulb,
    title: "Drug Development",
    copy: "A comprehensive development path from early-stage research through formulation, stability study and regulatory dossier — targeting safe, effective therapies for unmet medical needs.",
    points: ["Early-stage research", "Formulation", "Regulatory dossier"],
  },
  {
    icon: FlaskConical,
    title: "Specialty Chemical Manufacturing",
    copy: "Production of fine and specialty chemicals to customer specification — from gram-scale trial batches through to sustained commercial supply under controlled process parameters.",
    points: ["Custom specification", "Controlled reactions", "Scale-up support"],
  },
  {
    icon: Beaker,
    title: "Healthcare Product Synthesis",
    copy: "Synthesis and formulation of healthcare-grade intermediates and finished products, with material provenance and process history documented against every batch produced.",
    points: ["Intermediates", "Formulation", "Batch genealogy"],
  },
  {
    icon: Microscope,
    title: "Quality Assurance & Testing",
    copy: "Stringent in-process and finished-goods testing against defined acceptance criteria — safeguarding patient safety and product integrity at every stage of our operations.",
    points: ["In-process checks", "COA issuance", "Retention samples"],
  },
  {
    icon: Workflow,
    title: "Contract Manufacturing",
    copy: "Dedicated contract and third-party manufacturing under confidentiality — your specification, your quality standard, our plant, capacity and documentation discipline.",
    points: ["Third-party supply", "NDA-backed", "Committed capacity"],
  },
  {
    icon: Truck,
    title: "Marketing & Distribution",
    copy: "Patient-centric distribution that reaches healthcare professionals and patients reliably, with cold-chain-aware logistics and channel partners held to the same standards we set internally.",
    points: ["Channel partners", "Reliable supply", "Professional outreach"],
  },
];

const process = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Specification & Feasibility",
    copy: "Requirements captured, route assessed, and a technical feasibility position issued before commitment.",
  },
  {
    icon: Beaker,
    step: "02",
    title: "Trial & Validation",
    copy: "Pilot batches produced and analysed against acceptance criteria, with parameters locked on approval.",
  },
  {
    icon: PackageCheck,
    step: "03",
    title: "Production & Release",
    copy: "Commercial batches manufactured under fixed SOPs, tested, documented and released with full traceability.",
  },
];

export function Capabilities() {
  return (
    <section id="expertise" className="relative bg-mist-100 py-24 sm:py-32">
      <div
        className="absolute inset-x-0 top-0 -z-0 h-72 bg-grid-light mask-fade-b"
        aria-hidden
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Areas of Expertise"
          align="center"
          title="Six disciplines, one documented standard"
          description="Development, manufacturing, synthesis, quality, contract supply and distribution — delivered from a single registered facility under a common quality framework."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, copy, points }, index) => (
            <Reveal key={title} delay={index * 0.06}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-mist-300 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-navy-200 hover:shadow-lift">
                <span
                  className="absolute inset-x-0 top-0 h-0.5 scale-x-0 bg-linear-to-r from-accent-400 to-accent-600 transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden
                />
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-950 text-accent-300 transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-5.5 w-5.5" aria-hidden />
                </span>

                <h3 className="mt-6 text-xl font-semibold text-navy-950">
                  {title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-navy-700/85">
                  {copy}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {points.map((point) => (
                    <li
                      key={point}
                      className="rounded-full border border-mist-300 bg-mist-50 px-3 py-1.5 text-xs font-medium text-navy-700"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-[0.95rem] text-navy-700/85">
            These capabilities are applied across our{" "}
            <Link
              href="/products"
              className="group inline-flex items-center gap-1 font-medium text-accent-700 underline-offset-4 hover:underline"
            >
              product portfolio
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>{" "}
            — and governed by the{" "}
            <Link
              href="/#compliance"
              className="font-medium text-accent-700 underline-offset-4 hover:underline"
            >
              compliance systems
            </Link>{" "}
            described below.
          </p>
        </Reveal>

        {/* Delivery process */}
        <div className="mt-24">
          <SectionHeading
            eyebrow="How We Work"
            align="center"
            title="How an engagement runs"
            description="A three-stage path from enquiry to release — each stage gated by documented approval before the next begins."
          />

          <ol className="relative mt-14 grid gap-6 md:grid-cols-3">
            <span
              className="absolute inset-x-12 top-14 hidden h-px bg-linear-to-r from-mist-300 via-accent-300 to-mist-300 md:block"
              aria-hidden
            />
            {process.map(({ icon: Icon, step, title, copy }, index) => (
              <Reveal key={step} delay={index * 0.1} as="li">
                <div className="relative h-full rounded-2xl border border-mist-300 bg-white p-7 shadow-elevate">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/12 text-accent-700">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="text-2xl font-semibold tracking-tight text-mist-300">
                      {step}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-navy-950">
                    {title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-navy-700/85">
                    {copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
