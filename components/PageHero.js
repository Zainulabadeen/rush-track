import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PageHero({ eyebrow, title, text, image, cta = true }) {
  return (
    <section className="page-hero" style={{ "--page-hero-image": `url(${image})` }}>
      <div className="page-hero__overlay" />
      <div className="container page-hero__inner">
        <div className="eyebrow eyebrow--light">{eyebrow}</div>
        <h1>{title}</h1>
        <p>{text}</p>
        {cta && (
          <Link href="/contact" className="btn btn--gold">
            Talk to Our Team <ArrowRight size={18} />
          </Link>
        )}
      </div>
    </section>
  );
}
