import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import ProjectsView from "@/components/ProjectsView";

export const metadata: Metadata = {
  title: "Architectural & Construction Projects Portfolio | Nayab Construction",
  description:
    "Explore luxury residential villas, independent houses, commercial complexes, and bespoke interiors completed and ongoing by Nayab Construction in Ramanagara & Karnataka.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-luxury-bg">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-28 bg-luxury-charcoal text-white text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-luxury-gold/40 text-luxury-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Curated Architectural Works
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Crafting Spaces That Inspire
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-luxury-gold to-luxury-gold-light mx-auto mt-4 rounded-full" />
          <p className="mt-5 text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            A showcase of our civil engineering craftsmanship, luxury villas, commercial spaces, and
            turnkey interior solutions across Ramanagara and surrounding regions.
          </p>
        </div>
      </section>

      {/* Main Interactive Projects Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectsView />

        {/* Transparency Disclaimer */}
        <div className="mt-16 p-6 rounded-3xl bg-white border border-luxury-border text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-luxury-gold font-bold text-xs uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4" /> Professional Integrity Notice
          </div>
          <p className="text-xs text-luxury-body leading-relaxed">
            * In strict accordance with our company ethics, sample architectural visual models and
            design concepts are clearly identified. As new on-site milestones and completed client
            handover photographs are documented, our digital gallery is continuously updated.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white border-t border-luxury-border text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-luxury-charcoal">
            Want to Build a Similar Masterpiece?
          </h3>
          <p className="text-xs sm:text-sm text-luxury-body">
            Schedule a site consultation or request an architectural elevation for your plot today.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-luxury-charcoal text-white hover:bg-black font-semibold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              <span>Get Project Quotation</span>
              <ArrowRight className="w-4 h-4 text-luxury-gold" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
