import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HighlightedText from "./HighlightedText";
import siteData from "@/data";

const hero = siteData.hero;

export default function Hero() {
  return (
    <section className="fluid relative isolate overflow-hidden bg-white">
      {/* Desktop: clean, natural photo in background */}
      <Image
        src={hero.image}
        alt=""
        fill
        preload
        unoptimized
        sizes="100vw"
        className="-z-20 hidden object-cover object-[right_65%] lg:block"
      />

      {/* CSS gradient overlay: provides smooth fade for text contrast purely via CSS without altering the image file */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 hidden lg:block"
        style={{
          background:
            "linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.96) 22%, rgba(255,255,255,0.82) 36%, rgba(255,255,255,0.45) 47%, rgba(255,255,255,0) 58%)",
        }}
        aria-hidden="true"
      />

      <div className="wrap px-5 py-14 md:py-18 sm:px-8 lg:h-179.5 lg:px-0 lg:pb-0 lg:pl-26.25 lg:pt-18.75">
        <div className="flex items-center gap-3 font-pop text-[13px] font-medium text-[#2b5797] sm:text-sm lg:gap-4.75 lg:fs-20">
          <span className="h-0.5 w-8 shrink-0 bg-[#2b5797] lg:h-0.75 lg:w-10.5" />
          <span>{hero.subtitle}</span>
        </div>

        <h1 className="mt-4 font-noto text-[40px] font-bold leading-[1.08] tracking-[-0.015em] whitespace-pre-line text-ink sm:text-[54px] lg:mt-6.5 lg:fs-76 lg:leading-[1.013]">
          <HighlightedText
            text={hero.title}
            highlight={hero.titleHighlight}
            className="text-[#3a62a0]"
            breakBefore
            breakAfter
          />
        </h1>

        <p className="mt-5 max-w-xl font-pop text-[15px] leading-relaxed text-[#5c5f6a] sm:text-base lg:mt-5 lg:max-w-175 lg:whitespace-pre-line lg:fs-20.75 lg:leading-[1.5]">
          {hero.description}
        </p>

        <Link
          href={hero.ctaLink}
          className="mt-7 inline-flex h-13 items-center gap-3 rounded bg-[#3d649b] px-7 font-pop text-base font-semibold text-white transition-colors hover:bg-[#2f4f80] lg:mt-9.25 lg:h-18.25 lg:gap-5 lg:r-4 lg:pl-9 lg:pr-9.5 lg:fs-22.5"
        >
          {hero.ctaText}
          <ArrowRight className="size-5 lg:size-6.5" strokeWidth={2.5} />
        </Link>
      </div>

      {/* Phones and tablets: clean photo sits under the text in a framed container */}
      <div className="relative aspect-[16/10] w-full px-5 sm:px-8 lg:hidden">
        <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-sm">
          <Image src={hero.image} alt={hero.imageAlt} fill unoptimized sizes="100vw" className="object-cover object-center" />
        </div>
      </div>
    </section>
  );
}
