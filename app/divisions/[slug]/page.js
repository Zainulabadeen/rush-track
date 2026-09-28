import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { divisions } from "@/data/site";

export function generateStaticParams() {
  return divisions.filter((d) => !d.external).map((d) => ({ slug: d.slug }));
}

const divisionContent = {
  "transport-logistics": {
    heading: "Commercial movement planned around the operation.",
    text: "We focus on dependable road movement, practical coordination and clear communication for businesses with recurring or project-based transport needs.",
    details: [
      "Commercial transport planning and coordination",
      "Scheduled and on-demand road movement",
      "Business delivery and operational support",
      "Flexible support for recurring transport requirements",
    ],
    followup: (
      <>
        See the <Link href="/industries">industries we support</Link>, review our <Link href="/fleet">fleet approach</Link>, or <Link href="/contact">contact Rush Track</Link> to discuss a transport requirement.
      </>
    ),
  },
  "fleet-services": {
    heading: "Fleet support built around readiness and continuity.",
    text: "Fleet support is about keeping vehicles available, maintained and matched to the work so day-to-day operations are less exposed to avoidable disruption.",
    details: [
      "Fleet readiness and maintenance coordination",
      "Preventive care and operational checks",
      "Vehicle support for business continuity",
      "Practical fleet management support",
    ],
    followup: (
      <>
        Learn more about <Link href="/fleet">our fleet approach</Link>, see how it complements <Link href="/divisions/transport-logistics">transport and logistics</Link>, or <Link href="/contact">contact our team</Link>.
      </>
    ),
  },
};

export default async function DivisionDetailPage({ params }) {
  const { slug } = await params;
  const item = divisions.find((d) => d.slug === slug && !d.external);
  if (!item) notFound();
  const content = divisionContent[item.slug];

  return (
    <>
      <PageHero eyebrow={item.eyebrow} title={item.title} text={item.description} image={item.image} cta={false} />
      <section className="section section--white">
        <div className="container split-layout">
          <Reveal>
            <SectionHeading eyebrow="What We Deliver" title={content.heading} text={content.text} />
            <p className="page-copy-links">{content.followup}</p>
          </Reveal>
          <Reveal delay={100}>
            <div className="check-list">
              {content.details.map((d) => <div key={d}><CheckCircle2 /><span>{d}</span></div>)}
            </div>
          </Reveal>
        </div>
      </section>
      <section className="final-cta final-cta--quiet">
        <div className="container final-cta__inner">
          <div><div className="eyebrow">Need This Service?</div><h2>Start with the requirement and we’ll take it from there.</h2></div>
          <Link href="/contact" className="btn btn--gold">Contact Rush Track <ArrowRight size={18} /></Link>
        </div>
      </section>
    </>
  );
}
