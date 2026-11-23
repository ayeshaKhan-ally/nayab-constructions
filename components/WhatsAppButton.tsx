"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, X } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show a polite nudge after 3 seconds
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="relative bg-white text-luxury-charcoal text-xs p-3 rounded-2xl shadow-luxury-hover border border-luxury-gold/40 max-w-[220px] animate-fadeIn">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-gray-400 hover:text-gray-600"
            aria-label="Close message"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="font-semibold text-luxury-charcoal pr-3">Have a project in mind?</p>
          <p className="text-luxury-body text-[11px] mt-0.5">
            Chat with our engineering team directly on WhatsApp.
          </p>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={COMPANY_INFO.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-luxury-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-white text-emerald-600" />
        <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider">
          Chat on WhatsApp
        </span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-luxury-gold rounded-full border-2 border-white animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-luxury-gold rounded-full border-2 border-white" />
      </a>
    </div>
  );
}
