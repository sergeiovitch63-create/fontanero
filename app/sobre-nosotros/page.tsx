import { InnerPageLayout, GlassCard } from "@/components";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description: `Conoce más sobre ${siteConfig.name}, empresa de fontanería profesional en ${siteConfig.zone}.`,
};

export default function SobreNosotrosPage() {
  if (!siteConfig.about) {
    return (
      <InnerPageLayout title="Sobre nosotros">
        <GlassCard>
          <p className="text-white/90 text-sm">
            Información no disponible.
          </p>
        </GlassCard>
      </InnerPageLayout>
    );
  }

  const { presentation, values, yearsExperience, interventionZone } =
    siteConfig.about;

  return (
    <InnerPageLayout title="Sobre nosotros">
      <div className="flex flex-col gap-4">
        {/* Présentation */}
        <GlassCard>
          <h2 className="text-lg font-semibold text-white mb-3">
            {siteConfig.name}
          </h2>
          <p className="text-white/90 text-sm leading-relaxed">
            {presentation.replace(
              "años de experiencia.",
              `años de experiencia en ${siteConfig.zone}.`
            )}
          </p>
        </GlassCard>

        {/* Valeurs */}
        <GlassCard>
          <h3 className="text-base font-semibold text-white mb-3">
            Nuestros valores
          </h3>
          <div className="space-y-3">
            {values.map((value, index) => (
              <div key={index} className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-brand text-lg">✓</span>
                  <h4 className="text-white font-semibold text-sm">
                    {value.title}
                  </h4>
                </div>
                <p className="text-white/80 text-xs ml-6 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Expérience et zone */}
        <GlassCard>
          <div className="space-y-3">
            <div>
              <h3 className="text-base font-semibold text-white mb-2">
                Experiencia
              </h3>
              <p className="text-white/90 text-sm">{yearsExperience}</p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-white mb-2">
                Zona de intervención
              </h3>
              <p className="text-white/90 text-sm">{interventionZone}</p>
            </div>
          </div>
        </GlassCard>
      </div>
    </InnerPageLayout>
  );
}
