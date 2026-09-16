"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { site } from "@/data/site";

const nav = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Our Divisions", "/divisions"],
  ["Industries", "/industries"],
  ["Fleet", "/fleet"],
  ["Contact", "/contact"],
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__left">
            <span><MapPin size={15} /> {site.location}</span>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`}><Phone size={15} /> {site.phone}</a>
            <a href={`mailto:${site.email}`}><Mail size={15} /> {site.email}</a>
          </div>

        </div>
      </div>

      <header className="site-header">
        <div className="container header__inner">
          <Link href="/" className="brand" aria-label="Rush Track home">
            <img src="/images/rush-track-logo-crop.png" alt="Rush Track Transport LLC" />
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {nav.map(([label, href]) => {
              const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <Link key={href} href={href} className={active ? "active" : ""}>
                  {label}
                  {(label === "Our Divisions" || label === "Industries") && <ChevronDown size={14} />}
                </Link>
              );
            })}
          </nav>

          <Link href="/contact" className="btn btn--gold header-cta">
            Get in Touch <ArrowUpRight size={17} />
          </Link>

          <button className="menu-button" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu />
          </button>
        </div>
      </header>

      <div className={`mobile-panel ${open ? "open" : ""}`}>
        <div className="mobile-panel__head">
          <img src="/images/rush-track-logo-crop.png" alt="Rush Track" />
          <button onClick={() => setOpen(false)} aria-label="Close menu"><X /></button>
        </div>
        <nav>
          {nav.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
          ))}
          <a href={site.rtMoversUrl} target="_blank" rel="noreferrer">
            Visit RT Movers <ArrowUpRight size={16} />
          </a>
        </nav>
        <div className="mobile-panel__contact">
          <span>{site.phone}</span>
          <span>{site.email}</span>
        </div>
      </div>
      <div className={`mobile-backdrop ${open ? "open" : ""}`} onClick={() => setOpen(false)} />
    </>
  );
}
