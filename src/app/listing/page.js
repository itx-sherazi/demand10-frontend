'use client'
import React, { useState, useEffect } from "react";
import Testimonials, { TestimonialsSkeleton } from './components/Testimonials';
import ListingForm from './components/ListingForm';
import OtherSections from './components/OtherSections';
import { checkUserAuth } from '@/services/userApi';
import dynamic from 'next/dynamic';

// Dynamically import the AuthForm to avoid SSR issues
const AuthForm = dynamic(() => import('@/Componenets/ui/AuthForm'), { ssr: false });

export default function Review() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAuthForm, setShowAuthForm] = useState(false);

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

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#f0f4f8] to-[#e2e8f0]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#f0f4f8] to-[#e2e8f0] overflow-hidden">
          <div className="relative w-full mx-auto py-8 px-4">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-[#253347] mb-4">
                Welcome To Demand 10!
              </h1>
              <p className="text-lg md:text-xl text-[#314158] mb-6 max-w-4xl">
                Ensure that your potential customers can discover your business while
                they research their next purchase on SoftwareSuggest.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Testimonials Section */}
            <div className="lg:w-1/2">
              <TestimonialsSkeleton />
            </div>
            
            {/* Listing Form Skeleton */}
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-white to-[#f8fafc] rounded-2xl shadow-lg p-8 border border-gray-100 max-w-xl mx-auto">
                <div className="space-y-4">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto animate-pulse"></div>
                  <div className="flex justify-center mt-6">
                    <div className="h-12 w-12 rounded-full bg-gray-200 animate-pulse"></div>
                  </div>
                  <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto animate-pulse"></div>
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
    <div className="min-h-screen bg-gradient-to-b from-[#f0f4f8] to-[#e2e8f0]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#f0f4f8] to-[#e2e8f0] overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 opacity-10">
          <div className="w-40 h-40 rounded-full bg-[#314158]"></div>
        </div>
        <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 opacity-10">
          <div className="w-24 h-24 rounded-full bg-[#8d9fbe]"></div>
        </div>
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-10">
          <div className="w-32 h-32 rounded-full bg-[#314158]"></div>
        </div>
        
        <div className="relative w-full mx-auto py-12 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-[#253347] mb-6">
              Welcome To Demand 10!
            </h1>
            <p className="text-lg md:text-xl text-[#314158] mb-8 max-w-4xl mx-auto">
              Ensure that your potential customers can discover your business while
              they research their next purchase on SoftwareSuggest.
            </p>
            <div className="flex justify-center">
              <button 
                onClick={() => {
                  if (user) {
                    document.getElementById('listing-form').scrollIntoView({ behavior: 'smooth' });
                  } else {
                    setShowAuthForm(true);
                  }
                }}
                className="bg-gradient-to-r from-[#314158] to-[#253347] hover:from-[#253347] hover:to-[#1a2533] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#314158]"
              >
                {user ? 'List Your Product Now' : 'Sign In to List Your Product'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Testimonials Section */}
          <div className="lg:w-1/2">
            <Testimonials />
          </div>
          
          {/* Comprehensive Product Listing Form */}
          <div className="lg:w-1/2" id="listing-form">
            {user ? (
              <ListingForm />
            ) : (
              <div className="bg-gradient-to-br from-white to-[#f8fafc] rounded-2xl shadow-lg p-8 border border-gray-100 max-w-xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-[#253347] mb-4">List Your Product</h2>
                <p className="text-[#314158] mb-6">
                  Sign in to list your company and reach more customers. It&apos;s free and takes less than 5 minutes.
                </p>
                <div className="space-y-4">
                  <button
                    onClick={() => setShowAuthForm(true)}
                    className="w-full bg-gradient-to-r from-[#314158] to-[#253347] hover:from-[#253347] hover:to-[#1a2533] text-white font-medium py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#314158]"
                  >
                    Sign In / Register
                  </button>
                  <p className="text-sm text-gray-500">
                    Already have an account? <button 
                      onClick={() => setShowAuthForm(true)}
                      className="text-[#314158] hover:underline font-medium focus:outline-none"
                    >
                      Sign in here
                    </button>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Other Sections */}
      <OtherSections />

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