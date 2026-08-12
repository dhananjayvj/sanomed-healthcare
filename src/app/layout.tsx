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
    "Sanomed Health Care Private Limited is a Bengaluru-based pharmaceutical and specialty chemical company — drug development, formulation, quality assurance and supply, with production delivered through trusted contract manufacturing partners under documented quality systems.",
  keywords: [
    "pharmaceutical company Bangalore",
    "specialty chemical solutions",
    "third-party manufacturing India",
    "healthcare product development",
    "Sanomed Health Care",
    "KSSIDC Rajajinagar",
  ],
  authors: [{ name: company.legalName }],
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: company.legalName,
    title: `${company.shortName} — ${company.tagline}`,
    description:
      "Revolutionising healthcare through innovation and excellence. Pharmaceutical and specialty chemical development and supply from Bengaluru, India.",
    images: [{ url: "/images/logo.png", width: 1358, height: 467, alt: company.shortName }],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.shortName} — ${company.tagline}`,
    description:
      "Drug development, quality assurance and supply management from a registered company in Bengaluru, India.",
    images: ["/images/logo.png"],
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
  logo: `${siteUrl}/images/logo.png`,
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
