"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import BadgeSnippet from "@/Componenets/UserDashboard/BadgeSnippet";
import { getUserClaims, getCompanyBySlug } from "@/services/userApi";
import Link from 'next/link';
import { Award, Info, Code } from 'lucide-react';

export default function BadgesPage({ searchParams }) {
  const [claims, setClaims] = useState([]);
  const [companyData, setCompanyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  
  // Check if this is embedded in an iframe
  const isEmbedded = searchParams.embed === 'true';

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
        
        {/* Skeleton card for badge embedding section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6 animate-pulse">
          <div className="flex items-start mb-4">
            <div className="h-10 w-10 bg-gray-200 rounded-lg"></div>
            <div className="ml-4 flex-1">
              <div className="h-5 bg-gray-200 rounded w-1/3 mb-2"></div>
              <div className="space-y-2">
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <div className="h-10 bg-gray-200 rounded w-1/4"></div>
          </div>
        </div>
        
        {/* Skeleton card for badge snippet generator */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6 animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
          
          <div className="space-y-4">
            <div className="h-10 bg-gray-200 rounded w-1/3"></div>
            <div className="h-10 bg-gray-200 rounded w-1/4"></div>
            <div className="h-10 bg-gray-200 rounded w-1/3"></div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="h-10 bg-gray-200 rounded w-1/3"></div>
          </div>
        </div>
        
        {/* Skeleton card for badge types explanation */}
        <div className="bg-white rounded-xl shadow-md p-6 animate-pulse">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="h-10 w-10 bg-gray-200 rounded-lg"></div>
              <div className="h-5 bg-gray-200 rounded w-1/4 ml-3"></div>
            </div>
            <div className="h-8 bg-gray-200 rounded w-1/6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="h-3 w-3 bg-gray-200 rounded-full mr-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                </div>
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
          <h1 className="text-3xl font-bold text-gray-900">Manage Badges</h1>
          <p className="text-gray-600 mt-2">
            Unable to load your badge management interface.
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

  // Check if user has approved claims
  const approvedClaims = claims.filter(claim => claim.status === 'approved');
  
  if (approvedClaims.length === 0) {
    return (
      <div className="py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Manage Badges</h1>
          <p className="text-gray-600 mt-2">
            You need to have an approved company claim to manage badges.
          </p>
        </div>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                Please submit a company claim and wait for admin approval to access badge management features.
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

  // If we don't have company data yet, show a message
  if (!companyData) {
    return (
      <div className="py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Manage Badges</h1>
          <p className="text-gray-600 mt-2">
            Loading company data...
          </p>
        </div>
      </div>
    );
  }

  const companyId = companyData._id;
  const companyName = companyData.slug; // Using slug for the URL
  const subcategorySlug = companyData.subcategory?.slug || 'companies'; // Fallback to 'companies' if no subcategory

  // If embedded, only show the badge snippet generator
  if (isEmbedded) {
    return (
      <div className="p-4">
        <BadgeSnippet 
          companyId={companyId} 
          companyName={companyName}
          subcategorySlug={subcategorySlug}
        />
      </div>
    );
  }

  return (
    <div className="py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Manage Badges</h1>
        <p className="text-gray-600 mt-2">
          View your company badges and get code to embed on your website
        </p>
      </div>
      
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex items-start mb-4">
          <div className="p-2 bg-[#4ecfc5] bg-opacity-10 rounded-lg">
            <Award className="h-6 w-6 text-[#4ecfc5]" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900">Embed Badge on Your Website</h3>
            <p className="text-gray-600 mt-1">
              Add this badge to your website to showcase your IntentWire verification and achievements.
              When users click on the badge, they&apos;ll be directed to your company profile.
            </p>
          </div>
        </div>
        
        <div className="mt-4">
          <Link
            href="/user-dashboard/badge-instructions"
            className="inline-flex items-center bg-[#4ecfc5] hover:bg-[#3bb3a9] text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            <Info className="mr-2 h-4 w-4" />
            View Detailed Instructions
          </Link>
        </div>
      </div>
      
      <BadgeSnippet 
        companyId={companyId} 
        companyName={companyName}
        subcategorySlug={subcategorySlug}
      />
      
      <div className="mt-8 bg-white rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="p-2 bg-[#4ecfc5] bg-opacity-10 rounded-lg">
              <Info className="h-5 w-5 text-[#4ecfc5]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 ml-3">Badge Types Explained</h3>
          </div>
          <button
            onClick={() => router.push('/user-dashboard/badge-instructions')}
            className="text-[#4ecfc5] hover:text-[#3bb3a9] font-medium text-sm flex items-center"
          >
            View Detailed Instructions
            <Code className="ml-1 h-4 w-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <h4 className="font-medium text-gray-900">Top 10 Badge</h4>
            </div>
            <p className="text-sm text-gray-600">
              Awarded to companies ranked in the top 10 of their category. Automatically updates when rankings change.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 bg-gray-500 rounded-full mr-2"></div>
              <h4 className="font-medium text-gray-900">Top 40 Badge</h4>
            </div>
            <p className="text-sm text-gray-600">
              Awarded to companies ranked in the top 40 of their category. Updates automatically with ranking changes.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 bg-amber-800 rounded-full mr-2"></div>
              <h4 className="font-medium text-gray-900">Top 100 Badge</h4>
            </div>
            <p className="text-sm text-gray-600">
              Awarded to companies ranked in the top 100 of their category. Automatically reflects current rankings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}