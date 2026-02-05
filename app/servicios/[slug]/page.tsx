import Link from "next/link";
import { InnerPageLayout, GlassCard, ServiceImageGallery } from "@/components";
import { siteConfig } from "@/config/site";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return siteConfig.services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Servicio no encontrado",
    };
  }

  return {
    title: service.title,
    description: service.description || `Información sobre ${service.title} en ${siteConfig.zone}.`,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <InnerPageLayout title={service.title} showLogo={false}>
      <div className="flex flex-col gap-4">
        {/* Bouton Volver */}
        <Link
          href="/servicios"
          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm mb-2 self-start"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a servicios</span>
        </Link>

        {/* Description */}
        <GlassCard>
          <p className="text-white/90 text-sm leading-relaxed">
            {service.description || `Información sobre ${service.title}.`}
          </p>
        </GlassCard>

        {/* Galerie photos */}
        <GlassCard>
          <h2 className="text-lg font-semibold text-white mb-4">
            Galería de trabajos
          </h2>
          <ServiceImageGallery
            images={service.images || []}
            serviceTitle={service.title}
          />
        </GlassCard>

        {/* Informations supplémentaires */}
        <GlassCard>
          <h2 className="text-lg font-semibold text-white mb-3">
            ¿Qué incluye este servicio?
          </h2>
          <ul className="space-y-2 text-white/90 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-brand mt-1">•</span>
              <span>Servicio profesional y garantizado</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand mt-1">•</span>
              <span>Atención rápida y eficiente</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand mt-1">•</span>
              <span>Presupuesto gratuito sin compromiso</span>
            </li>
          </ul>
        </GlassCard>
      </div>
    </InnerPageLayout>
  );
}
