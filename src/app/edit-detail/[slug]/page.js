"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { checkEditAccess, updateCompanyData, getCompanyBySlug } from '@/services/userApi';
import { toast } from 'react-toastify';

export default function EditCompany({ params }) {
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    description: '',
    website: '',
    linkedinUrl: '',
    facebookUrl: '',
    twitterUrl: '',
    companyCountry: '',
    foundedYear: '',
    employees: '',
    image: ''
  });
  const [imagePreview, setImagePreview] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAccessAndFetchCompany = async () => {
      try {
        // Check if user has edit access using slug
        const accessData = await checkEditAccess(params.slug);
        
        if (accessData.ok && accessData.hasAccess) {
          setHasAccess(true);
          // Fetch company data by slug
          const companyData = await getCompanyBySlug(params.slug);
          
          if (companyData.ok) {
            const company = companyData.data;
            setCompany(company);
            setFormData({
              companyName: company.companyName || '',
              description: company.description || '',
              website: company.website || '',
              linkedinUrl: company.linkedinUrl || '',
              facebookUrl: company.facebookUrl || '',
              twitterUrl: company.twitterUrl || '',
              companyCountry: company.companyCountry || '',
              foundedYear: company.foundedYear || '',
              employees: company.employees || '',
              image: company.image || ''
            });
            setImagePreview(company.image || '');
          }
        } else {
          router.push('/user-dashboard');
        }
      } catch (err) {
        console.error('Error checking access:', err);
        router.push('/user-dashboard');
      } finally {
        setLoading(false);
      }
    };

    checkAccessAndFetchCompany();
  }, [params.slug, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setIsSubmitting(true);
    
    try {
      let result;
      
      // If there's an image file, we need to use FormData
      if (imageFile) {
        const formDataToSend = new FormData();
        
        // Append all form fields
        Object.keys(formData).forEach(key => {
          if (key !== 'image') { // Skip image field as we're sending the file separately
            formDataToSend.append(key, formData[key]);
          }
        });
        
        // Append the image file
        formDataToSend.append('image', imageFile);
        
        // We need to create a new function for this specific request
        result = await updateCompanyWithImage(params.slug, formDataToSend);
      } else {
        // Use existing function for regular updates without image
        result = await updateCompanyData(params.slug, formData);
      }
      
      if (result.ok) {
        toast.success('Company updated successfully!');
        setSuccess(true);
        // Show success message for 2 seconds then redirect
        setTimeout(() => {
          router.push('/user-dashboard/edit-companies');
        }, 2000);
      } else {
        toast.error(result.message || 'Failed to update company');
        setError(result.message || 'Failed to update company');
      }
    } catch (err) {
      toast.error('Network error. Please try again.');
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // New function to handle updates with image upload
  const updateCompanyWithImage = async (slug, formDataToSend) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/updateCompanyTeamBySlug/${slug}`, {
        method: "PUT",
        credentials: "include",
        body: formDataToSend, // Note: Don't set Content-Type header when sending FormData
      });

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Network error during company update");
    }
  };

  const handleRemoveImage = () => {
    setImagePreview('');
    setImageFile(null);
    setFormData({
      ...formData,
      image: ''
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4ecfc5] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!hasAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600">You don{`'`}t have permission to edit this company.</p>
          <button 
            onClick={() => router.push('/user-dashboard')}
            className="mt-4 bg-[#4ecfc5] hover:bg-[#3ab5a8] text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Edit Company Information</h1>
            <button 
              onClick={() => router.push('/user-dashboard/edit-companies')}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
              Your company has been updated successfully.
            </div>
          )}
          
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Company Image Section */}
            <div className="border border-gray-200 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Company Image</h2>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  {imagePreview ? (
                    <div className="relative">
                      <Image 
                        src={imagePreview} 
                        alt="Company preview" 
                        width={128}
                        height={128}
                        className="w-32 h-32 object-cover rounded-lg border-2 border-gray-200"
                      />
                      <button
                        type="button"
                        onClick={handleRemoveImage}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <div className="w-32 h-32 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Company Logo
                  </label>
                  <div className="flex items-start space-x-4">
                    <label className="cursor-pointer bg-white py-2 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4ecfc5]">
                      Choose File
                      <input
                        type="file"
                        className="sr-only"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </label>
                    <p className="text-sm text-gray-500">
                      PNG, JPG, GIF up to 5MB
                    </p>
                  </div>
                  {imageFile && (
                    <p className="mt-2 text-sm text-gray-500">
                      Selected: {imageFile.name}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Basic Information Section */}
            <div className="border border-gray-200 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Basic Information</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ecfc5] focus:border-transparent transition"
                    placeholder="Enter company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ecfc5] focus:border-transparent transition"
                    placeholder="Describe your company..."
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Website & Social Links Section */}
            <div className="border border-gray-200 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Website & Social Links</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                    Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ecfc5] focus:border-transparent transition"
                    placeholder="https://example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="companyCountry" className="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <input
                    type="text"
                    id="companyCountry"
                    name="companyCountry"
                    value={formData.companyCountry}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ecfc5] focus:border-transparent transition"
                    placeholder="Enter country"
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Social Media Links</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="linkedinUrl" className="block text-sm font-medium text-gray-700 mb-1">
                      LinkedIn
                    </label>
                    <input
                      type="url"
                      id="linkedinUrl"
                      name="linkedinUrl"
                      value={formData.linkedinUrl}
                      onChange={handleChange}
                      placeholder="https://linkedin.com/company/..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ecfc5] focus:border-transparent transition"
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
                      onChange={handleChange}
                      placeholder="https://facebook.com/..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ecfc5] focus:border-transparent transition"
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
                      onChange={handleChange}
                      placeholder="https://twitter.com/..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ecfc5] focus:border-transparent transition"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Company Details Section */}
            <div className="border border-gray-200 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Company Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="foundedYear" className="block text-sm font-medium text-gray-700 mb-1">
                    Founded Year
                  </label>
                  <input
                    type="number"
                    id="foundedYear"
                    name="foundedYear"
                    value={formData.foundedYear}
                    onChange={handleChange}
                    min="1800"
                    max={new Date().getFullYear()}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ecfc5] focus:border-transparent transition"
                    placeholder="2020"
                  />
                </div>
                
                <div>
                  <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Employees
                  </label>
                  <input
                    type="number"
                    id="employees"
                    name="employees"
                    value={formData.employees}
                    onChange={handleChange}
                    min="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ecfc5] focus:border-transparent transition"
                    placeholder="100"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-end gap-4 pt-4">
              <button
                type="button"
                onClick={() => router.push('/user-dashboard/edit-companies')}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-[#4ecfc5] text-white rounded-lg hover:bg-[#3ab5a8] transition-colors flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Saving...
                  </>
                ) : (
                  'Save Changes'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}