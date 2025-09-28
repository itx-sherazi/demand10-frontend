import { FaShieldAlt, FaBolt, FaUsers, FaChartBar } from 'react-icons/fa';

export default function WhyReviewMatters() {
  return (
    <div className="bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] rounded-3xl p-8 md:p-12 border border-gray-200 relative overflow-hidden">
     
      
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-4">
          Why Your Review Matters
        </h2>
        <p className="text-center text-[#4897de] mb-12 max-w-3xl mx-auto text-lg">
          Your honest feedback helps businesses improve and helps others make informed decisions
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 text-center border border-black/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-[#4897de] to-[#0249aa] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <FaShieldAlt className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Build Trust</h3>
            <p className="text-[#4897de]">
              Verified reviews help establish credibility for businesses
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 text-center border border-black/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-[#4897de] to-[#0249aa] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <FaBolt className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Drive Growth</h3>
            <p className="text-[#4897de]">
              Positive reviews can significantly impact business growth
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 text-center border border-black/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-[#4897de] to-[#0249aa] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <FaUsers className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Community Impact</h3>
            <p className="text-[#4897de]">
              Your review helps build a stronger business community
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 text-center border border-black/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-[#4897de] to-[#0249aa] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <FaChartBar className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Data Insights</h3>
            <p className="text-[#4897de]">
              Reviews provide valuable insights for business improvement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}