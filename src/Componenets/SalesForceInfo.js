"use client";
import React, { useState } from "react";

const SalesForceInfo = ({ productData }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (section) => {
    setOpenDropdown(openDropdown === section ? null : section);
  };

  return (
    <div className="">
      <div className="max-w-7xl mx-auto mb-10">
        {/* Main Heading */}
        <div className="">
          <h1 className="text-2xl font-bold  text-gray-800 mb-4 leading-relaxed">
            Unlock new business opportunities and connect with using Intentwires
            premium C-Level contact list.
          </h1>
        </div>

        {/* Dropdown Sections */}
        <div className="space-y-2">
          {/* Data Verification */}
          <div className="bg-white rounded-xl shadow-m border border-gray-300 overflow-hidden">
            <button
              onClick={() => toggleDropdown("verification")}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-[#6fe7bb] rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black">
                  Data Verification :
                </h3>
              </div>
              <svg
                className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${
                  openDropdown === "verification" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openDropdown === "verification" && (
              <div className="px-6 pb-6 border-t border-gray-100 ">
                <p className="text-gray-700 leading-relaxed pt-4">
                  Though each record is touched once in every 30 days, we will
                  re-verify the data again before the final delivery to make
                  sure that data reaches to you at best quality.
                </p>
              </div>
            )}
          </div>

          {/* Data Delivery Format */}
          <div className="bg-white rounded-xl  border border-gray-300 overflow-hidden">
            <button
              onClick={() => toggleDropdown("delivery")}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-[#6fe7bb] rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black">
                  Data Delivery Format:
                </h3>
              </div>
              <svg
                className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${
                  openDropdown === "delivery" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openDropdown === "delivery" && (
              <div className="px-6 pb-6 border-t border-gray-100 ">
                <p className="text-gray-700 leading-relaxed pt-4">
                  The list will be delivered in an excel spreadsheet format and
                  can be readily uploaded onto your CRM or marketing automation
                  software.
                </p>
              </div>
            )}
          </div>

          {/* Ownership Rights */}
          <div className="bg-white rounded-xl  border border-gray-300 overflow-hidden">
            <button
              onClick={() => toggleDropdown("ownership")}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-[#6fe7bb] rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 7a2 2 0 012 2m0 0a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2m0 0V7a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black">
                  Ownership Rights:
                </h3>
              </div>
              <svg
                className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${
                  openDropdown === "ownership" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openDropdown === "ownership" && (
              <div className="px-6 pb-6 border-t border-gray-100 ">
                <p className="text-gray-700 leading-relaxed pt-4">
                  List will be delivered to you with ownership rights for your
                  unlimited usage.
                </p>
              </div>
            )}
          </div>
        </div>



      </div>
    </div>
  );
};

export default SalesForceInfo;
