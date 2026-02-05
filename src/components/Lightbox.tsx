"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export default function Lightbox({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
}: LightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Manejar ESC para cerrar
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    // Focus sur le bouton fermer à l'ouverture
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  // Empêcher le scroll du body quand la lightbox est ouverte
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/90 z-50"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Lightbox content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Vista previa de imagen"
          >
            {/* Bouton fermer */}
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Cerrar vista previa"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Image */}
            <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                  quality={90}
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

