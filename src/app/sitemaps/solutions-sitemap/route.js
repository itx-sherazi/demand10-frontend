import { fetchCategories } from "@/services/api";

export const dynamic = "force-dynamic";

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
    categories = await fetchCategories(); // isme subcategories included hain
  } catch (err) {
    console.error("❌ Error fetching categories:", err);
  }

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Add solutions listing page
  sitemap += `
    <url>
      <loc>${baseUrl}/solutions</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
      <lastmod>${currentDate}</lastmod>
    </url>
  `;

  // 🔹 Loop through all categories & subcategories
  for (const category of categories) {
    if (!category.subcategories) continue;

    for (const sub of category.subcategories) {
      sitemap += `
        <url>
          <loc>${baseUrl}/solutions/${sub.slug}</loc>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
          <lastmod>${currentDate}</lastmod>
        </url>
      `;
    }
  }

  sitemap += `</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600",
    },
  });
}