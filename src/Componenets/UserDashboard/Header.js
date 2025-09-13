import { Menu, User, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { userLogout } from "@/services/userApi";
import { toast } from "react-toastify";

export default function Header({ sidebarOpen, toggleSidebar, user }) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // Call the backend logout API to properly invalidate the token
      const response = await userLogout();
      
      if (response.ok) {
        // Clear user token from cookies (additional safety measure)
        document.cookie = "userToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        // Redirect to home page
        router.push('/');
        toast.success("Logged out successfully");
      } else {
        // Even if the API call fails, still clear the cookie and redirect
        document.cookie = "userToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        router.push('/');
        toast.warn("Session ended");
      }
    } catch (error) {
      console.error("Logout error:", error);
      // Even if the API call fails, still clear the cookie and redirect
      document.cookie = "userToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
      router.push('/');
      toast.warn("Session ended due to an error");
    }
  };

  return (
    // Added flex-shrink-0 to prevent header from shrinking and w-full to ensure it spans available width
    <header className="bg-white shadow-sm h-16 flex items-center sticky top-0 z-10 border-b border-gray-200 flex-shrink-0 w-full">
      <div className="flex justify-between items-center px-4 md:px-6 w-full">
        {/* Left side - Menu toggle and title */}
        <div className="flex items-center">

          <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
        </div>
        
        {/* Right side - User profile and logout */}
        <div className="flex items-center space-x-4">
         
          <button 
            onClick={handleLogout}
            className="flex items-center space-x-2 bg-[#4ecfc5] hover:bg-[#3bb3a9] text-white px-3 py-2 rounded-lg transition-colors text-sm font-medium"
          >
            <LogOut size={16} className="hidden sm:block" />
            <span className="hidden md:inline">Logout</span>
            <span className="sm:hidden">Out</span>
          </button>
        </div>
      </div>
    </header>
  );
}