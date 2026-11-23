export interface Founder {
  name: string;
  designation: string;
  profession?: string;
  experience: string;
  experienceYears: number;
  image: string;
  description: string;
  highlights: string[];
}

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  heroImage: string;
  offerings: string[];
  benefits: string[];
  processSteps: { title: string; desc: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "Residential" | "Commercial" | "Industrial" | "Interiors" | "3D Elevation";
  status: "Completed" | "Ongoing";
  location: string;
  area: string;
  image: string;
  description: string;
  features: string[];
  isSampleVisual?: boolean;
}

export const COMPANY_INFO = {
  name: "NAYAB CONSTRUCTION",
  formalName: "NAYAB CONSTRUCTIONS",
  identity: "Civil Engineers | Architects | Builders | Interior Designers | Real Estate Developers",
  primaryTagline: "From Blueprint to Reality.",
  secondaryBrandMessage: "Building Spaces. Creating Possibilities.",
  brandPromise: "One Company. Every Building Solution.",
  logoTagline: "BUILDING DREAMS • CREATING VALUE",
  location: {
    city: "Ramanagara",
    state: "Karnataka",
    country: "India",
    pinCode: "562159",
    address: "Opposite Court Complex, Near Gandhi Park, Ijoor, Ramanagara – 562159, Karnataka, India.",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.6277717437145!2d77.279624!3d12.729188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae4d0e6aaab953%3A0x67946808722ff4b!2sRamanagara%20Court%20Complex!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
    googleMapsDirectionsUrl: "https://maps.google.com/?q=Court+Complex+Near+Gandhi+Park+Ijoor+Ramanagara+Karnataka+562159",
  },
  contact: {
    phone: "9972702276",
    phoneDisplay: "+91 99727 02276",
    phoneTel: "tel:+919972702276",
    whatsapp: "9972702276",
    whatsappUrl: "https://wa.me/919972702276?text=Hello%20Nayab%20Construction,%20I%20would%20like%20to%20inquire%20about%20your%20services.",
    email: "nayabconstructions@gmail.com",
    emailMailto: "mailto:nayabconstructions@gmail.com",
    officeHours: "Monday – Saturday: 9:00 AM – 8:00 PM | Sunday: By Appointment",
  },
  targetLocations: ["Ramanagara", "Channapatna", "Bidadi", "Kengeri", "Bengaluru", "Mandya", "Mysuru Road Corridor"],
  stats: [
    { label: "Founder Experience", value: "25+ Yrs" },
    { label: "Co-Founder Experience", value: "8+ Yrs" },
    { label: "End-to-End Solutions", value: "100%" },
    { label: "Engineering Disciplines", value: "9 Pillars" },
  ],
};

export const FOUNDERS: Founder[] = [
  {
    name: "Mr. Sadat Ulla Khan",
    designation: "Founder – NAYAB CONSTRUCTION",
    profession: "Civil Engineer",
    experience: "25 Years of Experience",
    experienceYears: 25,
    image: "/images/leadership/founder-sadat-ulla-khan.jpg",
    description:
      "With 25 years of professional experience, Mr. Sadat Ulla Khan brings extensive experience, technical leadership, and engineering integrity to the construction and civil engineering industry.",
    highlights: [
      "25 Years of Civil Engineering & Construction Mastery",
      "Specialist in Structural Integrity & Foundation Engineering",
      "Pioneer in Ramanagara & Karnataka Regional Developments",
      "End-to-End Project Supervision & Strategic Leadership",
    ],
  },
  {
    name: "Mr. Nayab Noor Mohammad Khan",
    designation: "Co-Founder – NAYAB CONSTRUCTION",
    profession: "Construction & Project Management",
    experience: "8 Years of Experience",
    experienceYears: 8,
    image: "/images/leadership/cofounder-nayab-noor-mohammad-khan.jpg",
    description:
      "With 8 years of professional experience, Mr. Nayab Noor Mohammad Khan contributes to the company's growth, modern project coordination, architectural aesthetics, and steadfast commitment to delivering quality solutions.",
    highlights: [
      "8 Years of Contemporary Construction & Project Coordination",
      "Modern Architectural Styling & 3D Visualization",
      "Client Relationship & Turnkey Execution Management",
      "Quality Assurance & Sustainable Building Practices",
    ],
  },
];

