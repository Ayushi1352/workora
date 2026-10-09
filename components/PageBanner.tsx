import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { ChevronRight } from "lucide-react";

interface PageBannerProps {
  title: string;
  image: string;
  variant?: string;
  parentBreadcrumbs?: { title: string; href: string }[];
}

export default function PageBanner({ title, image, variant = "standard", parentBreadcrumbs = [] }: PageBannerProps) {
  const centered = variant === "centered";

  return (
    <section className="fluid relative isolate overflow-hidden bg-[#0b1322] font-figtree text-white">
      <Image src={image} alt="" fill preload unoptimized sizes="100vw" className="-z-10 object-cover object-center" />

      <div
        className={`wrap flex h-56 flex-col justify-center px-5 sm:h-72 sm:px-8 lg:h-124 lg:justify-start lg:px-0 lg:pl-33 lg:pt-43.5 ${
          centered ? "items-center text-center lg:pl-0" : ""
        }`}
      >
        <h1 className="font-exo text-[40px] font-bold leading-none tracking-[-0.01em] sm:text-6xl lg:fs-92 lg:leading-[1.12]">
          {title}
        </h1>
        <nav
          aria-label="Breadcrumb"
          className="mt-4 flex flex-wrap items-center gap-1.5 text-[15px] lg:mt-9 lg:gap-2 lg:fs-20 lg:leading-[1.3]"
        >
          <Link href="/" className="text-[#d3d8e2] transition-colors hover:text-white">
            Home
          </Link>
          <ChevronRight className="size-4 lg:size-5.5" strokeWidth={2.5} />
          {parentBreadcrumbs.map((parent) => (
            <Fragment key={parent.href}>
              <Link href={parent.href} className="text-[#d3d8e2] transition-colors hover:text-white">
                {parent.title}
              </Link>
              <ChevronRight className="size-4 lg:size-5.5" strokeWidth={2.5} />
            </Fragment>
          ))}
          <span>{title}</span>
        </nav>
      </div>
    </section>
  );
}
