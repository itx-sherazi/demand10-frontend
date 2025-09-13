import React from "react";
import { Target, TrendingUp, Heart, Shield, Lightbulb, Award, Globe, Calendar } from "lucide-react";

export const metadata = {
  title: "IntentWire History – Innovating Data Solutions Since 2021",
  description:
    "Discover how IntentWire has revolutionized data solutions since 2021, connecting businesses with verified suppliers across various categories.",
  keywords: [
    "IntentWire history",
    "data solutions provider",
    "business data connections",
    "verified suppliers",
    "IntentWire company history"
  ],
  metadataBase: new URL("https://intentwire.com"),
  alternates: {
    canonical: "/history",
  },
  openGraph: {
    title: "IntentWire History – Innovating Data Solutions Since 2021",
    description:
      "Discover how IntentWire has revolutionized data solutions since 2021, connecting businesses with verified suppliers across various categories.",
    url: "https://intentwire.com/history",
    siteName: "IntentWire",
    images: [
      {
        url: "https://intentwire.com/og-images/history.jpg",
        width: 1200,
        height: 630,
        alt: "IntentWire History – Innovating Data Solutions Since 2021",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IntentWire History – Innovating Data Solutions Since 2021",
    description:
      "Discover how IntentWire has revolutionized data solutions since 2021, connecting businesses with verified suppliers across various categories.",
    images: ["https://intentwire.com/og-images/history.jpg"],
    site: "@intentwire",
  },
};

// Milestones data
const milestones = [
  {
    year: "2021",
    icon: <Calendar className="w-8 h-8" />,
    title: "Foundation Laid",
    description: "Launched our suite of Managed IT Services, including network monitoring, data backup, and cloud solutions."
  },
  {
    year: "2022",
    icon: <Shield className="w-8 h-8" />,
    title: "Security Expansion",
    description: "Expanded our offerings to include Managed Security Services, providing 24/7 threat monitoring and incident response."
  },
  {
    year: "2023",
    icon: <Globe className="w-8 h-8" />,
    title: "Global Presence",
    description: "Established a global presence, serving clients in over 10 countries across USA, Europe, Australia, and Canada."
  },
  {
    year: "2024",
    icon: <Award className="w-8 h-8" />,
    title: "Industry Recognition",
    description: "Recognized as a leading MSP and MSSP by industry analysts for our innovative approach and customer-centric solutions."
  }
];

// Core values data
const coreValues = [
  {
    icon: <Heart className="w-10 h-10" />,
    title: "Integrity",
    description: "Upholding the highest standards of honesty and transparency in all our dealings."
  },
  {
    icon: <Lightbulb className="w-10 h-10" />,
    title: "Innovation",
    description: "Continuously evolving our services to meet the dynamic needs of the digital landscape."
  },
  {
    icon: <Target className="w-10 h-10" />,
    title: "Accountability",
    description: "Taking responsibility for delivering results that exceed client expectations."
  },
  {
    icon: <TrendingUp className="w-10 h-10" />,
    title: "Customer-Centricity",
    description: "Placing our clients at the heart of everything we do, ensuring their success is our success."
  }
];

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        aria-label="Company Journey"
        className="relative bg-gradient-to-r from-[#314158] to-[#253347] overflow-hidden min-h-[60vh] flex items-center"
      >
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
       
        <div className="relative z-10 container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                Our <span className="text-blue-200">Journey</span>
              </h1>
              <div className="w-24 h-1 bg-blue-300 mx-auto lg:mx-0 rounded-full mb-6"></div>
              <p className="text-lg sm:text-xl text-blue-100 leading-relaxed mb-6">
                From a small vision to a trusted name in B2B solutions — explore
                how we built a legacy of innovation, trust, and impact.
              </p>
              <button className="px-8 py-4 bg-white text-[#314158] font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Read Our Full Story
              </button>
            </div>
            
            {/* Right: Core Values */}
            <div className="space-y-5">
              {[
                {
                  title: "Mission",
                  icon: <Target className="w-6 h-6 text-white" />,
                  text: "To empower businesses with practical, forward-thinking digital solutions.",
                },
                {
                  title: "Vision",
                  icon: <TrendingUp className="w-6 h-6 text-white" />,
                  text: "To be the most trusted partner for sustainable business growth.",
                },
                {
                  title: "Core Values",
                  icon: <Heart className="w-6 h-6 text-white" />,
                  text: "Integrity, innovation, and accountability in every project.",
                },
                {
                  title: "Commitment",
                  icon: <Shield className="w-6 h-6 text-white" />,
                  text: "Delivering results with consistency, quality, and care.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-blue-100 text-sm">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-20 fill-current text-white"
          >
            <path d="M0,64L48,69.3C96,75,192,85,288,85.3C384,85,480,75,576,69.3C672,64,768,64,864,69.3C960,75,1056,85,1152,85.3C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Introduction */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-[#314158] mb-6">Our Journey: From Vision to Innovation</h2>
          <div className="w-full mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At IntentWire, our story is one of ambition, innovation, and a relentless pursuit of excellence. Established in 2021, we embarked on a mission to redefine the landscape of Managed Service Providers (MSPs) and Managed Security Service Providers (MSSPs), delivering cutting-edge IT solutions to businesses across the USA, Europe, Australia, and Canada.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our journey began with a clear vision: to empower organizations with comprehensive IT and cybersecurity solutions that drive efficiency, security, and growth. From our humble beginnings, weve rapidly evolved into a trusted partner for enterprises seeking reliable and scalable managed services.
            </p>
          </div>
        </section>

        {/* Milestones Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#314158] mb-2 text-center">Milestones of Excellence</h2>
          <div className="w-20 h-1 bg-[#314158] mx-auto rounded-full mb-10"></div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#314158]/20 hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-0">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-12 md:mb-0`}
                >
                  {/* Year marker */}
                  <div className="md:w-1/2 flex justify-center md:justify-end md:pr-12 mb-4 md:mb-0">
                    <div className="bg-[#314158] text-white font-bold text-xl py-2 px-6 rounded-lg shadow-md">
                      {milestone.year}
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-[#314158] rounded-full flex items-center justify-center z-10 hidden md:flex">
                    <div className="text-[#314158]">
                      {milestone.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-1/2 md:pl-12">
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
                      <h3 className="text-xl font-semibold text-[#314158] mb-2">{milestone.title}</h3>
                      <p className="text-gray-700">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#314158] mb-2 text-center">Core Values That Drive Us</h2>
          <div className="w-20 h-1 bg-[#314158] mx-auto rounded-full mb-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 text-center">
                <div className="bg-[#314158]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-[#314158]">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#314158] mb-2">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Looking Ahead Section */}
        <section className="bg-blue-50 rounded-xl p-8 border border-blue-100">
          <h2 className="text-3xl font-bold text-[#314158] mb-6 text-center">Looking Ahead</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As we reflect on our achievements, we remain focused on the future. Our commitment to delivering unparalleled Managed IT and Security Services propels us toward new horizons. We aim to set new industry standards, leveraging emerging technologies to provide innovative solutions that empower businesses worldwide.
            </p>
            <div className="mt-8">
              <button className="px-8 py-3 bg-[#314158] text-white font-medium rounded-lg hover:bg-[#253347] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Join Our Journey
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;