import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Brand lockup. The logo image itself carries the "Sanomed Health Care"
 * wordmark, so it renders standalone at a fixed height and its native
 * aspect ratio. It sits on a light chip so the dark wordmark stays legible
 * against the navy navbar and footer.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded-lg bg-white px-3 py-1 shadow-sm ring-1 ring-navy-950/10",
        className,
      )}
    >
      <Image
        src="/images/sanomed.png"
        alt="Sanomed Health Care"
        width={1358}
        height={467}
        priority
        className="h-8 w-auto object-contain"
      />
    </span>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return <LogoMark className={className} />;
}
