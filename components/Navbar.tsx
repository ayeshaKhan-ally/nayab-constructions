"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  MessageSquare,
  Menu,
  X,
  ChevronDown,
  MapPin,
  Clock,
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
} from "lucide-react";
import BrandLogo from "./BrandLogo";
import { COMPANY_INFO, SERVICES } from "@/lib/data";

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

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services", hasDropdown: true },
    { name: "Projects", href: "/projects" },
    { name: "Leadership", href: "/leadership" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Notification & Contact Bar */}
      <div className="bg-luxury-charcoal text-white text-xs border-b border-luxury-gold/20 py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-gray-300 flex-wrap justify-center md:justify-start">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-luxury-gold" />
              Opp. Court Complex, Ramanagara, Karnataka
            </span>
            <span className="hidden sm:inline text-luxury-gold/40">•</span>
            <span className="hidden sm:flex items-center gap-1.5 text-gray-300">
              <Clock className="w-3.5 h-3.5 text-luxury-gold" />
              Mon – Sat: 9:00 AM – 8:00 PM
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href={COMPANY_INFO.contact.phoneTel}
              className="flex items-center gap-1.5 text-gray-200 hover:text-luxury-gold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-luxury-gold" />
              <span>{COMPANY_INFO.contact.phoneDisplay}</span>
            </a>
            <span className="text-luxury-gold/40">|</span>
            <a
              href={COMPANY_INFO.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F8F6F0]/95 backdrop-blur-md shadow-luxury py-2.5 border-b border-luxury-border"
            : "bg-[#F8F6F0] py-4 border-b border-luxury-border/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <BrandLogo variant="header" />

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`px-3 py-2 text-sm font-medium rounded-md transition-colors inline-flex items-center gap-1 ${
                        isActive
                          ? "text-luxury-charcoal font-semibold"
                          : "text-luxury-body hover:text-luxury-charcoal hover:bg-luxury-beige/50"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesDropdownOpen ? "rotate-180 text-luxury-gold" : "text-luxury-muted"
                        }`}
                      />
                    </Link>

                    {/* Mega Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-white rounded-2xl shadow-luxury-hover border border-luxury-border p-6 grid grid-cols-3 gap-3 animate-fadeIn">
                        <div className="col-span-3 pb-3 mb-2 border-b border-luxury-border/60 flex items-center justify-between">
                          <span className="font-serif text-sm font-bold text-luxury-charcoal">
                            9 Complete Engineering & Construction Disciplines
                          </span>
                          <Link
                            href="/services"
                            className="text-xs text-luxury-gold font-medium hover:underline inline-flex items-center gap-1"
                          >
                            View All Services <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                        {SERVICES.map((srv) => {
                          const IconComp = serviceIcons[srv.slug] || Building2;
                          return (
                            <Link
                              key={srv.slug}
                              href={`/services/${srv.slug}`}
                              className="group/item flex items-start gap-2.5 p-2 rounded-xl hover:bg-luxury-bg transition-colors"
                            >
                              <div className="w-8 h-8 rounded-lg bg-luxury-beige/80 text-luxury-gold flex items-center justify-center shrink-0 group-hover/item:bg-luxury-gold group-hover/item:text-white transition-colors">
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div>
                                <h4 className="text-xs font-semibold text-luxury-charcoal group-hover/item:text-luxury-gold transition-colors line-clamp-1">
                                  {srv.title}
                                </h4>
                                <p className="text-[11px] text-luxury-body line-clamp-1 font-normal">
                                  {srv.subtitle}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors relative ${
                    isActive
                      ? "text-luxury-charcoal font-semibold"
                      : "text-luxury-body hover:text-luxury-charcoal hover:bg-luxury-beige/50"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-luxury-gold rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Call Now Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={COMPANY_INFO.contact.phoneTel}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-luxury-gold to-luxury-gold-light text-luxury-charcoal font-semibold text-xs uppercase tracking-wider shadow-sm hover:shadow-luxury-lg hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-3.5 h-3.5 text-luxury-charcoal group-hover:rotate-12 transition-transform" />
              <span>Call Now</span>
              <span className="hidden 2xl:inline text-[11px] font-normal opacity-80">
                ({COMPANY_INFO.contact.phone})
              </span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-full border border-luxury-charcoal/20 text-luxury-charcoal text-xs uppercase tracking-wider font-semibold hover:bg-luxury-charcoal hover:text-white transition-all duration-300"
            >
              Enquire
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href={COMPANY_INFO.contact.phoneTel}
              className="w-9 h-9 rounded-full bg-luxury-gold text-luxury-charcoal flex items-center justify-center shadow-sm"
              aria-label="Call"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-luxury-charcoal hover:bg-luxury-beige focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-luxury-bg border-t border-luxury-border px-4 pt-4 pb-6 space-y-2 animate-fadeIn max-h-[85vh] overflow-y-auto">
            <div className="pb-3 mb-2 border-b border-luxury-border/60">
              <BrandLogo variant="header" />
            </div>
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-luxury-beige text-luxury-charcoal font-bold"
                      : "text-luxury-body hover:bg-luxury-beige/60 hover:text-luxury-charcoal"
                  }`}
                >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                  <div className="pl-4 pr-2 py-1 space-y-1 bg-white/60 rounded-xl my-1 border border-luxury-border/50">
                    <p className="text-[11px] uppercase tracking-wider font-semibold text-luxury-gold px-2 pt-1">
                      All 9 Engineering Services
                    </p>
                    {SERVICES.map((srv) => (
                      <Link
                        key={srv.slug}
                        href={`/services/${srv.slug}`}
                        className="block px-2 py-1.5 text-xs text-luxury-body hover:text-luxury-gold hover:bg-white rounded transition-colors"
                      >
                        • {srv.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 border-t border-luxury-border space-y-3">
              <a
                href={COMPANY_INFO.contact.phoneTel}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-luxury-gold text-luxury-charcoal font-semibold text-sm shadow-sm"
              >
                <Phone className="w-4 h-4" />
                Call: {COMPANY_INFO.contact.phoneDisplay}
              </a>
              <a
                href={COMPANY_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
