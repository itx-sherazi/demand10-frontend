import ContactPage from "@/Componenets/ContactPage";
export const metadata = {
  title: "Contact IntentWire – Connect with Our Team",
  description:
    "Reach out to IntentWire for inquiries, support, or partnerships. Our team is here to assist you with your business data needs and technology solutions.",
  keywords: [
    "Contact IntentWire",
    "business data inquiries",
    "IntentWire support",
    "B2B data solutions contact"
  ],
  metadataBase: new URL("https://intentwire.com"),
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact IntentWire – Connect with Our Team",
    description:
      "Reach out to IntentWire for inquiries, support, or partnerships. Our team is here to assist you with your business data needs and technology solutions.",
    url: "https://intentwire.com/contact",
    siteName: "IntentWire",
    images: [
      {
        url: "https://intentwire.com/og-images/contact.jpg", // Replace with your actual Contact OG image URL
        width: 1200,
        height: 630,
        alt: "Contact IntentWire – Connect with Our Team",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact IntentWire – Connect with Our Team",
    description:
      "Reach out to IntentWire for inquiries, support, or partnerships. Our team is here to assist you with your business data needs and technology solutions.",
    images: ["https://intentwire.com/og-images/contact.jpg"], // Replace with your actual Contact image URL
    site: "@intentwire", // Optional: add your Twitter handle
  },
};
const Page = () => {
  return (
    <div>
     <ContactPage/>
    </div>
  );
};

export default Page;
