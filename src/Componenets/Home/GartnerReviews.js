import { Users, CheckSquare, Unlock } from "lucide-react";

export default function GartnerReviews() {
  return (
    <div className="w-full bg-white py-20 px-6 relative overflow-hidden">
      {/* Decorative Circle */}
      <div className="absolute bottom-0 right-0 w-72 h-72">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full opacity-5"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#265ba3"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#265ba3] leading-snug">
            770,000+ Gartner-verified Ratings & Reviews
          </h1>
          <p className="text-lg text-gray-600 mt-5 max-w-2xl mx-auto">
            Trusted insights from real users to help you make smarter
            technology decisions with confidence.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Card Template */}
          {[
            {
              icon: <Unlock className="w-10 h-10 text-[#265ba3]" />,
              title: "Gain Actionable Insights",
              desc: "Access real-time peer insights on cutting-edge technology and market trends that impact your business, helping you stay informed and stay ahead.",
            },
            {
              icon: <CheckSquare className="w-10 h-10 text-[#265ba3]" />,
              title: "Compare Options",
              desc: "Evaluate vendors and products with verified peer ratings and reviews, side-by-side comparisons, and Voice of Customer reports to move forward with clarity.",
            },
            {
              icon: <Users className="w-10 h-10 text-[#265ba3]" />,
              title: "Trusted Reviews",
              desc: "Get valuable peer perspectives when and where you need them – seamlessly integrated into Gartner.com, Magic Quadrants, Peer Finder and more.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 text-center border border-gray-200 relative overflow-hidden group 
              hover:border-[#265ba3]/40 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center 
                  bg-gradient-to-br from-blue-50 to-white border border-gray-100 shadow-sm 
                  group-hover:from-[#f0f7ff] group-hover:to-[#fff7eb] transition-all duration-300"
                >
                  {card.icon}
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {card.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
