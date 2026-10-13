import { Clock3, ShieldCheck, UsersRound } from "lucide-react";
import HighlightedText from "@/components/HighlightedText";
import siteData from "@/data";

const overview = siteData.getAQuotePage.overview;

const icons: Record<string, typeof UsersRound> = {
  users: UsersRound,
  clock: Clock3,
  shield: ShieldCheck,
};

export default function QuoteOverview() {
  return (
    <div className="font-sans">
      <div className="flex items-center gap-3.5 text-[13px] font-bold uppercase tracking-[0.04em] text-[#4a5370] lg:fs-15 lg:leading-none">
        <span className="h-0.5 w-10.25 shrink-0 bg-[#0f52d9]" />
        {overview.sectionSubtitle}
      </div>
      <h2 className="mt-3 whitespace-pre-line font-exo text-4xl font-bold leading-[1.08] text-[#0b1030] lg:mt-4.5 lg:fs-52 lg:leading-[0.98]">
        <HighlightedText text={overview.title} highlight={overview.titleHighlight} className="text-[#0f52d9]" />
      </h2>
      <p className="mt-3 text-base leading-relaxed text-[#5b647e] lg:mt-4 lg:whitespace-pre-line lg:fs-19.5 lg:leading-[1.436]">
        {overview.description}
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:mt-6.75 lg:gap-6.75">
        {overview.features.map((item, i) => {
          const Icon = icons[item.icon] ?? ShieldCheck;
          return (
            <div
              key={item.title}
              className="relative flex flex-col items-center rounded-xl bg-[#f3f7fd] px-3 pb-5 pt-4 text-center lg:h-44.75 lg:r-10 lg:px-2 lg:pb-0 lg:pt-2.75"
            >
              {i > 0 && <span className="absolute -left-3.5 top-9.5 hidden h-29.5 w-px bg-[#dfe6f1] lg:block" />}
              <span className="flex size-14 items-center justify-center rounded-full bg-[#dfe9fb] text-[#0f52d9] lg:size-17">
                <Icon className="size-7 lg:size-9" strokeWidth={2} />
              </span>
              <h3 className="mt-2 font-exo text-base font-bold text-[#0b1030] lg:mt-1.75 lg:fs-18 lg:leading-[1.22]">{item.title}</h3>
              <p className="mt-1 text-sm leading-snug text-[#5b647e] lg:mt-1.5 lg:whitespace-pre-line lg:fs-15 lg:leading-[1.4]">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
