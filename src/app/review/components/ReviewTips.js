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
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 opacity-10">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="150" r="150" fill="#314158" fillOpacity="0.1"/>
          <circle cx="150" cy="150" r="120" fill="#314158" fillOpacity="0.15"/>
          <circle cx="150" cy="150" r="90" fill="#314158" fillOpacity="0.2"/>
        </svg>
      </div>
      
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-10">
        <svg width="250" height="250" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M125 0C194.036 0 250 55.9644 250 125C250 194.036 194.036 250 125 250C55.9644 250 0 194.036 0 125C0 55.9644 55.9644 0 125 0Z" fill="#314158"/>
          <path d="M125 30C177.467 30 220 72.5329 220 125C220 177.467 177.467 220 125 220C72.5329 220 30 177.467 30 125C30 72.5329 72.5329 30 125 30Z" fill="#4ecfc5"/>
        </svg>
      </div>
      
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#314158] text-center mb-4">
          Tips for Writing a Helpful Review
        </h2>
        <p className="text-center text-[#253347] mb-12 max-w-3xl mx-auto text-lg">
          Follow these guidelines to create meaningful reviews that benefit the community
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tips.map((tip) => (
            <div 
              key={tip.id} 
              className="bg-white rounded-2xl p-6 border border-[#314158]/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-[#314158] to-[#253347] rounded-lg flex items-center justify-center mr-4 shadow-md">
                  <div className="text-white">
                    {tip.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#314158] mb-2">{tip.title}</h3>
                  <p className="text-[#253347]">{tip.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}