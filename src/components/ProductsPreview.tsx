import Link from "next/link";
import { ArrowRight, Pill } from "lucide-react";
import { dosageForms, therapyAreas } from "@/lib/site";
import { Container, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

/**
 * Home-page teaser only. Therapy-area descriptions live solely on /products.
 * this section lists the coverage and routes there rather than repeating it.
 */
export function ProductsPreview() {
  return (
    <section id="products" className="relative bg-white py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Products"
            title="An extensive and diverse range of medicines"
            description="Our portfolio spans chronic and acute treatments across six therapy areas, reflecting a commitment to meeting varied healthcare needs under a single, documented quality standard."
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

        <Reveal delay={0.08}>
          <div className="site-card site-card-light mt-12 grid gap-8 p-8 sm:p-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="flex items-center gap-2.5">
                <Pill className="h-4.5 w-4.5 text-accent-600" aria-hidden />
                <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-navy-500">
                  Therapy Areas
                </h3>
              </div>
              <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {therapyAreas.map((area) => (
                  <li
                    key={area.name}
                    className="flex items-baseline gap-2.5 text-[0.95rem] font-medium text-navy-900"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 translate-y-[-0.15rem] rounded-full bg-accent-500"
                      aria-hidden
                    />
                    {area.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-mist-300 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
              <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-navy-500">
                Dosage Forms
              </h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {dosageForms.map((form) => (
                  <li
                    key={form}
                    className="rounded-full border border-mist-300 bg-white px-3.5 py-1.5 text-sm font-medium text-navy-800"
                  >
                    {form}
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-sm leading-relaxed text-navy-700/85">
                Each area is detailed on the{" "}
                <Link
                  href="/products"
                  className="font-medium text-accent-700 underline-offset-4 hover:underline"
                >
                  products page
                </Link>
                , along with the documentation issued against every batch.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
