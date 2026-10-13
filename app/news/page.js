import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { images } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Rush Track Updates",
  description: "Operational updates and service insights from Rush Track transport, logistics and fleet teams in the UAE.",
  path: "/news",
  noIndex: true,
});

const posts = [
  ["Company", "Building a connected transport group in the UAE", "Rush Track is shaping its group around specialist divisions, shared standards and a simpler client experience.", images.office],
  ["Fleet", "Why fleet readiness supports reliable transport", "Maintenance planning, checks and practical vehicle allocation can reduce disruption and strengthen day-to-day reliability.", images.fleet],
  ["Logistics", "Keeping commercial transport coordination clear", "Straightforward planning helps businesses reduce hand-offs and keep movement easier to manage.", images.transport],
  ["People", "The teams behind dependable transport service", "Strong operations depend on coordination across drivers, movers, supervisors, planners and fleet support.", images.workers],
];

export default function NewsPage() {
  return (
    <>
      <PageHero eyebrow="Updates" title="From across Rush Track." text="Company updates, service developments and practical transport insights from our specialist teams." image={images.dubaiRoad} cta={false} />
      <section className="section section--white">
        <div className="container">
          <Reveal><SectionHeading eyebrow="Latest" title="From the group" text={<>For current service information, explore <Link href="/divisions">our divisions</Link> or <Link href="/contact">contact Rush Track</Link>.</>} /></Reveal>
          <div className="news-grid news-grid--archive">{posts.map(([tag, title, desc, image], i) => <Reveal key={title} delay={(i % 3) * 60}><article className="news-card"><Image src={image} alt={`${title} — Rush Track`} width={1200} height={675} sizes="(max-width: 860px) calc(100vw - 28px), 33vw" quality={74} /><div className="news-card__body"><span>{tag}</span><h2>{title}</h2><p>{desc}</p></div></article></Reveal>)}</div>
        </div>
      </section>
    </>
  );
}
