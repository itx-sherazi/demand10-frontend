"use client"
import React, { useState } from 'react'
import { HelpCircle, MessageSquare, MessageCircle, ChevronDown, Link, Server, Shield, Cloud, Users, Building, MapPin } from "lucide-react";

const FaqCom = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQ data organized with managed IT services focus
  const faqItems = [
    {
      question: "What are the benefits of managed IT services?",
      answer: "Managed IT services offer numerous advantages for businesses of all sizes:",
      listItems: [
        "Proactive Monitoring: 24/7 surveillance of your IT infrastructure to prevent issues before they impact operations.",
        "Cost Savings: Reduce the need for in-house IT staff and expensive equipment while gaining access to enterprise-level expertise.",
        "Enhanced Security: Comprehensive cybersecurity solutions from verified managed security service providers to protect against evolving threats.",
        "Scalability: Flexible services that grow with your business needs, whether you're a small business or large enterprise.",
        "Expert Support: Access to a team of skilled IT managed service providers without the overhead of full-time employees.",
        "Focus on Core Business: Free up internal resources to concentrate on strategic initiatives rather than IT maintenance."
      ]
    },
    {
      question: "What is a managed service provider (MSP)?",
      answer: "A Managed Service Provider (MSP) is a third-party company that remotely manages a customer's IT infrastructure and end-user systems. MSPs offer a comprehensive range of services, including network monitoring, data backup, cybersecurity, and cloud solutions. Whether you're looking for managed IT services for small businesses, law firms, or large enterprises, partnering with the right managed service provider can transform your IT operations.",
      additionalText: "At IntentWire, we connect you with verified managed service providers near you in locations like Chicago, New York, NYC, and New Jersey, ensuring you find the perfect IT managed services provider for your specific needs."
    },
    {
      question: "What is the difference between co-managed IT services and fully managed services?",
      answer: "Co-managed IT services involve a collaborative approach where a managed service provider works alongside your internal IT team:",
      listItems: [
        "Co-Managed Services: Ideal for organizations with existing IT staff who need additional expertise or support during peak periods. Your IT managed service provider acts as an extension of your team.",
        "Fully Managed Services: The managed service provider takes complete responsibility for your IT infrastructure, ideal for businesses without internal IT resources or those looking to reduce their IT overhead."
      ],
      additionalText: "Both co-managed IT services and fully managed services are offered by qualified managed service providers in our network, allowing you to choose the approach that best fits your organizational structure and requirements."
    },
    {
      question: "What managed IT security services do you offer?",
      answer: "Our network of managed security service providers offers comprehensive cybersecurity solutions:",
      listItems: [
        "24/7 Threat Monitoring: Continuous surveillance to detect and respond to cyber threats in real-time.",
        "Vulnerability Assessments: Regular scanning and analysis of your systems to identify potential security gaps.",
        "Incident Response: Rapid response protocols to minimize damage and restore operations quickly after a security breach.",
        "Compliance Management: Assistance with meeting industry regulations such as HIPAA, GDPR, and SOX.",
        "Endpoint Protection: Advanced security solutions for all devices connected to your network.",
        "Security Awareness Training: Educating your staff on best practices to prevent security incidents."
      ],
      additionalText: "These managed IT security services are provided by top-rated managed security service providers who are verified partners in our platform, ensuring you receive the highest level of protection."
    },
    {
      question: "How do I find managed service providers near me?",
      answer: "IntentWire makes it easy to connect with managed service providers near you:",
      listItems: [
        "Location-Based Search: Our platform allows you to search for managed service providers in specific cities like Chicago, New York, NYC, and New Jersey.",
        "Specialized Providers: Find managed IT services for small businesses, law firms, healthcare organizations, and other industry-specific requirements.",
        "Verified Partners: All managed service providers in our network are thoroughly vetted for quality and reliability.",
        "Detailed Profiles: Review provider profiles, services offered, client testimonials, and performance metrics before making a decision.",
        "Direct Connection: Contact multiple managed service providers directly through our platform to discuss your specific needs."
      ],
      additionalText: "Whether you're looking for IT managed services near me or seeking specialized managed IT services for your industry, our platform streamlines the process of finding and connecting with the right managed service provider."
    },
    {
      question: "What industries do you serve with managed IT services?",
      answer: "Our network of managed service providers serves businesses across various sectors:",
      listItems: [
        "Law Firms: Specialized managed IT services for law firms with strict confidentiality and compliance requirements.",
        "Small Businesses: Cost-effective managed IT services for small businesses that need enterprise-level IT support without the overhead.",
        "Healthcare: HIPAA-compliant managed IT services for healthcare organizations protecting sensitive patient data.",
        "Finance: Secure managed IT services for financial institutions with stringent regulatory requirements.",
        "Education: Reliable managed IT services for educational institutions supporting diverse technology needs.",
        "Manufacturing: Industrial-grade managed IT services for manufacturing companies with complex operational technology environments."
      ],
      additionalText: "Each industry has unique IT challenges, and our managed service providers offer tailored solutions to meet these specific requirements."
    },
    {
      question: "What cloud services do managed cloud service providers offer?",
      answer: "Managed cloud service providers in our network offer a comprehensive range of cloud solutions:",
      listItems: [
        "Cloud Migration: Seamless transition of your data and applications to cloud environments with minimal disruption.",
        "Cloud Management: Ongoing management and optimization of your cloud infrastructure for peak performance.",
        "Multi-Cloud Solutions: Strategies for leveraging multiple cloud platforms to avoid vendor lock-in and optimize costs.",
        "Disaster Recovery: Cloud-based backup and recovery solutions to ensure business continuity.",
        "Scalability Services: Elastic cloud resources that automatically adjust to your changing business needs.",
        "Security Integration: Cloud security solutions that protect your data and applications in cloud environments."
      ],
      additionalText: "These managed cloud service provider solutions are designed to give you the flexibility and reliability of cloud computing while maintaining the security and support of working with experienced managed service providers."
    },
    {
      question: "How do I choose the right managed IT services provider?",
      answer: "Selecting the right managed IT services provider requires careful evaluation of several factors:",
      listItems: [
        "Service Expertise: Ensure the managed service provider has experience with the specific services you need, whether it's managed IT security services, cloud solutions, or general IT support.",
        "Industry Knowledge: Look for managed service providers who understand the unique requirements of your industry, such as managed IT services for law firms or healthcare organizations.",
        "Location Proximity: Consider managed service providers near you for easier collaboration and on-site support when needed.",
        "Response Times: Evaluate the provider's SLAs and response times to ensure they meet your business requirements.",
        "Scalability: Choose managed service providers who can grow with your business and adapt to changing needs.",
        "Client References: Review testimonials and case studies from similar businesses to gauge the provider's effectiveness."
      ],
      additionalText: "IntentWire simplifies this process by providing detailed profiles of managed service providers, client reviews, and performance metrics to help you make an informed decision."
    },
    {
      question: "What are the costs associated with managed IT services?",
      answer: "Managed IT services pricing varies based on several factors:",
      listItems: [
        "Service Scope: The range of services required affects pricing, from basic IT managed support to comprehensive managed IT security services.",
        "Business Size: Managed IT services for small businesses typically have different pricing structures than enterprise solutions.",
        "Infrastructure Complexity: More complex IT environments require more resources to manage, affecting costs.",
        "Service Level Agreements: Premium SLAs with faster response times may incur additional costs.",
        "Provider Expertise: Specialized managed service providers with advanced certifications may charge premium rates.",
        "Geographic Location: Managed service providers in major cities like New York or Chicago may have different pricing than those in other regions."
      ],
      additionalText: "Our platform allows you to compare pricing and services from multiple managed service providers to find the best value for your specific requirements."
    },
    {
      question: "How quickly can I get started with managed IT services?",
      answer: "Getting started with managed IT services through IntentWire is a straightforward process:",
      listItems: [
        "Account Setup: Create your IntentWire account in minutes to access our network of managed service providers.",
        "Requirement Submission: Describe your IT needs, including any specific requirements for managed IT services for small businesses, law firms, or other industries.",
        "Provider Matching: Receive recommendations for managed service providers near you who match your requirements.",
        "Consultation Scheduling: Connect directly with shortlisted managed service providers to discuss your needs in detail.",
        "Service Agreement: Finalize contracts and service level agreements with your chosen managed service provider.",
        "Implementation: Begin receiving managed IT services with minimal disruption to your operations."
      ],
      additionalText: "Most businesses can begin receiving managed IT services within 1-2 weeks of initial contact, with many managed service providers offering expedited onboarding for urgent requirements."
    }
  ];

  return (
    <>
      <div>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#265ba3] via-[#1e4a86] to-[#1a365d] overflow-hidden min-h-[50vh] flex items-center">
        
      
          {/* Main Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="w-full mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="text-center lg:text-left">
                  {/* Main Heading */}
                  <div className="mb-8">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
                      Managed IT Services <span className="text-white/90">FAQ</span>
                    </h1>
                    <div className="w-20 h-1 bg-white/80 mx-auto lg:mx-0 rounded-full mb-6"></div>
                    <h4 className="text-xl sm:text-2xl text-white/90 font-light">
                      Your Questions About MSP & IT Solutions Answered
                    </h4>
                  </div>
                  {/* Description */}
                  <p className="text-lg text-white/80 mb-8 leading-relaxed">
                    Find answers to common questions about managed IT services, MSP providers, cybersecurity solutions, and how to connect with top managed service providers near you.
                  </p>
                  {/* CTA Button */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link href="/contact">
                      <button className="flex items-center justify-center px-8 py-4 bg-white text-[#314158] font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Contact Us
                      </button>
                    </Link>
                  </div>
                </div>
                
                {/* Right Content - Icons Grid */}
                <div className="hidden lg:block">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                          <Server className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-white font-semibold">IT Managed Services</h3>
                      </div>
                      <p className="text-white/80 text-sm">Comprehensive IT support from qualified managed service providers</p>
                    </div>
                    
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                          <Shield className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-white font-semibold">Security Services</h3>
                      </div>
                      <p className="text-white/80 text-sm">Advanced cybersecurity from verified managed security service providers</p>
                    </div>
                    
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                          <Cloud className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-white font-semibold">Cloud Solutions</h3>
                      </div>
                      <p className="text-white/80 text-sm">Scalable cloud services from top managed cloud service providers</p>
                    </div>
                    
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-white font-semibold">Local Providers</h3>
                      </div>
                      <p className="text-white/80 text-sm">Connect with managed service providers near you in major cities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
         
        </section>
        
        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 md:px-8 py-10">
          <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
            {/* Introduction */}
            <section className="mb-10 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Managed IT Services & MSP Solutions</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Whether you&apos;re searching for managed IT services for small businesses, looking for managed service providers near you in Chicago or New York, or seeking specialized managed IT security services, our comprehensive FAQ answers your most pressing questions about working with managed service providers.
              </p>
            </section>
            
            {/* FAQ Items */}
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-md' : ''}`}
                >
                  <button 
                    className={`flex justify-between items-center w-full p-5 text-left transition-colors duration-200 ${openIndex === index ? 'bg-[#314158]/10 text-[#314158]' : 'bg-gray-50 hover:bg-gray-100'}`}
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-content-${index}`}
                  >
                    <h3 className="text-lg font-semibold">{item.question}</h3>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-[#314158]' : 'text-gray-500'}`} />
                  </button>
                  <div 
                    id={`faq-content-${index}`}
                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="p-5 bg-white">
                      <p className="text-gray-600 leading-relaxed mb-3">
                        {item.answer}
                      </p>
                      {item.listItems && (
                        <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-3">
                          {item.listItems.map((listItem, i) => (
                            <li key={i} className="pl-2">
                              {listItem}
                            </li>
                          ))}
                        </ul>
                      )}
                      {item.additionalText && (
                        <p className="text-gray-600 leading-relaxed">
                          {item.additionalText}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Service Highlights Section */}
            <section className="mt-16 pt-10 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Why Choose Managed IT Services?</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-[#f0f4f9] p-6 rounded-lg border border-[#314158]/20">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-[#314158]/10 rounded-lg flex items-center justify-center mr-3">
                      <Server className="w-5 h-5 text-[#314158]" />
                    </div>
                    <h4 className="font-semibold text-lg text-[#314158]">Proactive IT Management</h4>
                  </div>
                  <p className="text-gray-600">
                    Prevent issues before they impact your business with 24/7 monitoring by qualified IT managed service providers.
                  </p>
                </div>
                
                <div className="bg-[#f0f4f9] p-6 rounded-lg border border-[#314158]/20">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-[#314158]/10 rounded-lg flex items-center justify-center mr-3">
                      <Shield className="w-5 h-5 text-[#314158]" />
                    </div>
                    <h4 className="font-semibold text-lg text-[#314158]">Enhanced Security</h4>
                  </div>
                  <p className="text-gray-600">
                    Protect your organization from cyber threats with comprehensive managed IT security services from verified MSSPs.
                  </p>
                </div>
                
                <div className="bg-[#f0f4f9] p-6 rounded-lg border border-[#314158]/20">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-[#314158]/10 rounded-lg flex items-center justify-center mr-3">
                      <Users className="w-5 h-5 text-[#314158]" />
                    </div>
                    <h4 className="font-semibold text-lg text-[#314158]">Expert Support</h4>
                  </div>
                  <p className="text-gray-600">
                    Access enterprise-level IT expertise without the overhead of full-time staff through qualified managed service providers.
                  </p>
                </div>
                
                <div className="bg-[#f0f4f9] p-6 rounded-lg border border-[#314158]/20">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-[#314158]/10 rounded-lg flex items-center justify-center mr-3">
                      <Building className="w-5 h-5 text-[#314158]" />
                    </div>
                    <h4 className="font-semibold text-lg text-[#314158]">Industry Specialization</h4>
                  </div>
                  <p className="text-gray-600">
                    Connect with managed IT services for small businesses, law firms, and other industry-specific requirements.
                  </p>
                </div>
                
                <div className="bg-[#f0f4f9] p-6 rounded-lg border border-[#314158]/20">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-[#314158]/10 rounded-lg flex items-center justify-center mr-3">
                      <MapPin className="w-5 h-5 text-[#314158]" />
                    </div>
                    <h4 className="font-semibold text-lg text-[#314158]">Local Providers</h4>
                  </div>
                  <p className="text-gray-600">
                    Find managed service providers near you in major cities like Chicago, New York, NYC, and New Jersey.
                  </p>
                </div>
                
                <div className="bg-[#f0f4f9] p-6 rounded-lg border border-[#314158]/20">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-[#314158]/10 rounded-lg flex items-center justify-center mr-3">
                      <Cloud className="w-5 h-5 text-[#314158]" />
                    </div>
                    <h4 className="font-semibold text-lg text-[#314158]">Cloud Solutions</h4>
                  </div>
                  <p className="text-gray-600">
                    Scalable cloud services from top managed cloud service providers to support your business growth.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Still Have Questions Section */}
            <section className="mt-16 pt-10 border-t border-gray-200 text-center">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Still have questions about managed IT services?</h3>
                <p className="text-gray-600 mb-6">
                  If you didn&apos;t find the answer you were looking for about managed service providers, IT managed services, or managed security service providers, our team is ready to help. Contact us to connect with verified managed service providers near you.
                </p>
                
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  )
}

export default FaqCom