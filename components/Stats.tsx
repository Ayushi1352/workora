import Image from "next/image";
import { Users, FileText, TrendingUp, Handshake } from "lucide-react";
import HighlightedText from "./HighlightedText";
import siteData from "../site.json";

export default function Stats() {
  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case "users":
        return <Users size={22} className="text-white" />;
      case "file-text":
        return <FileText size={22} className="text-white" />;
      case "chart":
        return <TrendingUp size={22} className="text-white" />;
      case "handshake":
      default:
        return <Handshake size={22} className="text-white" />;
    }
  };

  return (
    <section className="relative overflow-hidden bg-dark py-16 md:py-24 text-white">
      {/* Background Image with Clear Visibility */}
      <Image 
        src={siteData.stats.background || "/stats-bg.webp"} 
        alt="Workora Impact" 
        fill 
        className="object-cover object-center opacity-65" 
      />
      <div className="absolute inset-0 bg-linear-to-r from-dark/80 via-dark/70 to-dark/80 z-0" />

      <div className="container-custom relative z-10">
        {/* Top Header Row */}
        <div className="mb-12 lg:mb-16 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-7 lg:col-span-8">
            <div className="flex items-center gap-2.5 text-primary font-semibold text-xs tracking-widest uppercase mb-3">
              <span className="w-8 h-[2px] bg-primary block"></span>
              <span>{siteData.stats.sectionSubtitle}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white leading-[1.18] heading-font tracking-tight">
              <HighlightedText
                text={siteData.stats.title}
                highlight={siteData.stats.titleHighlight}
                className="text-primary"
                breakBefore
              />
            </h2>
          </div>
          
          <div className="md:col-span-5 lg:col-span-4 flex md:justify-end">
            <p className="text-gray-300 text-xs sm:text-[13px] leading-relaxed max-w-sm">
              {siteData.stats.description}
            </p>
          </div>
        </div>

        {/* Bottom 4 Counters Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 relative">
          {siteData.stats.items.map((item, i) => (
            <div 
              key={i} 
              className={`flex flex-col items-start px-2 lg:px-8 relative ${
                i > 0 ? "md:border-l md:border-white/15" : ""
              }`}
            >
              {/* Circular Badge Icon */}
              <div className="w-13 h-13 rounded-full border border-white/25 bg-white/10 backdrop-blur-xs flex items-center justify-center mb-4 text-white shadow-xs">
                {getStatIcon(item.icon)}
              </div>

              {/* Big Bold Stat Counter */}
              <h3 className="text-4xl sm:text-5xl lg:text-[50px] font-bold text-white mb-2 tracking-tight heading-font leading-none">
                {item.number}
              </h3>

              {/* Label with Blue Line */}
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-300">
                <span className="w-4 h-[1.5px] bg-primary block flex-shrink-0"></span>
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}