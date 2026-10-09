import Image from "next/image";
import { FaUsers, FaHandshake } from "react-icons/fa";
import { FaChartSimple, FaFileLines } from "react-icons/fa6";
import HighlightedText from "./HighlightedText";
import siteData from "@/data";

const stats = siteData.stats;

const icons: Record<string, typeof FaUsers> = {
  users: FaUsers,
  "file-text": FaFileLines,
  chart: FaChartSimple,
  handshake: FaHandshake,
};

/* Column start positions follow the design: 168 / 540 / 917 / 1309 px on a 1686px page */
const columnWidths = ["lg:w-93", "lg:w-94.25", "lg:w-98", "lg:flex-1"];

interface StatsProps {
  /** Kept for existing callers; the design is identical on Home and About. */
  variant?: "home" | "about";
}

export default function Stats(_props: StatsProps) {
  return (
    <section className="fluid relative isolate overflow-hidden bg-[#0f1b2d] font-figtree text-white">
      <Image src={stats.background} alt="" fill unoptimized sizes="100vw" className="-z-10 object-cover" />

      <div className="wrap relative px-5 py-14 sm:px-8 lg:h-140.75 lg:px-0 lg:py-0 lg:pl-42">
        <div className="lg:absolute lg:left-42 lg:top-20.5">
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90 lg:gap-4.25 lg:fs-11.5 lg:leading-none">
            <span className="h-0.5 w-7 shrink-0 bg-[#6f9bf0] lg:w-8" />
            {stats.sectionSubtitle}
          </div>
          <h2 className="mt-3 font-figtree text-[30px] font-medium leading-[1.15] tracking-[-0.01em] sm:text-[40px] lg:mt-4.5 lg:fs-51 lg:leading-[1.12]">
            <HighlightedText text={stats.title} highlight={stats.titleHighlight} className="block text-[#6f9bf0]" />
          </h2>
        </div>

        <p className="mt-4 max-w-md text-sm leading-relaxed text-white/90 lg:absolute lg:left-290 lg:top-37.5 lg:mt-0 lg:w-95 lg:max-w-none lg:fs-13.5 lg:leading-[1.93]">
          {stats.description}
        </p>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-9 lg:absolute lg:left-42 lg:right-0 lg:top-63.5 lg:mt-0 lg:flex lg:gap-0">
          {stats.items.map((item, i) => {
            const Icon = icons[item.icon] ?? FaUsers;
            return (
              <div key={item.label} className={`relative ${columnWidths[i] ?? "lg:flex-1"}`}>
                {i > 0 && <span className="absolute -left-21.75 top-3.5 hidden h-49.25 w-px bg-white/25 lg:block" />}
                <span className="flex size-14 items-center justify-center rounded-full border border-white/30 bg-white/10 text-[#c5d5fb] lg:ml-1.5 lg:size-21">
                  <Icon className="size-6 lg:size-9.5" />
                </span>
                <div className="mt-3 text-[40px] font-bold leading-none tracking-[-0.01em] sm:text-5xl lg:mt-4 lg:fs-70">
                  {item.number}
                </div>
                <div className="mt-2 flex items-center gap-3 text-sm lg:mt-2.5 lg:gap-5 lg:fs-20 lg:leading-[1.4]">
                  <span className="h-0.5 w-5 shrink-0 bg-[#6f9bf0] lg:w-8.75" />
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
