import { images, site } from "@/data/site";

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}

export function pageMetadata({
  title,
  description,
  path = "/",
  image = "/og-image.jpg",
  noIndex = false,
}) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_AE",
      url: absoluteUrl(path),
      siteName: site.name,
      title,
      description,
      images: [
        {
          url: absoluteUrl(image),
          width: 1200,
          height: 630,
          alt: `${site.shortName} transport services in the UAE`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(image)],
    },
    robots: noIndex
      ? { index: false, follow: true }
      : {
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
}

export const defaultOgImage = images.hero;
