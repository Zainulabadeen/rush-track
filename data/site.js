export const site = {
  name: "Rush Track Transport LLC",
  shortName: "Rush Track",
  phone: "+971 50 123 4567",
  email: "info@rushtrack.ae",
  location: "Dubai, UAE",
  rtMoversUrl: "https://rtmoversuae.com/",
};

export const images = {
  hero: "/images/rt-hero-generated.webp",
  office: "/images/rt-about-generated.webp",
  transport: "/images/rt-transport-generated.webp",
  fleetService: "/images/rt-fleet-service-generated.webp",
  fleet: "/images/rt-fleet-banner-generated.webp",
  workers: "/images/rt-moving-generated.webp",
  rtMoversLogo: "/images/rt-movers-logo.png",
  dubaiRoad: "/images/rt-hero-generated.webp",
  port: "/images/rt-transport-generated.webp",
  warehouse: "/images/rt-transport-generated.webp",
};

export const divisions = [
  {
    slug: "moving-relocation",
    title: "Moving & Relocation",
    eyebrow: "RT Movers",
    description:
      "Professional home, office and villa relocation across the UAE, delivered through our dedicated moving division.",
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
      "Reliable transport and logistics support designed for businesses that need consistent movement, delivery and operational flexibility.",
    image: images.transport,
    icon: "/icons/division-transport.svg",
  },
  {
    slug: "fleet-services",
    title: "Fleet Services",
    eyebrow: "Fleet Support",
    description:
      "Readiness, maintenance and operational fleet support focused on keeping vehicles dependable and business moving smoothly.",
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
