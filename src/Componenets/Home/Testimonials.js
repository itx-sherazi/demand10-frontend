'use client'
import { useState, useEffect } from 'react';

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      text: "I really appreciate how SaaSworthy simplifies complex information into something that's easy to understand. Their SW Score is well thought out and helps users like me make informed decisions without any hassle. Moreover, their Award-vertical options demonstrate how software compares to industry standards, which gives me confidence in my choices.",
      author: "Eli Bergman",
      role: "Editor & Research Specialist",
      image: "/eli-bergman.jpg"
    },
    {
      id: 2,
      text: "SaaSworthy has completely transformed how we evaluate software solutions. The depth of insights and the clarity of presentation make it an indispensable tool for our decision-making process. I particularly appreciate the detailed reviews that go beyond surface-level features.",
      author: "Jane Smith",
      role: "Product Manager",
      image: "/jane-smith.jpg"
    },
    {
      id: 3,
      text: "As a marketing director, I rely on data-driven insights to make critical decisions. SaaSworthy provides exactly that with their comprehensive scoring system and detailed analysis. The platform is intuitive, and the information is presented in a way that saves us countless hours of research.",
      author: "John Doe",
      role: "Marketing Director",
      image: "/john-doe.jpg"
    }
  ];

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Manual navigation functions
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className=" px-4">
      <div className="max-w-6xl mx-auto">
       

        {/* Testimonial Card */}
        <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-[#314158]"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#314158]/5"></div>
          <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-[#314158]/5"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            {/* Author Image */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <div className="absolute inset-0 bg-[#314158] flex items-center justify-center">
                    <span className="text-white text-5xl font-bold">{testimonials[currentSlide].author.charAt(0)}</span>
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-3 bg-[#314158] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg border-4 border-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="relative mb-8">
                <svg className="absolute -top-8 -left-4 w-20 h-20 text-[#314158]/10 transform -rotate-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 text-xl leading-relaxed italic relative z-10">
                  &quot;{testimonials[currentSlide].text}&quot;
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="font-bold text-gray-900 text-2xl mb-1">
                  {testimonials[currentSlide].author}
                </h3>
                <p className="text-[#314158] font-semibold text-lg">
                  {testimonials[currentSlide].role}
                </p>
                
                <div className="flex justify-center lg:justify-start mt-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-[#314158]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-12 gap-6">
          {/* Dots */}
          <div className="flex space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-[#314158] w-10' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex space-x-4">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow-md hover:bg-[#314158]/5 focus:outline-none transition-all duration-300 group"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 text-gray-700 group-hover:text-[#314158] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow-md hover:bg-[#314158]/5 focus:outline-none transition-all duration-300 group"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 text-gray-700 group-hover:text-[#314158] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;