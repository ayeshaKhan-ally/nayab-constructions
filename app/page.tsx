import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  Compass,
  HardHat,
  Building2,
  Home,
  Layers,
  Calculator,
  FileCheck,
  Landmark,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  Phone,
  Clock,
  MapPin,
  ChevronRight,
  Star,
} from "lucide-react";
import { COMPANY_INFO, SERVICES, PROCESS_STEPS, WHY_CHOOSE_US, TESTIMONIALS } from "@/lib/data";
import LeadershipSection from "@/components/LeadershipSection";
import HomePortfolio from "@/components/HomePortfolio";
import CostEstimator from "@/components/CostEstimator";
import ContactForm from "@/components/ContactForm";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";

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

export default function HomePage() {
  return (
    <div className="relative">
      {/* =========================================================================
          HERO SECTION: Luxury Modern Villa Architectural Elevation
          ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Background Ultra-Realistic Villa Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2400&q=85"
            alt="Nayab Construction Luxury Villa Architecture"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Subtle Light Luxury Gradient Overlay: ensures text readability while keeping villa vivid */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8F6F0]/95 via-[#F8F6F0]/80 to-transparent lg:to-[#F8F6F0]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8F6F0] via-transparent to-transparent opacity-90" />
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column Content */}
            <div className="lg:col-span-8 space-y-6">
              {/* Small Heading */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-luxury-gold/50 shadow-sm backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-bold text-luxury-charcoal">
                  WELCOME TO NAYAB CONSTRUCTION
                </span>
              </div>

              {/* Main Heading with Champagne Gold Highlight */}
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-luxury-charcoal tracking-tight leading-[1.08]">
                Building Dreams, <br />
                <span className="gold-text-gradient italic font-normal">Creating Value.</span>
              </h1>

              {/* Description */}
              <p className="text-luxury-body text-base sm:text-lg lg:text-xl max-w-2xl font-normal leading-relaxed">
                From innovative construction and architectural planning to elegant interiors and real
                estate development, we transform your vision into reality.
              </p>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-luxury-charcoal hover:bg-black text-white font-semibold text-xs sm:text-sm uppercase tracking-wider text-center transition-all duration-300 shadow-luxury hover:scale-105 group"
                >
                  <span className="inline-flex items-center gap-2">
                    Get Free Consultation
                    <ArrowRight className="w-4 h-4 text-luxury-gold group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link
                  href="/projects"
                  className="px-8 py-4 rounded-full bg-white/95 hover:bg-white text-luxury-charcoal border border-luxury-gold/60 font-semibold text-xs sm:text-sm uppercase tracking-wider text-center transition-all duration-300 shadow-sm hover:border-luxury-gold hover:scale-105"
                >
                  Explore Our Projects
                </Link>

                <a
                  href={COMPANY_INFO.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider text-center transition-all duration-300 shadow-sm hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" /> Chat on WhatsApp
                </a>
              </div>

              {/* Elegant Trust Highlights */}
              <div className="pt-8 border-t border-luxury-border/80">
                <p className="text-[11px] uppercase tracking-widest text-luxury-gold font-bold mb-3">
                  Our Core Pillars:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    "Residential & Commercial Construction",
                    "Architectural Design & Planning",
                    "Interior Design & Execution",
                    "Real Estate Development",
                  ].map((pillar, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-2xl bg-white/80 backdrop-blur-md border border-luxury-border/70 shadow-sm flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-luxury-charcoal leading-tight">
                        {pillar}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column Floating Architectural Badge */}
            <div className="lg:col-span-4 hidden lg:flex flex-col items-end">
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-luxury-gold/40 shadow-luxury-lg max-w-sm space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-luxury-charcoal flex items-center justify-center text-luxury-gold shadow-md">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-luxury-gold block">
                      Engineering Heritage
                    </span>
                    <h4 className="font-serif text-lg font-bold text-luxury-charcoal">
                      Ramanagara, Karnataka
                    </h4>
                  </div>
                </div>

                <div className="space-y-3 pt-2 text-xs text-luxury-body border-t border-luxury-border/60">
                  <div className="flex justify-between items-center">
                    <span>Founder Experience:</span>
                    <span className="font-bold text-luxury-charcoal">25 Years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Co-Founder Experience:</span>
                    <span className="font-bold text-luxury-charcoal">8 Years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Service Disciplines:</span>
                    <span className="font-bold text-luxury-gold">9 In-House</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Headquarters:</span>
                    <span className="font-bold text-luxury-charcoal">Opp. Court Complex</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/about"
                    className="w-full py-2.5 rounded-xl bg-luxury-bg hover:bg-luxury-beige text-luxury-charcoal font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors border border-luxury-border"
                  >
                    <span>Read Leadership Story</span>
                    <ChevronRight className="w-3.5 h-3.5 text-luxury-gold" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          KEY CREDENTIALS & STATS STRIP
          ========================================================================= */}
      <section className="bg-white border-y border-luxury-border py-8 relative z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {COMPANY_INFO.stats.map((stat, i) => (
              <div key={i} className="p-3">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-luxury-charcoal block">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-wider text-luxury-gold font-semibold mt-1 block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          ABOUT US SECTION (Split Layout)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-luxury-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-luxury-border shadow-luxury-lg">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
                  alt="Nayab Construction Architectural Mastery"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Experience Callout */}
              <div className="absolute -bottom-6 -right-6 sm:bottom-6 sm:right-6 bg-luxury-charcoal text-white p-5 rounded-2xl shadow-2xl border border-luxury-gold max-w-[240px]">
                <div className="font-serif text-3xl font-bold text-luxury-gold">25+</div>
                <div className="text-xs font-semibold uppercase tracking-wider mt-0.5">
                  Years of Civil Engineering
                </div>
                <p className="text-[11px] text-gray-400 mt-1">
                  Experienced technical guidance on every project.
                </p>
              </div>
            </div>

            {/* Right Story Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-luxury-beige border border-luxury-border text-luxury-gold text-xs font-semibold uppercase tracking-widest">
                <span>About Nayab Construction</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-luxury-charcoal leading-tight">
                Building a Better Tomorrow.
              </h2>

              <p className="text-luxury-body text-sm sm:text-base leading-relaxed">
                Nayab Construction is a comprehensive civil engineering, architectural, construction,
                interior design and real estate development company rooted in Ramanagara, Karnataka. We
                provide end-to-end solutions for residential, commercial and industrial projects, from
                initial planning and architectural design to structural engineering, building
                approvals, construction execution, interiors, renovation, estimation and property
                development.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-luxury-border space-y-1">
                  <h4 className="font-serif text-base font-bold text-luxury-charcoal">Our Vision</h4>
                  <p className="text-xs text-luxury-body">
                    To be Karnataka&apos;s most trusted engineering firm, celebrated for timeless
                    architecture and enduring structural strength.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-luxury-border space-y-1">
                  <h4 className="font-serif text-base font-bold text-luxury-charcoal">Our Mission</h4>
                  <p className="text-xs text-luxury-body">
                    To deliver &ldquo;One Company. Every Building Solution&rdquo; with flawless execution,
                    budget transparency, and unmatched quality.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/about"
                  className="px-7 py-3.5 rounded-full bg-luxury-charcoal hover:bg-black text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-md group inline-flex items-center gap-2"
                >
                  <span>Discover Our Story</span>
                  <ArrowRight className="w-4 h-4 text-luxury-gold group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href={COMPANY_INFO.contact.phoneTel}
                  className="text-xs font-semibold text-luxury-charcoal hover:text-luxury-gold inline-flex items-center gap-1.5 uppercase tracking-wider"
                >
                  <Phone className="w-3.5 h-3.5 text-luxury-gold" /> Call Founder
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          OUR 9 SERVICES SECTION
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-y border-luxury-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-luxury-gold block mb-2">
              Comprehensive Capabilities
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-luxury-charcoal">
              Complete Construction & Engineering Solutions.
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-luxury-gold to-luxury-gold-light mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-luxury-body text-sm sm:text-base leading-relaxed">
              Everything you need to plan, design, build and develop your property under one roof.
            </p>
          </div>

          {/* 9 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((srv) => {
              const IconComp = serviceIcons[srv.slug] || Building2;

              return (
                <div
                  key={srv.slug}
                  className="group bg-luxury-bg rounded-3xl border border-luxury-border shadow-luxury hover:shadow-luxury-hover transition-all duration-500 overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    {/* Image with subtle zoom */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-luxury-beige">
                      <Image
                        src={srv.heroImage}
                        alt={srv.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Icon Badge */}
                      <div className="absolute top-4 right-4 w-12 h-12 rounded-2xl bg-white/95 text-luxury-gold shadow-md flex items-center justify-center border border-luxury-gold/30 backdrop-blur-sm group-hover:bg-luxury-gold group-hover:text-white transition-colors duration-300">
                        <IconComp className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-7 space-y-3">
                      <h3 className="font-serif text-xl font-bold text-luxury-charcoal group-hover:text-luxury-gold transition-colors">
                        {srv.title}
                      </h3>
                      <p className="text-xs text-luxury-body leading-relaxed line-clamp-3">
                        {srv.shortDesc}
                      </p>

                      {/* Mini features preview */}
                      <div className="pt-2 space-y-1">
                        {srv.offerings.slice(0, 3).map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-[11px] text-luxury-charcoal font-medium"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                            <span className="line-clamp-1">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="p-6 pt-0">
                    <Link
                      href={`/services/${srv.slug}`}
                      className="w-full py-3 px-4 rounded-xl bg-white hover:bg-luxury-charcoal text-luxury-charcoal hover:text-white border border-luxury-border hover:border-luxury-charcoal text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-sm"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5 text-luxury-gold" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Master Services Page Link */}
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-luxury-gold text-luxury-charcoal font-bold text-xs uppercase tracking-wider hover:bg-luxury-gold-light transition-all shadow-luxury"
            >
              <span>View All 9 Specialized Engineering Categories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHY CHOOSE US / TRUST SECTION
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-luxury-bg relative overflow-hidden">
        {/* Subtle architectural background texture */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-luxury-gold block mb-2">
              Uncompromising Standards
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-luxury-charcoal">
              Your Trusted Construction Partner.
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-luxury-gold to-luxury-gold-light mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-luxury-body text-sm sm:text-base leading-relaxed">
              Why discerning homeowners and commercial developers in Ramanagara and Karnataka entrust
              their most prestigious projects to Nayab Construction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_US.map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-white border border-luxury-border shadow-luxury hover:border-luxury-gold transition-all duration-300 space-y-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-luxury-bg text-luxury-gold flex items-center justify-center font-serif text-xl font-bold border border-luxury-gold/30">
                  0{i + 1}
                </div>
                <h3 className="font-serif text-lg font-bold text-luxury-charcoal">
                  {item.title}
                </h3>
                <p className="text-xs text-luxury-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE COST ESTIMATOR / BUDGET CALCULATOR
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-y border-luxury-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CostEstimator />
        </div>
      </section>

      {/* =========================================================================
          PROCESS TIMELINE: FROM CONCEPT TO COMPLETION
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-luxury-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-luxury-gold block mb-2">
              Our Disciplined Methodology
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-luxury-charcoal">
              From Concept to Completion.
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-luxury-gold to-luxury-gold-light mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-luxury-body text-sm sm:text-base leading-relaxed">
              A transparent, 6-stage engineering journey ensuring precision, accountability, and on-time
              delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-3xl p-7 border border-luxury-border shadow-luxury space-y-3 relative overflow-hidden group hover:border-luxury-gold transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-extrabold text-luxury-gold">
                    {step.step}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-luxury-muted font-bold">
                    Stage {step.step}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-luxury-charcoal group-hover:text-luxury-gold transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-luxury-gold">{step.tagline}</p>
                <p className="text-xs text-luxury-body leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          ARCHITECTURAL PORTFOLIO SECTION
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-y border-luxury-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-luxury-gold block mb-2">
              Curated Architectural Works
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-luxury-charcoal">
              Crafting Spaces That Inspire.
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-luxury-gold to-luxury-gold-light mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-luxury-body text-sm sm:text-base leading-relaxed">
              Explore residential villas, commercial structures, and luxury interiors engineered for
              prestige and timeless beauty.
            </p>
          </div>

          {/* Interactive Client Portfolio with Category Filters and Lightbox */}
          <HomePortfolio />
        </div>
      </section>

      {/* =========================================================================
          FOUNDERS & LEADERSHIP SECTION (Uses real uploaded photos!)
          ========================================================================= */}
      <LeadershipSection />

      {/* =========================================================================
          TESTIMONIALS SECTION
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-white border-y border-luxury-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-luxury-gold block mb-2">
              Client Commendations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-luxury-charcoal">
              What Our Clients Say.
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-luxury-gold to-luxury-gold-light mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-luxury-body text-sm sm:text-base leading-relaxed">
              Reflecting our commitment to structural honesty, architectural elegance, and client
              satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-luxury-bg rounded-3xl p-8 border border-luxury-border shadow-luxury flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-luxury-body leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-luxury-border">
                  <h4 className="font-serif text-sm font-bold text-luxury-charcoal">
                    {t.clientName}
                  </h4>
                  <p className="text-[11px] text-luxury-muted">{t.project}</p>
                  <p className="text-[10px] text-luxury-gold font-medium mt-1">{t.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CONTACT & CONSULTATION SECTION
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-luxury-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-luxury-gold block mb-2">
              Start Your Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-luxury-charcoal">
              Let&apos;s Build Something Great Together.
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-luxury-gold to-luxury-gold-light mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-luxury-body text-sm sm:text-base leading-relaxed">
              Have a project in mind? Contact Nayab Construction for professional consultation and
              project assistance in Ramanagara, Bengaluru, and surrounding areas.
            </p>
          </div>

          {/* Contact Form & Office Card */}
          <ContactForm />

          {/* Google Maps Location */}
          <div className="mt-12">
            <GoogleMapEmbed />
          </div>
        </div>
      </section>
    </div>
  );
}
