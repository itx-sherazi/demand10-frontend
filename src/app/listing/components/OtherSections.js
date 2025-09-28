'use client'
import React, { useState } from "react";
import { ArrowRight, CheckCircle, TrendingUp, Eye, Users, BarChart, Star, Shield, Zap } from 'lucide-react';

export default function OtherSections() {
  // State for service type selection
  const [serviceType, setServiceType] = useState('custom');

  // Function to handle button clicks
  const handleButtonClick = (action) => {
    console.log(`Button clicked: ${action}`);
    // In a real app, you would implement the actual functionality here
    // For example, navigate to a page, open a modal, or make an API call
  };

  // Service data
  const services = {
    custom: [
      {
        title: "Pay Per Click",
        description: "Boost your website traffic and increase sales by adopting our PPC services at lowest pricing",
        icon: <TrendingUp className="w-6 h-6 text-white" />,
        features: ["Targeted Advertising", "Real-time Analytics", "Budget Control"]
      },
      {
        title: "Marketing Qualified Lead",
        description: "Ensure that your sales representatives pursue the best quality leads with our MQL services",
        icon: <Users className="w-6 h-6 text-white" />,
        features: ["Lead Scoring", "Behavioral Tracking", "Conversion Optimization"]
      },
      {
        title: "Premium Listing",
        description: "Get listed on our Demand10 platform to get exposed to monthly traffic of 1M+",
        icon: <Star className="w-6 h-6 text-white" />,
        features: ["Enhanced Visibility", "Priority Placement", "Detailed Analytics"]
      }
    ],
    'value-added': [
      {
        title: "SEO Optimization",
        description: "Improve your search engine rankings and drive more organic traffic to your website",
        icon: <TrendingUp className="w-6 h-6 text-white" />,
        features: ["Keyword Research", "On-page Optimization", "Performance Tracking"]
      },
      {
        title: "Content Marketing",
        description: "Engage your audience with compelling content that drives conversions and builds brand loyalty",
        icon: <Zap className="w-6 h-6 text-white" />,
        features: ["Content Strategy", "Blog Writing", "Social Media Content"]
      },
      {
        title: "Social Media Management",
        description: "Build and engage your community across all major social platforms with our expert management",
        icon: <Users className="w-6 h-6 text-white" />,
        features: ["Profile Management", "Content Creation", "Engagement Tracking"]
      }
    ]
  };

  // Benefits data
  const benefits = [
    {
      title: "Trusted Platform",
      description: "Join thousands of companies who trust our platform for growth",
      icon: <Shield className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Increased Visibility",
      description: "Reach millions of active buyers searching for your solutions",
      icon: <Eye className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Expand Reach",
      description: "Connect with potential customers across multiple industries",
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Track Performance",
      description: "Monitor your listing performance with detailed analytics",
      icon: <BarChart className="h-6 w-6 text-blue-600" />
    }
  ];

  // Customer logos
  const customerLogos = [
    { src: "/images/monday.avif", alt: "Monday.com" },
    { src: "/images/salesforce.avif", alt: "Salesforce" },
    { src: "/images/pipedrive.avif", alt: "Pipedrive" },
    { src: "/images/wrike.avif", alt: "Wrike" },
    { src: "/images/hubspot.avif", alt: "HubSpot" },
    { src: "/images/ninjaone.avif", alt: "NinjaOne" }
  ];

  return (
    <div className="space-y-20">
      {/* Request A Free Estimate Section */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Request A Free Estimate
            </h2>
            <p className="text-[#4897de] text-center max-w-3xl mx-auto text-lg">
              Ready to take the first step? Request a free estimate and let&apos;s explore how we can work together
              to achieve your vision.
            </p>
          </div>
          
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md p-1">
              <button 
                className={`py-3 px-6 font-semibold rounded-lg transition-all duration-300 ${
                  serviceType === 'custom' 
                    ? 'bg-gradient-to-br from-[#265ba3] via-[#1e4a86] to-[#1a365d] text-white shadow-md' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setServiceType('custom')}
              >
                Custom Services
              </button>
              <button 
                className={`py-3 px-6 font-semibold rounded-lg transition-all duration-300 ${
                  serviceType === 'value-added' 
                    ? 'bg-gradient-to-br from-[#265ba3] via-[#1e4a86] to-[#1a365d] text-white shadow-md' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setServiceType('value-added')}
              >
                Value Added Services
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services[serviceType].map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group flex flex-col h-full"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#265ba3] via-[#1e4a86] to-[#1a365d] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{service.title}</h3>
                <p className="text-[#4897de] mb-6 leading-relaxed flex-grow text-center">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => handleButtonClick(`get-estimate-${service.title.toLowerCase().replace(/\s+/g, '-')}`)}
                  className="bg-gradient-to-br from-[#265ba3] via-[#1e4a86] to-[#1a365d] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center mx-auto group mt-auto"
                >
                  Get a Free Estimate
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* List Your Product Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              List Your Product & Boost Your Market Presence
            </h2>
            <p className="text-[#4897de] text-center mb-12 max-w-3xl mx-auto text-lg">
              Follow these simple steps to get started and maximize your business potential
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-blue-200 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-[#4897de] text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <button 
              onClick={() => handleButtonClick('list-product-now')}
              className="bg-gradient-to-br from-[#265ba3] via-[#1e4a86] to-[#1a365d] text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto group"
            >
              List Your Product Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Happy Customers Section */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Trusted by Thousands of Happy Customers
            </h2>
            <p className="text-[#4897de] text-center mb-12 max-w-3xl mx-auto text-lg">
              Join the growing community of businesses that have transformed their growth with our platform
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {customerLogos.map((logo, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-sm p-6 flex items-center justify-center h-32 border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                onClick={() => handleButtonClick(`customer-logo-${index+1}`)}
              >
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-200 rounded-xl w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={logo.src} 
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain p-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}