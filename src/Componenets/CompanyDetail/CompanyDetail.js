"use client";
import React, { useState, useMemo, lazy, Suspense } from "react";
import {
  Calendar,
  Building,
  Facebook,
  Linkedin,
  Twitter,
  Globe,
  MapPin,
  Users,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ClaimForm from "@/Componenets/ui/ClaimForm";
import CompanyReviews from "../Company/CompanyReviews";
import CompanyBadges from "../Company/CompanyBadges";

// Lazy load heavy components
const ContactFormCompany = lazy(() => import("../ui/ContactFormCompany"));

// Loading skeleton component
const LoadingSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-64 bg-gray-200 rounded-2xl mb-8"></div>
  </div>
);

// Memoized Team Member Card Component
const TeamMemberCard = React.memo(function TeamMemberCard({ member }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-full bg-[#314158] flex items-center justify-center text-white font-bold text-lg">
          {member?.name?.charAt(0) || 'U'}
        </div>
        <div>
          <h3 className="font-bold text-gray-900">{member?.name}</h3>
          <p className="text-[#314158] text-sm">{member?.position}</p>
        </div>
      </div>
      <div className="flex gap-2">
        {member?.linkedinUrl && (
          <a
            href={member?.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-[#314158] rounded-md flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label={`Visit ${member.name}'s LinkedIn profile`}
          >
            <Linkedin className="w-4 h-4 text-white" />
          </a>
        )}
        {member?.twitterUrl && (
          <a
            href={member?.twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-[#314158] rounded-md flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label={`Visit ${member.name}'s Twitter profile`}
          >
            <Twitter className="w-4 h-4 text-white" />
          </a>
        )}
      </div>
    </div>
  );
});

const CompanyDetail = ({ sampleCompanyData = {}, reviewsData = null }) => {
  const [showAllTeamMembers, setShowAllTeamMembers] = useState(false);
  const [showClaimForm, setShowClaimForm] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  // Memoize processed company data
  const companyData = useMemo(() => {
    if (!sampleCompanyData || Object.keys(sampleCompanyData).length === 0) {
      return {
        companyName: "Default Company",
        image: "/placeholder-logo.png",
        employees: 0,
        industries: [],
        foundedYear: null,
        website: "#",
        linkedinUrl: "",
        facebookUrl: "",
        twitterUrl: "",
        teamLeads: [],
        companyCountry: "Not specified",
        description: "Company description not available.",
        email: "",
        phone: "",
        rating: 0,
        reviewCount: 0,
      };
    }
    
    // Ensure all required fields have safe defaults
    return {
      ...sampleCompanyData,
      companyName: sampleCompanyData.companyName || "Unknown Company",
      employees: sampleCompanyData.employees || 0,
      industries: Array.isArray(sampleCompanyData.industries) ? sampleCompanyData.industries : [],
      foundedYear: sampleCompanyData.foundedYear || null,
      teamLeads: Array.isArray(sampleCompanyData.teamLeads) ? sampleCompanyData.teamLeads : [],
      companyCountry: sampleCompanyData.companyCountry || "Not specified",
      description: sampleCompanyData.description || "Company description not available.",
      email: sampleCompanyData.email || "",
      phone: sampleCompanyData.phone || "",
      rating: sampleCompanyData.rating || 0,
      reviewCount: sampleCompanyData.reviewCount || 0,
    };
  }, [sampleCompanyData]);

  // Memoize displayed team members
  const displayedTeamMembers = useMemo(() => {
    const teamLeads = companyData.teamLeads || [];
    return showAllTeamMembers ? teamLeads : teamLeads.slice(0, 4);
  }, [companyData.teamLeads, showAllTeamMembers]);

  // Memoize social links
  const socialLinks = useMemo(() => {
    const links = [];
    if (companyData.website)
      links.push({ href: companyData.website, icon: Globe, label: "Website" });
    if (companyData.linkedinUrl)
      links.push({
        href: companyData.linkedinUrl,
        icon: Linkedin,
        label: "LinkedIn",
      });
    if (companyData.twitterUrl)
      links.push({
        href: companyData.twitterUrl,
        icon: Twitter,
        label: "Twitter",
      });
    if (companyData.facebookUrl)
      links.push({
        href: companyData.facebookUrl,
        icon: Facebook,
        label: "Facebook",
      });
    return links;
  }, [
    companyData.website,
    companyData.linkedinUrl,
    companyData.twitterUrl,
    companyData.facebookUrl,
  ]);

  // Generate structured data for SEO
  const structuredData = useMemo(() => {
    const safeCompanyData = {
      companyName: companyData?.companyName || '',
      description: companyData?.description || '',
      image: companyData?.image || "/placeholder-logo.png",
      website: companyData?.website || "#",
      companyCountry: companyData?.companyCountry || '',
      foundedYear: companyData?.foundedYear,
      employees: companyData?.employees,
      industries: companyData?.industries,
      linkedinUrl: companyData?.linkedinUrl,
      twitterUrl: companyData?.twitterUrl,
      facebookUrl: companyData?.facebookUrl
    };

    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": safeCompanyData.companyName,
      "description": safeCompanyData.description,
      "image": safeCompanyData.image,
      "url": safeCompanyData.website,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": safeCompanyData.companyCountry
      },
      "foundingDate": safeCompanyData.foundedYear && safeCompanyData.foundedYear !== null ? safeCompanyData.foundedYear.toString() : undefined,
      "numberOfEmployees": safeCompanyData.employees || 0,
      "industry": Array.isArray(safeCompanyData.industries) ? safeCompanyData.industries.join(", ") : "",
      "sameAs": [
        safeCompanyData.linkedinUrl,
        safeCompanyData.twitterUrl,
        safeCompanyData.facebookUrl
      ].filter(url => url && url.trim() !== '')
    };
  }, [companyData]);

  const toggleTeamMembers = () => {
    setShowAllTeamMembers(!showAllTeamMembers);
  };

  const {
    companyName = '',
    image = '',
    employees = 0,
    industries = [],
    foundedYear = '',
    website = '#',
    teamLeads = [],
    companyCountry = '',
    description = '',
    email = '',
    phone = '',
    rating = 0,
    reviewCount = 0,
  } = companyData || {};

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Structured Data for SEO */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Company Header Section */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Company Logo */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-sm overflow-hidden">
                {image ? (
                  <Image
                    width={128}
                    height={128}
                    src={image}
                    alt={`${companyName} logo`}
                    className="w-full h-full object-contain"
                    loading="eager"
                    priority
                  />
                ) : (
                  <div
                    className="w-full h-full bg-[#314158] flex items-center justify-center text-white font-bold text-4xl"
                    aria-hidden="true"
                  >
                    {companyName?.charAt(0) || 'C'}
                  </div>
                )}
              </div>
            </div>

            {/* Company Info */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {companyName}
                  </h1>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin size={18} className="mr-2 text-[#314158]" />
                    <span>{companyCountry}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(rating)
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600">
                        {rating.toFixed(1)} ({reviewCount} reviews)
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={website || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    prefetch={false}
                  >
                    <button className="cursor-pointer bg-[#314158] hover:bg-[#253347] text-white px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-colors duration-300">
                      <ExternalLink size={16} />
                      Visit Website
                    </button>
                  </Link>
                  {!companyData.submittedThroughListingForm && (
                    <button 
                      onClick={() => setShowClaimForm(true)}
                      className="bg-white border border-[#314158] text-[#314158] hover:bg-[#314158] hover:text-white px-5 py-2.5 rounded-lg font-medium transition-colors duration-300"
                    >
                      Claim Profile
                    </button>
                  )}
                </div>
              </div>

              {/* Industries Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {Array.isArray(industries) &&
                  industries.map((industry, index) => (
                    <span
                      key={`industry-${index}`}
                      className="px-3 py-1.5 bg-[#314158]/10 text-[#314158] rounded-full text-sm font-medium"
                    >
                      {industry}
                    </span>
                  ))}
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-4">
                {email && (
                  <div className="flex items-center text-gray-600">
                    <Mail size={18} className="mr-2 text-[#314158]" />
                    <span>{email}</span>
                  </div>
                )}
                {phone && (
                  <div className="flex items-center text-gray-600">
                    <Phone size={18} className="mr-2 text-[#314158]" />
                    <span>{phone}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CLAIM FORM MODAL */}
      {showClaimForm && (
        <ClaimForm 
          company={companyData}
          onClose={() => setShowClaimForm(false)}
        />
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8 space-y-8">
            {/* Tab Navigation */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6" aria-label="Tabs">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'overview'
                        ? 'border-[#314158] text-[#314158]'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Overview
                  </button>
                  {teamLeads.length > 0 && (
                    <button
                      onClick={() => setActiveTab('team')}
                      className={`py-4 px-1 border-b-2 font-medium text-sm ${
                        activeTab === 'team'
                          ? 'border-[#314158] text-[#314158]'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      Leadership Team
                    </button>
                  )}
                </nav>
              </div>

              <div className="p-6">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div className="space-y-8">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-[#314158]/5 rounded-xl p-5 border border-[#314158]/10">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-[#314158] rounded-lg flex items-center justify-center">
                            <Calendar className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Founded</p>
                            <p className="text-xl font-bold text-gray-900">
                              {foundedYear}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#314158]/5 rounded-xl p-5 border border-[#314158]/10">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-[#314158] rounded-lg flex items-center justify-center">
                            <Building className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Industries</p>
                            <p className="text-sm font-bold text-gray-900">
                              {Array.isArray(industries)
                                ? industries.length
                                : 0}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#314158]/5 rounded-xl p-5 border border-[#314158]/10">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-[#314158] rounded-lg flex items-center justify-center">
                            <Users className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Team Size</p>
                            <p className="text-xl font-bold text-gray-900">
                              {employees?.toLocaleString() || 0}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Company Description */}
                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        About {companyName}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {description}
                      </p>
                    </div>

                    {/* Social Links */}
                    {socialLinks.length > 0 && (
                      <div className="bg-white rounded-xl p-6 border border-gray-200">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          Connect With Us
                        </h3>
                        <div className="flex flex-wrap gap-4">
                          {socialLinks.map(({ href, icon: Icon, label }, index) => (
                            <a
                              key={`social-${label}-${index}`}
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group w-12 h-12 bg-[#314158] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                              aria-label={label}
                            >
                              <Icon className="w-5 h-5 text-white" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Team Tab */}
                {activeTab === 'team' && teamLeads.length > 0 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {displayedTeamMembers.map((member, index) => (
                        <TeamMemberCard
                          key={`member-${index}-${member?.name}`}
                          member={member}
                        />
                      ))}
                    </div>

                    {/* Show More / Show Less Button */}
                    {teamLeads.length > 4 && (
                      <div className="flex justify-center pt-4">
                        <button
                          onClick={toggleTeamMembers}
                          className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300"
                          aria-expanded={showAllTeamMembers}
                        >
                          {showAllTeamMembers ? (
                            <>
                              <ChevronUp className="-ml-1 mr-2 h-4 w-4" />
                              Show Less
                            </>
                          ) : (
                            <>
                              <ChevronDown className="-ml-1 mr-2 h-4 w-4" />
                              Show More
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="col-span-12 lg:col-span-4 space-y-6">
            {/* Badges Section */}
            {companyData._id && (
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Company Badges</h3>
                <div>
                  <CompanyBadges companyId={companyData._id} />
                </div>
              </div>
            )}

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Contact {companyName}</h3>
              <Suspense fallback={<LoadingSkeleton />}>
                <ContactFormCompany />
              </Suspense>
            </div>
          </aside>
        </div>
      </main>

      {/* Company Reviews Section */}
      <section className="container mx-auto px-4 py-8">
        <CompanyReviews 
          companyId={companyData._id} 
          companySlug={companyData.slug} 
          initialReviewsData={reviewsData}
        />
      </section>
    </div>
  );
};

export default CompanyDetail;