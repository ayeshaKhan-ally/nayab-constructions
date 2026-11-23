import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Compass,
  HardHat,
  Building2,
  Home,
  Layers,
  Calculator,
  FileCheck,
  Landmark,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { SERVICES, COMPANY_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Comprehensive Construction & Engineering Services in Ramanagara",
  description:
    "Explore Nayab Construction's 9 core engineering disciplines: Architectural Planning, Structural Design, Turnkey Construction, Interiors, 3D Elevation, Estimation, Approvals, Loan Assistance & Real Estate.",
};

const serviceIcons: Record<string, React.ElementType> = {
  "architectural-design": Compass,
  "structural-design": HardHat,
  construction: Building2,
  "interior-design": Home,
  "3d-visualization": Layers,
  estimation: Calculator,
  "approvals-documentation": FileCheck,
  "loan-assistance": Landmark,
  "real-estate": TrendingUp,
};

export default function ServicesPage() {
  return (
    <div className="bg-luxury-bg">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-28 bg-luxury-charcoal text-white text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-luxury-gold/40 text-luxury-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            9 Integrated Disciplines
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Complete Construction & Engineering Solutions
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-luxury-gold to-luxury-gold-light mx-auto mt-4 rounded-full" />
          <p className="mt-5 text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Everything you need to plan, design, build, sanction and develop your property under one
            accountable roof in Ramanagara and Karnataka.
          </p>
        </div>
      </section>

      {/* Services Grid with Comprehensive Details */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {SERVICES.map((srv, index) => {
            const IconComp = serviceIcons[srv.slug] || Building2;
            const isReversed = index % 2 === 1;

            return (
              <div
                key={srv.slug}
                id={srv.slug}
                className="bg-white rounded-3xl border border-luxury-border shadow-luxury overflow-hidden p-6 sm:p-10 lg:p-12 transition-all hover:shadow-luxury-hover"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Column */}
                  <div className={`lg:col-span-5 ${isReversed ? "lg:order-2" : ""}`}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-luxury-border shadow-sm group">
                      <Image
                        src={srv.heroImage}
                        alt={srv.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 500px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/95 text-luxury-gold shadow-md flex items-center justify-center border border-luxury-gold/30">
                        <IconComp className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Info Column */}
                  <div className={`lg:col-span-7 space-y-4 ${isReversed ? "lg:order-1" : ""}`}>
                    <div className="flex items-center gap-2">
                      <span className="text-xs uppercase tracking-widest font-bold text-luxury-gold">
                        Category 0{index + 1}
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-luxury-charcoal">
                      {srv.title}
                    </h2>

                    <p className="text-xs sm:text-sm font-medium text-luxury-gold-dark italic">
                      {srv.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-luxury-body leading-relaxed">
                      {srv.fullDesc}
                    </p>

                    {/* Offerings list */}
                    <div className="pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-luxury-charcoal mb-2">
                        Key Capabilities & Sub-Services:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-luxury-body">
                        {srv.offerings.slice(0, 6).map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-luxury-gold shrink-0" />
                            <span className="line-clamp-1">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <Link
                        href={`/services/${srv.slug}`}
                        className="px-6 py-3 rounded-full bg-luxury-charcoal hover:bg-black text-white text-xs font-semibold uppercase tracking-wider text-center inline-flex items-center justify-center gap-2 transition-all shadow-sm"
                      >
                        <span>View Detailed Specification</span>
                        <ArrowRight className="w-3.5 h-3.5 text-luxury-gold" />
                      </Link>

                      <Link
                        href="/contact"
                        className="px-6 py-3 rounded-full border border-luxury-border hover:border-luxury-gold text-luxury-charcoal text-xs font-semibold uppercase tracking-wider text-center transition-all"
                      >
                        Enquire for this Service
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trust Callout */}
      <section className="py-16 bg-white border-t border-luxury-border text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-luxury-bg text-luxury-gold flex items-center justify-center mx-auto border border-luxury-gold/40">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-luxury-charcoal">
            Need a Custom Combined Package?
          </h3>
          <p className="text-xs sm:text-sm text-luxury-body leading-relaxed max-w-xl mx-auto">
            Whether you require an integrated Turnkey Villa package (Design + Sanction + Construction +
            Interiors) or an individual service like BESCOM sanction drawings or BOQ estimation, we
            provide flexible solutions.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-luxury-gold text-luxury-charcoal font-bold text-xs uppercase tracking-wider hover:bg-luxury-gold-light transition-all shadow-md"
            >
              Consult with Our Engineers &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
