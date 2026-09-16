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

export default async function DivisionDetailPage({ params }) {
  const { slug } = await params;
  const item = divisions.find((d) => d.slug === slug && !d.external);
  if (!item) notFound();

  const details = {
    "transport-logistics": [
      "Commercial transport planning and coordination",
      "Scheduled and on-demand road movement",
      "Business delivery and operational support",
      "Flexible solutions for recurring transport needs",
    ],
    "fleet-services": [
      "Fleet readiness and maintenance coordination",
      "Preventive care and operational checks",
      "Vehicle support for business continuity",
      "Practical fleet management support",
    ],
  }[item.slug];

  return (
    <>
      <PageHero eyebrow={item.eyebrow} title={item.title} text={item.description} image={item.image} />
      <section className="section section--white">
        <div className="container split-layout">
          <Reveal>
            <SectionHeading eyebrow="What We Deliver" title={`Built around dependable ${item.title.toLowerCase()}.`} text="Our approach is practical: understand the operation, match the right resources and keep communication clear from planning through completion." />
          </Reveal>
          <Reveal delay={100}>
            <div className="check-list">
              {details.map((d) => <div key={d}><CheckCircle2 /><span>{d}</span></div>)}
            </div>
          </Reveal>
        </div>
      </section>
      <section className="final-cta">
        <div className="container final-cta__inner">
          <div><div className="eyebrow">Need This Service?</div><h2>Tell us what you need moved, delivered or supported.</h2></div>
          <Link href="/contact" className="btn btn--navy">Request a Discussion <ArrowRight size={18} /></Link>
        </div>
      </section>
    </>
  );
}
