import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { ChevronRight } from "lucide-react";
import siteData from "@/data";

const home = siteData.navigation.find((item) => item.href === "/") ?? siteData.navigation[0];

interface PageBannerProps {
  title: string;
  image: string;
  parentBreadcrumbs?: { title: string; href: string }[];
}

export default function PageBanner({ title, image, parentBreadcrumbs = [] }: PageBannerProps) {
  return (
    <section className="fluid relative isolate overflow-hidden bg-[#0b1322] font-figtree text-white">
      <Image src={image} alt="" fill preload unoptimized sizes="100vw" className="-z-20 object-cover object-center" />
      {/* dark tint over the photo */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[rgba(8,13,24,0.5)]" aria-hidden="true" />

      <div className="wrap flex min-h-48 h-auto flex-col justify-center px-5 py-7 sm:h-72 sm:py-0 sm:px-8 lg:h-124 lg:justify-start lg:px-0 lg:pl-33 lg:pt-43.5">
        <h1 className="font-exo text-[24px] sm:text-5xl md:text-6xl lg:fs-92 lg:leading-[1.12] font-bold leading-[1.2] sm:leading-none tracking-[-0.01em]">
          {title}
        </h1>
        <nav
          aria-label="Breadcrumb"
          className="mt-2.5 flex flex-wrap items-center gap-1 text-[13px] sm:mt-4 sm:gap-1.5 sm:text-[15px] lg:mt-9 lg:gap-2 lg:fs-19 lg:leading-[1.37]"
        >
          <Link href={home.href} className="text-[#d3d8e2] transition-colors hover:text-white">
            {home.label}
          </Link>
          <ChevronRight className="size-3.5 sm:size-4 lg:size-5.5" strokeWidth={2.5} />
          {parentBreadcrumbs.map((parent) => (
            <Fragment key={parent.href}>
              <Link href={parent.href} className="text-[#d3d8e2] transition-colors hover:text-white">
                {parent.title}
              </Link>
              <ChevronRight className="size-3.5 sm:size-4 lg:size-5.5" strokeWidth={2.5} />
            </Fragment>
          ))}
          <span>{title}</span>
        </nav>
      </div>
    </section>
  );
}
