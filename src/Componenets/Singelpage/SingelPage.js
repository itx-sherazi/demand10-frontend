"use client";
import LeftForm from "@/Componenets/LeftForm";
import Form from "@/Componenets/RightForm";
import SalesForceInfo from "@/Componenets/SalesForceInfo";
import { HiOutlineHome } from "react-icons/hi";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import DynamicCompanyTable from "@/Componenets/Tabel";
import DataFeatures from "@/Componenets/DataFeatures";
import DataSources from "@/Componenets/DataSources";
import Link from "next/link";
import StatsSection from "@/Componenets/StatsSection";
import { Check, Rocket, Globe } from "lucide-react";
import { HiOutlineChartBar, HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { MdOutlineMyLocation } from "react-icons/md";
import Image from "next/image";

// Memoized components for better performance
const MemoizedStatsSection = React.memo(StatsSection);
const MemoizedDataFeatures = React.memo(DataFeatures);
const MemoizedSalesForceInfo = React.memo(SalesForceInfo);
const MemoizedDataSources = React.memo(DataSources);
const MemoizedLeftForm = React.memo(LeftForm);
const MemoizedForm = React.memo(Form);
const MemoizedDynamicCompanyTable = React.memo(DynamicCompanyTable);

export default function DetailPage({ productData }) {
  const [activeTab, setActiveTab] = useState("Stats");
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const tabs = useMemo(
    () => ["Stats", "Company Tabel", "Data Fields", "Contact Form"],
    []
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle loading state properly
  useEffect(() => {
    if (productData) {
      if (productData.product) {
        setLoading(false);
      } else if (productData.title) {
        setLoading(false);
      } else {
        setError('Invalid product data structure');
        setLoading(false);
      }
    } else {
      setError('No product data received');
      setLoading(false);
    }
  }, [productData]);

  const product = useMemo(() => {
    if (!productData) return null;
    return productData.product || productData;
  }, [productData]);

  // Generate structured data for SEO
  const structuredData = useMemo(() => {
    if (!product) return null;
    
    return {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": product.title || "B2B Solution",
      "description": product.description || "Professional B2B solution for businesses",
      "image": product.image || "/images/companyImage.png",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "brand": {
        "@type": "Brand",
        "name": "IntentWire"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "120"
      }
    };
  }, [product]);

  const scrollToSection = useCallback((sectionId) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 100;
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  const heroContent = useMemo(() => {
    if (error) return <div className="text-red-500 text-center">{error}</div>;
    if (!product) return <div className="text-gray-500 text-center">Loading product data...</div>;

    return (
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6 md:gap-8">
        <div className="lg:col-span-2 space-y-3 md:space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            {product.title || 'Product Title'}
          </h1>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-4xl">
            {product.description || 'Product description not available'}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-4 sm:space-y-0">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-300">
                <Image
                  src="/images/companyImage.png"
                  alt={`${product.title} logo`}
                  width={100}
                  height={100}
                  className="w-full h-full object-contain p-1 bg-white"
                  priority
                />
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-500">Powered by</p>
                <p className="font-semibold text-gray-900">IntentWire Team</p>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-500">Clients Served</p>
              <p className="font-semibold text-gray-900">
                {product.connects || '0'}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Service Type</p>
              <p className="font-semibold text-gray-900">B2B Solutions</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0">
            <div className="bg-green-50 px-4 py-2 rounded-full text-sm font-medium text-green-700 flex items-center gap-2">
              <HiOutlineMagnifyingGlass className="w-4 h-4" />
              Software Comparison
            </div>
            <div className="bg-blue-50 px-4 py-2 rounded-full text-sm font-medium text-blue-700 flex items-center gap-2">
              <MdOutlineMyLocation className="w-4 h-4" />
              Lead Generation
            </div>
            <div className="bg-yellow-50 px-4 py-2 rounded-full text-sm font-medium text-yellow-700 flex items-center gap-2">
              <HiOutlineChartBar className="w-4 h-4" />
              {(product.category || "Technology").charAt(0).toUpperCase() +
                (product.category || "Technology").slice(1)}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-green-50">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="text-white w-3 h-3" />
              </div>
              <div className="flex items-baseline gap-1">
                <p className="text-xs text-green-600 font-medium">
                  Last Updated:
                </p>
                <p className="text-sm font-semibold text-green-800">
                  {product.lastUpdated ? new Date(product.lastUpdated).toLocaleDateString() : '1 June 2025'}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-blue-50">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Rocket className="text-white w-3 h-3" />
              </div>
              <div className="flex items-baseline gap-1">
                <p className="text-xs text-blue-600 font-medium">Launched:</p>
                <p className="text-sm font-semibold text-blue-800">
                  {product.createdAt ? new Date(product.createdAt).toLocaleDateString() : 'Jan 2025'}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-emerald-50">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                <Globe className="text-white w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900">
                  {product.region || "Global"}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }, [product, error]);


  if (error) {
    return (
      <div className="w-full bg-[#f3f8f5] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl font-semibold mb-4">{error}</div>
          <Link href="/" className="text-blue-600 hover:underline">
            Go back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#f3f8f5]">
      {/* Structured Data for SEO */}
      {structuredData && (
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}

      {/* Hero Section */}
      <section className="bg-[#c4ebdd] pt-8 pb-20 md:pt-12 md:pb-12 px-4 sm:px-6 lg:px-8 xl:px-10 relative overflow-hidden">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 md:mb-8">
          <ol className="flex items-center space-x-2 text-gray-600 font-medium text-xs sm:text-sm md:text-base">
            <li>
              <Link href="/" className="hover:underline flex items-center">
                <HiOutlineHome className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
                <span>IntentWire</span>
              </Link>
            </li>
            <li aria-hidden="true">{">"}</li>
            <li className="text-gray-800 font-semibold" aria-current="page">
              {product?.title || 'Product'}
            </li>
          </ol>
        </nav>

        {heroContent}
      </section>

      {/* Content Area */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 xl:px-20 pb-10 md:pb-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8 md:space-y-10">
            <div className="space-y-2 md:space-y-4">
              {/* Header */}
              <header className="sticky top-0 md:top-23 shadow-lg md:shadow-xl w-full h-4 mt-3 md:h-[80px] rounded-xl md:rounded-2xl z-10 bg-white border-b border-gray-200 overflow-x-auto">
                <div className="max-w-7xl mx-auto h-full">
                  <nav aria-label="Product details navigation" className="flex items-center justify-evenly h-full">
                    {tabs.map((tab) => (
                      <button
                        key={tab}
                        onClick={() => scrollToSection(tab)}
                        className={`flex-1 text-center px-3 sm:px-4 md:px-6 py-3 md:py-4 cursor-pointer text-sm sm:text-base font-bold transition-colors duration-200 whitespace-nowrap ${
                          activeTab === tab
                            ? "text-[#004baa]"
                            : "text-gray-700 hover:text-[#004baa]"
                        }`}
                        aria-current={activeTab === tab ? "page" : undefined}
                      >
                        {tab === "Company Tabel" ? "Companies" : tab}
                      </button>
                    ))}
                  </nav>
                </div>
              </header>

              <div></div>

              {/* Content sections */}
              {product && (
                <article itemScope itemType="https://schema.org/Product">
                  <meta itemProp="name" content={product.title} />
                  <meta itemProp="description" content={product.description} />
                  
                  <section id="Stats" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
                    <meta itemProp="ratingValue" content="4.8" />
                    <meta itemProp="reviewCount" content="120" />
                    <MemoizedStatsSection productData={product} />
                  </section>

                  <section
                    id="Company Tabel"
                    className="scroll-mt-16 md:scroll-mt-32 mt-15"
                  >
                    <MemoizedDynamicCompanyTable />
                  </section>

                  <section
                    id="Data Fields"
                    className="scroll-mt-16 md:scroll-mt-32"
                    itemProp="additionalProperty"
                  >
                    <MemoizedDataFeatures productData={product} />
                  </section>

                  <section
                    id="SalesForceInfo"
                    className="scroll-mt-16 md:scroll-mt-32"
                  >
                    <MemoizedSalesForceInfo productData={product} />
                  </section>

                  <MemoizedDataSources productData={product} />

                  <section
                    id="Contact Form"
                    className="scroll-mt-16 md:scroll-mt-32"
                    itemProp="offers"
                    itemScope
                    itemType="https://schema.org/Offer"
                  >
                    <meta itemProp="priceCurrency" content="USD" />
                    <meta itemProp="availability" content="https://schema.org/InStock" />
                    <MemoizedLeftForm productData={product} />
                  </section>
                </article>
              )}
            </div>
          </div>

          {/* Right Sidebar */}
          {isMobile && activeTab !== "ContactForm" && product && (
            <aside className="lg:hidden mt-6">
              <MemoizedForm productData={product} />
            </aside>
          )}

          <aside className="hidden lg:block relative -mt-50 md:-mt-92 z-10">
            <div className="sticky top-28 md:top-36">
              {product && <MemoizedForm productData={product} />}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}