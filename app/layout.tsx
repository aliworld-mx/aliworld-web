import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "./_components/Footer";
import { Navigation } from "./_components/Navigation";
import { Analytics } from "@vercel/analytics/react"
import { getNavigation } from "./lib/getNavigation";
import Scroll from "./_components/Scroll";

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
        <script>
          {`!function (w, d, t) {
            w.TiktokAnalyticsObject = t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e] = function () { t.push([e].concat(Array.prototype.slice.call(arguments, 0))) }};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
          var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{ },ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{ },ttq._t[e]=+new Date,ttq._o=ttq._o||{ },ttq._o[e]=n||{ };n=document.createElement("script")
;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};


          ttq.load('CTCBCBBC77U39S6E0ET0');
          ttq.page();
}(window, document, 'ttq');`}
        </script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11526773841">
        </script>
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
