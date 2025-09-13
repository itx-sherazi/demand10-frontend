'use client'
import React, { useEffect, useState } from 'react';
import { Target, Activity, Eye, ArrowRight, TrendingUp, Shield, Zap, Users, BarChart3, Award, Server, Cloud, Headphones, BookOpen, Globe, Lightbulb, Database, Mail, Filter, Monitor, Cpu, FileText, Building, CheckCircle, Link as LinkIcon } from 'lucide-react';
import Image from 'next/image';
import NextLink from 'next/link';
import { Bar, BarChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from 'recharts';

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('managedIT');
  const [activeChart, setActiveChart] = useState('growth');
  const [animatedStats, setAnimatedStats] = useState({
    accuracy: 0,
    clients: 0,
    dataPoints: 0,
    satisfaction: 0
  });

  const growthData = [
    { month: 'Jan', tech: 85, finance: 72, healthcare: 68, manufacturing: 78, retail: 65 },
    { month: 'Feb', tech: 88, finance: 75, healthcare: 70, manufacturing: 80, retail: 67 },
    { month: 'Mar', tech: 92, finance: 78, healthcare: 73, manufacturing: 82, retail: 69 },
    { month: 'Apr', tech: 95, finance: 80, healthcare: 75, manufacturing: 85, retail: 71 },
    { month: 'May', tech: 98, finance: 83, healthcare: 78, manufacturing: 87, retail: 74 },
    { month: 'Jun', tech: 102, finance: 85, healthcare: 80, manufacturing: 90, retail: 76 }
  ];

  const revenueData = [
    { month: 'Jan', revenue: 120000, deals: 45 },
    { month: 'Feb', revenue: 135000, deals: 52 },
    { month: 'Mar', revenue: 148000, deals: 58 },
    { month: 'Apr', revenue: 162000, deals: 63 },
    { month: 'May', revenue: 178000, deals: 71 },
    { month: 'Jun', revenue: 195000, deals: 78 }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats({
        accuracy: 95,
        clients: 500,
        dataPoints: 2.5,
        satisfaction: 4.9
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const acquisitionData = [
    { name: 'Tech SaaS', synergy: 85, growth: 65, size: 2400, potential: 'High' },
    { name: 'Fintech', synergy: 92, growth: 78, size: 3200, potential: 'Very High' },
    { name: 'Health IT', synergy: 78, growth: 55, size: 1800, potential: 'Medium' },
    { name: 'Cybersecurity', synergy: 95, growth: 82, size: 2800, potential: 'Very High' },
    { name: 'E-commerce', synergy: 70, growth: 48, size: 1400, potential: 'Low' },
    { name: 'AI/ML', synergy: 88, growth: 85, size: 2600, potential: 'High' }
  ];

  const marketShareData = [
    { name: 'Our Company', value: 32, color: '#058f8c' },
    { name: 'Competitor A', value: 28, color: '#0891b2' },
    { name: 'Competitor B', value: 22, color: '#0284c7' },
    { name: 'Others', value: 18, color: '#94a3b8' }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900 mb-2">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const metrics = [
    { label: 'Data Accuracy', value: '95%', trend: '+2.3%', icon: Activity, color: 'from-emerald-500 to-teal-600' },
    { label: 'Companies Tracked', value: '3.2M', trend: '+12.4%', icon: Users, color: 'from-blue-500 to-cyan-600' },
    { label: 'Faster Decisions', value: '42%', trend: '+5.1%', icon: TrendingUp, color: 'from-purple-500 to-indigo-600' },
    { label: 'Average ROI', value: '8.5x', trend: '+15.2%', icon: Eye, color: 'from-amber-500 to-orange-600' }
  ];
  
  const services = {
    managedIT: {
      icon: Server,
      title: "Managed IT Services",
      description: "Comprehensive IT solutions tailored to meet the unique needs of your business with 95% accuracy in our data",
      features: [
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Network Monitoring and Management",
          description: "Proactively monitor and manage your network infrastructure to ensure optimal performance and minimize downtime with our verified MSP partners."
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Data Backup and Disaster Recovery",
          description: "Implement robust backup solutions and disaster recovery plans to protect your critical data and ensure business continuity with top MSSPs."
        },
        {
          icon: <Cloud className="w-6 h-6" />,
          title: "Cloud Solutions",
          content: "Migrate, manage, and optimize your cloud infrastructure to enhance scalability, flexibility, and cost-efficiency with our cloud service providers.",
          link: "/cloud-computing-services"
        },
        {
          icon: <Headphones className="w-6 h-6" />,
          title: "Help Desk Support",
          description: "Provide timely and effective support to resolve IT issues and minimize disruptions to your operations with our 24/7 MSP support."
        }
      ],
      cta: "Learn More About Managed IT"
    },
    managedSecurity: {
      icon: Shield,
      title: "Managed Security Services",
      description: "Comprehensive security solutions to safeguard your organization from evolving cyber threats with verified MSSPs",
      features: [
        {
          icon: <Target className="w-6 h-6" />,
          title: "24/7 Security Monitoring",
          description: "Continuously monitor your systems for potential security incidents and respond promptly to mitigate risks with top managed security service providers."
        },
        {
          icon: <Zap className="w-6 h-6" />,
          title: "Threat Detection and Response",
          description: "Utilize advanced tools and expertise to detect and respond to security threats in real-time with our cybersecurity partners."
        },
        {
          icon: <BarChart3 className="w-6 h-6" />,
          title: "Vulnerability Management",
          description: "Identify and remediate vulnerabilities in your systems to prevent potential exploits with our penetration testing services.",
          link: "/penetration-testing"
        },
        {
          icon: <BookOpen className="w-6 h-6" />,
          title: "Compliance Assistance",
          description: "Help you navigate and comply with industry-specific regulations and standards to protect sensitive data and maintain trust with our compliance solutions.",
          link: "/compliance-risk-management"
        }
      ],
      cta: "Explore Security Solutions"
    },
    consulting: {
      icon: Users,
      title: "IT Consulting and Strategy",
      description: "Expert guidance to develop and implement IT strategies that align with your business objectives and growth plans",
      features: [
        {
          icon: <BarChart3 className="w-6 h-6" />,
          title: "IT Assessments",
          description: "Evaluate your current IT infrastructure and identify areas for improvement with our comprehensive IT assessments."
        },
        {
          icon: <Lightbulb className="w-6 h-6" />,
          title: "Technology Roadmaps",
          description: "Develop strategic plans to guide your technology investments and initiatives with our expert technology roadmaps."
        },
        {
          icon: <Globe className="w-6 h-6" />,
          title: "Vendor Management",
          description: "Assist in selecting and managing technology vendors to ensure optimal performance and value with our vendor management services."
        },
        {
          icon: <Target className="w-6 h-6" />,
          title: "Project Management",
          description: "Oversee the implementation of IT projects to ensure they are completed on time and within budget with our project management expertise."
        }
      ],
      cta: "Get Consulting Expertise"
    },
    contactData: {
      icon: Database,
      title: "Contact Data Services",
      description: "Precision-targeted B2B contacts for your ideal buyers with verified information and high deliverability from our 3.2M company database",
      features: [
        {
          icon: <Users className="w-6 h-6" />,
          title: "Curated Decision-Maker Lists",
          description: "Access MSPs, MSSPs, cybersecurity and other industry decision-makers with verified contact information from our 95% accurate database."
        },
        {
          icon: <Mail className="w-6 h-6" />,
          title: "95% Email Deliverability",
          description: "Verified direct emails with exceptional deliverability rates to ensure your messages reach the right people with our email verification system."
        },
        {
          icon: <Filter className="w-6 h-6" />,
          title: "Advanced Filtering Options",
          description: "Filter contacts by company size, technologies used, and geographic focus for precise targeting with our advanced filtering tools."
        },
        {
          icon: <Target className="w-6 h-6" />,
          title: "Purchasing Influence Data",
          description: "Identify contacts with actual purchasing power and decision-making authority in their organizations with our influence data."
        }
      ],
      cta: "Get Contact Data"
    },
    technologyUsers: {
      icon: Monitor,
      title: "Technology User Intelligence",
      description: "Find companies using specific tech solutions with detailed IT stack intelligence for targeted outreach and better conversion rates",
      features: [
        {
          icon: <Cloud className="w-6 h-6" />,
          title: "Cloud Platform Users",
          description: "Identify companies using AWS, Azure, Google Cloud and other major cloud platforms with decision-maker contacts from our cloud database.",
          link: "/cloud-computing-services"
        },
        {
          icon: <Database className="w-6 h-6" />,
          title: "Enterprise Software Users",
          description: "Find organizations using SAP, ADP, Salesforce, and other enterprise solutions for targeted campaigns with our enterprise software data."
        },
        {
          icon: <Cpu className="w-6 h-6" />,
          title: "IT Stack Intelligence",
          description: "Comprehensive technology stack data to understand prospects' current infrastructure and needs with our IT stack intelligence."
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Technology Adoption Insights",
          description: "Track technology adoption patterns and identify companies ready for upgrades or migrations with our adoption insights."
        }
      ],
      cta: "Explore Tech Users"
    },
    dataReports: {
      icon: FileText,
      title: "Data Reports & Intelligence",
      description: "Actionable market intelligence with industry trends, acquisition targets, and tech adoption forecasts from our research team",
      features: [
        {
          icon: <BarChart3 className="w-6 h-6" />,
          title: "MSP Industry Trends",
          description: "Comprehensive reports on MSP market trends, growth opportunities, and competitive landscape analysis with our MSP industry reports.",
          link: "/managed-service-providers"
        },
        {
          icon: <Building className="w-6 h-6" />,
          title: "Acquisition Target Intelligence",
          description: "Identify potential acquisition targets with detailed financial and operational insights for strategic planning with our acquisition intelligence."
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Cybersecurity Vendor Landscapes",
          description: "Detailed analysis of cybersecurity vendors, market positioning, and competitive intelligence reports with our cybersecurity landscape reports.",
          link: "/managed-security-service-providers"
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Tech Adoption Benchmarks",
          description: "Industry benchmarks and forecasts for technology adoption across different sectors and company sizes with our adoption benchmarks."
        }
      ],
      cta: "Access Reports"
    }
  }; 


  const whyChooseUs = [
    {
      icon: <Award className="w-10 h-10" />,
      title: "Expertise",
      description: "Our team comprises seasoned professionals with extensive experience in IT and security services, verified through our rigorous MSP/MSSP vetting process."
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Tailored Solutions",
      description: "We customize our services to meet the specific needs and goals of your business, connecting you with the right MSPs and MSSPs near you."
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Proactive Approach",
      description: "We focus on preventing issues before they arise to minimize disruptions and downtime, ensuring your business operations run smoothly."
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Customer-Centric",
      description: "Your satisfaction is our priority, and we strive to exceed your expectations in every engagement with our 98% client retention rate."
    }
  ];

  const testimonials = [
    {
      company: "Bain Capital",
      role: "VP of Business Development",
      quote:
        "IntentWire helped us scale as a Managed Service Provider by identifying buying signals early. We reached prospects 2–3 months sooner and closed 40% more deals using intent data – making IntentWire a critical part of our managed service providers toolkit.",
      rating: 5,
      avatar: "/serviceImage/testimonials1.webp",
    },
    {
      company: "McKinsey & Company",
      role: "Senior Partner",
      quote:
        "Before IntentWire, we struggled with targeting the right audience. Their platform transformed how Managed security service providers approach demand generation. We saw an 8X CTR boost and tripled our SQLs by focusing on accounts showing active security-related intent.",
      rating: 5,
      avatar: "/serviceImage/testimonials2.webp",
    },
    {
      company: "Stax Payments",
      role: "Head of Growth",
      quote:
        "As a Managed security service provider, speed and precision matter. IntentWire syncs perfectly with our Salesforce workflows, giving our SDRs real-time data on companies searching for managed security service providers. It's a game-changer for outbound efficiency.",
      rating: 5,
      avatar: "/serviceImage/testimonials3.webp",
    },
  ];

  const comparisonData = [
    { feature: "Data Accuracy", generic: "60-70%", ours: "95%", advantage: "high" },
    { feature: "Technographics", generic: "Basic", ours: "Advanced AI-Driven", advantage: "high" },
    { feature: "Real-time Updates", generic: "Monthly", ours: "Live Feeds", advantage: "high" },
    { feature: "Compliance", generic: "Self-Reported", ours: "Verified & Audited", advantage: "high" },
    { feature: "Custom Fields", generic: "5-10", ours: "100+", advantage: "medium" },
    { feature: "API Integration", generic: "Limited", ours: "Full CRM Sync", advantage: "high" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#058f8c] via-[#4fd1c7] to-[#4fd1c7] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Trusted by 500+ Enterprise Clients
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
             Empowering Your Business
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-blue-100">
            Comprehensive Managed IT and Security Solutions for businesses across the USA, Europe, Australia, and Canada
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <NextLink href="/contact" className="bg-white text-[#058f8c] px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl">
              Request a Consultation
            </NextLink>
            <NextLink href="#services" className="border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300">
              View All Services
            </NextLink>
          </div>
        </div>
      </section>

      {/* About IntentWire Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <CheckCircle className="w-4 h-4 mr-2" />
                Since 2021
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Your Strategic MSP & MSSP Technology Partner
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At IntentWire, we specialize in connecting businesses with premier Managed Service Providers and Managed Security Service Providers. Our comprehensive database serves as the critical link between organizations seeking top MSP and MSSP partnerships and verified IT solution providers across North America, Europe, and Australia.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                With over 3.2 million companies in our database and a 95% data accuracy rate, we help businesses make informed decisions about their technology partnerships. Our platform has empowered over 1,200 businesses to streamline their technology procurement process.
              </p>
              <div className="flex flex-wrap gap-4">
                <NextLink href="/about" className="flex items-center px-6 py-3 bg-[#058f8c] text-white rounded-lg font-medium hover:bg-[#047a77] transition-colors">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </NextLink>
                <NextLink href="/managed-service-providers" className="flex items-center px-6 py-3 border border-[#058f8c] text-[#058f8c] rounded-lg font-medium hover:bg-[#058f8c]/5 transition-colors">
                  Explore MSPs
                  <LinkIcon className="ml-2 h-4 w-4" />
                </NextLink>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-[#058f8c] to-[#4fd1c7] rounded-2xl p-6 text-white">
                <div className="text-3xl font-bold mb-2">3.2M+</div>
                <div className="text-white/90">Companies Tracked</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="text-3xl font-bold text-[#058f8c] mb-2">95%</div>
                <div className="text-gray-600">Data Accuracy</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="text-3xl font-bold text-[#058f8c] mb-2">500+</div>
                <div className="text-gray-600">Enterprise Clients</div>
              </div>
              <div className="bg-gradient-to-br from-[#058f8c] to-[#4fd1c7] rounded-2xl p-6 text-white">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-white/90">Support Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
  <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Comprehensive IT and Data Solutions
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Our services are designed to enhance your organizations efficiency, security, and growth by leveraging the latest technologies and industry best practices.
      </p>
    </div>

    {/* Service Navigation */}
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {Object.entries(services).map(([key, service]) => {
        const Icon = service.icon;
        return (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`flex items-center px-6 py-3 rounded-xl cursor-pointer font-semibold transition-all duration-300 ${
              activeTab === key
                ? 'bg-[#058f8c] text-white shadow-lg transform scale-105'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 hover:border-[#058f8c] hover:text-[#058f8c]'
            }`}
            aria-label={`View ${service.title} services`}
          >
            <Icon className="w-5 h-5 mr-2" />
            <span className="hidden sm:inline">{service.title}</span>
            <span className="sm:hidden">{service.title.split(' ')[0]}</span>
          </button>
        );
      })}
    </div>

    {/* Service Details Panel */}
    <div className="bg-[#f9fafb] rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
      <div className="p-8 lg:p-12">
        {/* Service Overview */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            {React.createElement(services[activeTab].icon, {
              className: "h-16 w-16 text-[#058f8c] mx-auto"
            })}
          </div>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {services[activeTab].title}
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {services[activeTab].description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services[activeTab].features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-start group hover:bg-gray-50 p-6 rounded-xl transition-all duration-300 border border-transparent hover:border-gray-200"
            >
              <div className="bg-gradient-to-br from-[#058f8c]/10 to-[#4fd1c7]/10 p-3 rounded-xl mr-4 mt-1 group-hover:shadow-md transition-all duration-300">
                <div className="text-[#058f8c]">
                  {feature.icon}
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#058f8c] transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed mb-3">
                  {feature.description}
                </p>
                {feature.link && (
                  <NextLink 
                    href={feature.link} 
                    className="inline-flex items-center text-[#058f8c] font-medium hover:underline"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </NextLink>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <NextLink 
            href="/contact"
            className="bg-gradient-to-r from-[#058f8c] to-[#4fd1c7] hover:from-[#047a77] hover:to-[#45c4bb] text-white px-10 py-4 cursor-pointer rounded-xl font-semibold transition-all duration-300 flex items-center justify-center mx-auto group shadow-lg hover:shadow-xl transform hover:scale-105"
            aria-label={`Learn more about ${services[activeTab].title}`}
          >
            {services[activeTab].cta}
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
          </NextLink>
        </div>
      </div>
    </div>

    {/* Service Indicator */}
    <div className="flex justify-center mt-8 space-x-2">
      {Object.keys(services).map((key) => (
        <button
          key={key}
          onClick={() => setActiveTab(key)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            activeTab === key ? 'bg-[#058f8c] w-8' : 'bg-gray-300 hover:bg-gray-400'
          }`}
          aria-label={`View ${services[key].title} services`}
        />
      ))}
    </div>
  </div>
</section>

      {/* Analytics Dashboard Section */}
      <section className="py-14 bg-gray-50 relative overflow-hidden">
        <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#058f8c] to-cyan-600 rounded-full text-white text-sm font-medium mb-4">
              <BarChart3 className="w-4 h-4 mr-2" />
              Real-time Analytics
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
              Actionable Intelligence Dashboard
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform raw data into strategic insights with our comprehensive analytics platform designed for modern B2B decision makers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${metric.color}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                      {metric.trend}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-gray-900">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                  <TrendingUp className="w-8 h-8 mr-3 text-[#058f8c]" />
                  Growth Analytics
                </h3>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setActiveChart('growth')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeChart === 'growth' 
                        ? 'bg-[#058f8c] text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Industry Growth
                  </button>
                  <button 
                    onClick={() => setActiveChart('revenue')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeChart === 'revenue' 
                        ? 'bg-[#058f8c] text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Revenue
                  </button>
                </div>
              </div>
              
              <div className="h-80 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  {activeChart === 'growth' ? (
                    <BarChart data={growthData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="month" stroke="#6b7280" />
                      <YAxis stroke="#6b7280" />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="tech" fill="#058f8c" radius={4} />
                      <Bar dataKey="finance" fill="#0891b2" radius={4} />
                      <Bar dataKey="healthcare" fill="#75dad2" radius={4} />
                      <Bar dataKey="manufacturing" fill="#059669" radius={4} />
                      <Bar dataKey="retail" fill="#d97706" radius={4} />
                    </BarChart>
                  ) : (
                    <LineChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="month" stroke="#6b7280" />
                      <YAxis stroke="#6b7280" />
                      <Tooltip content={<CustomTooltip />} />
                      <Line type="monotone" dataKey="revenue" stroke="#058f8c" strokeWidth={3} dot={{ fill: '#058f8c', strokeWidth: 2, r: 6 }} />
                      <Line type="monotone" dataKey="deals" stroke="#0891b2" strokeWidth={3} dot={{ fill: '#0891b2', strokeWidth: 2, r: 6 }} />
                    </LineChart>
                  )}
                </ResponsiveContainer>
              </div>
             
              <div className="flex flex-wrap gap-4 justify-center">
                {activeChart === 'growth' ? (
                  <>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-[#058f8c]"></div>
                      <span className="text-sm text-gray-600">Technology</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-[#0891b2]"></div>
                      <span className="text-sm text-gray-600">Finance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-[#75dad2]"></div>
                      <span className="text-sm text-gray-600">Healthcare</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-[#059669]"></div>
                      <span className="text-sm text-gray-600">Manufacturing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-[#d97706]"></div>
                      <span className="text-sm text-gray-600">Retail</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-[#058f8c]"></div>
                      <span className="text-sm text-gray-600">Revenue ($)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-[#0891b2]"></div>
                      <span className="text-sm text-gray-600">Deals Closed</span>
                    </div>
                  </>
                )}
              </div>
            </div>
           
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                  <Target className="w-8 h-8 mr-3 text-[#058f8c]" />
                  Acquisition Opportunities
                </h3>
                
                <div className="h-64 mb-6">
                  <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart data={acquisitionData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis 
                        type="number" 
                        dataKey="synergy" 
                        name="Synergy Score"
                        domain={[60, 100]}
                        stroke="#6b7280"
                      />
                      <YAxis 
                        type="number" 
                        dataKey="growth" 
                        name="Growth Rate"
                        domain={[40, 90]}
                        stroke="#6b7280"
                      />
                      <Tooltip 
                        cursor={{ strokeDasharray: '3 3' }}
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            const data = payload[0].payload;
                            return (
                              <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
                                <p className="font-semibold text-gray-900 mb-2">{data.name}</p>
                                <p className="text-sm text-gray-600">Synergy Score: {data.synergy}</p>
                                <p className="text-sm text-gray-600">Growth Rate: {data.growth}%</p>
                                <p className="text-sm font-medium text-[#058f8c]">Potential: {data.potential}</p>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Scatter 
                        dataKey="size" 
                        fill="#058f8c"
                        fillOpacity={0.8}
                        stroke="#045f5e"
                        strokeWidth={2}
                      />
                    </ScatterChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Low Synergy → High Synergy</span>
                  <span>Low Growth → High Growth</span>
                </div>
              </div>
                        
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Market Share Analysis</h3>
                
                <div className="flex items-center justify-center">
                  <div className="h-48 w-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={marketShareData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={90}
                          paddingAngle={2}
                          dataKey="value"
                        >
                          {marketShareData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip 
                          content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                              return (
                                <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
                                  <p className="font-medium">{payload[0].name}</p>
                                  <p className="text-sm text-gray-600">{payload[0].value}%</p>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="ml-8 space-y-3">
                    {marketShareData.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div 
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span className="text-sm font-medium text-gray-700">{item.name}</span>
                        <span className="text-sm text-gray-500">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-10 bg-gray-50">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Industry Leaders Choose Us
            </h2>
            <p className="text-xl text-gray-600">
              See how we outperform traditional data providers across key metrics
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-[#058f8c] to-[#4fd1c7] px-8 py-6">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <BarChart3 className="w-8 h-8 mr-3" />
                Competitive Analysis
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-8 py-6 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                      Capability
                    </th>
                    <th className="px-8 py-6 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                      Generic Providers
                    </th>
                    <th className="px-8 py-6 text-left text-sm font-bold text-[#058f8c] uppercase tracking-wider">
                      Our Platform
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-8 py-6 text-sm font-semibold text-gray-900">
                        {row.feature}
                      </td>
                      <td className="px-8 py-6 text-sm text-gray-500 flex items-center">
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs mr-2">❌</span>
                        {row.generic}
                      </td>
                      <td className="px-8 py-6 text-sm text-[#058f8c] font-bold">
                        <div className="flex items-center">
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs mr-3">✅</span>
                          {row.ours}
                          {row.advantage === 'high' && (
                            <span className="ml-3 bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs">
                              Game Changer
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-14 bg-gray-50">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose IntentWire?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advantages of partnering with our team of IT and security experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="bg-[#058f8c]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <div className="text-[#058f8c]">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-14 bg-white">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600">
              See what our clients say about our services
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 rounded-full mb-6 transition-transform duration-300">
                  <svg className="h-14 w-20 text-[#2ea5a0]" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <blockquote className="text-gray-700 text-lg font-medium mb-6 leading-relaxed">
                  {testimonial.quote}
                </blockquote>
                <div className="flex items-center">
                  <Image
                    width={40}
                    height={40}
                    src={testimonial.avatar}
                    alt={`${testimonial.company} representative`}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.company}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#058f8c] via-[#4fd1c7] to-[#4fd1c7]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Enhance Your IT and Security Strategies?
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Contact us today to learn how IntentWire can help your business achieve its objectives with confidence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <NextLink href="/contact" className="bg-white text-[#058f8c] px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl">
              Schedule a Consultation
            </NextLink>
            <NextLink href="/managed-service-providers" className="border-2 border-white/30 backdrop-blur-sm text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
              Explore Our Solutions
            </NextLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;