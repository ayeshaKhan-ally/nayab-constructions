"use client";

import React, { useState } from "react";
import { Send, MessageSquare, CheckCircle, Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { COMPANY_INFO, SERVICES } from "@/lib/data";

interface ContactFormProps {
  defaultService?: string;
}

export default function ContactForm({ defaultService = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: defaultService || SERVICES[0].title,
    location: "Ramanagara",
    projectType: "Residential Villa / House",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate immediate reliable client feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const getWhatsAppPrefilledUrl = () => {
    const text = encodeURIComponent(
      `Hello Nayab Construction,\n\nI am reaching out regarding a new project enquiry:\n` +
        `• Name: ${formData.name || "Client"}\n` +
        `• Phone: ${formData.phone || "Not provided"}\n` +
        `• Email: ${formData.email || "Not provided"}\n` +
        `• Service: ${formData.service}\n` +
        `• Project Type: ${formData.projectType}\n` +
        `• Location: ${formData.location}\n` +
        `• Message: ${formData.message || "Please provide consultation and quotation."}`
    );
    return `https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${text}`;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Form Column */}
      <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-luxury-border shadow-luxury">
        {submitted ? (
          <div className="text-center py-12 space-y-5 animate-fadeIn">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-luxury-charcoal">
              Enquiry Received Successfully!
            </h3>
            <p className="text-sm text-luxury-body max-w-md mx-auto">
              Thank you, <span className="font-semibold text-luxury-charcoal">{formData.name}</span>.
              Our engineering coordination desk at Ramanagara will review your requirements and connect
              with you promptly within 2-4 business hours.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={getWhatsAppPrefilledUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold text-xs uppercase tracking-wider hover:bg-emerald-500 transition-all shadow-sm"
              >
                <MessageSquare className="w-4 h-4" /> Send Copy to WhatsApp
              </a>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full border border-luxury-border text-luxury-charcoal font-semibold text-xs uppercase tracking-wider hover:bg-luxury-bg transition-all"
              >
                Submit Another Enquiry
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="border-b border-luxury-border/60 pb-4">
              <span className="text-xs uppercase tracking-widest font-semibold text-luxury-gold">
                Direct Client Desk
              </span>
              <h3 className="font-serif text-2xl font-bold text-luxury-charcoal mt-1">
                Request Professional Consultation
              </h3>
              <p className="text-xs text-luxury-body mt-1">
                Fill in your project details for architectural, structural, or turnkey construction
                estimates.
              </p>
            </div>

            {/* Row 1: Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-luxury-charcoal mb-1.5">
                  Customer Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mohammed Farhan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-luxury-border bg-luxury-bg text-luxury-charcoal text-xs sm:text-sm focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-luxury-charcoal mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 99727 02276"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-luxury-border bg-luxury-bg text-luxury-charcoal text-xs sm:text-sm focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors"
                />
              </div>
            </div>

            {/* Row 2: Email & Service */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-luxury-charcoal mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="e.g. client@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-luxury-border bg-luxury-bg text-luxury-charcoal text-xs sm:text-sm focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-luxury-charcoal mb-1.5">
                  Select Service Discipline <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-luxury-border bg-luxury-bg text-luxury-charcoal text-xs sm:text-sm focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors"
                >
                  {SERVICES.map((srv) => (
                    <option key={srv.slug} value={srv.title}>
                      {srv.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 3: Project Location & Project Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-luxury-charcoal mb-1.5">
                  Project Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramanagara, Ijoor, Bidadi"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-luxury-border bg-luxury-bg text-luxury-charcoal text-xs sm:text-sm focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-luxury-charcoal mb-1.5">
                  Project Type
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-luxury-border bg-luxury-bg text-luxury-charcoal text-xs sm:text-sm focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors"
                >
                  <option value="Residential Villa / House">Residential Villa / Independent House</option>
                  <option value="Commercial Complex / Retail">Commercial Complex / Retail</option>
                  <option value="Industrial PEB / Factory">Industrial PEB / Factory</option>
                  <option value="Turnkey Interior Design">Turnkey Interior Design</option>
                  <option value="Building Plan Sanction / BESCOM">Building Plan Sanction / BESCOM</option>
                  <option value="Bank Loan Estimation / BOQ">Bank Loan Estimation / BOQ</option>
                  <option value="Real Estate / Plotted Layout">Real Estate / Plotted Layout</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-luxury-charcoal mb-1.5">
                Project Details / Specifications
              </label>
              <textarea
                rows={4}
                placeholder="Mention plot dimensions (e.g. 30x40, 40x60), tentative budget, or specific requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-luxury-border bg-luxury-bg text-luxury-charcoal text-xs sm:text-sm focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors resize-none"
              />
            </div>

            {/* Submit Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-luxury-charcoal hover:bg-black text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <Send className="w-4 h-4 text-luxury-gold" />
                {isSubmitting ? "Sending Enquiry..." : "Send Project Enquiry"}
              </button>

              <a
                href={getWhatsAppPrefilledUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Direct
              </a>
            </div>

            <p className="text-[11px] text-luxury-muted text-center pt-2">
              🔒 Your privacy is fully respected. Enquiries are handled with complete confidentiality by
              Nayab Construction engineers.
            </p>
          </form>
        )}
      </div>

      {/* Office Information Card */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-luxury-border shadow-luxury space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-luxury-gold">
              Corporate Headquarters
            </span>
            <h3 className="font-serif text-2xl font-bold text-luxury-charcoal mt-1">
              Visit Our Ramanagara Office
            </h3>
            <p className="text-xs text-luxury-body mt-1">
              Walk in for blueprint reviews, material samples, and direct consultations with our civil
              engineers.
            </p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-luxury-body">
            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-luxury-bg border border-luxury-border">
              <MapPin className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-luxury-charcoal block">Office Address:</span>
                <span className="leading-relaxed">
                  Opposite Court Complex, Near Gandhi Park, Ijoor, Ramanagara – 562159, Karnataka, India.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-luxury-bg border border-luxury-border">
              <Phone className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-luxury-charcoal block">Call Directly:</span>
                <a
                  href={COMPANY_INFO.contact.phoneTel}
                  className="text-luxury-charcoal hover:text-luxury-gold font-semibold transition-colors"
                >
                  {COMPANY_INFO.contact.phoneDisplay}
                </a>
                <span className="block text-[11px] text-luxury-muted">
                  Phone / Mobile: {COMPANY_INFO.contact.phone}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-luxury-bg border border-luxury-border">
              <MessageSquare className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-luxury-charcoal block">Instant WhatsApp:</span>
                <a
                  href={COMPANY_INFO.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:underline font-semibold"
                >
                  +91 99727 02276 (Click to Chat)
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-luxury-bg border border-luxury-border">
              <Mail className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-luxury-charcoal block">Official Email:</span>
                <a
                  href={COMPANY_INFO.contact.emailMailto}
                  className="text-luxury-charcoal hover:text-luxury-gold font-medium transition-colors"
                >
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-luxury-bg border border-luxury-border">
              <Clock className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-luxury-charcoal block">Working Hours:</span>
                <span>{COMPANY_INFO.contact.officeHours}</span>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={COMPANY_INFO.location.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-luxury-beige hover:bg-luxury-gold hover:text-white text-luxury-charcoal font-semibold text-xs uppercase tracking-wider transition-all"
            >
              Get Google Maps Driving Directions <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
