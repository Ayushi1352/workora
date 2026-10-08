import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import siteData from "../../site.json";

export default function SitemapContent() {
  const { siteMapPage } = siteData;
  const sections = [
    { title: siteData.commonLabels.mainPages, items: siteData.navigation },
    {
      title: siteData.commonLabels.services,
      items: siteData.services.items.map(({ title, link }) => ({ label: title, href: link })),
    },
    { title: siteData.commonLabels.usefulLinks, items: siteMapPage.utilityLinks },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-10">
          <h2 className="text-subtitle">{siteMapPage.sectionSubtitle}</h2>
          <h2 className="section-title mb-4">{siteMapPage.title}</h2>
          <p className="max-w-2xl text-sm leading-relaxed text-gray-600">
            {siteMapPage.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <section key={section.title} className="border-t-2 border-primary pt-4">
              <h3 className="mb-4 text-lg font-bold text-dark heading-font">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-center justify-between gap-3 text-sm text-gray-600 transition-colors hover:text-primary"
                    >
                      <span className="flex min-w-0 items-center gap-2">
                        <ChevronRight size={14} className="shrink-0 text-primary" />
                        <span className="wrap-break-word">{item.label}</span>
                      </span>
                      <ArrowRight size={14} className="shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}