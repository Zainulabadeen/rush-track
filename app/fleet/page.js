import Link from "next/link";
import { CheckCircle2, Gauge, ShieldCheck, Truck, Wrench } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { images } from "@/data/site";

export const metadata = { title: "Fleet" };

export default function FleetPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Fleet"
        title="Prepared, maintained and matched to the job."
        text="Fleet readiness supports the quality of every transport service, from planned commercial movement to day-to-day operational support."
        image={images.fleet}
        cta={false}
      />
      <section className="section section--white">
        <div className="container split-layout">
          <Reveal>
            <SectionHeading
              eyebrow="Fleet Readiness"
              title="The work starts before a vehicle leaves the yard."
              text="Routine checks, maintenance planning and practical vehicle selection help reduce disruption and support safer, more dependable journeys."
            />
            <p className="page-copy-links">
              Fleet readiness supports our <Link href="/divisions/transport-logistics">transport and logistics services</Link>. For a specific requirement, <Link href="/contact">contact Rush Track</Link>.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="metric-panel">
              <div><Truck /><span>Vehicle Range</span><strong>Matched to the work</strong></div>
              <div><Wrench /><span>Maintenance</span><strong>Planned & preventive</strong></div>
              <div><ShieldCheck /><span>Readiness</span><strong>Operational checks</strong></div>
              <div><Gauge /><span>Utilization</span><strong>Practical allocation</strong></div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section section--soft">
        <div className="container split-layout split-layout--reverse">
          <Reveal><div className="image-card"><img src={images.fleetService} alt="Rush Track fleet service and maintenance support" /></div></Reveal>
          <Reveal delay={100}>
            <div className="check-list">
              {["Commercial transport vehicles", "Support and service vehicles", "Relocation fleet through RT Movers", "Vehicle selection based on job profile", "Maintenance and readiness coordination"].map((d) => <div key={d}><CheckCircle2 /><span>{d}</span></div>)}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
