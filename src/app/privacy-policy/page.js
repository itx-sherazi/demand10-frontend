import Link from "next/link";
import { Lock, ShieldCheck, EyeOff, Mail, Globe, User, RefreshCw, HelpCircle, ChevronRight, Server, Cloud, Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | IntentWire Data Protection Practices",
  description: "Learn how IntentWire safeguards your data. Read our detailed Privacy Policy covering data collection, usage, and protection measures for B2B partners.",
  keywords: [
    "Privacy Policy",
    "data protection",
    "user privacy",
    "IntentWire privacy",
    "B2B data security",
    "GDPR compliance",
    "data usage policy",
    "managed service provider",
    "managed security service provider",
    "IT managed services",
    "cloud service provider",
    "co-managed IT services"
  ],
  metadataBase: new URL("https://intentwire.com"),
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | IntentWire Data Protection Practices",
    description: "Learn how IntentWire safeguards your data. Read our detailed Privacy Policy covering data collection, usage, and protection measures for B2B partners.",
    url: "https://intentwire.com/privacy-policy",
    siteName: "IntentWire",
    images: [
      {
        url: "https://intentwire.com/og-images/privacy-policy.jpg",
        width: 1200,
        height: 630,
        alt: "Privacy Policy | IntentWire Data Protection Practices",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | IntentWire Data Protection Practices",
    description: "Learn how IntentWire safeguards your data. Read our detailed Privacy Policy covering data collection, usage, and protection measures for B2B partners.",
    images: ["https://intentwire.com/og-images/privacy-policy.jpg"],
    site: "@intentwire",
  },
};

const PrivacyPolicy = () => {

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#314158] to-[#253347] overflow-hidden">
        {/* Top Left Circles */}
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-20">
          <svg width="600" height="600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="300" cy="300" r="100" stroke="#8d9fbe" strokeWidth="1" />
            <circle cx="300" cy="300" r="200" stroke="#8d9fbe" strokeWidth="1" />
            <circle cx="300" cy="300" r="300" stroke="#8d9fbe" strokeWidth="1" />
            <circle cx="300" cy="300" r="400" stroke="#8d9fbe" strokeWidth="1" />
          </svg>
        </div>

        {/* Bottom Right Circles */}
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 opacity-20">
          <svg width="600" height="600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="300" cy="300" r="100" stroke="#8d9fbe" strokeWidth="1" />
            <circle cx="300" cy="300" r="200" stroke="#8d9fbe" strokeWidth="1" />
            <circle cx="300" cy="300" r="300" stroke="#8d9fbe" strokeWidth="1" />
            <circle cx="300" cy="300" r="400" stroke="#8d9fbe" strokeWidth="1" />
          </svg>
        </div>
        
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4 mr-2" />
              Updated: August 4, 2025
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Our <span className="text-white/90">Privacy Policy</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Your trust is our priority. Learn how we protect your data and respect your privacy as a valued B2B partner.
            </p>
          </div>
        </div>
        
       
      </section>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex items-center mb-8">
                <Lock className="w-8 h-8 text-[#314158] mr-3" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Privacy Policy</h1>
              </div>
              
              <div className="space-y-10">
                {/* Table of Contents */}
                <div className="bg-[#f8f9fa] rounded-xl p-6 border border-gray-200">
                  <h2 className="text-xl font-semibold text-[#314158] mb-4 flex items-center">
                    <HelpCircle className="w-5 h-5 mr-2" />
                    Table of Contents
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li>
                      <Link href="#copyright" className="text-gray-700 hover:text-[#314158] flex items-center">
                        <ChevronRight className="w-4 h-4 mr-2 text-[#314158]" />
                        Copyright Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="#eula" className="text-gray-700 hover:text-[#314158] flex items-center">
                        <ChevronRight className="w-4 h-4 mr-2 text-[#314158]" />
                        End User License Agreement
                      </Link>
                    </li>
                    <li>
                      <Link href="#privacy" className="text-gray-700 hover:text-[#314158] flex items-center">
                        <ChevronRight className="w-4 h-4 mr-2 text-[#314158]" />
                        Privacy Policy Details
                      </Link>
                    </li>
                    <li>
                      <Link href="#security" className="text-gray-700 hover:text-[#314158] flex items-center">
                        <ChevronRight className="w-4 h-4 mr-2 text-[#314158]" />
                        Data Security
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Copyright Policy Section */}
                <section id="copyright">
                  <div className="border-l-4 border-[#314158] pl-4 mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Copyright Policy</h2>
                    <h3 className="text-xl font-semibold text-[#314158] mb-4">DIGITAL MILLENNIUM COPYRIGHT ACT NOTICE</h3>
                  </div>
                   
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    <span className="text-md font-semibold text-gray-700 mb-3">Copyright Infringement Notification </span>
                    If you believe that content available on or through the Abuyo, Inc. DBA SelectHub (&quot;SelectHub&quot;) website (&quot;SelectHub.com&quot; or &quot;Website&quot;) unfairly uses or infringes one or more of your copyright(s), please immediately notify SelectHub&apos;s Copyright Agent by mail, email or faxed notice (&quot;Notification&quot;) providing the information described below. A copy of your Notification will be sent to the person responsible for the material addressed in the Notification.
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Please be advised that you may be held liable for damages if you make material misrepresentations pursuant to federal law in a Notification. Thus, if you are not sure content located on or linked-to by the Website infringes your copyright, or if you believe it&apos;s not a fair use of your copyright, you should consider first contacting an attorney.
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed font-medium">
                    All Notifications should include the following:
                  </p>
                  <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-600">
                    <li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
                    <li>Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works at a single online site are covered by a single notification, a representative list of such works at that site.</li>
                    <li>Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit the service provider to locate the material.</li>
                    <li>Information reasonably sufficient to permit the service provider to contact the complaining party, such as an address, telephone number, and, if available, an electronic mail address at which the complaining party may be contacted.</li>
                    <li>A statement that the complaining party has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
                    <li>A statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
                  </ol>
                  <div className="bg-[#f0f4f9] rounded-lg p-4 border border-[#314158]/20">
                    <p className="text-gray-600 leading-relaxed">
                      Notifications should be sent via email to: <span className="font-medium text-[#314158]">support@selecthub.com</span>.
                    </p>
                  </div>
                </section>

                {/* EULA Section */}
                <section id="eula">
                  <div className="border-l-4 border-[#314158] pl-4 mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">SelectHub End User License Agreement (&quot;EULA&quot;) & Terms of Use</h2>
                    <p className="text-gray-500 text-sm">Last Revision: May 24, 2018</p>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    THIS IS A LEGAL AGREEMENT BETWEEN YOU, A PERSON OR ENTITY WHO REGISTERS AND USES SELECTHUB.COM SERVICE ON BEHALF OF HIMSELF/HERSELF OR A BUSINESS, GOVERNMENT OR NON-PROFIT AGENCY (&quot;End User&quot;, &quot;User&quot; or &quot;Customer&quot;) AND ABUYO, INC. DBA SELECTHUB (&quot;SelectHub&quot;) REGARDING CUSTOMER&apos;S USE OF SELECTHUB.COM SERVICES (&quot;SelectHub Service&quot; or &quot;Service&quot;). BY CLICKING &quot;I ACCEPT&quot; OR BY USING THE SERVICE, CUSTOMER AGREES TO THE TERMS OF THIS AGREEMENT.
                  </p>
                  
                  <div className="space-y-6 mt-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h3 className="text-xl font-medium text-[#314158] mb-3 flex items-center">
                        <Server className="w-5 h-5 mr-2" />
                        1. DEFINED TERMS
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        Agreement means this SelectHub Web Services Agreement together with any rules and restrictions that may apply at the time.
                      </p>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        Confidential Information means the SelectHub Service and any information disclosed by SelectHub to User or discovered by User on his/her own accord, either directly or indirectly, in writing, orally, or by inspection of tangible objects relating to the SelectHub Service including without limitation application functionality, application workflow, user interface, product process, application specifications, research content, requirements templates, scorecards, vendor/product leaderboards, data, text, pictures, audio, video, logos and copy.
                      </p>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        Customer&apos;s Data or User&apos;s Data means any Project data or other data or material submitted by Customer during their use of the SelectHub Service.
                      </p>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        Effective Date means the day the Customer clicks to accept this Agreement, or uses the SelectHub Service, whichever is earlier.
                      </p>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        SelectHub Site means the web site located at https://www.SelectHub.com or related sub-domains.
                      </p>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        SelectHub Service (or &quot;Service&quot;) means the SelectHub vendor selection, e-sourcing and e-procurement application or product or product components thereof including but not limited to application functionality, market research, requirements templates or vendor/product scorecards and/or leaderboards that SelectHub makes available to Users over the Internet by means of the SelectHub Site for collaborating on product and services evaluations, vendor sourcing, procurement, sales and marketing purposes.
                      </p>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h3 className="text-xl font-medium text-[#314158] mb-3 flex items-center">
                        <Globe className="w-5 h-5 mr-2" />
                        2. SCOPE OF SERVICE; USAGE; ACCOUNTS; CUSTOMER DATA
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        Service. SelectHub shall provide access to Customer to SelectHub Service to be hosted and operated on SelectHub&apos;s and associated third-party computer servers and any applicable additional services in accordance with the terms of this EULA and the terms on SelectHub Site. Users may use the Service to evaluate various products and services if they are prospective buyers, or if they are vendors, they may use the Service to market to, interact with and sell their products and services to those prospective buyers.
                      </p>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        Buyer or Prospective Buyer refers to a user that is in the process of evaluating any products and services for his/her own use or use by the entity he/she is representing. A Buyer may interact with a Vendor via a message, enquiry, RFI, RFP, demo, trial, proof-of-concept (POC) or other related communication mechanism within SelectHub.
                      </p>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        Vendor refers to a user that has a product or service, or represents an entity that has a product or service that he/she would like to market to Buyers, and interact with them while responding to messages, enquiries, RFIs, RFPs, demo requests, trial requests, proof-of-concept requests, or other related communication mechanism from Buyers.
                      </p>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        Types and Cost of Service. There are two types of SelectHub Services: (i) Corporate or Paid Edition (&quot;SelectHub Corporate&quot;) wherein a user pays SelectHub a per-project, a per-module or a monthly, quarterly or annual subscription fee for access to the SelectHub Service and the ability to conduct their evaluations on the SelectHub platform and interact with vendors of their choice via messages, enquiries, RFIs, RFPs, demo requests, trial requests, proof-of-concept requests and other communication mechanism; and (ii) Community or Free Edition (&quot;SelectHub Community&quot;) wherein a user does not pay SelectHub to use the SelectHub Service but his/her usage is for functionality preview purposes only, is for a maximum of 30 days, and is subject to any/all usage data being shared with paying third-parties. The associated functionality for both editions is defined by SelectHub and is subject to change at any time. Also, the associated fees for using the Buyer-facing and the Vendor-facing aspects of the Service are subject to change from time to time. For the SelectHub Corporate edition, SelectHub charges fees that are current at the time of usage, unless the fees are pre-defined for a specific period of time via a separate contract or statement of work (SoW). Any and all unpaid or free usage of Service reverts to Community Edition.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Privacy Policy Section */}
                <section id="privacy">
                  <div className="border-l-4 border-[#314158] pl-4 mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">SelectHub Privacy Policy</h2>
                    <p className="text-gray-500 text-sm">(Last Updated: June 20, 2024)</p>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Abuyo, Inc. DBA SelectHub (&quot;SelectHub&quot; or &quot;we&quot;) has created this privacy policy (the &quot;Policy&quot;) to explain our privacy practices so you will understand when and how information is collected, used, disclosed and protected with respect to SelectHub-owned websites including but not limited to www.selecthub.com (&quot;Site(s)&quot; or &quot;Web Site(s)&quot;), applications, research content, requirements templates, analyst reports, Leaderboards, phone consultations, email surveys and other services (collectively and individually, &quot;Service&quot;). By using the Service, you consent to the privacy practices described in this Policy.
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Because of changes in technology and the growth and development of our business, SelectHub may need to modify this Policy from time to time. Changes to this Policy are discussed at the end of this document.
                  </p>
                  
                  <div className="space-y-6 mt-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h3 className="text-xl font-medium text-[#314158] mb-3 flex items-center">
                        <User className="w-5 h-5 mr-2" />
                        1. TYPES OF INFORMATION WE COLLECT ABOUT YOU
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        SelectHub collects, uses and discloses two types of information: Personal Information and Non-Personal Information (individually and collectively, &quot;Information&quot;). &quot;Personal Information&quot; is information that is directly associated with a specific person or entity such as a user&apos;s name, initials or nickname, e- mail address, organization name, title, phone number, user-chosen credentials and any technology vendor selection project data. &quot;Non-Personal Information&quot; is information that, without the aid of additional information, cannot be directly associated with a specific person or entity.
                      </p>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h3 className="text-xl font-medium text-[#314158] mb-3 flex items-center">
                        <EyeOff className="w-5 h-5 mr-2" />
                        2. CHILDREN
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        The Site is not intended for children under 18 years of age. We do not knowingly collect information from anyone under the age of 18.
                      </p>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h3 className="text-xl font-medium text-[#314158] mb-3 flex items-center">
                        <Shield className="w-5 h-5 mr-2" />
                        3. GATHERING, USE AND DISCLOSURE OF NON-PERSONAL INFORMATION
                      </h3>
                      <h4 className="text-lg font-medium text-gray-700 mb-2">A. Gathering Non-Personal Information</h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        (i) Web Browsers Like most Site operators, SelectHub gathers from users of the Site Non-Personal Information of the sort that Web browsers, depending on their settings, may make available. That information includes the user&apos;s Internet Protocol (&quot;IP&quot;) address, operating system and browser type, and the locations of the Web pages the user views right before arriving at, while navigating and immediately after leaving the Site. Such information may also include the user&apos;s role/persona within their organization as stated on the Site (e.g., Procurement Officer, IT Director, etc.), the industry in which their organization operates (e.g., Financial Services company), the size of the organization (e.g., SMB, Fortune 500 company), whether user has a Project or not within the Site, and in certain cases, high-level Project information such as product categories included. At this time, the Site does not acknowledge browser &quot;do not track&quot; settings.
                      </p>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        (ii) Cookies A cookie is a small amount of data, often including an anonymous unique identifier that is sent to your browser from a Site&apos;s computers and stored on your computer&apos;s hard drive. Most browsers automatically accept cookies as the default setting. SelectHub uses cookies to track a user&apos;s use of the Site during each Site session, both to help SelectHub improve users&apos; experiences and to help SelectHub understand how the Site is being used. YOU CAN MODIFY THE SETTING TO REJECT COOKIES OR TO PROMPT YOU BEFORE ACCEPTING A COOKIE FROM THE SITES YOU VISIT BY EDITING BROWSER OPTIONS. IF YOU DECIDE NOT TO ACCEPT OUR COOKIES, HOWEVER, YOU WILL NOT BE ABLE TO USE THE SERVICE.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Security Section */}
                <section id="security">
                  <div className="border-l-4 border-[#314158] pl-4 mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Data Security & Your Rights</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-[#314158] to-[#253347] rounded-xl p-6 text-white">
                      <h3 className="text-xl font-semibold mb-3 flex items-center">
                        <ShieldCheck className="w-5 h-5 mr-2" />
                        How We Protect Your Data
                      </h3>
                      <ul className="space-y-2 text-gray-100">
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                          Industry-standard encryption for data transmission
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                          Secure server infrastructure with regular security audits
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                          Limited access controls to authorized personnel only
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                          Regular security training for all staff members
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-[#253347] to-[#1a2533] rounded-xl p-6 text-white">
                      <h3 className="text-xl font-semibold mb-3 flex items-center">
                        <RefreshCw className="w-5 h-5 mr-2" />
                        Your Privacy Rights
                      </h3>
                      <ul className="space-y-2 text-gray-100">
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                          Access and review your personal information
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                          Request correction of inaccurate data
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                          Request deletion of your data
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                          Opt-out of marketing communications
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8 bg-[#f0f4f9] rounded-xl p-6 border border-[#314158]/20">
                    <h3 className="text-xl font-semibold text-[#314158] mb-4">Contact Us About Privacy</h3>
                    <p className="text-gray-700 mb-4">
                      If you have questions about our privacy practices or wish to exercise your rights, please contact us:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1">
                        <p className="font-medium text-[#314158]">Email</p>
                        <p className="text-gray-700">privacy@selecthub.com</p>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-[#314158]">Phone</p>
                        <p className="text-gray-700">877-692-2896</p>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-[#314158]">Mail</p>
                        <p className="text-gray-700">SelectHub, 611 S. Congress Ave., Suite 130, Austin, TX 78704</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;