import { getUserClaims } from "@/services/userApi";
import { 
  Menu, 
  X, 
  LayoutDashboard, 
  ListPlus, 
  Star, 
  Building, 
  Award, 
  BookOpen,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Sidebar({
  sidebarOpen,
  toggleSidebar,
  user
}) {
  const [claims, setClaims] = useState([]);
  const pathname = usePathname();
  
  useEffect(() => {
    const fetchClaims = async () => {
      try {
        const claimsData = await getUserClaims();
        if (claimsData.ok) {
          // Filter only approved claims
          const approvedClaims = claimsData.claims.filter(claim => claim.status === 'approved');
          setClaims(approvedClaims);
        }
      } catch (error) {
        console.error('Error fetching claims:', error);
      }
    };

    fetchClaims();
  }, []);
  
  // Define navigation items with icons
  const navItems = [
    {
      name: "Dashboard",
      href: "/user-dashboard",
      icon: <LayoutDashboard size={20} />
    },
    {
      name: "Get Listed",
      href: "/user-dashboard/get-list",
      icon: <ListPlus size={20} />
    },
    {
      name: "Reviews",
      href: "/user-dashboard/reviews",
      icon: <Star size={20} />
    },
  ];
  
  if (claims.length > 0) {
    navItems.push({
      name: "Edit Companies",
      href: "/user-dashboard/edit-companies",
      icon: <Building size={20} />
    });
    
    // Add Badges tab for users with approved claims
    // navItems.push({
    //   name: "Badges",
    //   href: "/user-dashboard/badges",
    //   icon: <Award size={20} />
    // });
  }

  return (
    <>
      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
      
      {/* Main Sidebar Container - Added flex-shrink-0 to prevent sidebar from shrinking */}
      <div className={`h-full flex flex-col flex-shrink-0 ${sidebarOpen ? "w-64" : "w-20"}`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
          <div className="flex items-center">
            <div className="bg-[#4ecfc5] w-8 h-8 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">IW</span>
            </div>
         
          </div>
          
          <button 
            onClick={toggleSidebar} 
            className="text-gray-500 hover:text-gray-700 p-1 rounded-lg hover:bg-gray-100"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* User Profile */}
        {sidebarOpen && (
          <div className="p-4 border-b border-gray-200 flex-shrink-0">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[#4ecfc5] flex items-center justify-center">
                <span className="text-white font-medium">
                  {user?.name?.charAt(0)?.toUpperCase() || user?.email?.charAt(0)?.toUpperCase() || 'U'}
                </span>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {user?.name || 'User'}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {user?.email}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation - This area will be scrollable if needed */}
        {/* Added flex-1 to allow this section to grow and take available space */}
        <div className="flex-1 overflow-y-auto px-2 py-4">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <div
                className={`flex items-center p-3 rounded-lg transition-colors duration-200 mb-1 ${
                  pathname === item.href
                    ? "bg-[#4ecfc5] text-white font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="flex items-center justify-center w-8">
                  {item.icon}
                </span>
                <span className={`ml-3 ${!sidebarOpen && "lg:hidden"}`}>
                  {item.name}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Sidebar Toggle Button - Only visible on desktop when sidebar is expanded */}
        {sidebarOpen && (
          <div className="p-2 hidden lg:block flex-shrink-0">
            <button
              onClick={toggleSidebar}
              className="flex items-center justify-center w-full p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <ChevronLeft size={20} />
              <span className="ml-2">Collapse</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
}