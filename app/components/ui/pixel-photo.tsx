import * as React from "react";
import { cn } from "./cn";

/* -----------------------------------------------------------------------------
 * PixelPhoto
 *
 * A photo that arrives chunky and resolves. A tiny copy of the image is scaled
 * up with `image-rendering: pixelated` and sits over the full-resolution one;
 * revealing just cross-fades it away.
 *
 * Hover covers pointer devices. Touch has no hover, so the whole thing is a
 * button that toggles on tap — which also makes it keyboard reachable.
 *
 * With no `src` it renders the marked placeholder instead.
 * -------------------------------------------------------------------------- */

export interface PixelPhotoProps {
  /** Full-resolution image. */
  src?: string;
  /** Tiny copy of the same image, upscaled by the browser. */
  pixelSrc?: string;
  alt?: string;
  className?: string;
}

export function PixelPhoto({ src, pixelSrc, alt = "", className }: PixelPhotoProps) {
  const [revealed, setRevealed] = React.useState(false);

  if (!src) {
    return (
      <div
        className={cn(
          "relative flex h-[230px] items-center justify-center overflow-hidden rounded border border-border bg-[var(--bg-secondary)] shadow-hard-lg md:h-[300px]",
          className
        )}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.14] [background-image:radial-gradient(var(--border)_1px,transparent_1px)] [background-size:18px_18px]"
        />
        <span className="relative rounded border border-border bg-bw px-3 py-2.5 font-mono text-xs tracking-[0.14em] uppercase shadow-hard">
          [ photo of jenia ]
        </span>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setRevealed((v) => !v)}
      aria-pressed={revealed}
      aria-label={revealed ? `Hide detail of ${alt}` : `Bring ${alt} into focus`}
      className={cn(
        "group relative block w-full overflow-hidden rounded border border-border bg-[var(--bg-secondary)] shadow-hard-lg",
        className
      )}
    >
      <img src={src} alt={alt} className="block w-full" />
      <img
        src={pixelSrc ?? src}
        alt=""
        aria-hidden
        className={cn(
          "absolute inset-0 size-full object-cover transition-opacity duration-[600ms] ease-soft [image-rendering:pixelated]",
          revealed ? "opacity-0" : "opacity-100 group-hover:opacity-0"
        )}
      />
      <span
        className={cn(
          "absolute right-3 bottom-3 rounded border border-border bg-bw px-2.5 py-1.5 font-mono text-[10px] tracking-[0.14em] uppercase shadow-hard transition-opacity duration-300 ease-soft",
          revealed ? "opacity-0" : "opacity-100 group-hover:opacity-0"
        )}
      >
        tap to focus
      </span>
    </button>
  );
}
