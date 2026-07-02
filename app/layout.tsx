import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import FloatingNav from "@/components/FloatingNav";
import RouteTransition from "@/components/RouteTransition";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic", "normal"],
  variable: "--font-fraunces",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sumesh Pradhan — biology, ai, web",
  description:
    "Sumesh Pradhan. Final-year CS student. Building at the edge of biology, AI, and the web.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plexMono.variable}`}>
      <body className="noise relative h-dvh w-screen bg-ink text-parchment font-mono antialiased">
        <FloatingNav />
        <RouteTransition>{children}</RouteTransition>
      </body>
    </html>
  );
}
