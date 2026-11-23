import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { COMPANY_INFO } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL("https://nayabconstruction.com"),
  title: {
    default: "NAYAB CONSTRUCTION | Civil Engineers, Architects & Builders in Ramanagara",
    template: "%s | NAYAB CONSTRUCTION - Ramanagara, Karnataka",
  },
  description:
    "Nayab Construction is Ramanagara's premier civil engineering, architectural planning, turnkey luxury construction, interior design, and property development firm. 25 years of founder experience. Opposite Court Complex, Ramanagara.",
  keywords: [
    "Construction Company in Ramanagara",
    "Civil Engineers in Ramanagara",
    "Architects in Ramanagara",
    "House Construction in Ramanagara",
    "Building Plan Approval in Ramanagara",
    "Structural Design Services",
    "Interior Designers in Ramanagara",
    "Residential Construction Company",
    "Commercial Construction",
    "Construction Estimate and BOQ",
    "Home Loan Assistance",
    "Real Estate Developers in Ramanagara",
    "Villa Construction",
    "Turnkey Construction Services",
    "Nayab Construction",
    "Sadat Ulla Khan",
    "Nayab Noor Mohammad Khan",
  ],
  authors: [{ name: "Nayab Construction" }],
  creator: "Nayab Construction",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://nayabconstruction.com",
    siteName: "NAYAB CONSTRUCTION",
    title: "NAYAB CONSTRUCTION | Civil Engineers, Architects & Builders in Ramanagara",
    description:
      "One Company. Every Building Solution. Premier civil engineering, turnkey villa construction, interiors, and architectural design in Ramanagara, Karnataka.",
    images: [
      {
        url: "/images/branding/nayab-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Nayab Construction Logo and Luxury Architecture",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["GeneralContractor", "LocalBusiness", "ProfessionalService"],
    name: COMPANY_INFO.name,
    legalName: COMPANY_INFO.formalName,
    alternateName: "Nayab Constructions",
    description: COMPANY_INFO.identity,
    image: "https://nayabconstruction.com/images/branding/nayab-logo.jpg",
    logo: "https://nayabconstruction.com/images/branding/nayab-logo.jpg",
    telephone: `+91${COMPANY_INFO.contact.phone}`,
    email: COMPANY_INFO.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Opposite Court Complex, Near Gandhi Park, Ijoor",
      addressLocality: "Ramanagara",
      addressRegion: "Karnataka",
      postalCode: "562159",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "12.729188",
      longitude: "77.279624",
    },
    url: "https://nayabconstruction.com",
    priceRange: "₹₹₹",
    openingHours: "Mo-Sa 09:00-20:00",
    founders: [
      {
        "@type": "Person",
        name: "Mr. Sadat Ulla Khan",
        jobTitle: "Founder & Civil Engineer",
      },
      {
        "@type": "Person",
        name: "Mr. Nayab Noor Mohammad Khan",
        jobTitle: "Co-Founder",
      },
    ],
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Ramanagara",
      },
      {
        "@type": "AdministrativeArea",
        name: "Bengaluru",
      },
      {
        "@type": "AdministrativeArea",
        name: "Bidadi",
      },
      {
        "@type": "AdministrativeArea",
        name: "Channapatna",
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-luxury-bg text-luxury-body antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
