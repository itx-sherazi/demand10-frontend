import { Users, CheckSquare, Unlock } from 'lucide-react';

export default function GartnerReviews() {
  return (
    <div className="w-full bg-gray-50 py-16 px-4 relative overflow-hidden">
     

      {/* Bottom Right Circle */}
      <div className="absolute bottom-0 right-0 w-64 h-64">
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-5">
          <circle cx="50" cy="50" r="40" stroke="#0249aa" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0249aa] leading-tight">
            770,000+ Free Gartner-verified Ratings and Reviews
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Trusted insights from real users to help you make informed technology decisions
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Gain Actionable Insights */}
          <div className="bg-white rounded-xl p-8 text-center border border-gray-200 relative overflow-hidden group hover:border-[#0249aa]/30 transition-all duration-300 shadow-sm hover:shadow-md">
            {/* Simplified Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 rounded-full border border-[#0249aa] opacity-5 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full border border-[#0249aa] opacity-5 translate-x-1/2 translate-y-1/2"></div>
            
            <div className="flex justify-center mb-6 relative z-10">
              <div className="w-20 h-20 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-[#0249aa]/10 transition-colors duration-300">
                <Unlock className="w-10 h-10 text-[#0249aa]" />
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-4 leading-tight relative z-10">
              Gain Actionable Insights
            </h2>
            <p className="text-gray-600 text-base leading-relaxed font-normal relative z-10">
              Access real-time peer insights on cutting-edge technology and market trends that impact your business, helping you stay informed and stay ahead.
            </p>
          </div>

          {/* Card 2: Compare Options */}
          <div className="bg-white rounded-xl p-8 text-center border border-gray-200 relative overflow-hidden group hover:border-[#0249aa]/30 transition-all duration-300 shadow-sm hover:shadow-md">
            {/* Simplified Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 rounded-full border border-[#0249aa] opacity-5 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full border border-[#0249aa] opacity-5 translate-x-1/2 translate-y-1/2"></div>
            
            <div className="flex justify-center mb-6 relative z-10">
              <div className="w-20 h-20 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-[#0249aa]/10 transition-colors duration-300">
                <CheckSquare className="w-10 h-10 text-[#0249aa]" />
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-4 leading-tight relative z-10">
              Compare Options
            </h2>
            <p className="text-gray-600 text-base leading-relaxed font-normal relative z-10">
              Evaluate vendors and products with verified peer ratings and reviews, side by side comparisons, and Voice of Customer reports to move forward with confidence.
            </p>
          </div>

          {/* Card 3: Trusted Reviews */}
          <div className="bg-white rounded-xl p-8 text-center border border-gray-200 relative overflow-hidden group hover:border-[#0249aa]/30 transition-all duration-300 shadow-sm hover:shadow-md">
            {/* Simplified Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 rounded-full border border-[#0249aa] opacity-5 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full border border-[#0249aa] opacity-5 translate-x-1/2 translate-y-1/2"></div>
            
            <div className="flex justify-center mb-6 relative z-10">
              <div className="w-20 h-20 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-[#0249aa]/10 transition-colors duration-300">
                <Users className="w-10 h-10 text-[#0249aa]" />
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-4 leading-tight relative z-10">
              Trusted Reviews
            </h2>
            <p className="text-gray-600 text-base leading-relaxed font-normal relative z-10">
              Get valuable peer perspectives when and where you need them - seamlessly integrated into Gartner.com, Magic Quadrants, Peer Finder and more.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}