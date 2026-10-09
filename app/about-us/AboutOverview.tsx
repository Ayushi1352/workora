import AboutCollage from "@/components/AboutCollage";
import HighlightedText from "@/components/HighlightedText";
import siteData from "@/data";

const overview = siteData.aboutPage.overview;
const paragraphs: string[] = overview.paragraphs ?? [siteData.about.description];

export default function AboutOverview() {
  return (
    <section className="fluid relative overflow-hidden bg-white font-figtree">
      <div className="absolute bottom-24.75 left-0 hidden h-34.25 w-33.25 bg-[#cbd6ec] [clip-path:polygon(0_0,0_100%,100%_100%)] lg:block" />

      <div className="wrap flex flex-col gap-10 px-5 py-14 sm:px-8 lg:flex-row lg:items-start lg:gap-0 lg:px-0 lg:pb-32 lg:pl-15.5 lg:pt-20.5">
        <div className="mx-auto w-full max-w-xl shrink-0 lg:mx-0 lg:w-194.5 lg:max-w-none">
          <AboutCollage />
        </div>

        <div className="lg:ml-16.5 lg:w-185 lg:pt-15.5">
          <div className="flex items-center gap-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-brand lg:gap-5.75 lg:fs-16 lg:leading-none">
            <span className="h-0.5 w-8 shrink-0 bg-brand lg:h-0.75 lg:w-10" />
            {overview.sectionSubtitle}
          </div>

          <h2 className="mt-3 font-figtree text-[32px] font-semibold leading-[1.15] tracking-[-0.01em] text-[#081328] sm:text-[42px] lg:mt-4.5 lg:fs-60 lg:leading-[1.133]">
            <HighlightedText
              text={overview.title}
              highlight={overview.titleHighlight}
              className="block text-[#2d55a0] lg:fs-55 lg:leading-[1.2]"
            />
          </h2>

          <div className="mt-4 flex flex-col gap-3 text-[15px] leading-relaxed text-body sm:text-base lg:mt-5.75 lg:gap-2.75 lg:fs-20.25 lg:leading-[1.482]">
            {paragraphs.map((paragraph, i) => (
              <p key={i} className="lg:whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
