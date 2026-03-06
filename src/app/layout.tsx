import type { Metadata } from "next";
import { Montserrat, Cairo } from "next/font/google";
import { LanguageProvider } from "@/lib/language-context";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "Success Factory | Digital Commerce Infrastructure",
  description: "API-first marketplace engine, embedded payments and operational tooling for national-scale commerce in UAE.",
  keywords: [
    "Success Factory",
    "Commerce Infrastructure",
    "UAE Markets",
    "Embedded Payments",
    "Payment Orchestration",
    "Marketplace Engine",
    "Logistics",
    "Fintech",
    "SuccessPay",
    "SuccessOps",
    "SuccessShip",
    "SuccessDev",
  ],
  authors: [{ name: "Success Factory" }],
  creator: "Success Factory",
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://successfactory.ae",
    title: "Success Factory | Digital Commerce Infrastructure",
    description: "API-first marketplace engine, embedded payments and operational tooling for national-scale commerce in UAE.",
    siteName: "Success Factory",
  },
  twitter: {
    card: "summary_large_image",
    title: "Success Factory | Digital Commerce Infrastructure",
    description: "API-first marketplace engine, embedded payments and operational tooling for national-scale commerce in UAE.",
    creator: "@successfactory",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${montserrat.variable} ${cairo.variable} font-sans antialiased min-h-screen bg-background text-foreground`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
