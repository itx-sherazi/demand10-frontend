'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { MdKeyboardArrowRight } from "react-icons/md";

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

  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Enhanced Decorative SVG Background Elements */}
      {/* Top Left Decorative Element */}
      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 opacity-5">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="200" fill="#314158" fillOpacity="0.1"/>
          <circle cx="200" cy="200" r="160" fill="#314158" fillOpacity="0.15"/>
          <circle cx="200" cy="200" r="120" fill="#314158" fillOpacity="0.2"/>
          <circle cx="200" cy="200" r="80" fill="#314158" fillOpacity="0.25"/>
          <circle cx="200" cy="200" r="40" fill="#314158" fillOpacity="0.3"/>
        </svg>
      </div>

      {/* Top Right Decorative Element */}
      <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 opacity-5">
        <svg width="250" height="250" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="125" cy="125" r="125" fill="#8d9fbe" fillOpacity="0.1"/>
          <circle cx="125" cy="125" r="100" fill="#8d9fbe" fillOpacity="0.15"/>
          <circle cx="125" cy="125" r="75" fill="#8d9fbe" fillOpacity="0.2"/>
          <circle cx="125" cy="125" r="50" fill="#8d9fbe" fillOpacity="0.25"/>
          <circle cx="125" cy="125" r="25" fill="#8d9fbe" fillOpacity="0.3"/>
        </svg>
      </div>

      {/* Bottom Right Decorative Element */}
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-10">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M150 0C232.843 0 300 67.157 300 150C300 232.843 232.843 300 150 300C67.157 300 0 232.843 0 150C0 67.157 67.157 0 150 0Z" fill="#314158"/>
          <path d="M150 40C210.751 40 260 89.249 260 150C260 210.751 210.751 260 150 260C89.249 260 40 210.751 40 150C40 89.249 89.249 40 150 40Z" fill="#8d9fbe"/>
          <path d="M150 80C183.137 80 210 106.863 210 140C210 173.137 183.137 200 150 200C116.863 200 90 173.137 90 140C90 106.863 116.863 80 150 80Z" fill="#ffffff"/>
        </svg>
      </div>

      {/* Bottom Left Decorative Element */}
      <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 opacity-5">
        <svg width="280" height="280" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="280" height="280" fill="#314158" fillOpacity="0.05"/>
          <path d="M0 0L280 280M280 0L0 280" stroke="#8d9fbe" strokeWidth="2"/>
          <circle cx="140" cy="140" r="80" fill="#314158" fillOpacity="0.1"/>
          <circle cx="140" cy="140" r="60" fill="#8d9fbe" fillOpacity="0.1"/>
          <circle cx="140" cy="140" r="40" fill="#314158" fillOpacity="0.1"/>
          <circle cx="140" cy="140" r="20" fill="#8d9fbe" fillOpacity="0.1"/>
        </svg>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-1/4 right-1/4 opacity-5">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="15" width="50" height="50" rx="8" transform="rotate(15 15 15)" fill="#314158"/>
        </svg>
      </div>

      <div className="absolute bottom-1/3 left-1/3 opacity-5">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="30,8 52,30 30,52 8,30" fill="#8d9fbe"/>
        </svg>
      </div>

      <div className="w-full mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Explore Software Categories
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the perfect software solutions for your business needs across various categories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categoriesData.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 relative group"
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Enhanced Decorative circle elements for consistent design */}
              <div className="absolute top-0 left-0 w-24 h-24 rounded-full border-2 border-[#8d9fbe] opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full border-2 border-[#8d9fbe] opacity-20 translate-x-1/2 translate-y-1/2"></div>
              
              {/* Additional decorative elements */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#314158] opacity-5"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full bg-[#8d9fbe] opacity-10"></div>
              
              <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-[#314158] to-[#253347] relative z-10">
                <h2 className="text-lg font-semibold text-white">{category.category}</h2>
              </div>
              <div className="p-6 relative z-10">
                <ul className="space-y-3">
                  {category.subcategory.slice(0, 6).map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-gray-600 hover:text-[#314158] transition-colors group/subitem"
                    >
                      <Link
                        href={`/${item.slug || item}`}
                        className="flex items-center py-1 text-sm hover:underline"
                      >
                        <span className="group-hover/subitem:translate-x-1 transition-transform duration-200">
                          {item.name || item}
                        </span>
                        <MdKeyboardArrowRight className="text-base opacity-0 group-hover/subitem:opacity-100 transition-opacity duration-200 ml-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoftwareCategories;