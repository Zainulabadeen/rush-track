import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { divisions, images, site } from "@/data/site";

export const metadata = { title: "Our Divisions" };

export default function DivisionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Divisions"
        title="Three focused services. One connected group."
        text="Choose the specialist team that matches the requirement, from moving and commercial transport to fleet support."
        image={images.transport}
        cta={false}
      />
      <section className="section section--white">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Specialist Services"
              title="A clear role for every division."
              text="Each division keeps its own operational focus while sharing Rush Track standards for communication, reliability and service quality."
              align="center"
            />
          </Reveal>
          <div className="division-list">
            {divisions.map((item, i) => (
              <Reveal key={item.slug} delay={i * 70}>
                <article className={`division-row ${item.external ? "division-row--rtmovers" : ""}`}>
                  <div className="division-row__media">
                    <img src={item.image} alt={item.title} />
                    {item.external && <img className="division-row__brand" src={images.rtMoversLogo} alt="RT Movers" />}
                  </div>
                  <div>
                    <span className="eyebrow">{item.eyebrow}</span>
                    <h2>
                      {item.external ? (
                        <a href={item.href} target="_blank" rel="noreferrer">{item.title}</a>
                      ) : (
                        <Link href={`/divisions/${item.slug}`}>{item.title}</Link>
                      )}
                    </h2>
                    <p>{item.description}</p>

                    {item.external ? (
                      <div className="rtmovers-contact-line">
                        <span><Phone size={16} /> <a href={`tel:${site.rtMoversPhone.replace(/\s/g, "")}`}>{site.rtMoversPhone}</a></span>
                        <span><Mail size={16} /> <a href={`mailto:${site.rtMoversEmail}`}>{site.rtMoversEmail}</a></span>
                        <span><MapPin size={16} /> {site.rtMoversAddress}</span>
                        <a className="text-link" href={site.rtMoversUrl} target="_blank" rel="noreferrer">Visit RT Movers for a moving quote <ArrowRight size={16} /></a>
                      </div>
                    ) : (
                      <Link href={`/divisions/${item.slug}`} className="text-link">
                        Read about {item.title.toLowerCase()} <ArrowRight size={16} />
                      </Link>
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
