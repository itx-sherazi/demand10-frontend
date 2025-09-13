'use client'
import React, { useEffect, useState } from "react";
import { FaUser, FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaCheck, FaPhone, FaGlobe, FaBuilding, FaEnvelope, FaArrowRight, FaArrowLeft, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

export default function listing() {
  // State for testimonial carousel
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // State for form steps
  const [currentStep, setCurrentStep] = useState(1);
  
  // State for service type selection
  const [serviceType, setServiceType] = useState('custom');
  
  // Sample testimonial data (5 testimonials)
  const testimonials = [
    {
      id: 1,
      name: "Steven Gabbard",
      role: "Founder",
      content: "SoftwareSuggest listed our product, increasing our visibility and lead generation, resulting in more customers.",
      rating: 5,
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-13/feg4FpDyKX.png"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Marketing Director",
      content: "The platform helped us reach our target audience effectively. Our conversion rates improved by 40% in just three months.",
      rating: 5,
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-13/feg4FpDyKX.png"
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "CTO",
      content: "As a tech company, we needed a platform that understood our industry. SoftwareSuggest delivered beyond expectations.",
      rating: 5,
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-13/feg4FpDyKX.png"
    },
    {
      id: 4,
      name: "Emma Rodriguez",
      role: "Product Manager",
      content: "The detailed analytics and customer insights we gained helped us refine our product strategy significantly.",
      rating: 5,
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-13/feg4FpDyKX.png"
    },
    {
      id: 5,
      name: "David Wilson",
      role: "CEO",
      content: "Our partnership with SoftwareSuggest has been transformative for our business growth and market expansion.",
      rating: 5,
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-13/feg4FpDyKX.png"
    }
  ];

  // Auto-rotate testimonials every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 3000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Navigation functions for testimonials
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Form state with all required fields from the schema
  const [formData, setFormData] = useState({
    // User info
    name: '',
    email: '',
    
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
    subcategoryId: ''
  });

  // Handle form input changes for simple fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle step navigation
  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your submission! Our team will contact you shortly.');
    // Reset form and go back to step 1
    setFormData({
      name: '',
      email: '',
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
      subcategoryId: ''
    });
    setCurrentStep(1);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#f0f4f8] to-[#e2e8f0] overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 opacity-5">
          <div className="w-40 h-40 rounded-full bg-[#314158]"></div>
        </div>
        <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 opacity-5">
          <div className="w-24 h-24 rounded-full bg-[#8d9fbe]"></div>
        </div>
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-5">
          <div className="w-32 h-32 rounded-full bg-[#314158]"></div>
        </div>
        
        <div className="relative w-full mx-auto py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-[#253347] mb-4">
              Welcome To SoftwareSuggest!
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
            <div className="max-w-4xl mx-auto p-5">
              <div className="text-center mb-7">
                <h2 className="text-2xl font-bold text-[#253347] mb-3">
                  Hear From Our Customers
                </h2>
                <p className="text-[#314158] max-w-md mx-auto">
                  Discover what our customers have to say about their experience with us!
                </p>
              </div>

              {/* Testimonial Carousel */}
              <div className="relative bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                {/* Navigation Arrows */}
                <button 
                  onClick={prevTestimonial}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#f8fafc] shadow flex items-center justify-center text-[#314158] hover:bg-[#e2e8f0] transition-colors z-10"
                  aria-label="Previous testimonial"
                >
                  <FaChevronLeft />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#f8fafc] shadow flex items-center justify-center text-[#314158] hover:bg-[#e2e8f0] transition-colors z-10"
                  aria-label="Next testimonial"
                >
                  <FaChevronRight />
                </button>

                {/* Testimonial Content */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  {/* Profile Image */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#314158] shadow-lg">
                      <img 
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-2">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-lg" />
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-[#253347] mb-1">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <p className="text-[#314158] font-medium mb-3">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-[#253347] italic text-lg">
                      "{testimonials[currentTestimonial].content}"
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <h4 className="text-lg font-bold text-[#314158]">
                        {testimonials[currentTestimonial].company || "SoftwareSuggest"}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center space-x-2 mt-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial
                          ? 'bg-[#314158] w-8'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Comprehensive Product Listing Form */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-5 border border-gray-100 max-w-xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold text-[#253347] text-center mb-1">
                List Your Product
              </h2>
              <p className="text-[#314158] text-center mb-5">It's Free and Takes Less Than 5 Minutes</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Step 1: Basic Information */}
                {currentStep === 1 && (
                  <div className="space-y-4 animate-fadeIn">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <div>
                        <label htmlFor="name" className="block text-[#253347] mb-1 text-sm">
                          Full Name *
                        </label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          value={formData.name}
                          onChange={handleInputChange}
                          required 
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#314158] focus:border-[#314158] outline-none transition text-sm"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-[#253347] mb-1 text-sm">
                          Business Email *
                        </label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          required 
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#314158] focus:border-[#314158] outline-none transition text-sm"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="companyName" className="block text-[#253347] mb-1 text-sm">
                        Company Name *
                      </label>
                      <input 
                        type="text" 
                        id="companyName" 
                        name="companyName" 
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required 
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#314158] focus:border-[#314158] outline-none transition text-sm"
                        placeholder="Your Company Inc."
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <div>
                        <label htmlFor="companyEmail" className="block text-[#253347] mb-1 text-sm">
                          Company Email *
                        </label>
                        <input 
                          type="email" 
                          id="companyEmail" 
                          name="companyEmail" 
                          value={formData.companyEmail}
                          onChange={handleInputChange}
                          required 
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#314158] focus:border-[#314158] outline-none transition text-sm"
                          placeholder="contact@company.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="companyPhone" className="block text-[#253347] mb-1 text-sm">
                          Company Phone *
                        </label>
                        <input 
                          type="tel" 
                          id="companyPhone" 
                          name="companyPhone" 
                          value={formData.companyPhone}
                          onChange={handleInputChange}
                          required 
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#314158] focus:border-[#314158] outline-none transition text-sm"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <div>
                        <label htmlFor="website" className="block text-[#253347] mb-1 text-sm">
                          Company Website
                        </label>
                        <input 
                          type="url" 
                          id="website" 
                          name="website" 
                          value={formData.website}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#314158] focus:border-[#314158] outline-none transition text-sm"
                          placeholder="https://yourcompany.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="companyCountry" className="block text-[#253347] mb-1 text-sm">
                          Company Country
                        </label>
                        <select 
                          id="companyCountry" 
                          name="companyCountry"
                          value={formData.companyCountry}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#314158] focus:border-[#314158] outline-none transition text-sm appearance-none bg-white"
                        >
                          <option value="">Select Country</option>
                          <option value="us">United States</option>
                          <option value="uk">United Kingdom</option>
                          <option value="ca">Canada</option>
                          <option value="au">Australia</option>
                          <option value="de">Germany</option>
                          <option value="fr">France</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="pt-1">
                      <button 
                        type="button" 
                        onClick={nextStep}
                        className="w-full bg-[#314158] hover:bg-[#253347] text-white font-medium py-2 rounded-lg transition-colors flex items-center justify-center"
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
                      <label htmlFor="description" className="block text-[#253347] mb-1 text-sm">
                        Company Description
                      </label>
                      <textarea 
                        id="description" 
                        name="description" 
                        value={formData.description}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#314158] focus:border-[#314158] outline-none transition text-sm"
                        placeholder="Briefly describe your company and what you do..."
                      ></textarea>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <div>
                        <label htmlFor="foundedYear" className="block text-[#253347] mb-1 text-sm">
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
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#314158] focus:border-[#314158] outline-none transition text-sm"
                          placeholder="2010"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="employees" className="block text-[#253347] mb-1 text-sm">
                          Number of Employees
                        </label>
                        <select 
                          id="employees" 
                          name="employees"
                          value={formData.employees}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#314158] focus:border-[#314158] outline-none transition text-sm appearance-none bg-white"
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
                    
                    <div className="flex gap-2 pt-1">
                      <button 
                        type="button" 
                        onClick={prevStep}
                        className="flex-1 bg-gray-100 hover:bg-gray-200 text-[#253347] font-medium py-2 rounded-lg transition-colors flex items-center justify-center"
                      >
                        <FaArrowLeft className="mr-2 text-sm" />
                        Back
                      </button>
                      
                      <button 
                        type="button" 
                        onClick={nextStep}
                        className="flex-1 bg-[#314158] hover:bg-[#253347] text-white font-medium py-2 rounded-lg transition-colors flex items-center justify-center"
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
                    <p className="text-[#314158] text-sm">Share your company's social media profiles</p>
                    
                    <div className="space-y-2">
                      <div>
                        <label htmlFor="linkedinUrl" className="block text-[#253347] mb-1 text-sm flex items-center">
                          <FaLinkedin className="text-[#0077b5] mr-2" /> LinkedIn URL
                        </label>
                        <input 
                          type="url" 
                          id="linkedinUrl" 
                          name="linkedinUrl" 
                          value={formData.linkedinUrl}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#314158] focus:border-[#314158] outline-none transition text-sm"
                          placeholder="https://linkedin.com/company/yourcompany"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="facebookUrl" className="block text-[#253347] mb-1 text-sm flex items-center">
                          <FaFacebook className="text-[#1877f2] mr-2" /> Facebook URL
                        </label>
                        <input 
                          type="url" 
                          id="facebookUrl" 
                          name="facebookUrl" 
                          value={formData.facebookUrl}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#314158] focus:border-[#314158] outline-none transition text-sm"
                          placeholder="https://facebook.com/yourcompany"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="twitterUrl" className="block text-[#253347] mb-1 text-sm flex items-center">
                          <FaTwitter className="text-[#1da1f2] mr-2" /> Twitter URL
                        </label>
                        <input 
                          type="url" 
                          id="twitterUrl" 
                          name="twitterUrl" 
                          value={formData.twitterUrl}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#314158] focus:border-[#314158] outline-none transition text-sm"
                          placeholder="https://twitter.com/yourcompany"
                        />
                      </div>
                    </div>
                    
                    <div className="flex gap-2 pt-1">
                      <button 
                        type="button" 
                        onClick={prevStep}
                        className="flex-1 bg-gray-100 hover:bg-gray-200 text-[#253347] font-medium py-2 rounded-lg transition-colors flex items-center justify-center"
                      >
                        <FaArrowLeft className="mr-2 text-sm" />
                        Back
                      </button>
                      
                      <button 
                        type="button" 
                        onClick={nextStep}
                        className="flex-1 bg-[#314158] hover:bg-[#253347] text-white font-medium py-2 rounded-lg transition-colors flex items-center justify-center"
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
                    <p className="text-[#314158] text-sm">Select your company's primary category and subcategory</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <div>
                        <label htmlFor="categoryId" className="block text-[#253347] mb-1 text-sm">
                          Primary Category
                        </label>
                        <select 
                          id="categoryId" 
                          name="categoryId"
                          value={formData.categoryId}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#314158] focus:border-[#314158] outline-none transition text-sm appearance-none bg-white"
                        >
                          <option value="">Select Category</option>
                          <option value="marketing">Marketing</option>
                          <option value="sales">Sales</option>
                          <option value="customer-service">Customer Service</option>
                          <option value="it-management">IT Management</option>
                          <option value="hr">Human Resources</option>
                          <option value="finance">Finance</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="subcategoryId" className="block text-[#253347] mb-1 text-sm">
                          Subcategory
                        </label>
                        <select 
                          id="subcategoryId" 
                          name="subcategoryId"
                          value={formData.subcategoryId}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#314158] focus:border-[#314158] outline-none transition text-sm appearance-none bg-white"
                        >
                          <option value="">Select Subcategory</option>
                          <option value="email-marketing">Email Marketing</option>
                          <option value="social-media">Social Media</option>
                          <option value="content-marketing">Content Marketing</option>
                          <option value="crm">CRM</option>
                          <option value="analytics">Analytics</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
                      <h3 className="font-bold text-[#253347] mb-2">Review Your Details</h3>
                      <div className="text-sm text-[#314158] space-y-1">
                        <p><span className="font-medium">Contact:</span> {formData.name} ({formData.email})</p>
                        <p><span className="font-medium">Company:</span> {formData.companyName}</p>
                        <p><span className="font-medium">Website:</span> {formData.website || 'Not provided'}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="terms" 
                        name="terms" 
                        required 
                        className="w-4 h-4 text-[#314158] border-gray-300 rounded focus:ring-[#314158]"
                      />
                      <label htmlFor="terms" className="ml-2 text-[#253347] text-sm">
                        I agree to the <a href="#terms" className="text-[#314158] hover:underline">Terms of Use</a> and <a href="#privacy" className="text-[#314158] hover:underline">Privacy Policy</a>
                      </label>
                    </div>
                    
                    <div className="flex gap-2 pt-1">
                      <button 
                        type="button" 
                        onClick={prevStep}
                        className="flex-1 bg-gray-100 hover:bg-gray-200 text-[#253347] font-medium py-2 rounded-lg transition-colors flex items-center justify-center"
                      >
                        <FaArrowLeft className="mr-2 text-sm" />
                        Back
                      </button>
                      
                      <button 
                        type="submit" 
                        className="flex-1 bg-[#314158] hover:bg-[#253347] text-white font-medium py-2 rounded-lg transition-colors flex items-center justify-center"
                      >
                        <FaCheck className="mr-2 text-sm" />
                        Submit Listing
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Why Us Section */}
      <div className="bg-gradient-to-r from-[#314158] to-[#253347] rounded-2xl p-6 md:p-8 text-white mx-4 my-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Why Choose SoftwareSuggest?</h2>
        <p className="text-center mb-6 max-w-3xl mx-auto text-[#e2e8f0]">
          Reach millions of active buyers on SoftwareSuggest: Get Free listings, customer reviews, 
          enhanced brand value, and increased visibility for vendors, driving improved marketing and lead generation.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#314158]/30 backdrop-blur-sm rounded-xl p-5 text-center border border-[#8d9fbe]/30 hover:border-[#8d9fbe]/60 transition-all duration-300 hover:shadow-lg">
            <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <img 
                src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-13/kJHws4GtE1.png" 
                alt="Listed software" 
                className="w-8 h-8"
              />
            </div>
            <div className="text-3xl font-bold mb-2">50k+</div>
            <p className="text-[#e2e8f0]">Listed software & services</p>
          </div>
          <div className="bg-[#314158]/30 backdrop-blur-sm rounded-xl p-5 text-center border border-[#8d9fbe]/30 hover:border-[#8d9fbe]/60 transition-all duration-300 hover:shadow-lg">
            <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <img 
                src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-13/hDYCnw4C6y.png" 
                alt="Categories" 
                className="w-8 h-8"
              />
            </div>
            <div className="text-3xl font-bold mb-2">1500+</div>
            <p className="text-[#e2e8f0]">Software & service categories</p>
          </div>
          <div className="bg-[#314158]/30 backdrop-blur-sm rounded-xl p-5 text-center border border-[#8d9fbe]/30 hover:border-[#8d9fbe]/60 transition-all duration-300 hover:shadow-lg">
            <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
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
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            List Your Product for Free
          </button>
        </div>
      </div>

      {/* Request A Free Estimate Section */}
      <div className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#253347] text-center mb-3">
            Request A Free Estimate
          </h2>
          <p className="text-[#314158] text-center mb-8 max-w-3xl mx-auto">
            Ready to take the first step? Request a free estimate and let's explore how we can work together
            to achieve your vision.
          </p>
          
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <button 
                className={`py-3 px-6 font-medium ${serviceType === 'custom' ? 'bg-[#314158] text-white' : 'text-[#314158] hover:bg-gray-50'}`}
                onClick={() => setServiceType('custom')}
              >
                Custom Services
              </button>
              <button 
                className={`py-3 px-6 font-medium ${serviceType === 'value-added' ? 'bg-[#314158] text-white' : 'text-[#314158] hover:bg-gray-50'}`}
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
                <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-4 border border-gray-100">
                    <img 
                      src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-13/uREn5sFCmv.png" 
                      alt="Pay Per Click" 
                      className="w-8 h-8"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#253347] mb-3">Pay Per Click</h3>
                  <p className="text-[#314158] mb-5">
                    Boost your website traffic and increase sales by adopting our PPC services at lowest pricing
                  </p>
                  <button className="bg-[#314158] hover:bg-[#253347] text-white font-medium py-2.5 px-5 rounded-lg transition-colors">
                    Get a Free Estimate
                  </button>
                </div>
                
                {/* Service Card 2 */}
                <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-4 border border-gray-100">
                    <img 
                      src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-13/6GDybxcDqN.png" 
                      alt="Marketing Qualified Lead" 
                      className="w-8 h-8"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#253347] mb-3">Marketing Qualified Lead</h3>
                  <p className="text-[#314158] mb-5">
                    Ensure that your sales representatives pursue the best quality leads with our MQL services
                  </p>
                  <button className="bg-[#314158] hover:bg-[#253347] text-white font-medium py-2.5 px-5 rounded-lg transition-colors">
                    Get a Free Estimate
                  </button>
                </div>
                
                {/* Service Card 3 */}
                <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-4 border border-gray-100">
                    <img 
                      src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-13/biOLJ7nG2G.png" 
                      alt="Premium Listing" 
                      className="w-8 h-8"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#253347] mb-3">Premium Listing</h3>
                  <p className="text-[#314158] mb-5">
                    Get listed on our SoftwareSuggest platform to get exposed to monthly traffic of 1M+.
                  </p>
                  <button className="bg-[#314158] hover:bg-[#253347] text-white font-medium py-2.5 px-5 rounded-lg transition-colors">
                    Get a Free Estimate
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Value Added Service Card 1 */}
                <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-4 border border-gray-100">
                    <img 
                      src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-13/uREn5sFCmv.png" 
                      alt="SEO Optimization" 
                      className="w-8 h-8"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#253347] mb-3">SEO Optimization</h3>
                  <p className="text-[#314158] mb-5">
                    Improve your search engine rankings and drive more organic traffic to your website
                  </p>
                  <button className="bg-[#314158] hover:bg-[#253347] text-white font-medium py-2.5 px-5 rounded-lg transition-colors">
                    Get a Free Estimate
                  </button>
                </div>
                
                {/* Value Added Service Card 2 */}
                <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-4 border border-gray-100">
                    <img 
                      src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-13/6GDybxcDqN.png" 
                      alt="Content Marketing" 
                      className="w-8 h-8"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#253347] mb-3">Content Marketing</h3>
                  <p className="text-[#314158] mb-5">
                    Engage your audience with compelling content that drives conversions and builds brand loyalty
                  </p>
                  <button className="bg-[#314158] hover:bg-[#253347] text-white font-medium py-2.5 px-5 rounded-lg transition-colors">
                    Get a Free Estimate
                  </button>
                </div>
                
                {/* Value Added Service Card 3 */}
                <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-4 border border-gray-100">
                    <img 
                      src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-13/biOLJ7nG2G.png" 
                      alt="Social Media Management" 
                      className="w-8 h-8"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#253347] mb-3">Social Media Management</h3>
                  <p className="text-[#314158] mb-5">
                    Build and engage your community across all major social platforms with our expert management
                  </p>
                  <button className="bg-[#314158] hover:bg-[#253347] text-white font-medium py-2.5 px-5 rounded-lg transition-colors">
                    Get a Free Estimate
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Get Your Free Pricing Estimate Section */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#253347] text-center mb-3">
          Get Your Free Pricing Estimate Now
        </h2>
        <p className="text-[#314158] text-center mb-10 max-w-3xl mx-auto">
          Looking for a way to maximize your business potential? Our team is ready to provide you with a free pricing
          estimate tailored to your unique needs.
        </p>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Steps */}
          <div className="lg:w-1/2">
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="bg-white rounded-xl shadow-lg p-6 flex border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-[#314158] rounded-full flex items-center justify-center text-white font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#253347] mb-2">Step 1: Select your Service</h3>
                  <p className="text-[#314158]">
                    Easily select the service you need and choose the relevant product category to start your order with just one click.
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="bg-white rounded-xl shadow-lg p-6 flex border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-[#314158] rounded-full flex items-center justify-center text-white font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#253347] mb-2">Step 2: Select your product's category</h3>
                  <p className="text-[#314158]">
                    Select the category of the product you are interested in to see the available options.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="bg-white rounded-xl shadow-lg p-6 flex border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-[#314158] rounded-full flex items-center justify-center text-white font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#253347] mb-2">Step 3: Schedule a call with us today!</h3>
                  <p className="text-[#314158]">
                    Our team is ready to assist you in selecting the right service and product category to meet your requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Service Selection */}
          <div className="lg:w-1/2 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="w-6 h-6 rounded-full border-2 border-[#314158] flex items-center justify-center mx-auto mb-2">
                    <div className="w-2.5 h-2.5 bg-[#314158] rounded-full"></div>
                  </div>
                  <span className="text-[#314158] font-medium">Software</span>
                </div>
                <div className="text-center">
                  <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center mx-auto mb-2">
                  </div>
                  <span className="text-[#314158] font-medium">Service</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center cursor-pointer">
                <div className="bg-blue-50 rounded-lg p-4 mb-2 border border-gray-100 hover:bg-blue-100 transition-colors">
                  <img 
                    src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-13/z20wUbUrj3.png" 
                    alt="Pay Per Click" 
                    className="w-10 h-10 mx-auto"
                  />
                </div>
                <span className="text-[#314158] font-medium text-sm">Pay Per Click</span>
              </div>
              <div className="text-center cursor-pointer">
                <div className="bg-gray-50 rounded-lg p-4 mb-2 border border-gray-100 hover:bg-gray-100 transition-colors">
                  <img 
                    src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-13/sqdVxpvmVq.png" 
                    alt="Sponsorships" 
                    className="w-10 h-10 mx-auto"
                  />
                </div>
                <span className="text-[#253347] font-medium text-sm">Sponsorships</span>
              </div>
              <div className="text-center cursor-pointer">
                <div className="bg-gray-50 rounded-lg p-4 mb-2 border border-gray-100 hover:bg-gray-100 transition-colors">
                  <img 
                    src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-13/8xNBgAyTjp.png" 
                    alt="Premium Listing" 
                    className="w-10 h-10 mx-auto"
                  />
                </div>
                <span className="text-[#253347] font-medium text-sm">Premium Listing</span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center cursor-pointer">
                <div className="bg-gray-50 rounded-lg p-4 mb-2 border border-gray-100 hover:bg-gray-100 transition-colors">
                  <img 
                    src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-13/p05ZQLmcb4.png" 
                    alt="Branded Content" 
                    className="w-10 h-10 mx-auto"
                  />
                </div>
                <span className="text-[#253347] font-medium text-sm">Branded Content<br/>Solutions</span>
              </div>
              <div className="text-center cursor-pointer">
                <div className="bg-gray-50 rounded-lg p-4 mb-2 border border-gray-100 hover:bg-gray-100 transition-colors">
                  <img 
                    src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-13/oHnsrgZoy2.png" 
                    alt="Marketing Qualified" 
                    className="w-10 h-10 mx-auto"
                  />
                </div>
                <span className="text-[#253347] font-medium text-sm">Marketing Qualified<br/>Leads</span>
              </div>
              <div className="text-center cursor-pointer">
                <div className="bg-gray-50 rounded-lg p-4 mb-2 border border-gray-100 hover:bg-gray-100 transition-colors">
                  <img 
                    src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-13/gbbFWUOjqW.png" 
                    alt="Product Review" 
                    className="w-10 h-10 mx-auto"
                  />
                </div>
                <span className="text-[#253347] font-medium text-sm">Product/Service<br/>Review</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-[#253347] mb-2 font-medium">Select Category</label>
                <select className="w-full py-3 px-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#314158] focus:border-[#314158] outline-none transition">
                  <option>--Select Category--</option>
                  <option>Marketing</option>
                  <option>Sales</option>
                  <option>Customer Service</option>
                  <option>IT Management</option>
                  <option>Human Resources</option>
                  <option>Finance</option>
                </select>
              </div>
              <div>
                <label className="block text-[#253347] mb-2 font-medium">Software Name</label>
                <input 
                  type="text" 
                  placeholder="Enter software name" 
                  className="w-full py-3 px-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#314158] focus:border-[#314158] outline-none transition"
                />
              </div>
            </div>
            
            <div className="text-center">
              <button className="bg-[#314158] hover:bg-[#253347] text-white font-bold py-3 px-8 rounded-lg transition-colors transform hover:scale-105 duration-300 shadow-md">
                Get a Free Estimate
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* List Your Product Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#253347] text-center mb-4">
            List Your Product & Boost Your Market Presence
          </h2>
          <p className="text-[#314158] text-center mb-10 max-w-3xl mx-auto">
            Follow these simple steps to get started and maximize your business potential
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 my-12">
            <div className="text-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-100 shadow-md relative">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-[#314158] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <img 
                  src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-13/Wdb7N1KgOi.png" 
                  alt="Step 1" 
                  className="w-12 h-12"
                />
              </div>
              <div className="h-1 bg-gray-200 w-24 mx-auto mb-4"></div>
              <h3 className="font-bold text-[#253347] mb-2">Create FREE Listing</h3>
              <p className="font-medium text-sm text-[#314158]">Set up your basic company profile</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-100 shadow-md relative">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-[#314158] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <img 
                  src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-13/2MAcGFgYtC.png" 
                  alt="Step 2" 
                  className="w-12 h-12"
                />
              </div>
              <div className="h-1 bg-gray-200 w-24 mx-auto mb-4"></div>
              <h3 className="font-bold text-[#253347] mb-2">List Your Product</h3>
              <p className="font-medium text-sm text-[#314158]">Add detailed product information</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-100 shadow-md relative">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-[#314158] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <img 
                  src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-13/ncLGsstQ5w.png" 
                  alt="Step 3" 
                  className="w-12 h-12"
                />
              </div>
              <div className="h-1 bg-gray-200 w-24 mx-auto mb-4"></div>
              <h3 className="font-bold text-[#253347] mb-2">Maintain Your Listing</h3>
              <p className="font-medium text-sm text-[#314158]">Keep information up to date</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-100 shadow-md relative">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-[#314158] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  4
                </div>
                <img 
                  src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-13/v3vHvuaHs6.png" 
                  alt="Step 4" 
                  className="w-12 h-12"
                />
              </div>
              <h3 className="font-bold text-[#253347] mb-2">Boost Exposure</h3>
              <p className="font-medium text-sm text-[#314158]">Maximize visibility with us</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#314158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#253347] mb-2">Trusted Platform</h3>
              <p className="mb-2 text-[#314158] text-sm">
                Join thousands of companies who trust our platform for growth
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#314158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-bold text-[#253347] mb-2">Increased Visibility</h3>
              <p className="mb-2 text-[#314158] text-sm">
                Reach millions of active buyers searching for your solutions
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#314158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#253347] mb-2">Expand Reach</h3>
              <p className="mb-2 text-[#314158] text-sm">
                Connect with potential customers across multiple industries
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#314158]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#253347] mb-2">Track Performance</h3>
              <p className="mb-2 text-[#314158] text-sm">
                Monitor your listing performance with detailed analytics
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <button className="bg-[#314158] hover:bg-[#253347] text-white font-bold py-3 px-8 rounded-lg transition-colors transform hover:scale-105 duration-300 shadow-md">
              List Your Product Now
            </button>
          </div>
        </div>
      </div>

      {/* Happy Customers Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#253347] text-center mb-10">
          Trusted by Thousands of Happy Customers
        </h2>
        <p className="text-[#314158] text-center mb-10 max-w-3xl mx-auto">
          Join the growing community of businesses that have transformed their growth with our platform
        </p>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-center h-24 border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="bg-gray-100 border border-gray-200 rounded-lg w-16 h-16 flex items-center justify-center">
                <span className="text-[#314158] font-bold">Logo {index + 1}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="bg-[#314158] hover:bg-[#253347] text-white font-bold py-3 px-8 rounded-lg transition-colors transform hover:scale-105 duration-300 shadow-md">
            Become Our Next Success Story
          </button>
        </div>
      </div>
    </div>
  );
}