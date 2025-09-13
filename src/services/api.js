const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Consistent error response structure
const createErrorResponse = (message, status = null) => ({
  ok: false,
  message,
  status
});

export const fetchProductDetail = async (slug) => {
  try {
    const response = await fetch(`${API_BASE_URL}/product/${slug}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch product detail error:", error);
    return createErrorResponse("Failed to fetch product");
  }
};

export const fetchProductData = async (slug) => {
  try {
    const response = await fetch(`${API_BASE_URL}/product/${slug}`);
    const result = await response.json();

    if (!response.ok) {
      return createErrorResponse(result.message || "Failed to fetch product", response.status);
    }

    return result;
  } catch (error) {
    console.error("Fetch product data error:", error);
    return createErrorResponse("Failed to fetch product");
  }
};

export const fetchRelatedSubcategories = async (subcategorySlug, limit = 5) => {
  try {
    const res = await fetch(`${API_BASE_URL}/related-subcategories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subcategorySlug: subcategorySlug,
        limit: limit,
      }),
      cache: "no-store",
    });

    if (!res.ok) {
      return [];
    }

    const data = await res.json();
    return data?.subcategories || [];
  } catch (error) {
    console.error("Error fetching related subcategories:", error);
    return [];
  }
};

export const fetchBlogsSitemap = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/get-sitemapblog`);
    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      return [];
    }
    const data = await response.json();
    return data?.data || [];
  } catch (error) {
    console.error("Fetch blogs sitemap error:", error);
    return [];
  }
};

export const fetchBlogs = async (page = 1) => {
  try {
    const response = await fetch(`${API_BASE_URL}/get?page=${page}`);
    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      return { data: [], pagination: { total: 0, page: 1, totalPages: 0 } };
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch blogs error:", error);
    return { data: [], pagination: { total: 0, page: 1, totalPages: 0 } };
  }
};

export const fetchLatestBlogs = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/latest-posts`);
    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      return [];
    }
    const data = await response.json();
    return data?.data || [];
  } catch (error) {
    console.error("Fetch latest blogs error:", error);
    return [];
  }
};

export const fetchSingelBlogs = async (slug) => {
  try {
    const response = await fetch(`${API_BASE_URL}/getById/${slug}`);
    const result = await response.json();

    if (!response.ok) {
      return createErrorResponse(result.message || "Failed to fetch blog", response.status);
    }

    return result;
  } catch (error) {
    console.error("Fetch single blog error:", error);
    return createErrorResponse("Failed to fetch blog");
  }
};

export const DataSetRequest = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    return response;
  } catch (error) {
    console.error("Data set request error:", error);
    throw error;
  }
};

export async function fetchCompanyDetail(slug) {
  try {
    const res = await fetch(`${API_BASE_URL}/companybyslug/${slug}`);

    if (!res.ok) {
      console.error("Failed to fetch company detail");
      return { ok: false, data: null };
    }

    return await res.json();
  } catch (error) {
    console.error("Fetch company detail error:", error);
    return { ok: false, data: null };
  }
}

