import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Handshake, TrendingUp } from "lucide-react";
import siteData from "@/data";

const icons = [BriefcaseBusiness, TrendingUp, Handshake];

export default function CareerContent() {
  const { careerPage } = siteData;

  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-custom grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="relative aspect-4/3 overflow-hidden rounded-md lg:col-span-5">
            <Image
              src={careerPage.image}
              alt="Workplace team collaborating around a laptop"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-subtitle">{careerPage.sectionSubtitle}</h2>
            <h2 className="section-title mb-4">{careerPage.title}</h2>
            <p className="text-sm leading-relaxed text-gray-600">
              {careerPage.description}
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-[#f8fafc] py-14 md:py-16">
        <div className="container-custom grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {careerPage.highlights.map((highlight, index) => {
            const Icon = icons[index % icons.length];

            return (
              <article key={highlight.title} className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-primary">
                  <Icon size={22} />
                </span>
                <div>
                  <h3 className="mb-1 text-base font-bold text-dark heading-font">
                    {highlight.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {highlight.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom flex flex-col items-start justify-between gap-6 border-l-4 border-primary bg-[#f8fafc] p-6 sm:flex-row sm:items-center md:p-8">
          <div className="max-w-2xl">
            <h2 className="mb-2 text-2xl font-bold text-dark heading-font">
              {careerPage.contactTitle}
            </h2>
            <p className="text-sm leading-relaxed text-gray-600">
              {careerPage.contactDescription}
            </p>
          </div>
          <Link href={careerPage.ctaLink} className="btn-primary shrink-0">
            {careerPage.ctaText} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}