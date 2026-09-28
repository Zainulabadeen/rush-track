import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "Rush Track Transport LLC | Dubai, UAE",
    template: "%s | Rush Track Transport LLC",
  },
  description:
    "Corporate transport, logistics, relocation and fleet services across the UAE.",
  icons: {
    icon: [
      { url: "/rush-track-favicon-v11.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/rush-track-favicon-v11.png",
    apple: [
      { url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
