"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { springSoft } from "@/lib/motion";
import { company } from "@/lib/site";

/**
 * Mobile-only action bar. Appears once the hero CTAs have scrolled away and
 * retreats while the contact form itself is on screen, so it never competes
 * with the form it points at.
 */
export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const contact = document.getElementById("contact");

    let contactInView = false;
    let scrolledPastHero = false;

    const update = () => setVisible(scrolledPastHero && !contactInView);

    const onScroll = () => {
      scrolledPastHero = window.scrollY > 620;
      update();
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    let observer: IntersectionObserver | undefined;
    if (contact) {
      observer = new IntersectionObserver(
        ([entry]) => {
          contactInView = entry.isIntersecting;
          update();
        },
        { rootMargin: "-20% 0px -20% 0px" },
      );
      observer.observe(contact);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ y: 90, opacity: 0, scale: 0.98, filter: "blur(6px)" }}
          animate={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ y: 90, opacity: 0, scale: 0.98, filter: "blur(6px)" }}
          transition={springSoft}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy-950/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl lg:hidden"
        >
          <div className="flex items-center gap-3">
            <a
              href={`tel:${company.phone.href}`}
              aria-label={`Call ${company.phone.display}`}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-5 w-5" aria-hidden />
            </a>
            <Link
              href="/#contact"
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-accent-400"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
