import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import React from "react";
import LayoutClient from "./layout-client";
import { metadata } from './metadata';

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${GeistSans.className}`} suppressHydrationWarning>
      <body>
        <LayoutClient>{children}</LayoutClient>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
