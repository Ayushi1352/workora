import Image from "next/image";
import Link from "next/link";
import { Users, Target, Award, TrendingUp, Trophy, ArrowRight } from "lucide-react";
import HighlightedText from "@/components/HighlightedText";
import siteData from "../../site.json";

export default function WhyChooseUs() {
  const { whyChooseUs } = siteData.aboutPage;

  const getIcon = (iconName: string, isHighlight: boolean) => {
    const iconClass = isHighlight ? "text-primary" : "text-primary";
    switch (iconName) {
      case "users":
        return <Users size={24} className={iconClass} />;
      case "target":
        return <Target size={24} className={iconClass} />;
      case "award":
        return <Award size={24} className={iconClass} />;
      case "chart":
      default:
        return <TrendingUp size={24} className={iconClass} />;
    }
  };

  return (
    <section className="section-padding bg-[#f8fafc]">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column - 7 cols */}
        <div className="lg:col-span-7">
          <h5 className="text-primary font-semibold text-xs tracking-wider uppercase mb-3 flex items-center gap-2">
            <span className="w-6 h-[2px] bg-primary"></span>
            {whyChooseUs.sectionSubtitle}
          </h5>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight heading-font">
            <HighlightedText
              text={whyChooseUs.title}
              highlight={whyChooseUs.titleHighlight}
              className="text-primary"
              breakBefore
            />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8 items-start">
            <div className="md:col-span-7 text-gray-600 text-sm leading-relaxed">
              <p>{whyChooseUs.description}</p>
              
              {/* Quote box */}
              <div className="mt-6 border-l-4 border-primary pl-4 py-1 italic text-dark font-medium text-sm">
                &ldquo;{whyChooseUs.quote}&rdquo;
              </div>
            </div>

            {/* Since 2015 card */}
            <div className="md:col-span-5 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
              <span className="inline-block bg-blue-50 text-primary text-[11px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider mb-2">
                {whyChooseUs.since.badge}
              </span>
              <div className="text-4xl font-bold text-dark mb-2 heading-font">
                {whyChooseUs.since.year}
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                {whyChooseUs.since.text}
              </p>
            </div>
          </div>

          {/* Award Card */}
          <div className="bg-dark text-white rounded-2xl overflow-hidden shadow-lg grid grid-cols-1 sm:grid-cols-12 items-center">
            <div className="sm:col-span-7 p-6 sm:p-7">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4">
                <Trophy size={20} className="text-primary" />
              </div>
              <h4 className="text-lg font-bold mb-1.5 heading-font">
                {whyChooseUs.award.title}
              </h4>
              <p className="text-gray-400 text-xs mb-5">
                {whyChooseUs.award.subtitle}
              </p>
              <Link
                href={whyChooseUs.award.link}
                className="inline-flex items-center gap-2 text-white font-semibold text-xs hover:text-primary transition-colors"
              >
                {whyChooseUs.award.linkText} <ArrowRight size={14} />
              </Link>
            </div>
            <div className="sm:col-span-5 relative h-[180px] sm:h-full min-h-[170px] w-full">
              <Image
                src={whyChooseUs.award.image}
                alt="Award Trophy"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Column - 5 cols (4 Feature Cards) */}
        <div className="lg:col-span-5 space-y-4">
          {whyChooseUs.features.map((item, index) => {
            if (item.highlight) {
              return (
                <div
                  key={index}
                  className="bg-primary text-white p-6 rounded-2xl shadow-lg flex items-center gap-5 transition-transform hover:-translate-y-1 duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    {getIcon(item.icon, true)}
                  </div>
                  <div>
                    <h4 className="font-bold text-base mb-1 heading-font">{item.title}</h4>
                    <p className="text-blue-100 text-xs leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-5 transition-all hover:shadow-md hover:-translate-y-0.5 duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  {getIcon(item.icon, false)}
                </div>
                <div>
                  <h4 className="font-bold text-dark text-base mb-1 heading-font">{item.title}</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
