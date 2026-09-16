import { Building2, Factory, Globe2, Hotel, Landmark, ShoppingCart, Sparkles, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { images, industries } from "@/data/site";

export const metadata = { title: "Industries" };
const icons = [Building2, Building2, ShoppingCart, Building2, Landmark, Sparkles, Factory, Hotel];

export default function IndustriesPage() {
  return (
    <>
      <PageHero eyebrow="Industries" title="Flexible transport support for different operating environments." text="We adapt our service mix to the way each sector works, from scheduled business transport to project-based relocation and logistics." image={images.dubaiRoad} />
      <section className="section section--white">
        <div className="container">
          <Reveal><SectionHeading eyebrow="Sectors We Support" title="Different sectors. Different pressures. The same need for dependable movement." align="center" /></Reveal>
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
