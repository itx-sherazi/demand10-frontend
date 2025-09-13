import { useState, useEffect, useCallback } from 'react';
import { getCompanyReviews, getCompanyReviewsById } from '@/services/api';
import Link from 'next/link';

const EnhancedCompanyReviews = ({ companyId, companySlug }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);

  const fetchReviews = useCallback(async () => {
    try {
      setLoading(true);
      
      // Use companySlug if available, otherwise fall back to companyId
      let response;
      if (companySlug) {
        response = await getCompanyReviews(companySlug, page, 10);
      } else if (companyId) {
        response = await getCompanyReviewsById(companyId, page, 10);
      } else {
        setError('Company ID or slug is required to fetch reviews');
        setLoading(false);
        return;
      }
      
      if (response.ok) {
        if (page === 1) {
          setReviews(response.reviews);
          // Assuming the API response includes these properties
          setAverageRating(response.averageRating || 0);
          setTotalReviews(response.totalReviews || response.reviews.length);
        } else {
          setReviews(prev => [...prev, ...response.reviews]);
        }
        setHasMore(response.currentPage < response.totalPages);
      } else {
        setError(response.message || 'Failed to fetch reviews');
      }
    } catch (err) {
      console.error('Error fetching reviews:', err);
      setError('Failed to fetch reviews');
    } finally {
      setLoading(false);
    }
  }, [companyId, companySlug, page]);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  // Function to format date as time ago
  const getTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 60) return 'Just now';
    
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    
    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
    
    const diffInYears = Math.floor(diffInMonths / 12);
    return `${diffInYears} year${diffInYears > 1 ? 's' : ''} ago`;
  };

  // Calendar icon component
  const Calendar = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );

  // Function to render star ratings
  const renderStars = (rating, size = 'normal') => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-yellow-400">★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-400">★</span>);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300">★</span>);
    }
    
    return stars;
  };

  if (loading && reviews.length === 0) {
    return (
      <div className="flex justify-center items-center h-32">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <p className="text-red-700">Error loading reviews: {error}</p>
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <h3 className="text-lg font-medium text-gray-900 mb-2">No reviews yet</h3>
        <p className="text-gray-600">Be the first to review this company!</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Reviews Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="flex">{renderStars(averageRating, 'large')}</div>
                <span className="text-2xl font-bold text-gray-900">{averageRating.toFixed(1)}</span>
              </div>
              <div className="h-6 w-px bg-gray-300"></div>
              <p className="text-gray-600 font-medium">
                Based on <span className="font-bold text-gray-900">{totalReviews}</span> reviews
              </p>
            </div>
          </div>
          <Link href="/user-dashboard"> 
            <button className="mt-6 md:mt-0 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold border-2 border-blue-200 hover:bg-blue-50 transition-colors">
              Write a Review
            </button>
          </Link>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div
            key={review._id}
            className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-200"
          >
            {/* Project Information */}
            <div className="mb-6 pb-6 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{review.project?.title || 'Project Information'}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600"><span className="font-medium">Project Type:</span> {review.project?.type || 'N/A'}</p>
                  <p className="text-gray-600"><span className="font-medium">Budget:</span> {review.project?.budget || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-gray-600"><span className="font-medium">Duration:</span> {review.project?.duration || 'N/A'}</p>
                </div>
              </div>
              {review.project?.summary && (
                <div className="mt-3">
                  <p className="text-gray-600"><span className="font-medium">Project Summary:</span></p>
                  <p className="text-gray-800 mt-1">{review.project.summary}</p>
                </div>
              )}
            </div>

            {/* Main Review Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Ratings */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-gray-900 mb-2">{review.overallRating?.toFixed(1) || 'N/A'}</div>
                    <div className="flex justify-center mb-2">{renderStars(review.overallRating || 0, 'large')}</div>
                    <div className="text-gray-500 text-sm">Overall Rating</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-600">Quality</span>
                        <span className="font-medium">{review.ratings?.quality?.toFixed(1) || 'N/A'}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${(review.ratings?.quality || 0) * 20}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-600">Schedule</span>
                        <span className="font-medium">{review.ratings?.schedule?.toFixed(1) || 'N/A'}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${(review.ratings?.schedule || 0) * 20}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-600">Cost</span>
                        <span className="font-medium">{review.ratings?.cost?.toFixed(1) || 'N/A'}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${(review.ratings?.cost || 0) * 20}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-600">Willing to Refer</span>
                        <span className="font-medium">{review.ratings?.willingToRefer?.toFixed(1) || 'N/A'}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${(review.ratings?.willingToRefer || 0) * 20}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Center Column - Review Text */}
              <div className="lg:col-span-2">
                <div className="bg-white border border-gray-200 rounded-xl p-6 h-full">
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed text-lg">{review.reviewText || review.review}</p>
                  </div>
                  
                  {review.feedbackSummary && (
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <h4 className="font-bold text-gray-900 mb-2">Feedback Summary</h4>
                      <p className="text-gray-700">{review.feedbackSummary}</p>
                    </div>
                  )}
                  
                  <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-sm text-gray-500">
                      <Calendar />
                      <span>Reviewed {getTimeAgo(review.reviewDate || review.createdAt)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Reviewer Information */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h4 className="font-bold text-gray-900 mb-4">Reviewer Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <p className="text-gray-600 text-sm">Name</p>
                  <p className="font-medium">{review.reviewer?.name || review.reviewerName || 'Anonymous'}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Designation</p>
                  <p className="font-medium">{review.reviewer?.designation || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Company</p>
                  <p className="font-medium">{review.reviewer?.companyName || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Location</p>
                  <p className="font-medium">{review.reviewer?.location || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Industry</p>
                  <p className="font-medium">{review.reviewer?.industry || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Employees</p>
                  <p className="font-medium">{review.reviewer?.employees || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Interview Method</p>
                  <p className="font-medium">{review.reviewer?.interviewMethod || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Verified</p>
                  <p className="font-medium">
                    {review.reviewer?.verified ? (
                      <span className="text-green-600">Verified</span>
                    ) : (
                      <span className="text-gray-500">Not Verified</span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="text-center">
          <button
            onClick={handleLoadMore}
            disabled={loading}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {loading ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                <span>Loading more reviews...</span>
              </div>
            ) : (
              'Show More Reviews'
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default EnhancedCompanyReviews;