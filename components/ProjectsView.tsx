"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Eye, MapPin, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { PROJECTS, ProjectItem } from "@/lib/data";
import ProjectLightbox from "./ProjectLightbox";

const CATEGORIES = ["All", "Residential", "Commercial", "Industrial", "Interiors", "3D Elevation"];
const STATUSES = ["All Status", "Completed", "Ongoing"];

export default function ProjectsView() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filtered = PROJECTS.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesStatus = selectedStatus === "All Status" || p.status === selectedStatus;
    return matchesCategory && matchesStatus;
  });

  return (
    <div>
      {/* Category and Status Filter Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
        {/* Categories */}
        <div className="flex items-center flex-wrap gap-2">
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

        {/* Status Filter */}
        <div className="flex items-center gap-2">
          {STATUSES.map((st) => (
            <button
              key={st}
              onClick={() => setSelectedStatus(st)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedStatus === st
                  ? "bg-luxury-gold text-luxury-charcoal font-bold shadow-sm"
                  : "bg-white text-luxury-body border border-luxury-border hover:border-luxury-gold"
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((proj) => (
          <div
            key={proj.id}
            className="group bg-white rounded-3xl overflow-hidden border border-luxury-border shadow-luxury hover:shadow-luxury-hover transition-all duration-500 flex flex-col justify-between"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-luxury-beige">
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/95 text-luxury-charcoal font-semibold text-xs uppercase tracking-wider hover:bg-luxury-gold hover:text-white transition-all flex items-center justify-center gap-2 shadow-lg backdrop-blur-sm"
                >
                  <Eye className="w-4 h-4" /> View Blueprint & Specs
                </button>
              </div>

              <div className="absolute top-4 left-4 z-10 flex gap-2">
                <span className="px-3 py-1 rounded-full bg-white/95 text-luxury-charcoal text-[11px] font-semibold backdrop-blur-sm shadow-sm">
                  {proj.category}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-luxury-charcoal/80 text-luxury-gold text-[10px] font-medium backdrop-blur-sm">
                  {proj.status}
                </span>
              </div>
            </div>

            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <div className="flex items-center gap-1.5 text-[11px] text-luxury-muted font-medium mb-1.5">
                  <MapPin className="w-3.5 h-3.5 text-luxury-gold" />
                  <span>{proj.location}</span>
                  <span>•</span>
                  <span>{proj.area}</span>
                </div>

                <h3 className="font-serif text-xl font-bold text-luxury-charcoal group-hover:text-luxury-gold transition-colors">
                  {proj.title}
                </h3>

                <p className="text-xs text-luxury-body mt-2 line-clamp-2 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-luxury-border flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="text-xs font-semibold text-luxury-charcoal hover:text-luxury-gold inline-flex items-center gap-1 transition-colors"
                >
                  View Details &rarr;
                </button>

                {proj.isSampleVisual && (
                  <span className="text-[10px] text-luxury-muted italic">
                    Architectural Concept Visual
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-luxury-border p-8">
          <p className="text-luxury-body text-sm">
            No projects found matching the selected filter criteria.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSelectedStatus("All Status");
            }}
            className="mt-4 px-6 py-2 rounded-full bg-luxury-charcoal text-white text-xs font-semibold uppercase tracking-wider"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      <ProjectLightbox project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
