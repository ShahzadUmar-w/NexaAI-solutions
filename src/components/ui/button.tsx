import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex max-w-full items-center justify-center gap-2 whitespace-normal break-words rounded-xl text-center text-sm font-bold leading-snug tracking-[-0.01em] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "nexa-ridge-button nexa-ridge-primary",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "nexa-ridge-button nexa-ridge-outline",
        secondary:
          "nexa-ridge-button nexa-ridge-muted",
        ghost: "text-muted-foreground hover:bg-white/[0.065] hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero:
          "nexa-ridge-button nexa-ridge-primary",
        heroOutline:
          "nexa-ridge-button nexa-ridge-outline",
      },
      size: {
        default: "min-h-10 px-5 py-2",
        sm: "min-h-9 px-4 py-2 text-xs",
        lg: "min-h-12 px-6 py-3 text-base sm:px-8",
        xl: "min-h-14 px-6 py-3 text-base sm:px-10 sm:text-lg",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

