"use client";

import { useState, useEffect } from 'react';
import { searchCompanies } from '@/services/userApi';
import { toast } from 'react-toastify';
import Link from 'next/link';
import Image from 'next/image';

export default function ReviewsTab() {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null); // Selected company

  // Handle search input change
  const handleSearchChange = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setSelectedCompany(null); // Reset selection

    if (query.length > 1) {
      setIsLoading(true);
      try {
        const response = await searchCompanies(query);
        if (response.ok) {
          setSuggestions(response.companies);
          setShowSuggestions(true);
        }
      } catch (error) {
        console.error('Error searching companies:', error);
        toast.error('Failed to search companies');
      } finally {
        setIsLoading(false);
      }
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  // Handle company selection
  const handleSelectCompany = (company) => {
    setSelectedCompany(company);
    setSearchQuery(company.companyName);
    setShowSuggestions(false);
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.search-container')) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Write a Review</h2>

      <div className="max-w-2xl mx-auto">
        <p className="text-gray-600 mb-6 text-center">
          Search for a company to write a review. Share your experience to help others make informed decisions.
        </p>

        <div className="search-container relative">
          <div className="flex items-center border-2 border-[#4ecfc5] rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[#4ecfc5] focus-within:border-[#4ecfc5]">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={() => searchQuery.length > 1 && setShowSuggestions(true)}
              placeholder="Search for a company..."
              className="flex-1 px-4 py-3 focus:outline-none"
            />
            {isLoading && (
              <div className="px-3">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#4ecfc5]"></div>
              </div>
            )}
          </div>

          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute z-10 w-full mt-1 bg-white border-2 border-[#4ecfc5] rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {suggestions.map((company) => (
                <div
                  key={company._id}
                  onClick={() => handleSelectCompany(company)}
                  className="flex items-center px-4 py-3 hover:bg-[#f0f9f9] cursor-pointer border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-200 rounded-md overflow-hidden">
                    {company.image ? (
                      <Image 
                        src={company.image} 
                        alt={company.companyName} 
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                        <span className="text-xs text-gray-500">No Image</span>
                      </div>
                    )}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">{company.companyName}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {showSuggestions && suggestions.length === 0 && searchQuery.length > 1 && !isLoading && (
            <div className="absolute z-10 w-full mt-1 bg-white border-2 border-[#4ecfc5] rounded-lg shadow-lg">
              <div className="px-4 py-3 text-gray-500">
                No companies found
              </div>
            </div>
          )}
        </div>

        {/* Next button as a Link */}
        {selectedCompany && (
          <div className="mt-6 flex flex-col items-center">
            <div className="flex items-center mb-4 p-4 bg-[#f0f9f9] rounded-lg border border-[#4ecfc5]/20 w-full max-w-md">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-200 rounded-md overflow-hidden mr-4">
                {selectedCompany.image ? (
                  <Image 
                    src={selectedCompany.image} 
                    alt={selectedCompany.companyName} 
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span className="text-xs text-gray-500">No Image</span>
                  </div>
                )}
              </div>
              <div>
                <p className="font-medium text-gray-900">{selectedCompany.companyName}</p>
                <p className="text-sm text-gray-500">Selected for review</p>
              </div>
            </div>

            <Link
              href={`/user-dashboard/reviews/${selectedCompany.slug}/write`}
              className="px-6 py-3 bg-gradient-to-r from-[#4ecfc5] to-[#3ab5a8] text-white rounded-lg font-semibold hover:from-[#3ab5a8] hover:to-[#2fa197] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Next →
            </Link>
          </div>
        )}

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Can{`'`}t find the company you{`'`}re looking for? Make sure it{`'`}s already listed on IntentWire.
          </p>
          <Link
            href="/user-dashboard/get-list"
            className="mt-4 text-[#4ecfc5] hover:text-[#3ab5a8] font-medium inline-block"
          >
            List your company
          </Link>
        </div>
      </div>
    </div>
  );
}
