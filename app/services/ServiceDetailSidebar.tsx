import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import siteData from "@/data";

interface ServiceDetailSidebarProps {
  currentSlug: string;
}

export default function ServiceDetailSidebar({ currentSlug }: ServiceDetailSidebarProps) {
  const { helpBox } = siteData.serviceDetails;
  const { company } = siteData;
  const services = siteData.services.items;
  // The open service is listed first, as in the design
  const ordered = [...services].sort(
    (a, b) => Number(b.link.endsWith(`/${currentSlug}`)) - Number(a.link.endsWith(`/${currentSlug}`)),
  );

  return (
    <aside className="flex flex-col gap-6 font-figtree lg:gap-6.5">
      <div className="rounded-xl border border-[#e9edf4] bg-white px-4 pb-5 pt-5 lg:r-10 lg:px-2.25 lg:pb-6 lg:pt-5">
        <h3 className="px-2 font-exo text-xl font-bold text-[#0b0c1b] lg:px-3 lg:fs-22.5 lg:leading-[1.25]">
          {siteData.commonLabels.services}
        </h3>
        <ul className="mt-3 lg:mt-3.25">
          {ordered.map((service) => {
            const active = service.link.endsWith(`/${currentSlug}`);
            return (
              <li key={service.link}>
                <Link
                  href={service.link}
                  aria-current={active ? "page" : undefined}
                  className={`flex h-12 items-center justify-between gap-2 px-3 text-[15px] transition-colors lg:h-11.75 lg:fs-16.5 ${
                    active
                      ? "rounded bg-[#1d4fd8] font-semibold text-white lg:r-5 lg:fs-16"
                      : "border-b border-[#e9edf4] text-[#4a5370] hover:text-[#1d4fd8]"
                  }`}
                >
                  <span className="truncate">{service.title}</span>
                  {active ? (
                    <ArrowRight className="size-4.5 shrink-0" strokeWidth={2.5} />
                  ) : (
                    <ChevronRight className="size-4 shrink-0 text-[#8b93a7]" strokeWidth={2.25} />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="rounded-xl bg-[#f3f7fd] px-5 pb-6 pt-6 lg:r-10 lg:px-5.25 lg:pb-5.5 lg:pt-5.75">
        <span className="block text-sm font-bold uppercase tracking-[0.04em] text-[#1d4fd8] lg:fs-15 lg:leading-none">
          {helpBox.subtitle}
        </span>
        <h3 className="mt-2 font-exo text-2xl font-bold text-[#090a16] lg:mt-2.75 lg:fs-25.5 lg:leading-[1.2]">
          {helpBox.title}
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-[#6b7386] lg:mt-2.75 lg:whitespace-pre-line lg:fs-17 lg:leading-[1.427]">
          {helpBox.description}
        </p>

        <div className="mt-4 flex flex-col gap-2 text-base font-semibold text-[#0b1230] lg:mt-4.25 lg:fs-17">
          <a href={`tel:${company.phone.replace(/[^0-9+]/g, "")}`} className="flex items-center gap-4.5 transition-colors hover:text-[#1d4fd8]">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#d5e1fb] text-[#1d4fd8]">
              <FaPhoneAlt className="size-4" />
            </span>
            {company.phone}
          </a>
          <a href={`mailto:${company.email}`} className="flex items-center gap-4.5 transition-colors hover:text-[#1d4fd8]">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#d5e1fb] text-[#1d4fd8]">
              <FaRegEnvelope className="size-4.5" />
            </span>
            {company.email}
          </a>
        </div>

        <Link
          href={helpBox.ctaLink}
          className="mt-5 flex h-12 w-full items-center justify-center gap-3 rounded bg-[#1d4fd8] text-[15px] font-bold text-white transition-colors hover:bg-[#173fae] lg:mt-5 lg:h-12.75 lg:gap-4 lg:r-5 lg:fs-16"
        >
          {helpBox.ctaText}
          <ArrowRight className="size-5 lg:size-5.5" strokeWidth={2.5} />
        </Link>
      </div>
    </aside>
  );
}
