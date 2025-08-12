import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Levi Homes | Houston Luxury Home Remodeling & Construction",
  description: "Houston's premier luxury home remodeling specialists. Expert kitchen & bathroom remodeling, room additions, garage conversions, and general construction. 20+ years experience serving Greater Houston.",
  keywords: "Houston home remodeling, luxury remodeling Houston, kitchen remodeling Houston, bathroom remodeling Houston, room additions Houston, garage conversion Houston, attic renovation Houston, general construction Houston, custom home remodeling",
  authors: [{ name: "Levi Homes" }],
  creator: "Levi Homes",
  publisher: "Levi Homes",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://levihomes.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://levihomes.com',
    siteName: 'Levi Homes',
    title: 'Levi Homes | Houston Luxury Home Remodeling & Construction',
    description: 'Houston\'s premier luxury home remodeling specialists. Expert kitchen & bathroom remodeling, room additions, garage conversions, and general construction.',
    images: [
      {
        url: '/images/showcase/ferris-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Levi Homes Luxury Remodeling',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Levi Homes | Houston Luxury Home Remodeling',
    description: 'Houston\'s premier luxury home remodeling specialists. Expert kitchen & bathroom remodeling, room additions, and general construction.',
    images: ['/images/showcase/ferris-1.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
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
        className={`${cormorantGaramond.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
