import { Users, CheckSquare, Unlock } from 'lucide-react';

export default function GartnerReviews() {
  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 relative overflow-hidden">
      {/* Enhanced Decorative SVG Background Elements */}
      {/* Top Left Decorative Element */}
      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 opacity-5">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="200" fill="#314158" fillOpacity="0.1"/>
          <circle cx="200" cy="200" r="160" fill="#314158" fillOpacity="0.15"/>
          <circle cx="200" cy="200" r="120" fill="#314158" fillOpacity="0.2"/>
          <circle cx="200" cy="200" r="80" fill="#314158" fillOpacity="0.25"/>
          <circle cx="200" cy="200" r="40" fill="#314158" fillOpacity="0.3"/>
        </svg>
      </div>

      {/* Top Right Decorative Element */}
      <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 opacity-5">
        <svg width="250" height="250" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="125" cy="125" r="125" fill="#8d9fbe" fillOpacity="0.1"/>
          <circle cx="125" cy="125" r="100" fill="#8d9fbe" fillOpacity="0.15"/>
          <circle cx="125" cy="125" r="75" fill="#8d9fbe" fillOpacity="0.2"/>
          <circle cx="125" cy="125" r="50" fill="#8d9fbe" fillOpacity="0.25"/>
          <circle cx="125" cy="125" r="25" fill="#8d9fbe" fillOpacity="0.3"/>
        </svg>
      </div>

      {/* Bottom Right Decorative Element */}
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-10">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M150 0C232.843 0 300 67.157 300 150C300 232.843 232.843 300 150 300C67.157 300 0 232.843 0 150C0 67.157 67.157 0 150 0Z" fill="#314158"/>
          <path d="M150 40C210.751 40 260 89.249 260 150C260 210.751 210.751 260 150 260C89.249 260 40 210.751 40 150C40 89.249 89.249 40 150 40Z" fill="#8d9fbe"/>
          <path d="M150 80C183.137 80 210 106.863 210 140C210 173.137 183.137 200 150 200C116.863 200 90 173.137 90 140C90 106.863 116.863 80 150 80Z" fill="#ffffff"/>
        </svg>
      </div>

      {/* Bottom Left Decorative Element */}
      <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 opacity-5">
        <svg width="280" height="280" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="280" height="280" fill="#314158" fillOpacity="0.05"/>
          <path d="M0 0L280 280M280 0L0 280" stroke="#8d9fbe" strokeWidth="2"/>
          <circle cx="140" cy="140" r="80" fill="#314158" fillOpacity="0.1"/>
          <circle cx="140" cy="140" r="60" fill="#8d9fbe" fillOpacity="0.1"/>
          <circle cx="140" cy="140" r="40" fill="#314158" fillOpacity="0.1"/>
          <circle cx="140" cy="140" r="20" fill="#8d9fbe" fillOpacity="0.1"/>
        </svg>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-1/4 right-1/4 opacity-5">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="15" width="50" height="50" rx="8" transform="rotate(15 15 15)" fill="#314158"/>
        </svg>
      </div>

      <div className="absolute bottom-1/3 left-1/3 opacity-5">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="30,8 52,30 30,52 8,30" fill="#8d9fbe"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#314158] leading-tight">
            770,000+ Free Gartner-verified Ratings and Reviews
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Trusted insights from real users to help you make informed technology decisions
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Gain Actionable Insights */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group">
            {/* Enhanced Decorative SVG elements */}
            <div className="absolute top-0 left-0 w-32 h-32 rounded-full border-2 border-[#8d9fbe] opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full border-2 border-[#8d9fbe] opacity-20 translate-x-1/2 translate-y-1/2"></div>
            
            {/* Additional decorative elements */}
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#314158] opacity-5"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full bg-[#8d9fbe] opacity-10"></div>
            
            <div className="flex justify-center mb-6 relative z-10">
              <div className="w-24 h-24 bg-gradient-to-br from-[#314158] to-[#253347] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 transform group-hover:-translate-y-1">
                <Unlock className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight relative z-10">
              Gain Actionable Insights
            </h2>
            <p className="text-gray-600 text-base leading-relaxed font-normal relative z-10">
              Access real-time peer insights on cutting-edge technology and market trends that impact your business, helping you stay informed and stay ahead.
            </p>
          </div>

          {/* Card 2: Compare Options */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group">
            {/* Enhanced Decorative SVG elements */}
            <div className="absolute top-0 left-0 w-32 h-32 rounded-full border-2 border-[#8d9fbe] opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full border-2 border-[#8d9fbe] opacity-20 translate-x-1/2 translate-y-1/2"></div>
            
            {/* Additional decorative elements */}
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#314158] opacity-5"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full bg-[#8d9fbe] opacity-10"></div>
            
            <div className="flex justify-center mb-6 relative z-10">
              <div className="w-24 h-24 bg-gradient-to-br from-[#314158] to-[#253347] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 transform group-hover:-translate-y-1">
                <CheckSquare className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight relative z-10">
              Compare Options
            </h2>
            <p className="text-gray-600 text-base leading-relaxed font-normal relative z-10">
              Evaluate vendors and products with verified peer ratings and reviews, side by side comparisons, and Voice of Customer reports to move forward with confidence.
            </p>
          </div>

          {/* Card 3: Trusted Reviews */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group md:col-span-2 lg:col-span-1">
            {/* Enhanced Decorative SVG elements */}
            <div className="absolute top-0 left-0 w-32 h-32 rounded-full border-2 border-[#8d9fbe] opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full border-2 border-[#8d9fbe] opacity-20 translate-x-1/2 translate-y-1/2"></div>
            
            {/* Additional decorative elements */}
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#314158] opacity-5"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full bg-[#8d9fbe] opacity-10"></div>
            
            <div className="flex justify-center mb-6 relative z-10">
              <div className="w-24 h-24 bg-gradient-to-br from-[#314158] to-[#253347] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 transform group-hover:-translate-y-1">
                <Users className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight relative z-10">
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