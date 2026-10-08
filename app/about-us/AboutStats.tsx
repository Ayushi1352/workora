import Image from "next/image";
import { Users, FileText, TrendingUp, Handshake } from "lucide-react";
import HighlightedText from "@/components/HighlightedText";
import siteData from "../../site.json";

export default function AboutStats() {
  const { stats } = siteData;

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
    <section className="relative overflow-hidden bg-dark py-16 md:py-20">
      <Image 
        src={stats.background} 
        alt="Background" 
        fill 
        className="object-cover opacity-20" 
      />
      <div className="container-custom relative z-10">
        <div className="mb-10 grid gap-5 md:grid-cols-2 md:items-end">
          <div>
          <h5 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-300">
            <span className="w-6 h-px bg-primary"></span>
            {stats.sectionSubtitle}
          </h5>
          <h2 className="text-2xl font-bold text-white heading-font md:text-3xl">
            <HighlightedText
              text={stats.title}
              highlight={stats.titleHighlight}
              className="text-blue-300 font-normal"
              breakBefore
            />
          </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-blue-100 md:justify-self-end">
            {stats.description}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 divide-x-0 md:grid-cols-4 md:divide-x md:divide-white/20">
          {stats.items.map((item, i) => (
            <div key={i} className="flex flex-col items-start px-3 md:px-6">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                {getStatIcon(item.icon)}
              </div>
              <h3 className="mb-1 text-3xl font-bold text-white md:text-4xl">{item.number}</h3>
              <p className="text-xs font-medium text-blue-200">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
