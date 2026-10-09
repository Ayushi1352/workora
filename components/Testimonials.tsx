import Image from "next/image";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import HighlightedText from "./HighlightedText";
import siteData from "@/data";

const testimonials = siteData.testimonials;

export default function Testimonials() {
  return (
    <section className="fluid relative isolate overflow-hidden bg-[#0d1b33] font-pop text-white">
      <Image src={testimonials.background} alt="" fill unoptimized sizes="100vw" className="-z-10 object-cover" />

      <div className="wrap px-5 py-14 sm:px-8 lg:h-147 lg:px-58.5 lg:pb-0 lg:pt-12.25">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 text-xs font-medium uppercase tracking-[0.1em] lg:gap-4 lg:fs-14 lg:leading-none">
            <span className="h-px w-8 bg-white/80 lg:w-9.25" />
            {testimonials.sectionSubtitle}
            <span className="h-px w-8 bg-white/80 lg:w-9.25" />
          </div>
          <h2 className="mt-3 font-pop text-[28px] font-semibold leading-[1.2] sm:text-[38px] lg:mt-4.25 lg:whitespace-pre-line lg:fs-44 lg:leading-[1.205]">
            <HighlightedText text={testimonials.title} highlight={testimonials.titleHighlight} className="text-[#2f6df6]" />
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed lg:mt-1.25 lg:max-w-none lg:whitespace-pre-line lg:fs-15 lg:leading-[1.333]">
            {testimonials.description}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:mt-5.75 lg:grid-cols-3">
          {testimonials.items.map((item) => (
            <article key={item.name} className="rounded-xl bg-white px-6 pb-5 pt-5 text-[#5c657d] lg:r-10 lg:px-6.25 lg:pb-4.25 lg:pt-4">
              <FaQuoteRight className="size-6 text-[#c9d6f7] lg:size-6.5" />
              <p className="mt-3 text-sm leading-relaxed lg:mt-1.75 lg:whitespace-pre-line lg:fs-14.5 lg:leading-[1.31]">{item.quote}</p>
              <span className="mt-3 block h-0.5 w-5.5 bg-[#2563eb] lg:mt-1.75" />
              <div className="mt-3 flex items-center lg:mt-0.5">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  unoptimized
                  className="size-16 shrink-0 rounded-full object-cover lg:size-19.5"
                />
                <div className="ml-5 lg:ml-6">
                  <h3 className="font-pop text-[15px] font-semibold text-[#0b1230] lg:fs-15.5 lg:leading-[1.2]">{item.name}</h3>
                  <p className="mt-0.5 text-xs lg:fs-12.5 lg:leading-[1.4]">{item.role}</p>
                  <div className="mt-1.5 flex gap-1.25 text-[#2563eb] lg:mt-2">
                    {Array.from({ length: item.rating }, (_, i) => (
                      <FaStar key={i} className="size-3.5 lg:size-4" />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-7 flex items-center justify-center gap-4 lg:mt-8.25">
          <span className="size-2.75 rounded-full bg-[#2563eb]" />
          <span className="size-1.5 rounded-full bg-white/45" />
          <span className="size-1.5 rounded-full bg-white/45" />
        </div>
      </div>
    </section>
  );
}
