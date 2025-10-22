import Companies from "@/Componenets/Companies/Companies";
import { fetchCompanies, fetchSubcategoryDetails, fetchRelatedSubcategories } from "@/services/api";


export async function generateMetadata({ params }) {
  const { subcategorySlug } = await params;
  try {
    const companiesData = await fetchCompanies(subcategorySlug);
    
    if (!companiesData || !companiesData.name) {
      return {
        title: "Subcategory Not Found | Demand10",
        description: "No data found for this subcategory.",
      };
    }
    
    const name = companiesData.name;
    const category = companiesData.categoryName || "B2B Intelligence";
    
    // Simplified title (55 characters max)
    let title = `${name} - ${category}`;
    if (title.length > 55) {
      title = title.slice(0, 52) + "...";
    }
    
    // Simplified description (155 characters max)
    let description = companiesData.description?.replace(/\n/g, " ") || "";
    if (description.length === 0) {
      description = `Explore verified ${category.toLowerCase()} vendors in ${name}. Find top companies and service providers.`;
    }
    if (description.length > 155) {
      description = description.slice(0, 152) + "...";
    }
    
    // Simplified keywords
    const keywords = [
      name,
      category,
      "managed security service provider",
      "B2B companies data",
      "company directory",
      "verified vendors",
      "business directory"
    ];
    
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


// Add JSON-LD structured data for subcategories
export async function generateSubcategoryJsonLd({ params }) {
  const { subcategorySlug } = await params;
  
  try {
    const companiesData = await fetchCompanies(subcategorySlug);
    
    if (!companiesData || !companiesData.name) return null;
    
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": companiesData.name,
      "description": companiesData.description || "",
      "url": `https://demand10.com/${subcategorySlug}`,
      "publisher": {
        "@type": "Organization",
        "name": "Demand10"
      }
    };
    
    return jsonLd;
  } catch (error) {
    console.error("JSON-LD generation error:", error);
    return null;
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

    // Generate JSON-LD
    const jsonLd = await generateSubcategoryJsonLd({ params: { subcategorySlug } });
    
    // Extract content from the correct path in the response
    const content = subcategoryDetails.ok && subcategoryDetails.content
      ? subcategoryDetails.content || ""
      : "";
      // Debug log to see what content we're getting
    console.log("Subcategory content for", subcategorySlug, ":", content ? content.substring(0, 100) + "..." : "No content");
    return (
      <main>
        {/* JSON-LD structured data */}
        {jsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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