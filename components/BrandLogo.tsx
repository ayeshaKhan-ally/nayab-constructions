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
      <Link href="/" className={`group inline-flex items-center gap-3 ${className}`}>
        <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-luxury-gold/40 shadow-sm bg-luxury-charcoal flex items-center justify-center p-0.5">
          <Image
            src="/images/branding/nayab-logo.jpg"
            alt="Nayab Construction Icon"
            width={40}
            height={40}
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-serif text-lg font-bold tracking-wider text-luxury-charcoal uppercase leading-none">
            NAYAB
          </span>
          <span className="text-[10px] tracking-widest text-luxury-gold uppercase font-medium">
            CONSTRUCTIONS
          </span>
        </div>
      </Link>
    );
  }

  if (variant === "footer") {
    return (
      <Link href="/" className={`group inline-flex flex-col items-start ${className}`}>
        <div className="relative overflow-hidden rounded-xl border border-luxury-gold/50 shadow-luxury-lg bg-luxury-dark p-1.5 transition-transform duration-300 group-hover:scale-[1.02]">
          <Image
            src="/images/branding/nayab-logo.jpg"
            alt="Nayab Constructions"
            width={280}
            height={130}
            className="w-auto h-16 sm:h-20 object-contain rounded-lg"
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
    <Link href="/" className={`group inline-flex items-center gap-3.5 ${className}`}>
      {/* Official 3D Gold Logo Image Frame */}
      <div className="relative overflow-hidden rounded-xl border border-luxury-gold/40 shadow-sm bg-luxury-charcoal p-1 transition-all duration-300 group-hover:border-luxury-gold group-hover:shadow-luxury">
        <Image
          src="/images/branding/nayab-logo.jpg"
          alt="Nayab Constructions Logo"
          width={220}
          height={95}
          priority
          className="h-11 sm:h-12 w-auto object-contain rounded"
        />
      </div>

      {/* Brand Typographic Identity */}
      <div className="hidden lg:flex flex-col">
        <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-luxury-charcoal leading-none">
          NAYAB <span className="text-luxury-gold font-light tracking-normal">CONSTRUCTION</span>
        </span>
        <span className="text-[10px] tracking-[0.22em] text-luxury-body uppercase font-medium mt-1">
          Civil Engineers • Architects • Builders
        </span>
      </div>
    </Link>
  );
}
