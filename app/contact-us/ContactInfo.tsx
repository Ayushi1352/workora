import { Mail, MapPin, Phone } from "lucide-react";
import siteData from "@/data";

const info = siteData.contactUsPage.infoCards;
const company = siteData.company;

const card = "flex items-start rounded-2xl border border-[#e9edf4] bg-white px-5 py-5 lg:r-14 lg:px-0 lg:py-0 lg:pl-7.25";
const circle = "flex size-14 shrink-0 items-center justify-center rounded-full bg-[#e6eefc] text-[#0f52d9] lg:size-18";
const title = "font-sans text-lg font-bold text-[#0b1230] lg:fs-21 lg:leading-[1.25]";
const value = "mt-1 block break-words text-base text-[#5b647e] lg:mt-1.5 lg:fs-19 lg:leading-[1.55]";

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-5 font-sans lg:gap-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:flex lg:gap-5.75">
        <div className={`${card} lg:h-27 lg:w-85.75 lg:pt-4.5`}>
          <span className={circle}>
            <Mail className="size-7 lg:size-9" strokeWidth={1.6} />
          </span>
          <div className="ml-5 min-w-0 lg:ml-6.5 lg:pt-1.75">
            <h3 className={title}>{info.emailLabel}</h3>
            <a href={`mailto:${company.email}`} className={`${value} transition-colors hover:text-[#0f52d9]`}>
              {company.email}
            </a>
          </div>
        </div>
        <div className={`${card} lg:h-27 lg:flex-1 lg:pt-4.5`}>
          <span className={circle}>
            <Phone className="size-7 lg:size-8.5" strokeWidth={1.6} />
          </span>
          <div className="ml-5 min-w-0 lg:ml-6.5 lg:pt-1.75">
            <h3 className={title}>{info.phoneLabel}</h3>
            <a href={`tel:${company.phone.replace(/[^0-9+]/g, "")}`} className={`${value} transition-colors hover:text-[#0f52d9]`}>
              {company.phone}
            </a>
          </div>
        </div>
      </div>

      <div className={`${card} lg:min-h-34.5 lg:pb-5 lg:pr-6 lg:pt-5`}>
        <span className={circle}>
          <MapPin className="size-7 lg:size-9" strokeWidth={1.6} />
        </span>
        <div className="ml-5 min-w-0 lg:ml-6.5 lg:pt-1.5">
          <h3 className={title}>{info.locationLabel}</h3>
          <p className={`${value} whitespace-pre-line lg:max-w-90`}>{info.location ?? company.headerAddress}</p>
        </div>
      </div>
    </div>
  );
}
