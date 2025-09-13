"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useState, useEffect, useRef } from 'react';
import Link from "next/link";

export default function HeroSection({ homepageCompanies = [] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dropdownRef = useRef(null);
  const searchTimeoutRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Search companies when user types
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      setShowDropdown(false);
      return;
    }

    // Clear previous timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    // Set new timeout to debounce API calls
    searchTimeoutRef.current = setTimeout(() => {
      searchCompanies();
    }, 300);

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [searchQuery]);

  const searchCompanies = async () => {
    if (searchQuery.trim() === '') return;
    
    setIsLoading(true);
    try {
      // Use the new hero search endpoint with proper query parameter handling
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/hero-search?company_name=${encodeURIComponent(searchQuery.trim())}`);
      const data = await response.json();
      
      if (data.ok && Array.isArray(data.data)) {
        // Limit to 10 results
        setSearchResults(data.data.slice(0, 10));
        setShowDropdown(data.data.length > 0);
      } else {
        setSearchResults([]);
        setShowDropdown(false);
      }
    } catch (error) {
      console.error('Search error:', error);
      setSearchResults([]);
      setShowDropdown(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real application, this would trigger a search
    console.log('Searching for:', searchQuery);
  };

  const handleCompanySelect = (company) => {
    setSearchQuery('');
    setSearchResults([]);
    setShowDropdown(false);
    
    // Navigate to company profile
    if (company.subcategory && company.subcategory.slug) {
      window.location.href = `/${company.subcategory.slug}/${company.slug}`;
    } else {
      window.location.href = `/company/${company.slug}`;
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] overflow-hidden">
      {/* Enhanced Top Left Decorative Element */}
      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 opacity-10">
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="250" cy="250" r="250" fill="#314158" fillOpacity="0.1"/>
          <circle cx="250" cy="250" r="200" fill="#314158" fillOpacity="0.15"/>
          <circle cx="250" cy="250" r="150" fill="#314158" fillOpacity="0.2"/>
          <circle cx="250" cy="250" r="100" fill="#314158" fillOpacity="0.25"/>
          <circle cx="250" cy="250" r="50" fill="#314158" fillOpacity="0.3"/>
        </svg>
      </div>

      {/* Additional Decorative Circles - Top Right */}
      <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 opacity-5">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="150" r="150" fill="#8d9fbe" fillOpacity="0.1"/>
          <circle cx="150" cy="150" r="120" fill="#8d9fbe" fillOpacity="0.15"/>
          <circle cx="150" cy="150" r="90" fill="#8d9fbe" fillOpacity="0.2"/>
          <circle cx="150" cy="150" r="60" fill="#8d9fbe" fillOpacity="0.25"/>
          <circle cx="150" cy="150" r="30" fill="#8d9fbe" fillOpacity="0.3"/>
        </svg>
      </div>

      {/* Enhanced Bottom Right Decorative Element */}
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-10">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M200 0C310.457 0 400 89.543 400 200C400 310.457 310.457 400 200 400C89.543 400 0 310.457 0 200C0 89.543 89.543 0 200 0Z" fill="#314158"/>
          <path d="M200 50C282.843 50 350 117.157 350 200C350 282.843 282.843 350 200 350C117.157 350 50 282.843 50 200C50 117.157 117.157 50 200 50Z" fill="#8d9fbe"/>
          <path d="M200 100C255.228 100 300 144.772 300 200C300 255.228 255.228 300 200 300C144.772 300 100 255.228 100 200C100 144.772 144.772 100 200 100Z" fill="#ffffff"/>
        </svg>
      </div>

      {/* Additional Decorative Element - Bottom Left */}
      <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 opacity-5">
        <svg width="350" height="350" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="350" height="350" fill="#314158" fillOpacity="0.05"/>
          <path d="M0 0L350 350M350 0L0 350" stroke="#8d9fbe" strokeWidth="2"/>
          <circle cx="175" cy="175" r="100" fill="#314158" fillOpacity="0.1"/>
          <circle cx="175" cy="175" r="75" fill="#8d9fbe" fillOpacity="0.1"/>
          <circle cx="175" cy="175" r="50" fill="#314158" fillOpacity="0.1"/>
          <circle cx="175" cy="175" r="25" fill="#8d9fbe" fillOpacity="0.1"/>
        </svg>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-1/4 right-1/4 opacity-5">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="60" height="60" rx="10" transform="rotate(15 20 20)" fill="#314158"/>
        </svg>
      </div>

      <div className="absolute bottom-1/3 left-1/3 opacity-5">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="40,10 70,40 40,70 10,40" fill="#8d9fbe"/>
        </svg>
      </div>

      {/* Hero Content */}
      <div className="relative w-full mx-auto py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <main className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
              Make Confident <br className="sm:hidden" /><span className="text-[#314158]">Technology</span> Decisions
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
              Search for products and find in-depth information with verified peer reviews that millions of buyers trust
            </p>
            
            {/* Search Form with Autocomplete */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-16 relative" ref={dropdownRef}>
              <div className="flex-grow relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => searchQuery.trim() !== '' && searchResults.length > 0 && setShowDropdown(true)}
                  placeholder="Search for products, services, or companies..."
                  className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#314158] focus:border-transparent shadow-lg text-lg"
                />
                
                {/* Search Results Dropdown */}
                {showDropdown && (
                  <div className="absolute z-20 mt-2 w-full bg-[#eef0f3] rounded-xl shadow-xl border border-gray-200 max-h-96 overflow-y-auto">
                    {isLoading ? (
                      <div className="px-6 py-4 text-center text-gray-500">
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#314158] mr-2"></div>
                          Searching...
                        </div>
                      </div>
                    ) : searchResults.length > 0 ? (
                      searchResults.map((company) => (
                        <div
                          key={company._id}
                          className="px-4 py-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 cursor-pointer flex items-center transition-all duration-200"
                          onClick={() => handleCompanySelect(company)}
                        >
                          {/* Company Logo */}
                          <div className="flex-shrink-0 mr-4">
                            <div className="w-12 h-12 rounded-lg overflow-hidden bg-white flex items-center justify-center border-2 border-[#e2e8f0] shadow-sm">
                              <Image
                                src={company.image || "/placeholder-logo.png"}
                                alt={company.companyName}
                                width={40}
                                height={40}
                                className="object-contain p-1"
                              />
                            </div>
                          </div>
                          
                          {/* Company Info */}
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 truncate text-sm flex items-center ">
                              {company.companyName}
                            </h3>
                            {company.subcategory && company.subcategory.name && (
                              <div className="flex items-center mt-1">
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-50 bg-opacity-10 text-[#314158]">
                                  {company.subcategory.name}
                                </span>
                              </div>
                            )}
                          </div>
                          
                          {/* Arrow Icon */}
                          <div className="flex-shrink-0 ml-2">
                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="px-6 py-8 text-center text-gray-500">
                        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <h3 className="mt-2 text-sm font-medium text-gray-900">No companies found</h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Try searching for something else
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
      
      {/* Enhanced Bottom Marquee Section */}
      <div className="relative bg-gradient-to-r from-[#314158] to-[#253347] py-6">
        <div className="w-full mx-auto px-4">
          <div className="flex items-center mb-4">
            <div className="h-8 w-1 bg-white rounded-full mr-3"></div>
            <h2 className="text-xl font-bold text-white">Popular Companies</h2>
          </div>
          <Marquee gradient={false} speed={50} pauseOnHover={true} className="py-2">
            {homepageCompanies.length > 0 ? (
              homepageCompanies.map((company) => {
               
                
                // Create the correct URL using subcategory slug
                const companyUrl = company.subcategory && company.subcategory.slug 
                  ? `/${company.subcategory.slug}/${company.slug}` 
                  : `/company/${company.slug}`;
                  
                
                return (
                  <Link href={companyUrl} key={company._id}>
                    <div
                      className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 mx-3 flex items-center 
                      hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                      style={{ minWidth: '280px', maxWidth: '280px' }}
                    >
                      {/* Logo - Left Side */}
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center border-2 border-[#314158]">
                          <Image
                            src={company.image || "/placeholder-logo.png"}
                            alt={company.companyName}
                            width={64}
                            height={64}
                            className="object-contain"
                          />
                        </div>
                      </div>
                      
                      {/* Content - Right Side */}
                      <div className="flex-1 min-w-0">
                        {/* Subcategory Name - Top */}
                        {company.subcategory && company.subcategory.name && (
                          <div className="mb-1">
                            <span className="text-xs font-semibold text-[#314158] bg-[#f0f4f8] px-2 py-1 rounded-full">
                              {company.subcategory.name}
                            </span>
                          </div>
                        )}
                        
                        {/* Star Rating Boxes - Middle */}
                        {company.totalReviews > 0 && (
                          <div className="mb-2">
                            <div className="flex gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <div
                                  key={i}
                                  className="bg-[#27364a] px-1 py-0.5 transform -skew-x-12"
                                  style={{ clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)' }}
                                >
                                  <svg
                                    className="w-3 h-3 text-white fill-current transform skew-x-12"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                  </svg>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {/* Company Name - Bottom */}
                        <h3 className="text-sm font-bold text-gray-900 truncate mb-1 leading-tight">
                          {company.companyName}
                        </h3>
                        
                        {/* Review Count */}
                        {/* {company.totalReviews > 0 && (
                          <p className="text-xs text-gray-500">
                            {company.totalReviews} Review{company.totalReviews !== 1 ? 's' : ''}
                          </p>
                        )} */}
                      </div>
                    </div>
                  </Link>
                );
              })
            ) : (
              <div className="flex items-center mx-8">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-[#314158] mr-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#314158]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <span className="text-lg font-bold text-white mr-3">Managed Service Providers</span>
              </div>
            )}
          </Marquee>
        </div>
      </div>
    </section>
  );
}