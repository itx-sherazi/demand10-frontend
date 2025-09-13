import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Users, Calendar, ExternalLink } from 'lucide-react';
import SimpleBadges from './SimpleBadges'; // Import the SimpleBadges component

const CompanyCard = ({ company }) => {
  // Function to render star ratings
  const renderStars = (rating) => {
    // Ensure rating is a valid number
    const numericRating = parseFloat(rating);
    const normalizedRating = isNaN(numericRating) ? 0 : Math.max(0, Math.min(5, numericRating));
    const fullStars = Math.floor(normalizedRating);
    const hasHalfStar = (normalizedRating - fullStars) >= 0.5;
    const stars = [];
    
    // Render full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-yellow-400">★</span>);
    }
    
    // Render half star if needed
    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-400">★</span>);
    }
    
    // Render empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300">★</span>);
    }
    
    return stars;
  };

  // Ensure company data is properly handled
  const companyRating = company?.averageRating !== undefined ? company.averageRating : 0;
  const reviewCount = company?.totalReviews || 0;

  return (
    <article
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 overflow-hidden group relative"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* Company Badge in Top Right Corner */}
      {/* {company?._id && (
        <SimpleBadges companyId={company._id} />
      )} */}
      
      <div className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          {/* Company Logo & Basic Info */}
          <div className="flex items-center gap-4 flex-1">
            <Link
              href={company?.subcategory?.slug 
                ? `/${company.subcategory.slug}/${company?.slug}` 
                : `/company/${company?.slug || "company"}`
              }
              className="block"
              itemProp="url"
                target="_blank"
  rel="noopener noreferrer"
            >
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center flex-shrink-0">
                {company?.image ? (
                  <Image
                    width={64}
                    height={64}
                    src={company.image}
                    alt={`${company?.companyName} logo`}
                    className="w-full h-full object-cover"
                    itemProp="logo"
                  />
                ) : (
                  <div
                    className="w-full h-full bg-gradient-to-br from-[#8d9fbe] to-[#7a8bb0] flex items-center justify-center text-white font-bold text-xl"
                    aria-hidden="true"
                  >
                    {company?.companyName?.charAt(0) || 'C'}
                  </div>
                )}
              </div>
            </Link>
            
            <Link
              href={company?.subcategory?.slug 
                ? `/${company.subcategory.slug}/${company?.slug}` 
                : `/company/${company?.slug || "company"}`
              }
                target="_blank"
  rel="noopener noreferrer"
              className="block"
            >
              <div className="flex-1">
                <h3
                  className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#8d9fbe] transition-colors"
                  itemProp="name"
                >
                  {company?.companyName}
                </h3>
                
                {/* Display subcategory name if available */}
                {company?.subcategory?.name && (
                  <div className="mb-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {company.subcategory.name}
                    </span>
                  </div>
                )}
                
                {/* Enhanced Star Rating and Review Count with context */}
{reviewCount > 0 && (
  <div className="flex items-center mt-1">
    <div
      className="flex"
      aria-label={`Rating: ${parseFloat(companyRating).toFixed(1)} out of 5 stars`}
    >
      {renderStars(companyRating)}
    </div>
    <span className="ml-2 text-gray-600 text-sm">
      {parseFloat(companyRating).toFixed(1)}
    </span>
    <span className="mx-2 text-gray-300">•</span>
    <span className="text-gray-600 text-sm">
      {reviewCount} {reviewCount === 1 ? 'review' : 'reviews'}
    </span>
  </div>
)}


                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mt-3 flex-wrap">
                  <div
                    className="flex items-center gap-1"
                    itemProp="address"
                    itemScope
                    itemType="https://schema.org/PostalAddress"
                  >
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span itemProp="addressCountry">
                      {company?.companyCountry}
                    </span>
                  </div>
                  {company?.employees && (
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span itemProp="numberOfEmployees">
                        {company.employees.toLocaleString()}{" "}
                        employees
                      </span>
                    </div>
                  )}
                  {company?.foundedYear && (
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span itemProp="foundingDate">
                        Founded {company.foundedYear}
                      </span>
                    </div>
                  )}
                </div>
                {company?.industries &&
                  company.industries.length > 0 && (
                    <div className="mt-2">
                      <span
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                        itemProp="industry"
                      >
                        {company.industries[0]}
                      </span>
                    </div>
                  )}
                
                {/* Add service type context for MSP/MSSP companies */}
                {company?.subcategory?.slug && (
                  <div className="mt-2">
                    {company.subcategory.slug.includes('managed-service') && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800" title="Managed Service Provider - IT support, cloud solutions, and cybersecurity services">
                        Managed Service Provider (MSP)
                      </span>
                    )}
                    {company.subcategory.slug.includes('managed-security') && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800" title="Managed Security Service Provider - Cybersecurity solutions, threat monitoring, and compliance services">
                        Managed Security Service Provider (MSSP)
                      </span>
                    )}
                  </div>
                )}
              </div>
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 flex-shrink-0 flex-wrap">
            <Link
              href={company?.subcategory?.slug 
                ? `/${company.subcategory.slug}/${company?.slug}` 
                : `/company/${company?.slug || "company"}`
              }
                target="_blank"
  rel="noopener noreferrer"
            >
              <button
                className="cursor-pointer bg-[#28374b] hover:bg-[#7a8bb0] text-white px-4 py-2.5 rounded-lg transition-colors font-semibold text-sm whitespace-nowrap"
                aria-label={`View details of ${company?.companyName}`}
              >
                View Details
              </button>
            </Link>
            {company?.website && (
              <Link
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-4 py-2.5 rounded-lg transition-colors flex items-center gap-2 text-sm whitespace-nowrap"
                aria-label={`Visit ${company?.companyName} website`}
              >
                <ExternalLink className="w-4 h-4" />
                <span>Website</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default CompanyCard;