import Image from "next/image";
import siteData from "../site.json";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-dark overflow-hidden">
      <Image src={siteData.testimonials.background} alt="Testimonials Background" fill className="object-cover opacity-30 mix-blend-overlay" />
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h5 className="text-primary font-semibold text-sm tracking-wider uppercase mb-3 flex items-center justify-center gap-2">
             <span className="w-8 h-px bg-primary"></span>
             {siteData.testimonials.sectionSubtitle}
             <span className="w-8 h-px bg-primary"></span>
          </h5>
          <h2 className="text-white text-3xl md:text-4xl font-bold heading-font max-w-2xl mx-auto">
            Success Stories from<br/>
            Our <span className="text-blue-400">Clients and Candidates</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.testimonials.items.map((item, i) => (
            <div key={i} className="bg-white rounded-lg p-8 shadow-xl relative">
              <div className="text-primary/20 absolute top-4 left-6 text-6xl font-serif">"</div>
              <p className="text-gray-600 text-sm relative z-10 mb-6 italic min-h-[80px]">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-4">
                <Image src={item.image} alt={item.name} width={50} height={50} className="rounded-full object-cover w-12 h-12" />
                <div>
                  <h4 className="font-bold text-dark text-sm heading-font">{item.name}</h4>
                  <p className="text-gray-500 text-xs">{item.role}</p>
                  <div className="flex text-[#FFB800] mt-1 gap-1">
                    {[...Array(item.rating)].map((_, idx) => (
                      <Star key={idx} size={12} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-8">
           <div className="w-2 h-2 rounded-full bg-primary"></div>
           <div className="w-2 h-2 rounded-full bg-white/30"></div>
           <div className="w-2 h-2 rounded-full bg-white/30"></div>
        </div>
      </div>
    </section>
  );
}