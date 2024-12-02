import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "./_components/Footer";
import { Navigation } from "./_components/Navigation";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
