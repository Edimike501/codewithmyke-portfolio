import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { portfolioData } from "@/data/portfolio";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: `${portfolioData.identity.name} | ${portfolioData.identity.title}`,
    template: `%s | ${portfolioData.identity.name}`
  },
  description: portfolioData.identity.tagline,
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Next.js Portfolio",
    "Senior Architect",
    "React",
    "TypeScript"
  ],
  authors: [{ name: portfolioData.identity.name }],
  creator: portfolioData.identity.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: portfolioData.identity.name,
    description: portfolioData.about.bio,
    siteName: portfolioData.identity.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: portfolioData.identity.name
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioData.identity.name,
    description: portfolioData.identity.tagline,
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-black font-sans`}>
        <div className="fixed inset-0 z-[-1] bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

        <Header />
        <main className="flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
