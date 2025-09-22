'use client'
import React, { useState, useEffect } from "react";
import ListingForm from './components/ListingForm';
import OtherSections from './components/OtherSections';
import { checkUserAuth } from '@/services/userApi';
import dynamic from 'next/dynamic';

// Dynamically import the AuthForm to avoid SSR issues
const AuthForm = dynamic(() => import('@/Componenets/ui/AuthForm'), { ssr: false });

export default function CompanyListing() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [currentStep, setCurrentStep] = useState(1); // 1: Intro, 2: Form Steps, 3: Success

  // Check if user is already logged in
  useEffect(() => {
    const checkUserAuthStatus = async () => {
      try {
        const data = await checkUserAuth();
        if (data.ok) {
          setUser(data.user);
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
      } finally {
        setLoading(false);
      }
    };

    checkUserAuthStatus();
  }, []);

  // Handle successful authentication
  const handleAuthSuccess = (userData) => {
    setUser(userData);
    setShowAuthForm(false);
  };

  // Handle listing form completion
  const handleListingCompleted = () => {
    setCurrentStep(3); // Move to success page
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f0f4f8]">
        {/* Hero Section */}
        <section className="relative bg-[#f0f4f8] overflow-hidden">
          <div className="relative w-full mx-auto py-16 px-4 sm:py-24">
            <div className="max-w-7xl mx-auto">
              <div className="h-16 bg-gray-200 rounded-xl w-3/4 mx-auto mb-6 animate-pulse"></div>
              <div className="h-8 bg-gray-200 rounded-lg w-1/2 mx-auto mb-10 animate-pulse"></div>
              <div className="flex justify-center gap-4">
                <div className="h-12 w-48 bg-gray-200 rounded-xl animate-pulse"></div>
                <div className="h-12 w-48 bg-gray-200 rounded-xl animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col gap-12">
            {/* Get Started Section Skeleton */}
            <div className="w-full">
              <div className="bg-white rounded-2xl shadow-lg p-12 border border-gray-100 max-w-3xl mx-auto">
                <div className="space-y-6">
                  <div className="h-10 bg-gray-200 rounded-xl w-1/3 mx-auto animate-pulse"></div>
                  <div className="h-6 bg-gray-200 rounded-lg w-2/3 mx-auto animate-pulse"></div>
                  <div className="h-12 bg-gray-200 rounded-xl w-full animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto animate-pulse"></div>
                </div>
              </div>
            </div>
            
            {/* Testimonials Skeleton */}
            <div className="w-full">
              <div className="text-center mb-10">
                <div className="h-10 bg-gray-200 rounded-xl w-1/3 mx-auto mb-4 animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded-lg w-1/2 mx-auto animate-pulse"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse"></div>
                    <div className="ml-4">
                      <div className="h-4 bg-gray-200 rounded w-24 mb-2 animate-pulse"></div>
                      <div className="h-3 bg-gray-200 rounded w-16 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse"></div>
                    <div className="ml-4">
                      <div className="h-4 bg-gray-200 rounded w-24 mb-2 animate-pulse"></div>
                      <div className="h-3 bg-gray-200 rounded w-16 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse"></div>
                    <div className="ml-4">
                      <div className="h-4 bg-gray-200 rounded w-24 mb-2 animate-pulse"></div>
                      <div className="h-3 bg-gray-200 rounded w-16 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <OtherSections />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f0f4f8]">
      {/* Header with Logo and Progress Bar */}
      <header className="bg-white shadow-md border-b border-gray-100 sticky top-0 z-10">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-[#1a365d] text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl shadow-md">
                D
              </div>
              <span className="ml-3 text-2xl font-bold text-gray-800">List Your Company</span>
            </div>

            {/* Progress Bar */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Step 1 - Introduction */}
              <div className="flex items-center">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  currentStep >= 1 ? "bg-[#1a365d]" : "bg-gray-300"
                }`}>
                  {currentStep > 1 && (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  )}
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  currentStep >= 1 ? "text-[#1a365d]" : "text-gray-500"
                }`}>
                  {currentStep > 1 ? "Introduction Complete" : "Introduction"}
                </span>
              </div>
              
              {/* Connector */}
              <div className={`w-12 h-0.5 ${currentStep > 1 ? "bg-[#1a365d]" : "bg-gray-300"}`}></div>
              
              {/* Step 2 - Listing Form */}
              <div className="flex items-center">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  currentStep >= 2 ? "bg-[#1a365d]" : "bg-gray-300"
                }`}>
                  {currentStep > 2 && (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  )}
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  currentStep >= 2 ? "text-[#1a365d]" : "text-gray-500"
                }`}>
                  {currentStep >= 2 ? (
                    currentStep > 2 ? "Form Submitted" : "Company Details"
                  ) : (
                    "Company Details"
                  )}
                </span>
              </div>
              
              {/* Connector */}
              <div className={`w-12 h-0.5 ${currentStep > 2 ? "bg-[#1a365d]" : "bg-gray-300"}`}></div>
              
              {/* Step 3 - Success */}
              <div className="flex items-center">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  currentStep >= 3 ? "bg-[#4ecfc5]" : "bg-gray-300"
                }`}>
                  {currentStep >= 3 && (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  )}
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  currentStep >= 3 ? "text-[#1a365d]" : "text-gray-500"
                }`}>
                  Success
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Conditionally render based on current step */}
      <main className="w-full">
        {currentStep === 1 && (
          // Step 1: Introduction
          <div className="text-center">
            {/* Hero Section - No links to home page */}
            <section className="relative bg-[#f0f4f8] overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 opacity-10">
                <div className="w-64 h-64 rounded-full bg-[#1a365d]"></div>
              </div>
              <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 opacity-10">
                <div className="w-40 h-40 rounded-full bg-[#0249aa]"></div>
              </div>
              <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-10">
                <div className="w-48 h-48 rounded-full bg-[#1a365d]"></div>
              </div>
              <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 opacity-10">
                <div className="w-32 h-32 rounded-full bg-[#0249aa]"></div>
              </div>
              
              <div className="relative w-full mx-auto py-16 px-4 sm:py-24">
                <div className="max-w-7xl mx-auto text-center">
                  <h1 className="text-4xl md:text-6xl font-bold text-[#1a365d] mb-6">
                    Welcome To Demand 10!
                  </h1>
                  <p className="text-xl md:text-2xl text-[#0249aa] mb-10 max-w-4xl mx-auto">
                    Ensure that your potential customers can discover your business while
                    they research their next purchase on SoftwareSuggest.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button 
                      onClick={() => {
                        if (user) {
                          setCurrentStep(2);
                          // Scroll to the listing form after a short delay to allow for rendering
                          setTimeout(() => {
                            const formElement = document.getElementById('listing-form');
                            if (formElement) {
                              formElement.scrollIntoView({ behavior: 'smooth' });
                            }
                          }, 100);
                        } else {
                          setShowAuthForm(true);
                        }
                      }}
                      className="bg-[#1a365d] hover:bg-[#0249aa] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1a365d]"
                    >
                      {user ? 'Continue to Listing Form' : 'Sign In to List Your Product'}
                    </button>
                    <button 
                      onClick={() => {
                        document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="bg-white text-[#1a365d] font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-[#1a365d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1a365d]"
                    >
                      How It Works
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Main Content */}
            <div className="w-full mx-auto px-4 py-8">
              <div className="flex flex-col gap-12">
                {/* Get Started Section - Enhanced styling */}
                <div className="w-full">
                  <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 max-w-5xl mx-auto text-center transform transition-all duration-300 hover:shadow-2xl">
                    <div className="w-16 h-16 bg-[#1a365d] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-[#1a365d] mb-4">List Your Product</h2>
                    <p className="text-[#0249aa] text-lg mb-8 max-w-2xl mx-auto">
                      Sign in to list your company and reach more customers. It&apos;s free and takes less than 5 minutes.
                    </p>
                    <div className="space-y-4 max-w-md mx-auto">
                      <button
                        onClick={() => {
                          if (user) {
                            setCurrentStep(2);
                            // Scroll to the listing form after a short delay to allow for rendering
                            setTimeout(() => {
                              const formElement = document.getElementById('listing-form');
                              if (formElement) {
                                formElement.scrollIntoView({ behavior: 'smooth' });
                              }
                            }, 100);
                          } else {
                            setShowAuthForm(true);
                          }
                        }}
                        className="w-full bg-[#1a365d] hover:bg-[#0249aa] text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1a365d] transform hover:-translate-y-1"
                      >
                        {user ? 'Continue to Listing Form' : 'Sign In / Register'}
                      </button>
                      <p className="text-sm text-gray-500">
                        Already have an account? <button 
                          onClick={() => setShowAuthForm(true)}
                          className="text-[#1a365d] hover:underline font-medium focus:outline-none"
                        >
                          Sign in here
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
                
              
              </div>
            </div>
            
            {/* How It Works Section */}
            <section id="how-it-works" className="py-16 bg-[#f0f4f8]">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">How It Works</h2>
                  <p className="text-[#0249aa] text-lg max-w-3xl mx-auto">
                    Listing your product on Demand 10 is simple and straightforward. Follow these easy steps to get started.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-20 h-20 bg-[#1a365d] rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-lg">
                      1
                    </div>
                    <h3 className="text-xl font-bold text-[#1a365d] mb-3">Create Your Profile</h3>
                    <p className="text-[#0249aa]">
                      Sign up and provide detailed information about your company and products.
                    </p>
                  </div>
                  
                  <div className="text-center p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-20 h-20 bg-[#1a365d] rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-lg">
                      2
                    </div>
                    <h3 className="text-xl font-bold text-[#1a365d] mb-3">Get Verified</h3>
                    <p className="text-[#0249aa]">
                      Our team will review and verify your listing to ensure quality.
                    </p>
                  </div>
                  
                  <div className="text-center p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-20 h-20 bg-[#1a365d] rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-lg">
                      3
                    </div>
                    <h3 className="text-xl font-bold text-[#1a365d] mb-3">Start Receiving Leads</h3>
                    <p className="text-[#0249aa]">
                      Once live, your listing will be visible to potential customers searching for your products.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Benefits Section */}
            <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">Benefits of Listing</h2>
                  <p className="text-[#0249aa] text-lg max-w-3xl mx-auto">
                    Discover how listing your product with us can help grow your business.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-[#f0f4f8] p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="w-14 h-14 bg-[#1a365d] rounded-xl flex items-center justify-center mb-5 shadow-md">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-[#1a365d] mb-2">Increased Visibility</h3>
                    <p className="text-[#0249aa] text-sm">
                      Reach millions of active buyers searching for products like yours.
                    </p>
                  </div>
                  
                  <div className="bg-[#f0f4f8] p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="w-14 h-14 bg-[#1a365d] rounded-xl flex items-center justify-center mb-5 shadow-md">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-[#1a365d] mb-2">Build Credibility</h3>
                    <p className="text-[#0249aa] text-sm">
                      Enhance your brand value with authentic customer reviews and ratings.
                    </p>
                  </div>
                  
                  <div className="bg-[#f0f4f8] p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="w-14 h-14 bg-[#1a365d] rounded-xl flex items-center justify-center mb-5 shadow-md">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-[#1a365d] mb-2">Generate Leads</h3>
                    <p className="text-[#0249aa] text-sm">
                      Connect with potential customers actively looking for your products.
                    </p>
                  </div>
                  
                  <div className="bg-[#f0f4f8] p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="w-14 h-14 bg-[#1a365d] rounded-xl flex items-center justify-center mb-5 shadow-md">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-[#1a365d] mb-2">Detailed Analytics</h3>
                    <p className="text-[#0249aa] text-sm">
                      Track your listing performance with comprehensive analytics and insights.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {currentStep === 2 && (
          // Step 2: Listing Form
          <div id="listing-form">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
              <div>
                
                <p className="text-[#0249aa] mt-2">Fill in your company details to get started</p>
              </div>
              {user && (
                <button 
                  onClick={() => {
                    if (window.confirm('Are you sure you want to go back? Your progress will be lost.')) {
                      setCurrentStep(1);
                    }
                  }}
                  className="text-[#1a365d] hover:text-[#0249aa] font-medium flex items-center bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-all"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                  </svg>
                  Back to Introduction
                </button>
              )}
            </div>
            <ListingForm onListingCompleted={handleListingCompleted} />
          </div>
        )}

        {currentStep === 3 && (
          // Step 3: Success
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center border border-gray-100 max-w-3xl mx-auto">
            <div className="bg-[#1a365d] text-white rounded-2xl w-24 h-24 flex items-center justify-center mx-auto mb-8 shadow-lg">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">Thank You!</h2>
            <p className="text-[#0249aa] mb-10 text-lg max-w-2xl mx-auto">
              Your company listing has been submitted successfully. Our team will review it shortly and notify you once it&apos;s live.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => window.location.href = '/'}
                className="px-8 py-4 bg-[#1a365d] text-white rounded-xl font-bold hover:bg-[#0249aa] transition-all shadow-lg hover:shadow-xl duration-300 transform hover:-translate-y-1"
              >
                Back to Home
              </button>
              <button
                onClick={() => {
                  setCurrentStep(1);
                  window.location.reload();
                }}
                className="px-8 py-4 bg-white text-[#1a365d] border-2 border-[#1a365d] rounded-xl font-bold hover:bg-[#f0f4f8] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                List Another Company
              </button>
            </div>
          </div>
        )}
      </main>
      
      {/* Other Sections - Only shown on Step 1 */}
      {currentStep === 1 && <OtherSections />}

      {/* Auth Form Popup */}
      {showAuthForm && (
        <AuthForm 
          onClose={() => setShowAuthForm(false)}
          onAuthSuccess={handleAuthSuccess}
        />
      )}
    </div>
  );
}