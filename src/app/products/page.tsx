import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Pill, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";
import { PageHeader } from "@/components/PageHeader";
import { Container, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { company, dosageForms, therapyAreas } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "An extensive and diverse portfolio of pharmaceutical products from Sanomed Health Care, with chronic and acute treatments across cardiovascular, anti-infective, analgesic, gastrointestinal, nutraceutical and dermatology therapy areas.",
};

const RELATED_LINKS = [
  {
    href: "/#expertise",
    title: "Areas of Expertise",
    copy: "The six disciplines behind everything in this portfolio.",
  },
  {
    href: "/#compliance",
    title: "Compliance",
    copy: "The regulatory and governance systems every batch passes through.",
  },
  {
    href: "/careers",
    title: "Careers",
    copy: "Join the team that develops and supplies these products.",
  },
];

const assurances = [
  "Produced under documented quality systems",
  "Certificate of analysis issued for every batch",
  "Retention samples held against each release",
  "Full material provenance and batch genealogy",
];

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          path="/products"
          breadcrumb="Products"
          eyebrow="Our Portfolio"
          title="An extensive and diverse range of medicines"
              description="We take pride in our ability to bring a comprehensive pharmaceutical portfolio to market, with each product targeting chronic or acute treatment needs and every batch held to the same documented standard."
        />

        <section className="bg-white py-24 sm:py-32">
          <Container>
            <SectionHeading
              eyebrow="Therapy Areas"
              title="Coverage across chronic and acute care"
              description="Our commitment to meeting varied healthcare needs is reflected in the breadth of our portfolio and the depth of documentation behind it."
            />

            <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {therapyAreas.map((area, index) => (
                <Reveal key={area.name} delay={index * 0.06} as="li">
                  <article className="site-card site-card-light group h-full p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-300 hover:bg-white hover:shadow-lift">
                    <div className="flex items-start justify-between gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-950 text-accent-300">
                        <Pill className="h-5.5 w-5.5" aria-hidden />
                      </span>
                      <span className="rounded-full border border-mist-300 bg-white px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-navy-700">
                        {area.type}
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-navy-950">
                      {area.name}
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-navy-700/85">
                      {area.copy}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ul>
          </Container>
        </section>

        <section className="bg-mist-100 py-24 sm:py-32">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <Reveal>
                <SectionHeading
                  eyebrow="Dosage Forms"
                  title="Formats we offer"
                  description="Formulation capability across solid, liquid and topical presentations, produced through partner manufacturers to our specification."
                />
                <ul className="mt-8 flex flex-wrap gap-2.5">
                  {dosageForms.map((form) => (
                    <li
                      key={form}
                      className="rounded-full border border-mist-300 bg-white px-4 py-2 text-sm font-medium text-navy-800"
                    >
                      {form}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="site-card site-card-dark p-9">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500 text-navy-950">
                    <ShieldCheck className="h-5.5 w-5.5" aria-hidden />
                  </span>
                  <h2 className="mt-6 text-2xl font-semibold text-white">
                    What ships with every product
                  </h2>
                  <ul className="mt-7 space-y-4">
                    {assurances.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2
                          className="mt-0.5 h-4.5 w-4.5 shrink-0 text-accent-400"
                          aria-hidden
                        />
                        <span className="text-[0.95rem] leading-relaxed text-navy-100/80">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="site-card site-card-white mt-10 flex flex-col items-start justify-between gap-6 p-9 sm:flex-row sm:items-center">
                <div>
                  <h2 className="text-xl font-semibold text-navy-950">
                    Looking for a specific product or specification?
                  </h2>
                  <p className="mt-2 max-w-xl text-[0.95rem] leading-relaxed text-navy-700/85">
                    Share your requirement and our team will confirm
                    availability, indicative timelines and the technical
                    position for your specification.
                  </p>
                </div>
                <Link
                  href="/#contact"
                  className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-navy-950 px-7 py-3.5 text-sm font-semibold text-white shadow-elevate transition-all hover:bg-navy-800 hover:shadow-lift"
                >
                  Request product details
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              </div>
            </Reveal>

            <p className="mt-8 text-xs leading-relaxed text-navy-500">
              Product information on this page is provided for general
              informational purposes to healthcare professionals and business
              partners. It is not medical advice and does not constitute an
              offer of sale. Availability is subject to applicable regulatory
              approval. For product-specific documentation, contact{" "}
              {company.emails.primary}.
            </p>
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
