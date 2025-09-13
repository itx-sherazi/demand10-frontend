
import CompanyDetail from "@/Componenets/CompanyDetail/CompanyDetail";
import { fetchCompanyBySubcategoryAndSlug, fetchCompanyDetail, getCompanyReviews, getCompanyReviewsById } from "@/services/api";
import Link from "next/link";
import { cache } from "react";
import { redirect } from "next/navigation";

// ✅ Cache API call so it runs only once per request
const getCompanyDetail = cache(async (subcategorySlug, companySlug) => {
  return await fetchCompanyBySubcategoryAndSlug(subcategorySlug, companySlug);
});

// ✅ Server-side function to fetch company reviews
const getCompanyReviewsData = cache(async (companyId, companySlug, page = 1, limit = 10) => {
  try {
    let response;
    if (companySlug) {
      response = await getCompanyReviews(companySlug, page, limit);
    } else if (companyId) {
      response = await getCompanyReviewsById(companyId, page, limit);
    } else {
      return { 
        ok: false, 
        message: 'Company ID or slug is required to fetch reviews',
        reviews: [],
        totalPages: 0,
        currentPage: 1,
        totalReviews: 0,
        averageRating: 0
      };
    }
    
    if (response.ok) {
      return {
        ok: true,
        reviews: response.reviews || [],
        totalPages: response.totalPages || 1,
        currentPage: response.currentPage || 1,
        totalReviews: response.totalReviews || response.reviews?.length || 0,
        averageRating: response.averageRating || 0
      };
    } else {
      return { 
        ok: false, 
        message: response.message || 'Failed to fetch reviews',
        reviews: [],
        totalPages: 0,
        currentPage: 1,
        totalReviews: 0,
        averageRating: 0
      };
    }
  } catch (error) {
    console.error('Error fetching company reviews:', error);
    return { 
      ok: false, 
      message: 'Failed to fetch company reviews',
      reviews: [],
      totalPages: 0,
      currentPage: 1,
      totalReviews: 0,
      averageRating: 0
    };
  }
});

function truncateText(text, maxLength) {
  if (!text) return "";
  return text.length > maxLength
    ? text.slice(0, maxLength - 1).trim() + "…"
    : text;
}

function padTextWithKeyword(text, maxLength, keywordPool) {
  if (!text || text.length >= maxLength) return text;

  for (const keyword of keywordPool) {
    if (!text.includes(keyword) && text.length + keyword.length + 2 <= maxLength) {
      return `${text}. ${keyword}`;
    }
  }
  return text;
}

