import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ShieldCheck, Award, Briefcase, Phone, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";
import { FOUNDERS, COMPANY_INFO } from "@/lib/data";
import LeadershipSection from "@/components/LeadershipSection";

export const metadata: Metadata = {
  title: "Founders & Executive Leadership | Nayab Construction",
  description:
    "Meet the founders of Nayab Construction: Mr. Sadat Ulla Khan (Civil Engineer, 25 Yrs Experience) and Mr. Nayab Noor Mohammad Khan (Co-Founder, 8 Yrs Experience).",
};

export default function LeadershipPage() {
  return (
    <div className="bg-luxury-bg">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-24 bg-luxury-charcoal text-white overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-luxury-gold/40 text-luxury-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <ShieldCheck className="w-4 h-4" />
            Executive Leadership & Heritage
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Our Founders & Visionaries
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-luxury-gold to-luxury-gold-light mx-auto mt-4 rounded-full" />
          <p className="mt-5 text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Decades of structural civil engineering mastery combined with contemporary architectural
            coordination, leading every Nayab Construction project with uncompromising integrity.
          </p>
        </div>
      </section>

      {/* Leadership Profile Cards Component */}
      <LeadershipSection showTitle={false} isStandalonePage={true} />

      {/* Engineering Philosophy Section */}
      <section className="py-20 bg-white border-y border-luxury-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-luxury-gold block mb-2">
              Our Core Creed
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-luxury-charcoal">
              Civil Engineering Ethics & On-Site Presence
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-luxury-gold to-luxury-gold-light mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-luxury-body text-sm leading-relaxed">
              Why having practicing civil engineering founders directly supervising your project makes all
              the difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-luxury-bg border border-luxury-border shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-luxury-charcoal text-luxury-gold flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="font-serif text-lg font-bold text-luxury-charcoal">
                Direct Structural Verification
              </h3>
              <p className="text-xs text-luxury-body leading-relaxed">
                Rather than delegating structural checks to junior site staff, our founders personally
                vet reinforcement steel binding, shuttering plumbness, and concrete compaction for all
                critical slab pours.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-luxury-bg border border-luxury-border shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-luxury-charcoal text-luxury-gold flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="font-serif text-lg font-bold text-luxury-charcoal">
                25 Years Local Soil Knowledge
              </h3>
              <p className="text-xs text-luxury-body leading-relaxed">
                Ramanagara and surrounding regions possess varied geologies from rocky strata to clayey
                loam. Mr. Sadat Ulla Khan&apos;s 25 years in the region ensures foundation types are
                optimized for zero settlement.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-luxury-bg border border-luxury-border shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-luxury-charcoal text-luxury-gold flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="font-serif text-lg font-bold text-luxury-charcoal">
                Single Point Accountability
              </h3>
              <p className="text-xs text-luxury-body leading-relaxed">
                Clients speak directly with decision-makers who understand building codes, statutory
                approvals, and material specifications, providing total peace of mind throughout
                construction.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <a
                href={COMPANY_INFO.contact.phoneTel}
                className="px-8 py-3.5 rounded-full bg-luxury-charcoal text-white hover:bg-black font-semibold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-luxury-gold" /> Call Founders Directly ({COMPANY_INFO.contact.phone})
              </a>
              <a
                href={COMPANY_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-emerald-600 text-white hover:bg-emerald-500 font-semibold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" /> Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
