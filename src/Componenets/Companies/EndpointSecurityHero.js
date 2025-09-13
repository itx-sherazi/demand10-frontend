import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, HomeIcon, SearchIcon } from 'lucide-react';

const EndpointSecurityHero = ({ categoryName = "Endpoint Security", description, name = "Endpoint Security Software", onSearch, totalCompanies }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm, locationTerm);
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#314158] to-[#253347]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="py-4">
          <nav className="flex items-center text-gray-300 text-sm" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors flex items-center">
              <HomeIcon className="w-4 h-4 mr-1" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            <Link href="/research" className="hover:text-white transition-colors">
              Research
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            <Link href="/endpoint-security" className="hover:text-white transition-colors">
              {categoryName}
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            <span className="text-gray-400 truncate max-w-xs md:max-w-md">
              {name}
            </span>
          </nav>
        </div>

        {/* Hero Section */}
        <div className="py-8 md:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
                {name}
              </h1>
              
              <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl font-light">
                {description || `Discover top-rated ${name.toLowerCase()} providers with verified reviews, detailed profiles, and comprehensive comparison tools. Find the perfect solution for your business needs.`}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 flex-1 border border-white/20">
                  <div className="text-gray-300 text-sm font-medium mb-1">Last Updated</div>
                  <div className="text-white font-semibold text-lg">September 2025</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 flex-1 border border-white/20">
                  <div className="text-gray-300 text-sm font-medium mb-1">Companies Listed</div>
                  <div className="text-white font-semibold text-lg">{totalCompanies?.toLocaleString() || '1,000'}+ Providers</div>
                </div>
              </div>
            </div>

            {/* Right Content - Search Box */}
            <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 transform transition-all duration-300 hover:shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#314158]/10 flex items-center justify-center mr-3">
                  <SearchIcon className="w-6 h-6 text-[#314158]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Find Companies
                </h2>
              </div>
              
              <p className="text-gray-600 mb-6 text-base">
                Search our database of verified {name.toLowerCase()} providers to find the perfect match for your business.
              </p>
              
              <form onSubmit={handleSearchSubmit} className="space-y-5">
                <div>
                  <label htmlFor="company-search" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name or Keywords
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="company-search"
                      placeholder="Search companies..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#314158] focus:border-transparent transition-all duration-200 text-base shadow-sm"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="location-search" className="block text-sm font-semibold text-gray-700 mb-2">
                    Location
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="location-search"
                      placeholder="Enter location..."
                      value={locationTerm}
                      onChange={(e) => setLocationTerm(e.target.value)}
                      className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#314158] focus:border-transparent transition-all duration-200 text-base shadow-sm"
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#314158] to-[#253347] hover:from-[#253347] hover:to-[#1a2533] text-white font-bold py-4 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-base"
                >
                  Search Companies
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndpointSecurityHero;