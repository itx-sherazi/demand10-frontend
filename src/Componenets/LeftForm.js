"use client";
import { DataSetRequest } from "@/services/api";
import React, { useState } from "react";
import { toast } from "react-toastify";

const LeftForm = ({ productData }) => {
  const price = productData?.price || [];
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      fullName,
      email,
      phone,
      message,
      productTitle: productData?.title || "",
    };

    try {
      const response = await DataSetRequest(data);

      if (response.ok) {
        toast.success("Successfully submitted!");
        setFullName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setShowPopup(true)
      } else {
        toast.error("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-2xl p-8 w-full mx-auto"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-[#6fe7bb] font-bold text-2xl">
            <div className="w-6 h-6 bg-[#6fe7bb] rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">$</span>
            </div>
            USD {price}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your business email"
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Whatsapp Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Your phone number"
              required
              disabled={isLoading}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
              rows="4"
              placeholder="Tell us about your requirements or any specific questions..."
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 mt-6 flex items-center justify-center gap-2 ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#6fe7bb] hover:bg-[#5dd4a8] cursor-pointer"
            } text-white`}
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Processing...</span>
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>
{showPopup && (
  <div className="fixed inset-0 bg-black/30  bg-opacity-50 flex items-start justify-center pt-46 z-50">
    <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl text-center relative transform transition-all duration-300 scale-95 animate-scaleIn">
      <button
        className="absolute top-4  cursor-pointer right-4 text-gray-400 hover:text-gray-600 transition-colors"
        onClick={() => setShowPopup(false)}
        aria-label="Close popup"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <div className="mb-4">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-gray-800">Thanks for submitting!</h2>
      </div>
      
      <div className="mb-5">
        <p className="text-gray-600 mb-3">
          Please check your <strong className="text-emerald-600">email</strong> and also your <strong className="text-emerald-600">spam/junk folder</strong>.
        </p>
        <p className="text-gray-600">
          Make sure to reply to our message to complete the process.
        </p>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-3 mb-5">
        <p className="text-sm text-gray-600">
          You&apos;ve shown interest in: <strong className="text-gray-800">{productData?.title}</strong>
        </p>
        <p className="text-sm text-gray-600 mt-1">
          We consider you a <span className="text-emerald-600 font-medium">trusted lead</span> for this category.
        </p>
      </div>
      
      <button
        className="w-full cursor-pointer bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-opacity-50"
        onClick={() => setShowPopup(false)}
      >
        Got it!
      </button>
    </div>
  </div>
)}
    </div>
  );
};

export default LeftForm;
