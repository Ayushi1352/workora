import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HighlightedText from "./HighlightedText";
import siteData from "@/data";

const services = siteData.services;

interface ServicesHomeProps {
  /** Spacing used on the standalone Services page */
  page?: boolean;
}

export default function ServicesHome({ page = false }: ServicesHomeProps) {
  return (
    <section className="fluid bg-white font-figtree">
      <div className={`wrap px-5 py-14 sm:px-8 md:py-18 lg:px-17 ${page ? "lg:pb-36 lg:pt-24.25" : "lg:pb-14 lg:pt-27.5"}`}>
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#2d55a0] lg:gap-4.5 lg:fs-16 lg:leading-none">
            <span className="h-0.5 w-8 bg-[#2d55a0] lg:w-10.5" />
            {services.sectionSubtitle}
            <span className="h-0.5 w-8 bg-[#2d55a0] lg:w-10.5" />
          </div>
          <h2 className="mt-3 font-figtree text-[30px] font-bold leading-[1.15] text-[#07102c] sm:text-[40px] lg:mt-3.5 lg:fs-47.75 lg:leading-[0.985]">
            <HighlightedText text={services.title} highlight={services.titleHighlight} className="block text-[#2d55a0]" />
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#6d7489] lg:mt-3 lg:max-w-205 lg:whitespace-pre-line lg:fs-16.5 lg:leading-[1.315]">
            {services.description}
          </p>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:mt-4.25 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-4.5">
          {services.items.map((service, i) => {
            // The design draws the second row slightly more compact than the first
            const compact = i >= 4;
            return (
            <article
              key={service.link}
              className="group flex flex-col overflow-hidden rounded-lg border border-[#eceff5] bg-white shadow-[0_2px_10px_rgba(15,30,70,0.05)] lg:r-8"
            >
              <div className={`relative w-full overflow-hidden ${compact ? "aspect-[376/209] lg:aspect-[376/204]" : "aspect-[376/209]"}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  unoptimized
                  sizes="(min-width:1024px) 23vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex grow flex-col items-start px-5 pb-5 pt-4 lg:px-5.75 lg:pb-3.5 lg:pt-3.75">
                <h3
                  className={`font-figtree text-xl font-semibold text-[#0b0d23] lg:whitespace-nowrap lg:fs-24 lg:leading-[1.22] ${
                    service.title.length > 24 ? "lg:tracking-[-0.045em]" : ""
                  }`}
                >
                  {service.title}
                </h3>
                <span className="mt-2 h-0.75 w-10.5 bg-[#2d55a0] lg:mt-1.5" />
                <p
                  className={`mt-3 grow text-sm leading-relaxed text-[#6a7185] lg:mt-2.25 lg:whitespace-pre-line ${
                    compact ? "lg:fs-17.75 lg:leading-[1.24]" : "lg:fs-18 lg:leading-[1.333]"
                  }`}
                >
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="mt-4 inline-flex h-11 items-center gap-3 rounded bg-[#2d55a9] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#234488] lg:mt-2.5 lg:h-12 lg:gap-5.5 lg:r-4 lg:px-6.5 lg:fs-15.5"
                >
                  {siteData.commonLabels.readMore}
                  <ArrowRight className="size-4 lg:size-5" strokeWidth={2.25} />
                </Link>
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
