import type { Viewport } from "next";
import "./globals.css";

import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#171717",
};

export const generateMetadata = async () => {
  return {
    metadataBase: new URL(process.env.BASE_URL as string),
    title: {
      default: "Pezhman Ghavami - Full-Stack Developer",
      template: "%s :: Pezhman Ghavami - Full-Stack Developer",
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
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body>{children}</body>
    </html>
  );
}
