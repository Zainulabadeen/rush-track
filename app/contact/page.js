import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "./ContactForm";
import { images, site } from "@/data/site";

export const metadata = { title: "Moving Quote & Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Moving & Relocation"
        title="Tell RT Movers about your move."
        text="Moving and relocation enquiries are handled by RT Movers UAE, our dedicated moving division. Share the move details and continue directly with their team."
        image={images.workers}
        cta={false}
      />

      <section className="section section--white quote-contact-section">
        <div className="container contact-layout quote-contact-layout">
          <Reveal>
            <div className="contact-info quote-contact-info">
              <div className="eyebrow">RT Movers UAE</div>
              <h2>A clearer way to start your move.</h2>
              <p>
                RT Movers handles home, apartment, villa and office relocation across the UAE, together with packing, furniture handling and related moving support.
              </p>

              <div className="contact-cards">
                <a href={`tel:${site.rtMoversPhone.replace(/\s/g, "")}`}>
                  <Phone /><span>Call RT Movers<strong>{site.rtMoversPhone}</strong></span>
                </a>
                <a href={`https://wa.me/${site.rtMoversPhone.replace(/\D/g, "")}`} target="_blank" rel="noreferrer">
                  <MessageCircle /><span>WhatsApp<strong>Instant moving enquiry</strong></span>
                </a>
                <a href={`mailto:${site.rtMoversEmail}`}>
                  <Mail /><span>Email<strong>{site.rtMoversEmail}</strong></span>
                </a>
                <div><MapPin /><span>Dubai office<strong>{site.rtMoversAddress}</strong></span></div>
              </div>

              <p className="page-copy-links quote-contact-note">
                Need something other than a move? Read about our <Link href="/divisions/transport-logistics">commercial transport and logistics</Link> or <Link href="/divisions/fleet-services">fleet services</Link>. For a direct moving enquiry, email <a href={`mailto:${site.rtMoversEmail}`}>{site.rtMoversEmail}</a>.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}><ContactForm /></Reveal>
        </div>
      </section>
    </>
  );
}
