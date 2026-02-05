"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { siteConfig } from "@/config/site";

interface PreviewBrand {
  name: string;
  logo?: string;
}

interface PreviewSiteConfig extends typeof siteConfig {
  brand: PreviewBrand;
}

/**
 * Hook client pour lire les paramètres de prévisualisation (?name=, ?logo=)
 * depuis l'URL et retourner une config résolue sans modifier `siteConfig`.
 */
export function usePreviewConfig(): PreviewSiteConfig {
  const searchParams = useSearchParams();

  const nameParam = searchParams.get("name");
  const logoParam = searchParams.get("logo");

  const resolvedConfig = useMemo<PreviewSiteConfig>(() => {
    const name = nameParam ? decodeURIComponent(nameParam) : siteConfig.name;
    const logo = logoParam ? decodeURIComponent(logoParam) : undefined;

    return {
      ...siteConfig,
      brand: {
        name,
        logo,
      },
    };
  }, [nameParam, logoParam]);

  return resolvedConfig;
}


