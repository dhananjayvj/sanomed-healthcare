"use client";

import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Pill } from "lucide-react";
import { dosageForms, therapyAreas } from "@/lib/site";
import { Container, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

/**
 * Home-page teaser only. Therapy-area descriptions live solely on /products.
 * this section lists the coverage and routes there rather than repeating it.
 */
export function ProductsPreview() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const springImageY = useSpring(imageY, {
    stiffness: 110,
    damping: 18,
    mass: 0.7,
  });

  return (
    <section
      id="products"
      ref={sectionRef}
      className="section-space relative overflow-hidden bg-white"
    >
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Products"
            title="A product portfolio built for real treatment needs"
            description="We support everyday healthcare categories with a portfolio shaped around what clinicians, distributors and patients actually need: reliable formats, dependable supply and documentation that holds up when it matters."
          />
          <Reveal delay={0.1}>
            <Link
              href="/products"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-navy-200 bg-white px-6 py-3 text-sm font-semibold text-navy-950 transition-[border-color,transform,box-shadow] duration-200 hover:border-accent-400 hover:shadow-elevate active:scale-[0.985]"
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
          <div className="site-card site-card-tight site-card-plain mt-12 overflow-hidden">
            <div className="relative min-h-[34rem] overflow-hidden rounded-[14px]">
              <motion.div
                className="absolute inset-0"
                style={{ y: springImageY }}
                aria-hidden
              >
                <Image
                  src="/images/tablet.jpg"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={false}
                />
              </motion.div>
              <div
                className="absolute inset-0 bg-linear-to-r from-navy-950/92 via-navy-950/76 to-navy-900/52"
                aria-hidden
              />
              <div
                className="absolute inset-0 bg-linear-to-t from-navy-950/76 via-transparent to-accent-500/16"
                aria-hidden
              />
              <div
                className="absolute inset-y-6 left-6 right-6 rounded-[1.2rem] border border-white/12 bg-white/[0.05] backdrop-blur-[6px] lg:right-[46%]"
                aria-hidden
              />

              <div className="relative grid gap-10 p-8 sm:p-10 lg:min-h-[34rem] lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:p-12">
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <Pill className="h-4.5 w-4.5 text-accent-300" aria-hidden />
                      <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/74">
                        Therapy Areas
                      </h3>
                    </div>
                    <p className="mt-4 max-w-[56ch] text-sm leading-7 text-white/82">
                      From long-term management therapies to fast-moving acute care,
                      our range is structured to make product conversations clearer
                      and supply decisions easier.
                    </p>
                    <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                      {therapyAreas.map((area) => (
                        <li
                          key={area.name}
                          className="flex items-baseline gap-2.5 text-[0.95rem] font-medium text-white"
                        >
                          <span
                            className="h-1.5 w-1.5 shrink-0 translate-y-[-0.15rem] rounded-full bg-accent-300"
                            aria-hidden
                          />
                          {area.name}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="mt-8 max-w-[52ch] text-sm leading-7 text-white/72">
                    The{" "}
                    <Link
                      href="/products"
                      className="font-medium text-accent-200 underline-offset-4 hover:text-white hover:underline"
                    >
                      products page
                    </Link>{" "}
                    gives the fuller picture, including the therapy mix and the
                    documentation that travels with each batch.
                  </p>
                </div>

                <div className="relative self-end rounded-[1.5rem] border border-white/14 bg-navy-950/32 p-6 backdrop-blur-md lg:p-7">
                  <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/74">
                    Dosage Forms
                  </h3>
                  <p className="mt-4 max-w-[38ch] text-sm leading-7 text-white/82">
                    We keep the format mix practical, familiar and easy to place
                    into existing treatment and distribution plans.
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {dosageForms.map((form) => (
                      <li
                        key={form}
                        className="rounded-full border border-white/16 bg-white/10 px-3.5 py-1.5 text-sm font-medium text-white"
                      >
                        {form}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
