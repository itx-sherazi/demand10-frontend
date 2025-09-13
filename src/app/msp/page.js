import MSPPage from '@/Componenets/MspPage/Msp'
import React from 'react'
import Script from 'next/script'

// Streamlined metadata for Google policy compliance
export const metadata = {
  title: "Top Managed Service Providers 2025 | Find Best MSPs Near You",
  description:
    "Discover the best managed service providers and managed security service providers for your business. Compare top-rated MSPs & MSSPs offering IT support, cybersecurity, and cloud services. Find managed service providers near me with our comprehensive directory of verified MSPs and MSSPs.",
  keywords: [
    "managed service provider",
    "managed security service provider",
    "MSP",
    "MSSP",
    "IT support services",
    "cybersecurity outsourcing",
    "cloud service provider",
    "best managed service providers",
    "top managed security providers",
    "IT managed services",
    "managed IT services",
    "managed service providers near me",
    "top MSP",
    "best MSSP",
    "near MSP",
    "local MSP",
    "IT service provider",
    "cybersecurity services",
    "business technology partners",
    "managed IT support",
    "network security services",
    "data backup and recovery",
    "cloud computing services",
    "IT consulting services",
    "24/7 IT support",
    "compliance management",
    "penetration testing",
    "SOC monitoring",
    "business continuity services"
  ],
  metadataBase: new URL("https://intentwire.com"),
  alternates: {
    canonical: "/msp",
  },
  openGraph: {
    title: "Top Managed Service Providers 2025 | Find Best MSPs Near You",
    description:
      "Discover the best managed service providers and managed security service providers for your business. Compare top-rated MSPs & MSSPs offering IT support, cybersecurity, and cloud services. Find managed service providers near me with our comprehensive directory of verified MSPs and MSSPs.",
    url: "https://intentwire.com/msp",
    siteName: "IntentWire",
    images: [
      {
        url: "https://intentwire.com/og-images/msp.jpg",
        width: 1200,
        height: 630,
        alt: "Top Managed Service Providers 2025 | Find Best MSPs Near You",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Managed Service Providers 2025 | Find Best MSPs Near You",
    description:
      "Discover the best managed service providers and managed security service providers for your business. Compare top-rated MSPs & MSSPs offering IT support, cybersecurity, and cloud services. Find managed service providers near me with our comprehensive directory of verified MSPs and MSSPs.",
    images: ["https://intentwire.com/og-images/msp.jpg"],
    site: "@intentwire",
  },
};

const Page = () => {
  return (
    <>
      <Script
        id="msp-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Top Managed Service Providers 2025 | Find Best MSPs Near You",
            "description": "Discover the best managed service providers and managed security service providers for your business. Compare top-rated MSPs & MSSPs offering IT support, cybersecurity, and cloud services. Find managed service providers near me with our comprehensive directory of verified MSPs and MSSPs.",
            "url": "https://intentwire.com/msp",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://intentwire.com/"
              },{
                "@type": "ListItem",
                "position": 2,
                "name": "Managed Service Providers",
                "item": "https://intentwire.com/msp"
              }]
            },
            "mainEntity": {
              "@type": "Service",
              "serviceType": "Managed Service Provider",
              "provider": {
                "@type": "Organization",
                "name": "IntentWire",
                "url": "https://intentwire.com"
              },
              "areaServed": "Global",
              "category": ["IT Services", "Cybersecurity", "Cloud Services", "Network Security", "Data Backup and Recovery"],
              "keywords": "managed service provider, managed security service provider, MSP, MSSP, IT support services, cybersecurity outsourcing, cloud service provider, IT managed services, managed IT services, managed service providers near me, 24/7 IT support, compliance management, penetration testing, SOC monitoring"
            },
            "about": {
              "@type": "Service",
              "name": "Managed Security Service Provider",
              "serviceType": "Cybersecurity Services"
            }
          })
        }}
      />
      <MSPPage />
    </>
  );
};

export default Page;