import Link from "next/link";
import { ArrowRight, Mail, Phone, Plus } from "lucide-react";
import siteData from "../../site.json";

export default function FAQList() {
  const { faqPage, company } = siteData;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-subtitle">{faqPage.sectionSubtitle}</h2>
          <h2 className="section-title mb-4">{faqPage.title}</h2>
          <p className="max-w-2xl text-sm leading-relaxed text-gray-600">
            {faqPage.description}
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-9">
            {faqPage.categories.map((category) => (
              <section key={category.id} id={category.id} className="scroll-mt-24">
                <h3 className="mb-3 border-b border-gray-200 pb-3 text-lg font-bold text-dark heading-font">
                  {category.title}
                </h3>
                <div className="divide-y divide-gray-100 border-y border-gray-100">
                  {category.items.map((item) => (
                    <details key={item.question} className="group py-4">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-dark marker:hidden [&::-webkit-details-marker]:hidden">
                        <span>{item.question}</span>
                        <Plus
                          size={18}
                          className="shrink-0 text-primary transition-transform duration-200 group-open:rotate-45"
                          aria-hidden="true"
                        />
                      </summary>
                      <p className="max-w-3xl pt-3 pr-8 text-sm leading-relaxed text-gray-600">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <aside className="lg:col-span-3">
            <div className="rounded-md border border-gray-100 bg-[#f8fafc] p-5">
              <span className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-primary">
                {faqPage.support.subtitle}
              </span>
              <h3 className="mb-2 text-lg font-bold text-dark heading-font">
                {faqPage.support.title}
              </h3>
              <p className="mb-5 text-xs leading-relaxed text-gray-600">
                {faqPage.support.description}
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
                href={faqPage.support.ctaLink}
                className="flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-3 py-2.5 text-center text-xs font-semibold text-white transition-colors hover:bg-blue-700"
              >
                {faqPage.support.ctaText} <ArrowRight size={14} />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}