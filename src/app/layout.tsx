import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistSans } from "geist/font/sans";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import React from "react";
import LayoutClient from "./layout-client";
import { metadata } from "./metadata";

export { metadata };

const notoSans = Noto_Sans({
  weight: ["400", "700"],
  subsets: [
    "latin",
    "latin-ext",
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "greek-ext",
    "vietnamese",
  ],
  display: "swap",
  variable: "--font-sans",
  preload: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${GeistSans.variable} ${notoSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${notoSans.className}`}>
        <LayoutClient>{children}</LayoutClient>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
