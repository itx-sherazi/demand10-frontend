import Script from 'next/script';
export const dynamic = 'force-dynamic';

// Global metadata fallback
export const metadata = {
  metadataBase: new URL('https://intentwire.com'),
  title: {
    default: 'IntentWire - Top MSP & MSSP Database Platform',
    template: '%s | IntentWire'
  },
  description: 'Discover top Managed Service Providers & MSSPs with IntentWire\'s 95% accurate B2B data. Connect with 10K+ suppliers in 500+ categories.',
  keywords: ['MSP', 'MSSP', 'Managed Service Provider', 'B2B data', 'IntentWire', 'IT services'],
  authors: [{ name: 'IntentWire Team' }],
  creator: 'IntentWire',
  publisher: 'IntentWire',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://intentwire.com',
    siteName: 'IntentWire',
    title: 'IntentWire - Top MSP & MSSP Database Platform',
    description: 'Discover top Managed Service Providers & MSSPs with IntentWire\'s 95% accurate B2B data.',
    images: [
      {
        url: 'https://intentwire.com/og-images/default.jpg',
        width: 1200,
        height: 630,
        alt: 'IntentWire - MSP & MSSP Database Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IntentWire - Top MSP & MSSP Database Platform',
    description: 'Discover top Managed Service Providers & MSSPs with IntentWire\'s 95% accurate B2B data.',
    site: '@intentwire',
    images: ['https://intentwire.com/og-images/default.jpg'],
  },
};

import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import LayoutWrapper from "@/Componenets/ui/LayoutWrapper";
import { fetchCategories } from "@/services/api";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NextTopLoader from 'nextjs-toploader';

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "IntentWire",
  "url": "https://intentwire.com",
  "description": "Discover top Managed Service Providers & MSSPs with IntentWire's 95% accurate B2B data. Connect with 10K+ suppliers in 500+ categories.",
  "publisher": {
    "@type": "Organization",
    "name": "IntentWire",
    "logo": {
      "@type": "ImageObject",
      "url": "https://intentwire.com/og-images/default.jpg"
    }
  }
};

export default async function RootLayout({ children }) {
  const categories = await fetchCategories();

  return (
    <html lang="en">
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google Analytics (GA4) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-YPP2QG998M"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YPP2QG998M');
            `,
          }}
        />
        <NextTopLoader
         color="#1a365d"
          height={3}
          showSpinner={false}
          crawlSpeed={200}
        />
        <ToastContainer />
        <LayoutWrapper categories={categories}>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}