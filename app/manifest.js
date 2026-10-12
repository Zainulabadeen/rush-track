export default function manifest() {
  return {
    name: "Rush Track",
    short_name: "Rush Track",
    description: "Transport, logistics, moving and fleet support across the UAE.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#061b35",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
