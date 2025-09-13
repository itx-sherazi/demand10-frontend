import React from "react";
import {
  User,
  Building2,
  MapPin,
  Phone,
  Mail,
  Globe,
  Users,
  Target,
  Rocket,
  CheckCircle,
} from "lucide-react";

const DataFeatures = ({ productData }) => {
  const dataPoints = [
    { label: "Contact Name", icon: User, category: "Personal" },
    { label: "Title", icon: User, category: "Personal" },
    { label: "Email Address", icon: Mail, category: "Personal" },
    { label: "Phone Number", icon: Phone, category: "Personal" },
    { label: "LinkedIn Profile", icon: Globe, category: "Personal" },
    { label: "Company Name", icon: Building2, category: "Business" },
    { label: "Web Address", icon: Globe, category: "Business" },
    { label: "Company Size", icon: Users, category: "Business" },
    { label: "Industry", icon: Building2, category: "Business" },
    { label: "LinkedIn Company Page", icon: Globe, category: "Business" },
    { label: "Full Address", icon: MapPin, category: "Location" },
  ];

  const whoUsesData =
    productData?.useData ||
    "Marketing, Sales, Business Development, Recruitment, Real Estate, Consulting";

  const whoUsesArray = whoUsesData
    .split(",")
    .map((item) => item.trim())
    .filter((item) => item);

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Business Data Package
        
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get all the essential business contact information you need for
            successful B2B sales and lead generation
          </p>
        </div>

        {/* Main Data Grid */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dataPoints.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center p-4 bg-white shadow-xl rounded-2xl hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mr-4">
                    <IconComponent size={20} className="text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <span className="text-gray-900 font-medium text-lg">
                      {item.label}
                    </span>
                    <div className="text-sm text-gray-500">{item.category}</div>
                  </div>
                  <CheckCircle size={20} className="text-green-500" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Who Uses Section */}
        <div className="text-center ">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Who Uses {productData?.title || "Our"} Leads?
          </h1>

          {/* Dynamic Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {whoUsesArray.map((industry, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-white shadow-lg rounded-2xl hover:shadow-xl transition-shadow duration-200"
              >
                <CheckCircle
                  size={24}
                  className="text-green-500 mr-4 flex-shrink-0"
                />
                <span className="text-gray-900 font-medium text-lg">
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataFeatures;
