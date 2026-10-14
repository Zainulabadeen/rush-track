import Link from "next/link";
import { preload } from "react-dom";
import { ArrowRight } from "lucide-react";

export default function PageHero({ eyebrow, title, text, image, mobileImage, cta = false, ctaText = "Get in Touch" }) {
  if (mobileImage) preload(mobileImage, { as: "image", type: "image/webp", media: "(max-width: 700px)", fetchPriority: "high" });
  preload(image, { as: "image", type: "image/webp", media: "(min-width: 701px)", fetchPriority: "high" });

  return (
    <section className="page-hero">
      <picture className="page-hero__picture" aria-hidden="true">
        {mobileImage && <source media="(max-width: 700px)" srcSet={mobileImage} />}
        <img
          className="page-hero__media"
          src={image}
          alt=""
          width="1400"
          height="620"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
        />
      </picture>
      <div className="page-hero__overlay" aria-hidden="true" />
      <div className="container page-hero__inner">
        <div className="eyebrow eyebrow--light">{eyebrow}</div>
        <h1>{title}</h1>
        <p>{text}</p>
        {cta && (
          <Link href="/contact" className="btn btn--gold page-hero__cta">
            {ctaText} <ArrowRight size={17} aria-hidden="true" />
          </Link>
        )}
      </div>
    </section>
  );
}
