import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container, Eyebrow } from "./Section";

const SITE_URL = "https://www.sanomedhealthcare.com";

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumb,
  path,
}: {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  breadcrumb: string;
  /** Route of this page, e.g. "/products" — used for breadcrumb structured data. */
  path: string;
}) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: breadcrumb,
        item: `${SITE_URL}${path}`,
      },
    ],
  };

  return (
    <section className="relative isolate overflow-hidden bg-white pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div className="absolute inset-0 -z-10 bg-grid-light mask-fade-b" aria-hidden />
      <div
        className="absolute -top-32 right-0 -z-10 h-96 w-96 rounded-full bg-accent-500/15 blur-[120px]"
        aria-hidden
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Container>
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5 text-sm text-navy-500">
            <li>
              <Link
                href="/"
                className="underline-offset-4 transition-colors hover:text-navy-950 hover:underline"
              >
                Home
              </Link>
            </li>
            <li aria-hidden>
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li className="font-medium text-accent-700" aria-current="page">
              {breadcrumb}
            </li>
          </ol>
        </nav>

        <div className="mt-8 max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.1] text-navy-950 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-navy-700/85">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
