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

const usefulLinks = siteData.footer.usefulLinks;

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Sitemap", href: "/sitemap" },
];

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-figtree text-lg font-bold text-white lg:fs-21 lg:leading-[1.2]">
      {children}
      <span className="mt-2.5 block h-0.75 w-11 bg-[#1f6bf3] lg:mt-3.5" />
    </h3>
  );
}

function LinkList({ items, rowClass }: { items: { label: string; href: string }[]; rowClass: string }) {
  return (
    <ul className={`mt-5 flex flex-col gap-3 lg:mt-5.75 lg:gap-0 ${rowClass}`}>
      {items.map((item) => (
        <li key={`${item.href}-${item.label}`}>
          <Link href={item.href} className="flex items-center gap-2.5 text-[15px] text-[#c9ced8] transition-colors hover:text-white lg:gap-3 lg:fs-17">
            <ChevronRight className="size-4 shrink-0 lg:size-4.5" strokeWidth={2.5} />
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
      <Image src="/footer-bg.webp" alt="" fill unoptimized sizes="100vw" className="-z-20 object-cover" />

      <div className="wrap relative overflow-hidden px-5 pb-10 pt-12 sm:px-8 lg:h-107.25 lg:px-0 lg:pb-0 lg:pt-0">
        {/* blue arcs in the bottom-left corner */}
        <div className="pointer-events-none absolute -bottom-57 -left-37.5 -z-10 hidden size-75 rounded-full bg-[#164398] lg:block" />
        <div className="pointer-events-none absolute -bottom-26.75 -left-18.5 -z-10 hidden size-37 rounded-full bg-[#1f6afb] lg:block" />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:block">
          <div className="sm:col-span-2 lg:absolute lg:left-22 lg:top-13.25 lg:w-92">
            <Link href="/" className="inline-block">
              <Image
                src={company.footerLogo || company.logo}
                alt={company.name}
                width={320}
                height={80}
                unoptimized
                className="h-14 w-auto lg:h-20"
              />
            </Link>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed lg:ml-3.5 lg:mt-6.5 lg:max-w-none lg:fs-17.5 lg:leading-[1.47]">
              {company.description}
            </p>
            <div className="mt-5 flex gap-4 lg:ml-3.5 lg:mt-7.25">
              {socials.map(({ href, label, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex size-11 items-center justify-center rounded-full bg-[#16284f] text-white transition-colors hover:bg-[#1f6bf3] lg:size-12"
                >
                  <Icon className="size-4.5 lg:size-5" />
                </Link>
              ))}
            </div>
          </div>

          <div className={`relative lg:absolute lg:left-131.25 lg:top-16.25 ${divider}`}>
            <ColumnTitle>{siteData.footer.quickLinksTitle}</ColumnTitle>
            <LinkList items={siteData.footer.quickLinks} rowClass="lg:*:h-9" />
          </div>

          <div className={`relative lg:absolute lg:left-188.25 lg:top-16.25 ${divider}`}>
            <ColumnTitle>{siteData.commonLabels.services}</ColumnTitle>
            <LinkList
              items={siteData.services.items.map((service) => ({ label: service.title, href: service.link }))}
              rowClass="lg:*:h-8"
            />
          </div>

          <div className={`relative lg:absolute lg:left-273 lg:top-16.25 ${divider}`}>
            <ColumnTitle>{siteData.commonLabels.usefulLinks}</ColumnTitle>
            <LinkList items={usefulLinks} rowClass="lg:*:h-9" />
          </div>

          <div className={`relative lg:absolute lg:left-334 lg:top-16.25 ${divider}`}>
            <ColumnTitle>{siteData.footer.contactTitle}</ColumnTitle>
            <ul className="mt-5 flex flex-col gap-4 text-[15px] text-white lg:mt-4.5 lg:w-80 lg:gap-3.5 lg:fs-16.5 lg:leading-[1.65]">
              {[
                { Icon: FaMapMarkerAlt, text: company.footerAddress, wide: true },
                { Icon: FaPhoneAlt, text: company.phone },
                { Icon: FaEnvelope, text: company.email },
                { Icon: Clock, text: `${company.workingHours}\n${company.workingHoursClosed}`, wide: true },
              ].map(({ Icon, text, wide }) => (
                <li key={text} className={`flex gap-4 lg:gap-4.25 ${wide ? "items-start" : "items-center"}`}>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#2563eb] text-white lg:size-11.5">
                    <Icon className="size-4 lg:size-5" />
                  </span>
                  <span className={`whitespace-pre-line ${wide ? "lg:-mt-1.5" : ""}`}>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="wrap flex flex-col items-center gap-4 px-5 py-6 text-sm sm:px-8 lg:h-22 lg:flex-row lg:gap-0 lg:px-0 lg:py-0 lg:pl-25.5 lg:pr-10 lg:fs-15.5">
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
