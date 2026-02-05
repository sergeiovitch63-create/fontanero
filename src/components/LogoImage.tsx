"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface LogoImageProps {
  src?: string;
  alt: string;
  size: number;
  className?: string;
  rounded?: boolean;
}

export default function LogoImage({
  src,
  alt,
  size,
  className,
  rounded = false,
}: LogoImageProps) {
  const [hasError, setHasError] = useState(false);
  const logoPath = src || "/brand/logo.jpg";

  if (hasError) {
    return (
      <div
        className={cn(
          "flex items-center justify-center text-white font-bold bg-white/10",
          rounded && "rounded-full",
          className
        )}
        style={{ width: size, height: size }}
      >
        FG
      </div>
    );
  }

  return (
    <div
      className={cn("relative overflow-hidden", rounded && "rounded-full", className)}
      style={{ width: size, height: size }}
    >
      <Image
        src={logoPath}
        alt={alt}
        width={size}
        height={size}
        className="object-cover"
        onError={() => setHasError(true)}
      />
    </div>
  );
}

