import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Section";
import { addressLines, company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Sanomed Health Care Private Limited collects, uses and protects the information you submit through this website.",
};

const LAST_UPDATED = "11 August 2026";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          path="/privacy"
          breadcrumb="Privacy Policy"
          eyebrow="Legal"
          title="Privacy Policy"
          description="This policy explains what information this website collects, why it is collected, and how it is handled. It reflects how the site actually operates — not a generic template."
        />

        <section className="bg-white py-20 sm:py-28">
          <Container className="max-w-3xl">
            <p className="text-sm text-navy-500">
              Last updated: {LAST_UPDATED}
            </p>

            <div className="mt-10 space-y-12">
              <section>
                <h2 className="text-2xl font-semibold text-navy-950">
                  Who we are
                </h2>
                <p className="mt-4 leading-relaxed text-navy-700">
                  {company.legalName} (CIN {company.cin}) is a private limited
                  company registered with the Registrar of Companies, Bengaluru,
                  with its registered office at {addressLines.join(", ")}. In
                  this policy, &ldquo;we&rdquo; and &ldquo;us&rdquo; refer to
                  that company, and &ldquo;this website&rdquo; refers to
                  sanomedhealthcare.com.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-navy-950">
                  What we collect
                </h2>
                <p className="mt-4 leading-relaxed text-navy-700">
                  We collect only the information you choose to send us. If you
                  complete the enquiry form, that is:
                </p>
                <ul className="mt-4 space-y-2.5 text-navy-700">
                  {[
                    "Your name",
                    "Your organisation",
                    "Your email address",
                    "Your phone number, if you choose to provide it",
                    "The area of interest you select and the requirement you describe",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed">
                      <span
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 leading-relaxed text-navy-700">
                  This website is a static site. It sets no advertising or
                  tracking cookies, runs no analytics or advertising scripts,
                  and does not build a profile of your visit. Standard technical
                  request logs may be retained by our hosting provider for
                  security and reliability purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-navy-950">
                  How your enquiry reaches us
                </h2>
                <p className="mt-4 leading-relaxed text-navy-700">
                  The enquiry form composes your message and sends it to{" "}
                  <a
                    href={`mailto:${company.emails.primary}`}
                    className="font-medium text-accent-700 underline-offset-4 hover:underline"
                  >
                    {company.emails.primary}
                  </a>
                  . Depending on configuration, this happens either through your
                  own email client or through a form-delivery provider acting on
                  our instructions. In both cases the content of the message and
                  the details above are what is transmitted.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-navy-950">
                  Why we use it
                </h2>
                <p className="mt-4 leading-relaxed text-navy-700">
                  We use your details solely to respond to your enquiry, to
                  assess technical feasibility, and to maintain the ordinary
                  business correspondence that follows. We do not sell your
                  information, and we do not share it with third parties except
                  where necessary to deliver our response (for example, our
                  email provider) or where required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-navy-950">
                  How long we keep it
                </h2>
                <p className="mt-4 leading-relaxed text-navy-700">
                  Enquiry correspondence is retained for as long as needed to
                  handle your request and to meet our record-keeping and
                  statutory obligations, after which it is deleted. You may ask
                  us to delete your details sooner at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-navy-950">
                  Your choices
                </h2>
                <p className="mt-4 leading-relaxed text-navy-700">
                  You can ask us to confirm what information about you we hold,
                  to correct it if it is inaccurate, or to delete it. Write to{" "}
                  <a
                    href={`mailto:${company.emails.primary}`}
                    className="font-medium text-accent-700 underline-offset-4 hover:underline"
                  >
                    {company.emails.primary}
                  </a>{" "}
                  and we will respond within a reasonable period. If you are not
                  satisfied with our response, you may raise the matter with the
                  relevant data protection authority.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-navy-950">
                  Security
                </h2>
                <p className="mt-4 leading-relaxed text-navy-700">
                  The website is served over HTTPS. Access to enquiry
                  correspondence is limited to the personnel who need it in
                  order to respond. No transmission over the internet can be
                  guaranteed completely secure, so please do not send sensitive
                  personal or clinical information through the enquiry form.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-navy-950">
                  Changes to this policy
                </h2>
                <p className="mt-4 leading-relaxed text-navy-700">
                  We may update this policy as our practices or the applicable
                  law change. The date at the top of this page indicates when it
                  was last revised.
                </p>
              </section>

              <section className="rounded-3xl border border-mist-300 bg-mist-50 p-8">
                <h2 className="text-xl font-semibold text-navy-950">
                  Contacting us
                </h2>
                <p className="mt-4 leading-relaxed text-navy-700">
                  Questions about this policy can be sent to{" "}
                  <a
                    href={`mailto:${company.emails.primary}`}
                    className="font-medium text-accent-700 underline-offset-4 hover:underline"
                  >
                    {company.emails.primary}
                  </a>{" "}
                  or{" "}
                  <a
                    href={`mailto:${company.emails.secondary}`}
                    className="font-medium text-accent-700 underline-offset-4 hover:underline"
                  >
                    {company.emails.secondary}
                  </a>
                  , or posted to our registered office at the address above. You
                  can also reach us through the{" "}
                  <Link
                    href="/#contact"
                    className="font-medium text-accent-700 underline-offset-4 hover:underline"
                  >
                    enquiry form
                  </Link>
                  .
                </p>
              </section>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
