import { Boxes, Leaf, Route, ShieldCheck, Truck } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { images } from "@/data/site";

export const metadata = { title: "Sustainability" };

export default function SustainabilityPage() {
  const items = [
    [Route, "Route Efficiency", "Better planning can reduce unnecessary journeys, waiting time and fuel use."],
    [Truck, "Fleet Care", "Well-maintained vehicles support safer operation and better day-to-day efficiency."],
    [Boxes, "Smarter Handling", "Improved loading, storage and handling can reduce wasted movement and materials."],
    [ShieldCheck, "Operational Discipline", "Clear processes support safety, reliability and responsible resource use."],
  ];
  return (
    <>
      <PageHero eyebrow="Sustainability" title="Practical improvements for a more responsible transport future." text="Our approach starts with the operational decisions we can improve today: routing, fleet care, resource use and better planning." image={images.port} />
      <section className="section section--white">
        <div className="container">
          <Reveal><SectionHeading eyebrow="Our Approach" title="Progress that is measurable, useful and connected to operations." text="We are building sustainability into the way work is planned and delivered rather than treating it as a separate marketing layer." align="center" /></Reveal>
          <div className="value-grid">
            {items.map(([Icon, title, text], i) => <Reveal key={title} delay={i * 70}><div className="value-card"><Icon /><h3>{title}</h3><p>{text}</p></div></Reveal>)}
          </div>
        </div>
      </section>
      <section className="section section--navy">
        <div className="container sustainability-callout__grid">
          <Reveal><div><Leaf className="large-icon" /><h2>Responsible growth should strengthen service, not complicate it.</h2></div></Reveal>
          <Reveal delay={100}><p className="lead-light">That means focusing on practical changes that improve efficiency, reduce avoidable waste and keep operations dependable for customers.</p></Reveal>
        </div>
      </section>
    </>
  );
}
