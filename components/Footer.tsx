import React from "react";
import Link from "next/link";
import { Phone, MessageSquare, Mail, MapPin, ArrowRight, ShieldCheck, Compass } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { COMPANY_INFO, SERVICES } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-charcoal text-white border-t border-luxury-gold/30 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative Gold Glow in background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Brand Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo variant="footer" />
            <p className="text-sm text-gray-300 leading-relaxed max-w-md pt-2">
              Nayab Construction is Ramanagara&apos;s premier civil engineering, architectural design,
              luxury building construction, and property development consultancy. Providing end-to-end
              turnkey solutions under one accountable roof.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-luxury-gold/30 text-luxury-gold-light text-xs font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-luxury-gold" />
                25 Yrs Founder Experience
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-luxury-gold/30 text-luxury-gold-light text-xs font-medium">
                <Compass className="w-3.5 h-3.5 text-luxury-gold" />
                Full Turnkey Execution
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base font-bold text-luxury-gold tracking-wide uppercase">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-luxury-gold transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-luxury-gold/60" /> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-luxury-gold transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-luxury-gold/60" /> About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-luxury-gold transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-luxury-gold/60" /> Our Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-luxury-gold transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-luxury-gold/60" /> Projects Portfolio
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="hover:text-luxury-gold transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-luxury-gold/60" /> Founders & Leadership
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-luxury-gold transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-luxury-gold/60" /> Visual Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-luxury-gold transition-colors inline-flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-luxury-gold/60" /> Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* 9 Services Categories */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base font-bold text-luxury-gold tracking-wide uppercase">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              {SERVICES.slice(0, 7).map((srv) => (
                <li key={srv.slug}>
                  <Link
                    href={`/services/${srv.slug}`}
                    className="hover:text-luxury-gold transition-colors line-clamp-1"
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-luxury-gold font-semibold hover:underline inline-flex items-center gap-1 pt-1"
                >
                  View All 9 Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Location Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-luxury-gold tracking-wide uppercase">
              Corporate Office
            </h4>
            <div className="space-y-3 text-xs text-gray-300 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                <span>
                  Opposite Court Complex, Near Gandhi Park, Ijoor, Ramanagara – 562159, Karnataka, India.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-luxury-gold shrink-0" />
                <a href={COMPANY_INFO.contact.phoneTel} className="hover:text-luxury-gold transition-colors">
                  {COMPANY_INFO.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={COMPANY_INFO.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  WhatsApp: +91 99727 02276
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-luxury-gold shrink-0" />
                <a href={COMPANY_INFO.contact.emailMailto} className="hover:text-luxury-gold transition-colors">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={COMPANY_INFO.location.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-luxury-gold/15 border border-luxury-gold/40 text-luxury-gold-light hover:bg-luxury-gold hover:text-luxury-charcoal transition-all text-xs font-semibold"
              >
                <MapPin className="w-3.5 h-3.5" />
                Get Directions to Office
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>
            &copy; {currentYear} <span className="text-white font-medium">NAYAB CONSTRUCTION</span>. All Rights
            Reserved. Ramanagara, Karnataka.
          </p>
          <p className="text-[11px] text-gray-400">
            One Company. Every Building Solution. • From Blueprint to Reality.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <Link href="/about" className="hover:text-white transition-colors">
              Leadership
            </Link>
            <span>•</span>
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Consultation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
