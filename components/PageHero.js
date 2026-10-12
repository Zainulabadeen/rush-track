import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PageHero({ eyebrow, title, text, image, cta = false, ctaText = "Get in Touch" }) {
  return (
    <section className="page-hero">
      <img className="page-hero__media" src={image} alt="" aria-hidden="true" loading="eager" fetchPriority="high" decoding="async" />
      <div className="page-hero__overlay" />
      <div className="container page-hero__inner">
        <div className="eyebrow eyebrow--light">{eyebrow}</div>
        <h1>{title}</h1>
        <p>{text}</p>
        {cta && (
          <Link href="/contact" className="btn btn--gold page-hero__cta">
            {ctaText} <ArrowRight size={17} />
          </Link>
        )}
      </div>
    </section>
  );
}
