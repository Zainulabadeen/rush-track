import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Website Terms",
  description: "Website terms for rushtrack.ae, the corporate website of Rush Track Transport LLC.",
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <section className="section section--white legal-page">
      <div className="container legal-page__inner">
        <span className="eyebrow">Website Terms</span>
        <h1>Terms of Use</h1>
        <p>rushtrack.ae provides general information about Rush Track Transport LLC, its divisions and its services.</p>
        <h2>Service enquiries</h2>
        <p>Submitting an enquiry does not by itself create a service booking or contract. Service scope, availability, timing and commercial terms are confirmed separately with the relevant team.</p>
        <h2>Website information</h2>
        <p>We aim to keep website information clear and current, but operational details may change. Confirm time-sensitive requirements directly with Rush Track before relying on them for a booking or project.</p>
        <h2>External services</h2>
        <p>The website may link to RT Movers and other external services. External sites operate under their own terms and privacy practices.</p>
        <p><Link href="/contact">Contact Rush Track</Link> for a specific service requirement.</p>
      </div>
    </section>
  );
}
