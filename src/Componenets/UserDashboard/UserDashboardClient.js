"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { checkUserAuth } from '@/services/userApi';
import Sidebar from '@/Componenets/UserDashboard/Sidebar';
import Header from '@/Componenets/UserDashboard/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Menu } from 'lucide-react';

export default function UserDashboardClient({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false); // Changed default to false for mobile-first
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const authData = await checkUserAuth();
        if (authData.ok) {
          setUser(authData.user);
        } else {
          // Check if it's a token expiration issue
          if (authData.message && authData.message.includes('expired')) {
            alert('Your session has expired. Please login again.');
          }
          // Redirect to login if not authenticated
          router.push('/');
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
        // Redirect to login on network error as well
        router.push('/');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  // Handle responsive sidebar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    // Set initial state
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4ecfc5] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Router will redirect
  }

  return (
    // Changed to use flex-col on mobile and flex-row on desktop for proper sticky behavior
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Sticky Sidebar - position sticky on desktop, fixed on mobile */}
      <div className={`sticky top-0 lg:top-0 z-30 h-screen bg-white shadow-xl transition-all duration-300 ease-in-out lg:sticky lg:flex lg:flex-col ${
        sidebarOpen ? "w-64" : "w-20"
      }`}>
        <Sidebar 
          sidebarOpen={sidebarOpen} 
          toggleSidebar={toggleSidebar} 
          user={user}
        />
      </div>
      
      {/* Floating button to reopen sidebar when collapsed on desktop */}
      {!sidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-20 left-4 z-20 p-2 bg-[#4ecfc5] text-white rounded-lg shadow-lg hover:bg-[#3bb3a9] transition-colors lg:block"
          aria-label="Open sidebar"
        >
          <Menu size={20} />
        </button>
      )}
      
      {/* Main Content Area - scrollable */}
      <div className="flex-1 flex flex-col min-h-0 w-full">
        <div className="w-full">
          <Header 
            sidebarOpen={sidebarOpen} 
            toggleSidebar={toggleSidebar} 
            user={user}
          />
        </div>
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
      
      <ToastContainer 
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}