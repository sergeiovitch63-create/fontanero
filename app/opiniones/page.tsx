import { InnerPageLayout, GlassCard, PrimaryCTALink, ReviewCard } from "@/components";
import { siteConfig } from "@/config/site";
import { ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Opiniones de clientes",
  description: `Opiniones y testimonios de clientes satisfechos de ${siteConfig.name} en ${siteConfig.zone}.`,
};

export default function OpinionesPage() {
  const reviewsConfig = siteConfig.reviews;
  const hasGoogleMapsUrl = reviewsConfig?.googleMapsUrl;
  const hasEmbedUrl = reviewsConfig?.googleMapsEmbedUrl && reviewsConfig?.useEmbed;
  const fallbackReviews = reviewsConfig?.fallbackReviews || [];

  return (
    <InnerPageLayout title="Opiniones de clientes">
      <div className="flex flex-col gap-4">
        {/* Introduction */}
        <GlassCard>
          <p className="text-white/90 text-sm leading-relaxed">
            Aquí puedes ver las opiniones y testimonios de nuestros clientes
            satisfechos. Tu opinión es muy importante para nosotros.
          </p>
        </GlassCard>

        {/* Option A: Google Maps iframe ou bouton */}
        {hasGoogleMapsUrl && (
          <GlassCard>
            <div className="space-y-4">
              {hasEmbedUrl ? (
                <>
                  {/* Iframe Google Maps */}
                  <div className="w-full rounded-lg overflow-hidden">
                    <iframe
                      src={reviewsConfig.googleMapsEmbedUrl}
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full"
                    />
                  </div>
                  <p className="text-white/70 text-xs text-center">
                    Las opiniones se abren en Google Maps
                  </p>
                </>
              ) : (
                <>
                  {/* Encart explicatif si pas d'iframe */}
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <p className="text-white/80 text-sm mb-3">
                      Puedes ver todas nuestras opiniones y dejar la tuya en
                      Google Maps. Haz clic en el botón para abrir nuestra
                      página de Google.
                    </p>
                    <PrimaryCTALink
                      href={reviewsConfig.googleMapsUrl!}
                      variant="primary"
                      external
                      className="w-full"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Ver opiniones en Google Maps
                      </span>
                    </PrimaryCTALink>
                  </div>
                </>
              )}

              {/* Bouton vers Google Maps même si iframe */}
              {hasEmbedUrl && reviewsConfig.googleMapsUrl && (
                <PrimaryCTALink
                  href={reviewsConfig.googleMapsUrl}
                  variant="secondary"
                  external
                  className="w-full"
                >
                  <span className="flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Ver todas las opiniones en Google Maps
                  </span>
                </PrimaryCTALink>
              )}
            </div>
          </GlassCard>
        )}

        {/* Option B: Avis mockés (fallback ou complément) */}
        {fallbackReviews.length > 0 && (
          <div className="flex flex-col gap-3">
            {!hasGoogleMapsUrl && (
              <GlassCard>
                <p className="text-white/80 text-sm text-center">
                  Opiniones de nuestros clientes
                </p>
              </GlassCard>
            )}
            {fallbackReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        )}

        {/* Message si aucune option disponible */}
        {!hasGoogleMapsUrl && fallbackReviews.length === 0 && (
          <GlassCard>
            <p className="text-white/80 text-sm text-center">
              No hay opiniones disponibles en este momento.
            </p>
          </GlassCard>
        )}
      </div>
    </InnerPageLayout>
  );
}
