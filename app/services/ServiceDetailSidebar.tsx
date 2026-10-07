import Link from "next/link";
import { Phone, Mail, ArrowRight, ChevronRight } from "lucide-react";
import siteData from "../../site.json";

interface ServiceDetailSidebarProps {
  currentSlug?: string;
}

export default function ServiceDetailSidebar({ currentSlug = "executive-search" }: ServiceDetailSidebarProps) {
  const { sidebarServices, helpBox } = siteData.serviceDetails;

  return (
    <aside className="space-y-8">
      {/* Services Navigation Card */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="text-lg font-bold text-dark mb-5 heading-font">
          Our Services
        </h3>
        <div className="space-y-2">
          {sidebarServices.map((srv, index) => {
            const isActive = currentSlug === srv.slug || (currentSlug === "service-details" && index === 0);

            if (isActive) {
              return (
                <div
                  key={index}
                  className="bg-primary text-white p-3.5 rounded-xl font-semibold text-xs md:text-sm flex items-center justify-between shadow-sm cursor-default"
                >
                  <span>{srv.name}</span>
                  <ArrowRight size={15} />
                </div>
              );
            }

            return (
              <Link
                key={index}
                href={`/services/${srv.slug}`}
                className="p-3.5 rounded-xl text-gray-700 hover:text-primary hover:bg-blue-50/60 font-medium text-xs md:text-sm flex items-center justify-between transition-colors group"
              >
                <span>{srv.name}</span>
                <ChevronRight size={15} className="text-gray-400 group-hover:text-primary transition-colors" />
              </Link>
            );
          })}
        </div>
      </div>

      {/* Need Help Card */}
      <div className="bg-[#f8fafc] p-7 rounded-2xl border border-gray-100 shadow-sm">
        <span className="text-primary font-bold text-[11px] tracking-wider uppercase block mb-1">
          {helpBox.subtitle}
        </span>
        <h3 className="text-xl font-bold text-dark mb-2 heading-font">
          {helpBox.title}
        </h3>
        <p className="text-gray-500 text-xs mb-6 leading-relaxed">
          {helpBox.description}
        </p>

        <div className="space-y-3.5 mb-6">
          <a
            href={`tel:${helpBox.phone.replace(/[^0-9+]/g, '')}`}
            className="flex items-center gap-3 text-dark hover:text-primary transition-colors text-xs font-semibold"
          >
            <div className="w-8 h-8 rounded-full bg-blue-100/70 text-primary flex items-center justify-center flex-shrink-0">
              <Phone size={14} />
            </div>
            <span>{helpBox.phone}</span>
          </a>

          <a
            href={`mailto:${helpBox.email}`}
            className="flex items-center gap-3 text-dark hover:text-primary transition-colors text-xs font-semibold"
          >
            <div className="w-8 h-8 rounded-full bg-blue-100/70 text-primary flex items-center justify-center flex-shrink-0">
              <Mail size={14} />
            </div>
            <span>{helpBox.email}</span>
          </a>
        </div>

        <Link
          href={helpBox.ctaLink}
          className="w-full bg-primary text-white hover:bg-blue-700 transition-colors py-3 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-sm"
        >
          {helpBox.ctaText} <ArrowRight size={14} />
        </Link>
      </div>
    </aside>
  );
}
