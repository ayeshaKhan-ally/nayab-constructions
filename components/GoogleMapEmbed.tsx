import React from "react";
import { MapPin, Navigation } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export default function GoogleMapEmbed() {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-luxury-border shadow-luxury">
      <div className="p-6 bg-luxury-bg border-b border-luxury-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-luxury-gold text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4" /> Strategic Location
          </div>
          <h4 className="font-serif text-xl font-bold text-luxury-charcoal mt-1">
            Opposite Court Complex, Ramanagara
          </h4>
          <p className="text-xs text-luxury-body mt-0.5">
            Near Gandhi Park, Ijoor, Ramanagara – 562159, Karnataka.
          </p>
        </div>
        <a
          href={COMPANY_INFO.location.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-luxury-charcoal text-white hover:bg-black text-xs font-semibold uppercase tracking-wider shrink-0 transition-all shadow-sm"
        >
          <Navigation className="w-3.5 h-3.5 text-luxury-gold" /> Navigate on Google Maps
        </a>
      </div>

      <div className="w-full h-80 sm:h-96 relative bg-gray-100">
        <iframe
          title="Nayab Construction Office Location - Ramanagara Court Complex"
          src={COMPANY_INFO.location.googleMapsEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full grayscale-[20%] contrast-[1.05]"
        />
      </div>
    </div>
  );
}
