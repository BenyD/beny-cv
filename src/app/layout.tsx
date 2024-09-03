import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistSans } from "geist/font/sans";
import { Pacifico } from "next/font/google";
import "./globals.css";
import React from "react";
import LayoutClient from "./layout-client";
import { metadata } from "./metadata";

export { metadata };

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${GeistSans.variable} ${pacifico.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={GeistSans.className}>
        <LayoutClient>{children}</LayoutClient>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
