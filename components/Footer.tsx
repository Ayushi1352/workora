import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowUp, Clock } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import siteData from "@/data";

const company = siteData.company;

const socials = [
  { href: company.socials.linkedin, label: "LinkedIn", Icon: FaLinkedinIn },
  { href: company.socials.facebook, label: "Facebook", Icon: FaFacebookF },
  { href: company.socials.instagram, label: "Instagram", Icon: FaInstagram },
  { href: company.socials.youtube, label: "YouTube", Icon: FaYoutube },
];

const legalLinks = siteData.footer.legalLinks;

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-figtree text-base font-bold text-white lg:fs-21 lg:leading-[1.2]">
      {children}
      <span className="mt-2.5 block h-0.75 w-11 bg-[#1f6bf3] lg:mt-3.5" />
    </h3>
  );
}

function LinkList({ items, rowClass }: { items: { label: string; href: string }[]; rowClass: string }) {
  return (
    <ul className={`mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 md:mt-5 md:flex md:flex-col md:gap-3 lg:mt-4.75 lg:gap-0 ${rowClass}`}>
      {items.map((item) => (
        <li key={`${item.href}-${item.label}`}>
          <Link href={item.href} className="flex items-start gap-1.5 text-[13px] text-[#c9ced8] transition-colors hover:text-white md:items-center md:gap-2.5 lg:gap-3 lg:fs-17">
            <ChevronRight className="mt-0.5 size-4 shrink-0 md:mt-0 lg:size-4.5" strokeWidth={2.5} />
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

const divider = "lg:before:absolute lg:before:-left-10.5 lg:before:top-0 lg:before:h-76 lg:before:border-l lg:before:border-dashed lg:before:border-white/15";

export default function Footer() {
  return (
    <footer id="footer" className="fluid relative isolate overflow-hidden bg-[#0a1832] font-figtree text-[#d5d9e2]">
      <Image src={siteData.footer.background} alt="" fill unoptimized sizes="100vw" className="-z-20 object-cover object-[center_30%]" />
      {/* dark tint over the photo */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 backdrop-blur-[2px]"
        style={{ background: "linear-gradient(90deg, rgba(5,17,40,0.96) 0%, rgba(5,17,40,0.94) 40%, rgba(5,17,40,0.85) 100%)" }}
        aria-hidden="true"
      />

      <div className="wrap relative overflow-hidden px-5 py-10 sm:px-8 md:py-18 lg:h-107.25 lg:px-0 lg:pb-0 lg:pt-0">
        {/* blue arcs in the bottom-left corner */}
        <div className="pointer-events-none absolute -bottom-57 -left-37.5 -z-10 hidden size-75 rounded-full bg-[#164398] lg:block" />
        <div className="pointer-events-none absolute -bottom-26.75 -left-18.5 -z-10 hidden size-37 rounded-full bg-[#1f6afb] lg:block" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:block">
          <div className="lg:absolute lg:left-22 lg:top-13.25 lg:w-92">
            <Link href="/" className="inline-block">
              <Image
                src={company.footerLogo || company.logo}
                alt={company.name}
                width={320}
                height={80}
                unoptimized
                className="h-12 w-auto md:h-14 lg:h-20"
              />
            </Link>
            <p className="mt-3 max-w-md text-[13px] leading-relaxed md:mt-4 lg:ml-3.5 lg:mt-4.5 lg:max-w-none lg:fs-17.5 lg:leading-[1.47]">
              {company.description}
            </p>
            <div className="mt-4 flex gap-3 md:mt-5 md:gap-4 lg:ml-3.5 lg:mt-7.25">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full bg-[#16284f] text-white transition-colors hover:bg-[#1f6bf3] md:size-11 lg:size-12"
                >
                  <Icon className="size-4.5 lg:size-5" />
                </a>
              ))}
            </div>
          </div>

          <div className={`relative lg:absolute lg:left-140 lg:top-15.75 ${divider}`}>
            <ColumnTitle>{siteData.footer.quickLinksTitle}</ColumnTitle>
            <LinkList items={siteData.footer.quickLinks} rowClass="lg:*:h-8" />
          </div>

          <div className={`relative lg:absolute lg:left-212 lg:top-15.75 ${divider}`}>
            <ColumnTitle>{siteData.commonLabels.services}</ColumnTitle>
            <LinkList
              items={siteData.services.items.map((service) => ({ label: service.title, href: service.link }))}
              rowClass="lg:*:h-8"
            />
          </div>

          <div className={`relative lg:absolute lg:left-310 lg:top-15.75 ${divider}`}>
            <ColumnTitle>{siteData.footer.contactTitle}</ColumnTitle>
            <ul className="mt-4 grid grid-cols-1 gap-3 text-[13px] text-white sm:grid-cols-2 md:mt-5 md:grid-cols-1 md:gap-4 lg:mt-4.5 lg:flex lg:w-80 lg:flex-col lg:gap-3.5 lg:fs-16.5 lg:leading-[1.65]">
              {[
                {
                  Icon: FaMapMarkerAlt,
                  text: company.footerAddress,
                  wide: true,
                  href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.footerAddress)}`,
                  target: "_blank",
                },
                {
                  Icon: FaPhoneAlt,
                  text: company.phone,
                  href: `tel:${company.phone.replace(/[^0-9+]/g, "")}`,
                },
                {
                  Icon: FaEnvelope,
                  text: company.email,
                  href: `mailto:${company.email}`,
                },
                {
                  Icon: Clock,
                  text: `${company.workingHours}\n${company.workingHoursClosed}`,
                  wide: true,
                  href: "/contact-us",
                },
              ].map(({ Icon, text, wide, href, target }) => (
                <li key={text}>
                  <a
                    href={href}
                    target={target}
                    rel={target ? "noopener noreferrer" : undefined}
                    className={`group flex cursor-pointer items-start gap-3 transition-colors hover:text-[#8fb2ff] md:gap-2 lg:gap-4.25 ${
                      wide ? "items-start" : "items-center"
                    }`}
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#2563eb] text-white transition-all duration-200 group-hover:scale-105 group-hover:bg-[#1f6bf3] md:size-10 lg:size-11.5">
                      <Icon className="size-3.5 md:size-4 lg:size-5" />
                    </span>
                    <span className={`min-w-0 break-words whitespace-pre-line ${wide ? "lg:-mt-1.5" : ""}`}>{text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="wrap flex flex-col items-center gap-3 px-5 py-4 text-xs sm:px-8 sm:text-sm md:gap-4 md:py-6 lg:h-22 lg:flex-row lg:gap-0 lg:px-0 lg:py-0 lg:pl-25.5 lg:pr-10 lg:fs-15.5">
          <p className="text-center">
            © {siteData.footer.year} <span className="font-semibold text-white">{company.name}.</span> {siteData.footer.copyright}
          </p>
          <nav className="flex flex-wrap items-center justify-center lg:ml-auto">
            {legalLinks.map((link, i) => (
              <span key={link.href} className="flex items-center">
                {i > 0 && <span className="mx-4 h-3.5 w-px bg-white/25 lg:mx-5" />}
                <Link href={link.href} className="text-white transition-colors hover:text-[#8fb2ff]">
                  {link.label}
                </Link>
              </span>
            ))}
          </nav>
          <a
            href="#top"
            aria-label="Back to top"
            className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#2563eb] text-white transition-colors hover:bg-[#1d4fc0] lg:ml-13 lg:size-12"
          >
            <ArrowUp className="size-5 lg:size-6" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </footer>
  );
}
