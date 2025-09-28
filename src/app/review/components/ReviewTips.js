import { FaFileAlt, FaBalanceScale, FaList, FaShieldAlt } from 'react-icons/fa';

export default function ReviewTips() {
  const tips = [
    {
      id: 1,
      title: "Be Specific",
      description: "Include details about your experience, project scope, and outcomes. Specific examples make reviews more valuable.",
      icon: <FaFileAlt className="h-6 w-6" />
    },
    {
      id: 2,
      title: "Stay Objective",
      description: "Focus on facts and your actual experience rather than emotions. Balance positive and negative aspects.",
      icon: <FaBalanceScale className="h-6 w-6" />
    },
    {
      id: 3,
      title: "Include Key Details",
      description: "Mention project timeline, budget, communication quality, and any challenges faced during the engagement.",
      icon: <FaList className="h-6 w-6" />
    },
    {
      id: 4,
      title: "Be Honest",
      description: "Provide truthful feedback based on your experience. Honest reviews help both businesses and future clients.",
      icon: <FaShieldAlt className="h-6 w-6" />
    }
  ];

  return (
    <div className="bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] rounded-3xl p-8 md:p-12 border border-gray-200 relative overflow-hidden">
     
      
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-4">
          Tips for Writing a Helpful Review
        </h2>
        <p className="text-center text-[#4897de] mb-12 max-w-3xl mx-auto text-lg">
          Follow these guidelines to create meaningful reviews that benefit the community
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tips.map((tip) => (
            <div 
              key={tip.id} 
              className="bg-white rounded-2xl p-6 border border-black/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-[#4897de] to-[#0249aa] rounded-lg flex items-center justify-center mr-4 shadow-md">
                  <div className="text-white">
                    {tip.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">{tip.title}</h3>
                  <p className="text-[#4897de]">{tip.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}