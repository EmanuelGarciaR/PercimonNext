import type { Metadata } from "next";
import Navbar from "@components/layout/Navbar/Navbar";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Percimon Clon",
  description: "A clone of the Percimon website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} ${openSans.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <footer>{children}</footer>
      </body>
    </html>
  );
}
