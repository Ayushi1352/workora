import Image from "next/image";
import Link from "next/link";
import { ArrowRight, UsersRound, Goal, Handshake } from "lucide-react";
import siteData from "@/data";

interface ServiceDetailOverviewProps {
  overview?: {
    sectionSubtitle: string;
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    image: string;
  };
}

const icons: Record<string, typeof UsersRound> = {
  users: UsersRound,
  target: Goal,
  handshake: Handshake,
};

export default function ServiceDetailOverview({ overview: customOverview }: ServiceDetailOverviewProps) {
  const overview = customOverview || siteData.serviceDetails.overview;
  const features = siteData.serviceDetails.features;

  return (
    <div className="font-figtree">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-0">
        <div className="lg:w-153.5 lg:shrink-0">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.06em] text-[#3b4460] lg:gap-3.5 lg:pt-0.75 lg:fs-13.5 lg:leading-none">
            <span className="h-0.5 w-8 shrink-0 bg-[#1d4fd8] lg:h-0.75 lg:w-9.25" />
            {overview.sectionSubtitle}
          </div>
          <h2 className="mt-3 font-exo text-[30px] font-bold leading-[1.15] text-[#070a1d] sm:text-4xl lg:mt-4.5 lg:whitespace-pre-line lg:fs-42 lg:leading-[1.12]">
            {overview.title}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#6b7386] lg:mt-3.5 lg:w-140 lg:whitespace-pre-line lg:fs-19.25 lg:leading-[1.418]">
            {overview.description}
          </p>
          <Link
            href={overview.ctaLink}
            className="mt-6 inline-flex h-12 items-center gap-3 rounded bg-[#1d4fd8] px-6 text-[15px] font-bold text-white transition-colors hover:bg-[#173fae] lg:mt-5.5 lg:h-13.25 lg:gap-4.5 lg:r-5 lg:px-7.75 lg:fs-16.5"
          >
            {overview.ctaText}
            <ArrowRight className="size-5 lg:size-5.5" strokeWidth={2.5} />
          </Link>
        </div>

        <div className="relative aspect-[559/361] w-full overflow-hidden rounded-xl lg:h-90.25 lg:w-139.75 lg:shrink-0 lg:r-12">
          <Image
            src={overview.image}
            alt={overview.title}
            fill
            preload
            unoptimized
            sizes="(min-width:1024px) 34vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 rounded-xl bg-[#f3f7fd] p-6 sm:grid-cols-2 md:grid-cols-2 lg:mt-8.75 lg:flex lg:h-40 lg:items-center lg:gap-0 lg:r-10 lg:p-0 lg:pl-6.75">
        {features.map((item, i) => {
          const Icon = icons[item.icon] ?? Handshake;
          return (
            <div
              key={item.title}
              className={`flex items-center ${["lg:w-96.75", "lg:w-101.25", "lg:flex-1"][i] ?? "lg:flex-1"} ${
                i > 0 ? "lg:h-24 lg:border-l lg:border-[#dfe6f1] lg:pl-9.25" : ""
              }`}
            >
              <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#e3ecfd] text-[#1d4fd8] lg:size-20.5">
                <Icon className="size-7 lg:size-10" strokeWidth={1.75} />
              </span>
              <div className="ml-4 lg:ml-7.25">
                <h3 className="font-exo text-base font-bold text-[#070a1d] lg:fs-19.5 lg:leading-[1.25]">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[#6b7386] lg:mt-2 lg:whitespace-pre-line lg:fs-17.75 lg:leading-[1.41]">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
