import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lock Event",
  description:
    "Location de pochettes anti-photo avec cadenas antivol pour événements B2B confidentiels. Agences événementielles, marques de luxe, entreprises. Basé à Marseille, service national.",
  keywords: [
    "pochette anti-photo événement",
    "confidentialité événement",
    "location pochette téléphone événement",
    "anti-photo événement",
    "protection visuelle conférence",
    "yondr france",
    "pochette antivol téléphone",
    "event phone pouch rental",
    "camera free event",
    "confidential event security",
    "phone pouch event france",
  ],
  openGraph: {
    title: "Lock Event",
    description: "Vos événements restent secrets. Pochettes anti-photo avec cadenas antivol pour B2B.",
    siteName: "Lock Event",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#080808] text-[#F5F0E8]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
