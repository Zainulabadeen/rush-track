export const site = {
  name: "Rush Track Transport LLC",
  shortName: "Rush Track",
  phone: "+971 50 235 9100",
  email: "info@rtmovers.ae",
  location: "Citadel Tower, Business Bay, Dubai, UAE",
  rtMoversUrl: "https://rtmovers.ae/",
  rtMoversPhone: "+971 50 235 9100",
  rtMoversEmail: "info@rtmovers.ae",
  rtMoversAddress: "Citadel Tower, Business Bay, Dubai, UAE",
};

export const images = {
  hero: "/images/rt-hero-generated.webp",
  office: "/images/rt-about-generated.webp",
  transport: "/images/rt-transport-generated.webp",
  fleetService: "/images/rt-fleet-service-generated.webp",
  fleet: "/images/rt-fleet-banner-generated.webp",
  workers: "/images/rt-moving-authentic.webp",
  rtMoversLogo: "/images/rt-movers-logo.png",
  dubaiRoad: "/images/rt-hero-generated.webp",
  port: "/images/rt-transport-generated.webp",
};

export const divisions = [
  {
    slug: "moving-relocation",
    title: "Moving & Relocation",
    eyebrow: "RT Movers",
    description:
      "Home, apartment, villa and office moving with packing, furniture handling and relocation support through our dedicated RT Movers division.",
    image: images.workers,
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
    icon: "/icons/division-transport.svg",
  },
  {
    slug: "fleet-services",
    title: "Fleet Services",
    eyebrow: "Fleet Support",
    description:
      "Vehicle readiness, maintenance coordination and practical fleet support designed to keep day-to-day operations moving reliably.",
    image: images.fleetService,
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
