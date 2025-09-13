import Image from "next/image";
import React from "react";
import {
  Target,
  TrendingUp,
  Award,
  Globe,
  Headphones,
  Cloud,
  Shield,
  Server,
  Settings,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About IntentWire | Top MSP & MSSP Database Platform Since 2021",
  description:
    "Discover IntentWire, the leading Managed Service Provider (MSP) and Managed Security Service Provider (MSSP) platform. Connect with top MSPs and MSSPs near you for secure business growth.",
  keywords: [
    "Managed Service Provider",
    "Managed Security Service Provider",
    "MSP database",
    "MSSP database",
    "top MSP",
    "best MSSP",
    "near MSP",
    "local MSP",
    "IT service provider",
    "cybersecurity services",
    "business technology partners",
    "IntentWire company overview",
  ],
  metadataBase: new URL("https://intentwire.com"),
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About IntentWire | Top MSP & MSSP Database Platform Since 2021",
    description:
      "Discover IntentWire, the leading Managed Service Provider (MSP) and Managed Security Service Provider (MSSP) platform. Connect with top MSPs and MSSPs near you for secure business growth.",
    url: "https://intentwire.com/about",
    siteName: "IntentWire",
    images: [
      {
        url: "https://intentwire.com/og-images/about.jpg",
        width: 1200,
        height: 630,
        alt: "IntentWire - Trusted Managed Service Provider Since 2021",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About IntentWire | Top MSP & MSSP Database Platform Since 2021",
    description:
      "Discover IntentWire, the leading Managed Service Provider (MSP) and Managed Security Service Provider (MSSP) platform. Connect with top MSPs and MSSPs near you for secure business growth.",
    images: ["https://intentwire.com/og-images/about.jpg"],
    site: "@intentwire",
  },
};

export default function AboutUsSection() {
  return (
    <main>
      {/* Updated Hero Section with Semantic HTML */}
      <header className="relative bg-gradient-to-r from-teal-600 to-cyan-500 min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        <div className="relative z-10 container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                About <span className="text-white/90">IntentWire</span>
              </h1>
              <div className="w-20 h-1 bg-white/80 mx-auto lg:mx-0 rounded-full mb-8"></div>
              <p className="text-xl text-white/90 mb-8 max-w-xl mx-auto lg:mx-0">
                Leading MSP & MSSP Platform Since 2021
              </p>
              <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Connecting businesses with top Managed Service Providers and Managed Security Service Providers across USA, Europe, Australia, and Canada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/services" aria-label="Explore our services">
                  <button className="flex items-center cursor-pointer justify-center px-6 py-3 bg-white text-teal-600 font-medium rounded-lg hover:bg-white/90 transition-all duration-300 shadow-md hover:shadow-lg">
                    <Settings className="w-5 h-5 mr-2" />
                    Our Services
                  </button>
                </Link>
                <Link href="/contact" aria-label="Contact IntentWire">
                  <button className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 hover:border-white/80">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Target,
                  title: "Our Mission",
                  desc: "Connecting businesses with top MSPs and MSSPs for secure growth",
                },
                {
                  icon: Globe,
                  title: "Our Reach",
                  desc: "Serving businesses across USA, Europe, Australia, and Canada",
                },
                {
                  icon: Shield,
                  title: "Our Focus",
                  desc: "Verified MSP and MSSP partnerships for maximum security",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-white font-semibold text-lg mb-2">
                        {item.title}
                      </h2>
                      <p className="text-white/80">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Company History Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Journey Since 2021
            </h2>
            <div className="w-20 h-1 bg-teal-500 rounded-full mx-auto"></div>
          </div>

          <div className="g gap-8 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2021, IntentWire emerged as a response to the growing
                need for reliable, data-driven technology partnerships. What
                began as a specialized Managed Service Provider database has evolved into a
                comprehensive platform connecting businesses with verified MSP and MSSP
                solution providers worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the past three years, we&apos;ve helped over 1,200 businesses
                streamline their technology procurement process by connecting them with top MSPs and MSSPs near them while
                maintaining a 98% client retention rate through our commitment
                to excellence and security.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { value: "1,200+", label: "Businesses Served" },
                  { value: "98%", label: "Client Retention" },
                  { value: "50+", label: "Global Partners" },
                  { value: "24/7", label: "Support Coverage" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center"
                  >
                    <p className="text-2xl font-bold text-teal-600">
                      {stat.value}
                    </p>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
         
          </div>
        </div>
      </section>

      {/* Enhanced Content Section */}
      <article className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {/* Introduction */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Your Strategic MSP & MSSP Technology Partner
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At IntentWire, we specialize in connecting businesses with
                premier Managed Service Providers and Managed Security Service Providers. Our comprehensive
                database serves as the critical link between organizations
                seeking top MSP and MSSP partnerships and verified IT solution providers across North America, Europe, and Australia.
              </p>
            </section>

            {/* Mission */}
            <section className="bg-gradient-to-r from-teal-50 to-cyan-50 p-8 rounded-xl border border-teal-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Core Mission
              </h3>
              <p className="text-lg text-gray-700">
                To transform business technology procurement by providing access to the best Managed Service Providers and Managed Security Service Providers. We empower
                organizations to make data-driven decisions about their
                MSP and MSSP partnerships while ensuring security, scalability,
                and strategic alignment for long-term growth.
              </p>
            </section>

            {/* Services */}

            <section>
              <div className="text-center mb-10">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Comprehensive MSP & MSSP Solutions
                </h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  As a full-service technology partner, we offer both a premier
                  MSP/MSSP database and direct managed services
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "MSP Database Platform",
                    desc: "Access to 50,000+ verified Managed Service Providers with detailed capabilities and performance metrics",
                    icon: Server,
                    link: "/managed-service-providers",
                  },
                  {
                    title: "MSSP Database Platform",
                    desc: "Connect with top Managed Security Service Providers for comprehensive cybersecurity protection",
                    icon: Shield,
                    link: "/managed-security-service-providers",
                  },
                  {
                    title: "Cybersecurity Solutions",
                    desc: "Comprehensive protection against evolving threats with 24/7 monitoring and rapid response from verified MSSPs",
                    icon: Shield,
                    link: "/data-backup-recovery",
                  },
                  {
                    title: "Cloud Infrastructure",
                    desc: "Scalable cloud solutions from top MSPs enabling business growth without technological constraints",
                    icon: Cloud,
                    link: "/cloud-computing-services",
                  },
                  {
                    title: "Strategic IT Consulting",
                    desc: "Expert guidance to align MSP and MSSP investments with business objectives",
                    icon: TrendingUp,
                    link: "/business-consulting",
                  },
                  {
                    title: "Compliance Management",
                    desc: "Ensuring your MSP and MSSP partnerships meet industry regulations and security standards",
                    icon: CheckCircle,
                    link: "/compliance-risk-management",
                  },
                ].map((service, idx) => (
                  <Link
                    key={idx}
                    href={service.link}
                    className="block bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start mb-4">
                      <div className="mt-1 mr-4">
                        <service.icon className="w-8 h-8 text-teal-600" />
                      </div>
                      <h4 className="font-semibold text-lg text-teal-600">
                        {service.title}
                      </h4>
                    </div>
                    <p className="text-gray-600">{service.desc}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Approach */}
            <section className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Client-Centric MSP & MSSP Approach
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                We believe technology should serve your business strategy, not
                constrain it. Our four-phase methodology ensures MSP and MSSP solutions that
                deliver measurable results:
              </p>

              <div className="grid md:grid-cols-4 gap-6 mt-8">
                {[
                  {
                    step: "1",
                    title: "Assess",
                    desc: "Comprehensive MSP and MSSP needs analysis",
                  },
                  {
                    step: "2",
                    title: "Plan",
                    desc: "Strategy aligned with business goals and security requirements",
                  },
                  {
                    step: "3",
                    title: "Implement",
                    desc: "Seamless MSP/MSSP solution deployment",
                  },
                  {
                    step: "4",
                    title: "Optimize",
                    desc: "Continuous improvement with your MSP/MSSP partners",
                  },
                ].map((phase, idx) => (
                  <div key={idx} className="text-center p-4">
                    <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-teal-800 font-bold text-xl">
                        {phase.step}
                      </span>
                    </div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">
                      {phase.title}
                    </h4>
                    <p className="text-gray-600">{phase.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Choose Us */}
            <section>
              <div className="text-center mb-10">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Why Businesses Choose Top MSPs & MSSPs via IntentWire
                </h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  The competitive advantages that make us the trusted MSP/MSSP platform
                  since 2021
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "MSP/MSSP Expertise",
                    desc: "Our team averages 12+ years in enterprise MSP and MSSP solutions",
                    icon: Award,
                  },
                  {
                    title: "Verified Providers",
                    desc: "Rigorous vetting process for all MSP and MSSP partners in our database",
                    icon: CheckCircle,
                  },
                  {
                    title: "Security First",
                    desc: "Zero major security incidents across client MSP/MSSP deployments",
                    icon: Shield,
                  },
                  {
                    title: "Global Perspective",
                    desc: "MSP and MSSP solutions optimized for international operations",
                    icon: Globe,
                  },
                  {
                    title: "Proactive Support",
                    icon: Headphones,
                    desc: "90% of MSP/MSSP issues resolved before impacting operations",
                  },
                  {
                    title: "Cost Transparency",
                    icon: TrendingUp,
                    desc: "Clear pricing with no hidden fees when working with MSPs/MSSPs",
                  },
                ].map((reason, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="mt-1 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <reason.icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900 mb-1">
                        {reason.title}
                      </h4>
                      <p className="text-gray-600">{reason.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <section className="bg-gradient-to-r from-teal-600 to-cyan-600 p-8 rounded-xl text-center">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                  Connect with Top MSPs & MSSPs Today
                </h3>
                <p className="text-lg text-white/90 mb-8">
                  Join 1,200+ businesses that trust IntentWire to find the best Managed Service Providers and Managed Security Service Providers near them
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" aria-label="Contact IntentWire">
                    <button className="px-8 py-3 bg-white text-teal-700 font-bold rounded-lg hover:bg-white/90 transition-colors duration-300 shadow-lg hover:shadow-xl">
                      Get Started Today
                    </button>
                  </Link>
                  <Link href="/services" aria-label="Explore our services">
                    <button className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-300">
                      Explore MSP/MSSP Solutions
                    </button>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}