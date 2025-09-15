'use client'
import React, { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft, FaCheck, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { getCategoriesWithSubcategories, submitCompanyListing } from '@/services/userApi';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { checkUserAuth } from '@/services/userApi';

export default function ListingForm() {
  // State for form steps
  const [currentStep, setCurrentStep] = useState(1);
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  
  // Form state with all required fields from the schema
  const [formData, setFormData] = useState({
    // Company basic info
    companyName: '',
    companyEmail: '',
    companyPhone: '',
    website: '',
    companyCountry: '',
    
    // Company details
    description: '',
    foundedYear: '',
    employees: '',
    
    // Social media
    linkedinUrl: '',
    facebookUrl: '',
    twitterUrl: '',
    
    // Categories
    categoryId: '',
    subcategoryId: '',
    
    // Image
    image: null
  });

  const [imagePreview, setImagePreview] = useState('');
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load user and categories on component mount
  useEffect(() => {
    const initializeForm = async () => {
      // Check user authentication
      try {
        const userData = await checkUserAuth();
        if (userData.ok) {
          setUser(userData.user);
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
      } finally {
        setLoadingUser(false);
      }

      // Load categories
      setLoading(true);
      try {
        const response = await getCategoriesWithSubcategories();
        if (response.ok) {
          setCategories(response.categories);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
        toast.error('Failed to load categories');
      } finally {
        setLoading(false);
      }
    };

    initializeForm();
  }, []);

  // Handle category change to populate subcategories
  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    setFormData({
      ...formData,
      categoryId,
      subcategoryId: ''
    });

    // Find the selected category and update subcategories
    const category = categories.find(cat => cat._id === categoryId);
    if (category) {
      setSubcategories(category.subcategories || []);
    } else {
      setSubcategories([]);
    }
  };

  // Handle form input changes for simple fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file
      });
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle step navigation
  const nextStep = () => {
    // Add validation for required fields in current step
    if (currentStep === 1) {
      if (!formData.companyName || !formData.companyEmail || !formData.companyPhone) {
        toast.error('Please fill in all required fields');
        return;
      }
    }
    
    if (currentStep === 4) {
      if (!formData.categoryId || !formData.subcategoryId) {
        toast.error('Please select both category and subcategory');
        return;
      }
    }
    
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Final validation
    if (!formData.categoryId || !formData.subcategoryId) {
      toast.error('Please select both category and subcategory');
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Create FormData object for submission
      const formDataToSend = new FormData();
      
      // Append all form fields
      Object.keys(formData).forEach(key => {
        if (key !== 'image' && formData[key]) {
          formDataToSend.append(key, formData[key]);
        }
      });
      
      // Append image if provided
      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }
      
      const result = await submitCompanyListing(formDataToSend);
      
      if (result.ok) {
        toast.success('Company listing submitted successfully! Our team will review it shortly.');
        // Reset form
        setFormData({
          companyName: '',
          companyEmail: '',
          companyPhone: '',
          website: '',
          companyCountry: '',
          description: '',
          foundedYear: '',
          employees: '',
          linkedinUrl: '',
          facebookUrl: '',
          twitterUrl: '',
          categoryId: '',
          subcategoryId: '',
          image: null
        });
        setImagePreview('');
        setCurrentStep(1);
      } else {
        toast.error(result.message || 'Failed to submit company listing');
      }
    } catch (err) {
      console.error('Error submitting company listing:', err);
      toast.error('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show loading state while checking authentication
  if (loadingUser) {
    return <ListingFormSkeleton />;
  }

  // If user is not authenticated, show message
  if (!user) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#253347] mb-4">Authentication Required</h2>
        <p className="text-[#314158] mb-6">
          You need to be signed in to list your company. Please sign in to continue.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-[#314158] hover:bg-[#253347] text-white font-medium py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#314158]"
        >
          Refresh Page
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-white to-[#f8fafc] rounded-xl shadow-lg p-4 md:p-5 border border-gray-100 max-w-xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-[#253347] text-center mb-1">
        List Your Product
      </h2>
      <p className="text-[#314158] text-center mb-5">It&apos;s Free and Takes Less Than 5 Minutes</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Step 1: Basic Information */}
        {currentStep === 1 && (
          <div className="space-y-4 animate-fadeIn">
            <div>
              <label htmlFor="companyName" className="block text-[#253347] mb-1 text-sm font-medium">
                Company Name *
              </label>
              <input 
                type="text" 
                id="companyName" 
                name="companyName" 
                value={formData.companyName}
                onChange={handleInputChange}
                required 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#314158] focus:border-[#314158] outline-none transition text-sm shadow-sm"
                placeholder="Your Company Inc."
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="companyEmail" className="block text-[#253347] mb-1 text-sm font-medium">
                  Company Email *
                </label>
                <input 
                  type="email" 
                  id="companyEmail" 
                  name="companyEmail" 
                  value={formData.companyEmail}
                  onChange={handleInputChange}
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#314158] focus:border-[#314158] outline-none transition text-sm shadow-sm"
                  placeholder="contact@company.com"
                />
              </div>
              
              <div>
                <label htmlFor="companyPhone" className="block text-[#253347] mb-1 text-sm font-medium">
                  Company Phone *
                </label>
                <input 
                  type="tel" 
                  id="companyPhone" 
                  name="companyPhone" 
                  value={formData.companyPhone}
                  onChange={handleInputChange}
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#314158] focus:border-[#314158] outline-none transition text-sm shadow-sm"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="website" className="block text-[#253347] mb-1 text-sm font-medium">
                  Company Website
                </label>
                <input 
                  type="url" 
                  id="website" 
                  name="website" 
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#314158] focus:border-[#314158] outline-none transition text-sm shadow-sm"
                  placeholder="https://yourcompany.com"
                />
              </div>
              
              <div>
                <label htmlFor="companyCountry" className="block text-[#253347] mb-1 text-sm font-medium">
                  Company Country
                </label>
                <input
                  type="text"
                  id="companyCountry"
                  name="companyCountry"
                  value={formData.companyCountry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#314158] focus:border-[#314158] outline-none transition text-sm shadow-sm"
                  placeholder="United States"
                />
              </div>
            </div>
            
            <div className="pt-2">
              <button 
                type="button" 
                onClick={nextStep}
                className="w-full bg-gradient-to-r from-[#314158] to-[#253347] hover:from-[#253347] hover:to-[#1a2533] text-white font-medium py-3 rounded-lg transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#314158]"
              >
                Next
                <FaArrowRight className="ml-2 text-sm" />
              </button>
            </div>
          </div>
        )}
        
        {/* Step 2: Company Details */}
        {currentStep === 2 && (
          <div className="space-y-4 animate-fadeIn">
            <h3 className="text-lg font-bold text-[#253347]">Company Details</h3>
            <p className="text-[#314158] text-sm">Tell us more about your company</p>
            
            <div>
              <label htmlFor="description" className="block text-[#253347] mb-1 text-sm font-medium">
                Company Description
              </label>
              <textarea 
                id="description" 
                name="description" 
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#314158] focus:border-[#314158] outline-none transition text-sm shadow-sm"
                placeholder="Briefly describe your company and what you do..."
              ></textarea>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="foundedYear" className="block text-[#253347] mb-1 text-sm font-medium">
                  Founded Year
                </label>
                <input 
                  type="number" 
                  id="foundedYear" 
                  name="foundedYear" 
                  value={formData.foundedYear}
                  onChange={handleInputChange}
                  min="1900" 
                  max={new Date().getFullYear()}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#314158] focus:border-[#314158] outline-none transition text-sm shadow-sm"
                  placeholder="2010"
                />
              </div>
              
              <div>
                <label htmlFor="employees" className="block text-[#253347] mb-1 text-sm font-medium">
                  Number of Employees
                </label>
                <select 
                  id="employees" 
                  name="employees"
                  value={formData.employees}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#314158] focus:border-[#314158] outline-none transition text-sm shadow-sm appearance-none bg-white"
                >
                  <option value="">Select Range</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201-500">201-500</option>
                  <option value="501-1000">501-1000</option>
                  <option value="1000+">1000+</option>
                </select>
              </div>
            </div>
            
            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-[#253347] mb-1">
                Company Logo
              </label>
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                {imagePreview && (
                  <div className="relative">
                    <Image 
                      src={imagePreview} 
                      alt="Preview" 
                      width={80}
                      height={80}
                      className="w-20 h-20 object-cover rounded-md border-2 border-[#314158]"
                    />
                  </div>
                )}
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0">
                    <label className="bg-gradient-to-r from-[#314158] to-[#253347] hover:from-[#253347] hover:to-[#1a2533] text-white px-4 py-2 rounded-md cursor-pointer transition-all duration-300 shadow-md text-center sm:text-left focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#314158]">
                      Choose Image
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                    <span className="text-sm text-gray-600 truncate max-w-[150px] sm:ml-3">
                      {formData.image ? formData.image.name : 'No file chosen'}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Upload a company logo (JPG, PNG, GIF)
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button 
                type="button" 
                onClick={prevStep}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-[#253347] font-medium py-3 rounded-lg transition-colors flex items-center justify-center shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
              >
                <FaArrowLeft className="mr-2 text-sm" />
                Back
              </button>
              
              <button 
                type="button" 
                onClick={nextStep}
                className="flex-1 bg-gradient-to-r from-[#314158] to-[#253347] hover:from-[#253347] hover:to-[#1a2533] text-white font-medium py-3 rounded-lg transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#314158]"
              >
                Next
                <FaArrowRight className="ml-2 text-sm" />
              </button>
            </div>
          </div>
        )}
        
        {/* Step 3: Social Media */}
        {currentStep === 3 && (
          <div className="space-y-4 animate-fadeIn">
            <h3 className="text-lg font-bold text-[#253347]">Social Media</h3>
            <p className="text-[#314158] text-sm">Share your company&apos;s social media profiles</p>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="linkedinUrl" className="block text-[#253347] mb-1 text-sm font-medium flex items-center">
                  <FaLinkedin className="text-[#0077b5] mr-2" /> LinkedIn URL
                </label>
                <input 
                  type="url" 
                  id="linkedinUrl" 
                  name="linkedinUrl" 
                  value={formData.linkedinUrl}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#314158] focus:border-[#314158] outline-none transition text-sm shadow-sm"
                  placeholder="https://linkedin.com/company/yourcompany"
                />
              </div>
              
              <div>
                <label htmlFor="facebookUrl" className="block text-[#253347] mb-1 text-sm font-medium flex items-center">
                  <FaFacebook className="text-[#1877f2] mr-2" /> Facebook URL
                </label>
                <input 
                  type="url" 
                  id="facebookUrl" 
                  name="facebookUrl" 
                  value={formData.facebookUrl}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#314158] focus:border-[#314158] outline-none transition text-sm shadow-sm"
                  placeholder="https://facebook.com/yourcompany"
                />
              </div>
              
              <div>
                <label htmlFor="twitterUrl" className="block text-[#253347] mb-1 text-sm font-medium flex items-center">
                  <FaTwitter className="text-[#1da1f2] mr-2" /> Twitter URL
                </label>
                <input 
                  type="url" 
                  id="twitterUrl" 
                  name="twitterUrl" 
                  value={formData.twitterUrl}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#314158] focus:border-[#314158] outline-none transition text-sm shadow-sm"
                  placeholder="https://twitter.com/yourcompany"
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button 
                type="button" 
                onClick={prevStep}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-[#253347] font-medium py-3 rounded-lg transition-colors flex items-center justify-center shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
              >
                <FaArrowLeft className="mr-2 text-sm" />
                Back
              </button>
              
              <button 
                type="button" 
                onClick={nextStep}
                className="flex-1 bg-gradient-to-r from-[#314158] to-[#253347] hover:from-[#253347] hover:to-[#1a2533] text-white font-medium py-3 rounded-lg transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#314158]"
              >
                Next
                <FaArrowRight className="ml-2 text-sm" />
              </button>
            </div>
          </div>
        )}
        
        {/* Step 4: Categories */}
        {currentStep === 4 && (
          <div className="space-y-4 animate-fadeIn">
            <h3 className="text-lg font-bold text-[#253347]">Categories</h3>
            <p className="text-[#314158] text-sm">Select your company&apos;s primary category and subcategory</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="categoryId" className="block text-[#253347] mb-1 text-sm font-medium">
                  Primary Category *
                </label>
                <select 
                  id="categoryId" 
                  name="categoryId"
                  value={formData.categoryId}
                  onChange={handleCategoryChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#314158] focus:border-[#314158] outline-none transition text-sm shadow-sm appearance-none bg-white"
                >
                  <option value="">Select Category</option>
                  {categories.map(category => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="subcategoryId" className="block text-[#253347] mb-1 text-sm font-medium">
                  Subcategory *
                </label>
                <select 
                  id="subcategoryId" 
                  name="subcategoryId"
                  value={formData.subcategoryId}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#314158] focus:border-[#314158] outline-none transition text-sm shadow-sm appearance-none bg-white"
                  disabled={!formData.categoryId}
                >
                  <option value="">Select Subcategory</option>
                  {subcategories.map(subcategory => (
                    <option key={subcategory._id} value={subcategory._id}>
                      {subcategory.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 shadow-sm">
              <h3 className="font-bold text-[#253347] mb-2 flex items-center">
                <FaCheck className="text-green-500 mr-2" /> Review Your Details
              </h3>
              <div className="text-sm text-[#314158] space-y-1">
                <p><span className="font-medium">User:</span> {user?.email}</p>
                <p><span className="font-medium">Company:</span> {formData.companyName}</p>
                <p><span className="font-medium">Website:</span> {formData.website || 'Not provided'}</p>
                <p><span className="font-medium">Category:</span> {categories.find(c => c._id === formData.categoryId)?.name || 'Not selected'}</p>
                <p><span className="font-medium">Subcategory:</span> {subcategories.find(s => s._id === formData.subcategoryId)?.name || 'Not selected'}</p>
              </div>
            </div>
            
            <div className="flex items-center bg-gray-50 p-3 rounded-lg">
              <input 
                type="checkbox" 
                id="terms" 
                name="terms" 
                required 
                className="w-5 h-5 text-[#314158] border-gray-300 rounded focus:ring-[#314158] mr-2"
              />
              <label htmlFor="terms" className="text-[#253347] text-sm">
                I agree to the <a href="#terms" className="text-[#314158] hover:underline font-medium">Terms of Use</a> and <a href="#privacy" className="text-[#314158] hover:underline font-medium">Privacy Policy</a>
              </label>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button 
                type="button" 
                onClick={prevStep}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-[#253347] font-medium py-3 rounded-lg transition-colors flex items-center justify-center shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
              >
                <FaArrowLeft className="mr-2 text-sm" />
                Back
              </button>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-[#314158] to-[#253347] hover:from-[#253347] hover:to-[#1a2533] text-white font-medium py-3 rounded-lg transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#314158]"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    <FaCheck className="mr-2 text-sm" />
                    Submit Listing
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

// Skeleton component for loading state
function ListingFormSkeleton() {
  return (
    <div className="bg-gradient-to-br from-white to-[#f8fafc] rounded-xl shadow-lg p-4 md:p-5 border border-gray-100 max-w-xl mx-auto">
      <div className="space-y-4">
        {/* Header skeleton */}
        <div className="space-y-3">
          <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto animate-pulse"></div>
        </div>
        
        {/* Progress bar skeleton */}
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse"></div>
                <div className="h-3 bg-gray-200 rounded w-10 mt-1 animate-pulse"></div>
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 animate-pulse"></div>
        </div>
        
        {/* Form skeleton */}
        <div className="space-y-4">
          {/* Input fields skeleton */}
          <div className="space-y-4">
            <div>
              <div className="h-4 bg-gray-200 rounded w-1/3 mb-2 animate-pulse"></div>
              <div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="h-4 bg-gray-200 rounded w-1/3 mb-2 animate-pulse"></div>
                <div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
              </div>
              
              <div>
                <div className="h-4 bg-gray-200 rounded w-1/3 mb-2 animate-pulse"></div>
                <div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="h-4 bg-gray-200 rounded w-1/3 mb-2 animate-pulse"></div>
                <div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
              </div>
              
              <div>
                <div className="h-4 bg-gray-200 rounded w-1/3 mb-2 animate-pulse"></div>
                <div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
              </div>
            </div>
            
            <div className="pt-2">
              <div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}