"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Lightbox from "./Lightbox";

interface ServiceImageGalleryProps {
  images: string[];
  serviceTitle: string;
}

export default function ServiceImageGallery({
  images,
  serviceTitle,
}: ServiceImageGalleryProps) {
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  // Si pas d'images, afficher des placeholders skeleton
  if (images.length === 0) {
    return (
      <div className="grid grid-cols-2 gap-3">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="aspect-square rounded-xl bg-white/10 animate-pulse"
          />
        ))}
      </div>
    );
  }

  const handleImageError = (index: number) => {
    setImageErrors((prev) => new Set(prev).add(index));
  };

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImageIndex(null);
  };

  const selectedImage =
    selectedImageIndex !== null ? images[selectedImageIndex] : null;

  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        {images.map((imagePath, index) => {
          const hasError = imageErrors.has(index);

          if (hasError) {
            return (
              <div
                key={index}
                className="aspect-square rounded-xl bg-white/10 flex items-center justify-center"
              >
                <span className="text-white/40 text-xs">
                  Imagen no disponible
                </span>
              </div>
            );
          }

          return (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="aspect-square rounded-xl overflow-hidden relative bg-white/5 cursor-pointer hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label={`Ver imagen ${index + 1} de ${serviceTitle} en tamaño completo`}
            >
              <Image
                src={imagePath}
                alt={`${serviceTitle} - Imagen ${index + 1}`}
                fill
                className="object-cover"
                onError={() => handleImageError(index)}
                sizes="(max-width: 420px) 50vw, 200px"
              />
            </button>
          );
        })}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <Lightbox
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          imageSrc={selectedImage}
          imageAlt={`${serviceTitle} - Imagen ${(selectedImageIndex ?? 0) + 1}`}
        />
      )}
    </>
  );
}

