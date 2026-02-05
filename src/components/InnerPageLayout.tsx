import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MobileShell, LogoImage, PageTransition, WhatsAppFAB } from "@/components";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface InnerPageLayoutProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  showLogo?: boolean;
}

export default function InnerPageLayout({
  title,
  children,
  className,
  showLogo = true,
}: InnerPageLayoutProps) {
  return (
    <PageTransition>
      <MobileShell className={cn("gap-6", className)}>
        {/* Bouton Volver */}
        <Link
          href="/"
          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm mb-2 self-start"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver</span>
        </Link>

        {/* Logo centré */}
        {showLogo && (
          <div className="flex justify-center">
            <LogoImage
              alt={`${siteConfig.name} logo`}
              size={64}
              rounded
              className="shadow-md"
            />
          </div>
        )}

        {/* Titre */}
        <h1 className="text-2xl font-bold text-white text-center mb-4">
          {title}
        </h1>

        {/* Contenu */}
        <div className="flex-1 pb-20">
          {children}
        </div>
      </MobileShell>

      {/* WhatsApp FAB flotante */}
      <WhatsAppFAB />
    </PageTransition>
  );
}

