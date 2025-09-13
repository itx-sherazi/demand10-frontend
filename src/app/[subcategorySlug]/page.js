import Companies from "@/Componenets/Companies/Companies";
import { fetchCompanies, fetchSubcategoryDetails, fetchRelatedSubcategories } from "@/services/api";


export async function generateMetadata({ params }) {
  const { subcategorySlug } = await params;
  try {
    const companiesData = await fetchCompanies(subcategorySlug);
    
    if (!companiesData || !companiesData.name) {
      return {
        title: "Subcategory Not Found | IntentWire",
        description: "No data found for this subcategory.",
      };
    }
    
    const name = companiesData.name;
    const category = companiesData.categoryName || "B2B Intelligence";
    const baseDescription = companiesData.description?.replace(/\n/g, " ") || "";
    
    // Streamlined keyword optimization for MSP/MSSP categories (Google policy compliant)
    const mspKeywords = [
      "managed service provider",
      "MSP",
      "IT support services",
      "cloud service provider",
      "best managed service providers"
    ];
    
    const msspKeywords = [
      "managed security service provider",
      "MSSP",
      "cybersecurity outsourcing",
      "security services",
      "best managed security providers"
    ];
    
    // Determine if this is an MSP or MSSP category
    const isMSP = name.toLowerCase().includes("managed service") || name.toLowerCase().includes("msp");
    const isMSSP = name.toLowerCase().includes("managed security") || name.toLowerCase().includes("mssp");
    
    // Enhanced TITLE with keyword focus
    let title = `${name} – ${category}`;
    if (title.length < 45) {
      if (isMSP) {
        title += " | MSP Directory";
      } else if (isMSSP) {
        title += " | MSSP Directory";
      } else {
        title += " | B2B Companies";
      }
    }
    if (title.length > 55) {
      title = title.slice(0, 52) + "...";
    }
    
    // Enhanced DESCRIPTION with keyword integration
    let description = baseDescription;
    if (description.length < 120) {
      if (isMSP) {
        description += ` Explore verified ${category.toLowerCase()} vendors and top managed service providers.`;
      } else if (isMSSP) {
        description += ` Discover leading managed security service providers and cybersecurity solutions.`;
      } else {
        description += ` Explore verified ${category.toLowerCase()} vendors.`;
      }
    }
    if (description.length > 155) {
      description = description.slice(0, 152) + "...";
    }
    
    // Streamlined KEYWORDS with specific MSP/MSSP terms
    let keywords = [
      name,
      category,
      "IntentWire",
      "B2B companies",
      "company listings",
      "verified vendors",
    ];
    
    // Add relevant keywords based on category type
    if (isMSP) {
      keywords = [...keywords, ...mspKeywords];
    } else if (isMSSP) {
      keywords = [...keywords, ...msspKeywords];
    }
    
    return {
      title,
      description,
      keywords,
      alternates: {
        canonical: `https://intentwire.com/${subcategorySlug}`,
      },
      openGraph: {
        title,
        description,
        url: `https://intentwire.com/${subcategorySlug}`,
        siteName: "IntentWire",
        images: [
          {
            url: "https://intentwire.com/og-images/subcategory.jpg",
            width: 1200,
            height: 630,
            alt: `${name} – Subcategory Overview`,
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: ["https://intentwire.com/og-images/subcategory.jpg"],
        site: "@intentwire",
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Error | IntentWire",
      description: "An error occurred while fetching data.",
    };
  }
}

export default async function Page({ params, searchParams }) {
  const { subcategorySlug } = await params;
  const resolvedSearchParams = await searchParams;
  
  // Extract parameters from URL
  const page = resolvedSearchParams?.page ? parseInt(resolvedSearchParams.page) : 1;
  const limit = resolvedSearchParams?.limit ? parseInt(resolvedSearchParams.limit) : 20;
  const search = resolvedSearchParams?.search || "";
  
  try {
    // Pass search parameter to API
    const companiesData = await fetchCompanies(subcategorySlug, page, limit, search) || {};
    // Fetch subcategory details to get sponsorCompanies
    const subcategoryDetails = await fetchSubcategoryDetails(subcategorySlug) || {};
    // Fetch related subcategories on the server side
    const relatedSubcategories = await fetchRelatedSubcategories(subcategorySlug, 5) || [];
    
    return (
      <main>
        <Companies 
          companies={companiesData.companies || []} 
          name={companiesData.name || "Unknown Category"} 
          description={companiesData.description || ""} 
          categoryName={companiesData.categoryName || "B2B Intelligence"} 
          totalCompanies={companiesData.totalCompanies || "50,000"} 
          slug={subcategorySlug}
          pagination={companiesData.pagination || {}}
          sponsorCompanies={subcategoryDetails.sponsorCompanies || []}
          relatedSubcategories={relatedSubcategories}
        />
      </main>
    );
  } catch (error) {
    console.error("Error in page component:", error);
    return (
      <main>
        <div>Error loading companies data. Please try again later.</div>
      </main>
    );
  }
}