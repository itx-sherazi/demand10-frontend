"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCategoriesWithSubcategories, submitCompanyListing } from '@/services/userApi';
import { toast } from 'react-toastify';
import Image from 'next/image';

const Page = () => {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    companyName: '',
    companyEmail: '',
    companyPhone: '',
    website: '',
    description: '',
    companyCountry: '',
    foundedYear: '',
    employees: '',
    linkedinUrl: '',
    facebookUrl: '',
    twitterUrl: '',
    categoryId: '',
    subcategoryId: '',
    teamLeads: [{ name: '', position: '', facebookUrl: '', linkedinUrl: '', twitterUrl: '' }]
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchCategories = async () => {
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

    fetchCategories();
  }, []);

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

  const handleInputChange = (e) => {
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

  const handleTeamLeadChange = (index, field, value) => {
    const updatedTeamLeads = [...formData.teamLeads];
    updatedTeamLeads[index][field] = value;
    setFormData({
      ...formData,
      teamLeads: updatedTeamLeads
    });
  };

  const addTeamLead = () => {
    setFormData({
      ...formData,
      teamLeads: [...formData.teamLeads, { name: '', position: '', facebookUrl: '', linkedinUrl: '', twitterUrl: '' }]
    });
  };

  const removeTeamLead = (index) => {
    if (formData.teamLeads.length > 1) {
      const updatedTeamLeads = [...formData.teamLeads];
      updatedTeamLeads.splice(index, 1);
      setFormData({
        ...formData,
        teamLeads: updatedTeamLeads
      });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Image size should be less than 5MB');
        return;
      }
      
      // Check file type
      if (!file.type.match('image.*')) {
        toast.error('Please select an image file');
        return;
      }
      
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Basic information validation
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }
    
    if (!formData.companyEmail.trim()) {
      newErrors.companyEmail = 'Company email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.companyEmail)) {
      newErrors.companyEmail = 'Please enter a valid email address';
    }
    
    if (!formData.companyPhone.trim()) {
      newErrors.companyPhone = 'Company phone is required';
    }
    
    if (formData.website && !/^https?:\/\/.+\..+/.test(formData.website)) {
      newErrors.website = 'Please enter a valid website URL';
    }
    
    // Category validation
    if (!formData.categoryId) {
      newErrors.categoryId = 'Please select a category';
    }
    
    if (!formData.subcategoryId) {
      newErrors.subcategoryId = 'Please select a subcategory';
    }
    
    // Team leads validation
    formData.teamLeads.forEach((lead, index) => {
      if (lead.name && !lead.position) {
        newErrors[`teamLead-${index}-position`] = 'Position is required when name is provided';
      }
      
      if (lead.position && !lead.name) {
        newErrors[`teamLead-${index}-name`] = 'Name is required when position is provided';
      }
      
      if (lead.linkedinUrl && !/^https?:\/\/.+\..+/.test(lead.linkedinUrl)) {
        newErrors[`teamLead-${index}-linkedin`] = 'Please enter a valid LinkedIn URL';
      }
      
      if (lead.facebookUrl && !/^https?:\/\/.+\..+/.test(lead.facebookUrl)) {
        newErrors[`teamLead-${index}-facebook`] = 'Please enter a valid Facebook URL';
      }
      
      if (lead.twitterUrl && !/^https?:\/\/.+\..+/.test(lead.twitterUrl)) {
        newErrors[`teamLead-${index}-twitter`] = 'Please enter a valid Twitter URL';
      }
    });
    
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
      const formDataToSend = new FormData();
      
      // Append all form fields
      Object.keys(formData).forEach(key => {
        if (key !== 'teamLeads') {
          formDataToSend.append(key, formData[key]);
        }
      });
      
      // Append team leads as JSON string
      formDataToSend.append('teamLeads', JSON.stringify(formData.teamLeads));
      
      // Append image file if provided
      if (imageFile) {
        formDataToSend.append('image', imageFile);
      }

      const response = await submitCompanyListing(formDataToSend);
      
      if (response.ok) {
        toast.success('Company listing request submitted successfully!');
        // Reset form
        setFormData({
          companyName: '',
          companyEmail: '',
          companyPhone: '',
          website: '',
          description: '',
          companyCountry: '',
          foundedYear: '',
          employees: '',
          linkedinUrl: '',
          facebookUrl: '',
          twitterUrl: '',
          categoryId: '',
          subcategoryId: '',
          teamLeads: [{ name: '', position: '', facebookUrl: '', linkedinUrl: '', twitterUrl: '' }]
        });
        setImageFile(null);
        setImagePreview('');
        router.push('/user-dashboard');
      } else {
        toast.error(response.message || 'Failed to submit company listing request');
      }
    } catch (error) {
      console.error('Error submitting company listing:', error);
      toast.error('Failed to submit company listing request');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Header Skeleton */}
          <div className="bg-gradient-to-r from-[#4ecfc5] to-[#3ab5a8] p-6 sm:p-8 animate-pulse">
            <div className="h-8 bg-[#e6f9f8] rounded w-1/3 mx-auto mb-2"></div>
            <div className="h-4 bg-[#e6f9f8] rounded w-1/2 mx-auto"></div>
          </div>
          
          {/* Form Skeleton */}
          <div className="p-6 sm:p-8">
            <div className="space-y-8">
              {/* Basic Information Skeleton */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[...Array(4)].map((_, i) => (
                    <div key={i}>
                      <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
                      <div className="h-10 bg-gray-200 rounded"></div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
                  <div className="h-20 bg-gray-200 rounded"></div>
                </div>
              </div>
              
              {/* Location & Details Skeleton */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[...Array(3)].map((_, i) => (
                    <div key={i}>
                      <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
                      <div className="h-10 bg-gray-200 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Category Selection Skeleton */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[...Array(2)].map((_, i) => (
                    <div key={i}>
                      <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
                      <div className="h-10 bg-gray-200 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Social Media Links Skeleton */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[...Array(3)].map((_, i) => (
                    <div key={i}>
                      <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
                      <div className="h-10 bg-gray-200 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Team Leads Skeleton */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm animate-pulse">
                <div className="flex justify-between items-center mb-4">
                  <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-10 bg-gray-200 rounded w-1/6"></div>
                </div>
                
                <div className="mb-6 p-4 border border-gray-200 rounded-md bg-gray-50">
                  <div className="flex justify-between items-center mb-3">
                    <div className="h-5 bg-gray-200 rounded w-1/6"></div>
                    <div className="h-5 bg-gray-200 rounded w-1/12"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i}>
                        <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
                        <div className="h-10 bg-gray-200 rounded"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Company Image Skeleton */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-gray-200 rounded-md"></div>
                  </div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
                    <div className="flex items-start space-x-4">
                      <div className="h-10 bg-gray-200 rounded w-1/6"></div>
                      <div>
                        <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Submit Button Skeleton */}
              <div className="flex justify-end space-x-4 pt-4 animate-pulse">
                <div className="h-10 bg-gray-200 rounded w-24"></div>
                <div className="h-10 bg-gray-200 rounded w-48"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#4ecfc5] to-[#3ab5a8] p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-white text-center">
            List Your Company
          </h1>
          <p className="text-[#e6f9f8] text-center mt-2">
            Get your company listed on IntentWire and reach more customers
          </p>
        </div>
        
        {/* Form */}
        <div className="p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border ${
                      errors.companyName ? 'border-red-500' : 'border-gray-300'
                    } rounded-md focus:ring-2 focus:ring-[#4ecfc5] focus:border-[#4ecfc5]`}
                    placeholder="Enter company name"
                  />
                  {errors.companyName && (
                    <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="companyEmail" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Email *
                  </label>
                  <input
                    type="email"
                    id="companyEmail"
                    name="companyEmail"
                    value={formData.companyEmail}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border ${
                      errors.companyEmail ? 'border-red-500' : 'border-gray-300'
                    } rounded-md focus:ring-2 focus:ring-[#4ecfc5] focus:border-[#4ecfc5]`}
                    placeholder="Enter company email"
                  />
                  {errors.companyEmail && (
                    <p className="mt-1 text-sm text-red-600">{errors.companyEmail}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="companyPhone" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Phone *
                  </label>
                  <input
                    type="tel"
                    id="companyPhone"
                    name="companyPhone"
                    value={formData.companyPhone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border ${
                      errors.companyPhone ? 'border-red-500' : 'border-gray-300'
                    } rounded-md focus:ring-2 focus:ring-[#4ecfc5] focus:border-[#4ecfc5]`}
                    placeholder="Enter company phone"
                  />
                  {errors.companyPhone && (
                    <p className="mt-1 text-sm text-red-600">{errors.companyPhone}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                    Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border ${
                      errors.website ? 'border-red-500' : 'border-gray-300'
                    } rounded-md focus:ring-2 focus:ring-[#4ecfc5] focus:border-[#4ecfc5]`}
                    placeholder="https://example.com"
                  />
                  {errors.website && (
                    <p className="mt-1 text-sm text-red-600">{errors.website}</p>
                  )}
                </div>
              </div>
              
              <div className="mt-6">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4ecfc5] focus:border-[#4ecfc5]"
                  placeholder="Describe your company..."
                ></textarea>
              </div>
            </div>
            
            {/* Location & Details */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">Location & Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyCountry" className="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <input
                    type="text"
                    id="companyCountry"
                    name="companyCountry"
                    value={formData.companyCountry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4ecfc5] focus:border-[#4ecfc5]"
                    placeholder="Enter country"
                  />
                </div>
                
                <div>
                  <label htmlFor="foundedYear" className="block text-sm font-medium text-gray-700 mb-1">
                    Founded Year
                  </label>
                  <input
                    type="number"
                    id="foundedYear"
                    name="foundedYear"
                    value={formData.foundedYear}
                    onChange={handleInputChange}
                    min="1800"
                    max={new Date().getFullYear()}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4ecfc5] focus:border-[#4ecfc5]"
                    placeholder="2020"
                  />
                </div>
                
                <div>
                  <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Employees
                  </label>
                  <input
                    type="text"
                    id="employees"
                    name="employees"
                    value={formData.employees}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4ecfc5] focus:border-[#4ecfc5]"
                    placeholder="e.g., 50-100"
                  />
                </div>
              </div>
            </div>
            
            {/* Category Selection */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">Category Selection</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="categoryId" className="block text-sm font-medium text-gray-700 mb-1">
                    Category *
                  </label>
                  <select
                    id="categoryId"
                    name="categoryId"
                    value={formData.categoryId}
                    onChange={handleCategoryChange}
                    className={`w-full px-4 py-2 border ${
                      errors.categoryId ? 'border-red-500' : 'border-gray-300'
                    } rounded-md focus:ring-2 focus:ring-[#4ecfc5] focus:border-[#4ecfc5]`}
                  >
                    <option value="">Select a category</option>
                    {categories.map(category => (
                      <option key={category._id} value={category._id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                  {errors.categoryId && (
                    <p className="mt-1 text-sm text-red-600">{errors.categoryId}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="subcategoryId" className="block text-sm font-medium text-gray-700 mb-1">
                    Subcategory *
                  </label>
                  <select
                    id="subcategoryId"
                    name="subcategoryId"
                    value={formData.subcategoryId}
                    onChange={handleInputChange}
                    disabled={!formData.categoryId}
                    className={`w-full px-4 py-2 border ${
                      errors.subcategoryId ? 'border-red-500' : 'border-gray-300'
                    } rounded-md focus:ring-2 focus:ring-[#4ecfc5] focus:border-[#4ecfc5] disabled:opacity-50`}
                  >
                    <option value="">Select a subcategory</option>
                    {subcategories.map(subcategory => (
                      <option key={subcategory._id} value={subcategory._id}>
                        {subcategory.name}
                      </option>
                    ))}
                  </select>
                  {errors.subcategoryId && (
                    <p className="mt-1 text-sm text-red-600">{errors.subcategoryId}</p>
                  )}
                </div>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">Social Media Links</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="linkedinUrl" className="block text-sm font-medium text-gray-700 mb-1">
                    LinkedIn
                  </label>
                  <input
                    type="url"
                    id="linkedinUrl"
                    name="linkedinUrl"
                    value={formData.linkedinUrl}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4ecfc5] focus:border-[#4ecfc5]"
                    placeholder="https://linkedin.com/company/..."
                  />
                </div>
                
                <div>
                  <label htmlFor="facebookUrl" className="block text-sm font-medium text-gray-700 mb-1">
                    Facebook
                  </label>
                  <input
                    type="url"
                    id="facebookUrl"
                    name="facebookUrl"
                    value={formData.facebookUrl}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4ecfc5] focus:border-[#4ecfc5]"
                    placeholder="https://facebook.com/..."
                  />
                </div>
                
                <div>
                  <label htmlFor="twitterUrl" className="block text-sm font-medium text-gray-700 mb-1">
                    Twitter
                  </label>
                  <input
                    type="url"
                    id="twitterUrl"
                    name="twitterUrl"
                    value={formData.twitterUrl}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4ecfc5] focus:border-[#4ecfc5]"
                    placeholder="https://twitter.com/..."
                  />
                </div>
              </div>
            </div>
            
            {/* Team Leads */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900">Team Leads</h2>
                <button
                  type="button"
                  onClick={addTeamLead}
                  className="px-4 py-2 bg-[#4ecfc5] text-white rounded-md hover:bg-[#3ab5a8] focus:outline-none focus:ring-2 focus:ring-[#4ecfc5]"
                >
                  Add Team Lead
                </button>
              </div>
              
              {formData.teamLeads.map((teamLead, index) => (
                <div key={index} className="mb-6 p-4 border border-gray-200 rounded-md bg-gray-50">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium text-gray-700">Team Lead {index + 1}</h3>
                    {formData.teamLeads.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeTeamLead(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor={`teamLead-${index}-name`} className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id={`teamLead-${index}-name`}
                        value={teamLead.name}
                        onChange={(e) => handleTeamLeadChange(index, 'name', e.target.value)}
                        className={`w-full px-4 py-2 border ${
                          errors[`teamLead-${index}-name`] ? 'border-red-500' : 'border-gray-300'
                        } rounded-md focus:ring-2 focus:ring-[#4ecfc5] focus:border-[#4ecfc5]`}
                        placeholder="Enter name"
                      />
                      {errors[`teamLead-${index}-name`] && (
                        <p className="mt-1 text-sm text-red-600">{errors[`teamLead-${index}-name`]}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor={`teamLead-${index}-position`} className="block text-sm font-medium text-gray-700 mb-1">
                        Position
                      </label>
                      <input
                        type="text"
                        id={`teamLead-${index}-position`}
                        value={teamLead.position}
                        onChange={(e) => handleTeamLeadChange(index, 'position', e.target.value)}
                        className={`w-full px-4 py-2 border ${
                          errors[`teamLead-${index}-position`] ? 'border-red-500' : 'border-gray-300'
                        } rounded-md focus:ring-2 focus:ring-[#4ecfc5] focus:border-[#4ecfc5]`}
                        placeholder="Enter position"
                      />
                      {errors[`teamLead-${index}-position`] && (
                        <p className="mt-1 text-sm text-red-600">{errors[`teamLead-${index}-position`]}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor={`teamLead-${index}-linkedin`} className="block text-sm font-medium text-gray-700 mb-1">
                        LinkedIn URL
                      </label>
                      <input
                        type="url"
                        id={`teamLead-${index}-linkedin`}
                        value={teamLead.linkedinUrl}
                        onChange={(e) => handleTeamLeadChange(index, 'linkedinUrl', e.target.value)}
                        className={`w-full px-4 py-2 border ${
                          errors[`teamLead-${index}-linkedin`] ? 'border-red-500' : 'border-gray-300'
                        } rounded-md focus:ring-2 focus:ring-[#4ecfc5] focus:border-[#4ecfc5]`}
                        placeholder="https://linkedin.com/in/..."
                      />
                      {errors[`teamLead-${index}-linkedin`] && (
                        <p className="mt-1 text-sm text-red-600">{errors[`teamLead-${index}-linkedin`]}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor={`teamLead-${index}-facebook`} className="block text-sm font-medium text-gray-700 mb-1">
                        Facebook URL
                      </label>
                      <input
                        type="url"
                        id={`teamLead-${index}-facebook`}
                        value={teamLead.facebookUrl}
                        onChange={(e) => handleTeamLeadChange(index, 'facebookUrl', e.target.value)}
                        className={`w-full px-4 py-2 border ${
                          errors[`teamLead-${index}-facebook`] ? 'border-red-500' : 'border-gray-300'
                        } rounded-md focus:ring-2 focus:ring-[#4ecfc5] focus:border-[#4ecfc5]`}
                        placeholder="https://facebook.com/..."
                      />
                      {errors[`teamLead-${index}-facebook`] && (
                        <p className="mt-1 text-sm text-red-600">{errors[`teamLead-${index}-facebook`]}</p>
                      )}
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor={`teamLead-${index}-twitter`} className="block text-sm font-medium text-gray-700 mb-1">
                        Twitter URL
                      </label>
                      <input
                        type="url"
                        id={`teamLead-${index}-twitter`}
                        value={teamLead.twitterUrl}
                        onChange={(e) => handleTeamLeadChange(index, 'twitterUrl', e.target.value)}
                        className={`w-full px-4 py-2 border ${
                          errors[`teamLead-${index}-twitter`] ? 'border-red-500' : 'border-gray-300'
                        } rounded-md focus:ring-2 focus:ring-[#4ecfc5] focus:border-[#4ecfc5]`}
                        placeholder="https://twitter.com/..."
                      />
                      {errors[`teamLead-${index}-twitter`] && (
                        <p className="mt-1 text-sm text-red-600">{errors[`teamLead-${index}-twitter`]}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Company Image */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">Company Image</h2>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  {imagePreview ? (
                    <Image 
                      src={imagePreview} 
                      alt="Preview" 
                      width={128}
                      height={128}
                      className="w-32 h-32 object-cover rounded-md border border-gray-300"
                    />
                  ) : (
                    <div className="w-32 h-32 bg-gray-200 rounded-md border border-gray-300 flex items-center justify-center">
                      <span className="text-gray-500">No image</span>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Company Logo
                  </label>
                  <div className="flex items-start space-x-4">
                    <label className="cursor-pointer bg-[#4ecfc5] text-white py-2 px-4 rounded-md shadow-sm text-sm font-medium hover:bg-[#3ab5a8] focus:outline-none focus:ring-2 focus:ring-[#4ecfc5]">
                      Choose File
                      <input
                        type="file"
                        className="sr-only"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </label>
                    <div>
                      <p className="text-sm text-gray-600">
                        PNG, JPG, GIF up to 5MB
                      </p>
                      {imageFile && (
                        <p className="mt-1 text-sm text-gray-500">
                          Selected: {imageFile.name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Submit Button */}
            <div className="flex justify-end space-x-4 pt-4">
              <button
                type="button"
                onClick={() => router.push('/user-dashboard')}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-[#4ecfc5] text-white rounded-md hover:bg-[#3ab5a8] focus:outline-none focus:ring-2 focus:ring-[#4ecfc5] flex items-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting&#46;&#46;&#46;
                  </>
                ) : (
                  'Submit Listing Request'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;