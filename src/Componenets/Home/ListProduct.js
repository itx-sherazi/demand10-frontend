import React from 'react';
import Image from "next/image";

export default function ListProductSection() {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 py-16 px-4 relative overflow-hidden">
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
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8 lg:pl-8 lg:pr-4 lg:w-5/12">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                List Your Product
              </h2>
              
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-semibold text-[#314158] mb-4">
                  Boost Your Reach at Zero Cost
                </h3>
                
                <div className="space-y-4">
                  {[
                    "Expand your reach to a larger audience",
                    "Generate leads that convert",
                    "Accelerate profit growth strategically"
                  ].map((text, i) => (
                    <div key={i} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-[#314158]/10 flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#314158]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              <button className="bg-[#314158] hover:bg-[#314158]/90 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 mt-8 shadow-md hover:shadow-lg inline-flex items-center text-lg">
                Get Listed
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Right Column - Logos */}
          <div className="space-y-6 lg:pr-8 lg:pl-4 lg:w-7/12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Trusted by 500+ Vendors
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join leading companies that trust us to showcase their products
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {[
                { src: "https://www.91-cdn.com/saasworthy-cdn/saasworthy-new/public/images/web/vendors/monday-com.jpeg", alt: "Monday.com" },
                { src: "https://www.91-cdn.com/saasworthy-cdn/saasworthy-new/public/images/web/vendors/salesforce.png", alt: "Salesforce" },
                { src: "https://www.91-cdn.com/saasworthy-cdn/saasworthy-new/public/images/web/vendors/pipedrive.png", alt: "Pipedrive" },
                { src: "https://www.91-cdn.com/saasworthy-cdn/saasworthy-new/public/images/web/vendors/wrike.png", alt: "Wrike" },
                { src: "https://www.91-cdn.com/saasworthy-cdn/saasworthy-new/public/images/web/vendors/hubspot.jpeg", alt: "HubSpot" },
                { src: "https://www.91-cdn.com/saasworthy-cdn/saasworthy-new/public/images/web/vendors/ninjaone.png", alt: "NinjaOne" },
                { src: "https://www.91-cdn.com/saasworthy-cdn/saasworthy-new/public/images/web/vendors/apollo-io.png", alt: "Apollo.io" },
                { src: "https://www.91-cdn.com/saasworthy-cdn/saasworthy-new/public/images/web/vendors/zoho.jpeg", alt: "Zoho" },
              ].map((logo, i) => (
                <div key={i} className="bg-white rounded-xl flex items-center justify-center p-4 border border-[#314158]/20 hover:border-[#314158]/50 transition-all duration-300 hover:shadow-md aspect-square">
                  <img
                    src={logo.src} 
                    alt={logo.alt} 
                    className="object-contain w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}