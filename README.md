# Template Linktree Premium - Next.js 14

Template mobile-first premium tipo Linktree para sitios de servicios locales, construido con Next.js 14, TypeScript, Tailwind CSS y Framer Motion.

## 🚀 Características

- ✅ **Mobile-first** - Diseño optimizado para smartphones
- ✅ **Glassmorphism** - Efectos visuales modernos
- ✅ **Animaciones suaves** - Transiciones con Framer Motion
- ✅ **SEO optimizado** - Metadata y OpenGraph configurados
- ✅ **100% TypeScript** - Type-safe en todo el proyecto
- ✅ **Configuración centralizada** - Todo el contenido en `src/config/site.ts`
- ✅ **Lightbox** - Galería de imágenes con vista previa
- ✅ **Accesible** - Navegación por teclado y ARIA labels

## 📋 Cómo duplicar este template

### 1. Clonar el repositorio

```bash
git clone <url-del-repo>
cd fontanero
npm install
```

### 2. Configurar el sitio

Edita `src/config/site.ts` y modifica:

#### Información básica
```typescript
name: "Tu Nombre",
zone: "Tu Zona",
```

#### Contacto
```typescript
phone: "+34 XXX XXX XXX",
whatsapp: "+34 XXX XXX XXX",
```

#### Servicios
Modifica el array `services` con tus servicios:
```typescript
services: [
  {
    id: "tu-servicio",
    title: "Nombre del servicio",
    description: "Descripción del servicio",
    slug: "tu-servicio", // Se genera automáticamente
    images: ["/services/imagen-1.jpg"], // Opcional
  },
]
```

#### Colores del tema
```typescript
theme: {
  primary: "#TU_COLOR_PRINCIPAL",
  secondary: "#TU_COLOR_SECUNDARIO",
  accent: "#TU_COLOR_ACENTO",
}
```

#### Logo
Coloca tu logo en `/public/brand/logo.jpg` (o .png, .svg)
- Si no existe, se mostrará un placeholder con iniciales

#### Imágenes de servicios
Coloca las imágenes en `/public/services/` con los nombres definidos en la config

### 3. Personalizar contenido

#### Página "Sobre nosotros"
Edita `siteConfig.about`:
```typescript
about: {
  presentation: "Tu texto de presentación...",
  values: [
    { title: "Valor 1", description: "Descripción..." },
  ],
  yearsExperience: "X años",
  interventionZone: "Tu zona",
}
```

#### Opiniones
Edita `siteConfig.reviews`:
```typescript
reviews: {
  googleMapsUrl: "https://maps.google.com/...",
  googleMapsEmbedUrl: "https://maps.google.com/embed?...", // Opcional
  useEmbed: true, // true para mostrar iframe
  fallbackReviews: [...], // Reseñas mock
}
```

### 4. Desplegar en Vercel

1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente Next.js
3. El build se ejecutará automáticamente
4. ¡Listo! Tu sitio estará en línea

#### Variables de entorno (opcional)
```
NEXT_PUBLIC_BASE_URL=https://tu-dominio.com
```

## 📁 Estructura del proyecto

```
├── app/                    # Páginas Next.js App Router
│   ├── page.tsx           # Home
│   ├── servicios/         # Páginas de servicios
│   ├── opiniones/         # Página de opiniones
│   └── sobre-nosotros/    # Página sobre nosotros
├── src/
│   ├── components/        # Componentes reutilizables
│   ├── config/
│   │   └── site.ts        # ⭐ Configuración centralizada
│   ├── lib/
│   │   └── utils.ts       # Utilidades
│   └── types/
│       └── site.ts        # Tipos TypeScript
├── public/
│   ├── brand/             # Logo (logo.jpg)
│   └── services/          # Imágenes de servicios
└── README.md
```

## 🎨 Personalización avanzada

### Cambiar colores
Edita las variables CSS en `app/globals.css`:
```css
--brand: #TU_COLOR;
--brand-2: #TU_COLOR_2;
--brand-accent: #TU_COLOR_ACENTO;
```

### Modificar animaciones
Los componentes de animación están en `src/components/PageTransition.tsx` y `AnimatedList.tsx`

### Agregar nuevas páginas
1. Crea la página en `app/tu-pagina/page.tsx`
2. Usa `InnerPageLayout` para mantener la coherencia
3. Agrega la ruta en `siteConfig.navItems` si es necesario

## 🛠️ Comandos

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm start

# Linter
npm run lint
```

## 📝 Notas

- Todas las imágenes deben estar en `/public/`
- El logo debe estar en `/public/brand/logo.jpg`
- Las imágenes de servicios en `/public/services/`
- Todo el contenido debe venir de `siteConfig` (no hardcodear en componentes)

## 📄 Licencia

Este template es libre para uso personal y comercial.

---

**Hecho con ❤️ usando Next.js 14**
