import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  variant?: "header" | "footer" | "hero" | "compact";
  className?: string;
}

export default function BrandLogo({ variant = "header", className = "" }: BrandLogoProps) {
  if (variant === "compact") {
    return (
      <Link href="/" className={`group inline-flex items-center gap-2.5 ${className}`}>
        <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-luxury-gold/50 shadow-sm bg-luxury-charcoal flex items-center justify-center p-0.5 shrink-0">
          <Image
            src="/images/branding/nayab-logo.jpg"
            alt="Nayab Construction Icon"
            width={80}
            height={40}
            className="w-full h-full object-contain rounded"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-serif text-base font-bold tracking-wider text-luxury-charcoal uppercase leading-none">
            NAYAB
          </span>
          <span className="text-[9px] tracking-widest text-luxury-gold uppercase font-medium">
            CONSTRUCTIONS
          </span>
        </div>
      </Link>
    );
  }

  if (variant === "footer") {
    return (
      <Link href="/" className={`group inline-flex flex-col items-start ${className}`}>
        <div className="relative overflow-hidden rounded-2xl border border-luxury-gold/50 shadow-luxury-lg bg-luxury-charcoal p-2 transition-transform duration-300 group-hover:scale-[1.02]">
          <Image
            src="/images/branding/nayab-logo.jpg"
            alt="Nayab Constructions - Building Dreams, Creating Value"
            width={240}
            height={120}
            className="w-auto h-16 sm:h-20 object-contain rounded-xl"
          />
        </div>
        <div className="mt-3">
          <p className="text-xs uppercase tracking-[0.2em] text-luxury-gold font-semibold">
            Building Dreams • Creating Value
          </p>
          <p className="text-[11px] text-gray-400 mt-0.5 font-light">
            Civil Engineers | Architects | Builders | Interior Designers
          </p>
        </div>
      </Link>
    );
  }

  // Header / Default variant
  return (
    <Link href="/" className={`group inline-flex items-center gap-2.5 sm:gap-3.5 ${className}`}>
      {/* Official 3D Gold Logo Image Frame */}
      <div className="relative overflow-hidden rounded-xl border border-luxury-gold/50 shadow-sm bg-luxury-charcoal p-1 transition-all duration-300 group-hover:border-luxury-gold group-hover:shadow-luxury shrink-0">
        <Image
          src="/images/branding/nayab-logo.jpg"
          alt="Nayab Constructions Official Logo"
          width={180}
          height={90}
          priority
          className="h-10 sm:h-12 w-auto object-contain rounded"
        />
      </div>

      {/* Brand Typographic Identity */}
      <div className="flex flex-col">
        <span className="font-serif text-base sm:text-xl lg:text-2xl font-bold tracking-wider text-luxury-charcoal leading-none">
          NAYAB <span className="text-luxury-gold font-light tracking-normal">CONSTRUCTION</span>
        </span>
        <span className="text-[8px] sm:text-[10px] tracking-[0.2em] text-luxury-body uppercase font-medium mt-1">
          Civil Engineers • Architects • Builders
        </span>
      </div>
    </Link>
  );
}
