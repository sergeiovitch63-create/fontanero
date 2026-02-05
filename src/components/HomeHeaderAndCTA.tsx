"use client";

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
import { useResolvedConfig } from "@/components/PreviewProvider";

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

export default function HomeHeaderAndCTA() {
  const resolvedConfig = useResolvedConfig();
  const brandName = resolvedConfig.brand.name;
  const brandLogo = resolvedConfig.brand.logo;

  return (
    <PageTransition>
      <MobileShell className="gap-6">
        {/* 1) Header */}
        <header className="flex flex-col items-center gap-3 pt-4">
          {/* Logo rond / petit cercle */}
          <LogoImage
            src={brandLogo}
            alt={`${brandName} logo`}
            size={96}
            rounded
            className="shadow-lg"
          />

          {/* Nom et zone */}
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-1">{brandName}</h1>
            {/* Sous-titre forcé à "Tenerife" */}
            <p className="text-white/80 text-sm">Tenerife</p>
          </div>
        </header>

        {/* 2) Row icônes rapides */}
        <div className="flex items-center justify-center gap-3">
          <IconActionButton
            href={formatTelLink(resolvedConfig.phone)}
            icon={Phone}
            label="Llamar"
            variant="primary"
            external
          />
          <IconActionButton
            href={formatWhatsAppLink(
              resolvedConfig.whatsapp,
              "Hola, me gustaría solicitar información sobre sus servicios."
            )}
            icon={MessageCircle}
            label="WhatsApp"
            variant="whatsapp"
            external
          />
          {resolvedConfig.socialLinks?.map((social) => {
            const Icon = social.platform === "instagram" ? Instagram : Facebook;
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

        {/* 3) Carte centrale branding / CTA principale (bouton seul) */}
        <GlassCard
          variant="strong"
          className="relative overflow-hidden flex items-center justify-center py-4"
        >
          {/* Fond métier (bleu/gris) */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-500/40 via-blue-600/40 to-slate-600/40 -z-10" />

          {/* CTA principal uniquement */}
          <div className="relative z-10 w-full">
            <PrimaryCTALink
              href={formatTelLink(resolvedConfig.phone)}
              variant="primary"
              external
              className="w-full call-buzz"
            >
              <span className="flex items-center justify-center gap-2 py-2">
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
      </MobileShell>
    </PageTransition>
  );
}


