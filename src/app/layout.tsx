import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "José Eduardo Suastegui | Ingeniero en Sistemas",
    template: "%s | José Eduardo Suastegui",
  },
  description:
    "Portafolio de José Eduardo Suastegui Vicencio, Ingeniero en Sistemas Computacionales especializado en desarrollo web, interfaces y soporte técnico.",
  keywords: [
    "desarrollador web",
    "desarrollador de software",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Vue.js",
    "Firebase",
    "PHP",
    "MySQL",
    "GitHub",
    "portafolio",
    "Mexico",
  ],
  authors: [{ name: "José Eduardo Suastegui Vicencio" }],
  creator: "José Eduardo Suastegui Vicencio",
  openGraph: {
    type: "website",
    locale: "es_MX",
    title: "José Eduardo Suastegui | Ingeniero en Sistemas",
    description: "Desarrollo web, diseño de interfaces y soporte técnico.",
    siteName: "Portafolio de José Eduardo Suastegui",
    images: ["/images/profile/jose-eduardo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "José Eduardo Suastegui | Ingeniero en Sistemas",
    description: "Desarrollo web, diseño de interfaces y soporte técnico.",
    images: ["/images/profile/jose-eduardo.webp"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#10110f",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${display.variable} ${body.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
