import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combine class names with Tailwind merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format phone number for tel: link
 * Removes spaces, dashes, and other non-digit characters except +
 */
export function formatTelLink(phone: string): string {
  // Mantiene el + al inicio y todos los dígitos
  const cleaned = phone.replace(/[^\d+]/g, "");
  return `tel:${cleaned}`;
}

/**
 * Format phone number for WhatsApp link
 * Removes spaces, dashes, and other non-digit characters except +
 */
export function formatWhatsAppLink(phone: string, message?: string): string {
  // Mantiene el + al inicio y todos los dígitos
  const cleaned = phone.replace(/[^\d+]/g, "");
  const baseUrl = `https://wa.me/${cleaned}`;
  
  if (message) {
    const encodedMessage = encodeURIComponent(message);
    return `${baseUrl}?text=${encodedMessage}`;
  }
  
  return baseUrl;
}

/**
 * Format phone number for display
 */
export function formatPhoneDisplay(phone: string): string {
  return phone;
}

/**
 * Generate service slug from title
 */
export function generateServiceSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with dash
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing dashes
}

