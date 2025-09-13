import Image from "next/image";
import React from "react";
import { FaGlobe } from "react-icons/fa";

const DataSources = ({ productData }) => {
  const tags = productData?.tags?.split(",") || [];
  const leftColumnSources = [
    { icon: <FaGlobe />, text: "Business magazines" },
    { icon: <FaGlobe />, text: "Trade shows" },
    { icon: <FaGlobe />, text: "Business cards" },
    { icon: <FaGlobe />, text: "Economic forums" },
    { icon: <FaGlobe />, text: "Tech Publications" },
    { icon: <FaGlobe />, text: "Tech directories" },
    { icon: <FaGlobe />, text: "Website registrations" },
  ];
  const rightColumnSources = [
    { icon: <FaGlobe />, text: "Tech Conferences & webinars" },
    { icon: <FaGlobe />, text: "Memberships" },
    { icon: <FaGlobe />, text: "Panel discussions" },
    { icon: <FaGlobe />, text: "Feedback forms" },
    { icon: <FaGlobe />, text: "Opt-in emails" },
    { icon: <FaGlobe />, text: "Tech events" },
    { icon: <FaGlobe />, text: "And More!" },
  ];

  return (
    <div className="">
      {/* Header Section */}
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 ">
          We Collect Data from Reliable Sources
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto mb-6">
          At IntentWire, our mission is to provide high-quality, verified data
          that helps businesses connect with the right decision-makers and
          maximize their ROI. We source our data exclusively from 100% authentic
          and reliable networks. To maintain accuracy and relevance, we
          implement a rigorous two-step verification process that combines
          advanced automated tools with human intelligence before adding
          information to our database.
        </p>
        <p className="text-sm sm:text-base text-gray-700">
          Here are some of the trusted sources we rely on to compile our{" "}
          {/* <span className="text-blue-600 underline cursor-pointer hover:text-blue-800">
            sheraz
          </span> */}
          {" "}
          for your business:
        </p>
      </div>

      {/* Data Sources Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 mt-3">
        {/* Left Column */}
        <div className="border-2 border-gray-200 rounded-lg p-4 sm:p-6 bg-white">
          <div className="space-y-3 sm:space-y-4">
            {leftColumnSources.map((source, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 sm:space-x-4 "
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#f2faf7] rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs sm:text-sm">🌐</span>
                  </div>
                </div>
                <span className="text-sm sm:text-base text-gray-800 font-medium">
                  {source.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="border-2 border-gray-200 rounded-lg p-4 sm:p-6 bg-white">
          <div className="space-y-3 sm:space-y-4">
            {rightColumnSources.map((source, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 sm:space-x-4"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#f2faf7] rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs sm:text-sm">🌐</span>
                  </div>
                </div>
                <span className="text-sm sm:text-base text-gray-800 font-medium">
                  {source.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="">
        <p className="text-xs sm:text-sm text-gray-500 italic">
          (We can customise the data based on your target requirement)
        </p>
      </div>

      {/* Bottom Link */}
      {/* Tag Badges */}
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="bg-[#f2faf7] text-black text-xs sm:text-sm px-4 py-2 rounded-full font-semibold"
          >
            {tag}
          </div>
        ))}
      </div>
      {/* <div className="mt-4 w-45 h-403">
        <Image
        src={productData?.image}
        alt="data-sources"
        width={1000}
        height={1000}
        className="w-full h-full object-cover"
        />
      </div> */}
    </div>
  );
};

export default DataSources;
