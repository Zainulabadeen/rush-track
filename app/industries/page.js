import Link from "next/link";
import { Building2, Factory, Hotel, Landmark, ShoppingCart, Sparkles, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { images, industries } from "@/data/site";

export const metadata = { title: "Industries" };
const icons = [Building2, Building2, ShoppingCart, Factory, Landmark, Sparkles, Factory, Hotel, Landmark, Users];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Transport support that fits the way each sector works."
        text="We adapt planning, vehicle choice and coordination to different operating environments without adding unnecessary complexity."
        image={images.hero}
        cta={false}
      />
      <section className="section section--white">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Sectors We Support"
              title="Different operating pressures. The same need for dependable movement."
              text={
                <>
                  Our <Link href="/divisions/transport-logistics">transport and logistics team</Link> supports commercial movement, while <Link href="/divisions/fleet-services">fleet services</Link> helps keep vehicle operations ready and dependable.
                </>
              }
              align="center"
            />
          </Reveal>
          <div className="industry-grid industry-grid--large">
            {industries.map(([name, desc], i) => {
              const Icon = icons[i] || Users;
              return <Reveal key={name} delay={i * 45}><div className="industry-card"><Icon /><h3>{name}</h3><p>{desc}</p></div></Reveal>;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
