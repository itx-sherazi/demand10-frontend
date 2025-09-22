import { FaSearch, FaUserLock, FaStar } from 'react-icons/fa';

export default function HowItWorks() {
  return (
    <div className="bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] rounded-3xl shadow-xl p-8 md:p-12 border border-gray-200 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 opacity-10">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="150" r="150" fill="#1a365d" fillOpacity="0.1"/>
          <circle cx="150" cy="150" r="120" fill="#1a365d" fillOpacity="0.15"/>
          <circle cx="150" cy="150" r="90" fill="#1a365d" fillOpacity="0.2"/>
        </svg>
      </div>
      
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-10">
        <svg width="250" height="250" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M125 0C194.036 0 250 55.9644 250 125C250 194.036 194.036 250 125 250C55.9644 250 0 194.036 0 125C0 55.9644 55.9644 0 125 0Z" fill="#1a365d"/>
          <path d="M125 30C177.467 30 220 72.5329 220 125C220 177.467 177.467 220 125 220C72.5329 220 30 177.467 30 125C30 72.5329 72.5329 30 125 30Z" fill="#4ecfc5"/>
        </svg>
      </div>
      
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] text-center mb-4">
          How It Works
        </h2>
        <p className="text-center text-[#0249aa] mb-12 max-w-2xl mx-auto text-lg">
          Writing a review is simple and straightforward. Follow these easy steps to share your experience.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 text-center border border-[#1a365d]/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-20 h-20 bg-gradient-to-br from-[#1a365d] to-[#0249aa] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <FaSearch className="text-white text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-[#1a365d] mb-4">Search Company</h3>
            <p className="text-[#0249aa] mb-4">
              Find the company you want to review using our search feature
            </p>
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#4ecfc5]/20 text-[#4ecfc5] font-bold">
              1
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 text-center border border-[#1a365d]/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-20 h-20 bg-gradient-to-br from-[#1a365d] to-[#0249aa] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <FaUserLock className="text-white text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-[#1a365d] mb-4">Sign In</h3>
            <p className="text-[#0249aa] mb-4">
              Authenticate to verify your identity and prevent spam reviews
            </p>
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#4ecfc5]/20 text-[#4ecfc5] font-bold">
              2
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 text-center border border-[#1a365d]/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-20 h-20 bg-gradient-to-br from-[#1a365d] to-[#0249aa] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <FaStar className="text-white text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-[#1a365d] mb-4">Write Review</h3>
            <p className="text-[#0249aa] mb-4">
              Share your detailed experience with the company you worked with
            </p>
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#4ecfc5]/20 text-[#4ecfc5] font-bold">
              3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}