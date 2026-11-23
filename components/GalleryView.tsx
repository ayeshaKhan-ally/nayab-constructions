"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ZoomIn, MessageSquare, Phone } from "lucide-react";
import { GALLERY_ITEMS, COMPANY_INFO } from "@/lib/data";

const CATEGORIES = [
  "All",
  "Architecture & Elevation",
  "Interiors",
  "Construction Progress",
  "Commercial",
  "3D Visualization",
  "Industrial",
];

export default function GalleryView() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [zoomItem, setZoomItem] = useState<(typeof GALLERY_ITEMS)[0] | null>(null);

  const filtered =
    selectedCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div>
      {/* Category Pills */}
      <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
              selectedCategory === cat
                ? "bg-luxury-charcoal text-white shadow-md scale-105"
                : "bg-white text-luxury-body border border-luxury-border hover:border-luxury-gold"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry / Grid Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            onClick={() => setZoomItem(item)}
            className="group relative aspect-[4/3] rounded-3xl overflow-hidden border border-luxury-border bg-luxury-beige shadow-sm hover:shadow-luxury-hover cursor-pointer transition-all duration-500"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Hover Overlay with details */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="px-3 py-1 rounded-full bg-white/90 text-luxury-charcoal text-[11px] font-semibold">
                  {item.category}
                </span>
                <span className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center backdrop-blur-sm">
                  <ZoomIn className="w-4 h-4" />
                </span>
              </div>

              <div>
                <h4 className="font-serif text-lg font-bold text-white">{item.title}</h4>
                <p className="text-xs text-gray-300 mt-1 line-clamp-2">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full Screen Lightbox Modal */}
      {zoomItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setZoomItem(null)}
        >
          <div
            className="relative bg-luxury-charcoal text-white max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl border border-luxury-gold/40"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setZoomItem(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 text-white hover:bg-luxury-gold flex items-center justify-center transition-all"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] w-full bg-black">
              <Image
                src={zoomItem.image}
                alt={zoomItem.title}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover"
              />
            </div>

            <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-luxury-charcoal">
              <div>
                <span className="text-xs uppercase tracking-wider text-luxury-gold font-semibold">
                  {zoomItem.category}
                </span>
                <h3 className="font-serif text-2xl font-bold mt-1 text-white">{zoomItem.title}</h3>
                <p className="text-xs text-gray-300 mt-1 max-w-xl">{zoomItem.description}</p>
              </div>

              <a
                href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${encodeURIComponent(
                  `Hello Nayab Construction, I saw this visual '${zoomItem.title}' in your gallery. I would like more information.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" /> Enquire Now
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
