import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src="/images/rush-track-logo-crop.png" alt="Rush Track Transport LLC" />
          <p>
            Corporate transport, logistics and relocation solutions connecting people,
            businesses and communities across the UAE.
          </p>
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
            <Link href="/sustainability">Sustainability</Link>
          </div>
        </div>

        <div>
          <h4>Explore</h4>
          <div className="footer__links">
            <Link href="/news">News</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/contact?topic=careers">Careers</Link>
            <Link href="/contact?topic=partnership">Partner With Us</Link>
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
        <span>Dubai, United Arab Emirates</span>
      </div>
    </footer>
  );
}
