import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Autoroll Delivery | Llantas a Domicilio en Guayaquil",
  description: "Venta de llantas, enllantaje, alineación y balanceo con envío gratis en Guayaquil. Rueda seguro con AutoRoll.",
  openGraph: {
    title: "Autoroll Delivery | Llantas a Domicilio en Guayaquil",
    description: "Servicios automotrices premium y venta de llantas a domicilio.",
    url: "https://autorolldelivery.com",
    siteName: "Autoroll Delivery",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_EC",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased font-inter`}
      >
        {children}
      </body>
    </html>
  );
}
