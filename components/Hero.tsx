import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HighlightedText from "./HighlightedText";
import siteData from "../site.json";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white min-h-[520px] md:min-h-[580px] lg:min-h-[640px] flex items-center">
      {/* Background image on Desktop */}
      <div className="absolute inset-0 hidden lg:block">
        <Image
          src={siteData.hero.image || "/hero-main.webp"}
          alt="Strategic HR Solutions"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        {/* Subtle left gradient overlay to ensure perfect contrast for text */}
        <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-white via-white/95 to-transparent" />
      </div>

      <div className="container-custom relative z-10 w-full py-12 md:py-16 lg:py-20">
        <div className="max-w-xl">
          {/* Subtitle with line */}
          <div className="flex items-center gap-2.5 text-primary font-semibold mb-4 text-sm tracking-wide">
            <span className="w-8 h-[2px] bg-primary block"></span>
            <span>{siteData.hero.subtitle}</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#0f172a] mb-5 leading-[1.12] heading-font tracking-tight">
            <HighlightedText
              text={siteData.hero.title}
              highlight={siteData.hero.titleHighlight}
              className="text-primary"
              breakBefore
              breakAfter
            />
          </h1>

          {/* Description */}
          <p className="text-[#475569] text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
            {siteData.hero.description}
          </p>

          {/* CTA Button */}
          <div>
            <Link
              href={siteData.hero.ctaLink}
              className="bg-primary hover:bg-blue-700 text-white font-semibold py-3.5 px-7 rounded-lg text-sm inline-flex items-center gap-2 shadow-sm transition-all duration-300"
            >
              {siteData.hero.ctaText} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Image */}
      <div className="container-custom mb-8 lg:hidden">
        <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-xl">
          <Image
            src={siteData.hero.image || "/hero-main.webp"}
            alt="Strategic HR Solutions"
            fill
            sizes="100vw"
            className="object-cover object-right rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}