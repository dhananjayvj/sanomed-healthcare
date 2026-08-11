import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { addressLines, company } from "@/lib/site";
import { Container, SectionHeading } from "./Section";
import { ContactForm } from "./ContactForm";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative bg-mist-100 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          align="center"
          title="Start a conversation with our team"
          description="Whether you are scoping a contract manufacturing partner or evaluating a specialty chemical supply, we will respond with a considered technical position — not a sales pitch."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="space-y-4">
            <div className="rounded-3xl border border-navy-800 bg-navy-950 p-8">
              <h3 className="text-lg font-semibold text-white">
                Registered Office
              </h3>
              <div className="mt-6 flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/8 text-accent-300">
                  <MapPin className="h-4.5 w-4.5" aria-hidden />
                </span>
                <address className="text-[0.95rem] not-italic leading-relaxed text-navy-100/80">
                  {addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>

              <div className="mt-6 border-t border-white/10 pt-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/8 text-accent-300">
                    <Mail className="h-4.5 w-4.5" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-navy-100/45">
                      Email
                    </p>
                    <a
                      href={`mailto:${company.emails.primary}`}
                      className="mt-1.5 block truncate text-[0.95rem] text-white underline-offset-4 transition-colors hover:text-accent-300 hover:underline"
                    >
                      {company.emails.primary}
                    </a>
                    <a
                      href={`mailto:${company.emails.secondary}`}
                      className="mt-1 block truncate text-[0.95rem] text-navy-100/75 underline-offset-4 transition-colors hover:text-accent-300 hover:underline"
                    >
                      {company.emails.secondary}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-white/10 pt-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/8 text-accent-300">
                    <Clock className="h-4.5 w-4.5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-navy-100/45">
                      Business Hours
                    </p>
                    <p className="mt-1.5 text-[0.95rem] text-white">
                      Monday – Saturday · 9:30 AM – 6:30 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-mist-300 bg-white p-6">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4.5 w-4.5 shrink-0 text-accent-600" aria-hidden />
                <p className="text-sm leading-relaxed text-navy-700">
                  For procurement and contract manufacturing discussions, please
                  include indicative volumes and timelines in your enquiry — it
                  lets us reply with specifics on the first response.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-mist-300 bg-white p-6">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-navy-500">
                Corporate Identity Number
              </p>
              <p className="mt-2 font-mono text-sm font-medium tracking-tight text-navy-950">
                {company.cin}
              </p>
              <p className="mt-2 text-xs text-navy-500">
                {company.classification}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
