import { FaSearch, FaUserLock, FaStar } from 'react-icons/fa';

export default function HowItWorks() {
  return (
    <div className="bg-white  relative overflow-hidden">
      
      
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-4">
          How It Works
        </h2>
        <p className="text-center text-[#4897de] mb-12 max-w-2xl mx-auto text-lg">
          Writing a review is simple and straightforward. Follow these easy steps to share your experience.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 text-center border border-black/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-20 h-20 bg-gradient-to-br from-[#4897de] to-[#0249aa] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <FaSearch className="text-white text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Search Company</h3>
            <p className="text-[#4897de] mb-4">
              Find the company you want to review using our search feature
            </p>
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-[#6dace5] font-bold">
              1
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 text-center border border-black/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-20 h-20 bg-gradient-to-br from-[#4897de] to-[#0249aa] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <FaUserLock className="text-white text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Sign In</h3>
            <p className="text-[#4897de] mb-4">
              Authenticate to verify your identity and prevent spam reviews
            </p>
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-[#6dace5] font-bold">
              2
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 text-center border border-black/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-20 h-20 bg-gradient-to-br from-[#4897de] to-[#0249aa] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <FaStar className="text-white text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Write Review</h3>
            <p className="text-[#4897de] mb-4">
              Share your detailed experience with the company you worked with
            </p>
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-[#6dace5] font-bold">
              3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}