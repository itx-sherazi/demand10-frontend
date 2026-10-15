import Companies from "@/Componenets/Companies/Companies";
import { fetchCompanies, fetchSubcategoryDetails, fetchRelatedSubcategories } from "@/services/api";
import sanitizeHtml from "@/utils/sanitizeHtml";

// generateMetadata and Page both use fetchSubcategoryDetails with the same URL,
// so Next.js runs that request only once per page view.
export async function generateMetadata({ params }) {
  const { subcategorySlug } = await params;
  try {
    const details = await fetchSubcategoryDetails(subcategorySlug);
    
    if (!details || !details.name) {
      return {
        title: "Subcategory Not Found | Demand10",
        description: "No data found for this subcategory.",
      };
    }
    
    // Use meta title if available, otherwise fallback to default
    const title = details.metaTitle || `${details.name} - ${details.categoryName || "B2B Intelligence"}`;
    
    // Use the description field for meta description
    const description = details.description?.replace(/\n/g, " ") || `Explore verified ${details.categoryName?.toLowerCase() || "B2B"} vendors in ${details.name}. Find top companies and service providers.`;
    
    // Use meta keywords if available, otherwise fallback to default
    let keywords = [
      details.name,
      details.categoryName || "B2B Intelligence",
      "managed security service provider",
      "B2B companies data",
      "company directory",
      "verified vendors",
      "business directory"
    ];
    
    // If metaKeywords exist, use them instead of defaults
    if (details.metaKeywords && Array.isArray(details.metaKeywords) && details.metaKeywords.length > 0) {
      keywords = details.metaKeywords;
    }
    
    return {
      title,
      description,
      keywords,
      alternates: {
        canonical: `https://demand10.com/${subcategorySlug}`,
      },
      openGraph: {
        title,
        description,
        url: `https://demand10.com/${subcategorySlug}`,
        siteName: "Demand10",
       
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        site: "@demand10",
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Error | Demand10",
      description: "An error occurred while fetching data.",
    };
  }
}

// JSON-LD structured data for subcategories
function buildSubcategoryJsonLd(subcategorySlug, data) {
  if (!data || !data.name) return null;

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": data.name,
    "description": data.description || "",
    "url": `https://demand10.com/${subcategorySlug}`,
    "publisher": {
      "@type": "Organization",
      "name": "Demand10"
    }
  };
}

// Escape "<" so stored text can never close the <script> tag
const serializeJsonLd = (jsonLd) => JSON.stringify(jsonLd).replace(/</g, "\\u003c");

export default async function Page({ params, searchParams }) {
  const { subcategorySlug } = await params;
  const resolvedSearchParams = await searchParams;
  
  // Extract parameters from URL
  const page = resolvedSearchParams?.page ? parseInt(resolvedSearchParams.page) : 1;
  const limit = resolvedSearchParams?.limit ? parseInt(resolvedSearchParams.limit) : 20;
  const search = resolvedSearchParams?.search || "";
  
  try {
    // All three requests are independent, so run them in parallel
    const [companiesResult, detailsResult, relatedResult] = await Promise.all([
      fetchCompanies(subcategorySlug, page, limit, search),
      fetchSubcategoryDetails(subcategorySlug),
      fetchRelatedSubcategories(subcategorySlug, 5),
    ]);
    const companiesData = companiesResult || {};
    const subcategoryDetails = detailsResult || {};
    const relatedSubcategories = relatedResult || [];

    const jsonLd = buildSubcategoryJsonLd(subcategorySlug, companiesData.name ? companiesData : subcategoryDetails);
    
    // Extract content from the correct path in the response
    // Editor HTML is cleaned on the server before it reaches dangerouslySetInnerHTML
    const content = subcategoryDetails.ok && subcategoryDetails.content
      ? sanitizeHtml(subcategoryDetails.content)
      : "";
    return (
      <main>
        {/* JSON-LD structured data */}
        {jsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
          />
        )}
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
          content={content}
          faqs={companiesData.faqs || []}
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
