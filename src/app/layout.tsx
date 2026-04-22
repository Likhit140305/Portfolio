import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Likhit Hegde — Software Engineer",
  description:
    "Portfolio of Likhit Hegde — building scalable systems, intelligent simulations, and full-stack applications.",
  keywords: [
    "Likhit Hegde",
    "Software Engineer",
    "Portfolio",
    "Full Stack Developer",
    "Backend Engineer",
    "Go Golang",
    "React Next.js",
    "Systems Engineering",
    "Docker",
    "REST API",
  ],
  authors: [{ name: "Likhit Hegde" }],
  openGraph: {
    title: "Likhit Hegde — Software Engineer",
    description:
      "Building scalable systems, intelligent simulations, and full-stack applications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Likhit Hegde — Software Engineer",
    description: "Building scalable systems & full-stack applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`antialiased noise ${inter.variable}`}>{children}</body>
    </html>
  );
}
