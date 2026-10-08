import Image from "next/image";
import { Users, Clock, ShieldCheck, Phone, Mail } from "lucide-react";
import HighlightedText from "@/components/HighlightedText";
import siteData from "../../site.json";

export default function QuoteOverview() {
  const { overview } = siteData.getAQuotePage;
  const { company } = siteData;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "users":
        return <Users size={22} className="text-primary" />;
      case "clock":
        return <Clock size={22} className="text-primary" />;
      case "shield":
      default:
        return <ShieldCheck size={22} className="text-primary" />;
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h5 className="text-primary font-semibold text-xs tracking-wider uppercase mb-2 flex items-center gap-2">
          <span className="w-6 h-[2px] bg-primary"></span>
          {overview.sectionSubtitle}
        </h5>
        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 leading-tight heading-font">
          <HighlightedText
            text={overview.title}
            highlight={overview.titleHighlight}
            className="text-primary"
          />
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed max-w-xl">
          {overview.description}
        </p>
      </div>

      {/* 3 Highlights Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {overview.features.map((item, index) => (
          <div
            key={index}
            className="bg-[#f8fafc] p-5 rounded-2xl border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-sm"
          >
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-3">
              {getIcon(item.icon)}
            </div>
            <h4 className="font-bold text-dark text-sm mb-1 heading-font">
              {item.title}
            </h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Talk to Our Experts Card with Image */}
      <div className="bg-[#f8fafc] rounded-2xl border border-gray-100 overflow-hidden grid grid-cols-1 sm:grid-cols-12 items-center">
        <div className="sm:col-span-5 relative h-[180px] sm:h-full min-h-[160px] w-full">
          <Image
            src={overview.expertBox.image}
            alt="Talk to Experts"
            fill
            className="object-cover"
          />
        </div>
        <div className="sm:col-span-7 p-6">
          <span className="text-primary font-bold text-[11px] tracking-wider uppercase block mb-1">
            {overview.expertBox.subtitle}
          </span>
          <h4 className="text-lg font-bold text-dark mb-2 heading-font">
            {overview.expertBox.title}
          </h4>
          <p className="text-gray-500 text-xs mb-4 leading-relaxed">
            {overview.expertBox.description}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-dark">
            <a
              href={`tel:${company.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">
                <Phone size={12} />
              </div>
              <span>{company.phone}</span>
            </a>
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">
                <Mail size={12} />
              </div>
              <span>{company.email}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
