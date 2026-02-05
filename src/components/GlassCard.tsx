import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "strong";
}

export default function GlassCard({
  children,
  className,
  variant = "default",
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl p-6",
        variant === "strong" ? "glass-strong" : "glass",
        className
      )}
    >
      {children}
    </div>
  );
}