// New function for SEO-friendly URLs: fetch company by subcategory and company slug
export async function fetchCompanyBySubcategoryAndSlug(subcategorySlug, companySlug) {
  try {
    // Use the correct endpoint - companybyslug instead of company/subcategory/company
    const res = await fetch(`${API_BASE_URL}/companybyslug/${companySlug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(`❌ API Error: ${res.status} - Failed to fetch company detail by slug`);
      console.error(`URL attempted: ${API_BASE_URL}/companybyslug/${companySlug}`);
      
      return null;
    }

    const data = await res.json();
    
    // ✅ Ensure data has safe defaults even from primary API
    if (data?.data) {
      data.data = {
        ...data.data,
        companyName: data.data.companyName || 'Unknown Company',
        description: data.data.description || '',
        foundedYear: data.data.foundedYear || null,
        employees: data.data.employees || 0,
        industries: Array.isArray(data.data.industries) ? data.data.industries : [],
        teamLeads: Array.isArray(data.data.teamLeads) ? data.data.teamLeads : [],
        companyCountry: data.data.companyCountry || '',
        image: data.data.image || '/placeholder-logo.png',
        website: data.data.website || '#'
      };
    }
    
    return data;
  } catch (error) {
    console.error("Error fetching company by slug:", error);
    return null;
  }
}

// Helper function for fallback API with enhanced error handling
async function tryFallbackAPI(companySlug) {
  try {
    const fallbackRes = await fetch(`${API_BASE_URL}/companybyslug/${companySlug}`);
    
    if (fallbackRes.ok) {
      const fallbackData = await fallbackRes.json();
      
      // ✅ Ensure fallback data structure matches expected format
      return {
        ok: true,
        data: fallbackData?.data || fallbackData || {},
        message: 'Fetched from fallback API'
      };
    } else {
      console.error(`❌ Fallback API also failed: ${fallbackRes.status}`);
      return null;
    }
  } catch (fallbackError) {
    console.error("Fallback API also failed:", fallbackError);
    return null;
  }
}

export const fetchRelatedCompanies = async (subcategoryId, excludeSlug) => {
  try {
    const res = await fetch(`${API_BASE_URL}/related-companies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subcategory: subcategoryId,
        excludeSlug: excludeSlug,
      }),
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch related companies");
      return [];
    }

    const data = await res.json();
    return data?.companies || [];
  } catch (error) {
    console.error("Error fetching related companies:", error);
    return [];
  }
};

export const fetchTrending = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/trending`);
    const data = await response.json();

    return {
      products: data?.products || [],
    };
  } catch (error) {
    console.error("Fetch trending error:", error);
    return { products: [] };
  }
};

export async function fetchCategories() {
  try {
    const res = await fetch(`${API_BASE_URL}/categories`, {
      cache: "no-store",
    });

    const data = await res.json();
    return data?.data || [];
  } catch (error) {
    console.error("Failed to fetch categories", error);
    return [];
  }
}

export async function fetchSubcategoriesByCategorySlug(slug) {
  try {
    const res = await fetch(`${API_BASE_URL}/categorybyslug/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch subcategories");
      return [];
    }

    const data = await res.json();
    return data?.data?.subcategories || [];
  } catch (error) {
    console.error("Failed to fetch subcategories by category slug", error);
    return [];
  }
}

export async function fetchCompaniesForSitemap(slug) {
  try {
    const res = await fetch(`${API_BASE_URL}/sitemap-subcategory/${slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store'
    });

    if (!res.ok) {
      console.error("❌ Failed to fetch companies for sitemap", res.status, res.statusText);
      return { companies: [] };
    }

    const data = await res.json();
    // Sirf zaroori fields return karo sitemap ke liye
    return {
      companies: data?.companies?.map(c => ({
        slug: c.slug,
        updatedAt: c.updatedAt || c.createdAt || null
      })) || []
    };

  } catch (error) {
    console.error("⚠️ Error fetching companies for sitemap:", error);
    return { companies: [] };
  }
}

export async function fetchCompanies(slug, page = 1, limit = 12, search = "", sponsoredOnly = false) {
  try {
    // Build query parameters
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });
    
    // Add search parameter only if it exists and is not empty
    if (search && search.trim() !== "") {
      params.append('search', search.trim());
    }
    
    // Add sponsoredOnly parameter if requested
    if (sponsoredOnly) {
      params.append('sponsoredOnly', 'true');
    }

    const res = await fetch(
      `${API_BASE_URL}/subcategories/companies/${slug}?${params.toString()}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store'
      }
    );

    if (!res.ok) {
      console.error("Failed to fetch companies", res.status, res.statusText);
      return {
        companies: [],
        pagination: {
          total: 0,
          page: 1,
          limit: 12,
          totalPages: 0,
          searchTerm: ""
        },
        name: '',
        description: '',
        categoryName: ''
      };
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching companies:", error);
    return {
      companies: [],
      pagination: {
        total: 0,
        page: 1,
        limit: 12,
        totalPages: 0,
        searchTerm: ""
      },
      name: '',
      description: '',
      categoryName: ''
    };
  }
}

