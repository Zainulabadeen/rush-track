import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { images } from "@/data/site";

export const metadata = { title: "News" };

const posts = [
  ["Company", "Building a connected corporate transport platform in the UAE", "Rush Track is shaping its group identity around specialist divisions, shared standards and a simpler client experience.", images.office],
  ["Fleet", "Why fleet readiness is central to reliable transport operations", "Maintenance planning, checks and smart vehicle allocation can reduce disruption and strengthen day-to-day reliability.", images.fleet],
  ["Logistics", "Bringing transport and storage into one operational workflow", "Integrated planning can help businesses reduce hand-offs and simplify coordination between movement and storage.", images.warehouse],
  ["People", "The teams behind dependable transport service", "Strong transport operations depend on coordination across drivers, movers, supervisors, planners and fleet support.", images.workers],
  ["Industry", "Supporting business movement across a fast-changing UAE", "Different industries need different operating models, but clear communication and reliable execution remain constant.", images.dubaiRoad],
  ["Sustainability", "Practical efficiency improvements that support responsible growth", "Route planning, vehicle care and smarter handling are useful starting points for more efficient transport operations.", images.port],
];

export default function NewsPage() {
  return (
    <>
      <PageHero eyebrow="News & Insights" title="Updates from across Rush Track." text="Company news, service developments and operational insights from our transport group and specialist divisions." image={images.dubaiRoad} cta={false} />
      <section className="section section--white">
        <div className="container">
          <Reveal><SectionHeading eyebrow="Latest" title="From the group" /></Reveal>
          <div className="news-grid news-grid--archive">
            {posts.map(([tag, title, desc, image], i) => (
              <Reveal key={title} delay={(i % 3) * 60}>
                <article className="news-card">
                  <img src={image} alt="" />
                  <div className="news-card__body"><span>{tag}</span><h3>{title}</h3><p>{desc}</p></div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
