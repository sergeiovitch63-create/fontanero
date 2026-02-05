"use client";

import { createContext, useContext, useMemo, ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { siteConfig } from "@/config/site";

interface PreviewBrand {
  name: string;
  logo?: string;
}

type PreviewSiteConfig = typeof siteConfig & {
  brand: PreviewBrand;
};

const PreviewConfigContext = createContext<PreviewSiteConfig | null>(null);

interface PreviewProviderProps {
  children: ReactNode;
}

export function PreviewProvider({ children }: PreviewProviderProps) {
  const searchParams = useSearchParams();

  const nameParam = searchParams.get("name");
  const logoParam = searchParams.get("logo");

  const resolvedConfig = useMemo<PreviewSiteConfig>(() => {
    const name =
      nameParam && nameParam.trim().length > 0
        ? nameParam.trim()
        : siteConfig.name;
    const logo =
      logoParam && logoParam.trim().length > 0 ? logoParam.trim() : undefined;

    return {
      ...siteConfig,
      brand: {
        name,
        logo,
      },
    };
  }, [nameParam, logoParam]);

  return (
    <PreviewConfigContext.Provider value={resolvedConfig}>
      {children}
    </PreviewConfigContext.Provider>
  );
}

export function useResolvedConfig(): PreviewSiteConfig {
  const ctx = useContext(PreviewConfigContext);
  if (!ctx) {
    // Fallback pour éviter tout crash si utilisé hors provider.
    return {
      ...siteConfig,
      brand: {
        name: siteConfig.name,
        logo: undefined,
      },
    };
  }
  return ctx;
}


