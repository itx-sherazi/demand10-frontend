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

  const staticPages = [
    { path: "/", changefreq: "monthly", priority: 1.0 },
    { path: "/about", changefreq: "monthly", priority: 0.6 },
    { path: "/contact", changefreq: "monthly", priority: 0.5 },
    { path: "/terms", changefreq: "monthly", priority: 0.3 },
    { path: "/privacy-policy", changefreq: "monthly", priority: 0.3 },
    { path: "/blog", changefreq: "monthly", priority: 0.7 },
    { path: "/data-set", changefreq: "monthly", priority: 0.7 },
    { path: "/faq", changefreq: "monthly", priority: 0.5 },
    { path: "/footer-about", changefreq: "monthly", priority: 0.3 },
    { path: "/history", changefreq: "monthly", priority: 0.4 },
    { path: "/services", changefreq: "monthly", priority: 0.6 },
    { path: "/strategies", changefreq: "monthly", priority: 0.5 },
    { path: "/term-policies", changefreq: "monthly", priority: 0.3 },
    { path: "/msp", changefreq: "weekly", priority: 0.8 },
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  for (const page of staticPages) {
    xml += `
    <url>
      <loc>${baseUrl}${page.path}</loc>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
      <lastmod>${currentDate}</lastmod>
    </url>`;
  }

  xml += `\n</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}