"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, MapPin, CheckCircle2, MessageSquare, Phone } from "lucide-react";
import { ProjectItem, COMPANY_INFO } from "@/lib/data";

interface ProjectLightboxProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectLightbox({ project, onClose }: ProjectLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const inquiryMsg = encodeURIComponent(
    `Hello Nayab Construction, I saw your project '${project.title}' (${project.category}) on your website. I am interested in a similar project.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-luxury-border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 text-luxury-charcoal hover:bg-luxury-gold hover:text-white flex items-center justify-center shadow-lg transition-all"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Project Image */}
        <div className="relative md:w-1/2 min-h-[300px] md:min-h-full bg-black">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-cover"
          />
          <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5">
            <span className="px-3 py-1 rounded-full bg-luxury-charcoal/90 text-luxury-gold text-xs font-semibold backdrop-blur-sm border border-luxury-gold/30">
              {project.category}
            </span>
            <span className="px-3 py-0.5 rounded-full bg-white/90 text-luxury-charcoal text-[11px] font-medium backdrop-blur-sm">
              Status: {project.status}
            </span>
          </div>

          {project.isSampleVisual && (
            <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm text-gray-300 text-[10px] px-3 py-1.5 rounded-lg border border-white/10">
              * Representative architectural concept model for visualization.
            </div>
          )}
        </div>

        {/* Project Details */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-full bg-luxury-bg">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-luxury-muted font-medium mb-1">
                <MapPin className="w-3.5 h-3.5 text-luxury-gold" />
                <span>{project.location}</span>
                <span>•</span>
                <span>{project.area}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-luxury-charcoal">
                {project.title}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-luxury-body leading-relaxed">
              {project.description}
            </p>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-luxury-charcoal mb-2">
                Engineering & Design Features:
              </h4>
              <ul className="space-y-1.5 text-xs text-luxury-body">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-luxury-gold shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 border-t border-luxury-border/80 space-y-2 mt-6">
            <a
              href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${inquiryMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider transition-all"
            >
              <MessageSquare className="w-4 h-4" /> Enquire About Similar Project
            </a>
            <a
              href={COMPANY_INFO.contact.phoneTel}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-luxury-charcoal text-luxury-charcoal font-semibold text-xs uppercase tracking-wider hover:bg-luxury-charcoal hover:text-white transition-all"
            >
              <Phone className="w-3.5 h-3.5" /> Call: {COMPANY_INFO.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
