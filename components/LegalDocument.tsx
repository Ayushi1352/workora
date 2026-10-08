import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import PageBanner from "./PageBanner";
import siteData from "../site.json";

type LegalPageData = {
  banner: {
    title: string;
    image: string;
  };
  sectionSubtitle: string;
  title: string;
  lastUpdated: string;
  intro: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
};

interface LegalDocumentProps {
  page: LegalPageData;
}

export default function LegalDocument({ page }: LegalDocumentProps) {
  const { company } = siteData;
  const { support } = siteData.legalPages;

  return (
    <>
      <PageBanner {...page.banner} />

      <section className="section-padding bg-white">
        <div className="container-custom grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <article className="lg:col-span-9">
            <h2 className="text-subtitle">{page.sectionSubtitle}</h2>
            <h2 className="section-title mb-3">{page.title}</h2>
            <p className="mb-2 text-xs font-medium text-gray-500">
              Last updated: {page.lastUpdated}
            </p>
            <p className="mb-8 max-w-4xl text-sm leading-relaxed text-gray-600">
              {page.intro}
            </p>

            <div className="space-y-7">
              {page.sections.map((section, index) => (
                <section key={section.heading}>
                  <h3 className="mb-2 text-lg font-bold text-dark heading-font">
                    <span className="mr-2 text-primary">{String(index + 1).padStart(2, "0")}</span>
                    {section.heading}
                  </h3>
                  <div className="space-y-3 text-sm leading-relaxed text-gray-600">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>

          <aside className="lg:col-span-3">
            <div className="rounded-md border border-gray-100 bg-[#f8fafc] p-5">
              <span className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-primary">
                {support.badge}
              </span>
              <h3 className="mb-2 text-lg font-bold text-dark heading-font">
                {support.title}
              </h3>
              <p className="mb-5 text-xs leading-relaxed text-gray-600">
                {support.description}
              </p>
              <div className="mb-5 space-y-3">
                <a
                  href={`tel:${company.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center gap-3 text-xs font-semibold text-dark transition-colors hover:text-primary"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100/70 text-primary">
                    <Phone size={14} />
                  </span>
                  <span>{company.phone}</span>
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-3 text-xs font-semibold text-dark transition-colors hover:text-primary"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100/70 text-primary">
                    <Mail size={14} />
                  </span>
                  <span className="break-all">{company.email}</span>
                </a>
              </div>
              <Link
                href={support.ctaLink}
                className="flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-3 py-2.5 text-center text-xs font-semibold text-white transition-colors hover:bg-blue-700"
              >
                {support.ctaText} <ArrowRight size={14} />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}