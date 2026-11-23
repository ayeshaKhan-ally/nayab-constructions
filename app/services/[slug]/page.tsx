import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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
  MessageSquare,
  Phone,
  ShieldCheck,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { SERVICES, COMPANY_INFO, ServiceDetail } from "@/lib/data";
import ContactForm from "@/components/ContactForm";

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

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} in Ramanagara | Nayab Construction`,
    description: `${service.shortDesc} Expert engineering and construction services by Nayab Construction in Ramanagara & Karnataka.`,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const IconComp = serviceIcons[service.slug] || Building2;
  const whatsappInquiry = encodeURIComponent(
    `Hello Nayab Construction, I would like to consult regarding your service: '${service.title}'. Please provide details.`
  );

  return (
    <div className="bg-luxury-bg">
      {/* Hero Header with Background Image & Glass Overlay */}
      <section className="relative min-h-[50vh] flex items-center justify-center py-20 bg-luxury-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal via-luxury-charcoal/70 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-xs text-gray-400 font-medium mb-3">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-luxury-gold" />
            <Link href="/services" className="hover:text-white transition-colors">
              Our Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-luxury-gold" />
            <span className="text-luxury-gold">{service.title}</span>
          </div>

          <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md text-luxury-gold flex items-center justify-center mx-auto border border-luxury-gold/50 shadow-md">
            <IconComp className="w-7 h-7" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto">
            {service.title}
          </h1>

          <p className="text-luxury-gold-light text-sm sm:text-base font-medium italic max-w-2xl mx-auto">
            {service.subtitle}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${whatsappInquiry}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-sm"
            >
              <MessageSquare className="w-4 h-4" /> Enquire on WhatsApp
            </a>
            <a
              href={COMPANY_INFO.contact.phoneTel}
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-luxury-gold" /> Call: {COMPANY_INFO.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16">
        {/* Section 1: Overview & High-Res Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold">
              Service Deep-Dive
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-luxury-charcoal">
              Comprehensive Scope & Technical Mastery
            </h2>
            <p className="text-sm sm:text-base text-luxury-body leading-relaxed">
              {service.fullDesc}
            </p>
            <p className="text-sm text-luxury-body leading-relaxed">
              At Nayab Construction, our Ramanagara engineering office coordinates all drawings,
              calculations, municipal liaison, and site supervision in strict alignment with
              National Building Code (NBC) standards and local authority bylaws.
            </p>

            <div className="pt-2">
              <div className="p-5 rounded-2xl bg-white border border-luxury-border shadow-sm flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-luxury-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-bold text-luxury-charcoal">
                    Founder-Supervised Execution
                  </h4>
                  <p className="text-xs text-luxury-body mt-0.5">
                    Backed by Founder Mr. Sadat Ulla Khan&apos;s 25 years of civil engineering rigor and
                    Co-Founder Mr. Nayab Noor Mohammad Khan&apos;s modern project coordination.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-luxury-border shadow-luxury-lg">
              <Image
                src={service.heroImage}
                alt={service.title}
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Complete Offerings & Deliverables */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-luxury-border shadow-luxury">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold">
              Full Scope
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-luxury-charcoal mt-1">
              Included Offerings & Specialized Deliverables
            </h3>
            <p className="text-xs sm:text-sm text-luxury-body mt-1">
              Every detail is meticulously planned and executed under this discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.offerings.map((offering, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-luxury-bg border border-luxury-border flex items-start gap-3 hover:border-luxury-gold transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-luxury-charcoal leading-snug">
                  {offering}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Strategic Advantages & Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-luxury-border shadow-luxury space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold">
                Client Value
              </span>
              <h3 className="font-serif text-2xl font-bold text-luxury-charcoal mt-1">
                Why Clients Prefer Nayab Construction
              </h3>
            </div>

            <div className="space-y-3.5">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-luxury-beige text-luxury-gold flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    ✓
                  </div>
                  <p className="text-xs sm:text-sm text-luxury-body leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: 4-Step Process Timeline */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-luxury-border shadow-luxury space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold">
                Our Methodology
              </span>
              <h3 className="font-serif text-2xl font-bold text-luxury-charcoal mt-1">
                Execution Workflow
              </h3>
            </div>

            <div className="space-y-4">
              {service.processSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-4 p-3.5 rounded-2xl bg-luxury-bg border border-luxury-border">
                  <div className="w-8 h-8 rounded-xl bg-luxury-charcoal text-luxury-gold flex items-center justify-center font-bold text-xs shrink-0">
                    0{i + 1}
                  </div>
                  <div>
                    <h5 className="font-serif text-sm font-bold text-luxury-charcoal">
                      {step.title}
                    </h5>
                    <p className="text-xs text-luxury-body mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 5: Other Services Quick Switcher */}
        <div className="bg-white rounded-3xl p-8 border border-luxury-border shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h4 className="font-serif text-xl font-bold text-luxury-charcoal">
                Explore Other Engineering Disciplines
              </h4>
              <p className="text-xs text-luxury-body">
                Interconnected solutions designed to deliver turnkey excellence.
              </p>
            </div>
            <Link
              href="/services"
              className="text-xs font-bold text-luxury-gold hover:underline inline-flex items-center gap-1"
            >
              View All 9 Services &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {SERVICES.filter((s) => s.slug !== service.slug)
              .slice(0, 4)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="p-3.5 rounded-2xl bg-luxury-bg border border-luxury-border hover:border-luxury-gold transition-all text-xs font-semibold text-luxury-charcoal block line-clamp-1 hover:text-luxury-gold"
                >
                  {s.title}
                </Link>
              ))}
          </div>
        </div>

        {/* Section 6: Direct Enquiry Form for This Service */}
        <div className="pt-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold">
              Get Started
            </span>
            <h3 className="font-serif text-3xl font-bold text-luxury-charcoal mt-1">
              Book Consultation for {service.title}
            </h3>
            <p className="text-xs sm:text-sm text-luxury-body mt-2">
              Our civil engineers will analyze your specifications and provide a free quotation.
            </p>
          </div>

          <ContactForm defaultService={service.title} />
        </div>
      </div>
    </div>
  );
}
