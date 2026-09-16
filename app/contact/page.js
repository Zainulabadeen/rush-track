import { Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "./ContactForm";
import { images, site } from "@/data/site";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Tell us what needs to move." text="Speak with Rush Track about transport, logistics, warehousing, fleet support, partnerships or your next business move." image={images.hero} cta={false} />
      <section className="section section--white">
        <div className="container contact-layout">
          <Reveal>
            <div className="contact-info">
              <div className="eyebrow">Rush Track Transport LLC</div>
              <h2>Start with the requirement. We’ll help direct it to the right team.</h2>
              <p>For moving and relocation enquiries, you can also visit the dedicated RT Movers website.</p>
              <div className="contact-cards">
                <a href={`tel:${site.phone.replace(/\s/g, "")}`}><Phone /><span>Call us<strong>{site.phone}</strong></span></a>
                <a href={`mailto:${site.email}`}><Mail /><span>Email us<strong>{site.email}</strong></span></a>
                <div><MapPin /><span>Location<strong>{site.location}</strong></span></div>
              </div>
              <a href={site.rtMoversUrl} className="text-link" target="_blank" rel="noreferrer">Open RT Movers UAE →</a>
            </div>
          </Reveal>
          <Reveal delay={100}><ContactForm /></Reveal>
        </div>
      </section>
    </>
  );
}
