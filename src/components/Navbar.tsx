"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { EASE_OUT } from "@/lib/motion";
import { navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Wordmark } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-accent-300/60 bg-linear-to-r from-accent-50 via-accent-100 to-accent-200 shadow-elevate backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-18 w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8"
      >
        <Link href="/" className="shrink-0" aria-label="Sanomed Health Care home">
          <Wordmark />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-navy-700 transition-colors hover:bg-navy-50 hover:text-navy-950"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden items-center gap-1.5 rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white shadow-elevate transition-all hover:bg-accent-400 hover:shadow-lift active:scale-[0.98] sm:inline-flex"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy-200 text-navy-950 transition-colors hover:bg-navy-50 lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0, y: -10, filter: "blur(6px)" }}
            animate={{ opacity: 1, height: "auto", y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, height: 0, y: -10, filter: "blur(6px)" }}
            transition={{
              height: { duration: 0.24, ease: EASE_OUT },
              opacity: { duration: 0.18, ease: EASE_OUT },
              y: { duration: 0.24, ease: EASE_OUT },
              filter: { duration: 0.18, ease: EASE_OUT },
            }}
            className="overflow-hidden border-t border-accent-300/60 bg-linear-to-r from-accent-50 via-accent-100 to-accent-200 backdrop-blur-xl lg:hidden"
            style={{ transformOrigin: "top center" }}
          >
            <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-navy-700 transition-colors hover:bg-navy-50 hover:text-navy-950"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-1.5 rounded-full bg-accent-500 px-5 py-3 text-sm font-semibold text-white"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
