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
