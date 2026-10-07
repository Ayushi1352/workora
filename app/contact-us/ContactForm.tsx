"use client";

import { useState } from "react";
import { User, Phone, Mail, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";
import siteData from "../../site.json";

export default function ContactForm() {
  const { formSection } = siteData.contactUsPage;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#f8fafc] p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm">
      <div className="mb-6">
        <h5 className="text-primary font-semibold text-xs tracking-wider uppercase mb-2 flex items-center gap-2">
          <span className="w-6 h-[2px] bg-primary"></span>
          {formSection.sectionSubtitle}
        </h5>
        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3 leading-tight heading-font">
          Let's Start a <span className="text-primary">Conversation</span>
        </h2>
        <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
          {formSection.description}
        </p>
      </div>

      {submitted ? (
        <div className="py-12 text-center space-y-3 bg-white rounded-2xl border border-gray-100 p-6">
          <div className="w-14 h-14 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto">
            <CheckCircle2 size={32} />
          </div>
          <h4 className="text-lg font-bold text-dark heading-font">Message Sent!</h4>
          <p className="text-gray-600 text-xs max-w-xs mx-auto">
            Thank you for reaching out to Workora. Our team will review your message and reply promptly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <User size={15} />
              </div>
              <input
                type="text"
                required
                placeholder="First Name"
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-xs text-dark focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <User size={15} />
              </div>
              <input
                type="text"
                required
                placeholder="Last Name"
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-xs text-dark focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <Phone size={15} />
              </div>
              <input
                type="tel"
                required
                placeholder="Phone Number"
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-xs text-dark focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <Mail size={15} />
              </div>
              <input
                type="email"
                required
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-xs text-dark focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-3.5 left-3.5 pointer-events-none text-gray-400">
              <MessageSquare size={15} />
            </div>
            <textarea
              rows={4}
              required
              placeholder="Write Message..."
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-xs text-dark focus:outline-none focus:border-primary transition-colors resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-primary hover:bg-blue-700 text-white font-semibold py-3.5 px-7 rounded-xl text-xs transition-colors inline-flex items-center gap-2 shadow-sm"
          >
            {formSection.submitText} <ArrowRight size={14} />
          </button>
        </form>
      )}
    </div>
  );
}
