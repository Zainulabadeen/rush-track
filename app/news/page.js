import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { images, pageImages } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Rush Track Updates",
  description: "Operational updates and service insights from Rush Track transport, logistics and fleet teams in the UAE.",
  path: "/news",
  noIndex: true,
});

const posts = [
  ["Company", "Building a connected transport group in the UAE", "Rush Track is shaping its group around specialist divisions, shared standards and a simpler client experience.", images.office, images.officeSmall],
  ["Fleet", "Why fleet readiness supports reliable transport", "Maintenance planning, checks and practical vehicle allocation can reduce disruption and strengthen day-to-day reliability.", images.fleetService, images.fleetServiceSmall],
  ["Logistics", "Keeping commercial transport coordination clear", "Straightforward planning helps businesses reduce hand-offs and keep movement easier to manage.", images.transport, images.transportSmall],
  ["People", "The teams behind dependable transport service", "Strong operations depend on coordination across drivers, movers, supervisors, planners and fleet support.", images.workers, images.workersSmall],
];

export default function NewsPage() {
  return (
    <>
      <PageHero eyebrow="Updates" title="From across Rush Track." text="Company updates, service developments and practical transport insights from our specialist teams." image={pageImages.hero.desktop} mobileImage={pageImages.hero.mobile} cta={false} />
      <section className="section section--white">
        <div className="container">
          <Reveal><SectionHeading eyebrow="Latest" title="From the group" text={<>For current service information, explore <Link href="/divisions">our divisions</Link> or <Link href="/contact">contact Rush Track</Link>.</>} /></Reveal>
          <div className="news-grid news-grid--archive">{posts.map(([tag, title, desc, image, imageSmall]) => <Reveal key={title}><article className="news-card"><img src={image} srcSet={`${imageSmall} 640w, ${image} 960w`} sizes="(max-width: 860px) calc(100vw - 28px), 33vw" alt={`${title} — Rush Track`} width="960" height="640" loading="lazy" decoding="async" /><div className="news-card__body"><span>{tag}</span><h2>{title}</h2><p>{desc}</p></div></article></Reveal>)}</div>
        </div>
      </section>
    </>
  );
}
