import { fetchBlogsSitemap } from "@/services/api";

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
  
  let blogs = [];

  try {
    blogs = await fetchBlogsSitemap(); // returns array with slug + date or updatedAt
  } catch (err) {
    console.error("❌ Error fetching blogs:", err);
  }

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Blog listing page
  sitemap += `
    <url>
      <loc>${baseUrl}/blog</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
      <lastmod>${currentDate}</lastmod>
    </url>
  `;

  for (const blog of blogs) {
    if (!blog.slug) continue;

    // Ensure valid date for lastModified with better error handling
    let formattedLastModified = currentDate; // Default to current date
    const lastModified = blog.updatedAt || blog.date;
    
    if (lastModified) {
      try {
        const dateObj = new Date(lastModified);
        // Check if date is valid
        if (!isNaN(dateObj.getTime())) {
          formattedLastModified = dateObj.toISOString();
        }
      } catch (dateError) {
        console.error(`❌ Invalid date for blog ${blog.slug}:`, lastModified);
        // Keep default currentDate
      }
    }

    sitemap += `
      <url>
        <loc>${baseUrl}/insights/${blog.slug}</loc>
        <lastmod>${formattedLastModified}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
      </url>
    `;
  }

  sitemap += `</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600",
    },
  });
}