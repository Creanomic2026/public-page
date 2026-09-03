import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";
import type { ButtonVariant, ButtonSize } from "@/types";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  /** Magenta→Purple gradient, pill, Montserrat bold. Sky Blue glow on hover. */
  primary:
    "text-white font-semibold border-0 relative overflow-hidden " +
    "before:absolute before:inset-0 before:transition-opacity before:duration-300 before:opacity-0 hover:before:opacity-100 " +
    "before:bg-[linear-gradient(135deg,#2A82E7,#522A92)] ",

  /** Ghost: Sky Blue 2px border, transparent bg */
  secondary:
    "bg-transparent border-2 text-[var(--brand-sky-blue)] hover:bg-[rgba(42,130,231,0.1)] " +
    "hover:shadow-[var(--glow-sky)] transition-shadow duration-300",

  /** Outline: Magenta border */
  outline:
    "bg-transparent border-2 border-[var(--brand-magenta)] text-[var(--brand-magenta)] " +
    "hover:bg-[rgba(210,10,129,0.1)] hover:shadow-[var(--glow-magenta)] transition-all duration-300",

  /** Ghost: minimal, for nav or subtle actions */
  ghost:
    "bg-transparent border border-[var(--outline-variant)] text-[var(--on-surface-variant)] " +
    "hover:border-[var(--outline)] hover:text-[var(--on-surface)] transition-colors duration-200",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

/**
 * Vibrant Kinetic Button component.
 * Primary: Magenta→Purple gradient pill with Sky Blue hover glow.
 * Secondary: Sky Blue ghost with 2px border.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", isLoading = false, className, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full",
          "font-semibold tracking-wide transition-all duration-300",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-sky-blue)] focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        style={
          variant === "primary"
            ? { background: "linear-gradient(135deg, #522A92, #D20A81)" }
            : undefined
        }
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin shrink-0" />
        )}
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
