import { cn } from "@/lib/utils";
import { ChevronRight, MoreHorizontal, LucideIcon } from "lucide-react";
import Link from "next/link";

interface LinkCardButtonProps {
  href: string;
  icon?: LucideIcon;
  label: string;
  showMore?: boolean;
  className?: string;
  external?: boolean;
}

export default function LinkCardButton({
  href,
  icon: Icon,
  label,
  showMore = false,
  className,
  external = false,
}: LinkCardButtonProps) {
  const content = (
    <>
      <div className="flex items-center gap-4 flex-1 min-w-0">
        {Icon && (
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-white" aria-hidden="true" />
          </div>
        )}
        <span className="text-white font-medium text-base truncate">
          {label}
        </span>
      </div>
      {showMore ? (
        <MoreHorizontal
          className="w-5 h-5 text-white/60 flex-shrink-0"
          aria-hidden="true"
        />
      ) : (
        <ChevronRight
          className="w-5 h-5 text-white/60 flex-shrink-0"
          aria-hidden="true"
        />
      )}
    </>
  );

  const baseClasses = cn(
    "flex items-center gap-3 w-full min-h-[64px] px-4 py-3 rounded-lg",
    "glass transition-all duration-200",
    "hover:glass-strong hover:scale-[1.02]",
    "focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent",
    "active:scale-[0.98]",
    className
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

