import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaUsers } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import AboutCollage from "./AboutCollage";
import HighlightedText from "./HighlightedText";
import siteData from "@/data";

const about = siteData.about;

const featureIcons: Record<string, typeof FaUsers> = {
  users: FaUsers,
  chart: FaChartSimple,
};

export default function AboutHome() {
  return (
    <section className="fluid relative overflow-hidden bg-white font-figtree">
      {/* corner triangle from the design */}
      <div className="absolute bottom-9.75 left-0 hidden h-34.25 w-33.25 bg-[#cbd6ec] [clip-path:polygon(0_0,0_100%,100%_100%)] lg:block" />

      <div className="wrap flex flex-col gap-10 px-5 py-14 sm:px-8 lg:flex-row lg:items-start lg:gap-0 lg:px-0 lg:pb-24 lg:pl-15.5 lg:pt-12">
        <div className="mx-auto w-full max-w-xl shrink-0 lg:mx-0 lg:w-194.5 lg:max-w-none">
          <AboutCollage />
        </div>

        <div className="lg:ml-16.5 lg:w-185 lg:pt-15.5">
          <div className="flex items-center gap-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-brand lg:gap-5.75 lg:fs-16 lg:leading-none">
            <span className="h-0.5 w-8 shrink-0 bg-brand lg:h-0.75 lg:w-10" />
            {about.sectionSubtitle}
          </div>

          <h2 className="mt-3 font-figtree text-[32px] font-semibold leading-[1.15] tracking-[-0.01em] text-[#081328] sm:text-[42px] lg:mt-4.5 lg:fs-60 lg:leading-[1.133]">
            <HighlightedText
              text={about.title}
              highlight={about.titleHighlight}
              className="block text-[#2d55a0] lg:fs-55 lg:leading-[1.2]"
            />
          </h2>

          <p className="mt-4 text-[15px] leading-relaxed text-body sm:text-base lg:mt-5.75 lg:whitespace-pre-line lg:fs-20.25 lg:leading-[1.482]">
            {about.description}
          </p>

          <div className="mt-7 flex flex-col gap-6 lg:mt-9.25 lg:gap-9.75">
            {about.features.map((feature) => {
              const Icon = featureIcons[feature.icon] ?? FaUsers;
              return (
                <div key={feature.title} className="flex items-start">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#eef1f8] text-brand lg:size-20.5">
                    <Icon className="size-6 lg:size-10.5" />
                  </span>
                  <div className="ml-4 lg:ml-7 lg:pt-0.75">
                    <h3 className="font-figtree text-lg font-semibold leading-snug text-[#090d1f] lg:fs-23.5 lg:leading-[1.2]">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#626a79] lg:mt-1.5 lg:fs-18.75 lg:leading-[1.4]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <Link
            href={about.ctaLink}
            className="mt-7 inline-flex h-13 items-center gap-3 rounded bg-[#355b9e] px-7 text-base font-semibold text-white transition-colors hover:bg-[#2b4b85] lg:mt-7 lg:h-17.75 lg:gap-5 lg:r-5 lg:px-8.5 lg:fs-21.5"
          >
            {about.ctaText}
            <ArrowRight className="size-5 lg:size-6.5" strokeWidth={2.25} />
          </Link>
        </div>
      </div>
    </section>
  );
}
