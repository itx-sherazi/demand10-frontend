import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { updateCompanyData, getCompanyBySlug } from '@/services/userApi';
import { toast } from 'react-toastify';
import Image from 'next/image';

export default function CompanyEditForm({ slug, onBack }) {
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
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
    const fetchCompany = async () => {
      try {
        const companyData = await getCompanyBySlug(slug);
        
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
      } catch (err) {
        console.error('Error fetching company:', err);
        setError('Failed to load company data');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchCompany();
    }
  }, [slug]);

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
        result = await updateCompanyWithImage(slug, formDataToSend);
      } else {
        // Use existing function for regular updates without image
        result = await updateCompanyData(slug, formData);
      }
      
      if (result.ok) {
        toast.success('Company updated successfully!');
        setSuccess(true);
        // Show success message for 2 seconds then go back to list
        setTimeout(() => {
          onBack();
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
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4ecfc5] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading company data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="text-center py-12">
          <p className="text-red-500">{error}</p>
          <button 
            onClick={onBack}
            className="mt-4 bg-[#4ecfc5] hover:bg-[#3ab5a8] text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Back to Companies
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Edit Company Information</h2>
        <button 
          onClick={onBack}
          className="text-gray-500 hover:text-gray-700"
        >
          Back to Companies
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Company Name */}
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4ecfc5] focus:border-[#4ecfc5]"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4ecfc5] focus:border-[#4ecfc5]"
          />
        </div>

        {/* Website */}
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4ecfc5] focus:border-[#4ecfc5]"
          />
        </div>

        {/* Country */}
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4ecfc5] focus:border-[#4ecfc5]"
          />
        </div>

        {/* Founded Year */}
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4ecfc5] focus:border-[#4ecfc5]"
          />
        </div>

        {/* Employees */}
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4ecfc5] focus:border-[#4ecfc5]"
          />
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="linkedinUrl" className="block text-sm font-medium text-gray-700 mb-1">
              LinkedIn URL
            </label>
            <input
              type="url"
              id="linkedinUrl"
              name="linkedinUrl"
              value={formData.linkedinUrl}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4ecfc5] focus:border-[#4ecfc5]"
            />
          </div>
          
          <div>
            <label htmlFor="facebookUrl" className="block text-sm font-medium text-gray-700 mb-1">
              Facebook URL
            </label>
            <input
              type="url"
              id="facebookUrl"
              name="facebookUrl"
              value={formData.facebookUrl}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4ecfc5] focus:border-[#4ecfc5]"
            />
          </div>
          
          <div>
            <label htmlFor="twitterUrl" className="block text-sm font-medium text-gray-700 mb-1">
              Twitter URL
            </label>
            <input
              type="url"
              id="twitterUrl"
              name="twitterUrl"
              value={formData.twitterUrl}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4ecfc5] focus:border-[#4ecfc5]"
            />
          </div>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Company Image
          </label>
          <div className="flex items-start space-x-4">
            {imagePreview && (
              <div className="relative">
                <Image 
                  src={imagePreview} 
                  alt="Preview" 
                  width={96}
                  height={96}
                  className="w-24 h-24 object-cover rounded-md border"
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
            )}
            <div className="flex-1">
              <div className="flex items-center">
                <label className="bg-[#4ecfc5] hover:bg-[#3ab5a8] text-white px-4 py-2 rounded-md cursor-pointer transition-colors">
                  Choose Image
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
                <span className="ml-3 text-sm text-gray-500">
                  {imageFile ? imageFile.name : 'No file chosen'}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Upload a company logo or image (JPG, PNG, GIF)
              </p>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-red-500 text-sm">{error}</div>
        )}

        {/* Submit Button */}
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={onBack}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4ecfc5]"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#4ecfc5] hover:bg-[#3ab5a8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4ecfc5] disabled:opacity-50"
          >
            {isSubmitting ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
}