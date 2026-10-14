import Link from "next/link";
import {
  ArrowUpRight,
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { images, site } from "@/data/site";

const nav = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Our Divisions", "/divisions"],
  ["Industries", "/industries"],
  ["Fleet", "/fleet"],
  ["Contact", "/contact"],
];

export default function Header() {
  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__left">
            <span><MapPin size={15} aria-hidden="true" /> {site.location}</span>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`}><Phone size={15} aria-hidden="true" /> {site.phone}</a>
            <a href={`mailto:${site.email}`}><Mail size={15} aria-hidden="true" /> {site.email}</a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container header__inner">
          <Link href="/" className="brand" aria-label="Rush Track home">
            <img
              src={images.rushLogoSmall}
              srcSet={`${images.rushLogoSmall} 400w, ${images.rushLogo} 640w`}
              sizes="(max-width: 640px) 198px, (max-width: 980px) 235px, 286px"
              alt="Rush Track"
              width="640"
              height="100"
              loading="eager"
              decoding="async"
            />
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {nav.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
                {(label === "Our Divisions" || label === "Industries") && <ChevronDown size={14} aria-hidden="true" />}
              </Link>
            ))}
          </nav>

          <Link href="/contact" className="btn btn--gold header-cta">
            Get in Touch <ArrowUpRight size={17} aria-hidden="true" />
          </Link>

          <details className="mobile-menu">
            <summary className="menu-button" aria-label="Open navigation menu">
              <Menu className="menu-icon-open" aria-hidden="true" />
              <X className="menu-icon-close" aria-hidden="true" />
              <span className="sr-only">Menu</span>
            </summary>
            <div className="mobile-backdrop" aria-hidden="true" />
            <div className="mobile-panel">
              <div className="mobile-panel__head">
                <img src={images.rushLogoSmall} alt="Rush Track" width="400" height="63" loading="eager" decoding="async" />
              </div>
              <nav aria-label="Mobile navigation">
                {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
                <a href={site.rtMoversUrl} target="_blank" rel="noopener noreferrer">
                  Visit RT Movers <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </nav>
              <div className="mobile-panel__contact">
                <span>{site.phone}</span>
                <span>{site.email}</span>
              </div>
            </div>
          </details>
        </div>
      </header>
    </>
  );
}
