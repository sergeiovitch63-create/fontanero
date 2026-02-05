import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PreviewProvider } from "@/components/PreviewProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://fontaneriagarcia.es"
  ),
  title: {
    default: "Fontanería García - Tenerife",
    template: "%s | Fontanería García",
  },
  description: "Servicios de fontanería profesional en Tenerife",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: "Fontanería García",
    title: "Fontanería García - Tenerife",
    description: "Servicios de fontanería profesional en Tenerife",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fontanería García",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fontanería García - Tenerife",
    description: "Servicios de fontanería profesional en Tenerife",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full relative`}
      >
        {/* Background image fixed */}
        <div
          className="fixed inset-0 -z-10"
          style={{
            backgroundImage: "url('/fond-ecran.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        />

        {/* Contenu centré */}
        <div className="relative z-10 min-h-full flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-[420px]">
            <Suspense fallback={null}>
              <PreviewProvider>{children}</PreviewProvider>
            </Suspense>
          </div>
        </div>
      </body>
    </html>
  );
}
