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
    <section id="about" className="relative bg-mist-50 py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="About Us"
              title={
                <>
                  A registered pharmaceutical company built on{" "}
                  <span className="text-accent-700">documented process</span>
                </>
              }
              description={
                <>
                  Incorporated in {company.incorporated} and registered with the
                  Ministry of Corporate Affairs under the Registrar of Companies,
                  Bengaluru, {company.legalName} operates from the KSSIDC
                  Industrial Estate in Rajajinagar — one of Bangalore&apos;s
                  established industrial corridors for licensed pharmaceutical,
                  chemical and allied businesses.
                </>
              }
            />

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-navy-700/85">
                The company is classified as a private, non-government entity
                limited by shares, operating under NIC code 24290 — the
                manufacture of chemicals and chemical products. Across{" "}
                <Link
                  href="/#expertise"
                  className="font-medium text-accent-700 underline-offset-4 hover:underline"
                >
                  drug development, formulation and supply
                </Link>
                , we design, specify and quality-assure every product, then
                deliver it through trusted contract manufacturing partners — so
                every engagement is structured around the same principle that
                governs the company&apos;s statutory record: precise
                documentation, verifiable at every step. You can review our{" "}
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
            <figure className="overflow-hidden rounded-3xl border border-navy-800 bg-navy-950 p-9 sm:p-10">
              <Quote className="h-7 w-7 text-accent-400" aria-hidden />
              <blockquote className="mt-6 text-xl font-medium leading-snug text-white sm:text-2xl">
                If it isn&apos;t documented, it didn&apos;t happen. Every batch,
                every specification, every release — recorded, reviewed and
                retrievable.
              </blockquote>
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
