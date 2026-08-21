import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-bold tracking-tight transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] rounded-[3px]",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-white hover:bg-slate-800 shadow-sm border border-slate-900",
        primary:
          "bg-blue-600 text-white hover:bg-blue-700 shadow-sm border border-blue-700 font-black uppercase tracking-wider text-xs",
        call:
          "bg-red-600 text-white hover:bg-red-700 shadow-sm border border-red-700 font-black uppercase tracking-wider text-xs",
        whatsapp:
          "bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-sm border border-[#1fa851] font-black uppercase tracking-wider text-xs",
        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-200 shadow-sm border border-slate-300",
        outline:
          "border-2 border-slate-900 bg-white text-slate-900 hover:bg-slate-900 hover:text-white font-bold",
        outlinePrimary:
          "border-2 border-blue-600 bg-white text-blue-600 hover:bg-blue-600 hover:text-white font-bold",
        ghost: "hover:bg-slate-100 hover:text-slate-900",
        link: "text-blue-600 underline-offset-4 hover:underline font-bold",
        white: "bg-white text-slate-900 hover:bg-slate-100 shadow-sm border border-slate-300 font-bold",
        tech: "border border-blue-600 bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white transition-colors duration-200 font-bold",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-7 text-sm md:text-base",
        icon: "h-10 w-10",
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
