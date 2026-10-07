import Image from "next/image";
import siteData from "../site.json";

export default function Stats() {
  return (
    <section className="relative py-20 bg-dark overflow-hidden">
      <Image src={siteData.stats.background} alt="Background" fill className="object-cover opacity-20" />
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h5 className="text-primary font-semibold text-sm tracking-wider uppercase mb-2 flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-primary"></span>
            OUR BEST
            <span className="w-6 h-px bg-primary"></span>
          </h5>
          <h2 className="text-white text-3xl md:text-4xl font-bold heading-font">
            Creating Opportunities<br />
            <span className="text-blue-300 font-normal">Building Brighter Futures</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-white/20">
          {siteData.stats.items.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center px-4">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <Image src={item.icon} alt={item.label} width={32} height={32} className="w-8 h-8 object-contain" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">{item.number}</h3>
              <p className="text-blue-200 text-sm font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}