export const SERVICES: ServiceDetail[] = [
  {
    id: "cat-1",
    slug: "architectural-design",
    title: "Architectural Planning & Building Design",
    subtitle: "Precision Draftsmanship & Contemporary Spatial Architecture",
    shortDesc:
      "From bespoke 2D floor plans to statutory approval drawings and BESCOM plans, we craft thoughtful spaces tailored to your lifestyle.",
    fullDesc:
      "Nayab Construction provides comprehensive architectural design and spatial planning services for residential, commercial, and industrial properties. Our designs harmoniously blend aesthetic luxury, functional flow, climate orientation, and statutory compliance with local municipal norms.",
    iconName: "Compass",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    offerings: [
      "2D Floor Plans & Spatial Layouts",
      "Architectural Working Drawings",
      "Furniture Layouts & Interior Flow",
      "Electrical & Conduit Layouts",
      "Building Approval Plans & Municipal Sanction Drawings",
      "BESCOM Electrical Drawings",
      "Residential Layout Planning & Master Subdivision",
      "Plot Marking Plans & Boundary Pegging",
      "Building Elevations & Facade Detailing",
      "3D Architectural Visualization & Photorealistic Renders",
      "3D Isometric Cut-Section Views",
    ],
    benefits: [
      "Optimized natural lighting and cross ventilation",
      "100% compliance with local municipal building bylaws",
      "Customized to client budget, lifestyle, and site orientation",
      "Coordinated with structural and MEP services seamlessly",
    ],
    processSteps: [
      { title: "Site Assessment & Briefing", desc: "Topographical study, plot boundary inspection, and client spatial requirement capture." },
      { title: "Conceptual Layouts", desc: "Drafting 2D floor plans with multiple iterations until the ideal functional flow is achieved." },
      { title: "Statutory & Approval Drawings", desc: "Preparing sanction plans and BESCOM schematics adhering to local building codes." },
      { title: "Comprehensive Working Drawings", desc: "Issuing complete set of architectural, electrical, and furniture layout plans for construction." },
    ],
  },
  {
    id: "cat-2",
    slug: "structural-design",
    title: "Structural Design & Detailing",
    subtitle: "Engineering Excellence & Uncompromising Structural Stability",
    shortDesc:
      "Civil engineering structural calculations, foundation detailing, plinth/roof beam layouts, and reinforcement schedules engineered for generational durability.",
    fullDesc:
      "Headed by our founder Mr. Sadat Ulla Khan with 25 years of civil engineering expertise, our structural engineering wing guarantees unmatched safety, seismic resistance, and material efficiency for buildings of any magnitude.",
    iconName: "HardHat",
    heroImage: "https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1600&q=80",
    offerings: [
      "Centreline Marking & Grid Pegging",
      "Foundation Detailing (Isolated, Combined, Raft, Pile)",
      "Plinth Beam Layout & Reinforcement",
      "Roof Beam Layout & Framing Schematics",
      "Staircase Detailing & Structural Geometry",
      "Roof Slab Layout & One-way/Two-way Reinforcement",
      "Sunken Slab Layout for Bathrooms & Utilities",
      "Comprehensive Structural Drawings & Calculation Reports",
      "Reinforcement Schedules (Bar Bending Schedules - BBS)",
      "Joinery Schedules & Column Schedules",
      "Retaining Wall & Earth Retention Design",
    ],
    benefits: [
      "Safety assured by 25 years of verified civil engineering leadership",
      "Optimized steel and concrete usage preventing costly over-design",
      "Seismic zone resistance and soil-bearing capacity calibrated designs",
      "Clear bar-bending schedules for zero on-site ambiguity",
    ],
    processSteps: [
      { title: "Soil & Bearing Study", desc: "Analyzing soil test reports to determine optimal foundation strategy." },
      { title: "Structural Analysis & Framing", desc: "Modelling columns, beams, and slabs under dead, live, and seismic loads." },
      { title: "Detailed Reinforcement Detailing", desc: "Producing precise Bar Bending Schedules and section drawings." },
      { title: "Site Vetting & Concreting Inspection", desc: "Supervising reinforcement binding on-site before every concrete pour." },
    ],
  },
  {
    id: "cat-3",
    slug: "construction",
    title: "Construction Services",
    subtitle: "Turnkey Residential, Commercial & Industrial Building Execution",
    shortDesc:
      "End-to-end turnkey construction from foundation excavation to finishing touches, managed with rigorous quality checks and milestone transparency.",
    fullDesc:
      "Nayab Construction is Ramanagara's premier builder for luxury villas, modern residential homes, commercial complexes, and industrial premises. We handle every phase with disciplined site supervision, grade-A building materials, and transparent contractual terms.",
    iconName: "Building2",
    heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    offerings: [
      "Residential Building Construction",
      "Independent House Construction",
      "Luxury Villa Construction",
      "Commercial Building Construction",
      "Industrial Shed & Warehouse Construction",
      "Multi-Unit Apartment Construction",
      "Turnkey Construction Projects (With Material)",
      "Foundation to Finishing Works",
      "Rigorous Project Supervision & Site Management",
      "Skilled Labour and Material Procurement Management",
      "Renovation, Remodeling & Reconstruction",
      "Building Extension & Additional Floor Works",
    ],
    benefits: [
      "One single accountable company from earth-breaking to housewarming",
      "Tested Grade-A materials: TMT 550D steel, OPC/PPC 53 grade cement",
      "Milestone-based progress with regular photographic site reports",
      "Zero hidden escalations with clear transparent contracting",
    ],
    processSteps: [
      { title: "Ground Breaking & Substructure", desc: "Excavation, anti-termite treatment, foundation casting, and plinth beam erection." },
      { title: "Superstructure & Brick Masonry", desc: "RCC column casting, slab shuttering/pouring, solid block or red brick masonry." },
      { title: "Plumbing, Electrical & Plastering", desc: "Concealed electrical conduits, CPVC plumbing lines, internal & external plastering." },
      { title: "Finishing & Handover", desc: "Flooring, premium paint application, fixtures installation, and clean final handover." },
    ],
  },
  {
    id: "cat-4",
    slug: "interior-design",
    title: "Interior Design & Execution",
    subtitle: "Tailored Luxury Interiors, Bespoke Joinery & Turnkey Styling",
    shortDesc:
      "Sophisticated interior architecture including luxury modular kitchens, bedroom sanctuaries, designer ceilings, and bespoke furniture crafted to perfection.",
    fullDesc:
      "We believe interior spaces should evoke warmth, elegance, and effortless functionality. Our interior designers collaborate closely with you to curate materials, lighting, bespoke woodcraft, and furnishings that reflect your personal prestige.",
    iconName: "Home",
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
    offerings: [
      "Residential Luxury Interior Design",
      "Commercial Office & Retail Interiors",
      "Modular Kitchen Design (Acrylic, PU, Laminate, Quartz)",
      "Master & Guest Bedroom Interior Design",
      "Living Room & Entertainment Zone Interiors",
      "Designer False Ceiling & Gypsum / POP Works",
      "Bespoke TV Units & Fluted Wall Paneling",
      "Custom Wardrobes (Walk-in, Sliding, Hinged with Profile Lighting)",
      "Architectural Lighting Layouts & Cove Illumination",
      "Italian Marble, Granite, Tile & Hardwood Flooring",
      "Premium Painting, Stucco & Luxury Wall Finishes",
      "Modern Bathroom Sanitary & Vanity Interiors",
      "Complete Interior Turnkey Projects",
      "Interactive Interior 3D Walkthroughs",
    ],
    benefits: [
      "Factory-finish modular cabinetry utilizing calibrated boiling-water-proof (BWP) plywood",
      "Harmonious lighting designs that elevate spatial ambiance",
      "Direct execution team ensuring strict alignment with 3D renders",
      "Ergonomic kitchen work triangles and customized storage maximization",
    ],
    processSteps: [
      { title: "Moodboard & Concept", desc: "Exploring color palettes, veneer textures, marble selections, and lifestyle preferences." },
      { title: "Photorealistic 3D Renders", desc: "Visualizing every room in exact dimension with materials and lighting preview." },
      { title: "Factory Production & Material Sourcing", desc: "Precision CNC edge-banding, modular assembly, and certified hardware sourcing." },
      { title: "On-Site Installation & Styling", desc: "Professional installation, false ceiling illumination, deep cleaning, and client reveal." },
    ],
  },
  {
    id: "cat-5",
    slug: "3d-visualization",
    title: "Elevation & Architectural Visualization",
    subtitle: "Hyper-Realistic 3D Renders, Walkthroughs & Vastu Precision",
    shortDesc:
      "See your dream project before laying a single brick with photorealistic 3D elevations, immersive walkthroughs, and Vastu-compliant alignments.",
    fullDesc:
      "Our state-of-the-art 3D architectural visualization brings structural concepts to life with true-to-life textures, daylight conditions, landscape integration, and night illumination scenes, complemented by authentic Vastu principles.",
    iconName: "Layers",
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    offerings: [
      "2D Building Elevations (Front, Rear, Left, Right)",
      "3D Exterior Elevations (Modern, Contemporary, Classical, Minimalist)",
      "3D Isometric Cut-Section Views",
      "Cinematic Interior 3D Walkthrough Videos",
      "Exterior 3D Visualization with Landscape & Lighting",
      "Architectural Rendering for Commercial Facades",
      "Vastu Shastra Consulting & Spatial Alignment",
    ],
    benefits: [
      "Eliminate design regrets before incurring construction expenditures",
      "Accurately evaluate exterior color palettes, stone cladding, and louvers",
      "Facilitate marketing and investor presentations for commercial properties",
      "Harmonize modern aesthetics with proven Vastu tenets",
    ],
    processSteps: [
      { title: "2D Floor Plan Ingestion", desc: "Converting 2D CAD layouts into precise 3D volumetric massing models." },
      { title: "Architectural Detailing & Texturing", desc: "Applying genuine materials: travertine, glass, wood louvers, and concrete finishes." },
      { title: "Lighting Simulation", desc: "Setting up golden-hour daylight, exterior landscape spotlights, and evening facade glows." },
      { title: "High-Resolution Output", desc: "Rendering 4K photorealistic images and cinematic camera path walkthroughs." },
    ],
  },
  {
    id: "cat-6",
    slug: "estimation",
    title: "Estimation & Quantity Surveying",
    subtitle: "Transparent Cost Analysis, Accurate BOQs & Valuation Reports",
    shortDesc:
      "Detailed Bill of Quantities (BOQ), bank loan estimates, material takeoff calculations, and certified valuation reports for foolproof financial planning.",
    fullDesc:
      "Eliminate budget overruns with Nayab Construction's precision estimation wing. Leveraging two-and-a-half decades of market pricing data across Ramanagara and Bengaluru, our estimates give you exact numbers down to the last bag of cement and foot of steel.",
    iconName: "Calculator",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    offerings: [
      "Bank Loan Estimates (Nationalized & Private Banks)",
      "Comprehensive Construction Costing & Budgeting",
      "Detailed Bill of Quantities (BOQ) with Itemized Rates",
      "Quantity Surveying & Material Takeoff",
      "Material Quantity Calculations (Cement, Steel, Sand, Blocks, Paint)",
      "Labour Cost Estimation & Schedule of Rates",
      "Land Valuation Reports",
      "Building Valuation Reports",
      "Project Cost Feasibility Analysis",
    ],
    benefits: [
      "Accepted by major banks: SBI, HDFC, Canara Bank, ICICI, etc.",
      "Accurate material projections preventing on-site pilferage and wastage",
      "Milestone-linked cash flow forecast for easy client budgeting",
      "Clear distinction between civil core and finishing allowances",
    ],
    processSteps: [
      { title: "Plan Extraction", desc: "Measuring dimensions and specifications directly from verified architectural/structural drawings." },
      { title: "Quantity Surveying", desc: "Calculating exact volumes for excavation, concrete, reinforcement, plastering, and tiling." },
      { title: "Current Market Rate Analysis", desc: "Applying prevailing local labor and material rates in Ramanagara/Bengaluru." },
      { title: "BOQ & Bank Report Delivery", desc: "Delivering itemized BOQ sheets and certified bank estimation dossiers." },
    ],
  },
  {
    id: "cat-7",
    slug: "approvals-documentation",
    title: "Building Approvals & Documentation",
    subtitle: "Hassle-Free Municipal Sanctions, E-Khata & Statutory Clearances",
    shortDesc:
      "End-to-end liaison and preparation for building plan approvals, BESCOM clearances, E-Khata, EC, and legal property document verification.",
    fullDesc:
      "Navigating municipal authorities, planning authorities, and utility boards can be complex. Nayab Construction provides dedicated documentation support in Ramanagara, Bangalore South, and surrounding jurisdictions to secure clean sanctions swiftly.",
    iconName: "FileCheck",
    heroImage: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1600&q=80",
    offerings: [
      "Building Plan Approval Assistance (CMC, BMRDA, Grama Panchayat)",
      "Sanction Plan Preparation adhering to Zoning Bylaws",
      "BESCOM Approval Drawings & Electrical Sanction Liaison",
      "E-Khata Assistance & Property Khata Transfer",
      "Khata Documentation & Bifurcation Support",
      "Encumbrance Certificate (EC) Procurement Assistance",
      "Property Title Document Verification Coordination",
      "Registration Deed Documentation & Stamp Duty Guidance",
      "Land Conversion & Building Documentation Support",
    ],
    benefits: [
      "Zero guesswork through established procedural familiarity in Ramanagara",
      "Flawless sanction plans drawn strictly according to FAR, setbacks, and road widths",
      "Smooth coordination preventing prolonged regulatory delays",
      "Clear paper trail safeguarding your property's long-term legal standing",
    ],
    processSteps: [
      { title: "Document Scrutiny", desc: "Reviewing title deeds, parent documents, revenue records, and tax receipts." },
      { title: "Sanction Plan Drafting", desc: "Drafting color-coded approval drawings per municipal planning formats." },
      { title: "Authority Submission", desc: "Lodging files through portal/department desks with all necessary affidavits." },
      { title: "Sanction Procurement", desc: "Tracking inspections, fee payments, and securing authorized approval certificates." },
    ],
  },
  {
    id: "cat-8",
    slug: "loan-assistance",
    title: "Home Loans & Financial Assistance",
    subtitle: "Streamlined Bank Loan Documentation, Estimates & Coordination",
    shortDesc:
      "Expert assistance in procuring home loans, construction loans, and plot loans with bank-compliant estimates and valuation dossiers.",
    fullDesc:
      "Financing your dream home shouldn't be stressful. We bridge the gap between clients and premier banking institutions by assembling airtight technical estimation dossiers, valuation papers, and project progress certificates required for speedy sanction and stage-wise disbursements.",
    iconName: "Landmark",
    heroImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1600&q=80",
    offerings: [
      "Home Loan Assistance (Purchase & New Build)",
      "Construction Loan Assistance for Self-Financed Plots",
      "Composite Plot + Construction Loan Assistance",
      "Bank Loan Estimates in Standard Formats",
      "Certified Property Valuation Reports",
      "Stage-Wise Bank Submission Estimates",
      "Bank Technical Verification Coordination",
      "Engineer's Progress Valuation Certificates for Loan Disbursement",
    ],
    benefits: [
      "Pre-formatted technical files tailored to public and private bank norms",
      "Timely stage-wise inspection certificates for seamless fund disbursement",
      "Guidance on government housing subsidy eligibility (where applicable)",
      "Transparent advisory ensuring clients borrow comfortably within means",
    ],
    processSteps: [
      { title: "Financial Assessment", desc: "Understanding the project budget, plot status, and loan requirement." },
      { title: "Dossier Assembly", desc: "Compiling sanction plans, detailed estimates, title documents, and tax receipts." },
      { title: "Bank Submission & Field Inspection", desc: "Coordinating with the bank's panel engineers and legal advocates during site visits." },
      { title: "Disbursement Milestones", desc: "Issuing engineer completion certificates as foundation, slab, and plastering finish." },
    ],
  },
  {
    id: "cat-9",
    slug: "real-estate",
    title: "Real Estate & Property Development",
    subtitle: "Strategic Land Development, Luxury Villas & Investment Advisory",
    shortDesc:
      "Plotted layout developments, luxury villa communities, commercial joint ventures, and trusted property advisory in prime Ramanagara growth corridors.",
    fullDesc:
      "Nayab Construction is at the forefront of regional real estate development. We transform raw land into high-value residential layouts and prime commercial hubs, offering discerning investors and homebuyers exceptional capital appreciation.",
    iconName: "TrendingUp",
    heroImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
    offerings: [
      "Residential Property Development & Layout Formation",
      "Commercial Property Development & Office Hubs",
      "Independent House Development for Sale",
      "Bespoke Gated Villa Development",
      "Apartment Development & Joint Venture Advisory",
      "Land Development (Levelling, Roads, Drainage, Utilities)",
      "Residential Layout Development with BMRDA/CMC Approvals",
      "Plot Development & Demarcation",
      "Property Investment Consultancy & ROI Forecasting",
      "Real Estate Master Project Planning",
      "Property Buying & Selling Assistance (Transparent Direct Deals)",
      "Comprehensive Development Project Management",
    ],
    benefits: [
      "Prime locations along high-growth corridors (Mysuru-Bengaluru Expressway)",
      "Strict legal due diligence ensuring 100% litigation-free titles",
      "Complete modern layout amenities: underground drainage, asphalt roads, streetlights",
      "Turnkey development model delivering high yields for land owners",
    ],
    processSteps: [
      { title: "Land Acquisition & Feasibility", desc: "Topographic survey, legal clearance, and economic viability study." },
      { title: "Master Planning & Layout Sanctions", desc: "Designing open spaces, road networks, and securing town planning sanctions." },
      { title: "Civil Infrastructure Execution", desc: "Executing asphalt roadways, rainwater drains, water supply, and electrical grids." },
      { title: "Delivery & Registration", desc: "Handover of developed plots or constructed villas with individual khatas." },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "The Grand Crest Luxury Villa",
    category: "Residential",
    status: "Completed",
    location: "Ramanagara",
    area: "4,200 Sq. Ft.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
    description: "A contemporary 4BHK architectural masterpiece featuring double-height living areas, floor-to-ceiling glazing, private courtyards, and integrated champagne gold accents.",
    features: ["4 Master Suites", "Double Height Living Room", "Infinity Reflection Pond", "Italian Marble Flooring", "Home Automation"],
    isSampleVisual: true,
  },
  {
    id: "proj-2",
    title: "Al-Noor Commercial Arcade",
    category: "Commercial",
    status: "Completed",
    location: "Near Court Complex, Ramanagara",
    area: "8,500 Sq. Ft.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    description: "Multi-level commercial complex engineered with post-tensioned slabs, high-performance structural glazing, retail frontage, and professional office chambers.",
    features: ["4 Floors Retail & Offices", "High-Speed Elevator", "Basement Parking", "Full Power Backup", "BESCOM Substation"],
    isSampleVisual: true,
  },
  {
    id: "proj-3",
    title: "Serene Meadow Contemporary Residence",
    category: "Residential",
    status: "Ongoing",
    location: "Ijoor, Ramanagara",
    area: "3,100 Sq. Ft.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    description: "Modern independent 3BHK residence incorporating Vastu-oriented spaces, cantilevered balconies, thermal insulation, and custom teakwood joinery.",
    features: ["3 Ensuite Bedrooms", "Landscaped Terrace Garden", "Solar Heating System", "Acoustic Glazing", "Custom Modular Kitchen"],
    isSampleVisual: true,
  },
  {
    id: "proj-4",
    title: "The Opulent Penthouse Suite",
    category: "Interiors",
    status: "Completed",
    location: "Bengaluru South Corridor",
    area: "2,800 Sq. Ft.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
    description: "Bespoke interior turnkey execution showcasing fluted wall panels, warm concealed cove lighting, quartz island kitchen, and custom walk-in closets.",
    features: ["German Hardware Modular Kitchen", "Custom Walk-in Wardrobes", "Smart Mood Lighting", "Acoustic Paneling", "Italian Travertine Feature Wall"],
    isSampleVisual: true,
  },
  {
    id: "proj-5",
    title: "Zenith Industrial Fabrication Facility",
    category: "Industrial",
    status: "Completed",
    location: "Bidadi Industrial Area",
    area: "14,000 Sq. Ft.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
    description: "Heavy-duty industrial PEB structure with crane gantry provisions, heavy floor loading capacities, vacuum dewatered flooring (VDF), and administrative wings.",
    features: ["10-Tonne Crane Provision", "VDF Heavy Duty Flooring", "Fire Sprinkler Network", "Loading Docks", "Dedicated Transformer Yard"],
    isSampleVisual: true,
  },
  {
    id: "proj-6",
    title: "The Courtyard Pavilion 3D Elevation",
    category: "3D Elevation",
    status: "Completed",
    location: "Ramanagara Environs",
    area: "3,800 Sq. Ft.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    description: "Photorealistic architectural visualization rendering displaying tropical brutalist concrete formwork, vertical timber louvers, and warm ambient exterior nightscape.",
    features: ["4K Daylight & Dusk Renders", "True Material Texturing", "Landscape Modeling", "Detailed Joinery Elevation", "Vastu Compliant Orientations"],
    isSampleVisual: true,
  },
  {
    id: "proj-7",
    title: "Emerald Estate Plotted Community",
    category: "Residential",
    status: "Ongoing",
    location: "Near Gandhi Park, Ramanagara",
    area: "4.5 Acres",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
    description: "Gated residential layout featuring 30x40 and 30x50 villa plots, underground utility cabling, asphalt tree-lined boulevards, and rainwater harvesting.",
    features: ["BMRDA Approved Layout", "Underground Drainage (UGD)", "Park & Play Enclave", "24/7 Security Gatehouse", "Clear Title Documents"],
    isSampleVisual: true,
  },
  {
    id: "proj-8",
    title: "Executive Minimalist Corporate Studio",
    category: "Interiors",
    status: "Completed",
    location: "Ramanagara",
    area: "1,950 Sq. Ft.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    description: "Modern professional headquarters featuring acoustic conference enclosures, ergonomic workstations, executive lounge, and brass branding accents.",
    features: ["Glass Partitioning", "Ergonomic Layouts", "Custom Reception Desk", "Integrated Video Conferencing", "LED Profile Channels"],
    isSampleVisual: true,
  },
];

export const GALLERY_ITEMS = [
  {
    id: "gal-1",
    title: "Modern Luxury Villa Elevation",
    category: "Architecture & Elevation",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
    description: "Exterior facade featuring cantilevered balconies and illuminated glass balustrades.",
  },
  {
    id: "gal-2",
    title: "Luxury Modular Kitchen with Island",
    category: "Interiors",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80",
    description: "High-gloss acrylic cabinetry with quartz waterfall island and concealed profile lighting.",
  },
  {
    id: "gal-3",
    title: "Master Bedroom Retreat",
    category: "Interiors",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=80",
    description: "Serene master bedroom with velvet acoustic headboard and warm ambient illumination.",
  },
  {
    id: "gal-4",
    title: "Contemporary Living Room",
    category: "Interiors",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
    description: "Spacious open-concept living area with fluted marble TV unit and minimalist furniture.",
  },
  {
    id: "gal-5",
    title: "Precision RCC Construction",
    category: "Construction Progress",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1600&q=80",
    description: "Active site supervision of roof beam reinforcement and concrete shuttering.",
  },
  {
    id: "gal-6",
    title: "Commercial Glass Facade",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    description: "Structural glazed commercial facade designed for optimal thermal performance.",
  },
  {
    id: "gal-7",
    title: "3D Isometric Interior View",
    category: "3D Visualization",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    description: "Cutaway isometric rendering detailing spatial flow and furniture arrangements.",
  },
  {
    id: "gal-8",
    title: "Luxury Villa at Twilight",
    category: "Architecture & Elevation",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    description: "Evening illumination showing exterior architectural sconces and landscape lighting.",
  },
  {
    id: "gal-9",
    title: "Bespoke Walk-in Wardrobe",
    category: "Interiors",
    image: "https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1600&q=80",
    description: "Tinted glass sliding wardrobes with integrated motion sensor LED lighting.",
  },
  {
    id: "gal-10",
    title: "Site Earthwork & Marking",
    category: "Construction Progress",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    description: "Civil engineer centreline marking and grid pegging for accurate foundation excavation.",
  },
  {
    id: "gal-11",
    title: "Modern Dining & Bar Lounge",
    category: "Interiors",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1600&q=80",
    description: "Solid wood 8-seater dining table complemented by champagne gold pendant lights.",
  },
  {
    id: "gal-12",
    title: "Industrial PEB Facility",
    category: "Industrial",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
    description: "Engineered pre-engineered steel building with industrial roofing and perimeter ventilation.",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Consultation",
    tagline: "Understanding Your Vision",
    desc: "We initiate an in-depth conversation to understand your lifestyle, functional aspirations, spatial requirements, and investment budget.",
  },
  {
    step: "02",
    title: "Planning & Design",
    tagline: "Architectural & Structural Drafting",
    desc: "Our civil engineers and architects draft detailed 2D floor plans, 3D elevations, structural calculations, and statutory sanction drawings.",
  },
  {
    step: "03",
    title: "Estimation",
    tagline: "Cost Clarity & BOQ Finalization",
    desc: "We prepare a transparent Bill of Quantities (BOQ), bank-ready estimation, and milestone schedule with zero hidden surprises.",
  },
  {
    step: "04",
    title: "Execution",
    tagline: "Disciplined Construction & Site Work",
    desc: "Construction commences under direct civil engineer supervision, utilizing certified high-grade materials and rigorous quality testing.",
  },
  {
    step: "05",
    title: "Finishing",
    tagline: "Craftsmanship, Interiors & Polish",
    desc: "We execute false ceilings, joinery, modular kitchens, tiling, sanitary fittings, and premium paint with meticulous attention to detail.",
  },
  {
    step: "06",
    title: "Project Handover",
    tagline: "Delivering Your Masterpiece",
    desc: "Following comprehensive snag-list clearance and deep cleaning, we proudly hand over your keys with full warranty and documentation.",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "25 Years of Founder Experience",
    desc: "Backed by Founder Mr. Sadat Ulla Khan's 25 years of civil engineering excellence and seasoned structural leadership.",
  },
  {
    title: "8 Years of Co-Founder Experience",
    desc: "Driven by Co-Founder Mr. Nayab Noor Mohammad Khan's modern project coordination, architectural innovation, and client focus.",
  },
  {
    title: "One Company. Every Building Solution.",
    desc: "Architects, civil engineers, builders, interior designers, and valuation experts collaborate under one accountable roof.",
  },
  {
    title: "Structural & Engineering Rigor",
    desc: "Seismic-resistant framing, precise bar-bending schedules, and multi-point site inspections before every concrete pour.",
  },
  {
    title: "Transparent BOQ & Fair Pricing",
    desc: "Zero hidden costs or sudden mid-project escalations. Clear itemized estimates accepted by all leading nationalized banks.",
  },
  {
    title: "Local Mastery in Ramanagara & Karnataka",
    desc: "Deep knowledge of local soil profiles, municipal planning sanctions, BESCOM norms, and local material logistics.",
  },
];

export const TESTIMONIALS = [
  {
    id: "test-1",
    quote:
      "Nayab Construction built our independent villa in Ramanagara from ground up. The structural strength overseen by Mr. Sadat Ulla Khan gave us immense confidence, and their attention to finishing is remarkable. Having design, approvals, and construction under one roof saved us months of stress.",
    clientName: "Verified Residential Client",
    project: "Independent Luxury Villa, Ramanagara",
    rating: 5,
    note: "Client Review Verified by Nayab Construction",
  },
  {
    id: "test-2",
    quote:
      "For our commercial arcade near the Court Complex, we needed precise sanction approvals, BESCOM clearances, and high-load structural execution. Nayab Construction handled the entire documentation and turnkey build flawlessly. Highly professional and transparent.",
    clientName: "Commercial Property Investor",
    project: "Commercial Arcade, Ijoor",
    rating: 5,
    note: "Client Review Verified by Nayab Construction",
  },
  {
    id: "test-3",
    quote:
      "Their interior design and 3D visualization team showed us exactly how our modular kitchen and living room would look before starting work. The finished home matches the 3D designs down to the millimeter. Truly luxury quality.",
    clientName: "Homeowner",
    project: "Turnkey Interiors, Ramanagara Corridor",
    rating: 5,
    note: "Client Review Verified by Nayab Construction",
  },
];
