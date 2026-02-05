export interface SocialLink {
  platform: "instagram" | "facebook" | "twitter" | "linkedin";
  url: string;
  label: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description?: string;
  slug: string;
  images?: string[]; // Rutas a las imágenes en /public/services/...
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  type: "page" | "service" | "external";
}

export interface HomeButton {
  id: string;
  label: string;
  href: string;
  type: "page" | "service" | "external" | "reviews" | "about";
  priority?: number; // Para el orden de visualización
}

export interface CompanyValue {
  title: string;
  description: string;
}

export interface AboutInfo {
  presentation: string;
  values: CompanyValue[];
  yearsExperience: string;
  interventionZone: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number; // 1-5
  text: string;
  date: string; // Format: "2024-01-15" ou "Hace 2 meses"
}

export interface ReviewsConfig {
  googleMapsUrl?: string;
  googleMapsEmbedUrl?: string; // URL para iframe embed
  useEmbed?: boolean; // Si true, intenta mostrar el iframe
  fallbackReviews?: Review[]; // Reseñas mock si no hay iframe
}

export interface SiteConfig {
  // Información básica
  name: string;
  zone: string;
  
  // Contacto
  phone: string;
  whatsapp: string;
  email?: string;
  
  // Redes sociales
  socialLinks?: SocialLink[];
  
  // Servicios
  services: ServiceItem[];
  
  // Navegación
  navItems: NavItem[];
  
  // Botones de la página de inicio
  homeButtons: HomeButton[];
  
  // Sobre nosotros
  about?: AboutInfo;
  
  // Reseñas de clientes
  reviews?: ReviewsConfig;
  
  // Tema / Colores
  theme: {
    primary: string;
    secondary?: string;
    accent?: string;
  };
  
  // URLs
  urls: {
    base: string;
    reviews?: string;
    about?: string;
  };
}

