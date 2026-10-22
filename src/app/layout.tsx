import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Samia Islam Ridita | Frontend Developer",
    template: "%s | Samia Islam Ridita",
  },

  description:
    "Samia Islam Ridita is an aspiring Frontend Developer and CSE undergraduate at Green University of Bangladesh, building modern web experiences with React and Next.js.",

  keywords: [
    "Samia Islam Ridita",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "CSE Student",
    "Web Developer Bangladesh",
    "Developer Portfolio",
  ],

  authors: [{ name: "Samia Islam Ridita" }],

  robots: {
    index: true,
    follow: true,
  },
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
        {children}
      </body>
    </html>
  );
}