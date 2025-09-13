import ArticleDetail from "@/Componenets/SingelBlog/SingelBlogPage";
import { fetchSingelBlogs } from "@/services/api";

export async function generateMetadata({ params }) {
  const { slug } = params;

  try {
    const response = await fetchSingelBlogs(slug);
    const blog = response?.data;

    // ✅ Title Handling
    let title = blog?.metaTitle || blog?.title || "B2B Blog";
    if (title.length < 45) {
      title += " | IntentWire Blog";
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
      : "Explore the latest insights and strategies in B2B marketing, sales, and technology.";

    if (description.length > 155) {
      description = description.slice(0, 152) + "...";
    }

    // Ensure we're using the correct image path from the backend
    const image = blog?.image ? (blog.image.startsWith('http') ? blog.image : `https://intentwire.com${blog.image}`) : "https://intentwire.com/default-og.png";

    // Generate keywords from blog tags and keywords
    const keywords = [
      ...(blog?.keywords || []),
      ...(blog?.tags || []),
      blog?.title || "B2B blog",
      "B2B blog",
      "2025 strategies",
      "B2B marketing trends",
      "IntentWire insights",
      "lead generation",
      "omnichannel personalization",
      "AI in B2B",
    ];

    return {
      title,
      description,
      keywords: keywords.filter((keyword, index) => keywords.indexOf(keyword) === index), // Remove duplicates
      alternates: {
        canonical: `https://intentwire.com/insights/${slug}`,
      },
      openGraph: {
        title,
        description,
        url: `https://intentwire.com/insights/${slug}`,
        type: "article",
        siteName: "IntentWire",
        publishedTime: blog?.date,
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: blog?.title || "Blog Image",
          },
        ],
        tags: blog?.tags || [],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
        site: "@intentwire",
      },
    };
  } catch (error) {
    console.error("Metadata error:", error);
    return {
      title: "Blog Not Found | IntentWire",
      description: "This blog post could not be found.",
      alternates: {
        canonical: `https://intentwire.com/insights/${slug}`,
      },
    };
  }
}


export default async function Page({ params }) {
  const { slug } = await params;

  try {
    const response = await fetchSingelBlogs(slug);

    if (!response?.ok) {
      throw new Error("Blog not found");
    }

    // Ensure we're passing the correct data structure
    const blogData = response.data || response;

    return (
      <main>
        <ArticleDetail blogDetail={blogData} />
      </main>
    );
  } catch (error) {
    console.error("Error fetching blog data", error);
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Failed to load blog
          </h1>
          <p className="text-gray-600 mb-6">
            We couldn&apos;t load the blog post. Please try again later.
          </p>
          <button
            onClick={() => window.history.back()}
            className="bg-[#40c0b8] text-white px-6 py-2 rounded-lg hover:bg-[#359a94] transition-colors"
          >
            Go Back
          </button>
        </div>
      </main>
    );
  }
}