import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95",
          {
            "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 active:from-blue-800 active:to-blue-700 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 active:shadow-md":
              variant === "primary",
            "bg-gradient-to-r from-slate-800 to-slate-700 text-white hover:from-slate-900 hover:to-slate-800 active:from-slate-950 active:to-slate-900 shadow-lg hover:shadow-xl active:shadow-md":
              variant === "secondary",
            "border-2 border-blue-300 dark:border-slate-600 text-blue-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 active:bg-blue-100 dark:active:bg-slate-700":
              variant === "outline",
            "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 active:bg-slate-200 dark:active:bg-slate-700": variant === "ghost",
          },
          {
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
