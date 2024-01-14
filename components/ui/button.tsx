import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "hover:bg-secondary-hover transition-colors",
  {
    variants: {
      variant: {
        default:"bg-neutral-800 hover:bg-secondary-hover",
        ghost:"hover:bg-secondary-hover",
        none:"hover:bg-none",
        dark:"bg-neutral-200 hover:bg-secondary-dark-hover text-secondary",
      },
      size: {
        default: "rounded p-2",
        icon: "rounded-full w-10 h-10 flex items-center justify-center p-2.5"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
