import Image from "next/image";
import HighlightedText from "@/components/HighlightedText";
import siteData from "../../site.json";

export default function AboutOverview() {
  const { overview } = siteData.aboutPage;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Collage - 5 Columns */}
        <div className="lg:col-span-5 relative">
          {/* Decorative Dot Grid */}
          <div className="absolute -top-6 -left-6 w-24 h-24 -z-10 bg-[radial-gradient(#cbd5e1_2px,transparent_2px)] [background-size:12px_12px] opacity-75"></div>
          <div className="grid grid-cols-2 gap-4 items-center">
            {/* Left sub-column */}
            <div className="flex flex-col gap-4">
              <div className="relative h-[180px] sm:h-[200px] w-full rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={siteData.about.images.meeting1}
                  alt="Team Meeting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[180px] sm:h-[200px] w-full rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={siteData.about.images.meeting2}
                  alt="Workforce Discussion"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right sub-column */}
            <div className="flex flex-col gap-4">
              <div className="relative h-[250px] sm:h-[280px] w-full rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={siteData.about.images.woman}
                  alt="HR Executive"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>
              <div className="bg-primary text-white p-5 rounded-2xl shadow-md flex items-center justify-center gap-3 h-[120px]">
                <span className="text-4xl md:text-5xl font-bold">{siteData.about.experienceYears}</span>
                <span className="text-sm font-semibold leading-tight">
                  {siteData.about.experienceText}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - 7 Columns */}
        <div className="lg:col-span-7">
          <h5 className="text-primary font-semibold text-xs tracking-wider uppercase mb-3 flex items-center gap-2">
            <span className="w-6 h-[2px] bg-primary"></span>
            {overview.sectionSubtitle}
          </h5>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight heading-font">
            <HighlightedText
              text={overview.title}
              highlight={overview.titleHighlight}
              className="text-primary"
              breakBefore
            />
          </h2>

          <div className="text-gray-600 text-sm md:text-[15px] leading-relaxed">
            <p>{siteData.about.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
