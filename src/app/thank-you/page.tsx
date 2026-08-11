import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";
import { ThankYou } from "@/components/ThankYou";

export const metadata: Metadata = {
  title: "Thank you",
  description:
    "Your enquiry has been received. A member of the Sanomed Health Care team will respond within two working days.",
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ThankYou />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
