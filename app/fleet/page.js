import { CheckCircle2, Gauge, ShieldCheck, Truck, Wrench } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { images } from "@/data/site";

export const metadata = { title: "Fleet" };

export default function FleetPage() {
  return (
    <>
      <PageHero eyebrow="Our Fleet" title="Prepared, maintained and matched to the job." text="Our fleet strategy focuses on operational readiness, dependable maintenance and the flexibility to support different transport needs across the UAE." image={images.fleet} />
      <section className="section section--white">
        <div className="container split-layout">
          <Reveal><SectionHeading eyebrow="Fleet Readiness" title="The right vehicle matters. So does what happens before it leaves the yard." text="We treat fleet care as part of service quality. Routine checks, maintenance planning and operational discipline help reduce disruption and support safer journeys." /></Reveal>
          <Reveal delay={100}>
            <div className="metric-panel">
              <div><Truck /><span>Vehicle Range</span><strong>Light to commercial</strong></div>
              <div><Wrench /><span>Maintenance</span><strong>Planned & preventive</strong></div>
              <div><ShieldCheck /><span>Readiness</span><strong>Operational checks</strong></div>
              <div><Gauge /><span>Utilization</span><strong>Right-size the job</strong></div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section section--soft">
        <div className="container split-layout split-layout--reverse">
          <Reveal><div className="image-card"><img src={images.hero} alt="Transport truck" /></div></Reveal>
          <Reveal delay={100}>
            <div className="check-list">
              {["Commercial transport vehicles", "Support and service vehicles", "Relocation fleet through RT Movers", "Vehicle selection based on job profile", "Fleet support and maintenance coordination"].map((d) => <div key={d}><CheckCircle2 /><span>{d}</span></div>)}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
