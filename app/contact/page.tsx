import React from "react";
import { Metadata } from "next";
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  HelpCircle,
  ShieldCheck,
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";
import ContactForm from "@/components/ContactForm";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";

export const metadata: Metadata = {
  title: "Contact Us & Office Location | Nayab Construction Ramanagara",
  description:
    "Connect with Nayab Construction opposite Court Complex, Ramanagara. Call +91 99727 02276 or WhatsApp for turnkey building construction, architectural design, and municipal approvals.",
};

const FAQS = [
  {
    q: "How does Nayab Construction charge for residential house construction?",
    a: "We provide comprehensive itemized Bill of Quantities (BOQ) with transparent per-sq.ft and itemized rates. Our packages range from Classic Construction (approx. ₹1,850/sq.ft) to Ultra-Luxury Villas (approx. ₹3,100+/sq.ft) with zero hidden escalations.",
  },
  {
    q: "Do you handle building sanction plans and BESCOM approval drawings?",
    a: "Yes. Our team prepares all municipal sanction plans, BESCOM electrical diagrams, and facilitates E-Khata and municipal clearances directly in Ramanagara, CMC, BMRDA, and adjacent panchayats.",
  },
  {
    q: "Can you provide bank loan estimates for SBI, Canara Bank, or HDFC?",
    a: "Absolutely. We prepare bank-standard technical estimates, itemized cost sheets, and progress valuation certificates accepted by all major nationalized and private financial institutions.",
  },
  {
    q: "Can I hire Nayab Construction for only Architectural Planning or only Interiors?",
    a: "Yes. While we specialize in complete turnkey execution from blueprint to reality, clients frequently engage our standalone architectural design, structural engineering, or interior styling services.",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-luxury-bg">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-28 bg-luxury-charcoal text-white text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-luxury-gold/40 text-luxury-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Connect With Our Engineers
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Let&apos;s Build Something Great Together
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-luxury-gold to-luxury-gold-light mx-auto mt-4 rounded-full" />
          <p className="mt-5 text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Have a project in mind? Contact Nayab Construction for professional consultation, site visits,
            and project assistance in Ramanagara, Bengaluru, and surrounding areas.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16">
        {/* Contact Form and Office Card */}
        <ContactForm />

        {/* Google Maps Embed Section */}
        <div>
          <GoogleMapEmbed />
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-luxury-border shadow-luxury">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-luxury-gold text-xs font-bold uppercase tracking-widest mb-2">
              <HelpCircle className="w-4 h-4" /> Frequently Asked Questions
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-luxury-charcoal">
              Everything You Need to Know Before Starting
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-luxury-bg border border-luxury-border space-y-2"
              >
                <h4 className="font-serif text-base font-bold text-luxury-charcoal">
                  {faq.q}
                </h4>
                <p className="text-xs sm:text-sm text-luxury-body leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
