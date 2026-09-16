import Link from "next/link";
import { ArrowRight, BadgeCheck, Compass, ShieldCheck, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { images } from "@/data/site";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Rush Track"
        title="Built to move business with confidence."
        text="Rush Track Transport LLC is a Dubai-based corporate transport group bringing specialist operational services together under one trusted brand."
        image={images.office}
      />

      <section className="section section--white">
        <div className="container split-layout">
          <Reveal>
            <SectionHeading
              eyebrow="Our Story"
              title="A practical group built around movement, service and trust."
              text="Rush Track brings together transport, logistics, relocation, warehousing and fleet support so clients can work with specialist teams without losing the consistency of a single corporate partner."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="quote-panel">
              <span>Our direction</span>
              <blockquote>Move possibilities forward through dependable, connected transport solutions.</blockquote>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <Reveal><SectionHeading eyebrow="What Guides Us" title="Simple principles. Stronger operations." align="center" /></Reveal>
          <div className="value-grid">
            {[
              [ShieldCheck, "Reliability", "Plan carefully, communicate clearly and deliver consistently."],
              [BadgeCheck, "Professional Standards", "Build trust through safe, presentable and disciplined operations."],
              [Users, "People First", "Treat customers, partners and teams with respect at every step."],
              [Compass, "Progress", "Improve systems, fleet readiness and service quality continuously."],
            ].map(([Icon, title, text], i) => (
              <Reveal key={title} delay={i * 60}><div className="value-card"><Icon /><h3>{title}</h3><p>{text}</p></div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container split-layout split-layout--reverse">
          <Reveal>
            <div className="image-card"><img src={images.workers} alt="Logistics professionals" /></div>
          </Reveal>
          <Reveal delay={100}>
            <div>
              <SectionHeading eyebrow="Our People" title="The group is only as strong as the teams behind it." text="From drivers and movers to operations, coordination and fleet support, Rush Track is designed around practical teamwork and accountability." />
              <Link href="/contact?topic=careers" className="btn btn--outline">Explore Careers <ArrowRight size={18} /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
