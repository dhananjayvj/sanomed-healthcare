import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { company, addressOneLine } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.sanomedhealthcare.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.shortName} — ${company.tagline}`,
    template: `%s | ${company.shortName}`,
  },
  description:
    "Sanomed Health Care Private Limited is a Bengaluru-based pharmaceutical and specialty chemical manufacturer — drug development, healthcare product synthesis, quality assurance and contract manufacturing under documented quality systems.",
  keywords: [
    "pharmaceutical manufacturer Bangalore",
    "specialty chemical manufacturing",
    "contract manufacturing India",
    "healthcare product synthesis",
    "Sanomed Health Care",
    "KSSIDC Rajajinagar",
  ],
  authors: [{ name: company.legalName }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: company.legalName,
    title: `${company.shortName} — ${company.tagline}`,
    description:
      "Revolutionising healthcare through innovation and excellence. Pharmaceutical and specialty chemical manufacturing from Bengaluru, India.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.shortName} — ${company.tagline}`,
    description:
      "Drug development, contract manufacturing and quality assurance from a registered facility in Bengaluru, India.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#081227",
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.legalName,
  alternateName: company.shortName,
  url: siteUrl,
  description: company.tagline,
  foundingDate: company.incorporated,
  identifier: company.cin,
  email: company.emails.primary,
  telephone: company.phone.href,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${company.address.line1}, ${company.address.line2}`,
    addressLocality: company.address.city,
    addressRegion: company.address.state,
    postalCode: company.address.pincode,
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: company.emails.primary,
    telephone: company.phone.href,
    areaServed: "IN",
    availableLanguage: ["en"],
  },
  location: addressOneLine,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-mist-50">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
