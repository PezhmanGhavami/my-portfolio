import type { Viewport, Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";

export const viewport: Viewport = {
  themeColor: "#171717",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    metadataBase: new URL(process.env.BASE_URL as string),
    title: {
      default: "Pezhman Ghavami - Full-Stack Engineer",
      template: "%s :: Pezhman Ghavami - Full-Stack Engineer",
    },
    description: "Pezhman Ghavami's Portfolio website",
    manifest: "/manifest.json",
    icons: {
      icon: [
        "/favicon.ico",
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    },
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      className={cn(
        geistSans.variable,
        geistMono.variable,
        "scroll-smooth antialiased",
      )}
      lang="en"
    >
      <body>{children}</body>
    </html>
  );
}
