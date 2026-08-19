import Link from "next/link";
import { Quote } from "lucide-react";
import { company } from "@/lib/site";
import { Container, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

/**
 * Corporate profile. Registry values are displayed once, in the hero card;
 * the address lives in the contact section and footer. This section carries
 * the narrative only, and links out to the rest.
 */
export function About() {
  return (
    <section id="about" className="section-space relative bg-mist-50">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="About Us"
              title={
                <>
                  A registered pharmaceutical company built on
                  <span className="text-accent-700"> documented process</span>
                </>
              }
              description={
                <>
                  Incorporated in {company.incorporated} and registered with the
                  Ministry of Corporate Affairs under the Registrar of Companies,
                  Bengaluru, we operate from the KSSIDC Industrial Estate in
                  Rajajinagar, one of Bangalore&apos;s established industrial
                  corridors for pharmaceutical, chemical and allied businesses.
                </>
              }
            />

            <Reveal delay={0.1}>
              <p className="content-measure mt-8 text-[1.0625rem] leading-7 text-navy-700">
                We are a private, non-government company limited by shares,
                operating under NIC code 24290 for the manufacture of chemicals
                and chemical products. Across{" "}
                <Link
                  href="/#expertise"
                  className="font-medium text-accent-700 underline-offset-4 hover:underline"
                >
                  product development, quality oversight and supply
                </Link>
                , we keep the work practical, clear and accountable. We shape
                the specification, oversee quality and work with trusted
                manufacturing partners so every engagement stays grounded in
                documentation a procurement or compliance team can rely on. You
                can review our{" "}
                <Link
                  href="/products"
                  className="font-medium text-accent-700 underline-offset-4 hover:underline"
                >
                  product portfolio
                </Link>{" "}
                or explore our{" "}
                <Link
                  href="/#expertise"
                  className="font-medium text-accent-700 underline-offset-4 hover:underline"
                >
                  areas of expertise
                </Link>
                .
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <figure className="site-card site-card-dark overflow-hidden p-9 sm:p-10">
              <Quote className="h-7 w-7 text-accent-400" aria-hidden />
              <blockquote className="mt-6 max-w-[23ch] text-[1.45rem] font-semibold leading-[1.22] text-white sm:text-[1.8rem]">
                If it is not documented, it has not been controlled. Every
                batch, every specification, every release, recorded, reviewed
                and retrievable.
              </blockquote>
              <p className="mt-5 max-w-[34ch] text-sm leading-7 text-navy-100/75">
                That approach shapes how we talk to clients too. Less theatre,
                more clarity on feasibility, timelines, partner fit and release
                expectations.
              </p>
              <figcaption className="mt-7 border-t border-white/10 pt-6 text-sm text-navy-100/60">
                Quality doctrine, {company.shortName}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
