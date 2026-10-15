import ArticleDetail from "@/Componenets/SingelBlog/SingelBlogPage";
import Link from "next/link";
import { fetchSingelBlogs } from "@/services/api";
import sanitizeHtml from "@/utils/sanitizeHtml";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const response = await fetchSingelBlogs(slug);
    const blog = response?.data;

    // ✅ Title Handling
    let title = blog?.metaTitle || blog?.title || "Business Insights";
    if (title.length < 45) {
      title += " | Demand10 Insights";
    }
    if (title.length > 55) {
      title = title.slice(0, 52) + "...";
    }

    // ✅ Description Handling (Priority: metaDescription > blog.description > blog.body > fallback)
    let description = blog?.metaDescription || blog?.description
      ? (blog?.metaDescription || blog.description).trim()
      : blog?.body
      ? blog.body
          .replace(/<[^>]+>/g, " ")
          .replace(/\s+/g, " ")
          .trim()
          .slice(0, 160)
      : "Explore the latest insights and strategies in business technology, MSP solutions, and cybersecurity.";

    if (description.length > 155) {
      description = description.slice(0, 152) + "...";
    }

    // Ensure we're using the correct image path from the backend
    const image = blog?.image ? (blog.image.startsWith('http') ? blog.image : `https://demand10.com${blog.image}`) : "https://demand10.com/default-og.png";

    // Generate keywords from blog tags and keywords
    const keywords = [
      ...(blog?.keywords || []),
      ...(blog?.tags || []),
      blog?.title || "Business insights",
      "MSP solutions",
      "MSSP services",
      "Business technology",
      "managed services provider near me",
      "msp services near me",
      "managed it services near me",
      "Cloud solutions",
    ];

    return {
      title,
      description,
      keywords: keywords.filter((keyword, index) => keywords.indexOf(keyword) === index), // Remove duplicates
      alternates: {
        canonical: `https://demand10.com/insights/${slug}`,
      },
      openGraph: {
        title,
        description,
        url: `https://demand10.com/insights/${slug}`,
        type: "article",
        siteName: "Demand10",
        publishedTime: blog?.date,
        
        tags: blog?.tags || [],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        site: "@demand10",
      },
    };
  } catch (error) {
    console.error("Metadata error:", error);
    return {
      title: "Article Not Found | Demand10",
      description: "This article could not be found.",
      alternates: {
        canonical: `https://demand10.com/insights/${slug}`,
      },
    };
  }
}


export default async function Page({ params }) {
  const { slug } = await params;

  try {
    const response = await fetchSingelBlogs(slug);

    if (!response?.ok) {
      throw new Error("Article not found");
    }

    // Ensure we're passing the correct data structure; clean the editor HTML on the server
    const rawBlog = response.data || response;
    const blogData = { ...rawBlog, body: sanitizeHtml(rawBlog.body) };

    return (
      <main>
        <ArticleDetail blogDetail={blogData} />
      </main>
    );
  } catch (error) {
    console.error("Error fetching article data", error);
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="text-center bg-white p-8 rounded-2xl shadow-lg max-w-md border border-gray-200">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Failed to load article
          </h1>
          <p className="text-gray-600 mb-6">
            We couldn&apos;t load the article. Please try again later.
          </p>
          <Link
            href="/blog"
            className="inline-block bg-gradient-to-r from-[#265ba3] to-blue-700 text-white px-6 py-2 rounded-lg hover:from-[#1e4a86] hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }
}