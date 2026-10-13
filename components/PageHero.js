import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PageHero({ eyebrow, title, text, image, cta = false, ctaText = "Get in Touch" }) {
  return (
    <section className="page-hero">
      <Image className="page-hero__media" src={image} alt="" aria-hidden="true" fill priority sizes="(max-width: 640px) calc(100vw - 28px), (max-width: 900px) calc(100vw - 40px), 1680px" quality={78} />
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
