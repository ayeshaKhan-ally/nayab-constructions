import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  ShieldCheck,
  Award,
  Compass,
  HardHat,
  Building2,
  CheckCircle2,
  ArrowRight,
  Phone,
  Sparkles,
  MapPin,
  Target,
  Eye,
} from "lucide-react";
import { COMPANY_INFO, FOUNDERS } from "@/lib/data";
import LeadershipSection from "@/components/LeadershipSection";

export const metadata: Metadata = {
  title: "About Us | Leading Civil Engineering & Construction Firm in Ramanagara",
  description:
    "Discover Nayab Construction's legacy in civil engineering, architectural design, and turnkey luxury building construction in Ramanagara and Karnataka.",
};

export default function AboutPage() {
  return (
    <div className="bg-luxury-bg">
      {/* Page Header */}
      <section className="relative py-20 lg:py-28 bg-luxury-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/hero/about-architecture-hero.jpg"
            alt="About Nayab Construction"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-luxury-gold/40 text-luxury-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Our Heritage & Vision
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Building a Better Tomorrow.
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-luxury-gold to-luxury-gold-light mx-auto mt-5 rounded-full" />
          <p className="mt-6 text-gray-300 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            From blueprint to reality: bridging engineering discipline, architectural beauty, and
            transparent craftsmanship in Ramanagara and across Karnataka.
          </p>
        </div>
      </section>

      {/* Main Narrative (Split Layout) */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-luxury-gold text-xs font-bold uppercase tracking-widest">
              <Compass className="w-4 h-4" /> Company Overview
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-luxury-charcoal leading-tight">
              One Company. Every Building Solution.
            </h2>
            <p className="text-luxury-body text-sm sm:text-base leading-relaxed">
              Nayab Construction is a comprehensive civil engineering, architectural, construction,
              interior design and real estate development company based in Ramanagara, Karnataka. We
              provide end-to-end solutions for residential, commercial and industrial projects, from
              initial planning and architectural design to structural engineering, building approvals,
              construction execution, interiors, renovation, estimation and property development.
            </p>
            <p className="text-luxury-body text-sm sm:text-base leading-relaxed">
              Our core objective is to provide customers with all property-related services under one
              accountable roof. Instead of dealing with disparate architects, municipal liaison agents,
              unsupervised contractors, and interior carpenting crews, clients partner with Nayab
              Construction for single-point accountability and guaranteed generational durability.
            </p>

            <div className="pt-2 border-t border-luxury-border">
              <h4 className="text-xs uppercase tracking-wider font-bold text-luxury-charcoal mb-3">
                Our Foundational Pillars:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-luxury-body">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-luxury-gold shrink-0" />
                  <span>25 Years Civil Engineering Legacy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-luxury-gold shrink-0" />
                  <span>100% In-House Multidisciplinary Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-luxury-gold shrink-0" />
                  <span>Strict Structural & Seismic Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-luxury-gold shrink-0" />
                  <span>Zero Cost Escalation Guarantee</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-luxury-border shadow-luxury-lg">
              <Image
                src="/images/hero/about-engineering-site.jpg"
                alt="Nayab Construction Engineering Site"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl border border-luxury-border shadow-luxury max-w-xs">
              <div className="flex items-center gap-3">
                <MapPin className="w-8 h-8 text-luxury-gold shrink-0" />
                <div>
                  <h5 className="font-serif text-sm font-bold text-luxury-charcoal">
                    Ramanagara Headquarters
                  </h5>
                  <p className="text-[11px] text-luxury-body">
                    Opp. Court Complex, Near Gandhi Park, Ijoor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-16 bg-white border-y border-luxury-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-luxury-bg border border-luxury-border shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-luxury-charcoal text-luxury-gold flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-luxury-charcoal">Our Vision</h3>
              <p className="text-xs sm:text-sm text-luxury-body leading-relaxed">
                To stand as Karnataka&apos;s foremost symbol of architectural elegance and structural
                trust. We envision communities and commercial landmarks built to stand strong for
                generations, blending modern luxury aesthetics with sustainable engineering practices.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-luxury-bg border border-luxury-border shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-luxury-charcoal text-luxury-gold flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-luxury-charcoal">Our Mission</h3>
              <p className="text-xs sm:text-sm text-luxury-body leading-relaxed">
                To eliminate the fragmentation of the construction industry by unifying architectural
                planning, civil structural analysis, municipal approvals, turnkey execution, and
                interior design under one transparent, client-first umbrella.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <LeadershipSection isStandalonePage={true} />

      {/* CTA Section */}
      <section className="py-20 bg-luxury-charcoal text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Ready to Begin Your Construction Journey?
          </h2>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto">
            Schedule a personal consultation with our civil engineering founders at our Ramanagara
            office.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-luxury-gold text-luxury-charcoal font-bold text-xs uppercase tracking-wider hover:bg-luxury-gold-light transition-all shadow-md"
            >
              Request Free Consultation
            </Link>
            <a
              href={COMPANY_INFO.contact.phoneTel}
              className="px-8 py-3.5 rounded-full border border-white/30 text-white font-semibold text-xs uppercase tracking-wider hover:bg-white hover:text-luxury-charcoal transition-all"
            >
              Call: {COMPANY_INFO.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
