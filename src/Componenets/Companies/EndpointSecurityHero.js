import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, HomeIcon, SearchIcon, Users, Award, Calendar } from 'lucide-react';

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
    <div className="bg-[#1a365d]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="py-4">
          <nav className="flex items-center text-blue-200 text-sm" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors flex items-center">
              <HomeIcon className="w-4 h-4 mr-1" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-blue-300" />
            <Link href="/research" className="hover:text-white transition-colors">
              Research
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-blue-300" />
            <Link href="/endpoint-security" className="hover:text-white transition-colors">
              {categoryName}
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-blue-300" />
            <span className="text-blue-100 truncate max-w-xs md:max-w-md">
              {name}
            </span>
          </nav>
        </div>

        {/* Hero Section */}
        <div className="pb-13">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {name}
              </h1>
              
              <p className="text-blue-100 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl">
                {description || `Discover top-rated ${name.toLowerCase()} providers with verified reviews, detailed profiles, and comprehensive comparison tools. Find the perfect solution for your business needs.`}
              </p>
              
              {/* Stats Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-blue-200" />
                    </div>
                    <div>
                      <div className="text-blue-200 text-sm font-medium mb-1">Companies Listed</div>
                      <div className="text-white font-bold text-2xl">{totalCompanies?.toLocaleString() || '1,000'}+</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mr-4">
                      <Award className="w-6 h-6 text-blue-200" />
                    </div>
                    <div>
                      <div className="text-blue-200 text-sm font-medium mb-1">Verified Reviews</div>
                      <div className="text-white font-bold text-2xl">10K+</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center mt-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="w-10 h-10 rounded-full bg-blue-300 border-2 border-[#1a365d]"></div>
                  ))}
                </div>
                <div className="ml-4">
                  <p className="text-white font-medium">Trusted by 10,000+ businesses</p>
                  <p className="text-blue-200 text-sm">Join our community of satisfied users</p>
                </div>
              </div>
            </div>

            {/* Right Content - Search Box */}
            <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Find Companies</h2>
                <p className="text-gray-600">Search our database of verified providers</p>
              </div>
              
              <form onSubmit={handleSearchSubmit} className="space-y-6">
                <div>
                  <label htmlFor="company-search" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name or Keywords
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <SearchIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="company-search"
                      placeholder="Search companies..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0249aa] focus:border-transparent transition-all duration-200 text-base shadow-sm"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="location-search" className="block text-sm font-semibold text-gray-700 mb-2">
                    Location
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <SearchIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="location-search"
                      placeholder="Enter location..."
                      value={locationTerm}
                      onChange={(e) => setLocationTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0249aa] focus:border-transparent transition-all duration-200 text-base shadow-sm"
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full cursor-pointer bg-[#0249aa] hover:bg-[#1a365d] text-white font-bold py-4 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-base flex items-center justify-center"
                >
                  Search Companies
                </button>
                
                <div className="text-center pt-4">
                  <p className="text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Updated September 2025
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndpointSecurityHero;