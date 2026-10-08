import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HighlightedText from "./HighlightedText";
import siteData from "../site.json";

export default function ServicesHome() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom mb-12 lg:mb-14 text-center">
        {/* Centered Subtitle with lines */}
        <div className="flex items-center justify-center gap-2.5 text-[#3258a3] font-semibold text-xs tracking-widest uppercase mb-3">
          <span className="w-8 h-[2px] bg-[#3258a3] block"></span>
          <span>{siteData.services.sectionSubtitle}</span>
          <span className="w-8 h-[2px] bg-[#3258a3] block"></span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0f172a] mb-4 leading-[1.18] heading-font tracking-tight">
          <HighlightedText
            text={siteData.services.title}
            highlight={siteData.services.titleHighlight}
            className="text-[#3258a3]"
            breakBefore
          />
        </h2>

        {/* Description */}
        <p className="text-[#64748b] max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed">
          {siteData.services.description}
        </p>
      </div>

      {/* Services Grid (4 Columns) */}
      <div className="container-custom grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {siteData.services.items.map((service, i) => (
          <div 
            key={i} 
            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            {/* Image Box */}
            <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-gray-50">
              <Image 
                src={service.image} 
                alt={service.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>

            {/* Content Box */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-bold text-[#0f172a] mb-2.5 group-hover:text-[#3258a3] transition-colors heading-font">
                {service.title}
              </h3>
              <p className="text-[#64748b] text-xs sm:text-[13px] leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              <Link 
                href={service.link} 
                className="inline-flex items-center gap-2 bg-[#3258a3] hover:bg-[#254483] text-white font-semibold text-xs py-2.5 px-5 rounded-lg transition-colors self-start shadow-2xs"
              >
                {siteData.commonLabels.readMore} <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}