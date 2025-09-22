"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  MapPin,
  Users,
  Calendar,
  Building2,
} from "lucide-react";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import { fetchProductDetail } from "@/services/api";

const renderCompanyDetail = (label, value, isLink = false, icon = null) => {
  if (!value) return null;
  return (
    <div className="flex items-start gap-2 mb-3">
      {icon && <div className="mt-0.5 text-gray-500">{icon}</div>}
      <div className="flex-1">
        <span className="text-xs font-bold text-gray-900 uppercase tracking-wide block mb-1">
          {label}
        </span>
        {isLink ? (
          <a
            href={value.startsWith("http") ? value : `${value}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1 break-all transition-colors"
          >
            {value}
            <ExternalLink className="w-3 h-3" />
          </a>
        ) : (
          <span className="text-gray-900 text-sm font-medium">{value}</span>
        )}
      </div>
    </div>
  );
};

const DynamicCompanyTable = () => {
  const [product, setProduct] = useState(null);
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedCompanyId, setExpandedCompanyId] = useState(null);
  const [error, setError] = useState(null);
  const params = useParams();
  const slug = params.slug;

  const toggleRowExpansion = (id) => {
    setExpandedCompanyId((prevId) => (prevId === id ? null : id));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch the specific product data
        const response = await fetchProductDetail(slug);

        if (!response || !response.product) {
          throw new Error("Product not found");
        }

        setProduct(response.product);

        // Set companies from the product's usedBy field
        if (Array.isArray(response.product.usedBy)) {
          setCompanies(response.product.usedBy);
        } else {
          setCompanies([]);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setError(error.message || "Failed to load company data");
        setCompanies([]);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchData();
    }
  }, [slug]);

  return (
    <div className="max-w-3xl mx-auto p-">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-6">
        {product?.companyTabelTitle || "Companies Using This Product"}
      </h2>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="text-white  bg-[#66d1c8]">
          <div className="grid grid-cols-12 gap-4 px-6 py-4">
            <div className="col-span-3 text-xs font-semibold text-white uppercase tracking-wide">
              Company
            </div>
            <div className="col-span-2 text-xs font-semibold text-white uppercase tracking-wide">
              Industry
            </div>
            <div className="col-span-2 text-xs font-semibold text-white uppercase tracking-wide">
              Location
            </div>
            <div className="col-span-2 text-xs font-semibold text-white uppercase tracking-wide">
              Employees
            </div>
            <div className="col-span-2 text-xs font-semibold text-white uppercase tracking-wide">
              Founded
            </div>
            <div className="col-span-1"></div>
          </div>
        </div>

        {/* Body */}
        <div className="max-h-[600px] overflow-y-auto scrollbar-hidden">
          {loading ? (
            <div className="min-h-48 flex items-center justify-center">
              <div className="text-center text-gray-500 p-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-lg">Loading companies...</p>
              </div>
            </div>
          ) : error ? (
            <div className="min-h-48 flex items-center justify-center">
              <div className="text-center text-red-500 p-8">
                <div className="text-5xl mb-4">⚠️</div>
                <p className="text-lg">Error loading companies</p>
                <p className="text-sm mt-2">{error}</p>
              </div>
            </div>
          ) : companies.length === 0 ? (
            <div className="min-h-48 flex items-center justify-center">
              <div className="text-center text-gray-500 p-8">
                <div className="text-5xl mb-4">📊</div>
                <p className="text-lg">No companies found for this product</p>
              </div>
            </div>
          ) : (
            companies.map((company, index) => {
              const isExpanded = expandedCompanyId === company._id;
              const isLast = index === companies.length - 1;

              return (
                <div key={company._id || index} className="relative">
                  {/* Main Row */}
                  <div
                    className={`grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                      isExpanded ? "bg-gray-50" : ""
                    } ${!isLast ? "border-b border-gray-100" : ""}`}
                    onClick={() => toggleRowExpansion(company._id)}
                  >
                    <div className="col-span-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                        {company.image ? (
                          <Image
                            src={company.image}
                            alt={company.companyName || "Company"}
                            width={32}
                            height={32}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.src = "/api/placeholder/32/32";
                            }}
                          />
                        ) : (
                          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-medium text-gray-900 text-sm truncate">
                          {company.companyName || "Unknown Company"}
                        </h3>
                      </div>
                    </div>

                    <div className="col-span-2 flex items-center">
                      <span className="text-sm text-gray-700 truncate">
                        {Array.isArray(company.industryTags)
                          ? company.industryTags.join(", ")
                          : company.industryTags || "-"}
                      </span>
                    </div>

                    <div className="col-span-2 flex items-center">
                      <span className="text-sm text-gray-700">
                        {company.companyCountry || "-"}
                      </span>
                    </div>

                    <div className="col-span-2 flex items-center">
                      <span className="text-sm text-gray-700">
                        {company.employees || "-"}
                      </span>
                    </div>

                    <div className="col-span-2 flex items-center">
                      <span className="text-sm text-gray-700">
                        {company.foundedYear || "-"}
                      </span>
                    </div>

                    <div className="col-span-1 flex items-center justify-end">
                      <div className="p-1 hover:bg-gray-200 rounded transition-colors">
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-gray-500" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="px-6 py-6 bg-gray-50 border-b border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Company Info */}
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <Building2 className="w-4 h-4" />
                            Company Info
                          </h4>
                          {renderCompanyDetail(
                            "Employees",
                            company.employees,
                            false,
                            <Users className="w-3 h-3" />
                          )}
                          {renderCompanyDetail(
                            "Founded Year",
                            company.foundedYear,
                            false,
                            <Calendar className="w-3 h-3" />
                          )}
                          {renderCompanyDetail(
                            "Industry",
                            Array.isArray(company.industryTags)
                              ? company.industryTags.join(", ")
                              : company.industryTags,
                            false
                          )}
                        </div>

                        {/* Location */}
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            Location
                          </h4>
                          {renderCompanyDetail(
                            "Country",
                            company.companyCountry
                          )}
                        </div>

                        {/* Online Presence as Buttons */}
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <ExternalLink className="w-4 h-4" />
                            Online Presence
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {company.website && (
                              <a
                                href={
                                  company.website.startsWith("http")
                                    ? company.website
                                    : `https://${company.website}`
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-2 w-full text-center font-bold text-sm rounded-md bg-[#004baa] text-white "
                              >
                                Website
                              </a>
                            )}
                            {company.linkedinUrl && (
                              <a
                                href={
                                  company.linkedinUrl.startsWith("http")
                                    ? company.linkedinUrl
                                    : `https://${company.linkedinUrl}`
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-2 w-full text-center font-bold text-sm rounded-md bg-[#004baa] text-white "
                              >
                                LinkedIn
                              </a>
                            )}
                            {company.twitterUrl && (
                              <a
                                href={
                                  company.twitterUrl.startsWith("http")
                                    ? company.twitterUrl
                                    : `https://${company.twitterUrl}`
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-2 w-full text-center font-bold text-sm rounded-md bg-[#004baa] text-white "
                              >
                                Twitter
                              </a>
                            )}
                            {company.facebookUrl && (
                              <a
                                href={
                                  company.facebookUrl.startsWith("http")
                                    ? company.facebookUrl
                                    : `https://${company.facebookUrl}`
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-2 w-full text-center font-bold text-sm rounded-md bg-[#004baa] text-white "
                              >
                                Facebook
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default DynamicCompanyTable;
