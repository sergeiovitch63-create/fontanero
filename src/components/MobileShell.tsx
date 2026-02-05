import { cn } from "@/lib/utils";

interface MobileShellProps {
  children: React.ReactNode;
  className?: string;
}

export default function MobileShell({ children, className }: MobileShellProps) {
  return (
    <div
      className={cn(
        "w-full max-w-[420px] mx-auto px-4 py-6 flex flex-col",
        className
      )}
    >
      {children}
    </div>
  );
}

