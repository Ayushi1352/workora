import Link from "next/link";
import { ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react";
import siteData from "@/data";

const page = siteData.thankYouPage;
const company = siteData.company;

const rays = [
  "left-[-18.5%] top-[14%] rotate-[58deg] bg-[#1b65f1]",
  "left-[-38%] top-[39%] rotate-[14deg] bg-[#a9c6fb]",
  "left-[-27%] top-[62%] -rotate-[28deg] bg-[#c9dcfc]",
  "right-[-18.5%] top-[14%] -rotate-[58deg] bg-[#1b65f1]",
  "right-[-38%] top-[39%] -rotate-[14deg] bg-[#a9c6fb]",
  "right-[-27%] top-[62%] rotate-[28deg] bg-[#c9dcfc]",
];

const dots = "hidden size-17 bg-[radial-gradient(circle,#d5e3fb_2.5px,transparent_3px)] bg-size-[24px_24px] lg:block";
const circle = "flex size-16 shrink-0 items-center justify-center rounded-full bg-[#e3eefd] text-[#1661f3] lg:size-22";
const title = "block font-bold text-[#181a20] lg:fs-19.25 lg:leading-[1.3]";
const muted = "block text-[15px] text-[#5b647e] lg:fs-17.25 lg:leading-[1.62]";
const strong = "block break-words text-base font-bold text-[#1661f3] lg:fs-19.25 lg:leading-[1.4]";

export default function ThankYouContent() {
  const cards = page.contactCards;

  return (
    <section className="fluid relative overflow-hidden bg-white font-sans">
      {/* soft decorations from the design */}
      <div className="pointer-events-none absolute -right-131 top-114.75 hidden size-180 rounded-full border-[calc(88*var(--u))] border-[#f2f7fe] lg:block" />
      <div className={`pointer-events-none absolute left-0 top-79.5 ${dots}`} />
      <div className={`pointer-events-none absolute -right-6 top-63.5 ${dots}`} />

      <div className="wrap relative px-5 py-14 text-center sm:px-8 lg:pb-24.5 lg:pl-18.5 lg:pr-20.75 lg:pt-22.5">
        <div className="relative mx-auto flex size-36 items-center justify-center rounded-full bg-[#e9f1fd] lg:size-54">
          {rays.map((ray) => (
            <span key={ray} className={`absolute h-1 w-[12%] rounded-full ${ray}`} />
          ))}
          <span className="flex size-22 items-center justify-center rounded-full bg-[#0a5cf0] text-white lg:size-33">
            <Check className="size-12 lg:size-18" strokeWidth={3.5} />
          </span>
        </div>

        <h2 className="mt-5 font-sans text-6xl font-extrabold leading-none tracking-[-0.06em] text-[#0b1230] lg:mt-4.5 lg:fs-90 lg:tracking-[-0.07em]">
          {page.headingPrefix}
          <span className="text-[#0a5cf0]">{page.headingHighlight}</span>
        </h2>
        <p className="mt-4 text-xl font-medium text-[#5b647e] lg:mt-3 lg:fs-28.5 lg:leading-[1.3]">{page.status}</p>
        <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-[#6b7386] lg:mt-4.25 lg:max-w-none lg:whitespace-pre-line lg:fs-22.25 lg:leading-[1.44]">
          {page.description}
        </p>
        <Link
          href="/"
          className="mt-7 inline-flex h-14 items-center justify-center gap-7 rounded-lg bg-[#0a5cf0] px-10 text-lg font-semibold text-white transition-colors hover:bg-[#084bc4] lg:mt-7.5 lg:h-17 lg:w-78.5 lg:gap-8 lg:r-9 lg:px-0 lg:fs-19.5"
        >
          {page.homeLink}
          <ArrowRight className="size-6 lg:size-7" strokeWidth={2} />
        </Link>

        <div className="mt-12 grid grid-cols-1 gap-8 rounded-2xl bg-[#f4f9fd] px-6 py-8 text-left md:grid-cols-2 lg:mt-12.5 lg:flex lg:h-44 lg:items-center lg:gap-0 lg:r-14 lg:px-0 lg:py-0 lg:pl-10">
          <a href={`tel:${company.phone.replace(/[^0-9+]/g, "")}`} className="flex items-center lg:w-117.75">
            <span className={circle}>
              <Phone className="size-7 lg:size-10" strokeWidth={1.75} />
            </span>
            <span className="ml-5 min-w-0 lg:ml-9.75">
              <span className={title}>{cards.phoneTitle}</span>
              <span className={`mt-1 lg:mt-1.5 ${muted}`}>{cards.phonePrompt}</span>
              <span className={strong}>{company.phone}</span>
            </span>
          </a>
          <a
            href={`mailto:${company.email}`}
            className="flex items-center lg:h-26 lg:w-126 lg:border-l lg:border-[#dbe5f3] lg:pl-17.5"
          >
            <span className={circle}>
              <Mail className="size-7 lg:size-10.5" strokeWidth={1.75} />
            </span>
            <span className="ml-5 min-w-0 lg:ml-9.75">
              <span className={title}>{cards.emailTitle}</span>
              <span className={`mt-1 lg:mt-1.5 ${muted}`}>{cards.emailPrompt}</span>
              <span className={strong}>{company.email}</span>
            </span>
          </a>
          <div className="flex items-center lg:h-26 lg:flex-1 lg:border-l lg:border-[#dbe5f3] lg:pl-17.5">
            <span className={circle}>
              <MapPin className="size-7 lg:size-10.5" strokeWidth={1.75} />
            </span>
            <span className="ml-5 min-w-0 lg:ml-9.75">
              <span className={title}>{cards.officeTitle}</span>
              <span className="mt-1 block whitespace-pre-line text-[15px] text-[#5b647e] lg:mt-1.5 lg:fs-18.5 lg:leading-[1.51]">
                {siteData.contactUsPage.infoCards.location}
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
