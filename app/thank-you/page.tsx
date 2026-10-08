import Link from "next/link";
import { ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import siteData from "../../site.json";

export const metadata = siteData.thankYouPage.meta;

export default function ThankYouPage() {
  const { banner, contactCards, description, headingHighlight, headingPrefix, homeLink, status } = siteData.thankYouPage;
  const { infoCards } = siteData.contactUsPage;
  const { company } = siteData;

  return (
    <div>
      <PageBanner {...banner} />

      <section className="relative overflow-hidden bg-white py-12 sm:py-16">
        <div className="pointer-events-none absolute -right-36 bottom-0 h-72 w-72 rounded-full border-36 border-[#eff6ff] sm:-right-24 sm:h-96 sm:w-96" />
        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-[#eaf3ff] sm:mb-5 sm:h-28 sm:w-28">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-blue-200 sm:h-18 sm:w-18">
                <Check size={38} strokeWidth={3} aria-hidden="true" />
              </div>
            </div>
            <h2 className="text-4xl font-bold leading-tight text-dark heading-font sm:text-5xl">
              {headingPrefix}<span className="text-primary">{headingHighlight}</span>
            </h2>
            <p className="mt-2 text-lg font-medium text-slate-600">
              {status}
            </p>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-500">
              {description}
            </p>
            <Link
              href="/"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
            >
              {homeLink} <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 divide-y divide-blue-100 rounded-lg bg-[#f3f8ff] px-2 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-0">
            <a
              href={`tel:${company.phone.replace(/[^0-9+]/g, "")}`}
              className="flex min-h-24 items-center gap-4 px-4 py-4 sm:px-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-light text-primary">
                <Phone size={21} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-slate-900">{contactCards.phoneTitle}</span>
                <span className="mt-1 block text-xs text-slate-500">{contactCards.phonePrompt}</span>
                <span className="block wrap-break-word text-xs font-semibold text-primary">{company.phone}</span>
              </span>
            </a>
            <a
              href={`mailto:${company.email}`}
              className="flex min-h-24 items-center gap-4 px-4 py-4 sm:px-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-light text-primary">
                <Mail size={21} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-slate-900">{contactCards.emailTitle}</span>
                <span className="mt-1 block text-xs text-slate-500">{contactCards.emailPrompt}</span>
                <span className="block break-all text-xs font-semibold text-primary">{company.email}</span>
              </span>
            </a>
            <div className="flex min-h-24 items-center gap-4 px-4 py-4 sm:px-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-light text-primary">
                <MapPin size={21} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-slate-900">{contactCards.officeTitle}</span>
                <span className="mt-1 block text-xs leading-relaxed text-slate-500">{infoCards.location}</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}