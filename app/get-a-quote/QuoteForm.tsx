"use client";

import { useRouter } from "next/navigation";
import { FileText, User, Mail, Phone, ArrowRight } from "lucide-react";
import siteData from "../../site.json";

export default function QuoteForm() {
  const { form } = siteData.getAQuotePage;
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/thank-you");
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden">
      {/* Top Navy Header Banner */}
      <div className="bg-dark text-white p-6 sm:p-7 flex items-center gap-4 border-b-4 border-primary">
        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
          <FileText size={24} className="text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold heading-font">{form.title}</h3>
          <p className="text-gray-300 text-xs mt-1 leading-relaxed">
            {form.subtitle}
          </p>
        </div>
      </div>

      {/* Form Content */}
      <div className="p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                {form.fields.nameLabel} <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <User size={15} />
                </div>
                <input
                  type="text"
                  required
                  placeholder={form.fields.namePlaceholder}
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-xs text-dark focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                {form.fields.emailLabel} <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Mail size={15} />
                </div>
                <input
                  type="email"
                  required
                  placeholder={form.fields.emailPlaceholder}
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-xs text-dark focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                {form.fields.phoneLabel} <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Phone size={15} />
                </div>
                <input
                  type="tel"
                  required
                  placeholder={form.fields.phonePlaceholder}
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-xs text-dark focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                {form.fields.messageLabel} <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={4}
                required
                placeholder={form.fields.messagePlaceholder}
                className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-lg text-xs text-dark focus:outline-none focus:border-primary transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              {form.submitText} <ArrowRight size={14} />
            </button>
        </form>
      </div>
    </div>
  );
}
