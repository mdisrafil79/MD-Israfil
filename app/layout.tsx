import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://mdisrafil79.netlify.app";

const siteTitle = "MD Israfil — MERN-Stack Web Developer";
const siteDescription =
  "Portfolio of MD Israfil — a MERN-Stack web developer building responsive, " +
  "user-focused web applications with React, Next.js, Node.js, Express.js and MongoDB.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | MD Israfil",
  },
  description: siteDescription,
  keywords: [
    "MD Israfil",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Full-Stack Web Developer",
    "Web Developer Portfolio",
    "Node.js",
    "Express.js",
    "MongoDB",
  ],
  authors: [{ name: "MD Israfil" }],
  creator: "MD Israfil",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "MD Israfil",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/images/profile.png",
        width: 1074,
        height: 1278,
        alt: "MD Israfil — MERN-Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/profile.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0e1a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
