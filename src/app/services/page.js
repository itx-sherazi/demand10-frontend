import DataSolutionsWebsite from "@/Componenets/ServiceCom";

export const metadata = {
  title: "IntentWire Services – B2B Data Solutions & MSP Databases",
  description:
    "Explore IntentWire's services offering verified B2B data solutions, MSP databases, and lead generation tools to connect with key decision-makers.",
  keywords: [
    "B2B data solutions",
    "MSP databases",
    "lead generation tools",
    "IntentWire services",
    "verified business data"
  ],
  metadataBase: new URL("https://intentwire.com"),
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "IntentWire Services – B2B Data Solutions & MSP Databases",
    description:
      "Explore IntentWire's services offering verified B2B data solutions, MSP databases, and lead generation tools to connect with key decision-makers.",
    url: "https://intentwire.com/services",
    siteName: "IntentWire",
    images: [
      {
        url: "https://intentwire.com/og-images/services.jpg",
        width: 1200,
        height: 630,
        alt: "IntentWire Services B2B Data Solutions & MSP Databases",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IntentWire Services – B2B Data Solutions & MSP Databases",
    description:
      "Explore IntentWire's services offering verified B2B data solutions, MSP databases, and lead generation tools to connect with key decision-makers.",
    images: ["https://intentwire.com/og-images/services.jpg"],
    site: "@intentwire",
  },
};

const Page = () => {
  return (
    <div>
      <DataSolutionsWebsite/>
    </div>
  );
};

export default Page;