import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apex Plumbing Co. | Your Trusted Local Plumbing Experts",
  description:
    "Professional plumbing services for your home. 24/7 emergency service, licensed & insured. Serving the metro area for over 25 years. Call (555) 123-4567.",
  keywords: [
    "plumber",
    "plumbing",
    "emergency plumber",
    "water heater repair",
    "drain cleaning",
    "leak repair",
  ],
  openGraph: {
    title: "Apex Plumbing Co. | Your Trusted Local Plumbing Experts",
    description:
      "Professional plumbing services for your home. 24/7 emergency service, licensed & insured.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
