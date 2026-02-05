import { siteConfig } from "@/config/site";

export interface PreviewBrand {
  name: string;
  logo?: string;
}

export interface PreviewConfig {
  brand: PreviewBrand;
}

/**
 * Résout la configuration de prévisualisation à partir des search params.
 * Utilisé dans les pages (Server Components) via `searchParams`.
 */
export function resolvePreviewConfig(searchParams?: {
  name?: string;
  logo?: string;
}): PreviewConfig {
  const name = searchParams?.name
    ? decodeURIComponent(searchParams.name)
    : siteConfig.name;

  const logo = searchParams?.logo
    ? decodeURIComponent(searchParams.logo)
    : undefined;

  return {
    brand: {
      name,
      logo,
    },
  };
}


