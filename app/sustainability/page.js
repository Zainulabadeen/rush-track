import Link from "next/link";
import { Boxes, Leaf, Route, ShieldCheck, Truck } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { pageImages } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Responsible Transport Operations UAE",
  description: "Rush Track focuses on practical transport efficiency through route planning, fleet care, smarter handling and disciplined operations across the UAE.",
  path: "/sustainability",
});

export default function SustainabilityPage() {
  const items = [
    [Route, "Route Efficiency", "Better planning can reduce unnecessary journeys, waiting time and fuel use."],
    [Truck, "Fleet Care", "Well-maintained vehicles support safer operation and better day-to-day efficiency."],
    [Boxes, "Smarter Handling", "Improved loading and handling can reduce wasted movement and materials."],
    [ShieldCheck, "Operational Discipline", "Clear processes support safety, reliability and responsible resource use."],
  ];
  return (
    <>
      <PageHero eyebrow="Responsible Operations" title="Practical improvements for a more efficient transport future." text="Our approach starts with operational decisions we can improve today: routing, fleet care, resource use and better planning." image={pageImages.transport.desktop} mobileImage={pageImages.transport.mobile} cta={false} />
      <section className="section section--white">
        <div className="container">
          <Reveal><SectionHeading eyebrow="Our Approach" title="Progress that is useful and connected to operations." text="We focus on practical improvements that support efficiency and dependable service rather than adding a separate marketing layer." align="center" /></Reveal>
          <div className="value-grid">{items.map(([Icon, title, text], i) => <Reveal key={title} delay={i * 70}><div className="value-card"><Icon /><h3>{title}</h3><p>{text}</p></div></Reveal>)}</div>
          <p className="page-copy-links sustainability-links">See how this supports our <Link href="/fleet">fleet readiness</Link> and <Link href="/divisions/transport-logistics">transport and logistics services</Link>.</p>
        </div>
      </section>
      <section className="section section--navy"><div className="container sustainability-callout__grid"><Reveal><div><Leaf className="large-icon" /><h2>Responsible growth should strengthen service, not complicate it.</h2></div></Reveal><Reveal delay={100}><p className="lead-light">That means focusing on practical changes that improve efficiency, reduce avoidable waste and keep operations dependable for customers.</p></Reveal></div></section>
    </>
  );
}
