"use client";

import { useState, useEffect } from "react"; 
import { useRouter } from "next/navigation";
import { Calendar, User, Tag, FolderOpen, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';

export default function ArticleDetail({ blogDetail }) {
  const router = useRouter();
  const [imageError, setImageError] = useState(false);
  const [structuredData, setStructuredData] = useState(null);

  // Generate structured data for SEO
  useEffect(() => {
    if (!blogDetail) return;
    
    // Validate date
    const isValidDate = (dateString) => {
      return dateString && !isNaN(new Date(dateString).getTime());
    };
    
    const publicationDate = isValidDate(blogDetail.date) ? blogDetail.date : new Date().toISOString();
    
    const data = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": blogDetail.title,
      "description": blogDetail.metaDescription || blogDetail.description || "Detailed blog post",
      "image": blogDetail.image || "https://via.placeholder.com/800x400?text=Blog+Image",
      "datePublished": publicationDate,
      "dateModified": publicationDate,
      "author": {
        "@type": "Person",
        "name": blogDetail.author || "Admin"
      },
      "publisher": {
        "@type": "Organization",
        "name": "IntentWire",
        "logo": {
          "@type": "ImageObject",
          "url": "https://intentwire.com/images/logo.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": typeof window !== 'undefined' ? window.location.href : ""
      },
      "articleBody": blogDetail.body ? blogDetail.body.replace(/<[^>]*>/g, "").substring(0, 1000) : "",
      "keywords": [...(blogDetail.keywords || []), ...(blogDetail.tags || [])],
      "articleSection": blogDetail.category || "General"
    };
    
    setStructuredData(data);
  }, [blogDetail]);

  const formatDate = (dateString) => {
    if (!dateString) return "No date";
    // Validate date before formatting
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "Invalid date";
    
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const createMarkup = (html) => {
    return { __html: html };
  };

  if (!blogDetail) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Blog Not Found
          </h2>
          <p className="text-gray-600 mb-6">The requested blog post could not be loaded.</p>
          <button
            onClick={() => router.back()}
            className="bg-[#314158] text-white px-6 py-2 rounded-lg hover:bg-[#253347] transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Ensure we're using the correct image path
  const imageUrl = blogDetail.image 
    ? (blogDetail.image.startsWith('http') ? blogDetail.image : `https://intentwire.com${blogDetail.image}`)
    : "https://intentwire.com/default-og.png";

  // Validate date for time attribute
  const isValidDate = (dateString) => {
    return dateString && !isNaN(new Date(dateString).getTime());
  };

  const articleDate = isValidDate(blogDetail.date) ? new Date(blogDetail.date).toISOString() : new Date().toISOString();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Structured Data for SEO */}
      {structuredData && (
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section with Gradient Background */}
        <section className="relative bg-gradient-to-r from-[#314158] to-[#253347] overflow-hidden rounded-2xl mb-8">
          {/* Top Left Circles */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-20">
            <svg width="600" height="600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="300" cy="300" r="100" stroke="#8d9fbe" strokeWidth="1" />
              <circle cx="300" cy="300" r="200" stroke="#8d9fbe" strokeWidth="1" />
              <circle cx="300" cy="300" r="300" stroke="#8d9fbe" strokeWidth="1" />
              <circle cx="300" cy="300" r="400" stroke="#8d9fbe" strokeWidth="1" />
            </svg>
          </div>

          {/* Bottom Right Circles */}
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 opacity-20">
            <svg width="600" height="600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="300" cy="300" r="100" stroke="#8d9fbe" strokeWidth="1" />
              <circle cx="300" cy="300" r="200" stroke="#8d9fbe" strokeWidth="1" />
              <circle cx="300" cy="300" r="300" stroke="#8d9fbe" strokeWidth="1" />
              <circle cx="300" cy="300" r="400" stroke="#8d9fbe" strokeWidth="1" />
            </svg>
          </div>
          
          <div className="relative z-10 py-12 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Link 
                href="/blog" 
                className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Insights
              </Link>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                {blogDetail.title}
              </h1>
              
              <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <time dateTime={articleDate} className="text-sm">
                    {formatDate(blogDetail.date)}
                  </time>
                </div>
                
                {blogDetail.author && (
                  <div className="flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    <span className="text-sm">{blogDetail.author}</span>
                  </div>
                )}
                
                {blogDetail.category && (
                  <div className="flex items-center">
                    <FolderOpen className="w-5 h-5 mr-2" />
                    <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                      {blogDetail.category}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <article className="bg-white rounded-2xl overflow-hidden shadow-lg">
          {/* Featured Image */}
          <div className="relative w-full h-64 sm:h-80 md:h-96">
            {!imageError ? (
              <Image
                src={imageUrl}
                alt={blogDetail.title || "Blog image"}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                priority
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#314158] to-[#253347] flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl mb-2">📝</div>
                  <p className="text-xl font-medium">Article Image</p>
                </div>
              </div>
            )}
          </div>

          {/* Article Content */}
          <div className="p-6 sm:p-8">
            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <div
                className="text-gray-800 leading-relaxed space-y-4"
                dangerouslySetInnerHTML={createMarkup(blogDetail.body)}
                style={{
                  lineHeight: "1.8",
                  fontSize: "1.1rem",
                }}
              />
            </div>

            {/* Tags */}
            {(blogDetail.tags && blogDetail.tags.length > 0) && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag className="w-5 h-5 text-[#314158]" />
                  <div className="flex flex-wrap gap-2">
                    {blogDetail.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="text-sm bg-[#f0f4f9] text-[#314158] px-3 py-1 rounded-full hover:bg-[#314158] hover:text-white transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm text-gray-500">
                  Last updated: {formatDate(blogDetail.date)}
                </div>
                <div className="flex space-x-4">
                  <Link
                    href="/blog"
                    className="px-6 py-3 bg-gradient-to-r from-[#314158] to-[#253347] text-white font-medium rounded-lg hover:from-[#253347] hover:to-[#1a2533] transition-all shadow-md flex items-center"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Insights
                  </Link>
                </div>
              </div>
              
              {/* Display keywords */}
              {blogDetail.keywords && blogDetail.keywords.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Keywords</h3>
                  <div className="flex flex-wrap gap-2">
                    {blogDetail.keywords.map((keyword, index) => (
                      <span key={index} className="text-xs bg-[#314158] text-white px-3 py-1 rounded-full">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}