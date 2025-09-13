"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getUserClaims, getUserReviews } from '@/services/userApi';
import Link from 'next/link';
import { Building, Star, PlusCircle, Edit3, MessageSquare, Search } from 'lucide-react';

export default function UserDashboardPage() {
  const [claims, setClaims] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [claimsData, reviewsData] = await Promise.all([
          getUserClaims(),
          getUserReviews()
        ]);

        if (claimsData.ok) {
          setClaims(claimsData.claims);
        }

        if (reviewsData.ok) {
          setReviews(reviewsData.reviews);
        }
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4ecfc5] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }


  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-[#4ecfc5] to-[#3bb3a9] rounded-xl shadow-lg p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome to Your Dashboard</h1>
        <p className="text-lg opacity-90">Manage your company claims, reviews, and listings all in one place</p>
      </div>

     
      {/* Claims and Reviews Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Claims */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Claims</h3>
            <span className="text-sm text-gray-500">{claims.length} total</span>
          </div>
          
          {claims.length > 0 ? (
            <div className="space-y-4">
              {claims.slice(0, 3).map((claim) => (
                <div key={claim._id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900">{claim.companyName}</h4>
                      <p className="text-sm text-gray-500 mt-1">
                        Submitted: {new Date(claim.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      claim.status === 'approved' ? 'bg-green-100 text-green-800' :
                      claim.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {claim.status.charAt(0).toUpperCase() + claim.status.slice(1)}
                    </span>
                  </div>
                  {claim.status === 'rejected' && claim.rejectionReason && (
                    <p className="text-sm text-red-600 mt-2">Reason: {claim.rejectionReason}</p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Building className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No claims yet</h3>
              <p className="mt-1 text-sm text-gray-500">Get started by submitting your first company claim.</p>
            </div>
          )}
          
          <div className="mt-6">
            <Link 
              href="/user-dashboard/get-list"
              className="inline-flex items-center text-[#4ecfc5] hover:text-[#3bb3a9] font-medium"
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Submit new claim
            </Link>
          </div>
        </div>

        {/* Recent Reviews */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Reviews</h3>
            <span className="text-sm text-gray-500">{reviews.length} total</span>
          </div>
          
          {reviews.length > 0 ? (
            <div className="space-y-4">
              {reviews.slice(0, 3).map((review) => (
                <div key={review._id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between">
                    <h4 className="font-medium text-gray-900">{review.company.companyName}</h4>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < review.rating ? 'fill-current' : ''}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {review.review}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <MessageSquare className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No reviews yet</h3>
              <p className="mt-1 text-sm text-gray-500">Share your experience by writing a review.</p>
            </div>
          )}
          
          <div className="mt-6">
            <Link 
              href="/user-dashboard/reviews"
              className="inline-flex items-center text-[#4ecfc5] hover:text-[#3bb3a9] font-medium"
            >
              <Edit3 className="mr-2 h-4 w-4" />
              Write a review
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="/user-dashboard/get-list"
            className="bg-[#4ecfc5] hover:bg-[#3bb3a9] text-white p-5 rounded-xl transition-colors text-center block shadow-sm hover:shadow-md"
          >
            <PlusCircle className="h-8 w-8 mx-auto" />
            <div className="font-semibold mt-2">List Company</div>
            <div className="text-sm opacity-90 mt-1">Add your business</div>
          </Link>

          <Link
            href="/user-dashboard/edit-companies"
            className="bg-blue-500 hover:bg-blue-600 text-white p-5 rounded-xl transition-colors text-center block shadow-sm hover:shadow-md"
          >
            <Edit3 className="h-8 w-8 mx-auto" />
            <div className="font-semibold mt-2">Edit Companies</div>
            <div className="text-sm opacity-90 mt-1">Manage listings</div>
          </Link>

          <Link
            href="/user-dashboard/reviews"
            className="bg-purple-500 hover:bg-purple-600 text-white p-5 rounded-xl transition-colors text-center block shadow-sm hover:shadow-md"
          >
            <Star className="h-8 w-8 mx-auto" />
            <div className="font-semibold mt-2">Write Review</div>
            <div className="text-sm opacity-90 mt-1">Share experience</div>
          </Link>

          <Link
            href="/"
            className="bg-gray-500 hover:bg-gray-600 text-white p-5 rounded-xl transition-colors text-center block shadow-sm hover:shadow-md"
          >
            <Search className="h-8 w-8 mx-auto" />
            <div className="font-semibold mt-2">Browse</div>
            <div className="text-sm opacity-90 mt-1">Explore companies</div>
          </Link>
        </div>
      </div>
    </div>
  );
}