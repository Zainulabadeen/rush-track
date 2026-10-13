import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { divisions, site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return divisions.filter((d) => !d.external).map((d) => ({ slug: d.slug }));
}

const divisionContent = {
  "transport-logistics": {
    metaTitle: "Transport & Logistics Services UAE",
    metaDescription: "Commercial road transport and logistics support from Rush Track for planned deliveries, recurring movement and business operations across the UAE.",
    heading: "Commercial movement planned around the operation.",
    text: "We focus on dependable road movement, practical coordination and clear communication for businesses with recurring or project-based transport needs.",
    details: [
      "Commercial transport planning and coordination",
      "Scheduled and on-demand road movement",
      "Business delivery and operational support",
      "Flexible support for recurring transport requirements",
    ],
  },
  "fleet-services": {
    metaTitle: "Fleet Support Services UAE",
    metaDescription: "Rush Track fleet services support vehicle readiness, maintenance coordination and operational continuity for businesses across the UAE.",
    heading: "Fleet support built around readiness and continuity.",
    text: "Fleet support is about keeping vehicles available, maintained and matched to the work so day-to-day operations are less exposed to avoidable disruption.",
    details: [
      "Fleet readiness and maintenance coordination",
      "Preventive care and operational checks",
      "Vehicle support for business continuity",
      "Practical fleet management support",
    ],
  },
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = divisions.find((d) => d.slug === slug && !d.external);
  const content = divisionContent[slug];
  if (!item || !content) return {};
  return pageMetadata({
    title: content.metaTitle,
    description: content.metaDescription,
    path: `/divisions/${slug}`,
  });
}

export default async function DivisionDetailPage({ params }) {
  const { slug } = await params;
  const item = divisions.find((d) => d.slug === slug && !d.external);
  if (!item) notFound();
  const content = divisionContent[item.slug];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: item.title,
    description: item.description,
    provider: { "@type": "Organization", name: site.name, url: site.url },
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
    url: `${site.url}/divisions/${item.slug}`,
  };

  return (
    <>
      <PageHero eyebrow={item.eyebrow} title={item.title} text={item.description} image={item.image} cta={false} />
      <section className="section section--white">
        <div className="container split-layout">
          <Reveal>
            <SectionHeading eyebrow="What We Deliver" title={content.heading} text={content.text} />
            <p className="page-copy-links">
              {item.slug === "transport-logistics" ? (
                <>See the <Link href="/industries">industries we support</Link>, review our <Link href="/fleet">fleet approach</Link>, or <Link href="/contact">contact Rush Track</Link> to discuss a transport requirement.</>
              ) : (
                <>Learn more about <Link href="/fleet">our fleet approach</Link>, see how it complements <Link href="/divisions/transport-logistics">transport and logistics</Link>, or <Link href="/contact">contact our team</Link>.</>
              )}
            </p>
          </Reveal>
          <Reveal delay={100}><div className="check-list">{content.details.map((d) => <div key={d}><CheckCircle2 /><span>{d}</span></div>)}</div></Reveal>
        </div>
      </section>
      <section className="section section--soft">
        <div className="container">
          <p className="page-copy-links related-services-copy">
            Rush Track also connects clients with {item.slug === "transport-logistics" ? <Link href="/divisions/fleet-services">fleet services</Link> : <Link href="/divisions/transport-logistics">commercial transport and logistics</Link>}. Moving and relocation enquiries are handled by <a href={site.rtMoversUrl} target="_blank" rel="noopener noreferrer">RT Movers UAE</a>.
          </p>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </>
  );
}
