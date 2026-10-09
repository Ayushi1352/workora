import Image from "next/image";
import Link from "next/link";
import { ArrowRight, UsersRound, Goal, Handshake, ChartNoAxesCombined, Trophy } from "lucide-react";
import HighlightedText from "@/components/HighlightedText";
import siteData from "@/data";

const why = siteData.aboutPage.whyChooseUs;

const icons: Record<string, typeof UsersRound> = {
  users: UsersRound,
  target: Goal,
  award: Handshake,
  chart: ChartNoAxesCombined,
};

export default function WhyChooseUs() {
  return (
    <section className="fluid bg-white font-pop lg:pb-21.75 lg:pt-9.5">
      <div className="bg-[#f7f9fd]">
        <div className="wrap relative px-5 py-14 sm:px-8 lg:h-211.25 lg:px-0 lg:py-0">
          {/* heading */}
          <div className="lg:absolute lg:left-37.5 lg:top-12.5">
            <div className="flex items-center gap-4 font-figtree text-[13px] font-semibold uppercase tracking-[0.08em] text-[#3d4663] lg:gap-3.75 lg:fs-17 lg:leading-none">
              <span className="h-0.5 w-8 shrink-0 bg-[#1d4fd8] lg:h-0.75 lg:w-10.75" />
              {why.sectionSubtitle}
            </div>
            <h2 className="mt-3 max-w-md font-exo text-[34px] font-bold leading-[1.1] text-[#050924] sm:text-[44px] lg:mt-5 lg:max-w-none lg:whitespace-pre-line lg:fs-64 lg:leading-[0.955]">
              <HighlightedText text={why.title} highlight={why.titleHighlight} className="text-[#1d4fd8]" />
            </h2>
          </div>

          {/* intro copy + quote */}
          <div className="mt-6 lg:absolute lg:left-37.5 lg:top-57.75 lg:mt-0 lg:w-88">
            <p className="text-[15px] leading-relaxed text-[#5b647e] lg:whitespace-pre-line lg:fs-19.25 lg:leading-[1.49]">
              {why.description}
            </p>
            <blockquote className="mt-6 border-l-4 border-[#1d4fd8] pl-5 text-[15px] leading-relaxed text-[#4d5673] lg:mt-6.25 lg:border-l-5 lg:pl-6.25 lg:whitespace-pre-line lg:fs-19 lg:leading-[1.47]">
              {why.quote}
            </blockquote>
          </div>

          {/* since block */}
          <div className="mt-8 lg:absolute lg:left-143.5 lg:top-65.5 lg:mt-0 lg:w-80">
            <span className="inline-block rounded-md bg-[#e3ecfd] px-3.5 py-1.5 font-figtree text-sm font-bold uppercase tracking-[0.08em] text-[#1d4fd8] lg:r-6 lg:px-4 lg:py-0 lg:fs-18 lg:leading-[2]">
              {why.since.badge}
            </span>
            <div className="mt-2 font-exo text-6xl font-extrabold leading-none text-[#030926] lg:mt-2.5 lg:fs-86 lg:leading-[0.93]">
              {why.since.year}
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-[#5b647e] lg:mt-4.5 lg:whitespace-pre-line lg:fs-18.75 lg:leading-[1.49]">
              {why.since.text}
            </p>
          </div>

          {/* award card */}
          <div className="relative isolate mt-8 overflow-hidden rounded-2xl bg-[#07133a] px-6 py-7 text-white lg:absolute lg:left-30 lg:top-142 lg:mt-0 lg:h-56.75 lg:w-191 lg:r-14 lg:px-0 lg:py-0">
            <Image
              src={why.award.image}
              alt=""
              fill
              unoptimized
              sizes="(min-width:1024px) 46vw, 100vw"
              className="-z-10 object-cover object-right"
            />
            <div className="flex items-start gap-5 lg:absolute lg:left-10.25 lg:top-7.75 lg:gap-5.75">
              <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-[#1d4ed8] lg:size-21">
                <Trophy className="size-8 lg:size-10.5" strokeWidth={1.75} />
              </span>
              <div className="max-w-[16rem] lg:max-w-none lg:pt-0.5">
                <h3 className="font-exo text-lg font-bold leading-snug lg:whitespace-pre-line lg:fs-22.5 lg:leading-[1.33]">
                  {why.award.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#d8def0] lg:mt-2.5 lg:whitespace-pre-line lg:fs-19 lg:leading-[1.47]">
                  {why.award.subtitle}
                </p>
              </div>
            </div>
            <Link
              href={why.award.link}
              className="mt-5 inline-flex items-center gap-4 font-exo text-base font-bold transition-opacity hover:opacity-80 lg:absolute lg:left-10.25 lg:top-42.75 lg:mt-0 lg:gap-4.5 lg:fs-20.5 lg:leading-[1.2]"
            >
              {why.award.linkText}
              <ArrowRight className="size-5 lg:size-6.5" strokeWidth={2.25} />
            </Link>
          </div>

          <span className="absolute left-229.25 top-13 hidden h-185.75 w-px bg-[#dfe5ef] lg:block" />

          {/* feature cards */}
          <div className="mt-8 flex flex-col gap-4 lg:absolute lg:left-239.75 lg:top-14.25 lg:mt-0 lg:w-152.25 lg:gap-3.5">
            {why.features.map((feature) => {
              const Icon = icons[feature.icon] ?? UsersRound;
              const active = feature.highlight;
              return (
                <article
                  key={feature.title}
                  className={`flex items-center rounded-xl border px-5 py-5 lg:h-37.5 lg:r-10 lg:px-0 lg:py-0 lg:pl-7.25 ${
                    active
                      ? "border-transparent bg-linear-to-r from-[#1f52c6] to-[#1845b2] text-white shadow-[0_10px_30px_rgba(29,79,216,0.25)]"
                      : "border-[#e8edf5] bg-white text-[#56607b]"
                  }`}
                >
                  <span
                    className={`flex size-16 shrink-0 items-center justify-center rounded-full text-[#1d4fd8] lg:size-25 ${
                      active ? "bg-white" : "bg-[#e8effd]"
                    }`}
                  >
                    <Icon className="size-8 lg:size-12" strokeWidth={1.6} />
                  </span>
                  <div className="ml-5 lg:ml-10.25">
                    <h3 className={`font-exo text-xl font-bold lg:fs-25.5 lg:leading-[1.2] ${active ? "text-white" : "text-[#060720]"}`}>
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed lg:mt-2 lg:whitespace-pre-line lg:fs-19.5 lg:leading-[1.46]">
                      {feature.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