export async function fetchSubcategoryDetails(slug) {
  try {
    const res = await fetch(`${API_BASE_URL}/detail/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch subcategory details");
      return null;
    }

    return await res.json();
  } catch (err) {
    console.error("Error fetching subcategory details:", err);
    return null;
  }
}

// User authentication API functions
export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Login failed:', error);
    return createErrorResponse("Network error during login");
  }
};

export const signupUser = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/signup`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Signup failed:', error);
    return createErrorResponse("Network error during signup");
  }
};

export const getCompanyReviews = async (slug, page = 1, limit = 10) => {
  // Add validation to check if slug is provided
  if (!slug || typeof slug !== 'string') {
    console.error("Invalid company slug:", slug);
    return { ok: false, message: "Invalid company slug" };
  }
  
  try {
    const response = await fetch(`${API_BASE_URL}/company-by-slug/${slug}/reviews?page=${page}&limit=${limit}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching company reviews:", error);
    return { ok: false, message: "Failed to fetch company reviews" };
  }
};

export const getCompanyReviewsById = async (companyId, page = 1, limit = 10) => {
  // Add validation to check if companyId is a valid ObjectId
  if (!companyId || typeof companyId !== 'string' || companyId === 'search' || companyId.length !== 24) {
    console.error("Invalid company ID format:", companyId);
    return { ok: false, message: "Invalid company ID format" };
  }
  
  try {
    const response = await fetch(`${API_BASE_URL}/company/${companyId}/reviews?page=${page}&limit=${limit}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching company reviews by ID:", error);
    return { ok: false, message: "Failed to fetch company reviews" };
  }
};

// Badge API functions
export const getCompanyBadgesForFrontend = async (companyId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/badges/public/${companyId}`, {
      method: "GET",
      credentials: "include", // Include cookies for authentication
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Failed to fetch company badges:", errorData.message);
      return { status: response.status, data: null, error: errorData.message };
    }

    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    console.error("Error fetching company badges:", error);
    return { status: 500, data: null, error: "Failed to fetch company badges" };
  }
};

export const updateCompanySponsorship = async (companyId, sponsor) => {
  try {
    const response = await fetch(`${API_BASE_URL}/company/${companyId}/sponsor`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sponsor }),
    });

    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    console.error("Update company sponsorship error:", error);
    return { status: 500, data: null, error: "Failed to update company sponsorship" };
  }
};

export const fetchHomepageCompanies = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/homepage-companies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store'
    });

    if (!res.ok) {
      console.error("Failed to fetch homepage companies", res.status, res.statusText);
      return [];
    }

    const data = await res.json();
    return data.companies || [];
  } catch (error) {
    console.error("Error fetching homepage companies:", error);
    return [];
  }
};

export const searchCompanies = async (query) => {
  try {
    // Ensure query is provided and not empty
    if (!query || query.trim() === '') {
      return [];
    }
    
    // Use the new hero search endpoint
    const response = await fetch(`${API_BASE_URL}/hero-search?company_name=${encodeURIComponent(query.trim())}`);
    const data = await response.json();
    
    if (data.ok && Array.isArray(data.data)) {
      return data.data;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Search companies error:", error);
    return [];
  }
};

export const fetchSponsoredCompanies = async () => {
  try {
    // Use the new dedicated endpoint for homepage companies
    const homepageCompanies = await fetchHomepageCompanies();
    return homepageCompanies;
  } catch (error) {
    console.error("Error fetching homepage companies:", error);
    return [];
  }
};
