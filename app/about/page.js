import Link from "next/link";
import { ArrowRight, BadgeCheck, Compass, ShieldCheck, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { images, site } from "@/data/site";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Rush Track"
        title="A focused transport group built for the UAE."
        text="Rush Track Transport LLC connects commercial transport, moving and fleet support under one corporate direction while keeping each service specialised."
        image={images.office}
        cta={false}
      />

      <section className="section section--white">
        <div className="container split-layout">
          <Reveal>
            <SectionHeading
              eyebrow="Our Structure"
              title="Specialist services without unnecessary complexity."
              text={
                <>
                  Our model is straightforward: <Link href="/divisions/transport-logistics">transport and logistics</Link> for commercial movement, <a href={site.rtMoversUrl} target="_blank" rel="noreferrer">RT Movers</a> for dedicated moving and relocation, and <Link href="/divisions/fleet-services">fleet services</Link> for vehicle readiness and operational support.
                </>
              }
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="quote-panel">
              <span>Our direction</span>
              <blockquote>Keep movement dependable, communication clear and every service easy to understand.</blockquote>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <Reveal><SectionHeading eyebrow="What Guides Us" title="Simple principles that support better operations." align="center" /></Reveal>
          <div className="value-grid">
            {[
              [ShieldCheck, "Reliability", "Plan carefully, communicate clearly and follow through consistently."],
              [BadgeCheck, "Professional Standards", "Keep people, vehicles and service presentation ready for the job."],
              [Users, "People First", "Treat customers, partners and teams with respect at every stage."],
              [Compass, "Progress", "Improve systems, fleet readiness and service quality as the group grows."],
            ].map(([Icon, title, text], i) => (
              <Reveal key={title} delay={i * 60}><div className="value-card"><Icon /><h3>{title}</h3><p>{text}</p></div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container split-layout split-layout--reverse">
          <Reveal>
            <div className="image-card"><img src={images.fleetService} alt="Rush Track operations team supporting fleet readiness" /></div>
          </Reveal>
          <Reveal delay={100}>
            <div>
              <SectionHeading
                eyebrow="Connected by Service"
                title="The group works best when the right specialist team owns the job."
                text="That keeps responsibilities clear while allowing clients to move between services without starting from zero each time."
              />
              <p className="page-copy-links">
                Explore <Link href="/divisions">our divisions</Link>, see the <Link href="/industries">industries we support</Link>, or <Link href="/contact">contact Rush Track</Link> about a specific requirement.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
