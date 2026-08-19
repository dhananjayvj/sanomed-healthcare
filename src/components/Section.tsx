import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Eyebrow({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em]",
        tone === "dark" ? "text-accent-700" : "text-accent-300",
        className,
      )}
    >
      <span
        className={cn(
          "h-px w-6",
          tone === "dark" ? "bg-accent-500" : "bg-accent-400",
        )}
        aria-hidden
      />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "dark",
  align = "left",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        align === "center" && "mx-auto max-w-2xl text-center",
        className,
      )}
    >
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          "mt-4 text-[2rem] font-semibold sm:text-[2.35rem] lg:text-[2.85rem] lg:leading-[1.08]",
          tone === "dark" ? "text-navy-950" : "text-white",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-6 max-w-[65ch] text-base leading-7 sm:text-[1.0625rem]",
            tone === "dark" ? "text-navy-700" : "text-navy-100/80",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1200px] px-4 sm:px-8 lg:px-10",
        className,
      )}
    >
      {children}
    </div>
  );
}
