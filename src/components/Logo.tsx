import { cn } from "@/lib/utils";

/**
 * Mark: a rounded shield (trust/compliance) enclosing a molecular node
 * crossed by a pulse line — chemistry meeting healthcare.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      role="img"
      aria-label="Sanomed Health Care emblem"
      className={cn("h-9 w-9", className)}
    >
      <defs>
        <linearGradient id="sanomed-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#33ba93" />
          <stop offset="100%" stopColor="#0b8063" />
        </linearGradient>
      </defs>
      <path
        d="M20 2.5 34.5 8v12.2c0 8.1-5.6 14.6-14.5 17.3C11.1 34.8 5.5 28.3 5.5 20.2V8L20 2.5Z"
        fill="url(#sanomed-mark)"
      />
      <path
        d="M11 21.4h4.6l2.6-5.6 3.6 10 2.5-4.4H29"
        fill="none"
        stroke="#081227"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      <circle cx="29" cy="21.4" r="2.2" fill="#081227" opacity="0.9" />
    </svg>
  );
}

export function Wordmark({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[1.0625rem] font-semibold tracking-tight",
            tone === "light" ? "text-white" : "text-navy-950",
          )}
        >
          SANOMED
        </span>
        <span
          className={cn(
            "mt-1 text-[0.6rem] font-medium uppercase tracking-[0.22em]",
            tone === "light" ? "text-accent-300" : "text-accent-700",
          )}
        >
          Health Care
        </span>
      </span>
    </span>
  );
}
