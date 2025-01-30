import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "./_components/Footer";
import { Navigation } from "./_components/Navigation";
import { Analytics } from "@vercel/analytics/react"
import { getNavigation } from "./lib/getNavigation";
import Scroll from "./_components/Scroll";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Aliworld - Paquetes de viaje a todo el mundo al mejor precio",
  description: "Encuentra los mejores paquetes de viaje a todo el mundo al mejor precio. ¡Reserva ya!",
  openGraph: {
    type: 'website',
    url: 'https://www.aliworld.mx',
    title: "Aliworld - Paquetes de viaje a todo el mundo al mejor precio",
    siteName: 'Aliworld',
    description: "Encuentra los mejores paquetes de viaje a todo el mundo al mejor precio. ¡Reserva ya!",
  },
  alternates: {
    canonical: 'https://www.aliworld.mx',
  },
  generator: 'Next.js',
  keywords: ['viajes', 'paquetes', 'cruceros', 'hoteles', 'reservaciones', 'aliworld'],
  robots: 'index, follow',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navigationData = await getNavigation();

  return (
    <html lang="es">
      <head>
        <Script id='google-analytics' async src="https://www.googletagmanager.com/gtag/js?id=AW-11526773841">
        </Script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-11526773841');`}
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Scroll />
        <Navigation navigationData={navigationData} />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
