"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, MessageSquare, CheckCircle2, RefreshCw } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

interface PackageRate {
  name: string;
  ratePerSqFt: number;
  description: string;
  includes: string[];
}

const PACKAGES: Record<string, PackageRate> = {
  standard: {
    name: "Classic Construction",
    ratePerSqFt: 1850,
    description: "Solid civil engineering foundation with branded standard fixtures and fittings.",
    includes: [
      "FE 550D TMT Steel & 53 Grade Cement",
      "Solid Concrete Blocks / Red Bricks",
      "Vitrified Tile Flooring (up to ₹65/sqft)",
      "Standard Branded CPVC/PVC Plumbing (Ashirvad/Astral)",
      "Concealed Copper Wiring (Anchor/Polycab)",
      "Asian Paints Tractor Emulsion",
    ],
  },
  premium: {
    name: "Premium Luxury",
    ratePerSqFt: 2350,
    description: "Elevated luxury specifications with designer elevation, premium granite & modular provisions.",
    includes: [
      "Engineered Structural Design with BBS",
      "Contemporary 3D Elevation with Stone/Tile Cladding",
      "Vitrified Tiles / Granite Slabs (up to ₹120/sqft)",
      "Jaquar / Kohler CP & Sanitary Ware",
      "Teakwood Main Door & Flush Internal Doors",
      "Asian Paints Royale Luxury Emulsion",
      "False Ceiling in Living & Dining",
    ],
  },
  ultra: {
    name: "Royal Architectural Villa",
    ratePerSqFt: 3100,
    description: "Ultra-luxury turnkey specification with Italian marble, smart automation & bespoke joinery.",
    includes: [
      "Full Custom Architectural & Structural Blueprints",
      "Double Height Living & Fluted Facade Styling",
      "Italian Marble Flooring & High-End Quartz",
      "Grohe / Kohler Artifacts & Wall-Hung Commodes",
      "Complete Teakwood Frames & Designer Doors",
      "Full Home Designer False Ceiling & Mood Lighting",
      "Turnkey Landscape & Entrance Water Feature",
    ],
  },
};

