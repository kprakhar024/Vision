import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const siteUrl = "https://visionstudio.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vision — Website Development & Digital Solutions for Small Businesses in India",
    template: "%s | Vision Studio",
  },
  description:
    "Vision helps cafes, clinics, salons, and small businesses across India grow online with modern, affordable website development, redesigns, and digital solutions.",
  keywords: [
    "website development for small businesses in India",
    "website designers for restaurants and cafes",
    "clinic and dental website development",
    "affordable business website development",
    "website redesign services",
  ],
  openGraph: {
    title: "Vision — Modern Websites for Small Businesses",
    description:
      "We build modern websites and digital solutions that help small businesses stand out, connect with customers, and grow online.",
    url: siteUrl,
    siteName: "Vision",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision — Modern Websites for Small Businesses",
    description:
      "We build modern websites and digital solutions that help small businesses stand out, connect with customers, and grow online.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="bg-ink-950 font-sans text-white antialiased selection:bg-violet-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
