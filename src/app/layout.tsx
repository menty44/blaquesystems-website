import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BlaqueSystems | Software Development Company in Nairobi, Kenya",
    template: "%s | BlaqueSystems",
  },
  description:
    "BlaqueSystems is a software development company based in Nairobi, Kenya specializing in SACCO systems, POS, ticketing, bus booking, integrations, workflow automation, USSD, and mobile apps.",
  keywords: [
    "software development",
    "Nairobi",
    "Kenya",
    "SACCO systems",
    "Apache Fineract",
    "POS",
    "ticketing",
    "bus booking",
    "USSD",
    "mobile apps",
    "integrations",
    "workflow automation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen pt-[73px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
