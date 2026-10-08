import Image from "next/image";
import siteData from "../site.json";
import HighlightedText from "./HighlightedText";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-dark py-16 md:py-20">
      <Image src={siteData.testimonials.background} alt="Testimonials Background" fill className="object-cover opacity-30 mix-blend-overlay" />
      <div className="container-custom relative z-10">
        <div className="mb-10 text-center">
          <h5 className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-300">
             <span className="w-8 h-px bg-primary"></span>
             {siteData.testimonials.sectionSubtitle}
             <span className="w-8 h-px bg-primary"></span>
          </h5>
          <h2 className="mx-auto max-w-2xl text-2xl font-bold text-white heading-font md:text-3xl">
            <HighlightedText
              text={siteData.testimonials.title}
              highlight={siteData.testimonials.titleHighlight}
              className="text-blue-400"
            />
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {siteData.testimonials.items.map((item, i) => (
            <div key={i} className="relative rounded-md bg-white p-4 shadow-lg">
              <div className="text-primary/20 absolute top-4 left-6 text-6xl font-serif">&ldquo;</div>
              <p className="relative z-10 mb-4 min-h-16 text-xs italic leading-relaxed text-gray-600">
                &ldquo;{item.quote}&rdquo;
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