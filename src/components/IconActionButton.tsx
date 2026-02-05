import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface IconActionButtonProps {
  href: string;
  icon: LucideIcon;
  label: string;
  variant?: "primary" | "secondary" | "whatsapp";
  className?: string;
  external?: boolean;
}

export default function IconActionButton({
  href,
  icon: Icon,
  label,
  variant = "primary",
  className,
  external = false,
}: IconActionButtonProps) {
  const baseClasses = cn(
    "w-14 h-14 rounded-full flex items-center justify-center",
    "transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent",
    "active:scale-90",
    variant === "primary"
      ? [
          "bg-brand text-white",
          "hover:bg-brand-2",
          "focus:ring-brand",
          "shadow-lg shadow-brand/30",
        ]
      : variant === "whatsapp"
      ? [
          "bg-[#25D366] text-white",
          "hover:bg-[#20BA5A]",
          "focus:ring-[#25D366]",
          "shadow-lg shadow-[#25D366]/30",
        ]
      : [
          "bg-white/20 text-white border border-white/30",
          "hover:bg-white/30 hover:border-white/40",
          "focus:ring-white/50",
        ],
    className
  );

  const content = (
    <>
      <Icon className="w-6 h-6" aria-hidden="true" />
      <span className="sr-only">{label}</span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        aria-label={`${label} (abre en nueva ventana)`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={baseClasses} aria-label={label}>
      {content}
    </Link>
  );
}

