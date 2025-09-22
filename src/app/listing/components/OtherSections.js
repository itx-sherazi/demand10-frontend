'use client'
import React, { useState } from "react";

export default function OtherSections() {
  // State for service type selection
  const [serviceType, setServiceType] = useState('custom');

  // Function to handle button clicks
  const handleButtonClick = (action) => {
    console.log(`Button clicked: ${action}`);
    // In a real app, you would implement the actual functionality here
    // For example, navigate to a page, open a modal, or make an API call
  };

  return (
    <div>
      {/* Why Us Section */}
      <div className="bg-[#1a365d] rounded-2xl p-6 md:p-8 text-white mx-4 my-8 shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Why Choose SoftwareSuggest?</h2>
        <p className="text-center mb-6 max-w-3xl mx-auto text-[#e2e8f0]">
          Reach millions of active buyers on SoftwareSuggest: Get Free listings, customer reviews, 
          enhanced brand value, and increased visibility for vendors, driving improved marketing and lead generation.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center border border-[#8d9fbe]/30 hover:border-[#8d9fbe]/60 transition-all duration-300 hover:shadow-lg hover:bg-white/20">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <img 
                src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-13/kJHws4GtE1.png" 
                alt="Listed software" 
                className="w-8 h-8"
              />
            </div>
            <div className="text-3xl font-bold mb-2">50k+</div>
            <p className="text-[#e2e8f0]">Listed software & services</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center border border-[#8d9fbe]/30 hover:border-[#8d9fbe]/60 transition-all duration-300 hover:shadow-lg hover:bg-white/20">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <img 
                src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-13/hDYCnw4C6y.png" 
                alt="Categories" 
                className="w-8 h-8"
              />
            </div>
            <div className="text-3xl font-bold mb-2">1500+</div>
            <p className="text-[#e2e8f0]">Software & service categories</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center border border-[#8d9fbe]/30 hover:border-[#8d9fbe]/60 transition-all duration-300 hover:shadow-lg hover:bg-white/20">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <img 
                src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-13/QBRmannUOf.png" 
                alt="Active buyers" 
                className="w-8 h-8"
              />
            </div>
            <div className="text-3xl font-bold mb-2">10M+</div>
            <p className="text-[#e2e8f0]">Active yearly buyers</p>
          </div>
        </div>
        
        <div className="text-center">
          <button 
            onClick={() => handleButtonClick('list-product')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            List Your Product for Free
          </button>
        </div>
      </div>

      {/* Request A Free Estimate Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a365d] text-center mb-3">
            Request A Free Estimate
          </h2>
          <p className="text-[#0249aa] text-center mb-8 max-w-3xl mx-auto">
            Ready to take the first step? Request a free estimate and let&apos;s explore how we can work together
            to achieve your vision.
          </p>
          
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <button 
                className={`py-3 px-6 font-medium ${serviceType === 'custom' ? 'bg-[#1a365d] text-white' : 'text-[#1a365d] hover:bg-gray-50'}`}
                onClick={() => setServiceType('custom')}
              >
                Custom Services
              </button>
              <button 
                className={`py-3 px-6 font-medium ${serviceType === 'value-added' ? 'bg-[#1a365d] text-white' : 'text-[#1a365d] hover:bg-gray-50'}`}
                onClick={() => setServiceType('value-added')}
              >
                Value Added Services
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceType === 'custom' ? (
              <>
                {/* Service Card 1 */}
                <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-[#314158]/10 rounded-full shadow-md flex items-center justify-center mx-auto mb-4 border border-[#314158]/20">
                    <img 
                      src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-13/uREn5sFCmv.png" 
                      alt="Pay Per Click" 
                      className="w-8 h-8"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a365d] mb-3">Pay Per Click</h3>
                  <p className="text-[#0249aa] mb-5">
                    Boost your website traffic and increase sales by adopting our PPC services at lowest pricing
                  </p>
                  <button 
                    onClick={() => handleButtonClick('get-estimate-ppc')}
                    className="bg-[#1a365d] hover:bg-[#0249aa] text-white font-medium py-2.5 px-5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Get a Free Estimate
                  </button>
                </div>
                
                {/* Service Card 2 */}
                <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-[#314158]/10 rounded-full shadow-md flex items-center justify-center mx-auto mb-4 border border-[#314158]/20">
                    <img 
                      src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-13/6GDybxcDqN.png" 
                      alt="Marketing Qualified Lead" 
                      className="w-8 h-8"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a365d] mb-3">Marketing Qualified Lead</h3>
                  <p className="text-[#0249aa] mb-5">
                    Ensure that your sales representatives pursue the best quality leads with our MQL services
                  </p>
                  <button 
                    onClick={() => handleButtonClick('get-estimate-mql')}
                    className="bg-[#1a365d] hover:bg-[#0249aa] text-white font-medium py-2.5 px-5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Get a Free Estimate
                  </button>
                </div>
                
                {/* Service Card 3 */}
                <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-[#314158]/10 rounded-full shadow-md flex items-center justify-center mx-auto mb-4 border border-[#314158]/20">
                    <img 
                      src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-13/biOLJ7nG2G.png" 
                      alt="Premium Listing" 
                      className="w-8 h-8"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a365d] mb-3">Premium Listing</h3>
                  <p className="text-[#0249aa] mb-5">
                    Get listed on our SoftwareSuggest platform to get exposed to monthly traffic of 1M+.
                  </p>
                  <button 
                    onClick={() => handleButtonClick('get-estimate-premium')}
                    className="bg-[#1a365d] hover:bg-[#0249aa] text-white font-medium py-2.5 px-5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Get a Free Estimate
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Value Added Service Card 1 */}
                <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-[#314158]/10 rounded-full shadow-md flex items-center justify-center mx-auto mb-4 border border-[#314158]/20">
                    <img 
                      src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-13/uREn5sFCmv.png" 
                      alt="SEO Optimization" 
                      className="w-8 h-8"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a365d] mb-3">SEO Optimization</h3>
                  <p className="text-[#0249aa] mb-5">
                    Improve your search engine rankings and drive more organic traffic to your website
                  </p>
                  <button 
                    onClick={() => handleButtonClick('get-estimate-seo')}
                    className="bg-[#1a365d] hover:bg-[#0249aa] text-white font-medium py-2.5 px-5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Get a Free Estimate
                  </button>
                </div>
                
                {/* Value Added Service Card 2 */}
                <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-[#314158]/10 rounded-full shadow-md flex items-center justify-center mx-auto mb-4 border border-[#314158]/20">
                    <img 
                      src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-13/6GDybxcDqN.png" 
                      alt="Content Marketing" 
                      className="w-8 h-8"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a365d] mb-3">Content Marketing</h3>
                  <p className="text-[#0249aa] mb-5">
                    Engage your audience with compelling content that drives conversions and builds brand loyalty
                  </p>
                  <button 
                    onClick={() => handleButtonClick('get-estimate-content')}
                    className="bg-[#1a365d] hover:bg-[#0249aa] text-white font-medium py-2.5 px-5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Get a Free Estimate
                  </button>
                </div>
                
                {/* Value Added Service Card 3 */}
                <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-[#314158]/10 rounded-full shadow-md flex items-center justify-center mx-auto mb-4 border border-[#314158]/20">
                    <img 
                      src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-13/biOLJ7nG2G.png" 
                      alt="Social Media Management" 
                      className="w-8 h-8"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a365d] mb-3">Social Media Management</h3>
                  <p className="text-[#0249aa] mb-5">
                    Build and engage your community across all major social platforms with our expert management
                  </p>
                  <button 
                    onClick={() => handleButtonClick('get-estimate-social')}
                    className="bg-[#1a365d] hover:bg-[#0249aa] text-white font-medium py-2.5 px-5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Get a Free Estimate
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* List Your Product Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a365d] text-center mb-4">
            List Your Product & Boost Your Market Presence
          </h2>
          <p className="text-[#0249aa] text-center mb-10 max-w-3xl mx-auto">
            Follow these simple steps to get started and maximize your business potential
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 my-12">
            <div className="text-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-100 shadow-md relative hover:shadow-lg transition-all duration-300">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-[#1a365d] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                  1
                </div>
                <img 
                  src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-13/Wdb7N1KgOi.png" 
                  alt="Step 1" 
                  className="w-12 h-12"
                />
              </div>
              <div className="h-1 bg-gray-300 w-24 mx-auto mb-4"></div>
              <h3 className="font-bold text-[#1a365d] mb-2">Create FREE Listing</h3>
              <p className="font-medium text-sm text-[#0249aa]">Set up your basic company profile</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-100 shadow-md relative hover:shadow-lg transition-all duration-300">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-[#1a365d] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                  2
                </div>
                <img 
                  src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-13/2MAcGFgYtC.png" 
                  alt="Step 2" 
                  className="w-12 h-12"
                />
              </div>
              <div className="h-1 bg-gray-300 w-24 mx-auto mb-4"></div>
              <h3 className="font-bold text-[#1a365d] mb-2">List Your Product</h3>
              <p className="font-medium text-sm text-[#0249aa]">Add detailed product information</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-100 shadow-md relative hover:shadow-lg transition-all duration-300">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-[#1a365d] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                  3
                </div>
                <img 
                  src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-13/ncLGsstQ5w.png" 
                  alt="Step 3" 
                  className="w-12 h-12"
                />
              </div>
              <div className="h-1 bg-gray-300 w-24 mx-auto mb-4"></div>
              <h3 className="font-bold text-[#1a365d] mb-2">Maintain Your Listing</h3>
              <p className="font-medium text-sm text-[#0249aa]">Keep information up to date</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-100 shadow-md relative hover:shadow-lg transition-all duration-300">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-[#1a365d] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                  4
                </div>
                <img 
                  src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-13/v3vHvuaHs6.png" 
                  alt="Step 4" 
                  className="w-12 h-12"
                />
              </div>
              <h3 className="font-bold text-[#1a365d] mb-2">Boost Exposure</h3>
              <p className="font-medium text-sm text-[#0249aa]">Maximize visibility with us</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1a365d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#1a365d] mb-2">Trusted Platform</h3>
              <p className="mb-2 text-[#0249aa] text-sm">
                Join thousands of companies who trust our platform for growth
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1a365d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-bold text-[#1a365d] mb-2">Increased Visibility</h3>
              <p className="mb-2 text-[#0249aa] text-sm">
                Reach millions of active buyers searching for your solutions
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1a365d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#1a365d] mb-2">Expand Reach</h3>
              <p className="mb-2 text-[#0249aa] text-sm">
                Connect with potential customers across multiple industries
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1a365d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#1a365d] mb-2">Track Performance</h3>
              <p className="mb-2 text-[#0249aa] text-sm">
                Monitor your listing performance with detailed analytics
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <button 
              onClick={() => handleButtonClick('list-product-now')}
              className="bg-[#1a365d] hover:bg-[#0249aa] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              List Your Product Now
            </button>
          </div>
        </div>
      </div>

      {/* Happy Customers Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a365d] text-center mb-10">
          Trusted by Thousands of Happy Customers
        </h2>
        <p className="text-[#0249aa] text-center mb-10 max-w-3xl mx-auto">
          Join the growing community of businesses that have transformed their growth with our platform
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {[...Array(6)].map((_, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-center h-24 border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => handleButtonClick(`customer-logo-${index+1}`)}
            >
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-200 rounded-lg w-16 h-16 flex items-center justify-center">
                <span className="text-[#1a365d] font-bold text-xs">Logo {index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}