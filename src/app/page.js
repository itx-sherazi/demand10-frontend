import JobHeroSection from "@/Componenets/Home/HeroSection";
import { fetchCategories, fetchHomepageCompanies } from "@/services/api";
import ResetPasswordForm from "@/Componenets/ui/ResetPasswordForm";
import Testimonials from "@/Componenets/Home/Testimonials";
import ListProduct from "@/Componenets/Home/ListProduct";
import SoftwareCategories from "@/Componenets/Home/Categories";
import ReviewSection from "@/Componenets/Home/ClientReviews";
import GartnerReviews from "@/Componenets/Home/GartnerReviews";

export const metadata = {
  title: "Top Managed Service Providers & Managed Security Service Providers 2025",
  description:
    "Discover top managed service providers (MSPs) and managed security service providers (MSSPs) offering IT support, cybersecurity, and cloud solutions for your business. Find managed service provider examples, definitions, and leading managed security service providers near you.",
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
    "B2B companies",
    "company directory",
    "verified vendors"
  ],
  metadataBase: new URL("https://intentwire.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Top Managed Service Providers & Managed Security Service Providers 2025",
    description:
      "Discover top managed service providers (MSPs) and managed security service providers (MSSPs) with IntentWire's 95% accurate B2B data. Connect with 10K+ suppliers in 500+ categories across the USA, EU & more. Find managed service provider examples, definitions, and leading managed security service providers near you.",
    url: "https://intentwire.com/",
    siteName: "IntentWire",
    images: [
      {
        url: "https://intentwire.com/og-images/home.jpg",
        width: 1200,
        height: 630,
        alt: "Top Managed Service Providers & Managed Security Service Providers",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Managed Service Providers & Managed Security Service Providers 2025",
    description:
      "Discover top managed service providers (MSPs) and managed security service providers (MSSPs) offering IT support, cybersecurity, and cloud solutions for your business. Find managed service provider examples, definitions, and leading managed security service providers near you.",
    images: ["https://intentwire.com/og-images/home.jpg"],
    site: "@intentwire",
  },
};

export default async function Home({ searchParams }) {
  const params = await searchParams;
  const resetToken = params["reset-token"];

  // Fetch categories and homepage companies data
  const [categories, homepageCompanies] = await Promise.all([
    fetchCategories(),
    fetchHomepageCompanies()
    
  ]);

  return (
    <main>
      {resetToken ? (
        <ResetPasswordForm token={resetToken} />
      ) : (
        <>
          <JobHeroSection homepageCompanies={homepageCompanies} />
          <GartnerReviews/>
          <ListProduct />
          
          
          <SoftwareCategories categories={categories} />
          <ReviewSection/>
          <Testimonials />
        </>
      )}
    </main>
  );
}