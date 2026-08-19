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
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300",
          scrolled || open
            ? "border-b border-mist-300/90 bg-white/88 shadow-elevate backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-[3.75rem] w-full max-w-[1200px] items-center justify-between px-4 py-3 sm:h-18 sm:px-8 sm:py-4 lg:px-10"
        >
        <Link href="/" className="shrink-0" aria-label="Sanomed Health Care home">
          <Wordmark />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-navy-700 transition-[background-color,color,transform] duration-200 hover:bg-navy-50 hover:text-navy-950 active:scale-[0.985]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden items-center gap-1.5 rounded-full bg-navy-950 px-5 py-2.5 text-sm font-semibold text-white shadow-elevate transition-[background-color,transform,box-shadow] duration-200 hover:bg-navy-800 hover:shadow-lift active:scale-[0.98] sm:inline-flex"
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
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy-200 bg-white/80 text-navy-950 transition-[background-color,transform] duration-200 hover:bg-navy-50 active:scale-[0.98] lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
        </nav>
      </header>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18, ease: EASE_OUT }}
              className="fixed inset-0 z-40 bg-navy-950/35 backdrop-blur-[8px] lg:hidden"
            />
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -12, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
              transition={{
                opacity: { duration: 0.18, ease: EASE_OUT },
                y: { duration: 0.24, ease: EASE_OUT },
                filter: { duration: 0.18, ease: EASE_OUT },
              }}
              className="fixed inset-x-4 top-[4.5rem] z-50 overflow-hidden rounded-[1.5rem] border border-white/55 bg-white/92 shadow-lift backdrop-blur-xl lg:hidden"
              style={{ transformOrigin: "top center" }}
            >
              <ul className="flex flex-col gap-1 p-3">
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
                    className="flex min-h-12 w-full items-center justify-center gap-1.5 rounded-full bg-navy-950 px-5 py-3 text-sm font-semibold text-white"
                  >
                    Request a Quote
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </li>
              </ul>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
