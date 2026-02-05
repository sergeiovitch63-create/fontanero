import { cn } from "@/lib/utils";
import Link from "next/link";

interface PrimaryCTALinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  className?: string;
  external?: boolean;
}

export default function PrimaryCTALink({
  href,
  children,
  variant = "primary",
  fullWidth = true,
  className,
  external = false,
}: PrimaryCTALinkProps) {
  const baseClasses = cn(
    "min-h-[56px] px-6 py-4 rounded-lg font-semibold text-base",
    "transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent",
    "active:scale-[0.98]",
    "inline-flex items-center justify-center",
    fullWidth && "w-full",
    variant === "primary"
      ? [
          "bg-brand text-white",
          "hover:bg-brand-2",
          "focus:ring-brand",
        ]
      : [
          "bg-white/20 text-white border border-white/30",
          "hover:bg-white/30 hover:border-white/40",
          "focus:ring-white/50",
        ],
    className
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={baseClasses}>
      {children}
    </Link>
  );
}

