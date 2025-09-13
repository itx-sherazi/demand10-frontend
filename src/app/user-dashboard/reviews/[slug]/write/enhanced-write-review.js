"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCompanyBySlug, submitReview } from '@/services/userApi';
import { toast } from 'react-toastify';

const EnhancedWriteReviewPage = ({ params }) => {
  const router = useRouter();
  const { slug } = params;
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  
  // Enhanced form data structure
  const [formData, setFormData] = useState({
    // Project Details
    project: {
      title: '',
      type: '',
      budget: '',
      duration: '',
      summary: ''
    },
    
    // Overall Rating
    overallRating: 0,
    
    // Detailed Ratings
    ratings: {
      quality: 0,
      schedule: 0,
      cost: 0,
      willingToRefer: 0
    },
    
    // Review Text
    reviewText: '',
    feedbackSummary: '',
    
    // Reviewer Info
    reviewer: {
      name: '',
      designation: '',
      companyName: '',
      industry: '',
      location: '',
      employees: '',
      interviewMethod: ''
    }
  });

  // Options for dropdowns
  const projectTypes = [
    "Web Development",
    "Mobile App Development",
    "Software Development",
    "IT Consulting",
    "Cloud Services",
    "Cybersecurity",
    "Data Analytics",
    "AI/Machine Learning",
    "UI/UX Design",
    "DevOps",
    "Other"
  ];

  const budgetRanges = [
    "Less than $50,000",
    "$50,000 to $99,999",
    "$100,000 to $199,999",
    "$200,000 to $499,999",
    "$500,000 to $999,999",
    "$1,000,000 or more"
  ];

  const durationRanges = [
    "Less than 1 month",
    "1-3 months",
    "3-6 months",
    "6-12 months",
    "1-2 years",
    "More than 2 years"
  ];

  const industries = [
    "Technology",
    "Finance",
    "Healthcare",
    "Retail",
    "Manufacturing",
    "Education",
    "Government",
    "Media & Entertainment",
    "Telecommunications",
    "Energy",
    "Transportation",
    "Real Estate",
    "Other"
  ];

  const employeeRanges = [
    "1-10 Employees",
    "11-50 Employees",
    "51-200 Employees",
    "201-500 Employees",
    "501-1,000 Employees",
    "1,001-5,000 Employees",
    "5,001-10,000 Employees",
    "10,001+ Employees"
  ];

  const interviewMethods = [
    "In-person Meeting",
    "Phone Interview",
    "Video Conference",
    "Email Correspondence",
    "Online Survey",
    "Other"
  ];

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      try {
        const response = await getCompanyBySlug(slug);
        if (response.ok) {
          setCompany(response.data);
          // Remove the pre-filling of reviewer company name
        } else {
          toast.error(response.message || 'Failed to fetch company details');
        }
      } catch (error) {
        console.error('Error fetching company details:', error);
        toast.error('Failed to fetch company details');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchCompanyDetails();
    }
  }, [slug]);

  const handleProjectChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      project: {
        ...formData.project,
        [name]: value
      }
    });
    
    // Clear error when user starts typing
    if (errors[`project.${name}`]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[`project.${name}`];
        return newErrors;
      });
    }
  };

  const handleRatingChange = (ratingType, rating) => {
    if (ratingType === 'overall') {
      setFormData({
        ...formData,
        overallRating: rating
      });
      if (errors.overallRating) {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors.overallRating;
          return newErrors;
        });
      }
    } else {
      setFormData({
        ...formData,
        ratings: {
          ...formData.ratings,
          [ratingType]: rating
        }
      });
      if (errors[`ratings.${ratingType}`]) {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[`ratings.${ratingType}`];
          return newErrors;
        });
      }
    }
  };

  const handleReviewerChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      reviewer: {
        ...formData.reviewer,
        [name]: value
      }
    });
    
    // Clear error when user starts typing
    if (errors[`reviewer.${name}`]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[`reviewer.${name}`];
        return newErrors;
      });
    }
  };

  const handleReviewTextChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Function to render star ratings with improved styling
  const renderStarRating = (currentRating, ratingType) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => handleRatingChange(ratingType, star)}
            className={`text-2xl transition-all duration-200 ${
              star <= currentRating 
                ? 'text-yellow-400 transform scale-110' 
                : 'text-gray-300 hover:text-yellow-300'
            } focus:outline-none`}
            aria-label={`Rate ${star} out of 5 stars`}
          >
            ★
          </button>
        ))}
      </div>
    );
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Project validation
    if (!formData.project.title.trim()) {
      newErrors['project.title'] = 'Project title is required';
    }
    
    if (!formData.project.type) {
      newErrors['project.type'] = 'Project type is required';
    }
    
    // Overall rating validation
    if (formData.overallRating === 0) {
      newErrors.overallRating = 'Please provide an overall rating';
    }
    
    // Detailed ratings validation
    if (formData.ratings.quality === 0) {
      newErrors['ratings.quality'] = 'Please rate quality';
    }
    
    if (formData.ratings.schedule === 0) {
      newErrors['ratings.schedule'] = 'Please rate schedule';
    }
    
    if (formData.ratings.cost === 0) {
      newErrors['ratings.cost'] = 'Please rate cost';
    }
    
    if (formData.ratings.willingToRefer === 0) {
      newErrors['ratings.willingToRefer'] = 'Please rate willingness to refer';
    }
    
    // Review text validation
    if (!formData.reviewText.trim()) {
      newErrors.reviewText = 'Review text is required';
    }
    
    // Reviewer info validation
    if (!formData.reviewer.name.trim()) {
      newErrors['reviewer.name'] = 'Your name is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fix the errors before submitting');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const reviewData = {
        companySlug: slug,
        ...formData
      };
      
      const response = await submitReview(reviewData);
      
      if (response.ok) {
        toast.success('Review submitted successfully!');
        router.push('/user-dashboard/reviews');
      } else {
        toast.error(response.message || 'Failed to submit review');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      toast.error('Failed to submit review');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Word count helper
  const getWordCount = (text) => {
    return text.trim() ? text.trim().split(/\s+/).length : 0;
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto">
        {/* Header Skeleton */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="h-5 bg-gray-200 rounded w-12 animate-pulse"></div>
          </div>
          
          <div className="bg-gradient-to-r from-[#4ecfc5] to-[#058f8c] rounded-xl p-6 shadow-lg animate-pulse">
            <div className="h-8 bg-[#e6f9f8] rounded w-1/3 mb-2"></div>
            <div className="h-5 bg-[#e6f9f8] rounded w-1/2"></div>
          </div>
        </div>
        
        <div className="space-y-8">
          {/* Project Information Section Skeleton */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 animate-pulse">
            <div className="flex items-center mb-6">
              <div className="h-10 bg-gray-200 rounded w-10 mr-4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i}>
                  <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
                  <div className="h-12 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
              <div className="h-24 bg-gray-200 rounded"></div>
              <div className="flex justify-end mt-1">
                <div className="h-4 bg-gray-200 rounded w-16"></div>
              </div>
            </div>
          </div>
          
          {/* Ratings Section Skeleton */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 animate-pulse">
            <div className="flex items-center mb-6">
              <div className="h-10 bg-gray-200 rounded w-10 mr-4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/6"></div>
            </div>
            
            {/* Overall Rating Skeleton */}
            <div className="mb-8 p-6 bg-gradient-to-r from-[#f0f9f9] to-[#e8f4f4] rounded-xl border border-[#4ecfc5]/20">
              <div className="h-5 bg-gray-200 rounded w-1/4 mb-4"></div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center">
                <div className="flex space-x-1 mr-6 mb-4 sm:mb-0">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-8 w-8 bg-gray-200 rounded"></div>
                  ))}
                </div>
                <div className="h-10 bg-gray-200 rounded w-16"></div>
              </div>
            </div>
            
            {/* Detailed Ratings Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="p-4 bg-gray-50 rounded-lg">
                  <div className="h-4 bg-gray-200 rounded w-1/3 mb-3"></div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, j) => (
                      <div key={j} className="h-6 w-6 bg-gray-200 rounded"></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Review Text Section Skeleton */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 animate-pulse">
            <div className="flex items-center mb-6">
              <div className="h-10 bg-gray-200 rounded w-10 mr-4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/4"></div>
            </div>
            
            <div className="mb-6">
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
              <div className="h-32 bg-gray-200 rounded"></div>
              <div className="flex justify-end mt-1">
                <div className="h-4 bg-gray-200 rounded w-16"></div>
              </div>
            </div>
            
            <div>
              <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
              <div className="h-24 bg-gray-200 rounded"></div>
              <div className="flex justify-end mt-1">
                <div className="h-4 bg-gray-200 rounded w-16"></div>
              </div>
            </div>
          </div>
          
          {/* Reviewer Information Section Skeleton */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 animate-pulse">
            <div className="flex items-center mb-6">
              <div className="h-10 bg-gray-200 rounded w-10 mr-4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/3"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i}>
                  <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
                  <div className="h-12 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Terms and Conditions Skeleton */}
          <div className="bg-gradient-to-r from-[#f0f9f9] to-[#e8f4f4] border border-[#4ecfc5]/20 rounded-xl p-6 animate-pulse">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="h-5 w-5 bg-gray-200 rounded"></div>
              </div>
              <div className="ml-3">
                <div className="h-5 bg-gray-200 rounded w-1/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-1"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3 mb-1"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-1"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          </div>
          
          {/* Submit Button Skeleton */}
          <div className="py-6">
            <div className="h-14 bg-gray-200 rounded-xl animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!company) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto mt-8 text-center">
        <div className="text-red-500 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Company Not Found</h2>
        <p className="text-gray-600 mb-6">The company you&apos;re looking for doesn&apos;t exist or has been removed.</p>
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Can{`'`}t find the company you{`'`}re looking for? Make sure it{`'`}s already listed on IntentWire.
          </p>
          <button
            onClick={() => router.push('/user-dashboard/reviews')}
            className="mt-4 text-[#4ecfc5] hover:text-[#3bb3a9] font-medium inline-block"
          >
            Back to Reviews
          </button>
        </div>

      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={() => router.back()}
          className="flex items-center text-[#4ecfc5] hover:text-[#3bb3a9] mb-4 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back
        </button>
        
        <div className="bg-gradient-to-r from-[#4ecfc5] to-[#058f8c] rounded-xl p-6 text-white shadow-lg">
          <h1 className="text-3xl font-bold mb-2">Write a Detailed Review</h1>
          <p className="text-lg opacity-90">Share your experience with <span className="font-semibold">{company.companyName}</span></p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Project Information Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="bg-[#4ecfc5] rounded-lg p-2 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Project Information</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="project.title" className="block text-sm font-semibold text-gray-700 mb-2">
                Project Title *
              </label>
              <input
                type="text"
                id="project.title"
                name="title"
                value={formData.project.title}
                onChange={handleProjectChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#4ecfc5] focus:border-[#4ecfc5] transition-all ${
                  errors['project.title'] ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                }`}
                placeholder="e.g., Web Development for Management Consulting Firm"
              />
              {errors['project.title'] && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors['project.title']}
                </p>
              )}
            </div>
            
            <div>
              <label htmlFor="project.type" className="block text-sm font-semibold text-gray-700 mb-2">
                Project Type *
              </label>
              <select
                id="project.type"
                name="type"
                value={formData.project.type}
                onChange={handleProjectChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#4ecfc5] focus:border-[#4ecfc5] transition-all ${
                  errors['project.type'] ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <option value="">Select project type</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              {errors['project.type'] && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors['project.type']}
                </p>
              )}
            </div>
            
            <div>
              <label htmlFor="project.budget" className="block text-sm font-semibold text-gray-700 mb-2">
                Project Budget
              </label>
              <select
                id="project.budget"
                name="budget"
                value={formData.project.budget}
                onChange={handleProjectChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ecfc5] focus:border-[#4ecfc5] hover:border-gray-400 transition-all"
              >
                <option value="">Select budget range</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="project.duration" className="block text-sm font-semibold text-gray-700 mb-2">
                Project Duration
              </label>
              <select
                id="project.duration"
                name="duration"
                value={formData.project.duration}
                onChange={handleProjectChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ecfc5] focus:border-[#4ecfc5] hover:border-gray-400 transition-all"
              >
                <option value="">Select duration</option>
                {durationRanges.map((range) => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="mt-6">
            <label htmlFor="project.summary" className="block text-sm font-semibold text-gray-700 mb-2">
              Project Summary
            </label>
            <textarea
              id="project.summary"
              name="summary"
              value={formData.project.summary}
              onChange={handleProjectChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ecfc5] focus:border-[#4ecfc5] hover:border-gray-400 transition-all"
              placeholder="Briefly describe the project and its objectives..."
            ></textarea>
            <div className="flex justify-end mt-1">
              <span className="text-sm text-gray-500">
                {getWordCount(formData.project.summary)} words
              </span>
            </div>
          </div>
        </div>
        
        {/* Ratings Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="bg-[#4ecfc5] rounded-lg p-2 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Ratings</h2>
          </div>
          
          {/* Overall Rating */}
          <div className="mb-8 p-6 bg-gradient-to-r from-[#f0f9f9] to-[#e8f4f4] rounded-xl border border-[#4ecfc5]/20">
            <label className="block text-lg font-semibold text-gray-800 mb-4">
              Overall Rating * 
              {errors.overallRating && (
                <span className="text-red-600 text-base font-normal ml-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.overallRating}
                </span>
              )}
            </label>
            <div className="flex flex-col sm:flex-row items-start sm:items-center">
              <div className="mr-6 mb-4 sm:mb-0">
                {renderStarRating(formData.overallRating, 'overall')}
              </div>
              <div className="text-3xl font-bold text-gray-900 bg-white px-4 py-2 rounded-lg shadow">
                {formData.overallRating}.0
              </div>
            </div>
          </div>
          
          {/* Detailed Ratings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Quality * 
                {errors['ratings.quality'] && (
                  <span className="text-red-600 text-sm font-normal ml-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors['ratings.quality']}
                  </span>
                )}
              </label>
              {renderStarRating(formData.ratings.quality, 'quality')}
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Schedule * 
                {errors['ratings.schedule'] && (
                  <span className="text-red-600 text-sm font-normal ml-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors['ratings.schedule']}
                  </span>
                )}
              </label>
              {renderStarRating(formData.ratings.schedule, 'schedule')}
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Cost * 
                {errors['ratings.cost'] && (
                  <span className="text-red-600 text-sm font-normal ml-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors['ratings.cost']}
                  </span>
                )}
              </label>
              {renderStarRating(formData.ratings.cost, 'cost')}
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Willing to Refer * 
                {errors['ratings.willingToRefer'] && (
                  <span className="text-red-600 text-sm font-normal ml-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors['ratings.willingToRefer']}
                  </span>
                )}
              </label>
              {renderStarRating(formData.ratings.willingToRefer, 'willingToRefer')}
            </div>
          </div>
        </div>
        
        {/* Review Text Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="bg-[#4ecfc5] rounded-lg p-2 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Review Details</h2>
          </div>
          
          <div className="mb-6">
            <label htmlFor="reviewText" className="block text-sm font-semibold text-gray-700 mb-2">
              Detailed Review * 
              {errors.reviewText && (
                <span className="text-red-600 text-sm font-normal ml-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.reviewText}
                </span>
              )}
            </label>
            <textarea
              id="reviewText"
              name="reviewText"
              value={formData.reviewText}
              onChange={handleReviewTextChange}
              rows={6}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#4ecfc5] focus:border-[#4ecfc5] transition-all ${
                errors.reviewText ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
              }`}
              placeholder="Share your detailed experience with this company. What went well? What could have been improved?"
            ></textarea>
            <div className="flex justify-end mt-1">
              <span className="text-sm text-gray-500">
                {getWordCount(formData.reviewText)} words
              </span>
            </div>
          </div>
          
          <div>
            <label htmlFor="feedbackSummary" className="block text-sm font-semibold text-gray-700 mb-2">
              Feedback Summary
            </label>
            <textarea
              id="feedbackSummary"
              name="feedbackSummary"
              value={formData.feedbackSummary}
              onChange={handleReviewTextChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ecfc5] focus:border-[#4ecfc5] hover:border-gray-400 transition-all"
              placeholder="Provide a brief summary of your feedback..."
            ></textarea>
            <div className="flex justify-end mt-1">
              <span className="text-sm text-gray-500">
                {getWordCount(formData.feedbackSummary)} words
              </span>
            </div>
          </div>
        </div>
        
        {/* Reviewer Information Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="bg-[#4ecfc5] rounded-lg p-2 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Reviewer Information</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="reviewer.name" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                id="reviewer.name"
                name="name"
                value={formData.reviewer.name}
                onChange={handleReviewerChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#4ecfc5] focus:border-[#4ecfc5] transition-all ${
                  errors['reviewer.name'] ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                }`}
                placeholder="Enter your full name"
              />
              {errors['reviewer.name'] && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors['reviewer.name']}
                </p>
              )}
            </div>
            
            <div>
              <label htmlFor="reviewer.designation" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Designation
              </label>
              <input
                type="text"
                id="reviewer.designation"
                name="designation"
                value={formData.reviewer.designation}
                onChange={handleReviewerChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ecfc5] focus:border-[#4ecfc5] hover:border-gray-400 transition-all"
                placeholder="e.g., Project Manager, CTO, etc."
              />
            </div>
            
            <div>
              <label htmlFor="reviewer.companyName" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Company
              </label>
              <input
                type="text"
                id="reviewer.companyName"
                name="companyName"
                value={formData.reviewer.companyName}
                onChange={handleReviewerChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ecfc5] focus:border-[#4ecfc5] hover:border-gray-400 transition-all"
                placeholder="Enter your company name"
              />
            </div>
            
            <div>
              <label htmlFor="reviewer.industry" className="block text-sm font-semibold text-gray-700 mb-2">
                Industry
              </label>
              <select
                id="reviewer.industry"
                name="industry"
                value={formData.reviewer.industry}
                onChange={handleReviewerChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ecfc5] focus:border-[#4ecfc5] hover:border-gray-400 transition-all"
              >
                <option value="">Select industry</option>
                {industries.map((industry) => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="reviewer.location" className="block text-sm font-semibold text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                id="reviewer.location"
                name="location"
                value={formData.reviewer.location}
                onChange={handleReviewerChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ecfc5] focus:border-[#4ecfc5] hover:border-gray-400 transition-all"
                placeholder="e.g., New York, NY or London, UK"
              />
            </div>
            
            <div>
              <label htmlFor="reviewer.employees" className="block text-sm font-semibold text-gray-700 mb-2">
                Company Size
              </label>
              <select
                id="reviewer.employees"
                name="employees"
                value={formData.reviewer.employees}
                onChange={handleReviewerChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ecfc5] focus:border-[#4ecfc5] hover:border-gray-400 transition-all"
              >
                <option value="">Select company size</option>
                {employeeRanges.map((range) => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="reviewer.interviewMethod" className="block text-sm font-semibold text-gray-700 mb-2">
                Interview Method
              </label>
              <select
                id="reviewer.interviewMethod"
                name="interviewMethod"
                value={formData.reviewer.interviewMethod}
                onChange={handleReviewerChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ecfc5] focus:border-[#4ecfc5] hover:border-gray-400 transition-all"
              >
                <option value="">Select interview method</option>
                {interviewMethods.map((method) => (
                  <option key={method} value={method}>{method}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* Terms and Conditions */}
        <div className="bg-gradient-to-r from-[#f0f9f9] to-[#e8f4f4] border border-[#4ecfc5]/20 rounded-xl p-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4ecfc5]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="font-semibold text-gray-800 mb-2">Review Submission</h3>
              <p className="text-gray-600 text-sm mb-3">
                By submitting this review, you confirm that:
              </p>
              <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
                <li>The review is based on your genuine experience</li>
                <li>You have not been compensated for this review</li>
                <li>The information provided is accurate and truthful</li>
                <li>You understand this review will be publicly visible</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Submit Button */}
        <div className="py-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-4 bg-gradient-to-r from-[#4ecfc5] to-[#058f8c] text-white rounded-xl hover:from-[#3bb3a9] hover:to-[#047a76] flex items-center justify-center font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting Review...
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
                Submit Detailed Review
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EnhancedWriteReviewPage;