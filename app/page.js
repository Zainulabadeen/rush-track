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
  [ShieldCheck, "Reliable Operations", "Clear standards from planning to delivery"],
  [Truck, "Transport Ready", "Commercial movement across the UAE"],
  [Users, "Specialist Teams", "Moving, transport and fleet expertise"],
  [MapPinned, "UAE Coverage", "Support across key business locations"],
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
              <span className="rt-eyebrow">Transport · Logistics · Relocation</span>
              <h1>
                Reliable transport for <span>a stronger UAE.</span>
              </h1>
              <p>
                Rush Track connects commercial transport, moving and fleet support under one corporate group,
                giving businesses and communities a clearer way to keep people and goods moving.
              </p>
              <Link href="/divisions" className="rt-inline-link rt-inline-link--hero">
                Explore our divisions <ArrowRight size={17} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="rt-trust-wrap">
        <div className="container">
          <Reveal>
            <div className="rt-trust-card rt-trust-card--four">
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
              <img src={images.office} alt="Rush Track transport operations in the UAE" />
              <div className="rt-about-badge">
                <span>Built in the UAE</span>
                <strong>Connected by one standard</strong>
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="rt-about-copy">
              <span className="rt-eyebrow">About Us</span>
              <h2>One group. Three focused transport services.</h2>
              <p>
                Rush Track brings together <Link href="/divisions/transport-logistics">transport and logistics</Link>,
                dedicated <a href={site.rtMoversUrl} target="_blank" rel="noreferrer">moving and relocation through RT Movers</a>,
                and <Link href="/divisions/fleet-services">fleet services</Link>. Each team keeps its specialist focus while sharing the same approach to reliability and clear communication.
              </p>

              <div className="rt-about-points">
                <div>
                  <ShieldCheck />
                  <span><strong>Reliable by design.</strong> Practical standards that support consistent service.</span>
                </div>
                <div>
                  <Wrench />
                  <span><strong>Operationally practical.</strong> Solutions shaped around real transport requirements.</span>
                </div>
                <div>
                  <MapPinned />
                  <span><strong>Connected across the UAE.</strong> Specialist services within one corporate structure.</span>
                </div>
              </div>

              <Link href="/about" className="rt-inline-link">
                Learn more about Rush Track <ArrowRight size={16} />
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
                <h2>Specialist teams, connected where it matters.</h2>
              </div>
              <p>
                Moving, commercial transport and fleet support stay focused as individual services while working within one group.
              </p>
            </div>
          </Reveal>

          <div className="rt-division-grid">
            {divisions.map((item, index) => (
              <Reveal key={item.slug} delay={index * 70}>
                <article className="rt-division-card">
                  <div className="rt-division-card__media">
                    <img src={item.image} alt={item.title} />
                    {item.external && (
                      <div className="rt-division-brand-badge">
                        <img src={images.rtMoversLogo} alt="RT Movers" />
                      </div>
                    )}
                  </div>

                  <div className="rt-division-card__body">
                    {!item.external && <img className="rt-division-card__icon" src={item.icon} alt="" aria-hidden="true" />}
                    <span>{item.eyebrow}</span>
                    <h3>
                      {item.external ? (
                        <a href={site.rtMoversUrl} target="_blank" rel="noreferrer">{item.title}</a>
                      ) : (
                        <Link href={`/divisions/${item.slug}`}>{item.title}</Link>
                      )}
                    </h3>
                    <p>{item.description}</p>
                    {item.external ? (
                      <a href={site.rtMoversUrl} target="_blank" rel="noreferrer" className="rt-card-link">
                        Visit RT Movers UAE <ArrowRight size={16} />
                      </a>
                    ) : (
                      <Link href={`/divisions/${item.slug}`} className="rt-card-link">
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

      <section className="rt-fleet-section">
        <Reveal>
          <div className="rt-fleet-banner">
            <img src={images.fleet} alt="Rush Track fleet operating across the UAE" />
            <div className="rt-fleet-overlay" />
            <div className="container rt-fleet-copy-wrap">
              <div className="rt-fleet-copy">
                <span className="rt-eyebrow rt-eyebrow--light">Fleet & Capabilities</span>
                <h2>Prepared for the work before the journey starts.</h2>
                <p>
                  Vehicle readiness, planned maintenance and the right vehicle for the job support more dependable daily operations.
                </p>
                <Link href="/fleet" className="rt-inline-link rt-inline-link--light">
                  Explore our fleet approach <ArrowRight size={16} />
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
                <h2>Transport support shaped around the operation.</h2>
              </div>
              <p>
                Different sectors work on different schedules. Our role is to keep movement practical, coordinated and dependable.
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
          <p className="rt-section-followup">
            See how our <Link href="/divisions/transport-logistics">transport and logistics services</Link> and <Link href="/divisions/fleet-services">fleet support</Link> fit different operating environments.
          </p>
        </div>
      </section>

      <section className="rt-final-cta">
        <Reveal>
          <div className="rt-final-cta__card">
            <div className="container rt-final-cta__inner">
              <div>
                <span className="rt-eyebrow rt-eyebrow--light">Start with the requirement</span>
                <h2>Tell us what needs to move.</h2>
                <p>We’ll direct the enquiry to the Rush Track team best suited to the job.</p>
              </div>
              <Link href="/contact" className="rt-inline-link rt-inline-link--light">
                Contact Rush Track <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
