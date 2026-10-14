import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { images, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid footer__grid--clean">
        <div className="footer__brand">
          <img
            src={images.rushLogoSmall}
            srcSet={`${images.rushLogoSmall} 400w, ${images.rushLogo} 640w`}
            sizes="280px"
            alt="Rush Track"
            width="640"
            height="100"
            loading="lazy"
            decoding="async"
          />
          <p>Transport, moving and fleet services connected under one UAE corporate group.</p>
          <a className="footer__external" href={site.rtMoversUrl} target="_blank" rel="noopener noreferrer">
            RT Movers UAE <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div>
          <p className="footer__heading">Company</p>
          <div className="footer__links">
            <Link href="/about">About Us</Link>
            <Link href="/divisions">Our Divisions</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/fleet">Fleet</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <p className="footer__heading">Divisions</p>
          <div className="footer__links">
            <a href={site.rtMoversUrl} target="_blank" rel="noopener noreferrer">RT Movers</a>
            <Link href="/divisions/transport-logistics">Transport & Logistics</Link>
            <Link href="/divisions/fleet-services">Fleet Services</Link>
          </div>
        </div>

        <div>
          <p className="footer__heading">Contact</p>
          <div className="footer__contact">
            <span><MapPin size={17} aria-hidden="true" /> {site.location}</span>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`}><Phone size={17} aria-hidden="true" /> {site.phone}</a>
            <a href={`mailto:${site.email}`}><Mail size={17} aria-hidden="true" /> {site.email}</a>
          </div>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Rush Track Transport LLC. All rights reserved.</span>
        <div className="footer__legal">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
