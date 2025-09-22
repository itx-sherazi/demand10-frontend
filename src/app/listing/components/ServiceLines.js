'use client';

import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const ServiceLines = ({ services, onServicesChange }) => {
  // Service categories and services data
  const serviceCategories = [
    {
      id: 'web-development',
      name: 'Web Development',
      services: [
        { id: 'frontend', name: 'Frontend Development' },
        { id: 'backend', name: 'Backend Development' },
        { id: 'fullstack', name: 'Full Stack Development' },
        { id: 'ecommerce', name: 'E-commerce Development' },
        { id: 'cms', name: 'CMS Development' }
      ]
    },
    {
      id: 'mobile-apps',
      name: 'Mobile App Development',
      services: [
        { id: 'ios', name: 'iOS App Development' },
        { id: 'android', name: 'Android App Development' },
        { id: 'cross-platform', name: 'Cross-platform Development' },
        { id: 'react-native', name: 'React Native' },
        { id: 'flutter', name: 'Flutter' }
      ]
    },
    {
      id: 'marketing',
      name: 'Marketing',
      services: [
        { id: 'seo', name: 'SEO' },
        { id: 'sem', name: 'SEM' },
        { id: 'social-media', name: 'Social Media Marketing' },
        { id: 'content-marketing', name: 'Content Marketing' },
        { id: 'email-marketing', name: 'Email Marketing' }
      ]
    },
    {
      id: 'design',
      name: 'Design',
      services: [
        { id: 'ui-ux', name: 'UI/UX Design' },
        { id: 'graphic', name: 'Graphic Design' },
        { id: 'branding', name: 'Branding' },
        { id: 'web-design', name: 'Web Design' },
        { id: 'app-design', name: 'App Design' }
      ]
    },
    {
      id: 'it-support',
      name: 'IT Support',
      services: [
        { id: 'helpdesk', name: 'Helpdesk Support' },
        { id: 'network', name: 'Network Support' },
        { id: 'cloud', name: 'Cloud Support' },
        { id: 'security', name: 'Security Support' },
        { id: 'database', name: 'Database Support' }
      ]
    }
  ];

  // State for UI interactions
  const [expandedCategories, setExpandedCategories] = useState(new Set());
  const [servicePercentages, setServicePercentages] = useState({});

  // Initialize service percentages from existing services
  useEffect(() => {
    const initialPercentages = {};
    services.forEach(service => {
      // Find the service in our categories to get the serviceId
      for (const category of serviceCategories) {
        const matchingService = category.services.find(s => s.name === service.serviceName);
        if (matchingService) {
          const serviceId = `${category.id}-${matchingService.id}`;
          initialPercentages[serviceId] = service.percentage;
          break;
        }
      }
    });
    setServicePercentages(initialPercentages);
  }, [services]);

  // Handle category expansion/collapse
  const toggleCategory = (categoryId) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  // Handle service percentage change
  const handleServicePercentageChange = (serviceId, categoryName, serviceName, percentage) => {
    // Validate percentage input
    const parsedPercentage = parseInt(percentage) || 0;
    const clampedPercentage = Math.max(0, Math.min(100, parsedPercentage));

    setServicePercentages(prev => ({
      ...prev,
      [serviceId]: clampedPercentage
    }));

    // Update services in parent component
    updateServicesInParent(serviceId, categoryName, serviceName, clampedPercentage);
  };

  // Handle service checkbox toggle
  const toggleService = (serviceId, categoryName, serviceName) => {
    const currentPercentage = servicePercentages[serviceId] || 0;

    if (currentPercentage > 0) {
      // If service is already selected, deselect it
      handleServicePercentageChange(serviceId, categoryName, serviceName, 0);
    } else {
      // If service is not selected, select it with default 10%
      handleServicePercentageChange(serviceId, categoryName, serviceName, 10);
    }
  };

  // Update services in parent component
  const updateServicesInParent = (serviceId, categoryName, serviceName, percentage) => {
    // Remove existing entry for this service if it exists
    const filteredServices = services.filter(s => s.serviceName !== serviceName);

    // Add new entry if percentage > 0
    let updatedServices;
    if (percentage > 0) {
      updatedServices = [
        ...filteredServices,
        {
          serviceName: serviceName,
          category: categoryName,
          percentage: percentage
        }
      ];
    } else {
      updatedServices = filteredServices;
    }

    onServicesChange(updatedServices);
  };

  // Calculate total percentage
  const totalPercentage = services.reduce((sum, service) => sum + service.percentage, 0);

  // Prepare chart data
  const chartData = {
    labels: services.map(service => service.serviceName),
    datasets: [
      {
        data: services.map(service => service.percentage),
        backgroundColor: [
          '#1a365d',
          '#2a4a7e',
          '#3a5ea0',
          '#4a72c2',
          '#5a86e4',
          '#6a9af6',
          '#7aacf8',
          '#8ac0fa'
        ],
        borderColor: [
          '#0249aa',
          '#1259ba',
          '#2269ca',
          '#3279da',
          '#4289ea',
          '#5299fa',
          '#62a9fb',
          '#72b9fc'
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          boxWidth: 12,
          padding: 15,
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.parsed}%`;
          }
        }
      }
    }
  };

  return (
   <div className="space-y-6">
  {/* Section Header */}
  <div className="space-y-4">
    <h3 className="text-lg font-bold text-[#1a365d]">Service Lines</h3>
    <p className="text-[#0249aa] text-sm">
      Select your company&apos;s service offerings and allocate percentages
    </p>
  </div>

  {/* Main Layout: Categories Left | Preview Right */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    {/* Service Categories (Left) */}
    <div className="space-y-3">
      {serviceCategories.map((category) => (
        <div
          key={category.id}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          {/* Category Header */}
          <div
            className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
            onClick={() => toggleCategory(category.id)}
          >
            <h4 className="font-medium text-[#1a365d]">{category.name}</h4>
            <svg
              className={`w-5 h-5 text-[#0249aa] transition-transform ${
                expandedCategories.has(category.id) ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* Services List (Expanded) */}
          {expandedCategories.has(category.id) && (
            <div className="p-4 border-t border-gray-200">
              <div className="space-y-3">
                {category.services.map((service) => {
                  const serviceId = `${category.id}-${service.id}`;
                  const currentPercentage = servicePercentages[serviceId] || 0;
                  const isSelected = currentPercentage > 0;

                  return (
                    <div key={serviceId} className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id={serviceId}
                        checked={isSelected}
                        onChange={() =>
                          toggleService(serviceId, category.name, service.name)
                        }
                        className="w-4 h-4 text-[#314158] border-gray-300 rounded focus:ring-[#314158]"
                      />
                      <label
                        htmlFor={serviceId}
                        className="flex-1 text-sm text-[#1a365d]"
                      >
                        {service.name}
                      </label>
                      {isSelected && (
                        <div className="flex items-center gap-2">
                          <input
                            type="range"
                            min="10"
                            max="100"
                            value={currentPercentage}
                            onChange={(e) =>
                              handleServicePercentageChange(
                                serviceId,
                                category.name,
                                service.name,
                                e.target.value
                              )
                            }
                            className="w-24 accent-[#1a365d]"
                          />
                          <input
                            type="number"
                            min="10"
                            max="100"
                            value={currentPercentage}
                            onChange={(e) =>
                              handleServicePercentageChange(
                                serviceId,
                                category.name,
                                service.name,
                                e.target.value
                              )
                            }
                            className="w-16 px-2 py-1 text-sm border border-gray-300 rounded focus:ring-[#1a365d] focus:border-[#1a365d]"
                          />
                          <span className="text-sm text-gray-500">%</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>

    {/* Service Distribution Preview (Right) */}
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 shadow-sm">
      <h4 className="font-bold text-[#1a365d] mb-4">Service Distribution</h4>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Chart */}
        <div className="flex-1 flex items-center justify-center">
          {services.length > 0 ? (
            <div className="w-full max-w-[200px]">
              <Pie data={chartData} options={chartOptions} />
            </div>
          ) : (
            <div className="w-full max-w-[200px] h-[200px] rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="text-sm">No services</div>
                <div className="text-xs">selected yet</div>
              </div>
            </div>
          )}
        </div>

        {/* Service List */}
        <div className="flex-1">
          {services.length > 0 ? (
            <div className="space-y-3">
              <div className="flex justify-between font-medium text-[#1a365d] border-b border-gray-200 pb-2">
                <span>Service</span>
                <span>Percentage</span>
              </div>
              {services.map((service, index) => (
                <div key={index} className="flex justify-between text-sm py-1">
                  <span className="text-[#1a365d]">{service.serviceName}</span>
                  <span className="font-medium text-[#0249aa]">
                    {service.percentage}%
                  </span>
                </div>
              ))}
              <div className="flex justify-between font-bold text-[#1a365d] border-t border-gray-200 pt-2 mt-2">
                <span>Total</span>
                <span>{totalPercentage}%</span>
              </div>
              {totalPercentage > 100 && (
                <div className="text-red-500 text-sm mt-2">
                  Total exceeds 100% - please adjust percentages
                </div>
              )}
            </div>
          ) : (
            <div className="text-center text-gray-500 text-sm py-8">
              Select services above to see distribution
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default ServiceLines;