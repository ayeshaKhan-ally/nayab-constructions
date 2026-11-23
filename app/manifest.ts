import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nayab Construction - Civil Engineers & Architects",
    short_name: "Nayab Construction",
    description: "One Company. Every Building Solution. Premier civil engineering, architecture, and construction in Ramanagara, Karnataka.",
    start_url: "/",
    display: "standalone",
    background_color: "#F8F6F0",
    theme_color: "#C6A46A",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
