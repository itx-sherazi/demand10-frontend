'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const SoftwareCategories = ({ categories = [] }) => {
  // If no categories are passed, use the hardcoded data as fallback
  const categoriesData = categories && categories.length > 0 
    ? categories.map(category => ({
        category: category.name,
        subcategory: category.subcategories || []
      }))
    : [
        {
          category: "Accounting & Finance Software",
          subcategory: [
            { name: "Expense Management Software", slug: "expense-management-software" },
            { name: "Accounts Payable Automation Software", slug: "accounts-payable-automation-software" },
            { name: "Accounts Receivable Software", slug: "accounts-receivable-software" },
            { name: "Sales Tax and VAT Compliance Software", slug: "sales-tax-vat-compliance-software" }
          ]
        },
        {
          category: "Artificial Intelligence Software",
          subcategory: [
            { name: "AI Chatbots Software", slug: "ai-chatbots-software" },
            { name: "Natural Language Processing (NLP) Software", slug: "natural-language-processing-software" },
            { name: "Large Language Models (LLMs) Software", slug: "large-language-models-software" },
            { name: "AI Image Generators Software", slug: "ai-image-generators-software" },
            { name: "Text to Speech Software", slug: "text-to-speech-software" },
            { name: "Vector Database Software", slug: "vector-database-software" }
          ]
        },
        {
          category: "Collaboration & Productivity Software",
          subcategory: [
            { name: "VoIP Providers", slug: "voip-providers" },
            { name: "Board Management Software", slug: "board-management-software" },
            { name: "Digital Adoption Platforms", slug: "digital-adoption-platforms" },
            { name: "Survey Software", slug: "survey-software" },
            { name: "Video Conferencing Software", slug: "video-conferencing-software" }
          ]
        },
        {
          category: "Customer Service Software",
          subcategory: [
            { name: "Help Desk Software", slug: "help-desk-software" },
            { name: "Field Service Management Software", slug: "field-service-management-software" },
            { name: "Customer Success Software", slug: "customer-success-software" },
            { name: "Live Chat Software", slug: "live-chat-software" },
            { name: "Experience Management Software", slug: "experience-management-software" },
            { name: "Customer Communications Management Software", slug: "customer-communications-management-software" },
            { name: "Customer Service Automation Software", slug: "customer-service-automation-software" }
          ]
        }
      ];

  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <div id="categories" className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="w-full mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0249aa] mb-6 leading-tight">
            Explore Software Categories
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the perfect software solutions for your business needs across various categories
          </p>
        </div>
        
        {/* Mobile Accordion View */}
        <div className="lg:hidden space-y-4 mb-12">
          {categoriesData.map((category, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleCategory(index)}
                className="w-full p-4 bg-[#0249aa] text-white text-left font-bold flex justify-between items-center"
              >
                <span>{category.category}</span>
                <svg 
                  className={`w-5 h-5 transition-transform duration-300 ${expandedCategory === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {expandedCategory === index && (
                <div className="p-4 bg-white">
                  <ul className="space-y-3">
                    {category.subcategory.slice(0, 8).map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link
                          href={`/${item.slug || item}`}
                          className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-[#0249aa] transition-all duration-200"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">{item.name || item}</span>
                            <svg className="w-4 h-4 text-[#0249aa]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                          </div>
                        </Link>
                      </li>
                    ))}
                    {category.subcategory.length > 8 && (
                      <li>
                        <Link
                          href="#"
                          className="block py-2 px-3 rounded-lg text-[#0249aa] font-bold text-sm"
                        >
                          View All {category.subcategory.length} Subcategories
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Desktop Grid View */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categoriesData.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <div className="bg-[#0249aa] p-4">
                <h2 className="text-lg font-bold text-white text-center">{category.category}</h2>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  {category.subcategory.slice(0, 6).map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        href={`/${item.slug || item}`}
                        className="block py-3 px-4 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-[#0249aa] transition-all duration-200 border border-transparent hover:border-[#0249aa]/20"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{item.name || item}</span>
                          <svg className="w-4 h-4 text-[#0249aa]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                          </svg>
                        </div>
                      </Link>
                    </li>
                  ))}
                  {category.subcategory.length > 6 && (
                    <li>
                      <Link
                        href="#"
                        className="block py-3 px-4 rounded-lg text-[#0249aa] font-bold text-sm text-center border border-transparent hover:border-[#0249aa]/20"
                      >
                        +{category.subcategory.length - 6} more
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Categories Button */}
        <div className="text-center mt-12">
          <Link href="/categories">
            <button className="bg-[#0249aa] hover:bg-[#0356c7] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
              View All Categories
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SoftwareCategories;