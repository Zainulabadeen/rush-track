import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Rush Track | Transport, Logistics & Fleet Services UAE",
    template: "%s | Rush Track",
  },
  description:
    "Rush Track connects commercial transport, logistics, RT Movers relocation and fleet support across Dubai and the UAE.",
  applicationName: "Rush Track",
  authors: [{ name: "Rush Track" }],
  creator: "Rush Track",
  publisher: "Rush Track Transport LLC",
  category: "Transport and Logistics",
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: "Rush Track",
    title: "Rush Track | Transport, Logistics & Fleet Services UAE",
    description:
      "Commercial transport, logistics, moving and fleet support connected under one UAE transport group.",
    url: site.url,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Rush Track transport services in the UAE" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rush Track | Transport, Logistics & Fleet Services UAE",
    description: "Commercial transport, moving and fleet support across the UAE.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "4dWBuL7peLjHU5Dj2SXfe54RW4d_OsMBReqf-wtITFA",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#061b35",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  alternateName: site.shortName,
  url: site.url,
  logo: `${site.url}${site.logo}`,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Citadel Tower, Business Bay",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  areaServed: { "@type": "Country", name: "United Arab Emirates" },
  subOrganization: {
    "@type": "Organization",
    name: "RT Movers UAE",
    url: site.rtMoversUrl,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.shortName,
  publisher: { "@id": `${site.url}/#organization` },
  inLanguage: "en-AE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AE" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QNJMDF5J8G"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QNJMDF5J8G');
          `}
        </Script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </body>
    </html>
  );
}
