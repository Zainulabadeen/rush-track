import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "./ContactForm";
import { images, site } from "@/data/site";

import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({
  title: "Contact Rush Track Transport LLC | Dubai, UAE",
  description:
    "Contact Rush Track Transport LLC for commercial transport, logistics, fleet support, moving and relocation enquiries across Dubai and the UAE.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Rush Track"
        title="Tell us what you need to move."
        text="Speak with Rush Track about commercial transport, logistics, fleet support, moving and relocation, partnerships or another operational requirement. We’ll direct your enquiry to the right team."
        image={images.office}
        cta={false}
      />

      <section className="section section--white quote-contact-section">
        <div className="container contact-layout quote-contact-layout">
          <Reveal>
            <div className="contact-info quote-contact-info">
              <div className="eyebrow">Rush Track Transport LLC</div>
              <h2>Start with the requirement. We’ll direct it to the right team.</h2>
              <p>
                Rush Track connects commercial transport, logistics, fleet support and moving services under one UAE corporate group. Share what you need and our team will route the enquiry to the most relevant division.
              </p>

              <div className="contact-cards">
                <a href={`tel:${site.phone.replace(/\s/g, "")}`}>
                  <Phone />
                  <span>
                    Call Rush Track
                    <strong>{site.phone}</strong>
                  </span>
                </a>

                <a
                  href={`https://wa.me/${site.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle />
                  <span>
                    WhatsApp
                    <strong>Send us an enquiry</strong>
                  </span>
                </a>

                <a href={`mailto:${site.email}`}>
                  <Mail />
                  <span>
                    Email
                    <strong>{site.email}</strong>
                  </span>
                </a>

                <div>
                  <MapPin />
                  <span>
                    Dubai, UAE
                    <strong>{site.location}</strong>
                  </span>
                </div>
              </div>

              <p className="page-copy-links quote-contact-note">
                Looking for a specific service? Explore our{" "}
                <Link href="/divisions/transport-logistics">transport and logistics</Link>{" "}
                or <Link href="/divisions/fleet-services">fleet services</Link>. For home, villa,
                apartment or office relocation, our dedicated{" "}
                <a href={site.rtMoversUrl} target="_blank" rel="noopener noreferrer">
                  RT Movers division
                </a>{" "}
                handles moving enquiries across the UAE.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
