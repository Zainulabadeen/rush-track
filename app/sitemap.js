import { site } from "@/data/site";

const routes = [
  "/",
  "/about",
  "/divisions",
  "/divisions/transport-logistics",
  "/divisions/fleet-services",
  "/industries",
  "/fleet",
  "/contact",
  "/sustainability",
];

export default function sitemap() {
  const now = new Date();
  return routes.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/contact" || path === "/divisions" ? 0.9 : 0.8,
  }));
}
