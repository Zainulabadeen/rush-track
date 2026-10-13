import Link from "next/link";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Notice",
  description: "Privacy information for visitors who contact Rush Track Transport LLC through rushtrack.ae.",
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <section className="section section--white legal-page">
      <div className="container legal-page__inner">
        <span className="eyebrow">Privacy</span>
        <h1>Privacy Notice</h1>
        <p>This notice explains the information submitted through rushtrack.ae and how it is used to respond to enquiries.</p>
        <h2>Information you provide</h2>
        <p>The contact form may collect your name, company, email address, phone number, selected service, location and the message you choose to send.</p>
        <h2>How the information is used</h2>
        <p>Enquiry details are used to respond to your request and direct it to the relevant Rush Track or RT Movers service team. The website form is processed through the FormSubmit service before the message reaches the configured business email inbox.</p>
        <h2>Website measurement</h2>
        <p>Rush Track uses Google Analytics to understand website usage and improve the site. Analytics data may include information such as pages viewed, device or browser information and general interaction data.</p>
        <h2>Contact</h2>
        <p>For a privacy-related question about information submitted through this website, contact <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
        <p><Link href="/contact">Return to Contact</Link></p>
      </div>
    </section>
  );
}
