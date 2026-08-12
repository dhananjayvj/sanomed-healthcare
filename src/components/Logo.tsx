import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Brand lockup. The logo image itself carries the "Sanomed Health Care"
 * wordmark, so it renders standalone at a fixed height and its native
 * aspect ratio. It is designed for light backgrounds, which the site now
 * uses throughout.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/images/sanomed.png"
      alt="Sanomed Health Care"
      width={1358}
      height={467}
      priority
      className={cn("h-10 w-auto object-contain", className)}
    />
  );
}

export function Wordmark({ className }: { className?: string }) {
  return <LogoMark className={className} />;
}
