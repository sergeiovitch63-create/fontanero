import { SiteConfig } from "@/types/site";
import { generateServiceSlug } from "@/lib/utils";

export const siteConfig: SiteConfig = {
  // Información básica
  name: "Fontanería García",
  zone: "Tenerife Sur",

  // Contacto
  phone: "+34 600 000 000",
  whatsapp: "+34 600 000 000",

  // Redes sociales (opcionales)
  socialLinks: [
    {
      platform: "instagram",
      url: "https://instagram.com/fontaneriagarcia",
      label: "Instagram",
    },
    {
      platform: "facebook",
      url: "https://facebook.com/fontaneriagarcia",
      label: "Facebook",
    },
  ],

  // Servicios
  services: [
    {
      id: "reparacion-fugas",
      title: "Reparación de fugas",
      description: "Reparación rápida y eficiente de todo tipo de fugas",
      slug: generateServiceSlug("Reparación de fugas"),
      images: [
        "/services/reparacion-fugas-1.jpg",
        "/services/reparacion-fugas-2.jpg",
        "/services/reparacion-fugas-3.jpg",
        "/services/reparacion-fugas-4.jpg",
      ],
    },
    {
      id: "instalaciones-sanitarias",
      title: "Instalaciones sanitarias",
      description: "Instalación completa de sistemas sanitarios",
      slug: generateServiceSlug("Instalaciones sanitarias"),
      images: [
        "/services/instalaciones-1.jpg",
        "/services/instalaciones-2.jpg",
      ],
    },
    {
      id: "calentadores-termos",
      title: "Calentadores y termos",
      description: "Instalación y reparación de calentadores y termos",
      slug: generateServiceSlug("Calentadores y termos"),
      images: [
        "/services/calentadores-1.jpg",
        "/services/calentadores-2.jpg",
        "/services/calentadores-3.jpg",
      ],
    },
    {
      id: "desatascos",
      title: "Desatascos",
      description: "Servicio de desatasco urgente las 24 horas",
      slug: generateServiceSlug("Desatascos"),
      images: [], // Sin imágenes para probar el placeholder
    },
  ],

  // Navegación
  navItems: [
    {
      id: "home",
      label: "Inicio",
      href: "/",
      type: "page",
    },
    {
      id: "services",
      label: "Servicios",
      href: "/servicios",
      type: "page",
    },
    {
      id: "reviews",
      label: "Opiniones",
      href: "/opiniones",
      type: "page",
    },
    {
      id: "about",
      label: "Sobre nosotros",
      href: "/sobre-nosotros",
      type: "page",
    },
  ],

  // Botones de la página de inicio
  homeButtons: [
    {
      id: "reviews",
      label: "Opiniones de clientes",
      href: "/opiniones",
      type: "reviews",
      priority: 1,
    },
    {
      id: "services-list",
      label: "Servicios de fontanería",
      href: "/servicios",
      type: "page",
      priority: 2,
    },
    {
      id: "service-reparacion",
      label: "Reparación de fugas",
      href: "/servicios/reparacion-de-fugas",
      type: "service",
      priority: 3,
    },
    {
      id: "service-instalaciones",
      label: "Instalaciones sanitarias",
      href: "/servicios/instalaciones-sanitarias",
      type: "service",
      priority: 4,
    },
    {
      id: "service-calentadores",
      label: "Calentadores y termos",
      href: "/servicios/calentadores-y-termos",
      type: "service",
      priority: 5,
    },
    {
      id: "service-desatascos",
      label: "Desatascos",
      href: "/servicios/desatascos",
      type: "service",
      priority: 6,
    },
    {
      id: "about",
      label: "Sobre nosotros",
      href: "/sobre-nosotros",
      type: "about",
      priority: 7,
    },
  ],

  // Sobre nosotros
  about: {
    presentation:
      "Somos una empresa de fontanería profesional con años de experiencia. Nos especializamos en ofrecer soluciones rápidas y eficientes para todos tus problemas de fontanería. Nuestro compromiso es brindarte un servicio de calidad, con profesionales cualificados y atención personalizada.",
    values: [
      {
        title: "Rápido",
        description:
          "Atención urgente las 24 horas. Resolvemos tus problemas de fontanería en el menor tiempo posible.",
      },
      {
        title: "Fiable",
        description:
          "Profesionales cualificados con años de experiencia. Garantía en todos nuestros trabajos.",
      },
      {
        title: "Transparente",
        description:
          "Precios competitivos y sin sorpresas. Presupuesto gratuito y detallado antes de comenzar.",
      },
    ],
    yearsExperience: "10+ años",
    interventionZone: "Tenerife Sur y alrededores",
  },

  // Tema / Colores
  theme: {
    primary: "#0ea5e9", // sky-500
    secondary: "#0284c7", // sky-600
    accent: "#f59e0b", // amber-500
  },

  // Avis clients
  reviews: {
    googleMapsUrl:
      "https://www.google.com/maps/place/Fontanería+García/@28.1234,-16.5678",
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.123456789!2d-16.5678!3d28.1234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA3JzI0LjIiTiAxNsKwMzQnMDQuMSJX!5e0!3m2!1ses!2ses!4v1234567890123!5m2!1ses!2ses",
    useEmbed: true,
    fallbackReviews: [
      {
        id: "1",
        author: "Juan P.",
        rating: 5,
        text: "Servicio excelente y muy profesional. Solucionaron mi problema de fuga rápidamente. Muy recomendable.",
        date: "Hace 2 semanas",
      },
      {
        id: "2",
        author: "María G.",
        rating: 5,
        text: "Instalaron un nuevo calentador en mi casa. Trabajo impecable, puntuales y muy educados. Precio justo.",
        date: "Hace 1 mes",
      },
      {
        id: "3",
        author: "Carlos R.",
        rating: 5,
        text: "Desatasco urgente a las 10 de la noche. Llegaron rápido y solucionaron el problema. Profesionales de verdad.",
        date: "Hace 3 semanas",
      },
      {
        id: "4",
        author: "Ana L.",
        rating: 5,
        text: "Reparación de instalación sanitaria completa. Muy satisfecha con el resultado y el trato recibido.",
        date: "Hace 2 meses",
      },
    ],
  },

  // URLs
  urls: {
    base: process.env.NEXT_PUBLIC_BASE_URL || "https://fontaneriagarcia.es",
    reviews: "/opiniones",
    about: "/sobre-nosotros",
  },
};

