import { Gavel, LineChart, ShieldCheck } from "lucide-react";
import { governancePillars, leadership } from "@/lib/site";
import { Container, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

/** Positional icons for the board pillars defined in site.ts. */
const pillarIcons = [Gavel, ShieldCheck, LineChart];

export function Leadership() {
  return (
    <section
      id="leadership"
      className="relative isolate overflow-hidden bg-navy-950 py-24 sm:py-32"
    >
      <div className="absolute inset-0 -z-10 bg-grid opacity-60" aria-hidden />
      <div
        className="absolute -top-32 left-1/3 -z-10 h-96 w-96 rounded-full bg-accent-600/15 blur-[120px]"
        aria-hidden
      />

      <Container>
        <SectionHeading
          tone="light"
          align="center"
          eyebrow="Leadership & Governance"
          title="Directed by a board accountable for compliance and quality"
          description="The company is led by two directors whose mandates are deliberately complementary — one anchored in operational quality, the other in corporate governance."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {leadership.map((person, index) => (
            <Reveal key={person.name} delay={index * 0.1}>
              <article className="group h-full rounded-3xl border border-white/10 bg-white/[0.035] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent-400/35 hover:bg-white/[0.06]">
                <div className="flex items-center gap-4">
                  <span
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-accent-400 to-accent-700 text-lg font-semibold text-navy-950"
                    aria-hidden
                  >
                    {person.initials}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {person.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent-300">
                      {person.role}
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-[0.95rem] leading-relaxed text-navy-100/70">
                  {person.bio}
                </p>

                <p className="mt-6 inline-flex rounded-full border border-white/12 bg-navy-900/60 px-3.5 py-1.5 text-xs font-medium text-navy-100/75">
                  {person.focus}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {governancePillars.map(({ title, copy }, index) => {
            const Icon = pillarIcons[index];
            return (
              <Reveal key={title} delay={0.15 + index * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-navy-900/40 p-7">
                  <Icon className="h-5 w-5 text-accent-400" aria-hidden />
                  <h4 className="mt-4 text-base font-semibold text-white">
                    {title}
                  </h4>
                  <p className="mt-2.5 text-sm leading-relaxed text-navy-100/65">
                    {copy}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
