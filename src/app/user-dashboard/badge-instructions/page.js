"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getUserClaims, getCompanyBySlug } from "@/services/userApi";
import BadgeInstructionsContent from "@/Componenets/UserDashboard/BadgeInstructionsContent";

export default function BadgeInstructionsPage() {
  const [claims, setClaims] = useState([]);
  const [companyData, setCompanyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Get user claims
        const claimsResponse = await getUserClaims();
        
        if (!claimsResponse || !claimsResponse.ok) {
          // Handle authentication errors
          if (claimsResponse && (
            claimsResponse.status === 401 || 
            (claimsResponse.message && (
              claimsResponse.message.includes('login') ||
              claimsResponse.message.includes('auth') ||
              claimsResponse.message.includes('Please login') ||
              claimsResponse.message.includes('Not authenticated')
            ))
          )) {
            router.push('/login');
            return;
          }
          
          // Handle other errors
          setError(claimsResponse?.message || "Failed to load claims data");
          return;
        }
        
        // Set claims
        setClaims(claimsResponse.claims || []);
        
        // Find approved claim
        const approvedClaim = claimsResponse.claims?.find(claim => claim.status === 'approved');
        
        if (!approvedClaim) {
          // No approved claim - this is not an error, just a state
          setLoading(false);
          return;
        }
        
        // Get company data
        const companyResponse = await getCompanyBySlug(approvedClaim.company.slug);
        
        if (!companyResponse || !companyResponse.ok) {
          setError(companyResponse?.message || "Failed to load company data");
          return;
        }
        
        setCompanyData(companyResponse.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router]);

  if (loading) {
    return (
      <div className="py-6">
        <div className="mb-6">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
        </div>
        
        {/* Skeleton cards for instructions */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6 animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 mb-6"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="border border-gray-200 rounded-lg p-5">
              <div className="flex items-center mb-3">
                <div className="h-10 w-10 bg-gray-200 rounded-lg"></div>
                <div className="h-5 bg-gray-200 rounded w-1/3 ml-3"></div>
              </div>
              <div className="space-y-2">
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-4/5"></div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-5">
              <div className="flex items-center mb-3">
                <div className="h-10 w-10 bg-gray-200 rounded-lg"></div>
                <div className="h-5 bg-gray-200 rounded w-1/3 ml-3"></div>
              </div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-5">
              <div className="flex items-center mb-3">
                <div className="h-10 w-10 bg-gray-200 rounded-lg"></div>
                <div className="h-5 bg-gray-200 rounded w-1/3 ml-3"></div>
              </div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-5">
              <div className="flex items-center mb-3">
                <div className="h-10 w-10 bg-gray-200 rounded-lg"></div>
                <div className="h-5 bg-gray-200 rounded w-1/3 ml-3"></div>
              </div>
              <div className="h-4 bg-gray-200 rounded w-4/5"></div>
            </div>
          </div>
        </div>
        
        {/* Skeleton card for badge generator */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6 animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mb-6"></div>
          
          <div className="space-y-4">
            <div className="h-10 bg-gray-200 rounded w-1/4"></div>
            <div className="h-10 bg-gray-200 rounded w-1/4"></div>
            <div className="h-10 bg-gray-200 rounded w-1/3"></div>
          </div>
        </div>
        
        {/* Skeleton card for platform instructions */}
        <div className="bg-white rounded-xl shadow-md p-6 animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-6"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-4">
                <div className="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>
                <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
                <div className="h-3 bg-gray-200 rounded w-4/5"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Badge Instructions</h1>
          <p className="text-gray-600 mt-2">
            Unable to load badge instructions.
          </p>
        </div>
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-red-700">
                {error}
              </p>
              <button 
                onClick={() => router.push('/user-dashboard')}
                className="mt-4 bg-[#4ecfc5] hover:bg-[#3bb3a9] text-white px-4 py-2 rounded-lg transition-colors"
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Prepare data for the component
  let companyId, companyName, subcategorySlug;
  
  if (companyData) {
    companyId = companyData._id;
    companyName = companyData.slug; // Using slug for the URL
    subcategorySlug = companyData.subcategory?.slug || 'companies'; // Fallback to 'companies' if no subcategory
  }

  return (
    <BadgeInstructionsContent 
      companyId={companyId}
      companyName={companyName}
      subcategorySlug={subcategorySlug}
      claims={claims}
      companyData={companyData}
    />
  );
}