import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import siteData from "../site.json";

export default function Hero() {
  return (
    <section className="relative bg-[#f8fafc] overflow-hidden">
      <div className="container-custom py-16 md:py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-primary font-medium mb-4 text-sm uppercase tracking-wider">
            <span className="w-8 h-px bg-primary"></span>
            {siteData.hero.subtitle}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6 leading-[1.1] heading-font">
            Strategic<br />
            <span className="text-primary">HR Solutions</span><br />
            for Your<br />
            Growing Business
          </h1>
          <p className="text-gray-600 mb-8 max-w-lg text-lg leading-relaxed">
            {siteData.hero.description}
          </p>
          <Link href={siteData.hero.ctaLink} className="btn-primary">
            {siteData.hero.ctaText} <ArrowRight size={18} />
          </Link>
        </div>
        <div className="relative z-10 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[560px] h-[320px] sm:h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={siteData.hero.image || "/hero-main.webp"}
              alt="Strategic HR Solutions"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f1f5f9] -skew-x-12 origin-top-right -z-0"></div>
    </section>
  );
}