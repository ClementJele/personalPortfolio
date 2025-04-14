import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

// Optimized font loading with subset preload
const geistSans = Geist({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
  preload: true,
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap", 
  variable: "--font-geist-mono",
  preload: true,
});

// Enhanced SEO Metadata
export const metadata: Metadata = {
  title: "Clement Jele | Full-Stack Developer & Designer Portfolio",
  description: "Showcasing cutting-edge web development projects with React, Next.js, and modern design principles. Explore my work in frontend engineering, UX design, and open-source contributions.",
  keywords: [
    "portfolio", 
    "web developer", 
    "Next.js", 
    "React", 
    "frontend engineer",
    "UX design",
    "JavaScript expert"
  ],
  authors: [{ name: "Clement Jele", url: "https://clemnj.vercel.app" }],
  openGraph: {
    title: "Clement Jele | Professional Portfolio",
    description: "Innovative web solutions and design projects by John Doe",
    url: "https://clemnj.vercel.app",
    siteName: "Clement Jele Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Clement Jele Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clement Jele | Web Developer Portfolio",
    description: "Building performant, accessible web experiences",
    images: ["/logo.png"],
  },
  metadataBase: new URL("https://clemnj.vercel.app"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          storageKey="portfolio-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}