import { Compass, Target } from "lucide-react";
import { coreValues, mission, vision } from "@/lib/site";
import { Container, Eyebrow, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

export function VisionMission() {
  return (
    <section id="vision" className="relative bg-white py-24 sm:py-32">
      <Container>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <article className="site-card site-card-light h-full p-9 transition-shadow duration-300 hover:shadow-elevate">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-950 text-accent-300">
                <Compass className="h-5.5 w-5.5" aria-hidden />
              </span>
              <Eyebrow className="mt-7">Our Vision</Eyebrow>
              <p className="mt-4 text-xl font-medium leading-snug text-navy-950 sm:text-2xl">
                {vision}
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="site-card site-card-dark h-full p-9">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500 text-navy-950">
                <Target className="h-5.5 w-5.5" aria-hidden />
              </span>
              <Eyebrow tone="light" className="mt-7">
                Our Mission
              </Eyebrow>
              <p className="mt-4 text-xl font-medium leading-snug text-white sm:text-2xl">
                {mission}
              </p>
            </article>
          </Reveal>
        </div>

        <div className="mt-20">
          <SectionHeading
            eyebrow="Core Values"
            align="center"
            title="Five commitments that govern how we decide"
            description="Our values are not a poster in the lobby — they are the criteria against which operational, scientific and commercial decisions are tested."
          />

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.06} as="li">
                <div className="site-card site-card-light group h-full p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent-300 hover:bg-white hover:shadow-elevate">
                  <span
                    className="text-sm font-semibold tabular-nums text-accent-600"
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-navy-950">
                    {value.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-navy-700/85">
                    {value.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
