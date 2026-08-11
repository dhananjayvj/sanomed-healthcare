import { CalendarDays, Factory, MapPin, ScrollText } from "lucide-react";
import { addressLines, company } from "@/lib/site";
import { Container, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const registryFacts = [
  {
    icon: ScrollText,
    label: "Corporate Identity Number",
    value: company.cin,
  },
  {
    icon: CalendarDays,
    label: "Date of Incorporation",
    value: `${company.incorporated} · ${company.registrar}`,
  },
  {
    icon: Factory,
    label: "Industry Classification",
    value: company.activity,
  },
  {
    icon: MapPin,
    label: "Registered Office",
    value: `${company.address.line2}, ${company.address.city} ${company.address.pincode}`,
  },
];

export function About() {
  return (
    <section id="about" className="relative bg-mist-50 py-24 sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="About Us"
              title={
                <>
                  A registered pharmaceutical manufacturer built on{" "}
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
                  chemical and allied manufacturing.
                </>
              }
            />

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-navy-700/85">
                The company is classified as a private, non-government entity
                limited by shares, operating under NIC code 24290 — the
                manufacture of chemicals and chemical products. Across drug
                development, formulation and supply, every engagement is
                structured around the same principle that governs the
                company&apos;s statutory record: precise documentation,
                verifiable at every step.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-9 rounded-2xl border border-mist-300 bg-white p-6 shadow-elevate">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-950 text-accent-300">
                    <MapPin className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-navy-500">
                      Registered &amp; Operating Address
                    </p>
                    <address className="mt-2 text-[0.95rem] not-italic leading-relaxed text-navy-900">
                      {addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08} className="lg:pt-16">
            <ul className="grid gap-4 sm:grid-cols-2">
              {registryFacts.map(({ icon: Icon, label, value }) => (
                <li
                  key={label}
                  className="group rounded-2xl border border-mist-300 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-300 hover:shadow-elevate"
                >
                  <Icon
                    className="h-5 w-5 text-accent-600 transition-transform duration-300 group-hover:scale-110"
                    aria-hidden
                  />
                  <p className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-navy-500">
                    {label}
                  </p>
                  <p className="mt-2 text-[0.95rem] font-medium leading-snug text-navy-950">
                    {value}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-4 overflow-hidden rounded-2xl border border-navy-800 bg-navy-950 p-7">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-accent-300">
                Operating Principle
              </p>
              <p className="mt-4 text-lg font-medium leading-snug text-white">
                &ldquo;If it isn&apos;t documented, it didn&apos;t happen. Every
                batch, every specification, every release — recorded, reviewed
                and retrievable.&rdquo;
              </p>
              <p className="mt-4 text-sm text-navy-100/60">
                Quality doctrine, {company.shortName}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
