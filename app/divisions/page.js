import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { divisions, images } from "@/data/site";

export const metadata = { title: "Our Divisions" };

export default function DivisionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Divisions"
        title="Specialist businesses connected by one corporate standard."
        text="Rush Track brings focused services together so clients can access the right expertise without fragmenting their transport needs."
        image={images.port}
      />
      <section className="section section--white">
        <div className="container">
          <Reveal><SectionHeading eyebrow="Group Structure" title="Choose the specialist service that fits the job." text="Each division has a clear operational focus, backed by the wider Rush Track group." align="center" /></Reveal>
          <div className="division-list">
            {divisions.map((item, i) => (
              <Reveal key={item.slug} delay={i * 70}>
                <article className="division-row">
                  <img src={item.image} alt={item.title} />
                  <div>
                    <span className="eyebrow">{item.eyebrow}</span>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    {item.external ? (
                      <a href={item.href} target="_blank" rel="noreferrer" className="btn btn--gold">Open RT Movers UAE <ArrowRight size={18} /></a>
                    ) : (
                      <Link href={`/divisions/${item.slug}`} className="btn btn--outline">Explore Division <ArrowRight size={18} /></Link>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
