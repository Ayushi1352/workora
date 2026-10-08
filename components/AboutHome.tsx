import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, BarChart3 } from "lucide-react";
import HighlightedText from "./HighlightedText";
import siteData from "../site.json";

export default function AboutHome() {
  const getFeatureIcon = (iconName: string) => {
    if (iconName === "chart" || iconName === "partner") {
      return <BarChart3 size={22} className="text-[#3258a3]" />;
    }
    return <Users size={22} className="text-[#3258a3]" />;
  };

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left Side: 3-Image Collage + Experience Badge */}
        <div className="lg:col-span-6 relative">
          {/* Decorative Dot Grid */}
          <div className="absolute -top-7 -left-7 w-28 h-28 -z-10 bg-[radial-gradient(#94a3b8_2px,transparent_2px)] [background-size:14px_14px] opacity-40"></div>
          
          {/* Subtle Abstract Bottom Left Shape */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-50/60 rounded-3xl -z-10 transform -rotate-6"></div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5 items-end">
            {/* Left Column: 2 meeting images */}
            <div className="flex flex-col gap-4 sm:gap-5">
              <div className="relative h-[180px] sm:h-[220px] w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-sm">
                <Image 
                  src={siteData.about.images.meeting1} 
                  alt="Team Meeting" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="relative h-[180px] sm:h-[220px] w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-sm">
                <Image 
                  src={siteData.about.images.meeting2} 
                  alt="Workforce Collaboration" 
                  fill 
                  className="object-cover" 
                />
              </div>
            </div>

            {/* Right Column: Tall Woman Image + 25 Years Badge */}
            <div className="flex flex-col gap-4 sm:gap-5 relative">
              <div className="relative h-[260px] sm:h-[310px] w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-sm">
                <Image 
                  src={siteData.about.images.woman} 
                  alt="HR Executive" 
                  fill 
                  priority 
                  className="object-cover object-top" 
                />
              </div>
              
              {/* Experience Badge */}
              <div className="relative">
                <div className="bg-[#3258a3] text-white p-5 sm:p-6 rounded-2xl shadow-sm flex items-center justify-center gap-4 h-[105px] sm:h-[115px]">
                  <span className="text-4xl sm:text-5xl font-bold tracking-tight">
                    {siteData.about.experienceYears}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold leading-snug">
                    {siteData.about.experienceText.split(" ").slice(0, 2).join(" ")}<br />
                    {siteData.about.experienceText.split(" ").slice(2).join(" ")}
                  </span>
                </div>
                {/* Decorative circle behind badge */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-blue-50/80 -z-10"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="lg:col-span-6">
          {/* Subtitle */}
          <div className="flex items-center gap-2.5 text-[#3258a3] font-semibold text-xs tracking-widest uppercase mb-3.5">
            <span className="w-8 h-[2px] bg-[#3258a3] block"></span>
            <span>{siteData.about.sectionSubtitle}</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0f172a] mb-5 leading-[1.18] heading-font tracking-tight">
            <HighlightedText
              text={siteData.about.title}
              highlight={siteData.about.titleHighlight}
              className="text-[#3258a3]"
              breakBefore
            />
          </h2>

          {/* Paragraph */}
          <p className="text-[#475569] text-sm sm:text-[15px] leading-relaxed mb-7 max-w-xl">
            {siteData.about.description}
          </p>

          {/* Features */}
          <div className="space-y-6 mb-8">
            {siteData.about.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#eef4fc] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
                  {getFeatureIcon(feature.icon)}
                </div>
                <div>
                  <h4 className="font-bold text-[#0f172a] text-base mb-1 heading-font">
                    {feature.title}
                  </h4>
                  <p className="text-[#64748b] text-xs sm:text-sm leading-relaxed max-w-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div>
            <Link 
              href={siteData.about.ctaLink} 
              className="bg-[#3258a3] hover:bg-[#254483] text-white font-semibold py-3.5 px-7 rounded-lg text-sm inline-flex items-center gap-2 shadow-xs transition-all duration-300"
            >
              {siteData.about.ctaText} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}