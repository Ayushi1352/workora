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

export default function PageBanner({
  title,
  image,
  variant = "standard",
  parentBreadcrumbs = [],
}: PageBannerProps) {
  const centered = variant === "centered";

  return (
    <section className={`relative flex w-full items-center overflow-hidden bg-dark ${centered ? "h-[260px] justify-center md:h-[320px]" : "h-50 md:h-100"}`}>
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className={`object-cover object-center ${centered ? "opacity-60 mix-blend-screen" : "opacity-50"}`}
      />
      <div className={`absolute inset-0 z-10 ${centered ? "bg-linear-to-r from-dark/90 via-dark/75 to-dark/90" : "bg-linear-to-r from-dark via-dark via-55% to-dark/45"}`} />
      <div className={`container-custom relative z-20 ${centered ? "text-center" : "w-full"}`}>
        <h1 className={`mb-3 font-bold text-white heading-font ${centered ? "text-3xl md:text-5xl" : "text-4xl md:text-6xl"}`}>
          {title}
        </h1>
        <div className={`flex items-center gap-2 text-sm font-medium text-gray-300 ${centered ? "justify-center" : ""}`}>
          <Link href="/" className="text-gray-300 transition-colors hover:text-primary">
            Home
          </Link>
          <ChevronRight size={14} className="text-gray-400" />
          {parentBreadcrumbs.map((parent) => (
            <Fragment key={parent.href}>
              <Link href={parent.href} className="transition-colors hover:text-white">
                {parent.title}
              </Link>
              <ChevronRight size={14} className="text-gray-400" />
            </Fragment>
          ))}
          <span className="text-white">{title}</span>
        </div>
      </div>
    </section>
  );
}