import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./cn";

/* -----------------------------------------------------------------------------
 * Timeline Container
 * -------------------------------------------------------------------------- */

interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {}

const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("space-y-8 md:space-y-12", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Timeline.displayName = "Timeline";

/* -----------------------------------------------------------------------------
 * Timeline Card
 * -------------------------------------------------------------------------- */

const cardVariants = cva(
  "bg-bw border border-border shadow p-6 md:p-8",
  {
    variants: {
      accent: {
        main: "",
        accent: "",
        interactive: "",
      },
    },
    defaultVariants: {
      accent: "main",
    },
  }
);

interface TimelineCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const TimelineCard = React.forwardRef<HTMLDivElement, TimelineCardProps>(
  ({ className, accent, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ accent, className }))}
        {...props}
      >
        {children}
      </div>
    );
  }
);
TimelineCard.displayName = "TimelineCard";

/* -----------------------------------------------------------------------------
 * Timeline Card Header (company name + description)
 * -------------------------------------------------------------------------- */

interface TimelineCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  company: string;
  description?: string;
  startDate?: string;
  endDate?: string;
}

const TimelineCardHeader = React.forwardRef<HTMLDivElement, TimelineCardHeaderProps>(
  ({ className, company, description, startDate, endDate, ...props }, ref) => {
    const dateRange = startDate && endDate ? `${startDate} - ${endDate}` : startDate;
    return (
      <div ref={ref} className={cn("mb-6", className)} {...props}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-4 mb-1">
          <h3 className="font-title font-bold text-2xl md:text-3xl">
            {company}
          </h3>
          {dateRange && (
            <span className="font-mono text-base md:text-lg text-text-muted">
              {dateRange}
            </span>
          )}
        </div>
        {description && (
          <p className="text-text-muted italic text-base md:text-lg">
            {description}
          </p>
        )}
      </div>
    );
  }
);
TimelineCardHeader.displayName = "TimelineCardHeader";

/* -----------------------------------------------------------------------------
 * Timeline Achievements
 * -------------------------------------------------------------------------- */

const achievementsVariants = cva(
  "list-disc pl-5 space-y-2 text-lg md:text-xl leading-relaxed text-pretty mb-6",
  {
    variants: {
      accent: {
        main: "marker:text-main",
        accent: "marker:text-accent",
        interactive: "marker:text-interactive",
      },
    },
    defaultVariants: {
      accent: "main",
    },
  }
);

interface TimelineAchievementsProps
  extends React.HTMLAttributes<HTMLUListElement>,
    VariantProps<typeof achievementsVariants> {}

const TimelineAchievements = React.forwardRef<HTMLUListElement, TimelineAchievementsProps>(
  ({ className, accent, children, ...props }, ref) => {
    return (
      <ul
        ref={ref}
        className={cn(achievementsVariants({ accent, className }))}
        {...props}
      >
        {children}
      </ul>
    );
  }
);
TimelineAchievements.displayName = "TimelineAchievements";

/* -----------------------------------------------------------------------------
 * Timeline Tech Stack
 * -------------------------------------------------------------------------- */

interface TimelineTechStackProps extends React.HTMLAttributes<HTMLDivElement> {}

const TimelineTechStack = React.forwardRef<HTMLDivElement, TimelineTechStackProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex flex-wrap gap-2", className)} {...props}>
        {children}
      </div>
    );
  }
);
TimelineTechStack.displayName = "TimelineTechStack";

/* -----------------------------------------------------------------------------
 * Exports
 * -------------------------------------------------------------------------- */

export {
  Timeline,
  TimelineCard,
  TimelineCardHeader,
  TimelineAchievements,
  TimelineTechStack,
  cardVariants,
  achievementsVariants,
};
