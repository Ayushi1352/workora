import { ArrowRight } from "lucide-react";
import siteData from "@/data";

const process = siteData.getAQuotePage.process;

/* Step and arrow positions follow the design, measured from the content edge */
const stepLeft = ["lg:left-90", "lg:left-155.75", "lg:left-229.5", "lg:left-304.75"];
const arrowLeft = ["lg:left-46.5", "lg:left-59.5", "lg:left-56.5"];

export default function QuoteProcess() {
  return (
    <section className="fluid bg-[#f3f7fd] font-sans">
      <div className="wrap px-5 py-10 sm:px-8 lg:px-0 lg:py-0 lg:pl-36">
        <div className="relative flex flex-col gap-8 lg:block lg:h-44.75">
          <div className="lg:pt-7.25">
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.03em] text-[#4a5370] lg:fs-13 lg:leading-[1.15]">
              <span className="h-0.5 w-8.5 shrink-0 bg-[#0f52d9]" />
              {process.sectionSubtitle}
            </div>
            <h2 className="mt-2 whitespace-pre-line font-exo text-3xl font-bold leading-[1.1] text-[#0b1030] lg:mt-2.25 lg:fs-33.5 lg:leading-[1.1]">
              {process.title}
            </h2>
          </div>

          <ol className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-2 lg:block">
            {process.steps.map((step, i) => (
              <li key={step.number} className={`relative lg:absolute lg:top-6 ${stepLeft[i] ?? ""}`}>
                <span className="flex size-11 items-center justify-center rounded-full bg-[#0f52d9] font-exo text-base font-bold text-white lg:fs-17">
                  {step.number}
                </span>
                {i < process.steps.length - 1 && (
                  <ArrowRight className={`absolute top-5 hidden size-6.5 text-[#9aa5b8] lg:block ${arrowLeft[i] ?? ""}`} strokeWidth={1.5} />
                )}
                <h3 className="mt-2 font-sans text-base font-bold text-[#0b1030] lg:mt-1.5 lg:whitespace-nowrap lg:fs-16 lg:leading-[1.38]">
                  {step.title}
                </h3>
                <p className="mt-1 text-[15px] leading-snug text-[#5b647e] lg:whitespace-pre lg:fs-15.5 lg:leading-[1.39]">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
