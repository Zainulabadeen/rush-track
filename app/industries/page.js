import Link from "next/link";
import { Building2, Factory, Hotel, Landmark, ShoppingCart, Sparkles, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { images, industries } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Transport Solutions by Industry UAE",
  description: "Rush Track supports construction, real estate, retail, manufacturing, aviation, healthcare, government and other sectors across the UAE.",
  path: "/industries",
});

const icons = [Building2, Building2, ShoppingCart, Factory, Landmark, Sparkles, Factory, Hotel, Landmark, Users];

export default function IndustriesPage() {
  return (
    <>
      <PageHero eyebrow="Industries" title="Transport support that fits the way each sector works." text="We adapt planning, vehicle choice and coordination to different operating environments without adding unnecessary complexity." image={images.hero} cta={false} />
      <section className="section section--white">
        <div className="container">
          <Reveal><SectionHeading eyebrow="Sectors We Support" title="Different operating pressures. The same need for dependable movement." text={<>Our <Link href="/divisions/transport-logistics">transport and logistics team</Link> supports commercial movement, while <Link href="/divisions/fleet-services">fleet services</Link> helps keep vehicle operations ready and dependable.</>} align="center" /></Reveal>
          <div className="industry-grid industry-grid--large">{industries.map(([name, desc], i) => { const Icon = icons[i] || Users; return <Reveal key={name} delay={i * 45}><div className="industry-card"><Icon /><h3>{name}</h3><p>{desc}</p></div></Reveal>; })}</div>
          <p className="page-copy-links industries-followup">For project-specific requirements, review <Link href="/fleet">fleet readiness</Link>, explore <Link href="/divisions">all Rush Track divisions</Link>, or <Link href="/contact">contact the team</Link>.</p>
        </div>
      </section>
    </>
  );
}
