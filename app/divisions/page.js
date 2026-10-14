import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { divisions, images, pageImages, site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Transport, Moving & Fleet Divisions",
  description: "Explore Rush Track divisions for commercial transport and logistics, RT Movers relocation, and fleet support across the UAE.",
  path: "/divisions",
});

export default function DivisionsPage() {
  return (
    <>
      <PageHero eyebrow="Our Divisions" title="Three focused services. One connected group." text="Choose the specialist team that matches the requirement, from moving and commercial transport to fleet support." image={pageImages.transport.desktop} mobileImage={pageImages.transport.mobile} cta={false} />
      <section className="section section--white">
        <div className="container">
          <Reveal><SectionHeading eyebrow="Specialist Services" title="A clear role for every division." text="Each division keeps its own operational focus while sharing Rush Track standards for communication, reliability and service quality." align="center" /></Reveal>
          <div className="division-list">
            {divisions.map((item, i) => (
              <Reveal key={item.slug} delay={i * 70}>
                <article className={`division-row ${item.external ? "division-row--rtmovers" : ""}`}>
                  <div className="division-row__media">
                    <img src={item.image} srcSet={`${item.imageSmall} 640w, ${item.image} 960w`} sizes="(max-width: 900px) calc(100vw - 44px), 48vw" alt={`${item.title} services from Rush Track`} width="960" height="640" loading="lazy" decoding="async" />
                    {item.external && <img className="division-row__brand" src={images.rtMoversLogo} alt="RT Movers logo" width="320" height="320" loading="lazy" decoding="async" />}
                  </div>
                  <div>
                    <span className="eyebrow">{item.eyebrow}</span>
                    <h2>{item.external ? <a href={item.href} target="_blank" rel="noopener noreferrer">{item.title}</a> : <Link href={`/divisions/${item.slug}`}>{item.title}</Link>}</h2>
                    <p>{item.description}</p>
                    {item.external ? (
                      <div className="rtmovers-contact-line">
                        <span><Phone size={16} /> <a href={`tel:${site.rtMoversPhone.replace(/\s/g, "")}`}>{site.rtMoversPhone}</a></span>
                        <span><Mail size={16} /> <a href={`mailto:${site.rtMoversEmail}`}>{site.rtMoversEmail}</a></span>
                        <span><MapPin size={16} /> {site.rtMoversAddress}</span>
                        <a className="text-link" href={site.rtMoversUrl} target="_blank" rel="noopener noreferrer">Visit RT Movers for a moving quote <ArrowRight size={16} /></a>
                      </div>
                    ) : <Link href={`/divisions/${item.slug}`} className="text-link">Read about {item.title.toLowerCase()} <ArrowRight size={16} /></Link>}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="page-copy-links division-followup">Not sure which team fits the job? Review the <Link href="/industries">industries we support</Link>, see <Link href="/fleet">fleet readiness</Link>, or <Link href="/contact">send us the requirement</Link>.</p>
        </div>
      </section>
    </>
  );
}
