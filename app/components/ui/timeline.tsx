import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./cn";

/* -----------------------------------------------------------------------------
 * Timeline
 *
 * Desktop keeps a spine: a 172px gutter holding the start year, an ink rule
 * running down it, and a shadowless tick per role so the line passes cleanly
 * through. On phones the gutter collapses — the year simply sits above its
 * card and the spine disappears rather than shrinking into a near-empty column.
 *
 * The indent lives on this wrapper, not on the items, so the items' negative
 * offsets resolve against a real gutter.
 * -------------------------------------------------------------------------- */

const Timeline = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("relative md:pl-[172px]", className)} {...props}>
      {children}
    </div>
  )
);
Timeline.displayName = "Timeline";

const accentBg = {
  main: "bg-main",
  accent: "bg-accent",
  interactive: "bg-interactive",
  blank: "bg-blank",
} as const;

type Accent = keyof typeof accentBg;

interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  year: string;
  accent?: Accent;
  /** The last item terminates the line instead of bridging to the next. */
  last?: boolean;
}

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ className, year, accent = "main", last = false, children, ...props }, ref) => (
    <div ref={ref} className={cn("relative", !last && "mb-12", className)} {...props}>
      <div className="mb-3.5 animate-rise font-title text-[34px] leading-none font-bold tracking-[-0.02em] md:absolute md:top-0 md:left-[-172px] md:mb-0 md:w-[115px] md:text-right md:text-5xl">
        {year}
      </div>
      <span
        aria-hidden
        className={cn(
          "hidden animate-pop rounded-[2px] border-2 border-border md:absolute md:top-[17px] md:left-[-48.5px] md:block md:size-3.5",
          accentBg[accent]
        )}
      />
      {!last && (
        <span
          aria-hidden
          className="hidden w-[3px] animate-wipe-y bg-border md:absolute md:top-[35px] md:bottom-[-65px] md:left-[-41px] md:block"
        />
      )}
      {children}
    </div>
  )
);
TimelineItem.displayName = "TimelineItem";

/* -----------------------------------------------------------------------------
 * Timeline Card
 * -------------------------------------------------------------------------- */

const bandVariants = cva("border-b border-border p-[18px] md:px-8 md:py-[22px]", {
  variants: { accent: { main: "bg-main", accent: "bg-accent", interactive: "bg-interactive", blank: "bg-blank" } },
  defaultVariants: { accent: "main" },
});

interface TimelineCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bandVariants> {
  company: string;
  role: string;
  blurb?: string;
  dates: string;
}

const TimelineCard = React.forwardRef<HTMLDivElement, TimelineCardProps>(
  ({ className, accent, company, role, blurb, dates, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden rounded border border-border bg-bw shadow-hard-md",
        className
      )}
      {...props}
    >
      <div className={bandVariants({ accent })}>
        <div className="md:flex md:items-center md:justify-between md:gap-7">
          <div className="min-w-0">
            <h3 className="mb-2 font-title text-[30px] leading-none font-bold tracking-[-0.01em] uppercase md:text-[40px]">
              {company}
            </h3>
            <div className="mb-2.5 inline-flex items-center rounded border border-border bg-bw px-2.5 py-1 font-mono text-[10px] tracking-[0.12em] uppercase shadow-hard md:text-[11px]">
              {role}
            </div>
            {blurb && (
              <p className="text-[15px] leading-snug italic md:mb-0 md:text-base">{blurb}</p>
            )}
          </div>
          <span className="mt-2 block shrink-0 font-mono text-[11px] tracking-[0.1em] whitespace-nowrap uppercase md:mt-0 md:text-[13px]">
            {dates}
          </span>
        </div>
      </div>
      <div className="p-[18px] md:px-8 md:pt-7 md:pb-[30px]">{children}</div>
    </div>
  )
);
TimelineCard.displayName = "TimelineCard";

/* -----------------------------------------------------------------------------
 * Timeline Body — the role's own words
 * -------------------------------------------------------------------------- */

const TimelineBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col gap-4 text-base leading-[1.65] text-pretty md:gap-5 md:text-lg md:leading-[1.7]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
TimelineBody.displayName = "TimelineBody";

/* -----------------------------------------------------------------------------
 * The climb — title progression within one company
 * -------------------------------------------------------------------------- */

export interface ClimbStep {
  title: string;
  date: string;
  current?: boolean;
}

function TimelineClimb({ steps }: { steps: ClimbStep[] }) {
  return (
    <div className="mt-5 flex flex-col gap-2 md:mt-[26px] md:flex-row md:flex-wrap md:items-center md:gap-3">
      <span className="font-mono text-[10px] tracking-[0.14em] text-[var(--text-muted)] uppercase">
        the climb
      </span>
      {steps.map(({ title, date, current }) => (
        <span
          key={title}
          className={cn(
            "flex animate-pop flex-col items-start gap-[3px] rounded border border-border px-3 py-2.5 shadow-hard",
            current ? "bg-main" : "bg-bw"
          )}
        >
          <span className="font-title text-sm leading-none font-semibold uppercase md:text-[15px]">
            {title}
          </span>
          <span
            className={cn(
              "font-mono text-[10px] tracking-[0.08em] whitespace-nowrap uppercase",
              current ? "text-text" : "text-[var(--text-muted)]"
            )}
          >
            {date}
          </span>
        </span>
      ))}
    </div>
  );
}

/* -----------------------------------------------------------------------------
 * Before frontend — the pre-frontend roles, deliberately subordinate
 * -------------------------------------------------------------------------- */

export interface AsideEntry {
  company: string;
  dates: string;
  role: string;
  body: string;
}

function TimelineAside({
  label,
  note,
  entries,
}: {
  label: string;
  note: string;
  entries: AsideEntry[];
}) {
  return (
    <div className="rounded border border-border bg-bw p-[18px] shadow-hard md:px-7 md:pt-[22px] md:pb-6">
      <div className="mb-4 flex flex-col gap-1 md:mb-[18px] md:flex-row md:items-baseline md:justify-between md:gap-5">
        <span className="font-mono text-[10px] tracking-[0.16em] uppercase md:text-[11px]">
          {label}
        </span>
        <span className="font-mono text-[10px] tracking-[0.1em] text-[var(--text-muted)] uppercase md:text-[11px]">
          {note}
        </span>
      </div>
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-0">
        {entries.map(({ company, dates, role, body }, i) => (
          <div
            key={company}
            className={cn(
              i === 0
                ? "md:border-r md:border-border md:pr-7"
                : "border-t border-border pt-4 md:border-t-0 md:pt-0 md:pl-7"
            )}
          >
            <div className="mb-1.5 flex items-baseline justify-between gap-4">
              <span className="font-title text-[21px] leading-none font-bold uppercase md:text-2xl">
                {company}
              </span>
              <span className="font-mono text-[10px] tracking-[0.06em] whitespace-nowrap text-[var(--text-muted)] uppercase md:text-xs">
                {dates}
              </span>
            </div>
            <p className="text-[15px] leading-[1.55] md:text-base">
              <strong className="font-bold">{role}</strong> {body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export {
  Timeline,
  TimelineItem,
  TimelineCard,
  TimelineBody,
  TimelineClimb,
  TimelineAside,
  bandVariants,
};
