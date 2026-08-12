import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { addressLines, company, contactEmails } from "@/lib/site";
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
          description="Whether you are scoping a third-party manufacturing engagement or evaluating a specialty chemical supply, we will respond with a considered technical position — not a sales pitch."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="min-w-0 space-y-4">
            <div className="site-card site-card-dark p-5 sm:p-8">
              <h3 className="text-lg font-semibold text-white">
                Talk to us directly
              </h3>

              <div className="mt-7 flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-500 text-navy-950">
                  <Phone className="h-4.5 w-4.5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-navy-100/45">
                    Phone
                  </p>
                  <a
                    href={`tel:${company.phone.href}`}
                    className="mt-1.5 block text-lg font-semibold text-white underline-offset-4 transition-colors hover:text-accent-300 hover:underline"
                  >
                    {company.phone.display}
                  </a>
                </div>
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
                    <div className="mt-1.5 space-y-1.5">
                      {contactEmails.map((email) => (
                        <a
                          key={email}
                          href={`mailto:${email}`}
                          className="block break-all text-sm text-white underline-offset-4 transition-transform hover:translate-x-1 hover:text-accent-300 hover:underline sm:text-[0.95rem]"
                        >
                          {email}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-white/10 pt-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/8 text-accent-300">
                    <MapPin className="h-4.5 w-4.5" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-navy-100/45">
                      Registered Office
                    </p>
                    <address className="mt-1.5 text-[0.95rem] not-italic leading-relaxed text-navy-100/80">
                      {addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-6">
                <Clock className="h-4 w-4 shrink-0 text-accent-400" aria-hidden />
                <p className="text-sm text-navy-100/70">{company.hours}</p>
              </div>
            </div>

            <div className="site-card site-card-white p-6">
              <p className="text-sm leading-relaxed text-navy-700">
                For procurement and third-party manufacturing discussions,
                please include indicative volumes and timelines in your enquiry
                — it lets us reply with specifics on the first response.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="min-w-0">
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
