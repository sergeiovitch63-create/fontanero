"use client";

import { siteConfig } from "@/config/site";
import { formatWhatsAppLink } from "@/lib/utils";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function WhatsAppFAB() {
  const whatsappUrl = formatWhatsAppLink(
    siteConfig.whatsapp,
    "Hola, me gustaría solicitar información sobre sus servicios."
  );

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-4 right-4 z-50",
        "w-14 h-14 rounded-full",
        "bg-[#25D366] text-white",
        "flex items-center justify-center",
        "shadow-lg shadow-[#25D366]/40",
        "transition-all duration-200",
        "hover:bg-[#20BA5A] hover:scale-110",
        "active:scale-95",
        "focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-transparent"
      )}
      style={{
        bottom: "max(1rem, env(safe-area-inset-bottom, 0px) + 1rem)",
        right: "max(1rem, env(safe-area-inset-right, 0px) + 1rem)",
      }}
      aria-label="Contactar por WhatsApp"
    >
      <Image
        src="/whatsapp.svg"
        alt=""
        width={24}
        height={24}
        className="w-6 h-6"
        aria-hidden="true"
        priority
      />
      <span className="sr-only">Contactar por WhatsApp</span>
    </a>
  );
}

