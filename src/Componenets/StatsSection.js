import React from "react";
import { Users, Mail, CheckCircle } from "lucide-react";

const StatsSection = ({ productData }) => {
  const stats = [
    {
      icon: Users,
      number: productData?.activeContacts || "0",
      label: "Active Contacts",
      description: "Verified business contacts",
      color: "text-blue-600",
    },
    {
      icon: Mail,
      number: "95%",
      label: "Email Accuracy",
      description: "Deliverable email addresses",
      color: "text-green-600",
    },
    {
      icon: CheckCircle,
      number: "100%",
      label: "Data Accuracy",
      description: "Verified and update data",
      color: "text-yellow-300",
    },
  ];

  return (
    <div className="bg-white   max-w-3xl mt-23">
      <div className="space-y-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-3 items-center gap-6 p-6 border-b border-gray-200"
            >
                
              <div className="flex items-center justify-center sm:justify-start gap-4">
                <Icon size={40} className={`${stat.color} flex-shrink-0`} />
                <span className="text-4xl font-bold text-gray-900">
                  {stat.number}
                </span>
              </div>

                <div className="text-center sm:text-left">
                <span className="text-xl font-semibold text-gray-800">
                  {stat.label}
                </span>
              </div>

              <div className="text-center sm:text-right">
                <span className="text-gray-500 text-sm sm:text-base">
                  {stat.description}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsSection;
