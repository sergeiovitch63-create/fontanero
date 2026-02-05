import { siteConfig } from "@/config/site";
import { resolvePreviewConfig } from "@/lib/previewConfig";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio",
  description: `${siteConfig.name} - Servicios de fontanería profesional en ${siteConfig.zone}. Reparaciones, instalaciones, calentadores y desatascos.`,
};
import {
  MobileShell,
  GlassCard,
  PrimaryCTALink,
  IconActionButton,
  LinkCardButton,
  AnimatedList,
  PageTransition,
  LogoImage,
} from "@/components";
import { formatTelLink, formatWhatsAppLink } from "@/lib/utils";
import {
  Phone,
  MessageCircle,
  Instagram,
  Facebook,
  Star,
  Wrench,
  Droplet,
  Flame,
  Zap,
  Info,
  PhoneCall,
} from "lucide-react";

// Map des icônes pour les boutons
const iconMap: Record<string, typeof Star> = {
  reviews: Star,
  "services-list": Wrench,
  "service-reparacion": Droplet,
  "service-instalaciones": Wrench,
  "service-calentadores": Flame,
  "service-desatascos": Zap,
  about: Info,
};

// Liste des boutons avec URLs exactes selon le cahier des charges
const homeButtons = [
  {
    id: "reviews",
    label: "Opiniones de clientes",
    href: "/opiniones",
    icon: Star,
  },
  {
    id: "services-list",
    label: "Servicios de fontanería",
    href: "/servicios",
    icon: Wrench,
  },
  {
    id: "service-reparacion",
    label: "Reparación de fugas",
    href: "/servicios/reparacion-de-fugas",
    icon: Droplet,
  },
  {
    id: "service-instalaciones",
    label: "Instalaciones sanitarias",
    href: "/servicios/instalaciones-sanitarias",
    icon: Wrench,
  },
  {
    id: "service-calentadores",
    label: "Calentadores y termos",
    href: "/servicios/calentadores-y-termos",
    icon: Flame,
  },
  {
    id: "service-desatascos",
    label: "Desatascos",
    href: "/servicios/desatascos",
    icon: Zap,
  },
  {
    id: "about",
    label: "Sobre nosotros",
    href: "/sobre-nosotros",
    icon: Info,
  },
];

export default function Home({
  searchParams,
}: {
  searchParams?: { name?: string; logo?: string };
}) {
  const preview = resolvePreviewConfig(searchParams);
  const brandName = preview.brand.name;
  const brandLogo = preview.brand.logo;

  return (
    <PageTransition>
      <MobileShell className="gap-6">
        {/* 1) Header */}
        <header className="flex flex-col items-center gap-3 pt-4">
          {/* Logo rond */}
          <LogoImage
            src={brandLogo}
            alt={`${brandName} logo`}
            size={96}
            rounded
            className="shadow-lg"
          />

          {/* Nom et zone */}
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-1">
              {brandName}
            </h1>
            <p className="text-white/80 text-sm">{siteConfig.zone}</p>
          </div>
        </header>

        {/* 2) Row icônes rapides */}
        <div className="flex items-center justify-center gap-3">
          <IconActionButton
            href={formatTelLink(siteConfig.phone)}
            icon={Phone}
            label="Llamar"
            variant="primary"
            external
          />
          <IconActionButton
            href={formatWhatsAppLink(
              siteConfig.whatsapp,
              "Hola, me gustaría solicitar información sobre sus servicios."
            )}
            icon={MessageCircle}
            label="WhatsApp"
            variant="whatsapp"
            external
          />
          {siteConfig.socialLinks?.map((social) => {
            const Icon =
              social.platform === "instagram" ? Instagram : Facebook;
            return (
              <IconActionButton
                key={social.platform}
                href={social.url}
                icon={Icon}
                label={social.label}
                variant="secondary"
                external
              />
            );
          })}
        </div>

        {/* 3) Carte centrale branding */}
        <GlassCard
          variant="strong"
          className="relative overflow-hidden flex flex-col items-stretch min-h-[220px] sm:min-h-[260px]"
        >
          {/* Fond métier (bleu/gris) */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-500/40 via-blue-600/40 to-slate-600/40 -z-10" />

          {/* Icône / logo principal */}
          <div className="relative z-10 flex-1 flex items-center justify-center">
            {brandLogo ? (
              <LogoImage
                src={brandLogo}
                alt={`${brandName} logo grande`}
                size={144}
                className="shadow-lg"
              />
            ) : (
              <PhoneCall
                className="w-20 h-20 sm:w-24 sm:h-24 text-white/90 drop-shadow-xl"
                aria-hidden="true"
              />
            )}
          </div>

          {/* CTA principal */}
          <div className="relative z-10 mt-4">
            <PrimaryCTALink
              href={formatTelLink(siteConfig.phone)}
              variant="primary"
              external
              className="w-full"
            >
              <span className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Llamar — Presupuesto gratuito
              </span>
            </PrimaryCTALink>
          </div>
        </GlassCard>

        {/* 4) Liste des boutons */}
        <AnimatedList className="flex flex-col gap-3">
          {homeButtons.map((button) => (
            <LinkCardButton
              key={button.id}
              href={button.href}
              icon={button.icon}
              label={button.label}
            />
          ))}
        </AnimatedList>

        {/* 5) Footer */}
        <footer className="flex flex-col items-center gap-1 pt-4 pb-2">
          <p className="text-white/30 text-[10px]">
            Made by{" "}
            <a
              href="https://publox.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/60 transition-colors text-[10px] font-normal underline-offset-2 hover:underline"
            >
              PUBLOX
            </a>
          </p>
        </footer>
      </MobileShell>
    </PageTransition>
  );
}
