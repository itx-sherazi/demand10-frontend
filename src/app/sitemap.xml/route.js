import { fetchCategories } from "@/services/api";

export const dynamic = "force-dynamic"; // ✅ This allows dynamic fetching during build/runtime

export async function GET() {
  const baseUrl = "https://intentwire.com";
  
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

  let categories = [];
  try {
    categories = await fetchCategories();
  } catch (err) {
    console.error("❌ Error fetching categories", err);
  }

  let sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemapIndex += `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Update sitemap links to use new SEO-friendly URLs
  for (const category of categories) {
    if (!category.subcategories) continue;
    for (const sub of category.subcategories) {
      sitemapIndex += `
        <sitemap>
          <loc>${baseUrl}/sitemaps/subcategory/${sub.slug}</loc>
          <lastmod>${currentDate}</lastmod>
        </sitemap>
      `;
    }
  }

  sitemapIndex += `
    <sitemap><loc>${baseUrl}/sitemaps/blog-sitemap</loc><lastmod>${currentDate}</lastmod></sitemap>
    <sitemap><loc>${baseUrl}/sitemaps/static-sitemap</loc><lastmod>${currentDate}</lastmod></sitemap>
    <sitemap><loc>${baseUrl}/sitemaps/solutions-sitemap</loc><lastmod>${currentDate}</lastmod></sitemap>
  `;

  sitemapIndex += `</sitemapindex>`;

  return new Response(sitemapIndex, {
    headers: { 
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600" // Cache for 1 hour
    },
  });
}