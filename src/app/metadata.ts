import { RESUME_DATA } from "@/data/resume-data";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
    template: `%s | ${RESUME_DATA.name}`,
  },
  description: RESUME_DATA.summary,
  keywords: [...RESUME_DATA.skills, ...RESUME_DATA.languages, "resume", "cv", "portfolio"],
  authors: [{ name: RESUME_DATA.name, url: RESUME_DATA.personalWebsiteUrl }],
  creator: RESUME_DATA.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
    description: RESUME_DATA.summary,
    siteName: `${RESUME_DATA.name}'s Portfolio`,
    images: [
      {
        url: `${baseUrl}/avatar.jpg`,
        width: 800,
        height: 600,
        alt: `${RESUME_DATA.name}'s avatar`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
    description: RESUME_DATA.summary,
    images: [`${baseUrl}/avatar.jpg`],
    creator: "@YourTwitterHandle", // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${baseUrl}/site.webmanifest`,
  verification: {
    google: "your-google-site-verification-code", // Replace with your Google verification code
    yandex: "your-yandex-verification-code", // Replace with your Yandex verification code
    // Remove the bing property
  },
};