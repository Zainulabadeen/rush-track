import Link from "next/link";

export const metadata = { title: "Page Not Found", robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <section className="section section--white">
      <div className="container not-found-page">
        <span className="eyebrow">404</span>
        <h1>That page is not on this route.</h1>
        <p>Return to Rush Track or choose one of our core transport services.</p>
        <div className="not-found-links">
          <Link href="/" className="btn btn--gold">Back to Home</Link>
          <Link href="/divisions">Explore our divisions</Link>
        </div>
      </div>
    </section>
  );
}
