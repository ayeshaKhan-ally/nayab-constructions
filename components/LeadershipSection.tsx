import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, Briefcase, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { FOUNDERS } from "@/lib/data";

interface LeadershipSectionProps {
  showTitle?: boolean;
  className?: string;
  isStandalonePage?: boolean;
}

export default function LeadershipSection({
  showTitle = true,
  className = "",
  isStandalonePage = false,
}: LeadershipSectionProps) {
  return (
    <section className={`py-16 sm:py-24 bg-luxury-bg relative overflow-hidden ${className}`}>
      {/* Decorative architectural background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-96 h-96 bg-luxury-beige/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-luxury-beige border border-luxury-border text-luxury-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <ShieldCheck className="w-4 h-4 text-luxury-gold" />
              Founders & Executive Leadership
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-luxury-charcoal leading-tight">
              Decades of Civil Engineering & Architectural Excellence
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-luxury-gold to-luxury-gold-light mx-auto mt-5 rounded-full" />
            <p className="mt-5 text-luxury-body text-sm sm:text-base leading-relaxed">
              Guided by generational engineering principles and modern architectural ingenuity, our
              founders lead Nayab Construction with integrity, transparency, and technical precision.
            </p>
          </div>
        )}

        {/* Two Elegant Side-by-Side Founder Profile Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {FOUNDERS.map((founder, idx) => {
            const isFounder = idx === 0;

            return (
              <div
                key={founder.name}
                className="group bg-white rounded-3xl border border-luxury-border shadow-luxury hover:shadow-luxury-hover transition-all duration-500 overflow-hidden flex flex-col justify-between"
              >
                {/* Top Header Card Info */}
                <div className="p-6 sm:p-8">
                  {/* Badge & Designation Bar */}
                  <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-luxury-bg border border-luxury-gold/30 text-luxury-charcoal text-xs font-bold uppercase tracking-wider">
                      <Briefcase className="w-3.5 h-3.5 text-luxury-gold" />
                      {founder.designation}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-luxury-gold/15 to-luxury-gold-light/20 border border-luxury-gold/50 text-luxury-charcoal text-xs font-semibold">
                      <Award className="w-3.5 h-3.5 text-luxury-gold" />
                      {founder.experience}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                    {/* Founder Photograph in Luxury Frame */}
                    <div className="sm:col-span-5 relative">
                      <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border-2 border-luxury-gold/40 shadow-luxury group-hover:border-luxury-gold transition-all duration-300 bg-luxury-beige">
                        <Image
                          src={founder.image}
                          alt={`${founder.name} - ${founder.designation} at Nayab Construction`}
                          fill
                          sizes="(max-width: 640px) 100vw, 300px"
                          className={`object-cover ${
                            isFounder ? "object-top" : "object-[center_35%]"
                          } transition-transform duration-700 group-hover:scale-105`}
                          priority
                        />
                        {/* Gold corner accent overlay */}
                        <div className="absolute inset-0 border border-white/20 rounded-2xl pointer-events-none" />
                      </div>

                      {/* Prominent Years Badge */}
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-luxury-charcoal text-white text-[11px] font-bold px-3 py-1 rounded-full border border-luxury-gold shadow-md">
                        {founder.experienceYears} Years Exp.
                      </div>
                    </div>

                    {/* Founder Name & Bio */}
                    <div className="sm:col-span-7 space-y-3 pt-2 sm:pt-0">
                      <div>
                        {founder.profession && (
                          <span className="text-[11px] uppercase tracking-widest text-luxury-gold font-bold block mb-1">
                            {founder.profession}
                          </span>
                        )}
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-luxury-charcoal group-hover:text-luxury-gold transition-colors">
                          {founder.name}
                        </h3>
                        <p className="text-xs text-luxury-muted font-medium mt-0.5">
                          {isFounder ? "Civil Engineering Veteran" : "Project Director & Operations"}
                        </p>
                      </div>

                      <p className="text-luxury-body text-xs sm:text-sm leading-relaxed">
                        {founder.description}
                      </p>
                    </div>
                  </div>

                  {/* Highlights list */}
                  <div className="mt-8 pt-6 border-t border-luxury-border/70 space-y-2">
                    <h4 className="text-[11px] uppercase tracking-wider font-bold text-luxury-charcoal mb-2">
                      Key Competencies & Leadership Focus:
                    </h4>
                    <div className="grid grid-cols-1 gap-2 text-xs text-luxury-body">
                      {founder.highlights.map((hl, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-luxury-gold shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Footer Accent */}
                <div className="bg-luxury-bg/70 px-6 sm:px-8 py-3.5 border-t border-luxury-border flex items-center justify-between text-xs text-luxury-charcoal font-medium">
                  <span className="text-luxury-body text-[11px]">
                    Ramanagara & Karnataka Projects
                  </span>
                  <Link
                    href="/contact"
                    className="text-luxury-gold font-semibold hover:underline inline-flex items-center gap-1 group-hover:gap-1.5 transition-all text-xs"
                  >
                    Consult Directly <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Experience Clarity */}
        <div className="mt-12 text-center">
          <p className="text-xs text-luxury-muted max-w-2xl mx-auto">
            * Note: Mr. Sadat Ulla Khan brings 25 years of individual civil engineering experience, and
            Mr. Nayab Noor Mohammad Khan brings 8 years of contemporary project leadership. Individual
            experience is proudly presented reflecting verified professional track records.
          </p>
        </div>

        {/* Dedicated Page Additional Content */}
        {isStandalonePage && (
          <div className="mt-16 bg-white rounded-3xl border border-luxury-border p-8 sm:p-12 shadow-luxury">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-luxury-gold">
                Leadership Philosophy
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-luxury-charcoal">
                &ldquo;Engineering Integrity Is Not Just a Standard, It Is Our Family Legacy.&rdquo;
              </h3>
              <p className="text-sm text-luxury-body leading-relaxed">
                At Nayab Construction, our founders remain actively present at project sites in
                Ramanagara, Bengaluru, and surrounding regions. We supervise reinforcement steel tying,
                inspect concrete batch mixes, review statutory sanction drawings, and liaise directly with
                homeowners and property developers. Every building constructed bears our personal stamp of
                quality.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-luxury-charcoal text-white hover:bg-black transition-all text-xs uppercase tracking-wider font-semibold"
                >
                  Schedule A Meeting With Our Founders <ArrowRight className="w-4 h-4 text-luxury-gold" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
