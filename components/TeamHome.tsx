import Image from "next/image";
import HighlightedText from "./HighlightedText";
import siteData from "@/data";

const team = siteData.team;

export default function TeamHome() {
  return (
    <section className="fluid bg-white font-pop">
      <div className="wrap px-5 py-14 sm:px-8 md:py-18 lg:pb-23 lg:pt-14.5 lg:px-13">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 font-figtree text-[13px] font-bold uppercase tracking-[0.04em] text-[#1f4fae] lg:gap-4.25 lg:fs-18 lg:leading-none">
            <span className="h-0.5 w-8 bg-[#1f4fae] lg:w-11" />
            {team.sectionSubtitle}
            <span className="h-0.5 w-8 bg-[#1f4fae] lg:w-11" />
          </div>
          <h2 className="mt-3 font-figtree text-[30px] font-bold leading-[1.15] text-[#050833] sm:text-[40px] lg:mt-4.5 lg:fs-55.75 lg:leading-[1.14]">
            <HighlightedText text={team.title} highlight={team.titleHighlight} className="text-[#2456c8]" />
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#5d6880] lg:mt-3.25 lg:max-w-180 lg:whitespace-pre-line lg:fs-17.75 lg:leading-[1.52]">
            {team.description}
          </p>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:mt-7 lg:grid-cols-4 lg:gap-8">
          {team.members.map((member) => (
            <article
              key={member.name}
              className="overflow-hidden rounded-lg bg-white shadow-[0_3px_16px_rgba(15,30,70,0.08)] lg:r-8"
            >
              <div className="relative aspect-[372/353] w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  unoptimized
                  sizes="(min-width:1024px) 23vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="px-6 pb-5 pt-4 lg:px-7.5 lg:pb-5.5 lg:pt-4.75">
                <h3 className="font-lexend text-xl font-semibold text-[#06072c] lg:fs-24 lg:leading-[1.22]">{member.name}</h3>
                <span className="mt-2 block h-0.75 w-11.5 bg-[#2456c8] lg:mt-2.75" />
                <p className="mt-3 font-lexend text-[15px] font-light text-[#646d84] lg:mt-4 lg:fs-18.75 lg:leading-[1.21]">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
