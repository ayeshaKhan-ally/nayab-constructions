import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Sparkles, ArrowRight, Camera } from "lucide-react";
import GalleryView from "@/components/GalleryView";

export const metadata: Metadata = {
  title: "Visual Gallery | Architecture, Interiors & Construction Milestones",
  description:
    "Browse Nayab Construction's visual gallery of luxury villas, independent houses, modular kitchens, bedroom designs, commercial facades, and active site progress in Ramanagara.",
};

export default function GalleryPage() {
  return (
    <div className="bg-luxury-bg">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-28 bg-luxury-charcoal text-white text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-luxury-gold/40 text-luxury-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Camera className="w-3.5 h-3.5" />
            Visual Portfolio
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Architecture & Interior Design Gallery
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-luxury-gold to-luxury-gold-light mx-auto mt-4 rounded-full" />
          <p className="mt-5 text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            High-resolution photography showcasing contemporary villa elevations, modular kitchens,
            bespoke wardrobes, structural concrete work, and commercial spaces.
          </p>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GalleryView />
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-white border-t border-luxury-border text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-luxury-charcoal">
            Inspired by What You See?
          </h3>
          <p className="text-xs sm:text-sm text-luxury-body">
            Let our architects and civil engineers turn your ideal concept into an enduring reality.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-luxury-charcoal text-white hover:bg-black font-semibold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              <span>Speak with Our Team</span>
              <ArrowRight className="w-4 h-4 text-luxury-gold" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
