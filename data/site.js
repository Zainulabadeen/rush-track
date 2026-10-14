export const site = {
  name: "Rush Track Transport LLC",
  shortName: "Rush Track",
  url: "https://rushtrack.ae",
  phone: "+971 50 235 9100",
  email: "info@rtmovers.ae",
  location: "Citadel Tower, Business Bay, Dubai, UAE",
  country: "AE",
  rtMoversUrl: "https://rtmovers.ae/",
  rtMoversPhone: "+971 50 235 9100",
  rtMoversEmail: "info@rtmovers.ae",
  rtMoversAddress: "Citadel Tower, Business Bay, Dubai, UAE",
  logo: "/images/v26/rush-logo-640.webp",
};

export const images = {
  hero: "/images/v26/hero-desktop-1600.webp",
  heroMobile: "/images/v26/hero-mobile-900.webp",
  office: "/images/v26/about-960.webp",
  officeSmall: "/images/v26/about-640.webp",
  transport: "/images/v26/transport-960.webp",
  transportSmall: "/images/v26/transport-640.webp",
  fleetService: "/images/v26/fleet-service-960.webp",
  fleetServiceSmall: "/images/v26/fleet-service-640.webp",
  fleet: "/images/v26/fleet-banner-desktop-1600.webp",
  fleetMobile: "/images/v26/fleet-banner-mobile-800.webp",
  workers: "/images/v26/moving-960.webp",
  workersSmall: "/images/v26/moving-640.webp",
  rtMoversLogo: "/images/v26/rt-movers-320.webp",
  rushLogo: "/images/v26/rush-logo-640.webp",
  rushLogoSmall: "/images/v26/rush-logo-400.webp",
  cta: "/images/v26/cta-1400.webp",
  ctaMobile: "/images/v26/cta-mobile-700.webp",
  dubaiRoad: "/images/v26/page-hero-desktop.webp",
  port: "/images/v26/page-transport-desktop.webp",
  warehouse: "/images/v26/page-transport-desktop.webp",
};

export const pageImages = {
  hero: {
    desktop: "/images/v26/page-hero-desktop.webp",
    mobile: "/images/v26/page-hero-mobile.webp",
  },
  office: {
    desktop: "/images/v26/page-about-desktop.webp",
    mobile: "/images/v26/page-about-mobile.webp",
  },
  transport: {
    desktop: "/images/v26/page-transport-desktop.webp",
    mobile: "/images/v26/page-transport-mobile.webp",
  },
  fleet: {
    desktop: "/images/v26/page-fleet-desktop.webp",
    mobile: "/images/v26/page-fleet-mobile.webp",
  },
  moving: {
    desktop: "/images/v26/page-moving-desktop.webp",
    mobile: "/images/v26/page-moving-mobile.webp",
  },
  fleetService: {
    desktop: "/images/v26/page-fleetservice-desktop.webp",
    mobile: "/images/v26/page-fleetservice-mobile.webp",
  },
};

export const divisions = [
  {
    slug: "moving-relocation",
    title: "Moving & Relocation",
    eyebrow: "RT Movers",
    description:
      "Home, apartment, villa and office moving with packing, furniture handling and relocation support through our dedicated RT Movers division.",
    image: images.workers,
    imageSmall: images.workersSmall,
    pageImage: pageImages.moving,
    icon: "/icons/division-moving.svg",
    external: true,
    href: site.rtMoversUrl,
  },
  {
    slug: "transport-logistics",
    title: "Transport & Logistics",
    eyebrow: "Commercial Transport",
    description:
      "Road transport and logistics support for businesses that need dependable movement, planned delivery and flexible operational coordination.",
    image: images.transport,
    imageSmall: images.transportSmall,
    pageImage: pageImages.transport,
    icon: "/icons/division-transport.svg",
  },
  {
    slug: "fleet-services",
    title: "Fleet Services",
    eyebrow: "Fleet Support",
    description:
      "Vehicle readiness, maintenance coordination and practical fleet support designed to keep day-to-day operations moving reliably.",
    image: images.fleetService,
    imageSmall: images.fleetServiceSmall,
    pageImage: pageImages.fleetService,
    icon: "/icons/division-fleet.svg",
  },
];

export const industries = [
  ["Construction", "Project and site transport support"],
  ["Real Estate", "Property, handover and relocation logistics"],
  ["Retail & FMCG", "Store, inventory and delivery support"],
  ["Manufacturing", "Movement of materials and equipment"],
  ["Oil & Gas", "Operational transport support"],
  ["Aviation", "Time-sensitive business transport"],
  ["Marine & Offshore", "Specialist logistics coordination"],
  ["Healthcare", "Reliable operational movement"],
  ["Government", "Structured public-sector transport"],
  ["Events & Exhibitions", "Scheduled transport and setup support"],
];
