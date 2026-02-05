import { InnerPageLayout, GlassCard, LinkCardButton, AnimatedList } from "@/components";
import { siteConfig } from "@/config/site";
import { Wrench, Droplet, Flame, Zap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios de fontanería",
  description: `Servicios de fontanería profesional en ${siteConfig.zone}. Reparación de fugas, instalaciones sanitarias, calentadores y termos, desatascos.`,
};

const iconMap: Record<string, typeof Wrench> = {
  "reparacion-fugas": Droplet,
  "instalaciones-sanitarias": Wrench,
  "calentadores-termos": Flame,
  "desatascos": Zap,
};

export default function ServiciosPage() {
  return (
    <InnerPageLayout title="Servicios de fontanería">
      <div className="flex flex-col gap-4">
        {/* Introduction */}
        <GlassCard>
          <p className="text-white/90 text-sm leading-relaxed">
            Ofrecemos una amplia gama de servicios de fontanería profesional
            en {siteConfig.zone}. Desde reparaciones urgentes hasta instalaciones
            completas.
          </p>
        </GlassCard>

        {/* Liste des services */}
        <AnimatedList className="flex flex-col gap-3">
          {siteConfig.services.map((service) => {
            const Icon = iconMap[service.id] || Wrench;
            return (
              <LinkCardButton
                key={service.id}
                href={`/servicios/${service.slug}`}
                icon={Icon}
                label={service.title}
              />
            );
          })}
        </AnimatedList>
      </div>
    </InnerPageLayout>
  );
}
