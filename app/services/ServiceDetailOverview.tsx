import Image from "next/image";
import Link from "next/link";
import { Users, Target, Handshake, ArrowRight } from "lucide-react";
import siteData from "../../site.json";

interface ServiceDetailOverviewProps {
  overview?: {
    sectionSubtitle: string;
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    image: string;
  };
}

export default function ServiceDetailOverview({ overview: customOverview }: ServiceDetailOverviewProps) {
  const overview = customOverview || siteData.serviceDetails.overview;
  const features = siteData.serviceDetails.features;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "users":
        return <Users size={22} className="text-primary" />;
      case "target":
        return <Target size={22} className="text-primary" />;
      case "handshake":
      default:
        return <Handshake size={22} className="text-primary" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Overview Split */}
      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12">
        <div className="md:col-span-7">
          <h5 className="text-primary font-semibold text-xs tracking-wider uppercase mb-3 flex items-center gap-2">
            <span className="h-0.5 w-6 bg-prima
            ry"></span>
            {overview.sectionSubtitle}
          </h5>
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4 leading-tight heading-font">
            {overview.title}
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {overview.description}
          </p>
          <Link
            href={overview.ctaLink}
            className="inline-flex items-center gap-2 bg-primary text-white text-xs font-semibold px-5 py-3 rounded-md hover:bg-blue-700 transition-colors shadow-sm"
          >
            {overview.ctaText} <ArrowRight size={14} />
          </Link>
        </div>

        <div className="relative h-55 w-full overflow-hidden rounded-md md:col-span-5">
          <Image
            src={overview.image}
            alt={overview.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* 3 Key Highlights Strip */}
      <div className="grid grid-cols-1 gap-3 rounded-md border border-gray-100 bg-[#f8fafc] p-4 sm:grid-cols-3">
        {features.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50">
              {getIcon(item.icon)}
            </div>
            <div>
              <h4 className="font-bold text-dark text-sm mb-0.5 heading-font">
                {item.title}
              </h4>
              <p className="text-gray-500 text-xs leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
