"use client";
import Marquee from "react-fast-marquee";
import { useState, useEffect, useRef } from 'react';
import { searchHeroCompanies } from "@/services/api";
import Link from "next/link";
import Image from "next/image";
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
      // Use the new hero search service function
      const data = await searchHeroCompanies(searchQuery.trim());
      
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
    <section className="bg-[#0249aa] text-white">
      {/* Hero Content */}
      <div className="max-w-6xl mx-auto px-4 py-10 sm:py-10 md:py-10">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Find Your Perfect Business Software
          </h1>
          
          {/* Subheading */}
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Discover trusted solutions from our curated selection of verified providers
          </p>
          
          {/* Search Bar - Central Element */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative" ref={dropdownRef}>
              <div className="flex rounded-xl bg-white shadow-xl border border-blue-200 overflow-hidden">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => searchQuery.trim() !== '' && searchResults.length > 0 && setShowDropdown(true)}
                  placeholder="Search for software, services or providers..."
                  className="flex-grow px-6 py-4 text-gray-900 placeholder-gray-500 focus:outline-none text-base"
                />
                <button className="bg-[#0249aa] hover:bg-[#0356c7] px-6 flex items-center justify-center transition-colors duration-200">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </div>
              
              {/* Search Results Dropdown */}
              {showDropdown && (
                <div className="absolute z-50 mt-2 w-full bg-white rounded-xl shadow-lg border border-gray-200 max-h-80 overflow-y-auto">
                  {isLoading ? (
                    <div className="py-4 px-5 text-gray-700">
                      <div className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Searching...</span>
                      </div>
                    </div>
                  ) : searchResults.length > 0 ? (
                    <ul>
                      {searchResults.map((company) => (
                        <li 
                          key={company._id}
                          onClick={() => handleCompanySelect(company)}
                          className="px-5 py-4 hover:bg-blue-50 cursor-pointer text-gray-800 border-b border-gray-100 last:border-b-0 transition-colors duration-150"
                        >
                          <div className="flex items-center">
                            {company.image ? (
                              <img 
                                src={company.image} 
                                alt={company.companyName}
                                className="w-10 h-10 rounded-full object-contain mr-4 border border-blue-100"
                              />
                            ) : (
                              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 border border-blue-200">
                                <span className="text-blue-800 font-bold">
                                  {company.companyName.charAt(0)}
                                </span>
                              </div>
                            )}
                            <div>
                              <div className="font-semibold">{company.companyName}</div>
                              {company.subcategory && (
                                <div className="text-sm text-gray-600 mt-1">
                                  {company.subcategory.name}
                                </div>
                              )}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="py-6 px-5 text-gray-600 text-center">
                      <svg className="w-12 h-12 mx-auto text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <p className="font-medium">No companies found</p>
                      <p className="text-sm mt-1">Try a different search term</p>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            {/* Supporting Text */}
            <p className="text-blue-200 text-sm mt-4 flex items-center justify-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Trusted by thousands of businesses worldwide
            </p>
          </div>
          
          {/* Quick Category Links */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-blue-200 text-sm font-semibold mb-3">POPULAR CATEGORIES</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['CRM Software', 'Accounting', 'HR Management', 'Project Management', 'Marketing'].map((category, index) => (
                <button 
                  key={index}
                  className="px-4 py-2 bg-white hover:bg-blue-800/40 text-black rounded-full text-sm transition-colors duration-200 border border-blue-400/20"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
        
      {/* Enhanced Bottom Marquee Section */}
      {/* <div className="relative bg-gradient-to-r from-[#314158] to-[#253347] py-6">
        <div className="w-full mx-auto px-4">
          <div className="flex items-center mb-4">
            <div className="h-8 w-1 bg-white rounded-full mr-3"></div>
            <h2 className="text-xl font-bold text-white">Popular Companies</h2>
          </div>
          <Marquee gradient={false} speed={50} pauseOnHover={true} className="py-2">
            {homepageCompanies.length > 0 ? (
              homepageCompanies.map((company) => {
               
                
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
                      
                      <div className="flex-1 min-w-0">
                        {company.subcategory && company.subcategory.name && (
                          <div className="mb-1">
                            <span className="text-xs font-semibold text-[#314158] bg-[#f0f4f8] px-2 py-1 rounded-full">
                              {company.subcategory.name}
                            </span>
                          </div>
                        )}
                        
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
                        
                        <h3 className="text-sm font-bold text-gray-900 truncate mb-1 leading-tight">
                          {company.companyName}
                        </h3>
                        
                      
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
      </div> */}
    </section>
  );
}