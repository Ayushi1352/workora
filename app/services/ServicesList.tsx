import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HighlightedText from "@/components/HighlightedText";
import siteData from "../../site.json";

export default function ServicesList() {
  const { services } = siteData;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom mb-10 text-center">
        <h5 className="text-primary font-semibold text-xs tracking-wider uppercase mb-3 flex items-center justify-center gap-2">
          <span className="w-6 h-[2px] bg-primary"></span>
          {services.sectionSubtitle}
          <span className="w-6 h-[2px] bg-primary"></span>
        </h5>
        <h2 className="mx-auto mb-4 max-w-2xl text-3xl font-bold leading-tight text-dark heading-font md:text-4xl">
          <HighlightedText
            text={services.title}
            highlight={services.titleHighlight}
            className="text-primary"
            breakBefore
          />
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-600">
          {services.description}
        </p>
      </div>

      <div className="container-custom grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {services.items.map((service, i) => (
          <div
            key={i}
            className="group flex flex-col overflow-hidden rounded-md border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
          >
            <div className="relative h-44 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-grow flex-col p-3">
              <h3 className="mb-2 text-sm font-bold text-dark transition-colors group-hover:text-primary heading-font">
                {service.title}
              </h3>
              <p className="mb-3 flex-grow text-xs leading-relaxed text-gray-500">
                {service.description}
              </p>
              <Link
                href={service.link}
                className="inline-flex self-start items-center gap-2 rounded-sm bg-primary px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-blue-700"
              >
                {siteData.commonLabels.readMore} <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
