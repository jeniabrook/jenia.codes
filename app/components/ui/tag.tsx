import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./cn";

const tagVariants = cva(
  "inline-flex items-center shadow font-medium whitespace-nowrap",
  {
    variants: {
      variant: {
        main: "bg-main text-text",
        accent: "bg-accent text-text",
        interactive: "bg-interactive text-text",
      },
      size: {
        sm: "px-3 py-2 text-sm",
        md: "px-3 py-2 text-base",
        lg: "px-3 py-2 text-lg md:text-xl",
        inherit: "px-3 py-2",
      },
    },
    defaultVariants: {
      variant: "main",
      size: "sm",
    },
  }
);

export interface TagProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof tagVariants> {
  asChild?: boolean;
}

const Tag = React.forwardRef<HTMLElement, TagProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "span";
    return (
      <Comp
        className={cn(tagVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Tag.displayName = "Tag";

export { Tag, tagVariants };
