import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import HomeHeaderAndCTA from "@/components/HomeHeaderAndCTA";

export const metadata: Metadata = {
  title: "Inicio",
  description: `${siteConfig.name} - Servicios de fontanería profesional en ${siteConfig.zone}. Reparaciones, instalaciones, calentadores y desatascos.`,
};

export default function Home() {
  return (
    <>
      <HomeHeaderAndCTA />
      {/* 5) Footer */}
      <footer className="flex flex-col items-center gap-1 pt-4 pb-2">
        <p className="text-white/30 text-[10px]">
          Made by{" "}
          <a
            href="https://publox.es"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white/60 transition-colors text-[10px] font-normal underline-offset-2 hover:underline"
          >
            PUBLOX
          </a>
        </p>
      </footer>
    </>
  );
}
