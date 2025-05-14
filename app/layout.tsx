import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TopBar } from "../app/(sections)/common/TopBar";
import Footer from "./(sections)/common/Footer";

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
    default: "Clement's Portfolio | Full-Stack Developer & Designer",
    template: "%s | Clement's Portfolio",
  },
  description:
    "Professional portfolio of Clement, a Full-Stack Developer specializing in modern web technologies. Explore projects, case studies, and technical expertise.",
  keywords: [
    "portfolio",
    "web developer",
    "full-stack developer",
    "JavaScript",
    "React",
    "TypeScript",
    "Next.js",
    "UI/UX design",
    "projects",
  ],
  authors: [{ name: "Clement", url: "https://clemnj.vercel.app/" }],
  creator: "Clement",
  publisher: "Clement",
  metadataBase: new URL("https://clemnj.vercel.app/"), // Base URL for all metadata
  alternates: {
    canonical: "/", // Helps with SEO by preventing duplicate content
  },
  openGraph: {
    title: "Clement's Portfolio | Full-Stack Developer & Designer",
    description:
      "Professional portfolio showcasing Clement's projects and skills in web development and design.",
    url: "https://clemnj.vercel.app/",
    siteName: "Clement's Portfolio",
    images: [
      {
        url: "/og-image.png", // Open Graph preview image
        width: 1200,
        height: 630,
        alt: "Clement's Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Clement's Portfolio | Full-Stack Developer & Designer",
  //   description: "Check out my latest projects and development work!",
  //   images: ["/twitter-image.png"], // Twitter-specific preview image
  //   creator: "@clement_twitter_handle", // Optional: Add Twitter handle
  // },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#000000", // Dark theme preferred
  category: "technology",
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
        <TopBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
