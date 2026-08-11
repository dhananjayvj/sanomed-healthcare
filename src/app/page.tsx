import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { VisionMission } from "@/components/VisionMission";
import { Capabilities } from "@/components/Capabilities";
import { ProductsPreview } from "@/components/ProductsPreview";
import { Leadership } from "@/components/Leadership";
import { Compliance } from "@/components/Compliance";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";

export default function Home() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-full focus:bg-white focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-navy-950"
      >
        Skip to content
      </a>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <VisionMission />
        <Capabilities />
        <ProductsPreview />
        <Leadership />
        <Compliance />
        <Contact />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
