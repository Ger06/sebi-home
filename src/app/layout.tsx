import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Uehara Arquitectura — Buenos Aires",
    template: "%s | Uehara Arquitectura",
  },
  description:
    "Estudio de arquitectura con sede en Buenos Aires. Diseño moderno y minimalista para proyectos residenciales, comerciales y de inversión.",
  keywords: [
    "arquitectura",
    "arquitecto Buenos Aires",
    "diseño arquitectónico",
    "remodelaciones",
    "construcción",
    "inversión inmobiliaria",
  ],
  openGraph: {
    title: "Uehara Arquitectura",
    description:
      "Diseño moderno y minimalista en Buenos Aires. Proyectos, construcción y asesoramiento.",
    locale: "es_AR",
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
      lang="es"
      className={`${geistSans.variable} ${cormorant.variable}`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
