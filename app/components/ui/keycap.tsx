import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./cn";

/* -----------------------------------------------------------------------------
 * Keycap
 *
 * The tagline made physical: an outer housing plus an inner top face, pressing
 * into its own shadow on hover exactly like the nav pills do.
 * -------------------------------------------------------------------------- */

const keycapVariants = cva(
  "relative shrink-0 rounded-lg border-[3px] border-border bg-bw shadow-hard-md transition-[transform,box-shadow] duration-[170ms] ease-press hover:duration-[110ms] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard",
  {
    variants: {
      size: {
        md: "h-[62px] w-[58px] md:h-[82px] md:w-[78px]",
        lg: "h-[62px] w-[58px] md:h-[116px] md:w-[110px]",
      },
    },
    defaultVariants: { size: "lg" },
  }
);

const faceVariants = cva(
  "absolute inset-x-[6px] top-[6px] bottom-[11px] flex items-center justify-center rounded-[5px] border-2 border-border md:inset-x-[10px] md:top-[10px] md:bottom-[18px]",
  {
    variants: {
      face: {
        bg: "bg-bg",
        main: "bg-main",
        accent: "bg-accent",
        interactive: "bg-interactive",
      },
    },
    defaultVariants: { face: "bg" },
  }
);

export interface KeycapProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof keycapVariants>,
    VariantProps<typeof faceVariants> {}

const Keycap = React.forwardRef<HTMLDivElement, KeycapProps>(
  ({ className, size, face, children, ...props }, ref) => (
    <div ref={ref} className={cn(keycapVariants({ size, className }))} {...props}>
      <div className={faceVariants({ face })}>
        <span className="font-title text-[28px] leading-none font-bold md:text-[56px]">
          {children}
        </span>
      </div>
    </div>
  )
);
Keycap.displayName = "Keycap";

/** The full stop at the end of the tagline — a modifier key, not a letter. */
const KeycapPeriod = React.forwardRef<HTMLDivElement, Omit<KeycapProps, "face">>(
  ({ className, size = "lg", ...props }, ref) => (
    <div ref={ref} className={cn(keycapVariants({ size, className }), "bg-main")} {...props}>
      <div className={cn(faceVariants({ face: "main" }), "items-end pb-[3px] md:pb-[6px]")}>
        <span className="block size-[9px] rounded-[2px] bg-border md:size-4" />
      </div>
    </div>
  )
);
KeycapPeriod.displayName = "KeycapPeriod";

export { Keycap, KeycapPeriod, keycapVariants };
