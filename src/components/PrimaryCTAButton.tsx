import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface PrimaryCTAButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
}

const PrimaryCTAButton = forwardRef<HTMLButtonElement, PrimaryCTAButtonProps>(
  (
    {
      children,
      variant = "primary",
      fullWidth = true,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "min-h-[56px] px-6 py-4 rounded-lg font-semibold text-base",
          "transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent",
          "active:scale-[0.98]",
          fullWidth && "w-full",
          variant === "primary"
            ? [
                "bg-brand text-white",
                "hover:bg-brand-2",
                "focus:ring-brand",
                "disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100",
              ]
            : [
                "bg-white/20 text-white border border-white/30",
                "hover:bg-white/30 hover:border-white/40",
                "focus:ring-white/50",
                "disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100",
              ],
          className
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

PrimaryCTAButton.displayName = "PrimaryCTAButton";

export default PrimaryCTAButton;