export async function generateMetadata({ params }) {
  const { subcategorySlug, companySlug } = await params;
  const response = await getCompanyDetail(subcategorySlug, companySlug);
  const company = response?.data;

  if (!company) {
    return {
      title: "Company Not Found | IntentWire",
      description: "No company data found.",
    };
  }

  const industry = company.industries?.[0]?.toLowerCase() || "technology";
  const baseTitle = `${company.companyName}`;
  const trimmedTitle = truncateText(baseTitle, 55);

  // ✅ Enhanced description with MSP/MSSP keyword integration (Google policy compliant)
  let baseDescription = "";
  if (company.description && company.description.trim().length > 0) {
    baseDescription = company.description.trim().slice(0, 155);
  } else {
    // Enhanced description with MSP/MSSP context
    const isMSP = subcategorySlug.includes("managed-service") || subcategorySlug.includes("msp");
    const isMSSP = subcategorySlug.includes("managed-security") || subcategorySlug.includes("mssp");
    
    if (isMSP) {
      baseDescription = `Explore ${company.companyName}, a leading managed service provider (MSP) offering IT support, cloud solutions, and cybersecurity services. Discover key details, team insights, and managed IT services.`;
    } else if (isMSSP) {
      baseDescription = `Explore ${company.companyName}, a leading managed security service provider (MSSP) offering cybersecurity solutions, threat monitoring, and compliance services. Discover key details and security offerings.`;
    } else {
      baseDescription = `Explore ${company.companyName}, a leading ${industry} company${
        company.companyCountry ? ` based in ${company.companyCountry}` : ""
      }${company.foundedYear ? `, founded in ${company.foundedYear}` : ""}. Discover key details, team insights, and ${
        industry.includes("managed") ? "" : "managed IT services and "
      }security offerings.`;
    }
  }

  // Streamlined keyword pool for MSP/MSSP context (Google policy compliant)
  const keywordPool = [
    "managed service provider",
    "MSP solutions",
    "managed security service provider",
    "MSSP services",
    "B2B company insight",
    "business profile",
    "cybersecurity services",
    "IT support services",
    "cloud service provider"
  ];

  const trimmedDescription = padTextWithKeyword(
    truncateText(baseDescription, 155),
    155,
    keywordPool
  );

  const imageUrl =
    company.image || "https://intentwire.com/og-images/default-company.jpg";

  // Enhanced keywords with MSP/MSSP focus (Google policy compliant)
  const isMSP = subcategorySlug.includes("managed-service") || subcategorySlug.includes("msp");
  const isMSSP = subcategorySlug.includes("managed-security") || subcategorySlug.includes("mssp");
  
  let keywords = [
    company.companyName,
    "IntentWire",
    "company profile",
    industry,
    company.companyCountry,
    "B2B intelligence",
  ];
  
  // Add MSP/MSSP specific keywords
  if (isMSP) {
    keywords = [...keywords, 
      "managed service provider",
      "MSP",
      "IT services",
      "cloud services",
      "best managed service providers"
    ];
  } else if (isMSSP) {
    keywords = [...keywords, 
      "managed security service provider",
      "MSSP",
      "cybersecurity",
      "security services",
      "best managed security providers"
    ];
  } else {
    keywords = [...keywords, 
      "managed service provider",
      "managed security service provider",
      "MSP",
      "MSSP"
    ];
  }

  return {
    title: trimmedTitle,
    description: trimmedDescription,
    keywords,
    alternates: {
      canonical: `https://intentwire.com/${subcategorySlug}/${companySlug}`,
    },
    openGraph: {
      title: trimmedTitle,
      description: trimmedDescription,
      url: `https://intentwire.com/${subcategorySlug}/${companySlug}`,
      siteName: "IntentWire",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${company.companyName} – Company Overview`,
        },
      ],
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: trimmedTitle,
      description: trimmedDescription,
      images: [imageUrl],
      site: "@intentwire",
    },
  };
}

// Add JSON-LD structured data for better SEO
export async function generateStaticParams() {
  // This helps with static generation
  return [];
}

// Add revalidation for better performance
export const revalidate = 3600; // Revalidate at most once per hour

export default async function Page({ params }) {
  const { subcategorySlug, companySlug } = await params;


  // 🚀 Handle legacy /company/[slug] URLs - REDIRECT to correct format
  if (subcategorySlug === 'company') {
    
    try {
      // Fetch company data to get the correct subcategory
      const companyData = await fetchCompanyDetail(companySlug);
      
     
      
      // Check different response formats from the API
      if (companyData && !Array.isArray(companyData) && companyData.ok !== false) {
        const company = companyData.data || companyData;
        const correctSubcategorySlug = company?.subcategory?.slug;
        
        if (correctSubcategorySlug) {
          const correctUrl = `/${correctSubcategorySlug}/${companySlug}`;
          redirect(correctUrl); // This will throw NEXT_REDIRECT - don't catch it!
        } else {
          console.log(`⚠️ Company found but no subcategory slug: ${company?.companyName || 'Unknown'}`);
        }
      } else {
        console.log(`❌ Company '${companySlug}' not found, redirecting to home`);
      }
    } catch (error) {
      // Only catch non-redirect errors
      if (error.message === 'NEXT_REDIRECT') {
        // This is the successful redirect, re-throw it
        throw error;
      }
      console.error('Error in redirect logic:', error);
    }
    
    // If we reach here, redirect to home
    redirect('/');
  }
  // ✅ Fetch company detail first
  const companyDetail = await getCompanyDetail(subcategorySlug, companySlug);
  let currentCompany = companyDetail?.data;

  // ✅ Add safety validation for company data
  if (currentCompany) {
    currentCompany = {
      ...currentCompany,
      companyName: currentCompany.companyName || 'Unknown Company',
      description: currentCompany.description || '',
      foundedYear: currentCompany.foundedYear || null,
      employees: currentCompany.employees || 0,
      industries: Array.isArray(currentCompany.industries) ? currentCompany.industries : [],
      teamLeads: Array.isArray(currentCompany.teamLeads) ? currentCompany.teamLeads : [],
      companyCountry: currentCompany.companyCountry || '',
      image: currentCompany.image || '/placeholder-logo.png',
      website: currentCompany.website || '#'
    };
  }

  // ✅ Fetch company reviews data server-side (initial page)
  const reviewsData = await getCompanyReviewsData(
    currentCompany?._id, 
    currentCompany?.slug, 
    1, // initial page
    10 // limit
  );

  // If company not found, show detailed error with debugging info
  if (!currentCompany) {
    
    return (
      <main>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center max-w-md mx-auto p-8">
            <div className="text-red-500 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold mb-4 text-gray-900">Company Not Found</h1>
            <p className="text-gray-600 mb-6">
              The company youre looking for doesnt exist or has been moved.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-6 text-sm text-left">
              <p><strong>Subcategory:</strong> {subcategorySlug}</p>
              <p><strong>Company:</strong> {companySlug}</p>
            </div>
            <div className="space-y-3">
              <Link
                href={`/${subcategorySlug}`}
                className="inline-block bg-[#4ecfc5] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3bb3a9] transition-colors"
              >
                Back to {subcategorySlug.replace(/-/g, ' ')}
              </Link>
              <br />
              <Link
                href="/"
                className="inline-block text-gray-600 hover:text-gray-800 transition-colors"
              >
                Go to Homepage
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }


  return (
    <main>
      <CompanyDetail
        sampleCompanyData={currentCompany}
        reviewsData={reviewsData} // Pass reviews data as props
      />
    </main>
  );
}