export default function CostEstimator() {
  const [area, setArea] = useState<number>(2000);
  const [selectedPackage, setSelectedPackage] = useState<string>("premium");
  const [floors, setFloors] = useState<number>(2);

  const currentPkg = PACKAGES[selectedPackage];
  const totalCost = area * currentPkg.ratePerSqFt;

  // Breakdown approximation: Civil 55%, Finishing & Joinery 25%, MEP 15%, Approvals & Design 5%
  const civilCost = Math.round(totalCost * 0.55);
  const finishingCost = Math.round(totalCost * 0.25);
  const mepCost = Math.round(totalCost * 0.15);
  const designCost = Math.round(totalCost * 0.05);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Nayab Construction, I used your Cost Estimator for my project:\n- Built-up Area: ${area} Sq. Ft.\n- Floors: G+${floors - 1}\n- Specification: ${currentPkg.name}\n- Estimated Budget: ${formatCurrency(totalCost)}\n\nI would like to schedule a formal consultation.`
  );

  return (
    <div className="bg-white rounded-3xl border border-luxury-border shadow-luxury-lg overflow-hidden">
      <div className="bg-gradient-to-r from-luxury-charcoal to-[#1A1A1A] p-6 sm:p-8 text-white relative">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-luxury-gold/20 border border-luxury-gold/40 text-luxury-gold text-xs font-semibold uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5" /> Instant Project Estimation
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-2 text-white">
              Construction Cost Calculator
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm mt-1 max-w-xl">
              Get an instant indicative budget for residential and villa construction in Ramanagara and
              Bengaluru based on your plot and built-up area.
            </p>
          </div>
          <div className="shrink-0 text-right">
            <span className="text-[11px] uppercase tracking-wider text-luxury-gold font-semibold block">
              Indicative Total Estimate
            </span>
            <span className="font-serif text-3xl sm:text-4xl font-bold text-luxury-gold">
              {formatCurrency(totalCost)}
            </span>
            <span className="text-[11px] text-gray-400 block mt-0.5">
              @ {formatCurrency(currentPkg.ratePerSqFt)} / Sq. Ft.
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls */}
        <div className="lg:col-span-7 space-y-6">
          {/* Package Selection */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-luxury-charcoal mb-3">
              Select Specification Tier
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {Object.entries(PACKAGES).map(([key, pkg]) => {
                const isSelected = selectedPackage === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedPackage(key)}
                    className={`text-left p-4 rounded-xl border transition-all text-xs ${
                      isSelected
                        ? "border-luxury-gold bg-luxury-bg shadow-sm ring-2 ring-luxury-gold/30"
                        : "border-luxury-border bg-white hover:border-gray-400"
                    }`}
                  >
                    <div className="font-bold text-luxury-charcoal text-sm">{pkg.name}</div>
                    <div className="text-luxury-gold font-semibold text-xs mt-1">
                      {formatCurrency(pkg.ratePerSqFt)} / sq.ft
                    </div>
                    <p className="text-[11px] text-luxury-body mt-1 line-clamp-2">{pkg.description}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Built-up Area Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold uppercase tracking-wider text-luxury-charcoal">
                Built-Up Area (Square Feet)
              </span>
              <span className="font-serif font-bold text-luxury-gold text-lg">{area} Sq. Ft.</span>
            </div>
            <input
              type="range"
              min="800"
              max="10000"
              step="100"
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full h-2 bg-luxury-beige rounded-lg appearance-none cursor-pointer accent-luxury-gold"
            />
            <div className="flex justify-between text-[11px] text-luxury-muted">
              <span>800 sq.ft (Compact G Floor)</span>
              <span>2,500 sq.ft (Standard Villa)</span>
              <span>10,000 sq.ft (Luxury Estate)</span>
            </div>
          </div>

          {/* Number of Floors */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-luxury-charcoal mb-2">
              Building Levels / Floors
            </label>
            <div className="grid grid-cols-4 gap-2 text-xs font-medium">
              {[
                { count: 1, label: "Ground (G)" },
                { count: 2, label: "G + 1 Floor" },
                { count: 3, label: "G + 2 Floors" },
                { count: 4, label: "G + 3 Floors" },
              ].map((fl) => (
                <button
                  key={fl.count}
                  type="button"
                  onClick={() => setFloors(fl.count)}
                  className={`py-2 px-3 rounded-lg border text-center transition-all ${
                    floors === fl.count
                      ? "bg-luxury-charcoal text-white border-luxury-charcoal"
                      : "bg-white text-luxury-body border-luxury-border hover:border-luxury-gold"
                  }`}
                >
                  {fl.label}
                </button>
              ))}
            </div>
          </div>

          {/* Included Features */}
          <div className="bg-luxury-bg/70 p-4 rounded-2xl border border-luxury-border">
            <h4 className="text-xs font-bold uppercase tracking-wider text-luxury-charcoal mb-2">
              Key Inclusions Under {currentPkg.name}:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-luxury-body">
              {currentPkg.includes.map((inc, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-luxury-gold shrink-0" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Breakdown Card */}
        <div className="lg:col-span-5 bg-luxury-bg rounded-2xl p-6 border border-luxury-border flex flex-col justify-between space-y-6">
          <div>
            <h4 className="font-serif text-lg font-bold text-luxury-charcoal mb-4">
              Estimated Cost Breakdown
            </h4>

            <div className="space-y-3.5 text-xs">
              <div>
                <div className="flex justify-between text-luxury-charcoal font-medium mb-1">
                  <span>Civil Core Structure (55%)</span>
                  <span className="font-semibold">{formatCurrency(civilCost)}</span>
                </div>
                <div className="w-full bg-luxury-border rounded-full h-1.5">
                  <div className="bg-luxury-gold h-1.5 rounded-full" style={{ width: "55%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-luxury-charcoal font-medium mb-1">
                  <span>Finishes, Flooring & Joinery (25%)</span>
                  <span className="font-semibold">{formatCurrency(finishingCost)}</span>
                </div>
                <div className="w-full bg-luxury-border rounded-full h-1.5">
                  <div className="bg-luxury-gold-dark h-1.5 rounded-full" style={{ width: "25%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-luxury-charcoal font-medium mb-1">
                  <span>Plumbing & Electrical MEP (15%)</span>
                  <span className="font-semibold">{formatCurrency(mepCost)}</span>
                </div>
                <div className="w-full bg-luxury-border rounded-full h-1.5">
                  <div className="bg-luxury-charcoal h-1.5 rounded-full" style={{ width: "15%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-luxury-charcoal font-medium mb-1">
                  <span>Architectural & Approvals (5%)</span>
                  <span className="font-semibold">{formatCurrency(designCost)}</span>
                </div>
                <div className="w-full bg-luxury-border rounded-full h-1.5">
                  <div className="bg-luxury-muted h-1.5 rounded-full" style={{ width: "5%" }} />
                </div>
              </div>
            </div>

            <p className="text-[11px] text-luxury-body mt-4 italic">
              * Note: Estimates are indicative based on standard site conditions in Ramanagara/Bengaluru.
              Soil conditions, bespoke luxury materials, and compound walls are customized in our formal BOQ.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-luxury-border">
            <a
              href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              Discuss This Estimate on WhatsApp
            </a>

            <a
              href="/contact"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-luxury-charcoal hover:bg-black text-white font-semibold text-xs uppercase tracking-wider transition-all"
            >
              Book Detailed Site BOQ Consultation <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
