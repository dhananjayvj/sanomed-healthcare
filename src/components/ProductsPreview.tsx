import Link from "next/link";
import { ArrowRight, Pill } from "lucide-react";
import { dosageForms, therapyAreas } from "@/lib/site";
import { Container, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

export function ProductsPreview() {
  return (
    <section id="products" className="relative bg-white py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Products"
            title="An extensive and diverse range of medicines"
            description="Our portfolio spans chronic and acute treatments across multiple therapy areas — reflecting a commitment to meeting varied healthcare needs from a single manufacturing base."
          />
          <Reveal delay={0.1}>
            <Link
              href="/products"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-navy-200 bg-white px-6 py-3 text-sm font-semibold text-navy-950 transition-all hover:border-accent-400 hover:shadow-elevate"
            >
              View full portfolio
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {therapyAreas.map((area, index) => (
            <Reveal key={area.name} delay={index * 0.06} as="li">
              <div className="group h-full rounded-2xl border border-mist-300 bg-mist-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent-300 hover:shadow-elevate">
                <div className="flex items-start justify-between gap-3">
                  <Pill className="h-5 w-5 text-accent-600" aria-hidden />
                  <span className="rounded-full bg-navy-950 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-accent-300">
                    {area.type}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy-950">
                  {area.name}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-navy-700/85">
                  {area.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.15}>
          <div className="mt-8 rounded-2xl border border-mist-300 bg-mist-50 p-7">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-navy-500">
              Dosage Forms Supported
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {dosageForms.map((form) => (
                <li
                  key={form}
                  className="rounded-full border border-mist-300 bg-white px-3.5 py-1.5 text-sm font-medium text-navy-800"
                >
                  {form}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
