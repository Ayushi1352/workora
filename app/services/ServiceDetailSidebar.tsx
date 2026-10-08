import Link from "next/link";
import { Phone, Mail, ArrowRight, ChevronRight } from "lucide-react";
import siteData from "../../site.json";

interface ServiceDetailSidebarProps {
  currentSlug: string;
}

export default function ServiceDetailSidebar({ currentSlug }: ServiceDetailSidebarProps) {
  const { helpBox } = siteData.serviceDetails;
  const { company } = siteData;
  const services = siteData.services.items;

  return (
    <aside className="space-y-4">
      {/* Services Navigation Card */}
      <div className="rounded-md border border-gray-100 bg-white p-4 shadow-sm">
        <h3 className="mb-3 text-base font-bold text-dark heading-font">
          {siteData.commonLabels.services}
        </h3>
        <div className="space-y-1">
          {services.map((service) => {
            const slug = service.link.split("/").at(-1);
            const isActive = currentSlug === slug;

            if (isActive) {
              return (
                <div
                  key={service.link}
                  className="flex cursor-default items-center justify-between rounded-sm bg-primary p-2.5 text-xs font-semibold text-white shadow-sm md:text-sm"
                >
                  <span>{service.title}</span>
                  <ArrowRight size={15} />
                </div>
              );
            }

            return (
              <Link
                key={service.link}
                href={service.link}
                className="group flex items-center justify-between rounded-sm p-2.5 text-xs font-medium text-gray-700 transition-colors hover:bg-blue-50/60 hover:text-primary md:text-sm"
              >
                <span>{service.title}</span>
                <ChevronRight size={15} className="text-gray-400 group-hover:text-primary transition-colors" />
              </Link>
            );
          })}
        </div>
      </div>

      {/* Need Help Card */}
      <div className="rounded-md border border-gray-100 bg-[#f8fafc] p-4 shadow-sm">
        <span className="text-primary font-bold text-[11px] tracking-wider uppercase block mb-1">
          {helpBox.subtitle}
        </span>
        <h3 className="text-xl font-bold text-dark mb-2 heading-font">
          {helpBox.title}
        </h3>
        <p className="mb-4 text-xs leading-relaxed text-gray-500">
          {helpBox.description}
        </p>

        <div className="mb-4 space-y-2">
          <a
            href={`tel:${company.phone.replace(/[^0-9+]/g, '')}`}
            className="flex items-center gap-3 text-dark hover:text-primary transition-colors text-xs font-semibold"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100/70 text-primary">
              <Phone size={14} />
            </div>
            <span>{company.phone}</span>
          </a>

          <a
            href={`mailto:${company.email}`}
            className="flex items-center gap-3 text-dark hover:text-primary transition-colors text-xs font-semibold"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100/70 text-primary">
              <Mail size={14} />
            </div>
            <span>{company.email}</span>
          </a>
        </div>

        <Link
          href={helpBox.ctaLink}
            className="flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
        >
          {helpBox.ctaText} <ArrowRight size={14} />
        </Link>
      </div>
    </aside>
  );
}
