import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#1a2533] mt-5" >
      <footer className="text-white py-16 px-6">
        <div className="w-full mx-auto max-w-7xl">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6 flex justify-center lg:justify-start">
                <Image
                  src="/images/footer.png"
                  width={150}
                  height={150}
                  alt="Brand Logo"
                  className="max-w-full h-auto object-contain rounded-lg"
                  priority
                  unoptimized
                />
              </div>

              <p className="text-gray-300 text-base leading-relaxed font-light text-center lg:text-left">
                Join thousands of businesses using our 98% accurate B2B data and verified MSP/MSSP suppliers to boost growth. Start now!
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white border-b border-gray-500 pb-2">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200 text-base font-light">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-300 hover:text-white transition-colors duration-200 text-base font-light">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors duration-200 text-base font-light">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200 text-base font-light">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/term-policies" className="text-gray-300 hover:text-white transition-colors duration-200 text-base font-light">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white border-b border-gray-500 pb-2">
                Community
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/faq" className="text-gray-300 hover:text-white transition-colors duration-200 text-base font-light">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/strategies" className="text-gray-300 hover:text-white transition-colors duration-200 text-base font-light">
                    Strategy
                  </Link>
                </li>
                <li>
                  <Link href="/history" className="text-gray-300 hover:text-white transition-colors duration-200 text-base font-light">
                    History
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-base font-light"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/msp"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-base font-light"
                  >
                    Top Managed Service Providers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Popular Categories */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white border-b border-gray-500 pb-2">
                Popular Categories
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/managed-service-providers" className="text-gray-300 hover:text-white transition-colors duration-200 text-base font-light">
                    Managed Service Providers
                  </Link>
                </li>
                <li>
                  <Link href="/managed-security-service-providers" className="text-gray-300 hover:text-white transition-colors duration-200 text-base font-light">
                    Managed Security Service Providers
                  </Link>
                </li>
                <li>
                  <Link href="/network-security" className="text-gray-300 hover:text-white transition-colors duration-200 text-base font-light">
                  Network Security
                  </Link>
                </li>
                <li>
                  <Link href="/data-backup-recovery" className="text-gray-300 hover:text-white transition-colors duration-200 text-base font-light">
                  Data Backup & Recovery
                  </Link>
                </li>
                <li>
                  <Link href="/penetration-testing" className="text-gray-300 hover:text-white transition-colors duration-200 text-base font-light">
                  Penetration Testing
                  </Link>
                </li>
              </ul>
            </div>

          
          </div>

          {/* Social Media */}
          <div className="border-t border-gray-600 pt-10 mt-10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-6 mb-4 md:mb-0">
                <Link href="https://www.facebook.com/profile.php?id=61572572363704" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Image
                    src="/images/faceebook.png"
                    width={30}
                    height={30}
                    alt="Facebook"
                    className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity"
                  />
                </Link>
                
                <Link href="https://www.linkedin.com/company/intentwire/posts/?feedView=all" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Image
                    src="/images/linkedin.png"
                    width={30}
                    height={30}
                    alt="LinkedIn"
                    className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity"
                  />
                </Link>
              </div>
              
              {/* Copyright */}
              <div className="text-center text-base text-gray-400 font-light">
                © {new Date().getFullYear()} Demand10. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;