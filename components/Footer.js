import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid footer__grid--clean">
        <div className="footer__brand">
          <img src="/images/rush-track-logo-crop.png" alt="Rush Track Transport LLC" />
          <p>Transport, moving and fleet services connected under one UAE corporate group.</p>
          <a className="footer__external" href={site.rtMoversUrl} target="_blank" rel="noreferrer">
            RT Movers UAE <ArrowUpRight size={16} />
          </a>
        </div>

        <div>
          <h4>Company</h4>
          <div className="footer__links">
            <Link href="/about">About Us</Link>
            <Link href="/divisions">Our Divisions</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/fleet">Fleet</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h4>Divisions</h4>
          <div className="footer__links">
            <a href={site.rtMoversUrl} target="_blank" rel="noreferrer">RT Movers</a>
            <Link href="/divisions/transport-logistics">Transport & Logistics</Link>
            <Link href="/divisions/fleet-services">Fleet Services</Link>
          </div>
        </div>

        <div>
          <h4>Contact</h4>
          <div className="footer__contact">
            <span><MapPin size={17} /> {site.location}</span>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`}><Phone size={17} /> {site.phone}</a>
            <a href={`mailto:${site.email}`}><Mail size={17} /> {site.email}</a>
          </div>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Rush Track Transport LLC. All rights reserved.</span>
        <span>Moving possibilities forward.</span>
      </div>
    </footer>
  );
}
