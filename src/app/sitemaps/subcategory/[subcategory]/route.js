import { fetchCompaniesForSitemap } from "@/services/api";

export async function GET(req, { params }) {
  const baseUrl = "https://intentwire.com";
  const subSlug = params.subcategory;
  
  // Validate date before using toISOString() to prevent 'Invalid time value' errors
  let currentDate;
  try {
    const now = new Date();
    if (isNaN(now.getTime())) {
      throw new Error('Invalid date');
    }
    currentDate = now.toISOString();
  } catch (error) {
    console.error('❌ Error creating current date for sitemap:', error);
    currentDate = new Date().toISOString(); // Fallback
  }

  let companies = [];
  try {
    const res = await fetchCompaniesForSitemap(subSlug);
    companies = res?.companies || [];
  } catch (err) {
    console.error(`❌ Error fetching companies for ${subSlug}`, err);
  }

  // Handle case where no companies are found
  if (companies.length === 0) {
    console.log(`⚠️ No companies found for subcategory: ${subSlug}`);
  }

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Add subcategory page URL with new SEO-friendly structure
  sitemap += `
    <url>
      <loc>${baseUrl}/${subSlug}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
      <lastmod>${currentDate}</lastmod>
    </url>
  `;

  // Add company URLs with new SEO-friendly structure
  for (const company of companies) {
    if (!company.slug) continue;

    // Ensure valid date for lastModified with better error handling
    let formattedLastModified = currentDate; // Default to current date
    const lastModified = company.updatedAt || company.createdAt;
    
    if (lastModified) {
      try {
        const dateObj = new Date(lastModified);
        // Check if date is valid
        if (!isNaN(dateObj.getTime())) {
          formattedLastModified = dateObj.toISOString();
        }
      } catch (dateError) {
        console.error(`❌ Invalid date for company ${company.slug}:`, lastModified);
        // Keep default currentDate
      }
    }

    sitemap += `
      <url>
        <loc>${baseUrl}/${subSlug}/${company.slug}</loc>
        <lastmod>${formattedLastModified}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
      </url>
    `;
  }

  sitemap += `</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: { 
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600" // Cache for 1 hour
    },
  });
}