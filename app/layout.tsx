import type { Metadata } from "next";
import "./globals.css";
import ConsoleFrame from "@/components/ConsoleFrame";
import BackgroundEffect from "@/components/BackgroundEffect";

export const metadata: Metadata = {
  title: "KANSHO.TECH // Privacy & Network Security Hardware",
  description:
    "Kansho.tech — Specialized privacy and network security hardware tools. WiFi disruptors, signal locators, acoustic privacy emitters, IR countermeasures, and professional lockpick sets.",
  keywords:
    "privacy hardware, network security, WiFi disruptor, signal locator, lockpick, IR poncho, acoustic privacy, penetration testing tools",
  authors: [{ name: "Kansho.tech" }],
  robots: "index, follow",
  openGraph: {
    title: "KANSHO.TECH // Privacy & Network Security Hardware",
    description:
      "Specialized privacy and network security hardware tools for authorized use.",
    type: "website",
    url: "https://kansho.tech",
    siteName: "KANSHO.TECH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#F5F0E8" />
      </head>
      <body className="scanlines crt-vignette">
        <BackgroundEffect />
        <div className="relative z-10">
          <ConsoleFrame>{children}</ConsoleFrame>
        </div>
      </body>
    </html>
  );
}
