import type { Metadata } from "next";
import {
  Archivo,
  Big_Shoulders,
  Bricolage_Grotesque,
  Hanken_Grotesk,
  IBM_Plex_Mono,
  Newsreader,
  Saira_Condensed,
} from "next/font/google";
import "./globals.css";

/* Swiss Datasheet */
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
});

/* Industrial Noir */
const sairaCondensed = Saira_Condensed({
  variable: "--font-saira-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});
const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

/* Constructivist — "Big Shoulders" is a variable font (opsz 10-72); at large
   headline sizes the optical-size axis naturally renders the bolder
   "Display" cut, so no separate Big_Shoulders_Display family is needed. */
const bigShoulders = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FOOKE — Fräslösungen Made in Germany | Concept Explorer",
  description:
    "FOOKE GmbH: Portalfräsmaschinen, Rührreibschweißanlagen und Additive Fertigung für Aerospace, Defense, Rail und Automotive. Seit 1904.",
};

const fontVars = [
  bricolage.variable,
  plexMono.variable,
  newsreader.variable,
  sairaCondensed.variable,
  hankenGrotesk.variable,
  bigShoulders.variable,
  archivo.variable,
].join(" ");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${fontVars} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
