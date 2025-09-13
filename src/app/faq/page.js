import FaqCom from "@/Componenets/FaqComponent";

export const metadata = {
  title: "FAQ – Managed IT Services & MSP Solutions Explained",
  description:
    "Find answers to common questions about managed IT services, MSP providers, cybersecurity solutions, and IntentWire's platform for connecting with top managed service providers near you.",
  keywords: [
    "Managed IT Services FAQ",
    "MSP services",
    "managed service provider",
    "IT managed services",
    "managed security service provider",
    "co-managed IT services",
    "cloud service provider",
    "managed IT support",
    "IT services managed services",
    "managed service providers near me"
  ],
  metadataBase: new URL("https://intentwire.com"),
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ – Managed IT Services & MSP Solutions Explained",
    description:
      "Find answers to common questions about managed IT services, MSP providers, cybersecurity solutions, and IntentWire's platform for connecting with top managed service providers near you.",
    url: "https://intentwire.com/faq",
    siteName: "IntentWire",
    images: [
      {
        url: "https://intentwire.com/og-images/faq.jpg",
        width: 1200,
        height: 630,
        alt: "FAQ – Managed IT Services & MSP Solutions Explained",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ – Managed IT Services & MSP Solutions Explained",
    description:
      "Find answers to common questions about managed IT services, MSP providers, cybersecurity solutions, and IntentWire's platform for connecting with top managed service providers near you.",
    images: ["https://intentwire.com/og-images/faq.jpg"],
    site: "@intentwire",
  },
};

const Page = () => {
  return (
    <div>
      <FaqCom/>
    </div>
  )
}

export default Page