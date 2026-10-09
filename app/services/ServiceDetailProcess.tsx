import { ArrowRight } from "lucide-react";
import siteData from "@/data";

const process = siteData.serviceDetails.process;

export default function ServiceDetailProcess() {
  return (
    <div className="flex flex-col gap-8 font-figtree lg:flex-row lg:gap-0">
      <div className="lg:w-119.25 lg:shrink-0 lg:pt-4.25">
        <div className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.06em] text-[#1d4fd8] lg:gap-3.5 lg:fs-16 lg:leading-none">
          <span className="h-0.5 w-8 shrink-0 bg-[#1d4fd8] lg:h-0.75 lg:w-9.25" />
          {process.sectionSubtitle}
        </div>
        <h2 className="mt-3 font-exo text-[28px] font-bold leading-tight text-[#07091e] lg:mt-4 lg:fs-38 lg:leading-[1.2]">
          {process.title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[#6b7386] lg:mt-3.5 lg:w-110 lg:whitespace-pre-line lg:fs-15.5 lg:leading-[1.52]">
          {process.description}
        </p>
      </div>

      <ol className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-2 lg:flex lg:gap-0 lg:pt-3.25">
        {process.steps.map((step, i) => (
          <li key={step.number} className="relative lg:w-45.5">
            <span className="flex size-11 items-center justify-center rounded-full bg-[#1d4fd8] font-exo text-sm font-bold text-white lg:size-11.5 lg:fs-15">
              {step.number}
            </span>
            {i < process.steps.length - 1 && (
              <span className="absolute left-14.5 top-5.75 hidden h-px w-28 items-center justify-center bg-[#e1e6ee] lg:flex">
                <ArrowRight className="size-4.5 bg-white px-0.5 text-[#a9b3c5]" strokeWidth={2} />
              </span>
            )}
            <h3 className="mt-3 font-exo text-base font-bold leading-snug text-[#0b0c1b] lg:mt-3.75 lg:whitespace-pre-line lg:fs-16 lg:leading-[1.31]">
              {step.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-[#6b7386] lg:mt-2 lg:whitespace-pre-line lg:fs-14.5 lg:leading-[1.448]">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
