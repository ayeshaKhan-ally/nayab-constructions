"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, MapPin } from "lucide-react";
import { PROJECTS, ProjectItem } from "@/lib/data";
import ProjectLightbox from "./ProjectLightbox";

const CATEGORIES = ["All", "Residential", "Commercial", "Industrial", "Interiors", "3D Elevation"];

export default function HomePortfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS.slice(0, 6)
      : PROJECTS.filter((p) => p.category === activeCategory).slice(0, 6);

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
              activeCategory === cat
                ? "bg-luxury-charcoal text-white shadow-md scale-105"
                : "bg-white text-luxury-body border border-luxury-border hover:border-luxury-gold hover:text-luxury-charcoal"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group bg-white rounded-3xl overflow-hidden border border-luxury-border shadow-luxury hover:shadow-luxury-hover transition-all duration-500 flex flex-col justify-between"
          >
            {/* Image Container with Hover zoom */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-luxury-beige">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/95 text-luxury-charcoal font-semibold text-xs uppercase tracking-wider hover:bg-luxury-gold hover:text-white transition-all flex items-center justify-center gap-2 shadow-lg backdrop-blur-sm"
                >
                  <Eye className="w-4 h-4" /> View Project Details
                </button>
              </div>

              {/* Category pill */}
              <div className="absolute top-4 left-4 z-10 flex gap-2">
                <span className="px-3 py-1 rounded-full bg-white/90 text-luxury-charcoal text-[11px] font-semibold backdrop-blur-sm shadow-sm">
                  {project.category}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-luxury-charcoal/80 text-luxury-gold text-[10px] font-medium backdrop-blur-sm">
                  {project.status}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <div className="flex items-center gap-1.5 text-[11px] text-luxury-muted font-medium mb-1.5">
                  <MapPin className="w-3.5 h-3.5 text-luxury-gold" />
                  <span>{project.location}</span>
                  <span>•</span>
                  <span>{project.area}</span>
                </div>

                <h3 className="font-serif text-xl font-bold text-luxury-charcoal group-hover:text-luxury-gold transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-luxury-body mt-2 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-luxury-border flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-luxury-charcoal hover:text-luxury-gold inline-flex items-center gap-1 transition-colors"
                >
                  Explore Specs &rarr;
                </button>

                {project.isSampleVisual && (
                  <span className="text-[10px] text-luxury-muted italic">
                    Architectural Visual
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View Full Portfolio Button */}
      <div className="text-center mt-12">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-luxury-charcoal text-white hover:bg-black font-semibold text-xs uppercase tracking-wider transition-all shadow-md group"
        >
          <span>Explore Complete Projects Portfolio</span>
          <ArrowRight className="w-4 h-4 text-luxury-gold group-hover:translate-x-1 transition-transform" />
        </Link>
        <p className="text-[11px] text-luxury-muted mt-3">
          * Architectural visuals and ongoing site photographs are curated to reflect engineering design standards.
        </p>
      </div>

      {/* Lightbox Modal */}
      <ProjectLightbox project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
