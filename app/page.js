import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Factory,
  HeartPulse,
  Landmark,
  MapPinned,
  PackageCheck,
  Plane,
  ShieldCheck,
  Ship,
  ShoppingBag,
  Truck,
  Users,
  Wrench,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { divisions, images, industries, site } from "@/data/site";

const industryIcons = [
  Building2,
  Landmark,
  ShoppingBag,
  Factory,
  PackageCheck,
  Plane,
  Ship,
  HeartPulse,
  Landmark,
  Users,
];

const trustItems = [
  [ShieldCheck, "Reliability First", "Consistent service standards"],
  [Truck, "Fleet Ready", "Prepared for daily operations"],
  [MapPinned, "UAE-Wide", "Coverage across key locations"],
  [Users, "Client Focused", "Built around real requirements"],
  [CheckCircle2, "Safety Led", "Disciplined operational approach"],
];

export default function HomePage() {
  return (
    <>
      <section className="rt-hero">
        <div className="rt-hero__media" aria-hidden="true">
          <img src={images.hero} alt="" />
        </div>
        <div className="rt-hero__veil" aria-hidden="true" />

        <div className="container rt-hero__inner">
          <Reveal>
            <div className="rt-hero__copy">
              <span className="rt-eyebrow">Trusted transport partner in the UAE</span>
              <h1>
                Reliable transport for <span>a stronger UAE.</span>
              </h1>
              <p>
                Rush Track Transport LLC connects transport, logistics, relocation and fleet support
                under one dependable corporate group—helping people, goods and businesses move with confidence.
              </p>
              <div className="rt-hero__actions">
                <Link href="/divisions" className="btn btn--gold rt-btn-large">
                  Explore Our Services <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="rt-trust-wrap">
        <div className="container">
          <Reveal>
            <div className="rt-trust-card">
              {trustItems.map(([Icon, title, sub]) => (
                <div className="rt-trust-item" key={title}>
                  <Icon aria-hidden="true" />
                  <div>
                    <strong>{title}</strong>
                    <span>{sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="rt-section rt-about-section">
        <div className="container rt-about-grid">
          <Reveal>
            <div className="rt-about-media">
              <img src={images.office} alt="Rush Track corporate transport operations in the UAE" />
              <div className="rt-about-badge">
                <span>Built in the UAE</span>
                <strong>For a moving world</strong>
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="rt-about-copy">
              <span className="rt-eyebrow">About Us</span>
              <h2>A trusted transport partner for a stronger tomorrow.</h2>
              <p>
                Rush Track brings specialist services together through a simple, coordinated structure.
                Our focus is dependable execution, clear communication and practical solutions shaped around
                the way businesses and communities move across the UAE.
              </p>

              <div className="rt-about-points">
                <div>
                  <ShieldCheck />
                  <span><strong>Reliable by design.</strong> Service standards built around consistency and accountability.</span>
                </div>
                <div>
                  <Wrench />
                  <span><strong>Operationally practical.</strong> Solutions planned around real-world transport requirements.</span>
                </div>
                <div>
                  <MapPinned />
                  <span><strong>Connected across the UAE.</strong> One group supporting multiple transport needs.</span>
                </div>
              </div>

              <Link href="/about" className="btn btn--gold rt-btn-large">
                Learn More About Us <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="rt-section rt-divisions-section">
        <div className="container">
          <Reveal>
            <div className="rt-section-head">
              <div>
                <span className="rt-eyebrow">Our Divisions</span>
                <h2>Specialist services. One connected group.</h2>
              </div>
              <p>
                Three focused divisions working under one corporate direction—so every service stays clear,
                specialised and easy to access.
              </p>
            </div>
          </Reveal>

          <div className="rt-division-grid">
            {divisions.map((item, index) => (
              <Reveal key={item.slug} delay={index * 70}>
                <article className="rt-division-card">
                  <div className="rt-division-card__media">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className="rt-division-card__body">
                    <img className="rt-division-card__icon" src={item.icon} alt="" aria-hidden="true" />
                    <span>{item.eyebrow}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    {item.external ? (
                      <a href={site.rtMoversUrl} target="_blank" rel="noreferrer" className="rt-card-link">
                        Visit RT Movers UAE <ArrowRight size={16} />
                      </a>
                    ) : (
                      <Link href={`/divisions/${item.slug}`} className="rt-card-link">
                        Learn More <ArrowRight size={16} />
                      </Link>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="rt-fleet-section">
        <Reveal>
          <div className="rt-fleet-banner">
            <img src={images.fleet} alt="Rush Track fleet operating across the UAE" />
            <div className="rt-fleet-overlay" />
            <div className="container rt-fleet-copy-wrap">
              <div className="rt-fleet-copy">
                <span className="rt-eyebrow rt-eyebrow--light">Our Fleet & Capabilities</span>
                <h2>A modern fleet, built for what’s next.</h2>
                <p>
                  Vehicle readiness, maintenance discipline and the right operational support for dependable movement across the UAE.
                </p>
                <Link href="/fleet" className="btn btn--gold rt-btn-large">
                  View Our Fleet <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="rt-section rt-industries-section">
        <div className="container">
          <Reveal>
            <div className="rt-section-head rt-section-head--industries">
              <div>
                <span className="rt-eyebrow">Industries We Serve</span>
                <h2>Supporting key industries across the UAE.</h2>
              </div>
              <p>
                Flexible transport and logistics support for organisations with different operational demands,
                schedules and service environments.
              </p>
            </div>
          </Reveal>

          <div className="rt-industry-grid">
            {industries.map(([name], index) => {
              const Icon = industryIcons[index] || Building2;
              return (
                <Reveal key={name} delay={index * 28}>
                  <div className="rt-industry-item">
                    <Icon aria-hidden="true" />
                    <span>{name}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="rt-final-cta">
        <Reveal>
          <div className="rt-final-cta__card">
            <div className="container rt-final-cta__inner">
              <div>
                <span className="rt-eyebrow rt-eyebrow--light">Ready to move forward?</span>
                <h2>Let’s move business forward, together.</h2>
                <p>Tell us what needs to move and we’ll connect you with the right Rush Track division.</p>
              </div>
              <Link href="/contact" className="btn btn--gold rt-btn-large">
                Get in Touch <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
