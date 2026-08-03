import type { Metadata } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sierra Magna | Ropa premium en tallas grandes",
  description:
    "Sierra Magna: ropa elegante, moderna y de calidad en tallas grandes. Presencia mexicana con estándar premium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bebasNeue.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-sm-black font-sans text-sm-white">
        {children}
      </body>
    </html>
  );
}
